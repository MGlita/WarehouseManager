import { StockDetailComponent } from './stock_status/stock_detail/stock-detail.component';
import { StockService } from './stock_status/stock.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageBlockComponent } from './home/mainPageBlock.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { RoleGuardService } from './auth/role-guard.service';
import { LoginService } from './login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockStatusComponent } from './stock_status/stock_status.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewItemComponent } from './item/new-item.component';
import { ItemFormComponent } from './item/item-form/item-form.component';
import { IssueItemComponent } from './item/issue-item/issue-item.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlaceOrderComponent } from './order/place-order/place-order.component';
import { OrderService } from './order/order-service';
import { OrderFormComponent } from './order/place-order/order-form/order-form.component';
import { OrderDetailComponent } from './order/take-order/order-detail/order-detail.component';
import { TakeOrderComponent } from './order/take-order/take-order.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageBlockComponent,
    LoginComponent,
    RegisterComponent,
    StockStatusComponent,
    StockDetailComponent,
    NewItemComponent,
    ItemFormComponent,
    IssueItemComponent,
    OrderFormComponent,
    PlaceOrderComponent,
    OrderDetailComponent,
    TakeOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({config:{skipWhenExpired:true}}),
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [
    AuthGuardService,
    RoleGuardService,
    AuthService,
    LoginService,
    StockService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
