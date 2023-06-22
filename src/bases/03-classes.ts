
export class Pokemon {


    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias

    ) {}

 

}

export const charmander = new Pokemon( 4, 'Charmander' );

