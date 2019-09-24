import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
var AddPizzaPage = /** @class */ (function () {
    function AddPizzaPage(toast, nav) {
        this.toast = toast;
        this.nav = nav;
    }
    AddPizzaPage.prototype.ngOnInit = function () {
    };
    AddPizzaPage.prototype.salvar = function (pizza) {
        var chavePizza = Math.random() * 999;
        var pizzaDados = pizza.value;
        pizzaDados.id = chavePizza;
        var pizzaDadosString = JSON.stringify(pizzaDados);
        console.log(pizzaDadosString);
        console.log(chavePizza);
        console.log(chavePizza.toString());
        localStorage.setItem(chavePizza.toString(), pizzaDadosString);
        this.exibirMensagemSucesso();
        this.voltarParaHome();
    };
    AddPizzaPage.prototype.voltarParaHome = function () {
        this.nav.back();
    };
    AddPizzaPage.prototype.exibirMensagemSucesso = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var criacaoDoToast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'pizza cadastrada.',
                            duration: 2000,
                            color: 'dark'
                        })];
                    case 1:
                        criacaoDoToast = _a.sent();
                        criacaoDoToast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPizzaPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-pizza',
            templateUrl: './add-pizza.page.html',
            styleUrls: ['./add-pizza.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController, NavController])
    ], AddPizzaPage);
    return AddPizzaPage;
}());
export { AddPizzaPage };
//# sourceMappingURL=add-pizza.page.js.map