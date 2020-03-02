import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  valueToDom = 'This is a value from component to dom';

  twoWay = 'twayValue';

  constructor() {
  }

  ngOnInit(): void {
  }

}
