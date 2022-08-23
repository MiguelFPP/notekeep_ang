import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/sevices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  successRegister: boolean = false;
  showErrors: any = [];

  constructor(private fb: FormBuilder, private _authService: AuthService) {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  register() {
    this.loading = true;
    const { name, email, password, password_confirmation } = this.form.value;
    const user: User = {
      name,
      email,
      password,
      password_confirmation,
    };

    this._authService.register(user).subscribe(
      (data) => {
        this.loading = false;
        this.successRegister = true;
        this.showErrors = [];
        this.form.reset();
      },
      (error) => {
        this.loading = false;
        this.showErrors = [];
        if (error.status === 422) {
          this.addValitionErrorsToArray(error.error.errors);
        }
      }
    );
  }

  addValitionErrorsToArray(errors: any) {
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        this.showErrors.push(errors[key]);
      }
    }
    console.log(this.showErrors);
  }

  get angForm(): any {
    return this.form.controls;
  }
}
