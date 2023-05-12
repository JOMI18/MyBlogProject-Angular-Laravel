import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAestheticsComponent } from './admin-aesthetics.component';

describe('AdminAestheticsComponent', () => {
  let component: AdminAestheticsComponent;
  let fixture: ComponentFixture<AdminAestheticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAestheticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAestheticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
