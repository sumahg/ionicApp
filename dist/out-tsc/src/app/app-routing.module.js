import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add.customer/add.customer.component';
import { ListCustomerComponent } from './list.customer/list.customer.component';
import { EditCustomerComponent } from './edit.customer/edit.customer.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add.student/add.student.component';
import { ListStudentComponent } from './list.student/list.student.component';
import { EditStudentComponent } from './edit.student/edit.student.component';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'list-customer', component: ListCustomerComponent },
    { path: 'add-customer', component: AddCustomerComponent },
    { path: 'edit-customer/:id', component: EditCustomerComponent },
    { path: 'student', component: StudentComponent },
    { path: 'list-student', component: ListStudentComponent },
    { path: 'add-student', component: AddStudentComponent },
    { path: 'edit-student/:rollno', component: EditStudentComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map