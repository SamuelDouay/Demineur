import { Plateau } from "./utils/Plateau";

export class Demineur {
    private plateau: Plateau;

    constructor(width: number, height: number, densite: number) {
        this.plateau = new Plateau(width, height, densite);
    }

    public initGame(): void {
        this.plateau.initPlateau();
    }

    public showCase(l: number, c: number, modeBomb: boolean): void {
        this.plateau.showCase(l, c, modeBomb);
    }

    get getPlateau(): Plateau {
        return this.plateau;
    }
}