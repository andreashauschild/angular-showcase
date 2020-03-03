import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

/**
 * 1. Import FormBuilder and FormGroup
 * 2. Declare variable for the FormGroup
 * 3. Add FormBuilder as service to the constructor
 * 4. Begin define formgroup with formbuilder
 * 5. Register Observer to handle data changes
 * 6. Go to html Template
 */

@Component({
  selector: 'app-material-basic',
  templateUrl: './material-basic.component.html',
  styleUrls: ['./material-basic.component.css']
})
export class MaterialBasicComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '' ,
      message: ''
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

}
