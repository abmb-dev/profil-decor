namespace profil_decor_server.Interfaces
{
    /// <summary>
    /// Provides access to App Configuration Service
    /// </summary>
    public interface IAppConfigurationService
    {
        /// <summary>
        /// Retrieves the Maximum Number Allowed of Frequently Asked Questions
        /// </summary>
        /// <returns>Maximum Number of FAQs</returns>
        int GetMaxNumberOfFAQ();
    }
}
