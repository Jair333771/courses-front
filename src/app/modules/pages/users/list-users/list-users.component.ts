import { Component, OnInit } from '@angular/core';
import { RestSerivesService } from './../../../../services/rest-serives.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  obj: any = {
    title: "Users list",
    tableHeads: [
      'Name',
      'Email',
      'Born Date',
      'Role',
      'Gender',
      'Actions'
    ],
    tableHeadsByRange: [
      'ID',
      'Range',
      'Total'
    ],
    tableHeadsByGender: [
      'ID',
      'Gender',
      'Total'
    ],
    list: [],
    listByGender: [],
    listByRange: []
  };

  constructor(protected restService: RestSerivesService) { 
    
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {

    this.restService.getAll(environment.users).subscribe(
      (data) => {
        this.obj.list = data['data'];
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );

    this.restService.getAll(environment.users + environment.usersByGender).subscribe(
      (data) => {
        this.obj.listByGender = data['data'];
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );

    this.restService.getAll(environment.users + environment.userByRange).subscribe(
      (data) => {
        this.obj.listByRange = data['data'];
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );

  }

}
