import { createReducer, on } from '@ngrx/store';

import * as DashboardActions from '../actions/DashboardActions';

export interface State {
    Budgets: any;
    Accounts: any;
  }

const initialState: State = {
  Budgets: undefined,
  Accounts: undefined,
};

export const productsModuleFeatureKey = 'budgets';

export const reducers = createReducer(
  initialState,
  on(DashboardActions.getAll, (state, action) => ({
    ...state,
    action,
  })),
  on(DashboardActions.budgetsLoadedSuccess, (state, { Budgets }) => ({
    ...state,
    Budgets,
  })),
  on(DashboardActions.getAllAccounts, (state, { Body }) => ({
    ...state,
    Body,
  })),
  on(DashboardActions.accountsLoadedSuccess, (state, { Accounts }) => ({
    ...state,
    Accounts,
  })),
  on(DashboardActions.getAllTransactions, (state, { Body }) => ({
    ...state,
    Body,
  })),
  on(DashboardActions.transactionsLoadedSuccess, (state, { Transactions }) => ({
    ...state,
    Transactions,
  })),
  on(DashboardActions.accountCreatedSuccess, (state, { Success }) => ({
    ...state,
    Success,
  })),

);
