import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodiiComponent } from './bodii.component';

describe('BodiiComponent', () => {
  let component: BodiiComponent;
  let fixture: ComponentFixture<BodiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
