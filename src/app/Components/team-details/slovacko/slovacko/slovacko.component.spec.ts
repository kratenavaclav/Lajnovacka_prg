import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlovackoComponent } from './slovacko.component';

describe('SlovackoComponent', () => {
  let component: SlovackoComponent;
  let fixture: ComponentFixture<SlovackoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlovackoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlovackoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
