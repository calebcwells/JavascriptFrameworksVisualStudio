class CompaniesStore {
    getCompanies() {
        var companies = [
            { id: 1, name: 'Microsoft' },
            { id: 2, name: 'Google' },
            { id: 3, name: 'Oracle' },
            { id: 4, name: 'Twitter' },
            { id: 5, name: 'Facebook' }
        ];

        return companies;
    }
}

module.exports = new CompaniesStore();