import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AsideComponent } from '../../components/footer/aside.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NgOptimizedImage } from '@angular/common';
import { TimerComponent } from '../../components/dashboard/timer/timer.component';
import { ActivitiesComponent } from '../../components/dashboard/activities/activities.component';
import { MenuComponent } from '../../components/dashboard/menu/menu.component';
import { NewTaskComponent } from '../../components/dashboard/new-task/new-task.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent, ActivitiesComponent, MenuComponent, NewTaskComponent,AsideComponent, NgOptimizedImage, TimerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  timerImg: string = 'assets/timer.png'
}
