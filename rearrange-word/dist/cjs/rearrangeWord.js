"use strict";
exports.__esModule = true;
var wordlist_english_1 = require("wordlist-english");
var mathjs_1 = require("mathjs");
var combination = function (word) {
  var str = word;
  var comb = new Set();
  var strFact = mathjs_1.factorial(str.length);
  while (comb.size != strFact) {
    var randComb = [];
    while (randComb.length != str.length) {
      var random = Math.trunc(Math.random() * str.length);
      if (!randComb.includes(random)) {
        randComb.push(random);
      }
    }
    comb.add(randComb.join(""));
  }
  if (comb.size === strFact) {
    comb = Array.from(comb).map(function (el) {
      return el.split("").map(function (el) {
        return Number(el);
      });
    });
  }
  return comb;
};
var wordCombination = function (word) {
  var wd = word.toLocaleLowerCase();
  var comb = combination(wd);
  var wdComb = [];
  comb.forEach(function (el) {
    var newWd = [];
    el.forEach(function (el) {
      newWd.push(wd.charAt(el));
    });
    wdComb.push(newWd.join(""));
  });
  return wdComb;
};
var rearrangeWord = function (word) {
  var wd = word;
  var wdCombination = wordCombination(word);
  for (
    var _i = 0, wdCombination_1 = wdCombination;
    _i < wdCombination_1.length;
    _i++
  ) {
    var i = wdCombination_1[_i];
    if (wordlist_english_1["english"].includes(i)) {
      return i;
    }
  }
  return 'Cannot Find Word Related To "'.concat(wd, '" !');
};

module.exports = rearrangeWord;
//# sourceMappingURL=rearrangeWord.js.map
