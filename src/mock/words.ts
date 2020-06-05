const WORDS = [
    "group",
    "think",
    "family",
    "white",
    "how",
    "them",
    "need",
    "without",
    "new",
    "down",
    "me",
    "night",
    "big",
    "father",
    "tell",
    "they",
    "example",
    "want",
    "eye",
    "him",
    "when",
    "old",
    "letter",
    "large",
    "mile",
    "by",
    "my",
    "kind",
    "begin",
    "very",
    "does",
    "over",
    "these",
    "name",
    "another",
    "call",
    "well",
    "water",
    "open",
    "did",
    "of",
    "river",
    "cut",
    "an",
    "miss",
    "something",
    "their",
    "second",
    "from",
    "made",
    "left",
    "use",
    "walk",
    "say",
    "being",
    "eat",
    "go",
    "along",
    "out",
    "saw",
    "have",
    "ask",
    "give",
    "be",
    "Indian",
    "were",
    "as",
    "hear",
    "answer",
    "that",
    "form",
    "men",
    "place",
    "tree",
    "this",
    "small",
    "may",
    "year",
    "above",
    "until",
    "run",
    "now",
    "America",
    "man",
    "point",
    "again",
    "all",
    "in",
    "write",
    "get",
    "find",
    "for",
    "carry",
    "let",
    "quick",
    "even",
    "below",
    "would",
    "country",
    "do",
    "children",
    "end",
    "because",
    "much",
    "own",
    "every",
    "school",
    "never",
    "which",
    "it's",
    "you",
    "if",
    "away",
    "we",
    "put",
    "air",
    "there",
    "on",
    "sea",
    "light",
    "mother",
    "picture",
    "almost",
    "add",
    "quickly",
    "us",
    "like",
    "word",
    "oil",
    "also",
    "time",
    "line",
    "then",
    "here",
    "life",
    "boy",
    "last",
    "more",
    "our",
    "far",
    "few",
    "to",
    "where",
    "went",
    "song",
    "sound",
    "later",
    "only",
    "mean",
    "move",
    "turn",
    "three",
    "her",
    "what",
    "can",
    "between",
    "read",
    "state",
    "don't",
    "great",
    "your",
    "should",
    "some",
    "too",
    "face",
    "most",
    "back",
    "people",
    "its",
    "right",
    "thing",
    "know",
    "sometimes",
    "four",
    "see",
    "is",
    "start",
    "make",
    "before",
    "just",
    "follow",
    "high",
    "close",
    "set",
    "good",
    "city",
    "grow",
    "up",
    "once",
    "such",
    "watch",
    "first",
    "page",
    "will",
    "after",
    "long",
    "said",
    "day",
    "together",
    "his",
    "paper",
    "food",
    "car",
    "with",
    "take",
    "who",
    "took",
    "or",
    "each",
    "must",
    "keep",
    "soon",
    "no",
    "house",
    "she",
    "work",
    "might",
    "been",
    "often",
    "side",
    "are",
    "had",
    "land",
    "so",
    "into",
    "near",
    "play",
    "spell",
    "young",
    "idea",
    "same",
    "live",
    "thought",
    "through",
    "seem",
    "part",
    "and",
    "home",
    "world",
    "other",
    "he",
    "way",
    "the",
    "but",
    "plant",
    "mountain",
    "came",
    "book",
    "help",
    "has",
    "why",
    "look",
    "hard",
    "got",
    "list",
    "number",
    "story",
    "little",
    "sentence",
    "come",
    "really",
    "always",
    "at",
    "it",
    "any",
    "enough",
    "found",
    "talk",
    "learn",
    "began",
    "change",
    "next",
    "not",
    "animal",
    "try",
    "both",
    "still",
    "quite",
    "was",
    "head",
    "off",
    "one",
    "earth",
    "girl",
    "hand",
    "different",
    "while",
    "those",
    "two",
    "important",
    "about",
    "leave",
    "could",
    "show",
    "study",
    "question",
    "many",
    "around",
    "than",
    "stop",
    "under",
    "feet"
]


function getRandomWord():word {
    const index = randomNumber(WORDS.length)
    return {
        text:WORDS[index],
        current:false,
        correct:false,
        visited:false
        
    }
}
export function getRandomWords(limit = 30):word[] {
    let randomWords = []
    for (let i = 0; i < limit; i++) {
        randomWords.push(getRandomWord())
    }
    return randomWords
}

function randomNumber(max, min = 0) {
    return Math.round(Math.random() * (max - min) + min);
} 

export interface word {
    text:string,
    current:boolean,
    visited:boolean,
    correct:boolean
}