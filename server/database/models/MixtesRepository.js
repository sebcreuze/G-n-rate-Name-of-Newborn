const AbstractRepository = require("./AbstractRepository");

class MixtesRepository extends AbstractRepository {
  constructor() {
    super({ table: "Mixtes" });
  }

  async create(Mixtes) {
    const [result] = await this.database.query(
      `insert into ${this.table} (Boy_name) values (?)`,
      [Mixtes.Mixte_name]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async update(Mixtes) {
    const [result] = await this.database.query(
      `update ${this.table} set Mixte_name = ? where id = ?`,
      [Mixtes.Mixte_name, Mixtes.id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = MixtesRepository;
