import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestButtonComponent } from './interest-button.component';

describe('InterestButtonComponent', () => {
  let component: InterestButtonComponent;
  let fixture: ComponentFixture<InterestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
