export class Gender {
    constructor() {
        this._setRandomGender();
    }

    _setRandomGender() {
        const rng = Math.floor(Math.random() * 2) + 1; // Generates a random number, 1 or 2

        this.gender = 'female';
        this.manWoman = 'woman';
        this.heshe = 'she';
        this.hisher = 'her';
        this.himher = 'her';
        if (rng === 1) {
            this.gender = 'male';
            this.manWoman = 'man';
            this.heshe = 'he';
            this.hisher = 'his';
            this.himher = 'him';
        }
    }

    getGender() {
        return this.gender;
    }

    getManWoman() {
        return this.manWoman;
    }

    getHeShe() {
        return this.heshe;
    }

    getHisHer() {
        return this.hisher;
    }

    getHimHer() {
        return this.himher;
    }

    setGender(string) {
        this.gender = string
    }

    setManWoman(string) {
        this.manWoman = string
    }

    setHeShe(string) {
        this.heshe = string
    }

    setHisHer(string) {
        this.hisher = string
    }

    setHimHer(string) {
        this.himher = string
    }
}

