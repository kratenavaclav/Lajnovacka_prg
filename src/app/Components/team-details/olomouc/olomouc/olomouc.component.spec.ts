import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlomoucComponent } from './olomouc.component';

describe('OlomoucComponent', () => {
  let component: OlomoucComponent;
  let fixture: ComponentFixture<OlomoucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlomoucComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlomoucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
