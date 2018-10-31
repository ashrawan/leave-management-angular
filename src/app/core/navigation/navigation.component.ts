import { AuthService } from './../../feature/dashboard/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public _auth: AuthService) {  }

  isLoggedIn: boolean = this._auth.isLoggedIn();

  ngOnInit() {
  }

}
