import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulkaLigyComponent } from './tabulka-ligy.component';

describe('TabulkaLigyComponent', () => {
  let component: TabulkaLigyComponent;
  let fixture: ComponentFixture<TabulkaLigyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabulkaLigyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabulkaLigyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
