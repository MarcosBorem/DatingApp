/*

Componentes são a unidade básica de uma aplicação Angular. Cada componente é responsável por uma parte da interface do usuário (UI).
Um componente é composto por:

Template (HTML): Define a estrutura da UI.
Class (TypeScript): Contém a lógica e os dados do componente.
Style (CSS): Define o estilo do componente.


Importações:

Importa HttpClient para permitir a realização de requisições HTTP.
Importa Component e OnInit para definir um componente Angular e usar o ciclo de vida ngOnInit.

* Decorator @Component:

Define metadados do componente, como o seletor (selector), o template HTML (templateUrl), e o arquivo de estilos CSS (styleUrls).

* Classe AppComponent:

Implementa a interface OnInit para usar o ciclo de vida do Angular.
Declara as propriedades title e users.
Define o construtor que injeta uma instância de HttpClient.

* Método ngOnInit:

Realiza uma requisição HTTP GET para obter dados de usuários de um endpoint específico.
Usa subscribe para lidar com a resposta assíncrona:
next: Executa quando a resposta é bem-sucedida e atribui a resposta à propriedade users.
error: Executa quando há um erro na requisição e imprime o erro no console.
complete: Executa quando a requisição é concluída, imprimindo uma mensagem no console.*/

// Importa o módulo HttpClient do Angular para fazer requisições HTTP
import { HttpClient } from '@angular/common/http';
// Importa os decorators e interfaces necessárias do Angular
import { Component, OnInit } from '@angular/core';

// Decorator @Component para definir o metadado do componente
@Component({
  selector: 'app-root', // O seletor HTML para este componente
  templateUrl: './app.component.html', // O caminho para o template HTML deste componente
  styleUrls: ['./app.component.css'] // O caminho para o arquivo de estilos CSS deste componente
})
// Declaração da classe AppComponent que implementa a interface OnInit para o ciclo de vida do componente
export class AppComponent implements OnInit {
  title = 'Dating app'; // Propriedade que armazena o título da aplicação
  users: any; // Propriedade que armazenará a lista de usuários

  // Construtor que injeta o serviço HttpClient para fazer requisições HTTP
  constructor(private http: HttpClient) {}

  // Método ngOnInit que é executado quando o componente é inicializado
  ngOnInit(): void {
    // Faz uma requisição GET para obter a lista de usuários
    this.http.get('https://localhost:5001/api/users').subscribe({
      // Callback executado quando a resposta é recebida com sucesso
      next: response => this.users = response,
      // Callback executado quando ocorre um erro na requisição
      error: error => console.log(error),
      // Callback executado quando a requisição é concluída
      complete: () => console.log('Request has completed')
    });
  }
}
