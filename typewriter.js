const wakeUp = "wake up Neo";
const danger = "you're in danger Neo";
const whiteRabbit = "follow the white rabbit\n";


letterdelay = 0;
nextDelay = 3000;

const printSentence = (sentence, next) => {

  for (const char of sentence) {
    letterdelay += 50;
    setTimeout(() => {
      process.stdout.write(char)
    }, letterdelay)
  }
  if (null !== next) {
    next(nextDelay);
  }
};

const printWakeUp = (delay) => {

  setTimeout(() => {
    printSentence(wakeUp, printDanger)
    console.clear()
  }, delay)
  
};

const printDanger = (delay) => {

  setTimeout(() => {
    printSentence(danger, printWhiteRabbit)
    console.clear()
  }, delay)
  
};

const printWhiteRabbit = (delay) => {

  setTimeout(() => {
    printSentence(whiteRabbit, null)
    console.clear()
  }, delay)
  
};

printWakeUp(3000)





