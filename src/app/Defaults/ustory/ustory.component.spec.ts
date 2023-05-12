import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstoryComponent } from './ustory.component';

describe('UstoryComponent', () => {
  let component: UstoryComponent;
  let fixture: ComponentFixture<UstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
