export class Case {
    private show: boolean;
    private bomb: boolean;
    private nbBombVoisin: number;
    private modeBomb: boolean;

    constructor(bomb: boolean) {
        this.bomb = bomb;
        this.show = false;
        this.nbBombVoisin = -1;
        this.modeBomb = true;
    }

    get isShow(): boolean {
        return this.show;
    }

    set setShow(show: boolean) {
        this.show = show;
    }

    get isBomb(): boolean {
        return this.bomb;
    }

    get getNbBombVoisin(): number {
        return this.nbBombVoisin;
    }

    set setNbBombVoisin(nbBombVoisin: number) {
        this.nbBombVoisin = nbBombVoisin;
    }

    get getModeBomb(): boolean {
        return this.modeBomb;
    }

    set setModeBombe(modeBomb: boolean) {
        this.modeBomb = modeBomb;
    }
}
