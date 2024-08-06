/* 
Módulos organizam um conjunto de componentes e outros recursos relacionados. O módulo raiz é o AppModule, 
que é o ponto de entrada da aplicação. Outros módulos podem ser criados para dividir a aplicação em partes menores e mais gerenciáveis.
*/
// Esse código configura o módulo principal da aplicação Angular, AppModule, e define todos os componentes e módulos necessários para que a aplicação funcione corretamente.

// Importações necessárias para configurar o módulo principal da aplicação Angular
import { NgModule } from '@angular/core'; // Importa o decorator NgModule para definir módulos Angular
import { BrowserModule } from '@angular/platform-browser'; // Importa BrowserModule para que a aplicação possa ser executada em um navegador
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para fazer requisições HTTP

// Importações de módulos específicos da aplicação
import { AppRoutingModule } from './app-routing.module'; // Importa o módulo de roteamento da aplicação
import { AppComponent } from './app.component'; // Importa o componente principal da aplicação
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule para suportar animações
import { NavComponent } from './nav/nav.component'; // Importa o componente de navegação
import { FormsModule } from '@angular/forms'; // Importa FormsModule para trabalhar com formulários
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component'; // Importa BsDropdownModule para utilizar dropdowns do ngx-bootstrap

@NgModule({
  // Declaração de componentes que pertencem a este módulo
  declarations: [
    AppComponent, // Declara o componente principal da aplicação
    NavComponent, HomeComponent // Declara o componente de navegação
  ],
  // Importação de outros módulos necessários para esta aplicação
  imports: [
    BrowserModule, // Importa BrowserModule para executar a aplicação no navegador
    AppRoutingModule, // Importa o módulo de roteamento para definir as rotas da aplicação
    HttpClientModule, // Importa HttpClientModule para fazer requisições HTTP
    BrowserAnimationsModule, // Importa BrowserAnimationsModule para suportar animações
    FormsModule, // Importa FormsModule para trabalhar com formulários
    BsDropdownModule.forRoot() // Importa e inicializa BsDropdownModule do ngx-bootstrap para utilizar dropdowns
  ],
  // Provedores de serviços (se houver)
  providers: [],
  // Componente raiz que será inicializado ao iniciar a aplicação
  bootstrap: [AppComponent]
})
// Declaração do módulo principal da aplicação
export class AppModule { }
