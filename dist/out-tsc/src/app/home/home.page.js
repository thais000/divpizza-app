import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(menu, route) {
        this.menu = menu;
        this.route = route;
        this.catalogo = [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log("EXECULTOU O VIEW DID ENTER");
        this.listarCatalogo();
    };
    HomePage.prototype.listarCatalogo = function () {
        this.catalogo = [];
        //para dizer que ele está chamando uma função desta class
        var tamanhoDoBanco = localStorage.length;
        for (var i = 0; i < tamanhoDoBanco; i++) {
            var chaveAtual = localStorage.key(i);
            var pizzaString = localStorage.getItem(chaveAtual);
            var pizzaObjeto = JSON.parse(pizzaString);
            this.catalogo.push(pizzaObjeto);
        }
    };
    HomePage.prototype.exibirOpcoes = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var criacaoMenu;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("clicou na Opção" + id);
                        return [4 /*yield*/, this.menu.create({
                                header: "Opções da pizza n° " + id,
                                buttons: [{
                                        text: "Editar pizza",
                                        icon: "create",
                                        handler: function () {
                                            _this.route.navigate(['edit-pizza', id]);
                                        }
                                    }, {
                                        text: "Excluir pizza",
                                        icon: "trash",
                                        handler: function () {
                                            console.log("clicou em Excluir");
                                            localStorage.removeItem(id);
                                            _this.listarCatalogo();
                                        }
                                    }]
                            })];
                    case 1:
                        criacaoMenu = _a.sent();
                        criacaoMenu.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActionSheetController, Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map