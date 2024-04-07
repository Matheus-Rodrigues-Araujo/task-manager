import { Component } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DropdownComponent, RouterLink, NgFor, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isDropdowVisible: boolean = false;

  public links = [
    { path: '/home', name: 'Home', iconClass: 'bi bi-house-door-fill' },
    { path: '/tasks', name: 'Tasks', iconClass: 'bi bi-card-checklist' },
    { path: '/goals', name: 'Goals', iconClass: 'bi bi-trophy-fill' },
    { path: '/calendar', name: 'Calendar', iconClass: 'bi bi-calendar-check-fill' },
    { path: '/profile', name: 'Profile', iconClass: 'bi bi-person-circle' },
    { path: '/settings', name: 'Settings', iconClass: 'bi bi-gear-wide' },
    { path: '/logout', name: 'Logout', iconClass: 'bi bi-box-arrow-in-left' },
  ];

  toggleDropdow() {
    this.isDropdowVisible = !this.isDropdowVisible;
  }
}
