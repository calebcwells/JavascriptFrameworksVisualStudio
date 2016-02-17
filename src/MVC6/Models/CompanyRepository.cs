using System.Collections.Generic;

namespace MVC6.Web.Models
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly IEnumerable<Company> _companies;

        public CompanyRepository()
        {
            _companies = new List<Company>
            {
                new Company
                {
                    Id = 1,
                    Name = "Microsoft"
                },
                new Company
                {
                    Id = 2,
                    Name = "Google"
                },
                new Company
                {
                    Id = 3,
                    Name = "Oracle"
                },
                new Company
                {
                    Id = 4,
                    Name = "Twitter"
                },
                new Company
                {
                    Id = 5,
                    Name = "Facebook"
                }
            };
        }

        public IEnumerable<Company> GetAllCompanies()
        {
            return _companies;
        }
    }
}