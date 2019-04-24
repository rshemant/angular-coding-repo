import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Owner, Gender } from 'src/app/models/owner/owner.model';
import { Pet, PetType } from 'src/app/models/pet/pet.model';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PeopleDataService {

    RESOURCE_URL = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getPeople(): Observable<Owner[]> {
        return this.http.get(this.RESOURCE_URL) as Observable<Owner[]>;
    }

    public getOwnerFilterByGender(ownerList: Owner[], gender: Gender): Owner[] {
        return ownerList.filter((owner: Owner) => owner.gender === gender);
    }

    public getPetFilterByType(petList: Pet[], petType: PetType): Pet[] {
        return petList.filter((pet: Pet) => pet.type === petType);
    }

    public combinePetsOfOwner(ownerList: Owner[]): Pet[] {
        return ownerList.reduce((petList: Pet[], cur: Owner) => {
            petList.push(...cur.pets);
            return petList;
        }, []);
    }

    public sortPetsByOwnerGenderAndType(ownerList: Owner[], gender: Gender, petType: PetType): Pet[] {

        const localOwnerList = this.getOwnerFilterByGender(ownerList, gender);

        let localPetList: Pet[];

        localPetList = this.combinePetsOfOwner(localOwnerList);
        localPetList = this.getPetFilterByType(localPetList, petType);

        return localPetList.sort((petA: Pet, petB: Pet) => petA.name.localeCompare(petB.name));
    }

}
