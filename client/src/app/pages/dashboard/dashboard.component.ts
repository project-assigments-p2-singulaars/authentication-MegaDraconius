import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  router = inject(Router);

  constructor() {}

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
