var React = require('react');
var Companies = require("../views/companies");
var CompaniesStore = require("../stores/companies-store");
var companyList = CompaniesStore.getCompanies();

console.log(companyList);

module.exports = React.createClass({
    render() {
        return (
            <Companies items={companyList} />
        );
    }
})