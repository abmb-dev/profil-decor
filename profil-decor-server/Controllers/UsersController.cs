using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using profil_decor_server.Interfaces;
using profil_decor_server.Models.Context;
using profil_decor_server.Models.HelperModels;
using Swashbuckle.AspNetCore.Annotations;

namespace profil_decor_server.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    [SwaggerTag("Users API")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public UsersController(IUserService userService, IMapper mapper, IOptions<AppSettings> appSettings)
        {
            _userService = userService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthenticateRequest model)
        {
            try
            {
                var response = _userService.Authenticate(model);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + ex.InnerException.Message);
            }
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Register([FromBody] RegisterRequest model)
        {
            try
            {
                _userService.Register(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + ex.InnerException.Message);
            }
            return Ok(new { message = "Registration successful" });
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }

        [HttpGet]
        public IActionResult GetUser(int id)
        {
            var user = _userService.GetById(id);
            return Ok(user);
        }

        [HttpPut]
        public IActionResult Update(int id, [FromBody] UpdateRequest model)
        {
            _userService.Update(id, model);
            return Ok(new { message = "User updated successfully" });
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            _userService.Delete(id);
            return Ok(new { message = "User deleted successfully" });
        }
    }
}
