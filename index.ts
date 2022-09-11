class Parlante{
    public estaPrendidio: boolean;
    public estaConectado: boolean;
    public volumenActual: number;
    public modelo: string;
    public marca: string;
    public potencia: number;


    constructor(paramPrendido:boolean, paramConectado:boolean, paramVolumen:number){
        this.estaPrendidio = paramPrendido;
        this.estaConectado = paramConectado;
        this.volumenActual = paramVolumen;

    }


    prenderApagar():void{
        if(this.estaPrendidio === true){
            this.estaPrendidio = false;
        }else{
            this.estaPrendidio = true;
        }
    }

    conectadoDesconectado():void{
        if(this.estaConectado === true){
            this.estaConectado = false;
        }else{
            this.estaConectado = true;
        }
    }

    obtenerVolumen():number{
        return this.volumenActual;
    }

    subirVolumen():void{
        this.volumenActual = this.volumenActual++;
    }

    bajarVolumen():void{
        this.volumenActual = this.volumenActual--;
    }


}

let primerParlante = new Parlante(true,true,33);
let volumenDelPrimerParlante:number = primerParlante.obtenerVolumen();
console.log("Volumen", volumenDelPrimerParlante);