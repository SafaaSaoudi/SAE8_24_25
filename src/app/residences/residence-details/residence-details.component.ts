import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {

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

  Residence?:Residence
  id!:Number;
  constructor(private actR:ActivatedRoute){}

  ngOnInit(){
    //snapshot
// this.id=this.actR.snapshot.params['id'];
this.id=Number(this.actR.snapshot.paramMap.get('id'));
//Observable
this.actR.paramMap.subscribe(data => this.id= Number(data.get('id')));
this.Residence=this.listResidences.find(R => R.id == this.id)
}}
