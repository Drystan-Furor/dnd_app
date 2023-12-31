export class Mood {
    constructor(npcClass) {
        this.mood = this._generateMood(npcClass);
    }

    static _mood() {
        const moods = [
            'angry', 'happy', 'careless', 'neutral',
            'pissed', 'timid', 'grieving', 'sad', 'laughing',
            'smiling', 'upset', 'agitated', 'aggravated', 'cheerful',
            'joyful', 'peacefull', 'intoxicated', 'captivated',
            'gleeful', 'thrilled', 'ecstatic', 'glad', 'annoyed',
            'bitter', 'furious', 'bashed', 'tipsy',
            'impassioned', 'indignant', 'offended', 'uptight',
            'fierce', 'displeased', 'hateful', 'raging', 'mad',
            'crazy', 'storming', 'casual', 'indifferent', 'nonchalant',
            'absent-minded', 'thoughtful', 'thoughtless', 'oblivious',
            'unconcerned', 'unguarded', 'guarded', 'unobservant',
            'disinterested', 'uncommitted', 'unbiased', 'calm', 'cool',
            'collected', 'dispassionate', 'pacifistic',
            'relaxed', 'unprejudiced', 'nonbelligerent', 'impartial',
            'nervous', 'fearful', 'gentle', 'afraid', 'frightened',
            'feeble', 'cowardly', 'shaky', 'unnerved',
            'heartbroken', 'melancholy', 'mournful', 'sorrowful',
            'bereaved', 'cheerless', 'distressed', 'forlorn', 'downcast',
        ];
        return moods[Math.floor(Math.random() * moods.length)];
    }

     _generateMood(npcClass) {
         return "The " + npcClass + " seems to be in a " + Mood._mood(npcClass) + " mood";
    }

    getMood() {
        return this.mood;
    }
}

