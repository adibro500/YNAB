import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
    public queryParamsValue = new BehaviorSubject(false);

     baseUrl = 'http://api.youneedabudget.com'

    constructor(private http: HttpClient) {

    }

    getAllBudgets() {
      return this.http.get(`${this.baseUrl}/v1/budgets`);
    }

    getAllAccountsById(accountId) {
      return this.http.get(`${this.baseUrl}/v1/budgets/${accountId}/accounts`).pipe(map((res: any) => {
        res.data.accounts = res.data.accounts.sort((a, b) => b.balance - a.balance);
        return res;
      }));
    }

    getAllTransactionsById(accountId) {
      return this.http.get(`${this.baseUrl}/v1/budgets/${accountId}/transactions`);
    }

    createAccount(accountId, body) {
      return this.http.post(`${this.baseUrl}/v1/budgets/${accountId}/accounts`, body);
    }
}
