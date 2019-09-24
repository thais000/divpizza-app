import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  catalogo: Array<Object> = []

  constructor(private menu: ActionSheetController, private route: Router) {

  }

  ionViewDidEnter() {
    console.log("EXECULTOU O VIEW DID ENTER")
    this.listarCatalogo()
  }

  listarCatalogo() {
    this.catalogo = []
    //para dizer que ele está chamando uma função desta class
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
        icon: "create",
        handler: () => {
          this.route.navigate(['edit-pizza', id])
        }
      }, {
        text: "Excluir pizza",
        icon: "trash",
        handler: () => {
          console.log("clicou em Excluir")
          localStorage.removeItem(id)
          this.listarCatalogo()
        }
      }]

    })

    criacaoMenu.present()
  }
  comprar(id) {
    console.log(id)
    this.route.navigate(['comprar-pizza',id])
  }

}