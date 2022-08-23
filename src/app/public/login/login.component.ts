import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/sevices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errors: boolean = false;
  form: FormGroup;

  @Input() alert: any = [];

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private route: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  login() {
    this.errors = false;
    const { email, password } = this.form.value;
    this._authService.login(email, password).subscribe(
      ({ data }) => {
        const { token, user } = data;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        this.route.navigate(['/user']);
      },
      (error) => {
        console.log(error);

        if (error.status === 401) {
          this.errors = true;
        }
      }
    );
  }

  get angForm(): any {
    return this.form.controls;
  }
}
