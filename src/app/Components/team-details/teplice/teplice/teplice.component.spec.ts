import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TepliceComponent } from './teplice.component';

describe('TepliceComponent', () => {
  let component: TepliceComponent;
  let fixture: ComponentFixture<TepliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TepliceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TepliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
