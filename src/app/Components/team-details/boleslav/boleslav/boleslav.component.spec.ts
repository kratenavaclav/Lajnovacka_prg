import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoleslavComponent } from './boleslav.component';

describe('BoleslavComponent', () => {
  let component: BoleslavComponent;
  let fixture: ComponentFixture<BoleslavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoleslavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoleslavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
