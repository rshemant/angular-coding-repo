import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPageComponent } from './pet-page.component';
import { PetInfoComponent } from '../pet-info/pet-info.component';
import { PetListComponent } from '../pet-list/pet-list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PeopleDataService } from 'src/app/services/people-data.service';

describe('PetPageComponent', () => {
  let component: PetPageComponent;
  let fixture: ComponentFixture<PetPageComponent>;
  let peopleService: PeopleDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PetPageComponent, PetInfoComponent, PetListComponent ],
      providers: [
        PeopleDataService
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPageComponent);
    component = fixture.componentInstance;
    peopleService = TestBed.get(PeopleDataService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
