import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetPageComponent } from './pet-page.component';
import { PetInfoComponent } from '../pet-info/pet-info.component';
import { PetListComponent } from '../pet-list/pet-list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PetPageComponent', () => {
  let component: PetPageComponent;
  let fixture: ComponentFixture<PetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PetPageComponent, PetInfoComponent, PetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
