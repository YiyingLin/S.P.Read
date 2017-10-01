class EssayParser {
  constructor(essayStr, sentenceDelay, paragraphDelay) {
    this.essay = essayStr.split(' ');
    this.sentenceDelay = sentenceDelay;
    this.paragraphDelay = paragraphDelay;
    this.curr = 0;
    this.end = this.essay.length;
    this.state = "P";
    this.delayCount = 0;
    this.delay = 0;

    // set up constants
    const SETENCE_DELIMS_ARR = ['.', '?', '!'];
    const PARAGRAPH_DELIMS_ARR = [''];
    this.SETENCE_DELIMS_SET = new Set();
    this.PARAGRAPH_DELIMS_SET = new Set();
    SETENCE_DELIMS_ARR.forEach(e => this.SETENCE_DELIMS_SET.add(e));
    PARAGRAPH_DELIMS_ARR.forEach(e => this.PARAGRAPH_DELIMS_SET.add(e));
  }

  nextState() {
    if (this.curr >= this.end) {
      return "";
    }

    // delayed state
    if (this.state == "D") {
      if (this.delayCount == this.delay) {
        this.state = "P";
        this.delayCount = 0;
        this.delay = 0;
        return this.essay[this.curr++];
      }

      this.delayCount++;
      return this.essay[this.curr];
    }

    var word = this.essay[this.curr];
    var endChar = word[word.length - 1];

    if (this.SETENCE_DELIMS_SET.has(endChar)) {
      this.state = "D";
      this.delay = this.sentenceDelay;
      this.nextState();
    }
    else if (this.PARAGRAPH_DELIMS_SET.has(endChar)) {
      this.state = "D";
      this.delay = this.paragraphDelay;
      this.nextState();
    }
    else {
      this.curr++;
    }
    return word;
  }
}

module.exports = EssayParser;

// console.log("Hello world!");
// var parser = new EssayParser("Hello, my name is Nick! Bye bye.", 1, 0);
// setInterval(() => {
//   console.log(parser.nextState());
// }, 250);
