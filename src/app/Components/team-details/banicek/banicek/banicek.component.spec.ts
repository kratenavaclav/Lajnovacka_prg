import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanicekComponent } from './banicek.component';

describe('BanicekComponent', () => {
  let component: BanicekComponent;
  let fixture: ComponentFixture<BanicekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanicekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanicekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
