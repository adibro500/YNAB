import { createAction, props } from '@ngrx/store';

export const getAll = createAction(
  '[Dashboard] Get All Budgets',
);

export const budgetsLoadedSuccess = createAction(
  '[Dashboard] budgets fetched success',
  props<{Budgets: any}>(),
);

export const getAllAccounts = createAction(
  '[Accounts] Get All Accounts',
  props<{Body: String}>(),
);

export const accountsLoadedSuccess = createAction(
  '[Accounts] accounts fetched success',
  props<{Accounts: any}>(),
);

export const getAllTransactions = createAction(
  '[Transactions] Get All Transactions',
  props<{Body: String}>(),
);

export const transactionsLoadedSuccess = createAction(
  '[Accounts] transactions fetched success',
  props<{Transactions: any}>(),
);

export const createAccount = createAction(
  '[Accounts] create account',
  props<{BudgetId: any, Body: any }>(),
);

export const accountCreatedSuccess = createAction(
  '[Accounts] create account success',
  props<{Success: any}>(),
);
