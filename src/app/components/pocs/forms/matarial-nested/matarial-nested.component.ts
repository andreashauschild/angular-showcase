import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-matarial-nested',
  templateUrl: './matarial-nested.component.html',
  styleUrls: ['./matarial-nested.component.css']
})
export class MatarialNestedComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const phone =

      this.myForm = this.fb.group({
        email: '',
        message: '',
        homePhone: this.createPhoneGroup(),
        mobilePhone: this.createPhoneGroup()
      });
  }

  createPhoneGroup() {
    return this.fb.group({
      country: '',
      area: '',
      line: ''
    });
  }

}
