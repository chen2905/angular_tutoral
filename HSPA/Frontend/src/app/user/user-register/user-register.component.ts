import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup
  user: User;
  constructor(private fb: FormBuilder,private userService: UserService, private alerfyService: AlertifyService) { }
  userSubmitted: boolean;
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

get userPassword(){
  return this.registerationForm.get('password') as FormControl
}

get userConfirmPassword(){
  return this.registerationForm.get('confirmPassword') as FormControl
}

get userMobile(){
  return this.registerationForm.get('mobile') as FormControl
}
  onSubmit (){
    this.userSubmitted = true;
    console.log("submitting", this.registerationForm.value)
    console.log("form valid", this.registerationForm.errors)
    //if(this.registerationForm.valid){

      this.userService.addUser(this.userData());
       this.registerationForm.reset();
       this.userSubmitted = false;
       this.alerfyService.success("Congrats, you are succcessfully registered");
    //}

  }

  userData(): User {
    return this.user ={
      userName: this.userName.value,
      email: this.userEmail.value,
      password: this.userPassword.value,
      mobile: this.userMobile.value


    }
  }

}
