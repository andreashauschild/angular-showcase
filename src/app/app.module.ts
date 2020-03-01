import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexformComponent} from './components/flexform/flexform.component';
import {FlexfieldComponent} from './components/flexfield/flexfield.component';
import {ItemListComponent} from './components/item-list/item-list.component';
import {ItemListEntryComponent} from './components/item-list-entry/item-list-entry.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    FlexformComponent,
    FlexfieldComponent,
    ItemListComponent,
    ItemListEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
