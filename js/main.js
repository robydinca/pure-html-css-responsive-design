class Subscripcion {
  constructor(tipo, info) {
    this.tipo = tipo;
    this.info = info;
  }
}

let sub1 = new Subscripcion('Free', 'Solo puedes tomar los cursos gratis');


let sub2 = new Subscripcion('Basic', 'Puedes tomar casi todos los cursos de Platzi durante un mes');

let sub3 = new Subscripcion('Expert', 'Puedes tomar casi todos los cursos de Platzi durante un año');

let sub4 = new Subscripcion('ExpertPlus', 'Puedes tomar casi todos los cursos de Platzi durante un año');

let userSub = sub3;

function motrarPlan (userSub) {
  console.log("Si estas suscrito al plan" + userSub.tipo + "en el cual " + userSub.info);
}

motrarPlan(userSub);