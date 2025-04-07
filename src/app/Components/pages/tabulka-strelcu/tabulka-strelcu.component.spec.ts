import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulkaStrelcuComponent } from './tabulka-strelcu.component';

describe('TabulkaStrelcuComponent', () => {
  let component: TabulkaStrelcuComponent;
  let fixture: ComponentFixture<TabulkaStrelcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabulkaStrelcuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabulkaStrelcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
