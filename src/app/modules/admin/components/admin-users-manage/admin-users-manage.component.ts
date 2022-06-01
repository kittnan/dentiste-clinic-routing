import { Component, OnInit, ViewChild } from '@angular/core';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin-users-manage',
  templateUrl: './admin-users-manage.component.html',
  styleUrls: ['./admin-users-manage.component.scss'],
})
export class AdminUsersManageComponent implements OnInit {
  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData!: any[];

  closeResult = '';
  constructor(private modalService: NgbModal) {}

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  ngOnInit(): void {}

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData = [
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
      { make: 'toyota', model: '7878787', price: '45454545' },
    ];
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
  onAdd(content:any){
    this.modalService.open(content,{size:'xl',backdrop:false})
  }

  
}
