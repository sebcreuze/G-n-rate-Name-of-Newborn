const AbstractSeeder = require("./AbstractSeeder");

class GirlsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "Girls", truncate: true });
    this.girlName = [
      "Gabriel",
      "Léo",
      "Raphaël",
      "Maël",
      "Louis",
      "Noah",
      "Jules",
      "Arthur",
      "Adam",
      "Lucas",
      "Liam",
      "Sacha",
      "Isaac",
      "Gabin",
      "Éden",
      "Hugo",
      "Naël",
      "Aaron",
      "Mohamed",
      "Léon",
      "Paul",
      "Noé",
      "Marceau",
      "Ethan",
      "Nathan",
      "Théo",
      "Tom",
      "Nino",
      "Marius",
      "Ayden",
      "Malo",
      "Mathis",
      "Gaspard",
      "Martin",
      "Lyam",
      "Victor",
      "Rayan",
      "Elio",
      "Timéo",
      "Eliott",
      "Milo",
      "Robin",
      "Tiago",
      "Valentin",
      "Ibrahim",
      "Axel",
      "Augustin",
      "Amir",
      "Enzo",
      "Imran",
      "Sohan",
      "Nolan",
      "Antoine",
      "Simon",
      "Samuel",
      "Mathéo",
      "Côme",
      "Kaïs",
      "Alessio",
      "Yanis",
      "Camille",
      "Léandre",
      "Owen",
      "Ismaël",
      "Maxence",
      "Mahé",
      "Soan",
      "Évan",
      "Naïm",
      "Maé",
      "Livio",
      "Aylan",
      "Charly",
      "Oscar",
      "Pablo",
      "Clément",
      "Ilyan",
      "Basile",
      "Alexandre",
      "Charlie",
      "Noa",
      "Kayden",
      "Ali",
      "Marin",
      "Mattéo",
      "Ezio",
      "Charles",
      "Joseph",
      "Maxime",
      "Baptiste",
      "Andréa",
      "Roméo",
      "Anas",
      "Noam",
      "Issa",
      "Milan",
      "Auguste",
      "Zayn",
      "Lenny",
      "Timothée",
    ];
  }

  run() {
    for (let i = 0; i < 100; i += 1) {
      const Girls = {
        Girl_name: this.girlName[i],
      };

      this.insert(Girls);
    }
  }
}

module.exports = GirlsSeeder;
