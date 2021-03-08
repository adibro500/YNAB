import {
  AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild,
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Table } from 'primeng/table';
import { isTypeOnlyImportOrExportDeclaration } from 'typescript';
import { DashboardActions } from '../dashboard/actions';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-accounts-summary',
  templateUrl: './accounts-summary.component.html',
  styleUrls: ['./accounts-summary.component.scss'],
})
export class AccountsSummaryComponent implements OnInit {
  results: any;

  modalRef: BsModalRef;

  newAccount: any = {
    account: {

    },
  };

  typesOfAccounts = [
    { name: 'Select Type', code: -1 },
    { name: 'Checking', code: 'checking' },
    { name: 'Cash', code: 'cash' },
    { name: 'Saving', code: 'saving' },
  ];

selectedType: any;

  @ViewChild('table') table: ElementRef<Table>;

  constructor(private store$: Store, private router: Router, private route: ActivatedRoute, private service: DashboardService, private modalService: BsModalService) {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.route.paramMap.subscribe((params: any) => {
      // console.log(params.params.accountId);
      this.service.queryParamsValue.next(params.params.accountId);
      this.service.queryParamsValue.subscribe((val: any) => {
        this.store$.dispatch(DashboardActions.getAllAccounts(val));

        this.store$.pipe(select((state: any) => state)).subscribe((res: any) => {
          this.results = res;
        });
      });
    });
  }

  createAccount() {
    let Body = this.newAccount;
    const BudgetId = this.service.queryParamsValue.value;
    this.store$.dispatch(DashboardActions.createAccount({ BudgetId, Body }));
    Body = {};
    this.modalRef.hide();
    this.initData();
  }
}
