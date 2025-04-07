import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlavniStrankaComponent } from './hlavni-stranka.component';

describe('HlavniStrankaComponent', () => {
  let component: HlavniStrankaComponent;
  let fixture: ComponentFixture<HlavniStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HlavniStrankaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HlavniStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
