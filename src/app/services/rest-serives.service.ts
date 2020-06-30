import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestSerivesService {
  
  private endpoint = "";

  constructor(protected http: HttpClient) {
    this.endpoint = environment.endpoint;
  }

  getAll(path: string) {
    return this.http.get(this.endpoint + path);
  }

  getById(path: string, id: number) {
    return this.http.get(this.endpoint + path + "/" + id);
  }

  create(path: string, obj: any) {
    return this.http.post(this.endpoint + path, obj);
  }

  update(path: string, obj: any) {
    return this.http.put(this.endpoint + path, obj);
  }

  sendForm(type: string, path: string, obj: any){
    if(type == 'POST') {
      return this.http.post(this.endpoint + path, obj);
    } else {
      return this.http.put(this.endpoint + path, obj);
    }
  }

}
