import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HradecComponent } from './hradec.component';

describe('HradecComponent', () => {
  let component: HradecComponent;
  let fixture: ComponentFixture<HradecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HradecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HradecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
