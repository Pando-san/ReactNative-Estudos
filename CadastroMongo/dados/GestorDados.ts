import { Produto } from './Produto';
 import api from './ApiService';

 class GestorDados {
     public async remover(chave: string){
     await api.delete('/remove/'+chave);
     }
     public async adicionar(produto: Produto){
     await api.post('/new',produto);
     }
     public async obterTodos(): Promise<Array<Produto>>{
     let resposta = await api.get('/');
     return resposta.data;
     }
 }

 export default GestorDados;