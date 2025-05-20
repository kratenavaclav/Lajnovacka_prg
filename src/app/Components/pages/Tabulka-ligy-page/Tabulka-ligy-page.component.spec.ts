import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulkaLigyPageComponent } from './Tabulka-ligy-page.component';

describe('TabulkaLigyComponent', () => {
  let component: TabulkaLigyPageComponent;
  let fixture: ComponentFixture<TabulkaLigyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabulkaLigyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabulkaLigyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});