let nbMatieres = parseInt(prompt("Combien de matières voulez-vous entrer ?"));
let tables = [];

for (let a = 0; a < nbMatieres; a++) {
    
  let nomMatiere = prompt(`Entrez le nom de la matière n°${a + 1}:`);
  let nbNotes = parseInt(prompt(`Combien de notes voulez-vous entrer pour la matière ${nomMatiere}?`));
  let notes = [];

  for (let i = 0; i < nbNotes; i++) {
    notes.push(parseInt(prompt("Entrez la note n°" + (i + 1) + " : ")));
  }

  let somme = 0;
  let maximum = 0;
  let minimum = 0;

  for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
    maximum = Math.max(maximum, notes[i]);
    minimum = Math.min(minimum, notes[i]);
  }

  tables.push({
    nomMatiere: nomMatiere,
    notes: notes,
    somme: somme,
    maximum: maximum,
    minimum: minimum
  });
}

console.log(tables);