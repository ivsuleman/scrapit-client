import React, {Component} from "react";
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "../assets/styling/NewWasteItem.css";

export default class NewWasteItem extends Component {
    constructor(props) {
        super(props);

        this.file = null;

        this.state = {
            isLoading: null,
            resident_id: 1,
            category_id: 1,
            title: "",
            length: "",
            width: "",
            height: "",
            weight: "",
            quantity: "",
            notes: "",
            day: "",
            time: ""
        };
    }

    validateForm() {
        return this.state.notes.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleFileChange = event => {
        this.file = event.target.files[0];
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({isLoading: true});

        let body = JSON.stringify({
            resident_id: this.state.resident_id,
            category_id: this.state.category_id,
            title: this.state.description,
            length: this.state.length,
            width: this.state.width,
            height: this.state.height,
            weight: this.state.weight,
            quantity: this.state.quantity,
            notes: this.state.notes
        })

        fetch('http://localhost:3001/waste_items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        })
            .then((response) => {return response.json()})
    }



    render() {
        return (
            <div className="NewWasteItem">
                <h3>Create a New Waste Item</h3>
                <br></br>



                <form onSubmit={this.handleSubmit}>

                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.title}
                            componentClass="input"
                            placeholder="enter a title describing the waste"
                        />
                    </FormGroup>

                    <FormGroup controlId="category">
                        <ControlLabel>Category</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.category}
                            componentClass="select"
                            placeholder="select an appropriate category"
                        />
                    </FormGroup>

                    <FormGroup controlId="length">
                        <ControlLabel>Length (cm)</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.length}
                            componentClass="input"
                        />
                    </FormGroup>

                    <FormGroup controlId="width">
                        <ControlLabel>Width (cm)</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.width}
                            componentClass="input"
                        />
                    </FormGroup>

                    <FormGroup controlId="height">
                        <ControlLabel>Height (cm)</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.height}
                            componentClass="input"
                        />
                    </FormGroup>

                    <FormGroup controlId="weight">
                        <ControlLabel>Weight (kg)</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.weight}
                            componentClass="input"
                        />
                    </FormGroup>

                    <FormGroup controlId="quantity">
                        <ControlLabel>Quantity</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.quantity}
                            componentClass="input"
                        />
                    </FormGroup>


                    <FormGroup controlId="day">
                        <ControlLabel>Day</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.day}
                            componentClass="select"
                        />
                    </FormGroup>

                    <FormGroup controlId="time">
                        <ControlLabel>Time</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.time}
                            componentClass="select"
                        />
                    </FormGroup>

                    <FormGroup controlId="notes">
                        <ControlLabel>Additional Notes</ControlLabel>
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.notes}
                            componentClass="textarea"
                            placeholder="enter other relevant useful information"
                        />
                    </FormGroup>

                    <FormGroup controlId="file">
                        <ControlLabel>Photos</ControlLabel>
                        <FormControl onChange={this.handleFileChange} type="file" />
                    </FormGroup>

                    <LoaderButton
                        block
                        bsStyle="primary"
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Create"
                        loadingText="Creating…"
                    />

                </form>
            </div>
        );
    }
}