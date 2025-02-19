import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  produtos = signal([
    {
      nome: "Uma vida pequena",
      editora: "Editora Record",
      preco: "R$76,12",
      img: "https://m.media-amazon.com/images/I/41B6dmnbL7S._SY445_SX342_.jpg"
    },
    {
      nome: "Três",
      editora: "Editora Intrínseca",
      preco: "R$48,81",
      img: "https://m.media-amazon.com/images/I/51QSDfAlINL._SY445_SX342_.jpg"
    },
    {
      nome: "Jogos Vorazes",
      editora: "Editora Rocco",
      preco: "R$40,25",
      img: "https://m.media-amazon.com/images/I/41pbZcXFYkL._SY445_SX342_.jpg"
    },

  ])

}
