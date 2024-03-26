import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'TimeReady';
}
