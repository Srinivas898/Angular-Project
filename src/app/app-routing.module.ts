import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { SimpleinterestComponent } from './simpleinterest/simpleinterest.component';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipcartApiComponent } from './flipcart-api/flipcart-api.component';
import { MailsComponent } from './mails/mails.component';
import { PinterestComponent } from './pinterest/pinterest.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'Home',component:HomeComponent},
    {path:'Welcome',component:WelcomeComponent},
    {path:'Calculator',component:CalculatorComponent},
    {path:'Rectangle',component:RectangleComponent},
    {path:'Circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'data binding',component:DatabindingComponent},
    {path:'Simple Interest',component:SimpleinterestComponent},
    {path:'EMI Calculator',component:EMICalculatorComponent},
    {path:'Temperature',component:TemperatureComponent},
    {path:'Flipkart',component:FlipcartComponent},
    {path:'Directives',component:DirectivesComponent},
    {path:'Employee',component:EmployeeComponent},
    {path:'Vehicle',component:VehicleComponent},
    {path:'Accounts',component:AccountsComponent},
    {path:'Flipcart-API',component:FlipcartApiComponent},
    {path:'Mails',component:MailsComponent},
    {path:'Pinterest',component:PinterestComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
