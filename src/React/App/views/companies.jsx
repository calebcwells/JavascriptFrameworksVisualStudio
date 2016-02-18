var React = require('react');
var Company = require('../views/company');

module.exports = React.createClass({
    render() {
        return (
            <div>
                <h1>Company List</h1>
                <ul>
                    { this.props.items.map((item) => {
                         return (<Company item={ item } />);
                     })
                    }
                </ul>
            </div>
        );
    }
})