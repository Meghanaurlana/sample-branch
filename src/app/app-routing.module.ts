import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms/reactiveforms.component';



const routes: Routes = [
  { path: "", redirectTo: "reactiveforms", pathMatch: "full" },
  { path: "reactiveforms", component: ReactiveformsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
