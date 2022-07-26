import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account/account.component';
import { ProfileComponent } from './account/profile/profile.component';
import { ChildComponent } from './parentchid/parent/child/child.component';
import { ParentComponent } from './parentchid/parent/parent.component';




const routes: Routes = [
  // { path: "", redirectTo: "", pathMatch: "full" },
  { path: "accounts", component: AccountComponent },
  { path: "parent", component: ParentComponent },
  { path: "child", component: ChildComponent },
  { path: "profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
