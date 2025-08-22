import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(), // Configuração de animações do Angular
  ],
};
// ✅ Não é necessário importar o BrowserModule, pois o Angular já lida com isso internamente
// ✅ O provideAnimations é suficiente para configurar as animações no Angular, não é necessário importar
