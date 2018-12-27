import React from 'react'

class Council extends React.Component {

    handleClick = () => {
        this.props.onClick(this.props.council.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.council.id)
    }

    render() {
        return (
            <div className="tile">
                <span className="deleteButton" onClick={this.handleDelete}>
                    x
                </span>
                <h4 onClick={this.handleClick}>
                    {this.props.council.name}
                </h4>
                <h3 onClick={this.handleClick}>
                    {this.props.council.building_name}
                </h3>
                <h3 onClick={this.handleClick}>
                    {this.props.council.address_line_1}
                </h3>
                <h3 onClick={this.handleClick}>
                    {this.props.council.address_line_2}
                </h3>
                <h3 onClick={this.handleClick}>
                    {this.props.council.town}
                </h3>
                <h3 onClick={this.handleClick}>
                    {this.props.council.county}
                </h3>
                <h3 onClick={this.handleClick}>
                    {this.props.council.postcode}
                </h3>
                <h3 onClick={this.handleClick}>
                    {this.props.council.email}
                </h3>
                <h3 onClick={this.handleClick}>
                    {this.props.council.phone}
                </h3>
                <h3 onClick={this.handleClick}>
                    {this.props.council.web}
                </h3>
            </div>
        )
    }
}

export default Council