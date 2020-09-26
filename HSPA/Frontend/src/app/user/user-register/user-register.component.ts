import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup
  user: any = {};
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  this.createRegisterationForm();
  }

createRegisterationForm() {
this.registerationForm = this.fb.group(
  {
    userName: [null, Validators.required],
    userEmail: [null, Validators.required, Validators.email],
    password: [null, [Validators.required, Validators.minLength(8)]],
    confirmPassword: [null, Validators.required],
    mobile:  [null, [Validators.required, Validators.maxLength(10)]]
  }, {validators: this.passwordMatchingValidator})
}

passwordMatchingValidator (fg: FormGroup) : Validators{
  return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true}
}

get userName(){
  return this.registerationForm.get('userName') as FormControl
}

get userEmail(){
  return this.registerationForm.get('userEmail') as FormControl
}
  onSubmit (){
    console.log("submitting", this.registerationForm.value)
    this.user = Object.assign(this.user, this.registerationForm.value)
    this.addUser(this.user);
  }

  addUser(user){
    let users = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users'));
      users = [...users,user];
    }else{
      users=[user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
