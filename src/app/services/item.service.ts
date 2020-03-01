import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StoreItem} from '../model/external/nlt.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient
  ) {  }

  getItems(): Observable< StoreItem[] > {
    return this.http.get<StoreItem[]>('http://localhost:8080/item/list');
  }

}
