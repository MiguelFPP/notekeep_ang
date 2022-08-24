import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/sevices/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  username: string = '';
  test = localStorage.getItem('user');
  user = JSON.parse(this.test!);
  constructor(private _authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.username = this.user.name;
  }

  logout() {
    this._authService.logout().subscribe(
      (data) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.route.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
