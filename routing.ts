import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { ViewPlanComponent } from './view-plan/view-plan.component'

const routes: Routes = [
  {
    path:'addPlan',
    component: AddPlanComponent
  },
  {
    path:'viewPlan',
    component: ViewPlanComponent
  },
  // {
  //   path:'updateAsset/:assetId',
  //   component: UpdateAssetComponent
  // },
  {
    path: '**',
    redirectTo: 'addPlan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
