import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
form: FormGroup;

constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)])
  });
}

onSubmit(){
  if(this.form.valid){
    console.log(this.form.value)
  }
}
}
