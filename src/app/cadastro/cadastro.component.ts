import { ConsultaCepService } from './../service/consulta-cep.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ICep } from '../interfaces/ICep';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
      private router: Router,
      private consultaCepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
      console.log('Formulário enviado');
  }

  consultaCEP(ev: any, f: NgForm) {
    const cep = ev.target.value
    if (cep != '') {
      this.consultaCepService.getConsultaCep(cep).subscribe((resultado) => {
        this.populandoEndereco(resultado, f)
      })      
    }
  }


  populandoEndereco(dados: any, f: NgForm) {
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      cidade: dados.bairro,
      estado: dados.uf
    })
  }
}
