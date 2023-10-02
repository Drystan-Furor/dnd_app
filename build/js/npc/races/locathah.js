import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Locathah extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.mom = this._lastname();
        this.dad = this._lastname();
        this.firstname = '';
        this.nickname = this.lastname;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Kelpy', 'Chest', 'Compas', 'Lace', 'Canon', 'Canonball',
            'Anchor', 'Chain',  'Raft', 'Oar', 'Barrel', 'Painter Ring',
            'Sail', 'Stempost', 'Rivets', 'Sternrudder', 'Knarr',
            'Coins', 'Bucket', 'Bow', 'Fishnet', 'Voyage', 'Reef',
            'Dolly', 'Adrift', 'Clinker', 'Carvel', 'Rudder', 'Mast', 'Ledger',
            'Log', 'Debris', 'Hulc', 'Keel', 'Ceol', 'Spritsail',
            'Cog', 'Vessel', 'Ship', 'Planks', 'Rubble', 'Garboard',
            'Sternpost', 'Caravel', 'Carrack', 'Bowsprit', 'Foresail', 'Mizzen',
            'Topsail', 'Crayer', 'Hoy', 'Picard', 'Supplies', 'Galley', 'Rowing',
            'Longship', 'Strakes', 'Wood', 'Balinger', 'Birlinn', 'Steering-oar',
            'Lapstrake', 'Hull', 'Skiff', 'Apron', 'Deadwoods', 'Transom',
            'Coble', 'Stringer', 'Crew', 'Hook', 'Swivels', 'Crutch Plate',
            'Dinghy', 'Fairleads', 'Square Nails', 'Rove', 'Screws', 'Scrollcase',
            'Freeboard','Bottle', 'Chart', 'Desk','Flag', 'Skeletons',
            'Epoxy', 'tea Tray', 'Crate', 'Gauntlet', 'Map',
            'Tools', 'Knives', 'Stamp', 'Crest', 'Saltpeter', 'Pouch',

            'Sextant', 'Compass', 'Spyglass', 'Cannon', 'Musket', 'Flintlock', 'Sabre',
            'Cutlass', 'Tricorn', 'Rum Bottle', 'Powder Keg','Wheel', 'Lantern',
            'Rope', 'Net', 'Harpoon', 'Barrel', 'Chest', 'Coin', 'Jewelry', 'Emerald', 'Ruby', '' +
            'Diamond', 'Pearl', 'Gold Bar', 'Silverware', 'Porcelain', 'Telescope', 'Clock', 'Bell',
            'Compass Rose', 'Astrolabe', 'Quadrant', 'Hourglass', 'Log Line', 'Lead Line', 'Shackle',
            'Block', 'Deadeye', 'Capstan', 'Grapnel', 'Swivel Gun', 'Blunderbuss', 'Pistol', 'Musket Ball',
            'Chain Shot', 'Grapeshot', 'Powder Horn', 'Bullet Mould', 'Cartridge', 'Bayonet', 'Pike',
            'Boarding Axe', 'Mariner’s Astrolabe', 'Sea Chart', 'Logbook', 'Inkwell', 'Quill', 'Parchment',
            'Seal', 'Wax', 'Locket', 'Medallion', 'Brooch', 'Ring', 'Earring', 'Bracelet', 'Necklace', 'Crown',
            'Chalice', 'Goblet', 'Plate', 'Bowl', 'Cup', 'Vase', 'Statuette', 'Figurine', 'Idol', 'Relic', 'Icon',
            'Tapestry', 'Painting', 'Mirror', 'Loom', 'Spindle', 'Needle', 'Thread', 'Fabric', 'Lace', 'Ribbon',
            'Bead', 'Button', 'Buckle', 'Hatpin', 'Cameo', 'Coral', 'Shell', 'Bone', 'Horn', 'Tooth', 'Ivory',
            'Leather', 'Fur', 'Feather', 'Wool', 'Silk', 'Velvet', 'Linen', 'Hemp', 'Cotton', 'Dye', 'Spice',
            'Salt', 'Sugar', 'Tea', 'Coffee', 'Cocoa', 'Tobacco', 'Opium', 'Rum', 'Wine', 'Brandy', 'Ale', 'Oil',
            'Tar', 'Pitch', 'Tallow', 'Soap', 'Perfume', 'Potion', 'Vial', 'Flask', 'Bottle', 'Cask', 'Barrel',
            'Tub', 'Bucket', 'Pail', 'Scoop', 'Shovel', 'Rake', 'Hoe', 'Pick', 'Axe', 'Hammer', 'Saw', 'Chisel',
            'File', 'Rasp', 'Drill', 'Brace', 'Bit', 'Nail', 'Screw', 'Peg', 'Wedge', 'Pin', 'Bolt', 'Nut', 'Washer',
            'Rivet', 'Hinge', 'Latch', 'Lock', 'Key', 'Chain', 'Hook', 'Ring', 'Rod', 'Staff', 'Wand', 'Stick',
            'Cane', 'Whip', 'Rope', 'Cord', 'String', 'Wire', 'Strap', 'Belt', 'Sash', 'Band', 'Ribbon', 'Lace',
            'Braid', 'Tassel', 'Fringe', 'Pom-pom', 'Feather', 'Root', 'Bark', 'Wood', 'Stone', 'Clay', 'Glass',
            'Metal', 'Paper', 'Wax', 'Ink', 'Paint', 'Resin', 'Leather', 'Fur', 'Horn', 'Bone', 'Shell', 'Coral',
            'Pearl', 'Gem', 'Crystal', 'Glass',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _description(dndRace, genderNouns) {
        return `${dndRace} name their children and themselves after what they know.
                So ${this.dad} and ${this.mom} named their children after the things found in shipwrecks on the seafloor,
                that's why ${genderNouns.getHeShe()} is called ${this.nickname}.
                This nautical tradition has only strengthened as they have had more contact with land-dwelling humanoids`;
    }

}

setClassMapping('Locathah', Locathah);
