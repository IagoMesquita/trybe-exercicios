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


// const totalAlunos = () => {  //Q6
//   const soma = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
//   console.log(`Total de estudantes é: ${soma}.`) 
// }
// totalAlunos();

//Q6 - Resolução por Isaac - Usando FOR: 
function getStudentsTotal(lessons){
  const keys = Object.keys(lessons);
  let total = 0;

  for(let index = 0; index < keys.length; index += ''){
    const currentKey = keys[index];
    total += lessons[currentKey].numeroEstudantes;  //[indeterminado].determinado
  }
 return total
}
console.log(getStudentsTotal(allLessons));

//Q6 - Gabarito - Usa For/In  -- Achei a melhor opção!!
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

// const getValueByNumber = (object, position) => {
//   for(let position of object) {s
//   const value = object[position]
//   }
// }