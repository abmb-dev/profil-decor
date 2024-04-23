using System.ComponentModel.DataAnnotations;

namespace profil_decor_server.Models
{
    public class Image
    {
        [Key]
        public int Id { get; set; }
        public string Content { get; set; }
        public int ProductId {  get; set; }
        public Product Product { get; set; }
    }
}
