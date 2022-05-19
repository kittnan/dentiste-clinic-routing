import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersManageComponent } from './admin-users-manage.component';

describe('AdminUsersManageComponent', () => {
  let component: AdminUsersManageComponent;
  let fixture: ComponentFixture<AdminUsersManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsersManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
