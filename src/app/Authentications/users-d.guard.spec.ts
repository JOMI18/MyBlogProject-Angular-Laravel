import { TestBed } from '@angular/core/testing';

import { UsersDGuard } from './users-d.guard';

describe('UsersDGuard', () => {
  let guard: UsersDGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersDGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
