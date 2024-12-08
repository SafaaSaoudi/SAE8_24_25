import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from 'src/app/core/models/apartment';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  newApart!:Apartment;
  apartForm = new FormGroup({
    apartNum: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    floorNum: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
    surface: new FormControl('', Validators.required),
    terrace: new FormControl('', Validators.required),
    surfaceterrace: new FormControl({value: '', disabled: true}),
    category: new FormControl('', Validators.required),
    ResidenceId: new FormControl('', Validators.required),
  })

  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R3.jpg',
      status: 'En Construction',
    },
  ];
  
  get apartNum() { return this.apartForm.get('apartNum'); }
  get floorNum() { return this.apartForm.get('floorNum'); }
  get surface() { return this.apartForm.get('surface'); }
  get terrace() { return this.apartForm.get('terrace'); }
  get surfaceterrace() { return this.apartForm.get('surfaceterrace'); }
  get category() { return this.apartForm.get('category'); }
  get ResidenceId() { return this.apartForm.get('ResidenceId'); }

  addApartment(){
    //console.log(this.apartForm.value);
   
    // this.newApart.apartNum = Number(this.apartForm.value.apartNum);
    // this.newApart.floorNum = Number(this.apartForm.value.floorNum);
    // this.newApart.surface = Number(this.apartForm.value.surface);
    // this.newApart.terrace = Boolean( this.apartForm.value.terrace);
    // this.newApart.surfaceterrace = Number(this.apartForm.value.surfaceterrace);
    // this.newApart.category = String(this.apartForm.value.category);
    // this.newApart.ResidenceId = Number(this.apartForm.value.ResidenceId);
    // console.log(this.newApart);

    this.newApart = this.apartForm.value as unknown as Apartment;
    console.log(this.newApart);
    
  }
}
