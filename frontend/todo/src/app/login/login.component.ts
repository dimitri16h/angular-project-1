import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {

    // console.log(this.username);
    if (this.username === "username" && this.password === "password") {
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

}
