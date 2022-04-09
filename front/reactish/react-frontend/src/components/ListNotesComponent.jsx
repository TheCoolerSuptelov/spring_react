import React, { Component } from 'react'
import NotesService from '../services/NotesService'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class ListNotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Notes: []
        }
        this.addNotes = this.addNotes.bind(this);
        this.editNotes = this.editNotes.bind(this);
        this.deleteNotes = this.deleteNotes.bind(this);
    }

    deleteNotes(id){
        NotesService.deleteNotes(id).then( res => {
            this.setState({Notes: this.state.Notes.filter(Notes => Notes.id !== id)});
        });
    }
    viewNotes(id){
        this.props.history.push(`/view-Notes/${id}`);
    }
    editNotes(id){
        this.props.history.push(`/add-Notes/${id}`);
    }

    componentDidMount(){
        NotesService.getNotes().then((res) => {
            this.setState({ Notes: res.data});
        });
    }

    addNotes(){
        this.props.history.push('/add-Notes/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Notes List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addNotes}> Add Notes</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Notes First Name</th>
                                    <th> Notes Last Name</th>
                                    <th> Notes Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Notes.map(
                                        Notes =>
                                        <tr key = {Notes.id}>
                                             <td> {Notes.title} </td>
                                             <td> {Notes.body}</td>
                                             <td> {Notes.category}</td>
                                             <td>
                                                 <button onClick={ () => this.editNotes(Notes.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteNotes(Notes.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewNotes(Notes.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListNotesComponent