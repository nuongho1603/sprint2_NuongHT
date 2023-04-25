import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepComponent } from './dep.component';

describe('DepComponent', () => {
  let component: DepComponent;
  let fixture: ComponentFixture<DepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
