import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PardubiceComponent } from './pardubice.component';

describe('PardubiceComponent', () => {
  let component: PardubiceComponent;
  let fixture: ComponentFixture<PardubiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PardubiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PardubiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
