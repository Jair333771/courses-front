import { Component, OnInit } from '@angular/core';
import { RestSerivesService } from './../../../../services/rest-serives.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {

  obj: any = {
    title: "Courses list",
    table_heads: [
      'Course name',
      'Modality',
      'Duration',
      'Type',
      'Category',
      'Carreer',
      'Actions'
    ],
    list: []
  };

  constructor(protected restService: RestSerivesService) { 
    
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {

    this.restService.getAll(environment.courses).subscribe(
      (data) => {
        this.obj.list = data['data'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
