import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJoueurComponent } from './admin-joueur.component';

describe('AdminJoueurComponent', () => {
  let component: AdminJoueurComponent;
  let fixture: ComponentFixture<AdminJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
