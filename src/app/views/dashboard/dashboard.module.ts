import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {
  Action, ActionReducer, MetaReducer, StoreModule,
} from '@ngrx/store';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { TransactionsSummaryComponent } from '../transactions-summary/transactions-summary.component';
import { AccountsSummaryComponent } from '../accounts-summary/accounts-summary.component';
import { ProductEffects } from './effects/dashboard.effects';
import * as DashboardReducers from './reducers/DashboardReducers';
import { DashboardService } from './dashboard.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    StoreModule.forFeature(DashboardReducers.productsModuleFeatureKey, DashboardReducers.reducers),
    EffectsModule.forFeature([ProductEffects]),
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
  ],
  declarations: [DashboardComponent, AccountsSummaryComponent, TransactionsSummaryComponent],
  providers: [DashboardService],
})
export class DashboardModule { }
