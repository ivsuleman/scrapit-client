import React from 'react'
import update from 'immutability-helper'

//dumb components (stateless)
import Council from './Council'

//smart components (with state)
import CouncilForm from './CouncilForm'


class CouncilsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            councils: [],
            editingCouncilId: null,
            notification: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/councils')
            .then(resp => resp.json())
            .then(councils => this.setState({councils}))
    }

    addNewCouncil = () => {
        fetch('http://localhost:3001/councils', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: 'to be updated',
                logo: 'to be updated',
                building_name: 'to be updated',
                address_line_1: 'to be updated',
                address_line_2: 'to be updated',
                town: 'to be updated',
                county: 'to be updated',
                postcode: 'to be updated',
                email: 'to be updated',
                phone: 'to be updated',
                web: 'to be updated'
            })
        })
            .then(response => response.json())
            .then(newCouncil => {
                console.log(newCouncil)
                const councils = update(this.state.councils, {
                    $splice: [[0, 0, newCouncil]]
                })
                this.setState({
                    councils: councils,
                    editingCouncilId: newCouncil.id
                })
            })
            .catch(error => console.log(error))
    }

    updateCouncil = (council) => {
        const councilIndex = this.state.councils.findIndex(x => x.id === council.id)
        const councils = update(this.state.councils, {
            [councilIndex]: {$set: council}
        })
        this.setState({
            ideas: council,
            notification: 'All changes saved'
        })
    }

    deleteIdea = (id) => {
        fetch(`http://localhost:3001/councils/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                const councilIndex = this.state.councils.findIndex(x => x.id === id)
                const councils = update(this.state.councils, {$splice: [[councilIndex, 1]]})
                this.setState({councils: councils})
            })
            .catch(error => console.log(error))
    }




    resetNotification = () => {
        this.setState({notification: ''})
    }

    enableEditing = (id) => {
        this.setState({editingCouncilId: id},
            () => {this.name.focus()})
    }

    render() {
        return (
            <div>
                <div>
                    <button
                        className="newCouncilButton"
                        onClick={this.addNewCouncil} >
                        New Council
                    </button>
                    <span className="notification">
                        {this.state.notification}
                    </span>
                </div>

                <div>
                    {this.state.councils.map((council) => {
                        if (this.state.editingCouncilId === council.id) {
                            return (
                                <CouncilForm
                                    council={council}
                                    key={council.id}
                                    updateCouncil={this.updateCouncil}
                                    nameRef={input => this.name = input}
                                    resetNotification={this.resetNotification} />
                            )
                        }
                        else {
                            return (
                                <Council
                                    council={council}
                                    key={council.id}
                                    onClick={this.enableEditing}
                                    onDelete={this.deleteIdea} />
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default CouncilsContainer