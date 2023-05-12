import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnovelsComponent } from './unovels.component';

describe('UnovelsComponent', () => {
  let component: UnovelsComponent;
  let fixture: ComponentFixture<UnovelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnovelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
