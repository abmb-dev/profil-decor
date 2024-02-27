using profil_decor_server.Interfaces;
using profil_decor_server.Models.Context;

namespace profil_decor_server.Services
{
    public class AppConfigurationService : IAppConfigurationService
    {
        private readonly ProfilDecorContext _context;

        public AppConfigurationService(ProfilDecorContext context)
        {
            _context = context;
        }

        public int GetMaxNumberOfFAQ()
        {
            var config = _context.AppConfigurations.FirstOrDefault();
            return config?.MaximumNumberOfFAQ ?? 0;
        }
    }
}
