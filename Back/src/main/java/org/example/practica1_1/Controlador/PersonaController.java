package org.example.practica1_1.Controlador;

import org.example.practica1_1.Model.Persona;
import org.example.practica1_1.repo.PersonaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personas")
@CrossOrigin(origins = "*")
public class PersonaController {
    @Autowired
    private PersonaRepo personaRepo;

    @GetMapping
    public List<Persona> getAllPersonas() {
        return personaRepo.findAll();
    }

    @PostMapping
    public Persona createPersona(@RequestBody Persona persona) {
        return personaRepo.save(persona);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        personaRepo.deleteById(id);
    }
}