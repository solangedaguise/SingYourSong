import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChansonComponent } from './admin-chanson.component';

describe('AdminChansonComponent', () => {
  let component: AdminChansonComponent;
  let fixture: ComponentFixture<AdminChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChansonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
