import { Component, OnInit } from '@angular/core';
import { PeopleDataService } from 'src/app/services/people-data.service';
import { Pet } from 'src/app/models/pet/pet.model';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.sass']
})
export class PetPageComponent implements OnInit {

  catsOwnedByMales: Pet[] = [];
  catsOwnedByFemales: Pet[] = [];

  constructor(private dataService: PeopleDataService) { }

  ngOnInit() {
    this.dataService.getPeople().subscribe(
      ownerList => {
        this.catsOwnedByMales = this.dataService
          .sortPetsByOwnerGenderAndType(ownerList, 'Male', 'Cat' );

        this.catsOwnedByFemales = this.dataService
          .sortPetsByOwnerGenderAndType(ownerList, 'Female', 'Cat');
      }
    );
  }

}