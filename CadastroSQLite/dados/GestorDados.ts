import db from './DatabaseInstance';
import { Produto } from './Produto';

const sqlCreate = `
CREATE TABLE IF NOT EXISTS PRODUTO(
  CODIGO INTEGER PRIMARY KEY,
  NOME TEXT,
  QUANTIDADE INTEGER
)`;

const sqlInsert =
    'INSERT OR REPLACE INTO PRODUTO (CODIGO, NOME, QUANTIDADE) VALUES (?, ?, ?)';

const sqlDelete =
    'DELETE FROM PRODUTO WHERE CODIGO = ?';

const sqlSelect =
    'SELECT * FROM PRODUTO';

class GestorDados {

    private criarBanco() {
        db.execSync(sqlCreate);
    }

    public adicionar(produto: Produto) {
        this.criarBanco();

        db.runSync(sqlInsert, [
            produto.codigo,
            produto.nome,
            produto.quantidade
        ]);
    }

    public remover(chave: string) {
        db.runSync(sqlDelete, [parseInt(chave)]);
    }

    public obterTodos(useRetorno: (produtos: Produto[]) => void) {

        console.log("🚀 obterTodos chamado");

        this.criarBanco();

        try {

            const resultados = db.getAllSync(sqlSelect);

            console.log("📊 rows:", resultados.length);

            const objetos: Produto[] = resultados.map((linha: any) => {
                console.log("📦 item:", linha);

                return new Produto(
                    linha.CODIGO,
                    linha.NOME,
                    linha.QUANTIDADE
                );
            });

            useRetorno(objetos);

        } catch (erro) {
            console.log("💥 erro SQL:", erro);
        }
    }

}

export default GestorDados;