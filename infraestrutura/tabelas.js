class Tabelas {
  init(conexao) {
    this.conexao = conexao

    this.criarUser()

    this.criarPassaword()

    this.criarAtendimentos()
  }
  criarUser() {
    const sql =
      'CREATE TABLE IF NOT EXISTS User (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, data_nascimento datetime, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

    this.conexao.query(sql, erro => {
      if (erro) {
        console.log(erro)
      } else {
        console.log('Tabela User criada com sucesso')
      }
    })
  }

  criarPassaword() {
    const sql =
      'CREATE TABLE IF NOT EXISTS Password (id int NOT NULL AUTO_INCREMENT primary key, id_user int, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, FOREIGN KEY(id_user) references User(id))'

    this.conexao.query(sql, erro => {
      if (erro) {
        console.log(erro)
      } else {
        console.log('Tabela Password criada com sucesso')
      }
    })
  }

  criarAtendimentos() {
    const sql =
      'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

    this.conexao.query(sql, erro => {
      if (erro) {
        console.log(erro)
      } else {
        console.log('Tabela Atendimentos criada com sucesso')
      }
    })
  }
}

module.exports = new Tabelas()
