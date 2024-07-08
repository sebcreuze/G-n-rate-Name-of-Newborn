const AbstractRepository = require("./AbstractRepository");

class GirlsRepository extends AbstractRepository {
  constructor() {
    super({ table: "Girls" });
  }

  async create(Girls) {
    const [result] = await this.database.query(
      `insert into ${this.table} (Girl_name) values (?)`,
      [Girls.Girl_name]
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

  async update(Girls) {
    const [result] = await this.database.query(
      `update ${this.table} set Girl_name = ? where id = ?`,
      [Girls.Girl_name, Girls.id]
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

module.exports = GirlsRepository;
