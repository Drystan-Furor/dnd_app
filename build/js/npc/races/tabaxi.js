import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Tabaxi extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this._firstname();
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const clanPrefixes = [
            'Bright', 'Distant', 'Burning', 'Roaring', 'Rumbling', 'Ancient', 'Proud',
            'Fading', 'Growing', 'Angelic', 'Flickering', 'Dry', 'Changing',
            'Fertile', 'Awoken', 'Bleak', 'Dreary', 'Misty', 'Chilly', 'Tumbling', 'Elder',
            'Cold', 'Boiling', 'Dreaded', 'Ascending', 'Descending', 'Tranquil', 'Radiant',
            'Entangling', 'Drenching', 'Parching', 'Dusty', 'Threatening',
            'Bellowing', 'Faraway', 'Grand', 'Lurking', 'Dangerous', 'Gloomy', 'Killing',
            'Ugly', 'Insignificant', 'Ominous', 'Grievous', 'Hazardous', 'Sandy',
            'Shocking', 'Primeval', 'Cremating',
        ];

        const clanAlfixes = [
            'River', 'Mountains', 'Cliffs', 'Rain', 'Tree', 'Forests', 'Torrent', 'Wilds',
            'Glade', 'Peak', 'Grotto', 'Marsh', 'Mist', 'Desert', 'Catacombs',
            'Fjord', 'Creeks', 'Crags', 'Islands', 'Swamps', 'Bluffs', 'Lake', 'Isle',
            'Geyser', 'Woodlands', 'Coast', 'Caverns', 'Thicket', 'Barrens', 'Graves',
            'Crypt', 'Shrine', 'Mound', 'Tomb', 'Sepulcher', 'Necropolis', 'Wastes', 'Hill',
            'Hills', 'Ridge', 'Slope', 'Dune', 'Summit', 'Cliff', 'Highlands', 'Statue',
            'Jungle', 'Wasteland', 'Labyrinth', 'Chapel', 'Maze', 'Crematory', 'Morgue',
        ];

        const clanPrefix = clanPrefixes[Math.floor(Math.random() * clanPrefixes.length)];
        const clanAlfix = clanAlfixes[Math.floor(Math.random() * clanAlfixes.length)];

        return ` of the ${clanPrefix} ${clanAlfix} clan`;
    }

    _firstname() {
        const thisTabaxiName = Math.floor(Math.random() * 2) + 1;

        if (thisTabaxiName === 1) {
            const prefixes = {
                "Cloud": "Cloud",
                "Jade": "Jade",
                "Smoking": "Smoke",
                "Peak": "Peak",
                "Swift": "Swift",
                "Silent": "Silent",
                "Blazing": "Blaze",
                "Defiant": "Fiant",
                "Poem": "Poe",
                "Leaf": "Leaf",
                "Kite": "Kite",
                "Sky": "Skye",
                "Grand": "Grand",
                "Beauty's": "Beau",
                "Little": "Little",
                "Aurora": "Ror",
                "Single": "Sing",
                "Scratch": "Scratch",
                "Radiant": "Rad",
                "Star": "Star",
                "Nimble": "Nim",
                "Magic": "Mag",
                "Cloaking": "King",
                "Crimson": "Crim",
                "Sardonyx": "Sargon",
                "": "",
            };
            const prefixKeys = Object.keys(prefixes);
            const prefix = prefixKeys[Math.floor(Math.random() * prefixKeys.length)];
            const firstNamePart = prefix;
            this.nickname = prefixes[prefix];

            const middleNameParts = [
                'after the ', 'before the ', 'of a ', 'of the ', 'of ', 'in the ', 'on the ',
                '', '', '', '', '',
            ];
            const middleNamePart = middleNameParts[Math.floor(Math.random() * middleNameParts.length)];

            const lastNameParts = [
                'Water', 'Wind', 'Summer', 'Winter', 'Spring', 'Autumn', 'Road', 'Mountains',
                'Mountaintop', 'Thunder', 'Sunset', 'Morning', 'Evening', 'Flock', 'Child',
                'Rain', 'Thrill', 'Whish', 'Shadows', 'Darkness', 'Light', 'Day', 'River',
                'Shadow', 'Woods', 'World', 'Lightning', 'Garden', 'Dagger', 'Opal', 'Akkad',
                'Cauldron', 'Sea', 'Moon', 'Sun',
            ];
            const lastNamePart = lastNameParts[Math.floor(Math.random() * lastNameParts.length)];

            this.firstname = `${firstNamePart} ${middleNamePart}${lastNamePart}`;
        }

        if (thisTabaxiName === 2) {
            const firstNameParts = [
                'Two', 'Five', 'Six', 'Seven', 'Left-Handed', 'Hidden', 'Flickering',
                'Bold', 'Glow', 'Bright', 'Opal', 'Sound', 'Lost', 'Flower', 'Amusing',
                'Dangling', 'Dark', 'Flawless', 'Call of the', 'Looping', "Icy", 'Endless',
                'Sapphire', 'Malachite', 'Closed', 'Curious', 'Mumbling', 'Emerald',
                'Active',
            ];
            const firstNamePart = firstNameParts[Math.floor(Math.random() * firstNameParts.length)];

            const altfixes = {
                "Berry": "Berry",
                "Beast": "Beast",
                "Timber": "Timber",
                "Hummingbird": "Bird",
                "Thundercloud": "Thund",
                "Snakes": "Snake",
                "Riddle": "Riddle",
                "Angel": "Angel",
                "Fire": "Fire",
                "String": "String",
                "Gates": "Gate",
                "Tale": "Tally",
                "Dust": "Dusty",
                "Owl": "Owl",
                "Glove": "Glove",
                "Time": "Time",
                "Lights": "Light",
                "Bootstraps": "Boot",
                "Coil": "Coil",
                "Book": "Book",
                "Shadow": "Shade",
                "Dagger": "Dag",
                "Zircon": "Zirc",
                "Device": "Dev",
                "Passion": "Sion",
                "Fist": "Fist",
            };
            const altfixKeys = Object.keys(altfixes);
            const altfix = altfixKeys[Math.floor(Math.random() * altfixKeys.length)];
            const secondNamePart = altfix;
            this.nickname = altfixes[altfix];
            this.firstname = `${firstNamePart} ${secondNamePart}`;
        }
    }

    _description(dndRace, genderNouns) {
        return `A ${dndRace.getRace()}'s name is crafted by a clan looking at star signs, prophecies, and anything else. 
        ${this.firstname} ${this.lastname} is shortened to a one-word synopsis: ${this.nickname} it holds the most 
        important aspect of ${this.firstname}'s name. The clan name is based on a simple geographical factor near 
        ${this.nickname}'s clan, multiple clans could be named after the same cliff. 
        ${this.nickname} is the preferred nomenclature everybody uses to address this ${dndRace.getRace()}`;
    }

}

setClassMapping('Tabaxi', Tabaxi);
