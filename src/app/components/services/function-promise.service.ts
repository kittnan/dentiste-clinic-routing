import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

@Injectable({
  providedIn: 'root',
})
export class FunctionPromiseService {
  constructor(private API: ApiService) {}

  getMember() {
    return new Promise(resolve=>{
      this.API.getMember().subscribe((res) => { 
        resolve(res)
      });
    })
  }
}
