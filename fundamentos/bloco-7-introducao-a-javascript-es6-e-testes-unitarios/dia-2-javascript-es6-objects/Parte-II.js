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

// const addTurno = (object, key, value) => {              //Q.1
//   object[key] = value;
//   return lesson2
// }
// console.log(addTurno(lesson2, 'turno', 'noite'));

// const listKeys = (object) =>  Object.keys(object);  //Q2
// console.log(`Lista das chaves do objeto: 
// [${listKeys(lesson3)}].`);

// const sizeObject = (object) => Object.entries(object).length; //Q3
// console.log(`O objeto tem tamanho: ${sizeObject(lesson1)}.`);

// const listValue = (object) =>  Object.values(object);  //Q4
// console.log(`Lista dos valores das chaves do objeto: 
// [${listValue(lesson3)}].`);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); //Q5 //Não havia conseguido, por não colocar as {} englobando os
// console.log(allLessons);                                            //os lessons. Ai entrava somente o lessons3. 


const totalAlunos = () => {  //Q6
  const soma = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
  console.log(`Total de estudantes é: ${soma}.`) 
}
totalAlunos();


