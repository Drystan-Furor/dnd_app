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
        if (rng === 1) {
            this.gender = 'male';
            this.manWoman = 'man';
            this.heshe = 'he';
            this.hisher = 'his';
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

    setHisHer(varValue) {
        this.hisher = varValue;
    }

    setHeShe(varValue) {
        this.heshe = varValue;
    }

    setManWoman(varValue) {
        this.manWoman = varValue;
    }

    setGender(varValue) {
        this.gender = varValue;
    }
}

// Usage
// const newGender = new Gender();
// console.log(newGender.getGender(), newGender.getManWoman