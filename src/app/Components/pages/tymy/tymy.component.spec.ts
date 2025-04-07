import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TymyComponent } from './tymy.component';

describe('TymyComponent', () => {
  let component: TymyComponent;
  let fixture: ComponentFixture<TymyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TymyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TymyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
