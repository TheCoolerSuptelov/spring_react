import axios from 'axios';

const Notes_API_BASE_URL = "http://localhost:8080/api/v1/notes";

class NotesService {

    getNotes(){
        return axios.get(Notes_API_BASE_URL);
    }

    createNotes(Notes){
        return axios.post(Notes_API_BASE_URL, Notes);
    }

    getNotesById(NotesId){
        return axios.get(Notes_API_BASE_URL + '/' + NotesId);
    }

    updateNotes(Notes, NotesId){
        return axios.put(Notes_API_BASE_URL + '/' + NotesId, Notes);
    }

    deleteNotes(NotesId){
        return axios.delete(Notes_API_BASE_URL + '/' + NotesId);
    }
}

export default new NotesService()