import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionLayoutComponent } from './reception-layout.component';

describe('ReceptionLayoutComponent', () => {
  let component: ReceptionLayoutComponent;
  let fixture: ComponentFixture<ReceptionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
