import { Component } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NbCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
