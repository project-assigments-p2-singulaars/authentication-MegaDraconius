import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private localStorageService = inject(LocalstorageService);
  private userService = inject(UsersService);
  loginForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log(this.loginForm.value);

      await this.userService.login({ email, password }).subscribe(
        () => {
          console.log('win');
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log('fail');
        }
      );
    }
  }
}