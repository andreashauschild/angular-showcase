import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../model/external/nlt.model';

@Component({
  selector: 'app-item-list-entry',
  templateUrl: './item-list-entry.component.html',
  styleUrls: ['./item-list-entry.component.css']
})
export class ItemListEntryComponent implements OnInit {
  @Input() item: Item
  constructor() { }

  ngOnInit(): void {
  }

}
