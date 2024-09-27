using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace db_test_try.Entity.TableTest
{
    public class ColumnsTest
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(20)]
        public string? Location { get; set; }

        [Required]
        public DateTime Time { get; set; }

        [Column(TypeName = "decimal(6, 1)")]
        public decimal SolarRadiation_Wm2 { get; set; }
    }
}
