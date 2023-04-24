import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShoesComponent } from './all-shoes.component';

describe('AllShoesComponent', () => {
  let component: AllShoesComponent;
  let fixture: ComponentFixture<AllShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
