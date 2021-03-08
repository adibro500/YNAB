import { createReducer, on } from '@ngrx/store';

import * as DashboardActions from '../actions/DashboardActions';

export interface State {
    Accounts: any;
  }

const initialState: State = {
  Accounts: undefined,
};

export const productsModuleFeatureKey = 'accounts';

export const reducers = createReducer(
  initialState,
  on(DashboardActions.getAllAccounts, (state, action) => ({
    ...state,
    action,
  })),
  on(DashboardActions.accountsLoadedSuccess, (state, { Accounts }) => ({
    ...state,
    Accounts,
  })),
  on(DashboardActions.getAllAccounts, (state, { Body }) => ({
    ...state,
    Body,
  })),
  on(DashboardActions.accountsLoadedSuccess, (state, { Accounts }) => ({
    ...state,
    Accounts,
  })),

);
