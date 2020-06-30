import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';


@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {

  obj: any = {
    menu: [
      {
        'name': 'Dashboard',
        'icon': 'desktop',
        'url': 'index.html',
        'sub': []
      },
      {
        'name': 'Courses',
        'icon': 'book',
        'url': '#',
        'sub': [
          {
            'name': 'List all courses',
            'icon': 'th',
            'url': '/courses',
          },
          {
            'name': 'Add new course',
            'icon': 'th',
            'url': '/courses/new',
          }
        ]
      },
      {
        'name': 'Users',
        'icon': 'users',
        'url': '#',
        'sub': [
          {
            'name': 'List all users',
            'icon': 'th',
            'url': '/users',
          },
          {
            'name': 'Add new user',
            'icon': 'th',
            'url': '/users/new',
          }
        ]
      }
    ],
    name: environment.name
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
