import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MonlyKing');
}
