let num = 43;
let anyType: any = 43;
let numOrString: number | string = 45;

export interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}
const duck2: Duck = {
    name: 'dewey',
    numLegs: 2,
    //makeQuake: (sound: string) => console.log('Duck says' + sound)
    makeSound: (sound: string) => console.log(sound)
}

//duck1.makeSound('quack');

export const ducks = [duck1, duck2];