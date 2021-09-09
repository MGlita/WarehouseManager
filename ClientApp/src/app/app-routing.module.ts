import { PlaceOrderComponent } from './order/place-order/place-order.component';
import { IssueItemComponent } from './item/issue-item/issue-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageBlockComponent } from './home/mainPageBlock.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StockStatusComponent } from './stock_status/stock_status.component';
import { NewItemComponent } from './item/new-item.component';
import { TakeOrderComponent } from './order/take-order/take-order.component';

const routes: Routes = [
  { path: '', component: MainPageBlockComponent//,
    //canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'stock', component: StockStatusComponent},
  { path: 'new_item', component: NewItemComponent},
  { path: 'issue_item', component: IssueItemComponent},
  { path: 'place_order', component: PlaceOrderComponent},
  { path: 'take_order', component: TakeOrderComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
