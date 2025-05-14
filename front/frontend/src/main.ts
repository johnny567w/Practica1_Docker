import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PersonaListComponent } from './lib/persona-list/persona-list.component';

bootstrapApplication(PersonaListComponent, appConfig)
  .catch((err) => console.error(err));
