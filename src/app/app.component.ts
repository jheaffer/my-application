import { Component } from '@angular/core';
import { TrainerDisplayComponent } from './trainer-display/trainer-display.component';

@Component({
  selector: 'app-root',
  imports: [TrainerDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-application';
}
