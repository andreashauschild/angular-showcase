import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {Form1Component} from './components/pocs/form1/form1.component';
import {ItemListComponent} from './components/item-list/item-list.component';
import {DatabindingComponent} from './components/pocs/databinding/databinding.component';


const routes: Routes = [
  {path: '', component: ItemListComponent},
  {path: 'form1', component: Form1Component},
  {path: 'databinding', component: DatabindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
