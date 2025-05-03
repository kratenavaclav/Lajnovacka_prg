import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudejkyComponent } from './budejky.component';

describe('BudejkyComponent', () => {
  let component: BudejkyComponent;
  let fixture: ComponentFixture<BudejkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudejkyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudejkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
