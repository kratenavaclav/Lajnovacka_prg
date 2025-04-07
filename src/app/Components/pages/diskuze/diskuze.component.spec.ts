import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskuzeComponent } from './diskuze.component';

describe('DiskuzeComponent', () => {
  let component: DiskuzeComponent;
  let fixture: ComponentFixture<DiskuzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiskuzeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiskuzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
