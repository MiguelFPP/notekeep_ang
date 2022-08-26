import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/sevices/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  formInfo: FormGroup;
  formPass: FormGroup;
  constructor(
    private _profileService: ProfileService,
    private fb: FormBuilder
  ) {
    //form info
    this.formInfo = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)],
      ],
    });
    //form password
    this.formPass = this.fb.group({
      old_password: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: [
        '',
        [Validators.required, Validators.minLength(6)],
      ],
    });
  }

  ngOnInit(): void {
    this.getInfoProfile();
  }

  getInfoProfile() {
    this._profileService.getInfoProfile().subscribe(
      ({ data }) => {
        const { name, email } = data;
        this.formInfo.patchValue({
          name,
          email,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateProfile() {
    const { name, email } = this.formInfo.value;
    const user: User = {
      name,
      email,
    };
    this._profileService.updateProfile(user).subscribe(
      ({ data }) => {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
      },
      (error) => {
        console.error(error);
      }
    );
  }

  changePass() {
    const { old_password, password, password_confirmation } =
      this.formPass.value;
    this._profileService
      .changePassword(old_password, password, password_confirmation)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  get angFormInfo(): any {
    return this.formInfo.controls;
  }

  get angFormPass(): any {
    return this.formPass.controls;
  }
}
