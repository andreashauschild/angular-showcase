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
import {Form1Component} from './components/pocs/form1/form1.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {DatabindingComponent} from './components/pocs/databinding/databinding.component';


@NgModule({
  declarations: [
    AppComponent,
    FlexformComponent,
    FlexfieldComponent,
    ItemListComponent,
    ItemListEntryComponent,
    Form1Component,
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
