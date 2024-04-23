using profil_decor_server.Models;

namespace profil_decor_server.Interfaces
{
    /// <summary>
    /// Provides access to Frequently Asked Question Service (FAQService)
    /// </summary>
    public interface IFAQService
    {
        /// <summary>
        /// Retrieves the FAQs from the db. Their number is limited by the configuration saved in Config Table
        /// </summary>
        /// <returns>List of FAQs</returns>
        List<FAQ> RetrieveFAQs();

        /// <summary>
        /// Saves a FAQ based on the mode (add, update, delete)
        /// </summary>
        /// <param name="newFaq"></param>
        /// <param name="mode"></param>
        /// <returns>The Error Message in case of a problem</returns>
        string SaveFAQ(FAQ newFaq, string mode);
    }
}
