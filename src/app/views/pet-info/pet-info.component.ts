import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/models/pet/pet.model';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.scss']
})
export class PetInfoComponent implements OnInit {

  @Input() title: string;
  @Input() pets: Pet[];

  constructor() { }

  ngOnInit() { }
}
