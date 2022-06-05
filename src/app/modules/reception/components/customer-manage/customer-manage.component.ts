import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ColDef, GridApi } from 'ag-grid-community';
import { ApiService } from 'src/app/API/api.service';
declare var $: any;
@Component({
  selector: 'app-customer-manage',
  templateUrl: './customer-manage.component.html',
  styleUrls: ['./customer-manage.component.scss'],
})
export class CustomerManageComponent implements OnInit {
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  columnDefs: ColDef[] = [
    { field: 'customerId', headerName: 'ID' },
    { field: 'idCard', headerName: 'ID Card' },
    { field: 'titleName' },
    { field: 'firstName' },
    { field: 'lastName' },
    { field: 'gender' },
    { field: 'birthDay' },
    { field: 'age' },
    { field: 'address' },
    { field: 'phoneNumber' },
    { field: 'congenitalDisease' },
    { field: 'allergic' },
    { field: 'description' },
  ];

  gridApi!: GridApi;
  rowData: any[] = [];
  constructor(
    private api: ApiService,
    private md: NgbModal,
    config: NgbModalConfig
    // public activeModal: NgbActiveModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.api.getCustomers().subscribe((res) => {
      if (res.length > 0) {
        this.rowData = res.map((customer: any) => {
          customer['age'] = this.calAge(customer.birthDay);
          customer['birthDay'] = new Date(
            customer.birthDay
          ).toLocaleDateString();
          return customer;
        });
      }
    });
  }

  private calAge(bd: any) {
    const bdTime: any = new Date(bd).getTime();
    const nowTime: any = new Date().getTime();
    const range: any = nowTime - bdTime;
    const age: any = (Number(range) / (1000 * 60 * 60 * 24 * 365)).toFixed(0);
    return age;
  }

  onGridReady(e: any) {}

  test(){
    $('#exampleModal').modal();
  }

}
