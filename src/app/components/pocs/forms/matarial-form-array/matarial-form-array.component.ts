import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-matarial-form-array',
  templateUrl: './matarial-form-array.component.html',
  styleUrls: ['./matarial-form-array.component.css']
})
export class MatarialFormArrayComponent implements OnInit {

  myForm: FormGroup;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      message: '',
      phones: this.fb.array([])
    });
  }

  get phoneForms(): FormArray {
    return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    this.phoneForms.push(this.createPhoneGroup());
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }

  private createPhoneGroup(): FormGroup {
    return this.fb.group({
      country: '',
      area: '',
      line: ''
    });
  }

}
