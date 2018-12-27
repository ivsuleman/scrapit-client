import React from 'react'

class CouncilForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.council.name,
            postcodelogo: this.props.council.logo,
            building_name: this.props.council.building_name,
            address_line_1: this.props.council.address_line_1,
            address_line_2: this.props.council.address_line_2,
            town: this.props.council.town,
            county: this.props.council.county,
            postcode: this.props.council.postcode,
            email: this.props.council.email,
            phone: this.props.council.phone,
            web: this.props.council.web
        }
    }

    handleInput = (e) => {
        this.props.resetNotification()
        this.setState({[e.target.name]: e.target.value})
    }


    handleBlur = () => {
        const council = {
            name: this.state.name,
            logo: this.state.logo,
            building_name: this.state.building_name,
            address_line_1: this.state.address_line_1,
            address_line_2: this.state.address_line_2,
            town: this.state.town,
            county: this.state.county,
            postcode: this.state.postcode,
            email: this.state.email,
            phone: this.state.phone,
            web: this.state.web
        }

        fetch(`http://localhost:3001/councils/${this.props.council.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                council: council
            })
        })
            .then(response => response.json())
            .then(updatedCouncil => {
                console.log(updatedCouncil)
                this.props.updateCouncil(updatedCouncil)
            })
    }


    render() {
        return (
            <div className="tile">
                <form onBlur={this.handleBlur}>
                    <span>
                        Council Name:{"\n"}
                        <input className='input' type="text" name="name" placeholder='Enter the Council Name'
                            value={this.state.name} onChange={this.handleInput}
                            ref={this.props.nameRef} />
                        {"\n"}

                        Council Logo URL:{"\n"}
                        <input className='input' type="text" name="logo" placeholder='Enter URL for the Council Logo'
                            value={this.state.logo} onChange={this.handleInput} />
                        {"\n"}

                        Address: Building Name:{"\n"}
                        <input className='input' type="text" name="building_name" placeholder='Enter the Address: Builiding Name (if it exists)'
                            value={this.state.building_name} onChange={this.handleInput} />
                        {"\n"}

                        Address: Line 1{"\n"}
                        <input className='input' type="text" name="address_line_1" placeholder='Enter the Address: Line 1'
                            value={this.state.address_line_1} onChange={this.handleInput} />
                        {"\n"}

                        Address: Line 2{"\n"}
                        <input className='input' type="text" name="address_line_2" placeholder='Enter the Address: Line 2'
                            value={this.state.address_line_2} onChange={this.handleInput} />
                        {"\n"}

                        Address: Town{"\n"}
                        <input className='input' type="text" name="town" placeholder='Enter the Address: Town'
                            value={this.state.town} onChange={this.handleInput} />
                        {"\n"}

                        Address: County{"\n"}
                        <input className='input' type="text" name="county" placeholder='Enter the Address: County'
                            value={this.state.town} onChange={this.handleInput} />
                        {"\n"}

                        Address: Postcode{"\n"}
                        <input className='input' type="text" name="postcode" placeholder='Enter the Address: Postcode'
                            value={this.state.postcode} onChange={this.handleInput} />
                        {"\n"}

                        Council Email Address{"\n"}
                        <input className='input' type="text" name="email" placeholder='Enter the Council Email Address'
                            value={this.state.email} onChange={this.handleInput} />
                        {"\n"}

                        Council Phone Number{"\n"}
                        <input className='input' type="text" name="phone" placeholder='Enter the Council Phone Number'
                            value={this.state.phone} onChange={this.handleInput} />
                        {"\n"}

                        Council Website URL{"\n"}
                        <input className='input' type="text" name="web" placeholder='http://'
                            value={this.state.web} onChange={this.handleInput} />
                        {"\n"}
                    </span>
                </form>
            </div >
        );
    }
}

export default CouncilForm