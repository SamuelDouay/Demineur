import { Plateau } from "../Packages/Demineur/Plateau";

export class Demineur {
    private plateau: Plateau;

    constructor(width: number, height: number, densite: number) {
        this.plateau = new Plateau(width, height, densite);
    }

    public initGame(width: number, height: number): void {
        this.plateau.initPlateau(width, height);
    }

    public showCase(l: number, c: number, modeBomb: boolean): void {
        this.plateau.showCase(l, c, modeBomb);
    }

    public isEndGame(): number {
        return this.getPlateau.getNbCaseSafe;
    }

    get getPlateau(): Plateau {
        return this.plateau;
    }
}