import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
var EditPizzaPage = /** @class */ (function () {
    function EditPizzaPage(activatedRoute, toast, nav) {
        this.activatedRoute = activatedRoute;
        this.toast = toast;
        this.nav = nav;
        this.nomePizza = "";
        this.descricaoPizza = "";
        this.precoPizza = "";
        this.idPizza = "";
        this.pizzaPronta = false;
    }
    EditPizzaPage.prototype.ionViewDidEnter = function () {
        this.idPizza = this.activatedRoute.snapshot.params.id;
        this.recuperarPizza(this.idPizza);
    };
    EditPizzaPage.prototype.recuperarPizza = function (idPizza) {
        var _this = this;
        console.log(idPizza);
        var pizzaString = localStorage.getItem(idPizza);
        var pizzaObjeto = JSON.parse(pizzaString);
        console.log(pizzaObjeto);
        setTimeout(function () {
            _this.nomePizza = pizzaObjeto.nomePizza;
            _this.descricaoPizza = pizzaObjeto.descricaoPizza;
            _this.precoPizza = pizzaObjeto.precoPizza;
            _this.pizzaPronta = true;
        }, 5000);
    };
    EditPizzaPage.prototype.editar = function (form) {
        var dadosPizza = form.value;
        dadosPizza.id = this.idPizza;
        var dadosString = JSON.stringify(dadosPizza);
        localStorage.setItem(this.idPizza.toString(), dadosString);
        this.exibirMensagemSucesso();
        this.voltarParaHome();
    };
    EditPizzaPage.prototype.voltarParaHome = function () {
        this.nav.back();
    };
    EditPizzaPage.prototype.exibirMensagemSucesso = function () {
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
    EditPizzaPage = tslib_1.__decorate([
        Component({
            selector: 'app-edit-pizza',
            templateUrl: './edit-pizza.page.html',
            styleUrls: ['./edit-pizza.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, ToastController, NavController])
    ], EditPizzaPage);
    return EditPizzaPage;
}());
export { EditPizzaPage };
//# sourceMappingURL=edit-pizza.page.js.map