import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static readonly REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente)
  {
    //console.log('Cliente salvo:', cliente);
    const storage = this.obterStorage();
    
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nomeBusca: string) : Cliente[]
  {
    const clientes = this.obterStorage();

    if (!nomeBusca)
    {
      return clientes;
    }
    console.log(nomeBusca);
    return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);
 }

  private obterStorage(): Cliente[] {

    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);

    if (repositorioClientes) 
      {
      const clientes: Cliente[] = JSON.parse(repositorioClientes);

      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}