using System.Collections.Generic;

namespace MVC6.Web.Models
{
    public interface ICompanyRepository
    {
        IEnumerable<Company> GetAllCompanies();
    }
}