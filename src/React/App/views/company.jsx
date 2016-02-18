var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <li>{this.props.item.id} - {this.props.item.name}</li>
        );
    }
})