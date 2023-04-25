import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaySucComponent } from './giay-suc.component';

describe('GiaySucComponent', () => {
  let component: GiaySucComponent;
  let fixture: ComponentFixture<GiaySucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaySucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaySucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
