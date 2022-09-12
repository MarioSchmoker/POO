var Parlante = /** @class */ (function () {
    function Parlante(paramPrendido, paramConectado, paramVolumen) {
        this.estaPrendidio = paramPrendido;
        this.estaConectado = paramConectado;
        this.volumenActual = paramVolumen;
    }
    Parlante.prototype.prenderApagar = function () {
        if (this.estaPrendidio === true) {
            this.estaPrendidio = false;
        }
        else {
            this.estaPrendidio = true;
        }
    };
    Parlante.prototype.conectadoDesconectado = function () {
        if (this.estaConectado === true) {
            this.estaConectado = false;
        }
        else {
            this.estaConectado = true;
        }
    };
    Parlante.prototype.obtenerVolumen = function () {
        return this.volumenActual;
    };
    Parlante.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    Parlante.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual--;
    };
    return Parlante;
}());
var primerParlante = new Parlante(true, true, 33);
var volumenDelPrimerParlante = primerParlante.obtenerVolumen();
console.log("Volumen", volumenDelPrimerParlante);
var segundoParlante = new Parlante(true, true, 43);
console.log(segundoParlante);
