import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                DashboardComponent,
                AboutusComponent,
                CustomerComponent,
                AddCustomerComponent,
                ListCustomerComponent,
                EditCustomerComponent,
                StudentComponent,
                AddStudentComponent,
                ListStudentComponent,
                EditStudentComponent
            ],
            entryComponents: [],
            imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map