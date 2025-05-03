import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberecComponent } from './liberec.component';

describe('LiberecComponent', () => {
  let component: LiberecComponent;
  let fixture: ComponentFixture<LiberecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiberecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiberecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
