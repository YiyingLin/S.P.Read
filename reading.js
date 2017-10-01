const EssayParser = require('./essay-parser.js');

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Plane,
} from 'react-vr';

const LittlePrince1 = 'All men have stars, but they are not the same things for different people. For some, who are travelers, the stars are guides. For others they are no more than little lights in the sky. For others, who are scholars, they are problems... But all these stars are silent. You-You alone will have stars as no one else has them... In one of the stars I shall be living. In one of them I shall be laughing. And so it will be as if all the stars will be laughing when you look at the sky at night..You, only you, will have stars that can laugh! And when your sorrow is comforted (time soothes all sorrows) you will be content that you have known me... You will always be my friend. You will want to laugh with me. And you will sometimes open your window, so, for that pleasure... It will be as if, in place of the stars, I had given you a great number of little bells that knew how to laugh';

const Cinderella2 = ["Cinderella\u2019s", "mother", "died", "while", "she", "was", "a", "very", "little", "child,", "leaving", "her", "to", "the", "care", "of", "her", "father", "and", "her", "step-sisters,", "who", "were", "very", "much", "older", "than", "herself;", "for", "Cinderella\u2019s", "father", "had", "been", "twice", "married,", "and", "her", "mother", "was", "his", "second", "wife.", "Now,", "Cinderella\u2019s", "sisters", "did", "not", "love", "her,", "and", "were", "very", "unkind", "to", "her.", "As", "she", "grew", "older", "they", "made", "her", "work", "as", "a", "servant,", "and", "even", "sift", "the", "cinders;", "on", "which", "account", "they", "used", "to", "call", "her", "in", "mockery", "\u201cCinderella.\u201d", "It", "was", "not", "her", "real", "name,", "but", "she", "became", "afterwards", "so", "well", "known", "by", "it", "that", "her", "proper", "one", "has", "been", "forgotten._", "She", "was", "a", "very", "sweet-tempered,", "good", "girl,", "however,", "and", "everybody", "(except", "her", "cruel", "sisters)", "loved", "her._", "It", "happened,", "when", "Cinderella", "was", "about", "seventeen", "years", "old,", "that", "the", "King", "of", "that", "country", "gave", "a", "ball,", "to", "which", "all", "ladies", "of", "the", "land,", "and", "among", "the", "rest", "the", "young", "girl\u2019s", "sisters,", "were", "invited.", "And", "they", "made", "her", "dress", "them", "for", "the", "ball,", "but", "never", "thought", "of", "allowing", "her", "to", "go", "there._", "\u201cI", "wish", "you", "would", "take", "me", "to", "the", "ball", "with", "you,\u201d", "said", "Cinderella,", "meekly._", "\u201cTake", "you,", "indeed!\u201d", "answered", "the", "elder", "sister,", "with", "a", "sneer;", "\u201cit", "is", "no", "place", "for", "a", "cinder-sifter:", "stay", "at", "home", "and", "do", "your", "work.\u201d_", "When", "they", "were", "gone,", "Cinderella,", "whose", "heart", "was", "very", "sad,", "sat", "down", "and", "cried", "bitterly;", "but", "as", "she", "sat", "sorrowful,", "thinking", "of", "the", "unkindness", "of", "her", "sisters,", "a", "voice", "called", "to", "her", "from", "the", "garden,", "and", "she", "went", "out", "to", "see", "who", "was", "there.", "It", "was", "her", "godmother,", "a", "good", "old", "Fairy._", "\u201cDo", "not", "cry,", "Cinderella,\u201d", "she", "said;", "\u201cyou", "also", "shall", "go", "to", "the", "ball,", "because", "you", "are", "a", "kind,", "good", "girl.", "Bring", "me", "a", "large", "pumpkin.\u201d_", "Cinderella", "obeyed,", "and", "the", "Fairy,", "touching", "it", "with", "her", "wand,", "turned", "it", "into", "a", "grand", "coach.", "Then", "she", "desired", "Cinderella", "to", "go", "to", "the", "trap,", "and", "bring", "her", "a", "rat.", "The", "girl", "obeyed,", "and", "a", "touch", "of", "the", "Fairy\u2019s", "wand", "turned", "him", "into", "a", "very", "smart", "coachman.", "Two", "mice", "were", "turned", "into", "footmen;", "four", "grasshoppers", "into", "white", "horses.", "Next,", "the", "Fairy", "touched", "Cinderella\u2019s", "rags,", "and", "they", "became", "rich", "satin", "robes,", "trimmed", "with", "point", "lace.", "Diamonds", "shone", "in", "her", "hair", "and", "on", "her", "neck", "and", "arms,", "and", "her", "kind", "godmother", "thought", "she", "had", "seldom", "seen", "so", "lovely", "a", "girl.", "Her", "old", "shoes", "became", "a", "charming", "pair", "of", "glass", "slippers,", "which", "shone", "like", "diamonds._", "\u201cNow", "go", "to", "the", "ball,", "my", "love,\u201d", "she", "said,", "\u201cand", "enjoy", "yourself.", "But", "remember,", "you", "must", "leave", "the", "room", "before", "the", "clock", "strikes", "eleven.", "If", "you", "do", "not", "your", "dress", "will", "return", "to", "its", "original", "rags.", "I", "approve", "of", "pleasure,", "but", "not", "of", "dissipation,", "and", "I", "expect", "that", "you", "will", "show", "your", "gratitude", "by", "obeying", "me.\u201d_", "Cinderella", "kissed", "and", "thanked", "her", "godmother.", "Then", "she", "stepped", "into", "her", "coach", "and", "drove", "off,", "with", "her", "footmen", "behind,", "in", "great", "style.", "The", "Fairy,", "when", "she", "was", "gone,", "returned", "to", "Fairyland._", "Cinderella", "was", "received", "at", "the", "King\u2019s", "palace", "with", "great", "respect.", "The", "Lord", "Chamberlain", "bowed", "low", "to", "her,", "thinking", "she", "must", "be", "a", "very", "great", "lady", "by", "her", "dress", "and", "carriage,", "and", "he", "showed", "her", "at", "once", "into", "the", "ball-room._", "She", "was", "so", "beautiful", "that", "everybody", "looked", "at", "her,", "and", "wondered", "who", "she", "was;", "and", "the", "Prince", "asked", "her", "to", "dance", "with", "him,", "and", "afterwards", "would", "dance", "with", "no", "one", "else._", "But", "she", "made", "haste", "to", "leave", "a", "little", "before", "the", "hour", "fixed,", "and", "had", "time", "to", "undress", "before", "her", "sisters", "came", "home.", "They", "told", "her", "a", "beautiful", "Princess", "had", "been", "at", "the", "ball,", "with", "whom", "the", "Prince", "was", "delighted.", "They", "did", "not", "know", "it", "was", "Cinderella", "herself,", "and", "she", "was", "amused", "to", "hear", "them", "admire", "her", "grace", "and", "beauty,", "and", "say", "that", "they", "were", "sure", "she", "was", "a", "royal", "lady._", "The", "Prince", "was", "quite", "vexed", "when", "supper-time", "came,", "and", "he", "could", "not", "find", "his", "beautiful", "partner,", "and", "no", "one", "had", "seen", "her", "leave", "the", "room.", "But", "in", "hopes", "of", "beholding", "her", "again,", "he", "persuaded", "the", "King", "to", "give", "another", "grand", "ball.", "As", "soon", "as", "her", "sisters", "were", "gone", "to", "it,", "Cinderella\u2019s", "godmother", "arrived._", "\u201cYou", "were", "so", "good", "and", "obedient", "last", "time,", "that", "I", "shall", "let", "you", "go", "out", "again,\u201d", "said", "she", "to", "the", "young", "girl._", "And", "once", "more", "the", "rat,", "mice,", "grasshoppers,", "and", "pumpkin", "(which", "had", "gone", "back", "to", "their", "original", "shapes", "after", "the", "first", "ball)", "were", "turned", "into", "the", "grand", "carriage", "and", "attendants,", "and", "Cinderella,", "in", "rose-coloured", "satin", "and", "rubies,", "went", "to", "the", "royal", "ball._", "Directly", "the", "Prince", "saw", "her,", "he", "asked", "her", "to", "dance,", "and", "would", "have", "no", "other", "partner,", "and", "as", "he", "led", "her", "past", "her", "two", "unkind", "sisters,", "she", "saw", "them", "look", "at", "her", "dress", "with", "envious", "eyes,", "and", "knew", "that", "they", "wished", "they", "were", "as", "beautiful,", "and", "as", "well-dressed", "as", "she", "was._", "But", "in", "the", "midst", "of", "her", "enjoyment,", "Cinderella", "remembered", "the", "Fairy\u2019s", "command,", "and", "at", "half-past", "ten", "glided", "out", "of", "the", "room,", "and", "drove", "home", "again.", "Her", "sisters", "found", "her", "waiting", "to", "undress", "them", "in", "her", "usual", "rags,", "and", "kept", "her", "up", "to", "tell", "her", "how", "beautiful", "the", "unknown", "Princess", "was,", "and", "how", "well", "she", "was", "dressed._", "Again", "the", "Prince", "was", "vexed", "at", "the", "sudden", "disappearance", "of", "the", "beautiful", "stranger,", "and", "once", "more", "he", "persuaded", "the", "King", "to", "give", "a", "grand", "State", "ball._", "\u201cI", "wonder", "if", "Princess", "Beauty", "will", "be", "there!\u201d", "said", "the", "sisters", "to", "Cinderella.", "\u201cWe", "must", "have", "new", "dresses,", "for", "she", "is", "so", "splendid.", "She", "makes", "every", "one", "look", "shabby.\u201d_", "Cinderella", "smiled", "as", "she", "helped", "them", "to", "dress.", "She", "was", "sure", "the", "Fairy", "would", "let", "her", "go", "to", "the", "ball", "too.", "And", "she", "was", "right.", "Her", "godmother,", "pleased", "with", "her", "obedience,", "came", "in", "good", "time,", "and", "Cinderella,", "dressed", "in", "blue", "satin", "and", "pearls,", "went", "in", "the", "same", "style", "as", "before._", "The", "Prince", "would", "scarcely", "let", "her", "out", "of", "his", "sight,", "and", "Cinderella,", "who", "was", "getting", "a", "little", "spoiled", "by", "all", "the", "flattery", "she", "heard,", "began", "to", "think", "more", "of", "herself", "and", "less", "of", "the", "Fairy;", "so", "the", "time", "stole", "on,", "till", "glancing", "up", "at", "the", "clock,", "she", "saw", "it", "wanted", "only", "five", "minutes", "to", "eleven._", "At", "once", "she", "darted", "out", "of", "the", "room,", "and", "ran", "through", "the", "palace", "as", "fast", "as", "she", "could", "go,", "but", "as", "she", "reached", "the", "hall,", "she", "lost", "one", "of", "her", "precious", "glass", "slippers!", "She", "did", "not", "stop", "to", "pick", "it", "up,", "but", "rushed", "to", "the", "door.", "Alas!", "the", "clock", "had", "struck_", "Eleven.", "She", "found", "no", "coach,", "only", "a", "pumpkin,", "and", "the", "rat", "and", "mice", "ran", "quickly", "away", "when", "they", "saw", "her;", "while", "all", "her", "fine", "dress", "turned", "to", "rags,", "and", "she", "had", "to", "run", "home", "alone", "in", "the", "darkness", "of", "the", "night._", "The", "Prince", "was", "very", "much", "surprised", "when", "he", "missed", "Cinderella", "again,", "and", "leaving", "the", "ball,", "went", "in", "search", "of", "her.", "He", "asked", "all", "the", "attendants,", "but", "no", "one", "had", "seen", "her,", "and", "when", "enquiry", "was", "made", "of", "the", "porter,", "he", "said", "that", "no", "one", "had", "gone", "out", "of", "the", "palace", "except", "a", "poor", "ragged", "beggar-girl._", "However,", "the", "Prince\u2019s", "search", "was", "rewarded", "by", "his", "finding", "the", "glass", "slipper,", "which", "he", "well", "knew", "belonged", "to", "the", "unknown", "Princess.", "He", "loved", "Cinderella", "so", "much", "that", "he", "now", "resolved", "to", "marry", "her;", "and", "as", "he", "felt", "sure", "that", "no", "one", "else", "could", "wear", "such", "a", "tiny", "shoe", "as", "hers", "was,", "he", "sent", "out", "a", "herald", "to", "proclaim", "that", "whichever", "lady", "in", "his", "kingdom", "could", "put", "on", "this", "glass", "slipper", "should", "be", "his", "wife._", "All", "the", "great", "ladies", "who", "wished", "to", "be", "a", "Princess", "tried", "to", "put", "it", "on,", "but", "in", "vain.", "Cinderella\u2019s", "sisters", "tried,", "but", "could", "not", "get", "it", "on,", "and", "then", "Cinderella", "asked", "if", "she", "might", "try.", "They", "laughed", "at", "her;", "but", "the", "Prince,", "hearing", "of", "her", "wish,", "sent", "for", "her.", "She", "went", "with", "her", "sisters", "in", "her", "poor", "dress,", "but", "very", "clean,", "and", "at", "once", "put", "on", "the", "slipper.", "Then", "she", "drew", "the", "fellow", "of", "it", "from", "her", "pocket,", "and", "slipped", "it", "on", "her", "other", "foot._", "The", "Prince,", "who", "had", "thought", "the", "moment", "he", "saw", "her", "that", "the", "poor", "girl", "was", "very", "much", "like", "the", "beautiful", "Princess,", "was", "delighted.", "He", "insisted", "on", "Cinderella", "telling", "him", "her", "story,", "which", "she", "did", "very", "modestly,", "and", "all", "listened", "with", "wonder._", "As", "her", "tale", "ended,", "the", "Fairy", "godmother", "suddenly", "entered", "the", "room,", "and", "placing", "her", "godchild\u2019s", "hand", "in", "the", "Prince\u2019s,", "said:_", "\u201cTake", "this", "young", "girl", "for", "your", "wife,", "Prince;", "she", "is", "good", "and", "patient,", "and", "as", "she", "has", "known", "how", "to", "submit", "to", "injustice", "meekly,", "she", "will", "know", "how", "to", "reign", "justly.\u201d_", "So", "Cinderella", "was", "married", "to", "the", "Prince", "in", "great", "state,", "and", "they", "lived", "together", "very", "happily.", "She", "forgave", "her", "sisters,", "and", "treated", "them", "always", "very", "kindly,", "and", "the", "Prince", "had", "great", "cause", "to", "be", "glad", "that", "he", "had", "found", "the", "glass", "slipper._"]

const TheRaven3 = ["Once", "upon", "a", "midnight", "dreary,", "while", "I", "pondered,", "weak", "and", "weary,_", "Over", "many", "a", "quaint", "and", "curious", "volume", "of", "forgotten", "lore\u2014_", "While", "I", "nodded,", "nearly", "napping,", "suddenly", "there", "came", "a", "tapping,_", "As", "of", "some", "one", "gently", "rapping,", "rapping", "at", "my", "chamber", "door._", "\u201c\u2019Tis", "some", "visitor,\u201d", "I", "muttered,", "\u201ctapping", "at", "my", "chamber", "door\u2014_", "Only", "this", "and", "nothing", "more.\u201d_", "Ah,", "distinctly", "I", "remember", "it", "was", "in", "the", "bleak", "December;_", "And", "each", "separate", "dying", "ember", "wrought", "its", "ghost", "upon", "the", "floor._", "Eagerly", "I", "wished", "the", "morrow;\u2014vainly", "I", "had", "sought", "to", "borrow_", "From", "my", "books", "surcease", "of", "sorrow\u2014sorrow", "for", "the", "lost", "Lenore\u2014_", "For", "the", "rare", "and", "radiant", "maiden", "whom", "the", "angels", "name", "Lenore\u2014_", "Nameless", "here", "for", "evermore._", "And", "the", "silken,", "sad,", "uncertain", "rustling", "of", "each", "purple", "curtain_", "Thrilled", "me\u2014filled", "me", "with", "fantastic", "terrors", "never", "felt", "before;_", "So", "that", "now,", "to", "still", "the", "beating", "of", "my", "heart,", "I", "stood", "repeating_", "\u201c\u2019Tis", "some", "visitor", "entreating", "entrance", "at", "my", "chamber", "door\u2014_", "Some", "late", "visitor", "entreating", "entrance", "at", "my", "chamber", "door;\u2014_", "This", "it", "is", "and", "nothing", "more.\u201d_", "Presently", "my", "soul", "grew", "stronger;", "hesitating", "then", "no", "longer,_", "\u201cSir,\u201d", "said", "I,", "\u201cor", "Madam,", "truly", "your", "forgiveness", "I", "implore;_", "But", "the", "fact", "is", "I", "was", "napping,", "and", "so", "gently", "you", "came", "rapping,_", "And", "so", "faintly", "you", "came", "tapping,", "tapping", "at", "my", "chamber", "door,_", "That", "I", "scarce", "was", "sure", "I", "heard", "you\u201d\u2014here", "I", "opened", "wide", "the", "door;\u2014_", "Darkness", "there", "and", "nothing", "more._", "Deep", "into", "that", "darkness", "peering,", "long", "I", "stood", "there", "wondering,", "fearing,_", "Doubting,", "dreaming", "dreams", "no", "mortal", "ever", "dared", "to", "dream", "before;_", "But", "the", "silence", "was", "unbroken,", "and", "the", "stillness", "gave", "no", "token,_", "And", "the", "only", "word", "there", "spoken", "was", "the", "whispered", "word,", "\u201cLenore?\u201d_", "This", "I", "whispered,", "and", "an", "echo", "murmured", "back", "the", "word,", "\u201cLenore!\u201d\u2014_", "Merely", "this", "and", "nothing", "more._", "Back", "into", "the", "chamber", "turning,", "all", "my", "soul", "within", "me", "burning,_", "Soon", "again", "I", "heard", "a", "tapping", "somewhat", "louder", "than", "before._", "\u201cSurely,\u201d", "said", "I,", "\u201csurely", "that", "is", "something", "at", "my", "window", "lattice;_", "Let", "me", "see,", "then,", "what", "thereat", "is,", "and", "this", "mystery", "explore\u2014_", "Let", "my", "heart", "be", "still", "a", "moment", "and", "this", "mystery", "explore;\u2014_", "\u2019Tis", "the", "wind", "and", "nothing", "more!\u201d_", "Open", "here", "I", "flung", "the", "shutter,", "when,", "with", "many", "a", "flirt", "and", "flutter,_", "In", "there", "stepped", "a", "stately", "Raven", "of", "the", "saintly", "days", "of", "yore;_", "Not", "the", "least", "obeisance", "made", "he;", "not", "a", "minute", "stopped", "or", "stayed", "he;_", "But,", "with", "mien", "of", "lord", "or", "lady,", "perched", "above", "my", "chamber", "door\u2014_", "Perched", "upon", "a", "bust", "of", "Pallas", "just", "above", "my", "chamber", "door\u2014_", "Perched,", "and", "sat,", "and", "nothing", "more._", "Then", "this", "ebony", "bird", "beguiling", "my", "sad", "fancy", "into", "smiling,_", "By", "the", "grave", "and", "stern", "decorum", "of", "the", "countenance", "it", "wore,_", "\u201cThough", "thy", "crest", "be", "shorn", "and", "shaven,", "thou,\u201d", "I", "said,", "\u201cart", "sure", "no", "craven,_", "Ghastly", "grim", "and", "ancient", "Raven", "wandering", "from", "the", "Nightly", "shore\u2014_", "Tell", "me", "what", "thy", "lordly", "name", "is", "on", "the", "Night\u2019s", "Plutonian", "shore!\u201d_", "Quoth", "the", "Raven", "\u201cNevermore.\u201d_", "Much", "I", "marvelled", "this", "ungainly", "fowl", "to", "hear", "discourse", "so", "plainly,_", "Though", "its", "answer", "little", "meaning\u2014little", "relevancy", "bore;_", "For", "we", "cannot", "help", "agreeing", "that", "no", "living", "human", "being_", "Ever", "yet", "was", "blessed", "with", "seeing", "bird", "above", "his", "chamber", "door\u2014_", "Bird", "or", "beast", "upon", "the", "sculptured", "bust", "above", "his", "chamber", "door,_", "With", "such", "name", "as", "\u201cNevermore.\u201d_", "But", "the", "Raven,", "sitting", "lonely", "on", "the", "placid", "bust,", "spoke", "only_", "That", "one", "word,", "as", "if", "his", "soul", "in", "that", "one", "word", "he", "did", "outpour._", "Nothing", "farther", "then", "he", "uttered\u2014not", "a", "feather", "then", "he", "fluttered\u2014_", "Till", "I", "scarcely", "more", "than", "muttered", "\u201cOther", "friends", "have", "flown", "before\u2014_", "On", "the", "morrow", "he", "will", "leave", "me,", "as", "my", "Hopes", "have", "flown", "before.\u201d_", "Then", "the", "bird", "said", "\u201cNevermore.\u201d_", "Startled", "at", "the", "stillness", "broken", "by", "reply", "so", "aptly", "spoken,_", "\u201cDoubtless,\u201d", "said", "I,", "\u201cwhat", "it", "utters", "is", "its", "only", "stock", "and", "store_", "Caught", "from", "some", "unhappy", "master", "whom", "unmerciful", "Disaster_", "Followed", "fast", "and", "followed", "faster", "till", "his", "songs", "one", "burden", "bore\u2014_", "Till", "the", "dirges", "of", "his", "Hope", "that", "melancholy", "burden", "bore_", "Of", "\u2018Never\u2014nevermore\u2019.\u201d_", "But", "the", "Raven", "still", "beguiling", "all", "my", "fancy", "into", "smiling,_", "Straight", "I", "wheeled", "a", "cushioned", "seat", "in", "front", "of", "bird,", "and", "bust", "and", "door;_", "Then,", "upon", "the", "velvet", "sinking,", "I", "betook", "myself", "to", "linking_", "Fancy", "unto", "fancy,", "thinking", "what", "this", "ominous", "bird", "of", "yore\u2014_", "What", "this", "grim,", "ungainly,", "ghastly,", "gaunt,", "and", "ominous", "bird", "of", "yore_", "Meant", "in", "croaking", "\u201cNevermore.\u201d_", "This", "I", "sat", "engaged", "in", "guessing,", "but", "no", "syllable", "expressing_", "To", "the", "fowl", "whose", "fiery", "eyes", "now", "burned", "into", "my", "bosom\u2019s", "core;_", "This", "and", "more", "I", "sat", "divining,", "with", "my", "head", "at", "ease", "reclining_", "On", "the", "cushion\u2019s", "velvet", "lining", "that", "the", "lamp-light", "gloated", "o\u2019er,_", "But", "whose", "velvet-violet", "lining", "with", "the", "lamp-light", "gloating", "o\u2019er,_", "She", "shall", "press,", "ah,", "nevermore!_", "Then,", "methought,", "the", "air", "grew", "denser,", "perfumed", "from", "an", "unseen", "censer_", "Swung", "by", "Seraphim", "whose", "foot-falls", "tinkled", "on", "the", "tufted", "floor._", "\u201cWretch,\u201d", "I", "cried,", "\u201cthy", "God", "hath", "lent", "thee\u2014by", "these", "angels", "he", "hath", "sent", "thee_", "Respite\u2014respite", "and", "nepenthe", "from", "thy", "memories", "of", "Lenore;_", "Quaff,", "oh", "quaff", "this", "kind", "nepenthe", "and", "forget", "this", "lost", "Lenore!\u201d_", "Quoth", "the", "Raven", "\u201cNevermore.\u201d_", "\u201cProphet!\u201d", "said", "I,", "\u201cthing", "of", "evil!\u2014prophet", "still,", "if", "bird", "or", "devil!\u2014_", "Whether", "Tempter", "sent,", "or", "whether", "tempest", "tossed", "thee", "here", "ashore,_", "Desolate", "yet", "all", "undaunted,", "on", "this", "desert", "land", "enchanted\u2014_", "On", "this", "home", "by", "Horror", "haunted\u2014tell", "me", "truly,", "I", "implore\u2014_", "Is", "there\u2014is", "there", "balm", "in", "Gilead?\u2014tell", "me\u2014tell", "me,", "I", "implore!\u201d_", "Quoth", "the", "Raven", "\u201cNevermore.\u201d_", "\u201cProphet!\u201d", "said", "I,", "\u201cthing", "of", "evil!\u2014prophet", "still,", "if", "bird", "or", "devil!_", "By", "that", "Heaven", "that", "bends", "above", "us\u2014by", "that", "God", "we", "both", "adore\u2014_", "Tell", "this", "soul", "with", "sorrow", "laden", "if,", "within", "the", "distant", "Aidenn,_", "It", "shall", "clasp", "a", "sainted", "maiden", "whom", "the", "angels", "name", "Lenore\u2014_", "Clasp", "a", "rare", "and", "radiant", "maiden", "whom", "the", "angels", "name", "Lenore.\u201d_", "Quoth", "the", "Raven", "\u201cNevermore.\u201d_", "\u201cBe", "that", "word", "our", "sign", "of", "parting,", "bird", "or", "fiend!\u201d", "I", "shrieked,", "upstarting\u2014_", "\u201cGet", "thee", "back", "into", "the", "tempest", "and", "the", "Night\u2019s", "Plutonian", "shore!_", "Leave", "no", "black", "plume", "as", "a", "token", "of", "that", "lie", "thy", "soul", "hath", "spoken!_", "Leave", "my", "loneliness", "unbroken!\u2014quit", "the", "bust", "above", "my", "door!_", "Take", "thy", "beak", "from", "out", "my", "heart,", "and", "take", "thy", "form", "from", "off", "my", "door!\u201d_", "Quoth", "the", "Raven", "\u201cNevermore.\u201d_", "And", "the", "Raven,", "never", "flitting,", "still", "is", "sitting,", "still", "is", "sitting_", "On", "the", "pallid", "bust", "of", "Pallas", "just", "above", "my", "chamber", "door;_", "And", "his", "eyes", "have", "all", "the", "seeming", "of", "a", "demon\u2019s", "that", "is", "dreaming,_", "And", "the", "lamp-light", "o\u2019er", "him", "streaming", "throws", "his", "shadow", "on", "the", "floor;_", "And", "my", "soul", "from", "out", "that", "shadow", "that", "lies", "floating", "on", "the", "floor_", "Shall", "be", "lifted\u2014nevermore!_"]


export default class Reading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parser: new EssayParser(LittlePrince1, 2, 0),
      displayWord: "",
      bgColor: 0,
      startTime: Date.now(),
      totalTime: 0,
      curPos: 1,
      paused: false,
      interval: 300,
      highestSpeed: 0
    };

    this.refreshInterval();
    this.speedUp = this.speedUp.bind(this);
    this.slowDown = this.slowDown.bind(this);
  }

  refreshInterval() {
    // clear the previous before we lose reference
    clearInterval(this.state.timer);
    const currentSpeed = (this.state.parser.getCurrentPosition() == this.state.parser.getTotalLength()) ?
      0 : 60 * 1000 / this.state.interval;

    // set a new one
    this.state.timer = setInterval(() => {
      this.setState({
        totalTime: (this.state.parser.getCurrentPosition() == this.state.parser.getTotalLength()) ?
          this.state.totalTime : (Date.now() - this.state.startTime) / 1000,
        curPos: this.state.parser.getCurrentPosition(),
        highestSpeed: (this.state.highestSpeed < currentSpeed) ? currentSpeed : this.state.highestSpeed
      });
      this.setState(previousState => {
        const word = this.state.parser.nextState();
        return {
          displayWord: word
         };
      });
    }, this.state.interval);
  }

  togglePause() {
    console.log(this.state.paused);
    if (this.state.paused) {
      this.refreshInterval();
      this.setState({paused: false});
    }
    else {
      clearInterval(this.state.timer);
      this.setState({paused: true});
    }
  }

  speedUp() {
    if (this.state.paused)
      return;
    if (this.state.interval > 150) {
      this.setState({interval: this.state.interval - 10}, this.refreshInterval);
    }
  }

  slowDown() {
    if (this.state.paused)
      return;
    if (this.state.interval < 1000) {
      this.setState({interval: this.state.interval + 10}, this.refreshInterval);
    }
  }

  changeBgColor() {
    const currentColor = this.state.bgColor;
    this.setState({ bgColor: (currentColor + 1) % 4 });
  }

  render() {
    const angleX = this.props.angleX;
    const angleY = this.props.angleY;
    const angleZ = this.props.angleZ;
    const bgColors = ['bgimg.jpeg', 'bgimg2.jpeg', 'bgimg3.jpeg', 'bgimg4.jpeg'];
    const totalTime = this.state.totalTime;
    const totalWordCount = this.state.parser.getTotalLength();
    const averageSpeed = this.state.curPos / this.state.totalTime * 60;
    const buttonColor = this.state.paused ? 'green' : 'red';

    return (
      <View>
        <Pano source={asset(bgColors[this.state.bgColor])}/>
        <Text
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 0, -3]}],
          }}>
          {this.state.displayWord}
        </Text>

        <VrButton
          onClick={() => this.togglePause()}
          >
          <Plane
            dimWidth={1}
            dimDepth={1}
            style={{
              position: 'absolute',
              color: buttonColor,
              opacity: 0.6,
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [2.5, 0, -3]}, {scale: 0.4}],
            }}
          />
        </VrButton>

        <VrButton
          onClick={() => this.speedUp()}
          >
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.6,
              color: 'black',
              width: 1,
              fontSize: 1,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 1,
              paddingBottom: 1,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [2.5, 0.9, -3]}, {scale: 0.4}],
            }}>
            +
          </Text>
        </VrButton>

        <VrButton
          onClick={() => this.slowDown()}
          >
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.6,
              color: 'black',
              width: 1,
              fontSize: 1,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 1,
              paddingBottom: 1,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [2.5, -0.9, -3]}, {scale: 0.4}],
            }}>
            -
          </Text>
        </VrButton>

        <Plane
            dimWidth={2}
            dimDepth={1}
            style={{
              position: 'absolute',
              color: 'white',
              opacity: 0.3,
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 2.5, -1.5]}, {scale: 2}, {rotateX: 45}],
            }}
          />

        <VrButton
          onClick={() => this.changeBgColor()}
          >
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.8,
              color: 'black',
              width: 0.8,
              fontSize: 0.1,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [-1, 1.5, -1.5]}, {rotateX: 45}],
            }}>
            Background Color
          </Text>
        </VrButton>

        <VrButton
          onClick={() => this.props.changeScene()}
          >
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.8,
              color: 'black',
              width: 0.8,
              fontSize: 0.1,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [1, 1.5, -1.5]}, {rotateX: 45}],
            }}>
            End
          </Text>
        </VrButton>

        <Text
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              color: 'white',
              width: 2,
              fontSize: 0.15,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 4, -1.5]}, {rotateX: 45}],
            }}>
            Total time: { this.state.totalTime } seconds.
          </Text>

        <Text
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              color: 'white',
              width: 2,
              fontSize: 0.15,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 3.5, -1.5]}, {rotateX: 45}],
            }}>
            Total number of word left: { totalWordCount - this.state.curPos }.
          </Text>

          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              color: 'white',
              width: 5,
              fontSize: 0.15,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 3, -1.5]}, {rotateX: 45}],
            }}>
            Highest speed: { this.state.highestSpeed.toPrecision(5) } words per minute.
          </Text>

          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              color: 'white',
              width: 5,
              fontSize: 0.15,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 2.5, -1.5]}, {rotateX: 45}],
            }}>
            Average speed: { averageSpeed.toPrecision(5) } words per minute.
          </Text>
      </View>
    );
  }
};
