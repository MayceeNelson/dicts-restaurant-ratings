'use strict';

// 1. countWords
function countWords(phrase) {
  const wordCount = {};
  for (const word of phrase.split(' ')){
    if (wordCount[word]){
      wordCount[word]+=1;
    }
    else{
      wordCount[word] = 1;
    }
  }
  return wordCount;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas'],
  };
  if (!price in melonPrices){
    return null
  }
  
  
  return melonPrices[price].sort();
}
