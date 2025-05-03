import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartaComponent } from './sparta.component';

describe('SpartaComponent', () => {
  let component: SpartaComponent;
  let fixture: ComponentFixture<SpartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
