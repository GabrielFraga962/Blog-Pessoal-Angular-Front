import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  // Instanciando o objeto
  user: User = new User
  confirmarSenha: string
  tipoUsuario: string
  //Injeção de dados que estou usando - da service
  constructor(
    private authService: AuthService,
    private router: Router // O roteamento de recursos permite que você declare rapidamente todas as rotas comuns para um determinado controlador de recursos. (auth.service) navegação das rotas/portas

  ) { }
  //Faz o carregameto dos componentes da pagina - no caso as coordenadas da mesma
  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){ //confirma os meus eventos criados
    this.confirmarSenha = event.target.value

  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value

  }

  cadastrar(){
    this.user.tipo=this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){ // estabelece as minhas condições, de verdadeiro ou falso
      alert('A senhas estão incorretas.')
    }
    else{
            this.authService.cadastrar(this.user).subscribe((resp: User) => { // interação do front e back
            this.user=resp
            this.router.navigate(['/entrar'])// rota criada no back-end
            alert('Usuário cadastrado com sucesso!')
          })
    }

  }

}
