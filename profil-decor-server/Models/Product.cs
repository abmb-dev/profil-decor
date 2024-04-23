using System.ComponentModel.DataAnnotations;

namespace profil_decor_server.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public decimal Width { get; set; }
        public decimal Length { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public Discount? Discount { get; set; }
        public ICollection<Image> Images { get; set; }
    }
}
