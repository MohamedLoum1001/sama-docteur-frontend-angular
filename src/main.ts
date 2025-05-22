import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app/app.routes';
import { JwtInterceptor } from './app/jwt.interceptor';
// import { JwtInterceptor } from './app/jwt.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        JwtInterceptor // Ton interceptor ici
      ])
    )
  ]
}).catch(err => console.error('Erreur lors du bootstrap de l’application :', err));
