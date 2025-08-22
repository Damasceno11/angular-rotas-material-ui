import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']);
  }
}
