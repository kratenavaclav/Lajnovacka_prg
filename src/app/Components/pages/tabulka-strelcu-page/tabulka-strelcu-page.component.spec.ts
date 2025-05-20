import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulkaStrelcuPageComponent } from './tabulka-strelcu-page.component';

describe('TabulkaLigyComponent', () => {
  let component: TabulkaStrelcuPageComponent;
  let fixture: ComponentFixture<TabulkaStrelcuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabulkaStrelcuPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabulkaStrelcuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});