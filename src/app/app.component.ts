import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NbInputModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { PrimeNGConfig } from 'primeng/api';
import { Lara } from 'primeng/themes/lara';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbLayoutModule, NbThemeModule, InputNumberModule, NbInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store-nebular-prime';
  constructor(private config: PrimeNGConfig) {
    // this.config.theme.set({ preset: Aura });
    // this.config.theme.set({ preset: Lara });
    this.config.theme.set({
        preset: Lara,
        options: {
            darkModeSelector: 'light',
            cssLayer: false
        }
    });
  }
}
