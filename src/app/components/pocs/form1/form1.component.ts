import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})


export class Form1Component implements OnInit {
  // data that will be fetched
  item;

  // property to store form model
  form1Form;

  constructor(private formBuilder: FormBuilder) {
    this.form1Form = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.item = {
      name: 'Max Mustermann',
      address: 'Musterstrase 555'
    };
  }

  onSubmit(data) {
    console.log('Data submitted - name:' + data.name + ' address ' + data.address);
  }

}
