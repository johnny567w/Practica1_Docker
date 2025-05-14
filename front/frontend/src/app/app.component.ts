import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>Mi Aplicación Angular</h1>
    <button (click)="testBackend()">Probar API</button>
    <pre>{{ response | json }}</pre>
  `
})
export class AppComponent {
  response: any;

  constructor(private http: HttpClient) {}

  testBackend() {
    this.http.get('/api/personas').subscribe(
      data => this.response = data,
      error => console.error(error)
    );
  }
}
