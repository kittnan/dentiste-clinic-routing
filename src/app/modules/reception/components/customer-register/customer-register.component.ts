import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/API/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss'],
})
export class CustomerRegisterComponent implements OnInit {
  registerForm = new FormGroup({
    customerId: new FormControl('', Validators.required),
    idCard: new FormControl('', Validators.required),
    titleName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthDay: new FormControl('', Validators.required),
    age: new FormControl(''),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    xrayImage: new FormControl([]),
    congenitalDisease: new FormControl('', Validators.required),
    allergic: new FormControl('', Validators.required),
    description: new FormControl(''),
    status: new FormControl('', Validators.required),
    tokenLine: new FormControl(''),
    updateBy: new FormControl('', Validators.required),
  });

  public get registerFormControl(): any {
    return this.registerForm.controls;
  }

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.setCustomerId();
  }

  private setCustomerId() {
    this.api.getCustomers().subscribe((res) => {
      const customers: any = res;
      console.log(customers);

      if (customers.length == 0) {
        const newCustomerId: any = 'NH-0001';
        this.registerForm.controls['customerId'].setValue(newCustomerId);
        this.registerForm.controls['status'].setValue('customer');

        const uerLogin: any = localStorage.getItem('access');
        this.registerForm.controls['updateBy'].setValue(uerLogin);
      } else {
        const lastCustomer: any = customers[customers.length - 1];
        const oldCustomerId: any = lastCustomer.customerId.split('-')[1];
        console.log(oldCustomerId);
        const oldCustomerIdNumber: number = Number(oldCustomerId) + 1;
        const len: any = oldCustomerIdNumber.toString().length;
        let newCustomerId: any = '';
        if (len == 1) {
          newCustomerId = `NH-000` + oldCustomerIdNumber;
        }
        if (len == 2) {
          newCustomerId = `NH-00` + oldCustomerIdNumber;
        }
        if (len == 3) {
          newCustomerId = `NH-0` + oldCustomerIdNumber;
        }
        this.registerForm.controls['customerId'].setValue(newCustomerId);
        this.registerForm.controls['status'].setValue('customer');

        const uerLogin: any = localStorage.getItem('access');
        this.registerForm.controls['updateBy'].setValue(uerLogin);
      }
    });
  }

  onSubmit() {
    Swal.fire({
      title: 'Do you want to add new customer?',
      icon: 'question',
      showCancelButton: true,
    }).then((r) => {
      if (r.isConfirmed) {
        const age: any = this.calAge();
        this.addNewCustomer(age);
      }
    });
  }

  private calAge() {
    const bd: any = this.registerForm.controls['birthDay'].value;
    const bdTime: any = new Date(bd).getTime();
    const nowTime: any = new Date().getTime();
    const range: any = nowTime - bdTime;
    const age: any = (Number(range) / (1000 * 60 * 60 * 24 * 365)).toFixed(0);
    // console.log(range);
    // console.log(age);
    return age;
  }

  addNewCustomer(age: any) {
    this.registerForm.controls['age'].setValue(age);
    console.log(age);
    console.log(this.registerForm.value);
    this.api.addCsutomer(this.registerForm.value).subscribe((res) => {
      console.log(res);
      if (res.length > 0) {
        Swal.fire('Success','','success')
        setTimeout(() => {
          location.reload()
        }, 2000);
      }else{
        Swal.fire('Invalid!!','','error')
      }
    });
  }
}
