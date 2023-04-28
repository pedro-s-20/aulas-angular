import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Seja Bem Vindo';
  description = 'Imagem de Co-Working';
  url = 'https://casacor.abril.com.br/wp-content/uploads/sites/7/2019/09/46_worx-coworking-fotos-ivan-pestana-casacor-peru-2019-1.jpg?quality=80&strip=info';
}
