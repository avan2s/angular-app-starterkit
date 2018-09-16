import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FistPrimeNgComponent } from './fist-prime-ng.component';

describe('FistPrimeNgComponent', () => {
  let component: FistPrimeNgComponent;
  let fixture: ComponentFixture<FistPrimeNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FistPrimeNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FistPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
