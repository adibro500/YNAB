import { createSelector } from '@ngrx/store';
import { State } from '../reducers/DashboardReducers';

export const selectBudgets = createSelector((state) => state, (state: State) => state.Budgets);

export const selectAccounts = createSelector((state) => state, (state: State) => state.Accounts);
