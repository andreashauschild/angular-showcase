import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {Form1Component} from './components/pocs/form1/form1.component';
import {ItemListComponent} from './components/item-list/item-list.component';
import {DatabindingComponent} from './components/pocs/databinding/databinding.component';
import {MaterialBasicComponent} from './components/pocs/forms/material-basic/material-basic.component';
import {MatarialNestedComponent} from './components/pocs/forms/matarial-nested/matarial-nested.component';
import {MatarialFormArrayComponent} from './components/pocs/forms/matarial-form-array/matarial-form-array.component';


const routes: Routes = [
  {path: '', component: ItemListComponent},
  {path: 'form1', component: Form1Component},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'material-basic', component: MaterialBasicComponent},
  {path: 'material-nested', component: MatarialNestedComponent},
  {path: 'material-form-array', component: MatarialFormArrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
