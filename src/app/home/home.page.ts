import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  catalogo: Array<Object> = []

  constructor(private menu: ActionSheetController) {

  }

  ionViewDidEnter() {
    console.log("EXECULTOU O VIEW DID ENTER")
    this.listarCatalogo()
  }

  listarCatalogo() {
    this.catalogo = []
    const tamanhoDoBanco = localStorage.length
    for (let i = 0; i < tamanhoDoBanco; i++) {
      const chaveAtual = localStorage.key(i)
      const pizzaString = localStorage.getItem(chaveAtual)
      const pizzaObjeto = JSON.parse(pizzaString)
      this.catalogo.push(pizzaObjeto)

    }
  }

  async exibirOpcoes(id) {
    console.log("clicou na Opção" + id)
    let criacaoMenu = await this.menu.create({
      header: "Opções da pizza n° " + id,
      buttons: [{
        text: "Editar pizza",
        icon: "create"
      }, {
        text: "Excluir pizza",
        icon: "trash",
       handler: ()=> {
        console.log("clicou em Excluir")
        localStorage.removeItem(id)
        this.listarCatalogo()
        }
      }]

    })

    criacaoMenu.present()
  }
}