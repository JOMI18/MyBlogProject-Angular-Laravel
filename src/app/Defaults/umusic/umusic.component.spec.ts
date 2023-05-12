import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmusicComponent } from './umusic.component';

describe('UmusicComponent', () => {
  let component: UmusicComponent;
  let fixture: ComponentFixture<UmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
