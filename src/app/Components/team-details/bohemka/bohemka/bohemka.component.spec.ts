import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BohemkaComponent } from './bohemka.component';

describe('BohemkaComponent', () => {
  let component: BohemkaComponent;
  let fixture: ComponentFixture<BohemkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BohemkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BohemkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
