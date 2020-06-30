import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';


@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.scss']
})
export class SidebarUserComponent implements OnInit {

  obj: any = {
    name: environment.name
  }

  constructor() { }

  ngOnInit(): void {
  }

}
