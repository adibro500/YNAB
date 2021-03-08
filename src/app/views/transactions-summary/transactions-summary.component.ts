import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DashboardActions } from '../dashboard/actions';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-transactions-summary',
  templateUrl: './transactions-summary.component.html',
  styleUrls: ['./transactions-summary.component.scss'],
})
export class TransactionsSummaryComponent implements OnInit {
  results: any;

  constructor(private store$: Store, private router: Router, private route: ActivatedRoute, private service: DashboardService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      console.log(params.params.accountId);
      this.service.queryParamsValue.next(params.params.accountId);
      this.service.queryParamsValue.subscribe((val: any) => {
        this.store$.dispatch(DashboardActions.getAllTransactions(val));

        this.store$.pipe(select((state) => state)).subscribe((res: any) => {
          this.results = res;
        });
        console.log(this.results);
      });
    });
  }
}
