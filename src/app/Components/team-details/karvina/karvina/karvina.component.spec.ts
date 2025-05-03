import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarvinaComponent } from './karvina.component';

describe('KarvinaComponent', () => {
  let component: KarvinaComponent;
  let fixture: ComponentFixture<KarvinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KarvinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarvinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
