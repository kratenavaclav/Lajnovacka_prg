import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './team-list.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle sidebar visibility', () => {
    expect(component.isOpen).toBeFalse();
    component.toggleSidebar();
    expect(component.isOpen).toBeTrue();
  });
});
