import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsSummaryComponent } from '../accounts-summary/accounts-summary.component';
import { TransactionsSummaryComponent } from '../transactions-summary/transactions-summary.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'account/:accountId',
    component: AccountsSummaryComponent,
    pathMatch: 'full',
  },
  {
    path: 'transactions/:accountId',
    component: TransactionsSummaryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
