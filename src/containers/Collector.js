import React from "react";
import {PageHeader, ListGroup, ListGroupItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default class Collector extends React.Component {

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


    render() {

        var wasteItems = this.state.wasteItems.map((item) => {
            return (
                <div key={item.id}>
                    <h4>Title: {item.title}</h4>
                    <h5>Item Length: {item.length}</h5>
                    <h5>Item Width: {item.width}</h5>
                    <h5>Item Height: {item.height}</h5>
                    <h5>Item Weight: {item.weight}</h5>
                    <h5>Item Quantity: {item.quantity}</h5>
                    <h5>Item Notes: {item.notes}</h5>
                    <hr></hr>
                </div>

            )
        })




        return (
            <div>

                <div>
                    <h3>Available Waste Items: {wasteItems.length}</h3>
                    {wasteItems}
                </div>




                <div>
                    <hr></hr>
                    <h3>My Waste Items </h3>
                </div>
                <div>
                    <h4>In-Progress Waste Items: </h4>
                </div>
                <div>
                    <h4>Completed Waste Items: </h4>
                </div>
            </div>


        )








    }

}