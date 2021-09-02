const newEmployees = () => {
    const employees = {
      id1: newPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: newPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: newPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

function newPerson(nome) {
  const email = nome.toLowerCase().split(' ').join('_'); 
  return {nome, email:`${email}@betrybe.com`}
// const info = {
// nome,
// email: `${nome}@betrybe.com`,
// }
// return info;
};

console.log(newEmployees());

