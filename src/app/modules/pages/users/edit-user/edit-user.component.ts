import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {environment } from './../../../../../environments/environment'
import { RestSerivesService } from './../../../../services/rest-serives.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  obj: any = {
    item: {},
    id: 0,
    status: null
  }

  constructor(
    protected restService: RestSerivesService, 
    protected router: Router, 
    private activeRoute: ActivatedRoute) {

    if(this.router.url == '/courses/new') {
      this.obj.title = 'Crear un nuevo curso';
    } else {
      this.obj.title = 'Editar el curso';
      this.obj.id = this.activeRoute.snapshot.params['id'];
      this.getById(this.obj.id);
    }

  }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    this.obj.item = form.value;
    this.sendForm();
  }

  getById(id: number) {
    
    this.restService.getById(environment.users, id).subscribe(
      (data) => {
        this.obj.item = data['data'];
      },
      (error) => {
        console.error(error);
      }
    );

  }

  sendForm() {
    
    let type = (this.obj.item.id != null) ? 'PUT': 'POST';

    this.restService.sendForm(type, environment.users, this.obj.item).subscribe(
      (data) => {
        this.obj.item = data['data'];
        this.obj.status = environment.status[0];
      },
      (error) => {
        console.error(error);
        this.obj.status = environment.status[2];
      }
    );
    
  }


}
