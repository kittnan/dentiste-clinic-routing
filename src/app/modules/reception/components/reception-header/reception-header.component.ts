import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception-header',
  templateUrl: './reception-header.component.html',
  styleUrls: ['./reception-header.component.scss']
})
export class ReceptionHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }

  onLogout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
