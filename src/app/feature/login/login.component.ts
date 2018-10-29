import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../dashboard/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login_user_msg: string;
  public has_error = false;
  hide = true;

  constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem("token") != null) {
      // this._router.navigate(['/dashboard']);
    }
  }

  userLogin(form) {
    // console.log("form", form.value);
    let username = form.value.username;
    let password = form.value.password;

    this._auth.loginUser(form.value)
      .subscribe(res => {
        // console.log("Token reterive successful", res)
        this.has_error = false;
        this.login_user_msg = "Sucess, Loading... !!!";
        localStorage.setItem("token", res.access_token)
        localStorage.setItem("refreshToken", res.refresh_token);
        this._router.navigate(['/home']);
        // location.reload();
      },
        error => {
          // console.log("user login error", error.error);
          this.has_error = true;
          this.login_user_msg = "Invalid Username and Password !!!";
        });
  }

}
