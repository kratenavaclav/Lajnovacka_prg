import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuklaComponent } from './dukla.component';

describe('DuklaComponent', () => {
  let component: DuklaComponent;
  let fixture: ComponentFixture<DuklaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuklaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuklaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
