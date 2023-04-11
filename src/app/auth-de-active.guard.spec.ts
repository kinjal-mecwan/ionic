import { TestBed } from '@angular/core/testing';

import { AuthDeActiveGuard } from './auth-de-active.guard';

describe('AuthDeActiveGuard', () => {
  let guard: AuthDeActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDeActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
