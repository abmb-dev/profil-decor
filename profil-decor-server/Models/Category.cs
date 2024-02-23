using System.ComponentModel.DataAnnotations;

namespace profil_decor_server.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Product> Products { get; set;}
    }
}
