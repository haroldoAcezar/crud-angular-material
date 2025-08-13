import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from  '@angular/material/button'; 
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatTableModule],  
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})

export class ConsultaComponent implements OnInit 
{
  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ["id", "nome", "cpf", "dataNascimento", "email"]

  constructor(private service: ClienteService) { }

  ngOnInit() 
  {
   //console.log('ConsultaComponent initialized');
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar()
  {
    //console.log(this.nomeBusca);
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }
}
