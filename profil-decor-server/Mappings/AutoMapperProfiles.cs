using AutoMapper;
using profil_decor_server.Dtos;
using profil_decor_server.Models;

namespace profil_decor_server.Mappings
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<FAQ, FAQDto>().ReverseMap();
        }
    }
}
