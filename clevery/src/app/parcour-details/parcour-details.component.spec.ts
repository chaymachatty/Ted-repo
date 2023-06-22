import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcourDetailsComponent } from './parcour-details.component';

describe('ParcourDetailsComponent', () => {
  let component: ParcourDetailsComponent;
  let fixture: ComponentFixture<ParcourDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcourDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
