import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { FormsModule } from '@angular/forms';
import { SimpleinterestComponent } from './simpleinterest/simpleinterest.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipcartApiComponent } from './flipcart-api/flipcart-api.component';
import { MailsComponent } from './mails/mails.component';
import { PinterestComponent } from './pinterest/pinterest.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    WelcomeComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    SimpleinterestComponent,
    EMICalculatorComponent,
    TemperatureComponent,
    FlipcartComponent,
    DirectivesComponent,
    EmployeeComponent,
    VehicleComponent,
    AccountsComponent,
    FlipcartApiComponent,
    MailsComponent,
    PinterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
