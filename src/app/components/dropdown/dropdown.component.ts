import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {}
