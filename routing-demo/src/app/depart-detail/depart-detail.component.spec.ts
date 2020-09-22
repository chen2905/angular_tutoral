import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartDetailComponent } from './depart-detail.component';

describe('DepartDetailComponent', () => {
  let component: DepartDetailComponent;
  let fixture: ComponentFixture<DepartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
