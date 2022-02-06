import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  loginForm!: FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  hide = true;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
    
  }
 submit(){
   console.log(this.loginForm.value);
   this.tozalash();
 }
 bekorQilish(){
    
 }

 tozalash(){
   this.loginForm.reset({});

 }

}

 
