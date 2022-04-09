package controller;

import model.Notes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repository.NotesRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class NotesController {
    private static final String ERROR_TEMPLATE = "cant find that note";

    @Autowired
    NotesRepository notesRepository;

    @GetMapping("/notes")
    public List<Notes> readNotes(){
        return notesRepository.findAll();
    }
    @PostMapping("/notes")
    public Notes createNote(@RequestBody Notes note){
        return notesRepository.save(note);
    }

    @GetMapping("/notes/id")
    public ResponseEntity<Notes> getNoteById(@PathVariable Long id){
        Notes note = notesRepository.findById(id).orElseThrow(()->new RuntimeException(NotesController.ERROR_TEMPLATE));
        return ResponseEntity.ok(note);

    }
    @PutMapping("/notes/{id}")
    public ResponseEntity <Notes> updateNotes(@PathVariable Long id, @RequestBody Notes noteData) {
        Notes note = notesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(NotesController.ERROR_TEMPLATE));

        note.setTitle(noteData.getTitle());
        note.setBody(noteData.getBody());
        note.setCategory(noteData.getCategory());

        Notes updatednote = notesRepository.save(note);
        return ResponseEntity.ok(updatednote);
    }

    // delete employee rest api
    @DeleteMapping("/notes/{id}")
    public ResponseEntity < Map < String, Boolean >> deleteNote(@PathVariable Long id) {
        Notes employee = notesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(NotesController.ERROR_TEMPLATE));

        notesRepository.delete(employee);
        Map< String, Boolean > response = new HashMap< >();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

