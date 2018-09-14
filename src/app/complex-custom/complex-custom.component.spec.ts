import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexCustomComponent } from './complex-custom.component';

describe('ComplexCustomComponent', () => {
  let component: ComplexCustomComponent;
  let fixture: ComponentFixture<ComplexCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
