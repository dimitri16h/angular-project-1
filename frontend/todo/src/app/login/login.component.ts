import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "username"
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {

    // console.log(this.username);
    if (this.username === "username" && this.password === "password") {
      // redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

}