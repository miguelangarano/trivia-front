import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosPersonButtonComponent } from './pos-person-button.component';

describe('PosPersonButtonComponent', () => {
  let component: PosPersonButtonComponent;
  let fixture: ComponentFixture<PosPersonButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosPersonButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosPersonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
