import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlavieComponent } from './slavie.component';

describe('SlavieComponent', () => {
  let component: SlavieComponent;
  let fixture: ComponentFixture<SlavieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlavieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlavieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
