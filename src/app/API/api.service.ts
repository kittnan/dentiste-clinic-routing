import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URLAPI!: any;
  constructor(private http: HttpClient) {
    this.URLAPI = environment.URLAPI;
  }

  getMember(): Observable<any> {
    return this.http.get(`${this.URLAPI}/members/`);
  }
  // updateUserLogin(data: any): Observable<any> {
  //   return this.http.post(`${this.URLAPI}/user_api/edit_user`, data);
  // }

  // getClusterDate(): Observable<any> {
  //   return this.http.get(`${this.URLAPI}/cluster_date_api/get_cluster_date`);
  // }
  // insertClusterDate(data: any): Observable<any> {
  //   return this.http.post(
  //     `${this.URLAPI}/cluster_date_api/add_cluster_date`,
  //     data
  //   );
  // }
  // updateClusterDate(data: any): Observable<any> {
  //   return this.http.post(
  //     `${this.URLAPI}/cluster_date_api/edit_cluster_date`,
  //     data
  //   );
  // }
  // deleteClusterDate(data: any): Observable<any> {
  //   return this.http.post(
  //     `${this.URLAPI}/cluster_date_api/delete_cluster_date`,
  //     data
  //   );
  // }
}
