import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutngModule } from './pages/pages.routing';
import { AuthRoutngModule } from './auth/auth.routing';

const routes: Routes =
  [
    { path: "", redirectTo: "/deshboard", pathMatch: "full" },
    { path: "**", component: NopagefoundComponent }
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), PagesRoutngModule, AuthRoutngModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
