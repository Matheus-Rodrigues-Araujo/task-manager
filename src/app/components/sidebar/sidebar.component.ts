import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isDropdowVisible: boolean = false;

  toggleDropdow() {
    this.isDropdowVisible = !this.isDropdowVisible;
  }
}
