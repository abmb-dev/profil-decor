using System.ComponentModel.DataAnnotations;

namespace profil_decor_server.Models
{
    public class AppConfiguration
    {
        [Key]
        public int Id { get; set; }
        public int MaximumNumberOfFAQ { get; set; }
    }
}
