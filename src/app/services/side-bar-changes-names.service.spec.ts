import { TestBed } from '@angular/core/testing';

import { SideBarChangesNamesService } from './side-bar-changes-names.service';

describe('SideBarChangesNamesService', () => {
  let service: SideBarChangesNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBarChangesNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
