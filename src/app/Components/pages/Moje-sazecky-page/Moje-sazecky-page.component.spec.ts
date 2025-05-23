import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeSazeckyPageComponent } from './Moje-sazecky-page.component';

describe('TipovaciSoutezComponent', () => {
  let component: MojeSazeckyPageComponent;
  let fixture: ComponentFixture<MojeSazeckyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MojeSazeckyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojeSazeckyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
