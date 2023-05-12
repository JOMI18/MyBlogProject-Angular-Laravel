import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMyStoryComponent } from './admin-my-story.component';

describe('AdminMyStoryComponent', () => {
  let component: AdminMyStoryComponent;
  let fixture: ComponentFixture<AdminMyStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMyStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
