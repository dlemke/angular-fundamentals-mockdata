import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../providers/authentication.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN } from '../../../providers/toastr.service';
import { IToastrModel } from '../../../models/IToastrModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthenticationService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: IToastrModel) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile Saved');
      //this.router.navigate(['list']);
    }
  }

  cancel() {
    this.router.navigate(['list']);
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }
}
