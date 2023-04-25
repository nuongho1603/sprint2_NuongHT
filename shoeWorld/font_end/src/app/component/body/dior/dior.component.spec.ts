import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiorComponent } from './dior.component';

describe('DiorComponent', () => {
  let component: DiorComponent;
  let fixture: ComponentFixture<DiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
