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
  search$ = createEffect(() => this.actions$.pipe(
    ofType(DashboardActions.getAll),
    switchMap(() => this.googleBooks.getAllBudgets().pipe(
      map((Budgets: any) => {
        console.log('55555', Budgets);
        return DashboardActions.budgetsLoadedSuccess({ Budgets });
      }),
      // catchError((err) =>
      //   of(DashboardActioyns.searchFailure({ errorMsg: err.message }))
      // )
    )),
  ));

  search2$ = createEffect(() => this.actions$.pipe(
    ofType(DashboardActions.getAllAccounts),
    switchMap(() => {
      console.log('88888', this.googleBooks.queryParamsValue);

      // console.log('55555', Accounts);
      return this.googleBooks.getAllAccountsById(this.googleBooks.queryParamsValue.value).pipe(
        map((Accounts: any) => DashboardActions.accountsLoadedSuccess({ Accounts })),
        // catchError((err) =>
        //   of(DashboardActioyns.searchFailure({ errorMsg: err.message }))
        // )
      );
    }),
  ));

search3$ = createEffect(() => this.actions$.pipe(
  ofType(DashboardActions.getAllTransactions),
  switchMap(() => {
    console.log('88888', this.googleBooks.queryParamsValue);

    // console.log('55555', Accounts);
    return this.googleBooks.getAllTransactionsById(this.googleBooks.queryParamsValue.value).pipe(
      map((Transactions: any) => DashboardActions.transactionsLoadedSuccess({ Transactions })),
      // catchError((err) =>
      //   of(DashboardActioyns.searchFailure({ errorMsg: err.message }))
      // )
    );
  }),
));

search4$ = createEffect(() => this.actions$.pipe(
  ofType(DashboardActions.createAccount),
  switchMap((action) => {
    console.log('88888', this.googleBooks.queryParamsValue);

    // console.log('55555', Accounts);
    return this.googleBooks.createAccount(action.BudgetId, action.Body).pipe(
      map((Success: any) => DashboardActions.accountCreatedSuccess({ Success })),
      // catchError((err) =>
      //   of(DashboardActioyns.searchFailure({ errorMsg: err.message }))
      // )
    );
  }),
));

constructor(
    private actions$: Actions,
    private googleBooks: DashboardService,
) {}
}
