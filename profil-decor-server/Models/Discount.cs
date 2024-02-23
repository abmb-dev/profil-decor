using System.ComponentModel.DataAnnotations;

namespace profil_decor_server.Models
{
    public class Discount
    {
        [Key]
        public int Id { get; set; }
        public decimal Percentage { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int? ProductId {  get; set; }
        public Product? Product { get; set; }
    }
}
