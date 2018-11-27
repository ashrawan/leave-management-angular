import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isOpen = false;

  constructor(private _sidebarService: SidebarService) { }

  ngOnInit() {
    this._sidebarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}
