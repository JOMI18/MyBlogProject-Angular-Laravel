import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaestheticsComponent } from './uaesthetics.component';

describe('UaestheticsComponent', () => {
  let component: UaestheticsComponent;
  let fixture: ComponentFixture<UaestheticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaestheticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UaestheticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
