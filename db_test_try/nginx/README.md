## 安裝SSL
- sudo apt update
- sudo apt install certbot python3-certbot-nginx
- sudo certbot --nginx
- sudo certbot renew --dry-run
Please enter the domain name(s) you would like on your certificate (comma and/or space separated) (Enter 'c' to cancel):
輸入註冊的網域

查看完整證書鏈：
sudo cat /etc/letsencrypt/live/test.terrypan.online/fullchain.pem
查看服務器證書：
sudo cat /etc/letsencrypt/live/test.terrypan.online/cert.pem
查看中間證書：
sudo cat /etc/letsencrypt/live/test.terrypan.online/chain.pem
查看私鑰：
sudo cat /etc/letsencrypt/live/test.terrypan.online/privkey.pem

## 有權重&https
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;
events {
    worker_connections 1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_buffers 16 8k;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_disable "msie6";
    upstream backend {
        server project:5000 weight=10; # 主服務器上的應用
        server api2.resoniatech.com:5000 weight=2;  # 備用服務器
    }
    server {
        listen 80;
        server_name api.resoniatech.com;
        return 301 https://$host$request_uri;
    }
    server {
        listen 443 ssl;
        server_name api.resoniatech.com;
        ssl_certificate /etc/nginx/ssl/CRT.txt;
        ssl_certificate_key /etc/nginx/ssl/Key.txt;
        ssl_trusted_certificate /etc/nginx/ssl/CABUNDLE.txt;
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout 5m;
        ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-CHACHA20-POLY1305';
        ssl_prefer_server_ciphers on;
        ssl_protocols TLSv1.2 TLSv1.3;
        location / {
            root /usr/share/nginx/html;
            index index.html;
            try_files $uri $uri/ /index.html;
        }
        location ~* \.(?:js|css|png|jpg|jpeg|gif|ico|woff|woff2|ttf|svg)$ {
            root /usr/share/nginx/html;
            add_header Cache-Control "public, max-age=31536000, immutable";
            try_files $uri =404;
        }
        location /api {
            proxy_pass https://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}

## 有https後端
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;
events {
    worker_connections 1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_buffers 16 8k;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_disable "msie6";
    upstream backend {
        server project:5000 down; # 主服務器上的應用
        server api2.resoniatech.com:5000 backup;  # 備用服務器
    }
    server {
        listen 80;
        server_name api.resoniatech.com;
        return 301 https://$host$request_uri;
    }
    server {
        listen 443 ssl;
        server_name api.resoniatech.com;
        ssl_certificate /etc/nginx/ssl/CRT.txt;
        ssl_certificate_key /etc/nginx/ssl/Key.txt;
        ssl_trusted_certificate /etc/nginx/ssl/CABUNDLE.txt;
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout 5m;
        ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-CHACHA20-POLY1305';
        ssl_prefer_server_ciphers on;
        ssl_protocols TLSv1.2 TLSv1.3;
        location / {
            root /usr/share/nginx/html;
            index index.html;
            try_files $uri $uri/ /index.html;
        }
        location ~* \.(?:js|css|png|jpg|jpeg|gif|ico|woff|woff2|ttf|svg)$ {
            root /usr/share/nginx/html;
            add_header Cache-Control "public, max-age=31536000, immutable";
            try_files $uri =404;
        }
        location /api {
            proxy_pass https://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}

## proxy_pass api2
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;
events {
    worker_connections 1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_buffers 16 8k;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_disable "msie6";
    server {
        listen 80;
        server_name api.resoniatech.com;
        return 301 https://$host$request_uri;
    }
    server {
        listen 443 ssl;
        server_name api.resoniatech.com;
        ssl_certificate /etc/nginx/ssl/CRT.txt;
        ssl_certificate_key /etc/nginx/ssl/Key.txt;
        ssl_trusted_certificate /etc/nginx/ssl/CABUNDLE.txt;
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout 5m;
        ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-CHACHA20-POLY1305';
        ssl_prefer_server_ciphers on;
        ssl_protocols TLSv1.2 TLSv1.3;
        location / {
            proxy_pass http://api2.resoniatech.com;
            root /usr/share/nginx/html;
            index index.html;
            try_files $uri $uri/ /index.html;
        }
        location ~* \.(?:js|css|png|jpg|jpeg|gif|ico|woff|woff2|ttf|svg)$ {
            root /usr/share/nginx/html;
            add_header Cache-Control "public, max-age=31536000, immutable";
            try_files $uri =404;
        }
        location /api {
            proxy_pass http://project:5001;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
    
}

## 完整反向代理整個網站
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_buffers 16 8k;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_disable "msie6";
    
    upstream backend {
        server project:5000 weight=10; # 主服務器上的應用
        server api2.resoniatech.com:5000 weight=2;  # 備用服務器
    }
    upstream httpds {
        server api2.resoniatech.com:443 weight=10;
        server test.resoniatech.com:443 weight=1;
    }
    
    server {
        listen 80;
        server_name api.resoniatech.com;
        return 301 https://$host$request_uri;
    }

    server {
        listen 443 ssl;
        server_name api.resoniatech.com;

        ssl_certificate /etc/nginx/ssl/CRT.txt;
        ssl_certificate_key /etc/nginx/ssl/Key.txt;
        ssl_trusted_certificate /etc/nginx/ssl/CABUNDLE.txt;

        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout 5m;

        ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-CHACHA20-POLY1305';
        ssl_prefer_server_ciphers on;
        ssl_protocols TLSv1.2 TLSv1.3;

        location / {
            proxy_pass https://httpds;
        }
        location /api {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
    
}

