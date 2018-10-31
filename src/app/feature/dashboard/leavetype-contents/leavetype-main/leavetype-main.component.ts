import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-leavetype-main',
  templateUrl: './leavetype-main.component.html',
  styleUrls: ['./leavetype-main.component.css']
})
export class LeavetypeMainComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit() {
  }

}
