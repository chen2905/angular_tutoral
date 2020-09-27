import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService : AuthService, private alerfyService: AlertifyService,private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(loginForm: NgForm){

    // const user: User
    // user.userName = loginForm.value.userName;
    // user.password = loginForm.value.password;
    const token = this.authService.authUser(loginForm.value);
    if (token){
      localStorage.setItem('token',token.userName)
        this.alerfyService.success("Login Successfully")
        this.router.navigate(['/'])

    }else{
     this.alerfyService.fail("Login not Successfully")

    }

  }
}
