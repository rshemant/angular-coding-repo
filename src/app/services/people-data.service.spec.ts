import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PeopleDataService } from './people-data.service';
import { Owner } from '../models/owner/owner.model';
import { Pet } from '../models/pet/pet.model';

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

  it('Should return owners filtered by gender', async () => {
    const mockResponse = [
      {
        name: 'Steve',
        gender: 'Male',
        age: 45,
        pets: null
      },
      {
        name: 'Jennifer',
        gender: 'Female',
        age: 18,
        pets: [
          {
            name: 'Garfield',
            type: 'Cat'
          }
        ]
      },
      {
        name: 'Fred',
        gender: 'Male',
        age: 40,
        pets: [
          {
            name: 'Tom',
            type: 'Cat'
          },
          {
            name: 'Max',
            type: 'Cat'
          },
          {
            name: 'Sam',
            type: 'Dog'
          },
          {
            name: 'Jim',
            type: 'Cat'
          }
        ]
      }
    ];

    service
      .getPeople()
      .subscribe((owners: Owner[]) => {
        // Only Owners That Are Male
        const onlyMaleOwners = service.getOwnerFilterByGender(owners, 'Male');
        expect(onlyMaleOwners.every((owner: Owner) => owner.gender === 'Male')).toBeTruthy();
        expect(onlyMaleOwners.every((owner: Owner) => owner.gender === 'Female')).toBeFalsy();

        // Only Owners That Are Female
        const onlyFemaleOwners = service.getOwnerFilterByGender(owners, 'Female');
        expect(onlyFemaleOwners.every((owner: Owner) => owner.gender === 'Female')).toBeTruthy();
        expect(onlyFemaleOwners.every((owner: Owner) => owner.gender === 'Male')).toBeFalsy();

      });

    const mockReq = httpMock.expectOne(service.RESOURCE_URL);
    console.log(mockReq);
    mockReq.flush(mockResponse);
  });


  it('Should combine pets of owners', async () => {
    const mockResponse = [
      {
        name: 'Steve',
        gender: 'Male',
        age: 45,
        pets: null
      },
      {
        name: 'Jennifer',
        gender: 'Female',
        age: 18,
        pets: [
          {
            name: 'Garfield',
            type: 'Cat'
          }
        ]
      },
      {
        name: 'Fred',
        gender: 'Male',
        age: 40,
        pets: [
          {
            name: 'Tom',
            type: 'Cat'
          },
          {
            name: 'Max',
            type: 'Cat'
          },
          {
            name: 'Sam',
            type: 'Dog'
          },
          {
            name: 'Jim',
            type: 'Cat'
          }
        ]
      }
    ];

    const expectedPetList: Pet[] = [
      { name: 'Garfield', type: 'Cat' },
      { name: 'Tom', type: 'Cat' },
      { name: 'Max', type: 'Cat' },
      { name: 'Sam', type: 'Dog' },
      { name: 'Jim', type: 'Cat' }
    ];

    service
      .getPeople()
      .subscribe((owners: Owner[]) => {
        // Combined list of Pets
        const AllPets = service.combinePetsOfOwner(owners);
        expect(AllPets).toEqual(expectedPetList);
      });

    const mockReq = httpMock.expectOne(service.RESOURCE_URL);
    console.log(mockReq);
    mockReq.flush(mockResponse);
  });

  it('Should sort resulting pet list alphabetically', () => {
    const mockOwners: Owner[] = [
      {
        name: 'Bob',
        gender: 'Male',
        age: 23,
        pets: [
          { name: 'Zaggy', type: 'Dog' },
          { name: 'Albert', type: 'Dog' },
        ]
      },
      {
        name: 'Jennifer',
        gender: 'Female',
        age: 32,
        pets: [
          { name: 'Mittens', type: 'Cat' },
          { name: 'Candy', type: 'Cat' },
        ]
      },
    ];

    const expectedMaleOwnedDogNames: string[] = [
      'Albert',
      'Zaggy',
    ];

    const expectedFemaleOwnedCatNames: string[] = [
      'Candy',
      'Mittens',
    ];

    service
      .getPeople()
      .subscribe((owners: Owner[]) => {
        // Pets of Male Owners Are Sorted Alphabetically
        const onlyMaleOwnedDogs = service
          .sortPetsByOwnerGenderAndType(owners, 'Male', 'Dog')
          .map((pet: Pet) => pet.name);
        expect(onlyMaleOwnedDogs).toEqual(expectedMaleOwnedDogNames);

        // Pets of Female Owners Are Sorted Alphabetically
        const onlyFemaleOwnedCats = service
          .sortPetsByOwnerGenderAndType(owners, 'Female', 'Cat')
          .map((pet: Pet) => pet.name);
        expect(onlyFemaleOwnedCats).toEqual(expectedFemaleOwnedCatNames);
      });

    const mockReq = httpMock.expectOne(service.RESOURCE_URL);
    mockReq.flush(mockOwners);
  });
});
