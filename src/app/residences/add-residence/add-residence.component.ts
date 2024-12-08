import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  // addResidence= new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   address: new FormControl('')
  // })
constructor( private fb:FormBuilder) { }

addResidence = this.fb.group({
  id: [''],
  name: ['',[Validators.required, Validators.minLength(3)]],
  address: [''],
  image: [''],
  status: ['']
});
  add(){
    console.log(this.addResidence)
  }
}
