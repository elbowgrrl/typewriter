const wakeUp = "wake up Neo\n";
const danger = "you're in danger Neo\n";
const whiteRabbit = "follow the white rabbit\n"

delay = 0;

const printSentence = (sentence) => {

  for (const char of sentence) {
    delay += 100;
    setTimeout(() => {
      process.stdout.write(char)
    }, delay)
  }

}

setTimeout(() => {printSentence(wakeUp)}, 1000)
setTimeout(() => {printSentence(danger)}, 2000)
setTimeout(() => {printSentence(whiteRabbit)}, 3000)

