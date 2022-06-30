import wordlist from "wordlist-english";
import mathjs from "mathjs";

const combination = (word) => {
  const str = word;
  let comb = new Set();

  const strFact = mathjs.factorial(str.length);

  while (comb.size != strFact) {
    const randComb = [];

    while (randComb.length != str.length) {
      let random = Math.trunc(Math.random() * str.length);

      if (!randComb.includes(random)) {
        randComb.push(random);
      }
    }

    comb.add(randComb.join(""));
  }

  if (comb.size === strFact) {
    comb = Array.from(comb).map((el) => {
      return el.split("").map((el) => {
        return Number(el);
      });
    });
  }

  return comb;
};

const wordCombination = (word) => {
  const wd = word.toLocaleLowerCase();
  const comb = combination(wd);

  const wdComb = [];

  comb.forEach((el) => {
    const newWd = [];

    el.forEach((el) => {
      newWd.push(wd.charAt(el));
    });

    wdComb.push(newWd.join(""));
  });

  return wdComb;
};

const rearrangeWord = (word) => {
  const wd = word;
  const wdCombination = wordCombination(word);

  for (const i of wdCombination) {
    if (wordlist["english"].includes(i)) {
      return i;
    }
  }

  return `Cannot Find Word Related To "${wd}" !`;
};

export default rearrangeWord;
