import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  catalogo: Array<Object> = []

  ionViewDidEnter() {
    console.log("EXECULTOU O VIEW DID ENTER")
    this.catalogo.push({
      nome: 'queojo maluco gourmet',
      descricao: 'Queijo, catupiry, batata palha, cogumelos, manjerição e ,mais umacolher de caviar',
      preco: 'R$72,00',
    })
  }
}