import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isDropdowVisible: boolean = false;

  toggleDropdow() {
    this.isDropdowVisible = !this.isDropdowVisible;
  }
}
