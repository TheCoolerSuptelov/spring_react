import React, { Component } from 'react'
import NotesService from '../services/NotesService';

class CreateNotesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            body: '',
            category: ''
        }
        this.changetitleHandler = this.changetitleHandler.bind(this);
        this.changebodyHandler = this.changebodyHandler.bind(this);
        this.saveOrUpdateNotes = this.saveOrUpdateNotes.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            NotesService.getNotesById(this.state.id).then( (res) =>{
                let Notes = res.data;
                this.setState({title: Notes.title,
                    body: Notes.body,
                    category : Notes.category
                });
            });
        }
    }
    saveOrUpdateNotes = (e) => {
        e.preventDefault();
        let Notes = {title: this.state.title, body: this.state.body, category: this.state.category};
        console.log('Notes => ' + JSON.stringify(Notes));

        // step 5
        if(this.state.id === '_add'){
            NotesService.createNotes(Notes).then(res =>{
                this.props.history.push('/Notes');
            });
        }else{
            NotesService.updateNotes(Notes, this.state.id).then( res => {
                this.props.history.push('/Notes');
            });
        }
    }

    changetitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changebodyHandler= (event) => {
        this.setState({body: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({category: event.target.value});
    }

    cancel(){
        this.props.history.push('/Notes');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Notes</h3>
        }else{
            return <h3 className="text-center">Update Notes</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="title" name="title" className="form-control"
                                                value={this.state.title} onChange={this.changetitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="body" name="body" className="form-control"
                                                value={this.state.body} onChange={this.changebodyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="category" name="category" className="form-control"
                                                value={this.state.category} onChange={this.changecategoryHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateNotes}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateNotesComponent