import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditPizzaPage } from './edit-pizza.page';
var routes = [
    {
        path: '',
        component: EditPizzaPage
    }
];
var EditPizzaPageModule = /** @class */ (function () {
    function EditPizzaPageModule() {
    }
    EditPizzaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EditPizzaPage]
        })
    ], EditPizzaPageModule);
    return EditPizzaPageModule;
}());
export { EditPizzaPageModule };
//# sourceMappingURL=edit-pizza.module.js.map