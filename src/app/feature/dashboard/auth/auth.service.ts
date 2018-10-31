import { Constant } from './../constant/constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _loginUrl = Constant.API_ENDPOINT + "/oauth/token";
  private _client_id = "demo-client";
  private _client_secret = "demo-secret";

  private tokenHeader = {
    "Authorization": "Basic " + btoa(this._client_id + ":" + this._client_secret),
    "Content-Type": "application/x-www-form-urlencoded"
  }

  constructor(private http: HttpClient, private _router: Router) { }

  // convert to form data
  getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }


  loginUser(user) {
    localStorage.removeItem("token");
    localStorage.removeItem("access_token");

    let data = {
      "username": user.username,
      "password": user.password,
      "grant_type": "password"
    }

    return this.http.post<any>(this._loginUrl, this.getFormUrlEncoded(data), { headers: this.tokenHeader });
  }

  refreshToken(){

    // console.log("refresh token called ", localStorage.getItem("refreshToken"));

    let data = {
      "grant_type": "refresh_token",
      "refresh_token": localStorage.getItem("refreshToken")
    }

    if(localStorage.getItem("refreshToken") != null){
      this.http.post<any>(this._loginUrl, this.getFormUrlEncoded(data))
      .subscribe(res => {
        // console.log("Token retrieve successful", res);
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("refreshToken", res.refresh_token);
        return true;
      },
        err => {
          // console.log("refresh token also results into error ",err); 
          this.logout()
        });
    }else {
      // console.log("Cant use Refresh token");
      this._router.navigate(['/']);
    }
    return false;
  }

  isLoggedIn() {
    // console.log("is Logged In ", !!localStorage.getItem("token"));
    return !!localStorage.getItem("token");
  }

  isAdmin(){
    return localStorage.getItem("role") == "ROLE_ADMIN";
  }

  logout() {
    // console.log("Logged Out called");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    this._router.navigate(['/'])
    // location.reload();
  }

}
