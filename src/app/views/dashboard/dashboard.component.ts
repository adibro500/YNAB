import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as BudgetSelectors from './selectors/dashboard.selectors';
import { DashboardActions } from './actions';
import { DashboardService } from './dashboard.service';

@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  budgets$: Observable<any>;

  results: any;

  constructor(private store$: Store, private router: Router) {

  }

  ngOnInit(): void {
    this.store$.dispatch(DashboardActions.getAll());

    this.store$.pipe(select((state) => state)).subscribe((res: any) => {
      this.results = res;
    });
    // console.log(this.results);
  }

  navigateToAccounts(accountId) {
    this.router.navigateByUrl(`/dashboard/account/${accountId}`);
  }

  navigateToTransactions(accountId) {
    this.router.navigateByUrl(`/dashboard/transactions/${accountId}`);
  }
}
