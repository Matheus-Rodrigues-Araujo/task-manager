import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AsideComponent } from '../../components/footer/aside.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent, AsideComponent, NgOptimizedImage],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  timerImg: string = 'assets/timer.png'
}
