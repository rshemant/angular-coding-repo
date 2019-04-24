import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInfoComponent } from './pet-info.component';
import { PetListComponent } from '../pet-list/pet-list.component';

import { DebugElement } from '@angular/core';

import { By } from '@angular/platform-browser';

describe('PetInfoComponent', () => {
  let component: PetInfoComponent;
  let fixture: ComponentFixture<PetInfoComponent>;

  let titleEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetInfoComponent, PetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    titleEl = fixture.debugElement.query(By.css('h2'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render title', () => {
    let titleText = '';
    component.title = titleText;
    fixture.detectChanges();
    expect(titleEl.nativeElement.innerHTML === titleText).toBeTruthy();
    expect(titleEl.nativeElement.innerHTML === 'Male').toBeFalsy();

    titleText = 'Male';
    component.title = titleText;
    fixture.detectChanges();
    expect(titleEl.nativeElement.innerHTML === titleText).toBeTruthy();
    expect(titleEl.nativeElement.innerHTML === 'Female').toBeFalsy();

    titleText = 'Female';
    component.title = titleText;
    fixture.detectChanges();
    expect(titleEl.nativeElement.innerHTML === titleText).toBeTruthy();
    expect(titleEl.nativeElement.innerHTML === '').toBeFalsy();
  });
});


