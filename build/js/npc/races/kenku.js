import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Material} from "../generators/materials";
import {Verbs} from "../generators/verbs";

export class Kenku extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.nickname = this._nickname();
        this.firstname = this._firstname(dndRace.getRace(), genderNouns);
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const surnames = {
            'Rabbit Scream' : "screaming rabbit",
            'Hammer Clank' : "clanking hammer",
            'Dog Wiggle' : "wiggeling dogtail",
            'Steel Clank' : "clanking of steel",
            'Lute String' : "strumming lute",
            'Book Slam' : "slamming of a book",
            'Leather Flick'  : "leather flicking",
            'Grain Trash'  : "hay bail",
            'Hide Smack' : "smacking of hides",
            'Snake Slither' : "slithering snake",
            'Chisel Carve' : "stonecutting",
            'Hoe Scrape' : "ground scraping",
            'Parrot Squawk' : "squaking parrot",
            'Jackal Call' : "howling Jackal",
            'Owl Call' : "owl coo",
            'Falcon Swoop' : "swooping bird",
            'Grain Mill' : "flour milling",
            'Chimer' : "chiming",
            'Duck Rustle' : "rustling duck",
            'Paint Stroke' : "painting paintbrush",
            'Kettle Bubble' : "water cooking",
            'Plunger' : "clogging",
            'Mouse Rustle' : "scurrying mouse",
            'Bell Drop' : "dropping town-bell",
            'Carver' : "wood carving",
            'Cobbler' : "sewing",
            'Dog Yelp' : "barking dog",
            'Crate Smash' : "crate being smashed",
            'Hatchet Drop' : "lumber chopping",
            'Stomper' : "thumping",
            'Fryer' : "flesh sizzling",
            'Parrot Call' : "squaking parrot",
            'Badger Run' : "rustling of a small animal",
            'Sheep Baa' : "bleating sheep",
            'Alligator Roar' : "roaring Lizardfolk",
            'Fox Yelp' : "howling fox",
            'Bee Buzzing' : "beehive",
            'Stampede' : "stampeding horses",
            'Coyote Yelp' : "crying coyote",
            'Horse Snort' : "snorting horse",
            'Tree Fall' : "falling tree",
            'Mallet Smash' : "slamming wooden hammer",
            'Potion Crash' : "bottle breaking",
        };

        const keys = Object.keys(surnames);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const sounding = surnames[randomKey];
        this.lastname = randomKey;
        this.sounding = sounding;

        return randomKey;
    }


    _firstname(dndRace, genderNouns) {
        return `a ${dndRace}. When asked for it's name the ${dndRace} makes a *${this.sounding}* sound, 
        hence ${genderNouns.getHeShe()} is known as `;
    }

    _nickname() {
        const nickname = [
            'Prodder', 'Clanger', 'Rustler', 'Knocker',
            'Tweeter', 'Snaker', 'Mimer', 'Piercer',
            'Drummer', 'Exploder', 'Smasher', 'Pigeoner',
            'Braker', 'Sifter', 'Roarer', 'Spitter', 'Giggler',
            'Clicker', 'Puffer', 'Roaster', 'Lugger', 'Burner',
            'Buzzer', 'Clogger', 'Howler', 'Sizzler', 'Mimicry',
        ];
        this.nickname = nickname[Math.floor(Math.random() * nickname.length)];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _description(dndRace, genderNouns) {
        return `${this.lastname} is called ${this.nickname} around here, because of the sounds 
        ${genderNouns.getHeShe()} mimics`;
    }

    static mouthReplacer() { // tomia
        const tomia = [
            "sharp tomia", "rounded tomia", "bow shaped tomia", "heavy lower tomia",
            "ridged tomia", "heavy upper tomia", "sawtooth serated tomia", "thin tomia",
            "downward turned tomia", "perfectly proportioned tomia",
        ];
        return tomia[Math.floor(Math.random() * tomia.length)];
    }

    static chinReplacer() { //culmen
        const chinCurves = ['pointy', 'round', 'square'];
        const chinCurve = chinCurves[Math.floor(Math.random() * chinCurves.length)];

        const chinShapes = [
            'a rather ', 'quite the', 'a very defined', 'a puffed',
            'a very protruding', 'a bulbous', 'a very small', 'a bit of a',
        ];
        const chinShape = chinShapes[Math.floor(Math.random() * chinShapes.length)];

        return chinShape + " " + chinCurve + " culmen";
    }

    static noseReplacer() { // beak
        let nose = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
        if (nose >= 1 && nose <= 24) {
            nose = 'a very generalist, prominent big beak';
        } else if (nose >= 25 && nose <= 38) {
            nose = 'a scything upturned beak, small in width but quite long';
        } else if (nose >= 39 && nose <= 47) {
            nose = 'an eagles beak, quite raptorial. With a strong sloping curve that prominently protrudes from the face';
        } else if (nose >= 48 && nose <= 56) {
            const outlines = ["insect catching", "grain eating", "Coniferous seed eating"];
            const outline = outlines[Math.floor(Math.random() * outlines.length)];
            nose = `a snub beak that is common with ${outline} birds`;
        } else if (nose >= 57 && nose <= 64) {
            nose = 'a very long and sharp beak, thin and pointy, small in height but quite flat, common with aerial fishing birds';
        } else if (nose >= 65 && nose <= 68) {
            nose = 'a "Hawk" beak that has similarities with the curved beaks of eagles and other predatory birds. It has a dramatic arched shape';
        } else if (nose >= 69 && nose <= 76) {
            nose = 'a perfectly straight beak. It gives this birdfolk an aggressive profile since it is usually seen on scavenging birds';
        } else if (nose >= 77 && nose <= 84) {
            nose = 'a dip netting beak, rather big, with a very prominent bottom mandible, like pelicans normally have';
        } else if (nose >= 85 && nose <= 91) {
            const outlines = ["filter feeding", "pursuit fishing", "chiseling"];
            const outline = outlines[Math.floor(Math.random() * outlines.length)];
            nose = `a thin and flat shaped beak with a short tip, typical for ${outline}`;
        } else if (nose >= 92 && nose <= 100) {
            nose = "a bulbous beak, it has a swollen, disproportionate nasal tip, almost like it's too big. Imagine something like a fruit eating toucan";
        }
        return nose;
    }

    static teethReplacer() { // Beak detail
        const color = [
            'shiny white', 'yellow', 'quite large',
            'rather small', 'yellow and grey', 'crooked',
            'lead', 'tin', 'copper', 'steel', 'cast-iron',
            'iron', 'metal',
        ];
        const colorType = color[Math.floor(Math.random() * color.length)];
        const metalType = Material.getMetalType();
        const quality = Verbs.quality();

        const typeBeak = [
            `has a ${metalType} beak`,
            "has a hard horny tissue at the tip of the beak",
            `has a ${colorType} shield-shaped structure on the tip of its beak`,
            `has a ${colorType} shield-shaped structure on its beak tip, which spans the entire width of the beak`,
            `has a ${colorType} shield-shaped structure on its beak, which is bent at the tip to form a hook`,
            `has a ${colorType} shield-shaped structure on its beak tip, which spans the entire width of the beak and bent at the tip to form a hook`,
            `has a fake colorType, like a prosthetic made of ${quality} ${metalType}`,
        ];
        return typeBeak[Math.floor(Math.random() * typeBeak.length)];
    }

}
setClassMapping('Kenku', Kenku);
