/*
Abstraccion
-Personaje
id
nombre
poder

-HEROE

traje
debilidad
Villano_id

-Villano
porcentaje de maldad
locura

*/

class Personaje {
  id = null;
  nombre = "";
  poder = "";
  velocidad = 0;

  //Encapsulacion
  #habilidadEspecial = "";

  constructor(id, nombre, poder, HabilidadEspecial) {
    this.id = id;
    this.nombre = nombre;
    this.poder = poder;
    this.#habilidadEspecial = this.#habilidadEspecial;
  }
  //Encapsulacion
  #usarHabilidadEspecial() {
    console.log(this.#habilidadEspecial);
  }

  volar() {
    this.velocidad = this.velocidad + 5;
    this.#usarHabilidadEspecial();
  }

  // METODO
  run() {
    this.velocidad = this.velocidad + 1;
  }
}

// HEREDAR funciones PUBLICAS
class Heroe extends Personaje {
  traje = "";
  debilidad = "";
  villano_id = null;

  constructor(
    id,
    nombre,
    poder,
    HabilidadEspecial,
    traje,
    debilidad,
    villano_id
  ) {
    super(id, nombre, poder, HabilidadEspecial);
    this.debilidad = debilidad;
    this.traje = traje;
    this.villano_id = villano_id;
  }
}

// herencia
class Villano extends Personaje {
  porcentaje_maldad = 50;
  porcentaje_locura = 60;

  constructor(
    id,
    nombre,
    poder,
    HabilidadEspecial,
    porcentaje_locura,
    porcentaje_maldad
  ) {
    super(id, nombre, poder, HabilidadEspecial);
    this.porcentaje_locura = porcentaje_locura;
    this.porcentaje_maldad = porcentaje_maldad;
  }
}
//const goku = new Heroe();
