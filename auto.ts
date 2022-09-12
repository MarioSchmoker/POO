class Auto{
    public estaEncendido: boolean;
    public lucesEncendidas: boolean;
    public velocidadActual: number;
    public modelo: string;
    public marca: string;
    public color: string;


    constructor(paramEncendido:boolean, paramLuces:boolean, paramVelocidad:number){
        this.estaEncendido = paramEncendido;
        this.lucesEncendidas = paramLuces;
        this.velocidadActual = paramVelocidad;

    }


    encenderApagar():void{
        if(this.estaEncendido === true){
            this.estaEncendido = false;
        }else{
            this.estaEncendido = true;
        }
    }

    encenderLuces():void{
        if(this.lucesEncendidas === true){
            this.lucesEncendidas = false;
        }else{
            this.lucesEncendidas = true;
        }
    }

    obtenerVelocidad():number{
        return this.velocidadActual;
    }

    acelerar():void{
        this.velocidadActual = this.velocidadActual++;
    }

    desacelerar():void{
        this.velocidadActual = this.velocidadActual--;
    }

    frenar():void{
        this.velocidadActual = 0;
    }


}

let primerAuto = new Auto(true,true,120);
let velocidadDelPrimerauto:number = primerAuto.obtenerVelocidad();
console.log(velocidadDelPrimerauto, " km/h");
let segundoAuto = new Auto(true,true,80);
console.log(segundoAuto);
