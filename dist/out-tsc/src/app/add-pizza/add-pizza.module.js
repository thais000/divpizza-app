import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddPizzaPage } from './add-pizza.page';
var routes = [
    {
        path: '',
        component: AddPizzaPage
    }
];
var AddPizzaPageModule = /** @class */ (function () {
    function AddPizzaPageModule() {
    }
    AddPizzaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AddPizzaPage]
        })
    ], AddPizzaPageModule);
    return AddPizzaPageModule;
}());
export { AddPizzaPageModule };
//# sourceMappingURL=add-pizza.module.js.map