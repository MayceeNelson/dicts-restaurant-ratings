'use strict';

// 1. printIndices
function printIndices(items) {
  for(const i in items){
    console.log(`${items[i]} ${i}`);
  }
}

printIndices([1,2,3,4,5])
// 2. everyOtherItem
function everyOtherItem(items) {
  const everyItem = [];

  for (const i in items) {
    if (i % 2 === 0){
      everyItem.push(items[i]);
    }
  }
  console.log (everyItem);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortItems = items.sort((a,b) => a - b).slice(0,n); 
  sortItems.reverse();

  console.log(sortItems);
}
