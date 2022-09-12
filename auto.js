var Auto = /** @class */ (function () {
    function Auto(paramEncendido, paramLuces, paramVelocidad) {
        this.estaEncendido = paramEncendido;
        this.lucesEncendidas = paramLuces;
        this.velocidadActual = paramVelocidad;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.estaEncendido === true) {
            this.estaEncendido = false;
        }
        else {
            this.estaEncendido = true;
        }
    };
    Auto.prototype.encenderLuces = function () {
        if (this.lucesEncendidas === true) {
            this.lucesEncendidas = false;
        }
        else {
            this.lucesEncendidas = true;
        }
    };
    Auto.prototype.obtenerVelocidad = function () {
        return this.velocidadActual;
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual = this.velocidadActual++;
    };
    Auto.prototype.desacelerar = function () {
        this.velocidadActual = this.velocidadActual--;
    };
    Auto.prototype.frenar = function () {
        this.velocidadActual = 0;
    };
    return Auto;
}());
var primerAuto = new Auto(true, true, 120);
var velocidadDelPrimerauto = primerAuto.obtenerVelocidad();
console.log(velocidadDelPrimerauto, " km/h");
var segundoAuto = new Auto(true, true, 80);
console.log(segundoAuto);
