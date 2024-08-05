// Importa os decorators e interfaces necessárias do Angular
import { Component, OnInit } from '@angular/core';
// Importa o serviço AccountService para lidar com a autenticação
import { AccountService } from '../_services/account.service';

// Decorator @Component para definir o metadado do componente
@Component({
  selector: 'app-nav', // O seletor HTML para este componente
  templateUrl: './nav.component.html', // O caminho para o template HTML deste componente
  styleUrls: ['./nav.component.css'] // O caminho para o arquivo de estilos CSS deste componente
})

// Declaração da classe NavComponent que implementa a interface OnInit para o ciclo de vida do componente
export class NavComponent implements OnInit {
  model: any = {}; // Propriedade que armazena os dados do formulário de login
  loggedIn = false; // Propriedade que indica se o usuário está logado

  // Construtor que injeta o serviço AccountService para lidar com a autenticação
  constructor(private accountService: AccountService) { }

  // Método ngOnInit que é executado quando o componente é inicializado
  ngOnInit(): void {
    this.getCurrentUser(); //Persiste o usuario logado mesma se dar o refresh na página
   }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      next: user => this.loggedIn = !!user,
      error: error => console.log(error)
    })
  }

  // Método login para realizar o login do usuário
  login() {
    // Chama o método login do serviço AccountService passando os dados do formulário
    this.accountService.login(this.model).subscribe({
      // Callback executado quando a resposta é recebida com sucesso
      next: response => {
        console.log(response);
        this.loggedIn = true; // Atualiza o estado para indicar que o usuário está logado
      },
      // Callback executado quando ocorre um erro na requisição
      error: error => console.log(error)
    });
  }

  // Método logout para realizar o logout do usuário
  logout() {
    this.accountService.logout();
    this.loggedIn = false; // Atualiza o estado para indicar que o usuário não está mais logado
  }
}
