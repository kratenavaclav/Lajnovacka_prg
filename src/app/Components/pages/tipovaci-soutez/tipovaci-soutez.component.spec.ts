import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipovaciSoutezComponent } from './tipovaci-soutez.component';

describe('TipovaciSoutezComponent', () => {
  let component: TipovaciSoutezComponent;
  let fixture: ComponentFixture<TipovaciSoutezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipovaciSoutezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipovaciSoutezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
