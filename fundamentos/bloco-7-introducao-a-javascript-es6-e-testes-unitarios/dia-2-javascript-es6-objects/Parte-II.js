const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (object, key, value) => {              //Q.1
  object[key] = value;
  return lesson2
}
console.log(addTurno(lesson2, 'turno', 'noite'));

const listKeys = (object) =>  Object.keys(object);  //Q2
console.log(listKeys(lesson3));

const sizeObject = (object) => Object.entries(object).length; //Q3
console.log(`O objeto tem tamanho ${sizeObject(lesson1)}.`);

