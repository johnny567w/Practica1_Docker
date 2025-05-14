import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonaService, Persona } from '../../app/persona.service';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css'] // si tienes estilos
})
export class PersonaListComponent implements OnInit {
  personas: Persona[] = [];
  nuevaPersona: Partial<Persona> = {
    nombre: '',
    apellido: ''
  };

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.personaService.getPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  agregarPersona(): void {
    if (this.nuevaPersona.nombre && this.nuevaPersona.apellido) {
      this.personaService.addPersona(this.nuevaPersona).subscribe(() => {
        this.nuevaPersona = { nombre: '', apellido: '' };
        this.cargarPersonas(); 
      });
    }
  }

  eliminarPersona(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta persona?')) {
      this.personaService.deletePersona(id).subscribe(() => {
        this.cargarPersonas(); 
      });
    }
  }
}
