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
  email: string;
  name: string;
  constructor(
    private _profileService: ProfileService,
    private fb: FormBuilder
  ) {
    this.email = '';
    this.name = '';
    this.formInfo = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)],
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

  get angFormInfo(): any {
    return this.formInfo.controls;
  }
}
