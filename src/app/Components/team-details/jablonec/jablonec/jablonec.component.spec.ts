import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JablonecComponent } from './jablonec.component';

describe('JablonecComponent', () => {
  let component: JablonecComponent;
  let fixture: ComponentFixture<JablonecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JablonecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JablonecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
