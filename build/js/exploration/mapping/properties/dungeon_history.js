import {getRandomElement} from "../../../tools/tools";

export class Dungeon_history {
    static _history() {
        let history = [
            Dungeon_history._abandonedBy(),
            Dungeon_history._destroyedBy(),
            `Conquered by invaders`,
            `Location cursed by the gods and shunned`,
            `Stronghold`,
            `Temple`,
            `Shrine`,
            `Tomb`,
            `Site of a great miracle`,
            `Overrun by planar creatures`,
            `Original creators still in control`,

        ];
        return getRandomElement(history);
    }

    static _abandonedBy() {
        let abandonedBy = [
            `by creators`,
            `due to plague`,
        ];
        return `Abandoned `+getRandomElement(abandonedBy);
    }

    static _destroyedBy() {
        let destroyedBy = [
            `attacking raiders`,
            `discovery made within the site`,
            `internal conflict`,
            `magical catastrophe`,
            `natural disaster`,
        ];
        return `Destroyed by `+getRandomElement(destroyedBy);
    }












}
