import React, {Component} from "react";
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "../assets/styling/Login.css";
import API from '../components/API'


import "../assets/styling/Home.css";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const {signin, history} = this.props
        const user = this.state

        API.signin(user)
            .then(data => {
                if (data.error) {
                    alert('error!!!!!')
                } else {
                    signin(data.username)
                    history.push('/resident')
                }
            })
    }

    render() {
        return (
            <div>
                <div>
                    <br></br>
                    <br></br>
                </div>

                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="username" bsSize="large">
                            <ControlLabel>Username</ControlLabel>
                            <FormControl
                                autoFocus
                                type="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <LoaderButton
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                            isLoading={this.state.isLoading}
                            text="Login"
                            loadingText="Logging in…"
                        />
                    </form>
                </div>
            </div>
        );
    }
}