import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMusicComponent } from './admin-music.component';

describe('AdminMusicComponent', () => {
  let component: AdminMusicComponent;
  let fixture: ComponentFixture<AdminMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
