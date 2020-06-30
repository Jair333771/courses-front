import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  obj: any = {
    title: environment.title
  }

  constructor() { }

  ngOnInit(): void {
  }

}
