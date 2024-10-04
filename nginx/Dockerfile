# 使用官方的 Nginx 映像檔
FROM nginx:latest

# 複製 SSL 證書並更改副檔名為 .pem
COPY ./nginx/ssl /etc/nginx/ssl

# 複製 Nginx 配置文件
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# 在 Nginx 映像檔中添加 dist 目錄
COPY ./dist /usr/share/nginx/html

# 暴露 443 端口供 HTTPS 使用
EXPOSE 80 443
# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]
