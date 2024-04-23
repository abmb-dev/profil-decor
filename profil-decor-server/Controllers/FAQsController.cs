using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using profil_decor_server.Dtos;
using profil_decor_server.Interfaces;
using profil_decor_server.Models;
using Swashbuckle.AspNetCore.Annotations;

namespace profil_decor_server.Controllers
{
    [Route("api/[controller]/[action]")]
    [SwaggerTag("FAQ API")]
    public class FAQsController : ControllerBase
    {
        private readonly IFAQService _faqService;
        private readonly IMapper _mapper; 

        public FAQsController(IFAQService faqService, IMapper mapper) : base()
        {
            _faqService = faqService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult RetrieveFAQs()
        {
            try
            {
                return Ok(_mapper.Map<List<FAQDto>>(_faqService.RetrieveFAQs()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult SaveFaq([FromBody]FAQDto faqDto)
        {
            if(faqDto != null)
            {
                var result = _faqService.SaveFAQ(_mapper.Map<FAQ>(faqDto), faqDto.Mode);
                return !string.IsNullOrEmpty(result) ? BadRequest(result) : Ok(faqDto);

            }
            return BadRequest("There is a problem with the input. Address the problem to the support team.");
        }
    }
}
