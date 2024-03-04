using System.ComponentModel.DataAnnotations;

namespace profil_decor_server.Models.HelperModels
{
    public class AuthenticateRequest
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
