import React from "react";
import '../assets/styling/Resident.css'
import {PageHeader, ListGroup, ListGroupItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class Resdient extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wasteItems: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/waste_items')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({wasteItems: data})});
    }

    expandHandler = (event) => {
        event.target.parentNode.classList.toggle('expanded')
    }

    componentDidUpdate() {

        const {history, username} = this.props

        if (!username) {
            history.push('/signin')
        }
    }

    render() {

        var wasteItems = this.state.wasteItems.map((item) => {
            const stateTxt = item.state;

            return (
                <div key={item.id} className="resident_card" >
                    <span onClick={(event) => this.expandHandler(event)} className={"arrow"}>+</span>
                    <h3>Title: {item.title}</h3>
                    {stateTxt == "open" &&
                        < h3 > Status: Available for collection</h3>
                    }
                    {stateTxt == "booked" &&
                        < h3 > Status: Item Has been booked for collection</h3>
                    }
                    {stateTxt == "collected" &&
                        < h3 > Status: Item Has been collected</h3>
                    }
                    {stateTxt == "approved" &&
                        < h3 > Status: Item Has been deposited successfully</h3>
                    }
                    <br></br>
                    <h4>Item Category: {item.category.name}</h4>
                    <br></br>
                    <h5>Item Length: {item.length}</h5>
                    <h5>Item Width: {item.width}</h5>
                    <h5>Item Height: {item.height}</h5>
                    <h5>Item Weight: {item.weight}</h5>
                    <h5>Item Quantity: {item.quantity}</h5>
                    <h5>Item Notes: {item.notes}</h5>
                </div >

            )
        })

        return (
            <div>

                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>


                <div>
                    <LinkContainer
                        key="new"
                        to="/waste-items/new"
                    >
                        <ListGroupItem>
                            <h4>
                                <b>{"\uFF0B"}</b> Create a new waste item
              </h4>
                        </ListGroupItem>
                    </LinkContainer>
                </div>
                <div>

                </div>

                <div>
                    <h3>My Total Waste Items: {wasteItems.length}</h3>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    {wasteItems}
                </div>
            </div >
        )
    }

}