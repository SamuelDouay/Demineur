import { Case } from "./Case";

export class Plateau {
    private readonly width: number;
    private readonly height: number;
    private readonly plateau: Case[][];
    private readonly densite: number;
    private nbCaseSafe: number;

    constructor(width: number, height: number, densite: number) {
        this.width = width;
        this.height = height;
        this.plateau = [];
        this.densite = densite;
        this.nbCaseSafe = 0;
    }

    public initPlateau(): void {
        this.nbCaseSafe = 0;
        for (let l = 0; l < this.width; l++) {
            this.plateau[l] = [];
            for (let c = 0; c < this.height; c++) {
                if (Math.random() < this.densite) {
                    this.plateau[l][c] = new Case(true);
                } else {
                    this.nbCaseSafe++;
                    this.plateau[l][c] = new Case(false);
                }
            }
        }
        this.calculNbBomb();
    }

    private calculNbBomb(): void {
        for (let l = 0; l < this.width; l++) {
            for (let c = 0; c < this.height; c++) {
                if (!this.plateau[l][c].isBomb) {
                    this.plateau[l][c].setNbBombVoisin = this.nbBomb(l, c);
                }
            }
        }
    }

    private nbBomb(li: number, co: number): number {
        let res: number = 0;
        for (let l = li - 1; l < li + 2; l++) {
            for (let c = co - 1; c < co + 2; c++) {
                if (this.isNotOutOfBound(l, c) && this.plateau[l][c].isBomb) {
                    res += 1;
                }
            }
        }
        return res;
    }

    private isNotOutOfBound(l: number, c: number): boolean {
        return l >= 0 && l < this.width && c >= 0 && c < this.height;
    }

    public showCase(l: number, c: number, modeBomb: boolean): void {
        const currentCase = this.plateau[l][c];
        if (modeBomb) {
            this.showCaseModeBomb(l, c);
        }
        currentCase.setModeBombe = modeBomb;
    }

    private showCaseModeBomb(l: number, c: number): void {
        if (this.isNotOutOfBound(l, c) && this.plateau[l][c].isShow) {
            return;
        }
        const currentCase = this.plateau[l][c];

        if (currentCase.isBomb) {
            this.showBomb();
            this.nbCaseSafe = -1;
            return;
        }

        currentCase.setShow = true;
        this.nbCaseSafe--;
        if (currentCase.getNbBombVoisin >= 1) {
            return;
        }
        this.showCaseVoisin(Math.max(0, l - 1), Math.min(this.height, Number(l) + 2), Math.max(0, c - 1), Math.min(this.height, Number(c) + 2));
    }

    private showCaseVoisin(lmin: number, lmax: number, cmin: number, cmax: number): void {
        for (let l = lmin; l < lmax; l++) {
            for (let c = cmin; c < cmax; c++) {
                this.showCaseModeBomb(l, c);
            }
        }
    }

    private showBomb(): void {
        for (let l = 0; l < this.width; l++) {
            for (let c = 0; c < this.height; c++) {
                if (this.plateau[l][c].isBomb) {
                    this.plateau[l][c].setShow = true;
                }
            }
        }
    }

    public get getGame(): Case[][] {
        return this.plateau;
    }

    public get getHeight(): number {
        return this.height;
    }

    public get getWidth(): number {
        return this.width;
    }

    public get getNbCaseSafe(): number {
        return this.nbCaseSafe;
    }
}

