import {Component, OnInit, ViewChild} from '@angular/core';
import {Item, StoreItem} from '../../model/external/nlt.model';
import {ItemService} from '../../services/item.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: StoreItem[];
  dataSource = new MatTableDataSource<StoreItem>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'created', 'modified'];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.dataSource.data = items;
      console.log(this.items);
    });
  }

}
