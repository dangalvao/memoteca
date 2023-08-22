import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'love angular1',
      autoria: 'Danilo',
      modelo: 'modelo3'
    },
    {
      conteudo: 'love angular2',
      autoria: 'Danilove',
      modelo: 'modelo2'
    },
    {
      conteudo: 'love angular3',
      autoria: 'Daniloves',
      modelo: 'modelo1'
    },
    {
      conteudo: 'love angular4',
      autoria: 'Daniloveson',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis facilisis ligula, ac consequat ex dignissim eu. Fusce quis nibh tempor, ultricies nulla vitae, interdum urna. Maecenas a euismod dui. Maecenas ac massa sed enim egestas ultrices scelerisque eu orci. Curabitur pretium at ante at mattis. Quisque placerat euismod tortor id pharetra. Suspendisse vulputate sed libero vel egestas. Cras facilisis porttitor aliquam. Nulla quis dolor vel augue malesuada tempus. Integer ut aliquam diam. Maecenas ac metus efficitur, aliquet neque nec, laoreet dui. Praesent libero purus, molestie in libero ornare, feugiat ornare sapien.',
      autoria: 'Danilovesonsss',
      modelo: 'modelo3'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
