import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultStoriesComponent } from './default-stories.component';

describe('DefaultStoriesComponent', () => {
  let component: DefaultStoriesComponent;
  let fixture: ComponentFixture<DefaultStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
