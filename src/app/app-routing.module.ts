import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account/account.component';
import { AddEditComponent } from './account/add-edit/add-edit.component';
import { ProfileComponent } from './account/profile/profile.component';
import { NewComponent } from './new/new.component';
import { ChildComponent } from './child/child.component';
import { HelloComponent } from './hello/hello.component';



const routes: Routes = [
  // { path: "", redirectTo: "", pathMatch: "full" },
  { path: "accounts", component: AccountComponent },
  { path: "child", component: ChildComponent },
  { path: "profile", component: ProfileComponent },
  { path: "addedit", component: AddEditComponent },
  { path: "new", component: NewComponent },
  { path: "hello", component: HelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
