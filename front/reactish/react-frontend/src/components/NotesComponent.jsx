import React, { Component } from 'react'
import NotesService from '../services/NotesService'

class ViewNotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Notes: {}
        }
    }

    componentDidMount(){
        NotesService.getNotesById(this.state.id).then( res => {
            this.setState({Notes: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Notes Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Notes title: </label>
                            <div> { this.state.Notes.title }</div>
                        </div>
                        <div className = "row">
                            <label> Notes body: </label>
                            <div> { this.state.Notes.body }</div>
                        </div>
                        <div className = "row">
                            <label> Notes category: </label>
                            <div> { this.state.Notes.category }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewNotesComponent