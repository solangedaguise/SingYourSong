import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditJoueurComponent } from './form-edit-joueur.component';

describe('FormEditJoueurComponent', () => {
  let component: FormEditJoueurComponent;
  let fixture: ComponentFixture<FormEditJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
