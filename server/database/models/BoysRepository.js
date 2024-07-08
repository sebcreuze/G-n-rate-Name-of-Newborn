const AbstractRepository = require("./AbstractRepository");

class BoysRepository extends AbstractRepository {
  constructor() {
    super({ table: "Boys" });
  }

  async create(Boys) {
    const [result] = await this.database.query(
      `insert into ${this.table} (Boy_name) values (?)`,
      [Boys.Boy_name]
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

  async update(Boys) {
    const [result] = await this.database.query(
      `update ${this.table} set Boy_name = ? where id = ?`,
      [Boys.Boy_name, Boys.id]
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

module.exports = BoysRepository;
