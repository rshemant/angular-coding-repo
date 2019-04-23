import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PeopleDataService } from './people-data.service';
import { Owner } from '../models/owner/owner.model';

import { environment } from '../../environments/environment';

describe('PeopleDataService', () => {
  let injector: TestBed;
  let service: PeopleDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleDataService]
    });

    injector = getTestBed();
    service = injector.get(PeopleDataService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get list of owners', () => {
    const mockOwners: Owner[] = [
      {
        name: 'Bob',
        gender: 'Male',
        age: 23,
        pets: [
          { name: 'Fido', type: 'Dog' },
          { name: 'Fido', type: 'Cat' },
        ]
      }
    ];

    service
      .getPeople()
      .subscribe((owners: Owner[]) => {
        expect(owners).toBe(mockOwners);
      });

    const mockRequest = httpMock.expectOne(environment.apiUrl);

    expect(mockRequest.cancelled).toBeFalsy();
    expect(mockRequest.request.responseType).toEqual('json');

    mockRequest.flush(mockOwners);
  });

});
