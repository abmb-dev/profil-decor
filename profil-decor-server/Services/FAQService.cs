using profil_decor_server.Interfaces;
using profil_decor_server.Models;
using profil_decor_server.Models.Context;

namespace profil_decor_server.Services
{
    public class FAQService : IFAQService
    {
        private readonly ProfilDecorContext _context;
        private readonly IAppConfigurationService _appConfigurationService;

        public FAQService(ProfilDecorContext context, IAppConfigurationService appConfigurationService)
        {
            _context = context;
            _appConfigurationService = appConfigurationService;
        }

        public List<FAQ> RetrieveFAQs()
        {
            var maximumNumberOfFAQ = _appConfigurationService.GetMaxNumberOfFAQ();
            return maximumNumberOfFAQ != 0 ? _context.FAQs.ToList() : new List<FAQ>();
        }

        public string SaveFAQ(FAQ newFaq, string mode)
        {
            string error = GetSavingError(newFaq.Question, mode);
            if (string.IsNullOrEmpty(error))
            {
                if (mode == ActionMode.Add)
                {
                    _context.Add(newFaq);
                }
                if (mode == ActionMode.Update)
                {
                    _context.Update(newFaq);
                }
                else
                {
                    _context.Remove(newFaq);
                }
                _context.SaveChangesAsync();
            }
            return error;
        }

        private string GetSavingError(string question, string mode)
        {
            string error = string.Empty;
            var oldFaq = _context.FAQs.FirstOrDefault(faq => faq.Question == question);
            if (mode == ActionMode.Add && oldFaq != null)
            {
                error = FAQErrors.FAQ_ALREADY_EXIST;
            }
            else if (mode == ActionMode.Add && _appConfigurationService.GetMaxNumberOfFAQ() <= _context.FAQs.Count())
            {
                error = FAQErrors.MAXIMUM_NUMBER_OF_FAQ_REACHED;
            }
            else if ((mode == ActionMode.Update || mode == ActionMode.Delete) && oldFaq == null)
            {
                error = FAQErrors.FAQ_DOES_NOT_EXIST;
            }
            return error;
        }
    }
}
