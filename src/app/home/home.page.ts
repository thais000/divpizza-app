import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  catalogo: Array<Object> = []

  ionViewDidEnter() {
    console.log("EXECULTOU O VIEW DID ENTER")
    this.listarCatalogo()
  }

  listarCatalogo() {
    const tamanhoDoBanco = localStorage.length
    for (let i = 0; i < tamanhoDoBanco; i++) {
      const chaveAtual = localStorage.key(i)
      const pizzaString = localStorage.getItem(chaveAtual)
      const pizzaObjeto = JSON.parse(pizzaString)
      this.catalogo.push(pizzaObjeto)

    }
  }
}