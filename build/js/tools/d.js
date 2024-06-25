import {rand} from "./tools";

export class D {
    static _4() {
        return rand(1, 4);
    }
    static _6() {
        return rand(1, 6);
    }
    static _8() {
        return rand(1, 8);
    }
    static _10() {
        return rand(1, 10);
    }
    static _12() {
        return rand(1, 12);
    }
    static _20() {
        return rand(1, 20);
    }
    static _100() {
        return rand(1, 100);
    }
    static _Custom(sides) {
        return rand(1, sides);
    }
}