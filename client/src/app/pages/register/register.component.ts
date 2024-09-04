import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

export class SignUpModel {
  userName: string;
  email: string;
  password: string;

  constructor() {
    this.userName = '';
    this.email = '';
    this.password = '';
  }
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  userService = inject(UsersService);
  router = inject(Router);
  signUpObj: SignUpModel = new SignUpModel();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      this.signUpObj.userName = this.form.value.name;
      this.signUpObj.email = this.form.value.email;
      this.signUpObj.password = this.form.value.password;

      console.log(this.signUpObj);

      await this.userService.addUser(this.signUpObj).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    }
  }
}