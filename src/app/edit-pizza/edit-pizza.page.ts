import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.page.html',
  styleUrls: ['./edit-pizza.page.scss'],
})
export class EditPizzaPage {

  nomePizza: String = ""
  descricaoPizza: String = ""
  precoPizza: String = ""
  idPizza: String = ""
  pizzaPronta:Boolean = false;

  constructor(private activatedRoute: ActivatedRoute,private toast:ToastController, private nav:NavController) { }
  ionViewDidEnter() {
    this.idPizza = this.activatedRoute.snapshot.params.id
    this.recuperarPizza(this.idPizza)
  }



  recuperarPizza(idPizza) {
    console.log(idPizza)

    let pizzaString = localStorage.getItem(idPizza)
    let pizzaObjeto = JSON.parse(pizzaString)
    console.log(pizzaObjeto)
    
    setTimeout(() => {
      this.pizzaPronta = true 
      setTimeout(() => {
        this.nomePizza = pizzaObjeto.nomePizza
        this.descricaoPizza = pizzaObjeto.descricaoPizza
        this.precoPizza = pizzaObjeto.precoPizza
      },10)
    },1500)
  }

  editar(form) {
    let dadosPizza = form.value
    dadosPizza.id = this.idPizza
    let dadosString = JSON.stringify(dadosPizza)
    localStorage.setItem(this.idPizza.toString(), dadosString)
    this.exibirMensagemSucesso()
    this.voltarParaHome()
  }
  voltarParaHome(){
    this.nav.back()
  }
  async exibirMensagemSucesso() {
     let  criacaoDoToast = await this.toast.create({
      message: 'pizza cadastrada.',
      duration: 2000,
      color:'dark'
    })
    criacaoDoToast.present()
  }
}
