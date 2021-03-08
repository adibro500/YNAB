import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError, debounceTime, map, switchMap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { DashboardActions } from '../actions';
import { DashboardService } from '../dashboard.service';

@Injectable()
export class ProductEffects {
  getAllBudgets$ = createEffect(() => this.actions$.pipe(
    ofType(DashboardActions.getAll),
    switchMap(() => this.service.getAllBudgets().pipe(
      map((Budgets: any) => {
        return DashboardActions.budgetsLoadedSuccess({ Budgets });
      }),
      catchError((err) =>
        of(DashboardActions.apiError({ ErrorMsg: err.message }))
      )
    )),
  ));

  getAllAccounts$ = createEffect(() => this.actions$.pipe(
    ofType(DashboardActions.getAllAccounts),
    switchMap(() => {
      console.log('88888', this.service.queryParamsValue);

      // console.log('55555', Accounts);
      return this.service.getAllAccountsById(this.service.queryParamsValue.value).pipe(
        map((Accounts: any) => DashboardActions.accountsLoadedSuccess({ Accounts })),
        catchError((err) =>
          of(DashboardActions.apiError({ ErrorMsg: err.message }))
        )
      );
    }),
  ));

  getAllTransactions$ = createEffect(() => this.actions$.pipe(
  ofType(DashboardActions.getAllTransactions),
  switchMap(() => {
    console.log('88888', this.service.queryParamsValue);

    // console.log('55555', Accounts);
    return this.service.getAllTransactionsById(this.service.queryParamsValue.value).pipe(
      map((Transactions: any) => DashboardActions.transactionsLoadedSuccess({ Transactions })),
      catchError((err) =>
        of(DashboardActions.apiError({ ErrorMsg: err.message }))
      )
    );
  }),
));

createAccount$ = createEffect(() => this.actions$.pipe(
  ofType(DashboardActions.createAccount),
  switchMap((action) => {
    console.log('88888', this.service.queryParamsValue);

    // console.log('55555', Accounts);
    return this.service.createAccount(action.BudgetId, action.Body).pipe(
      map((Success: any) => DashboardActions.accountCreatedSuccess({ Success })),
      catchError((err) =>
        of(DashboardActions.apiError({ ErrorMsg: err.message }))
      )
    );
  }),
));

constructor(
    private actions$: Actions,
    private service: DashboardService,
) {}
}
