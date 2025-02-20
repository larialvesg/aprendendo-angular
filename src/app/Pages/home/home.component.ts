import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  produtos = signal([
    {
      nome: "Body Preto - Matilda",
      avaliacoes: "★★★★★ (164)",
      preco: "R$99,95",
      img: "https://acdn-us.mitiendanube.com/stores/001/896/879/products/pin-1-46-f6a1572516eecb813b17097635803691-1024-1024.webp"
    },
    {
      nome: "Body Preto - Margot",
      avaliacoes: "★★★★★ (20)",
      preco: "R$99,95",
      img: "https://acdn-us.mitiendanube.com/stores/001/896/879/products/vest-32-ab6193a10e7e46a5a317295219066460-1024-1024.webp"
    },
    {
      nome: "Body Preto - Charly",
      avaliacoes: "★★★★★ (11)",
      preco: "R$99,95",
      img: "https://acdn-us.mitiendanube.com/stores/001/896/879/products/body-1-2f3130130c4e1f435717248513380141-1024-1024.webp"
    },

  ])

}
