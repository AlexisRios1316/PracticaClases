/*
Abstraccion
-Tarjeta
id
nombre
banco
fecha de vencimiento 
codigo de seguridad


-Tarjeta Debito
Pago de Nomina
Transferencia

-Tarjeta Credito 
Credito a Meses
Pago sin Fondos
*/

class Tarjeta {
  id = null;
  nombre = "";
  banco = "";
  fecha_vencimiento = "";
  codigo_seguridad = "";
  cashback = 0;
  //Encapsulamiento

  constructor(id, nombre, banco, fecha_vencimiento, codigo_seguridad) {
    this.id = id;
    this.nombre = nombre;
    this.banco = banco;
    this.fecha_vencimiento = fecha_vencimiento;
    this.codigo_seguridad = codigo_seguridad;
    this.#chequera = this.#chequera;
  }

  // encapsulacion ...
  Cuenta_cheque() {
    this.cashback = this.cashback + 5; //  %  //
  }
}

// HEREDAR DE TARJERA A TARJERA DE DEBITO
class tarjeta_Debito extends Tarjeta {
  pago_de_nomina = "";
  transferencia = "";
  constructor(
    id,
    nombre,
    banco,
    fecha_vencimiento,
    codigo_seguridad,
    pago_de_nomina,
    transferencia
  ) {
    super(id, nombre, banco, fecha_vencimiento, codigo_seguridad);
    this.pago_de_nomina = pago_de_nomina;
    this.transferencia = transferencia;
  }

  //POLIMORFISMO
  Cuenta_cheque() {
    this.cashback = this.cashback + 0.2; //  %  //
  }
}

//HEREDAR DE TARJETA A TARJETA DE CREDITO
class tarjeta_Credito extends Tarjeta {
  pago_meses = "";
  pago_sinfondo = "";

  constructor(
    id,
    nombre,
    banco,
    fecha_vencimiento,
    codigo_seguridad,
    pago_meses,
    pago_sinfondo
  ) {
    super(id, nombre, banco, fecha_vencimiento, codigo_seguridad);
    this.pago_meses = pago_meses;
    this.pago_sinfondo = pago_sinfondo;
  }

  // POLIMORFISMO
  Cuenta_cheque() {
    this.cashback = this.cashback + 0.1; // %  //
  }
}

const Nomina = new tarjeta_Debito(
  1,
  "Emmanuel",
  "BBVA",
  "01/01/2025",
  "8888",
  "Deposito",
  "true"
);
const Credito = new tarjeta_Credito(
  1,
  "Emily",
  "HSBC",
  "01/01/2025",
  "7777",
  "6 meses",
  "1000"
);
