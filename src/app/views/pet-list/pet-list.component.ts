import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet/pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.sass']
})
export class PetListComponent implements OnInit {

  @Input() pets: Pet[];

  constructor() { }

  ngOnInit() {
  }

}
