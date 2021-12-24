import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourKaraokeComponent } from './tour-karaoke.component';

describe('TourKaraokeComponent', () => {
  let component: TourKaraokeComponent;
  let fixture: ComponentFixture<TourKaraokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourKaraokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourKaraokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
