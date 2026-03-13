import alunoDispatcher from '../dispatcher/AlunoDispatcher';
 import { Aluno } from '../model/Aluno';
 
 export default class AlunoActions{
   public criarAluno(aluno: Aluno) {
     alunoDispatcher.dispatch({
       actionType: 'CRIAR_ALUNO',
       value: aluno
     });
     alunoDispatcher.dispatch({
       actionType: 'OBTER_ALUNOS'
     });
   }
   public excluirAluno(matricula: string) {
     alunoDispatcher.dispatch({
       actionType: 'EXCLUIR_ALUNO',
       value: matricula
     });
     alunoDispatcher.dispatch({
       actionType: 'OBTER_ALUNOS'
     });
   }
   public obterAlunos() {
     alunoDispatcher.dispatch({
       actionType: 'OBTER_ALUNOS'
     });       
   }
 
   private constructor(){}
   private static acoes: AlunoActions = new AlunoActions();
   public static getInstance(): AlunoActions{
     return this.acoes;
   }
 }