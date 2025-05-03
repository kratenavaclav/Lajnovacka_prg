import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlzenComponent } from './plzen.component';

describe('PlzenComponent', () => {
  let component: PlzenComponent;
  let fixture: ComponentFixture<PlzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlzenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
