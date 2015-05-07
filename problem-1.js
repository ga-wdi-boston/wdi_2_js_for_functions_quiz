// Quiz: For and Functions
//
// Question 1: the Return of Dr. Fell
// (because every villain deserves one last stinger in the credits)
//
// You're about to escape from Dr. Fell.  You have an offer
// letter in hand. So of course that's the day he decides to
// go fishing. He sent an email, though:
//
//     Attached is some graduate student work.  Brilliant
//     grammarians, can't work those computer server
//     mainframe terminals like you can.
//
//     Would you write a function they can use on their
//     lists to print them out to the console?
//
//
// He has attached a couple of files, and they're full of
// code like this:

var ablativePrepositions = ['ante', 'ad', 'circum',
  'contra', 'inter', 'intra', 'post', 'in', 'praeter'];

var accusativePrepositions = ['a', 'ab', 'de', 'cum', 'e',
  'ex', 'in', 'sine', 'pro', 'prae', 'sub', 'super'];

var allPrepositions = ablativePrepositions.slice()
  .append(accusativePrepositions)
  .sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

var uniquePrepositions = allPrepositions.filter(function(e, i, a){
  return a.indexOf(e) === i);
});

// You do *not* want to touch that code.  Fortunately, you
// don't have to.
//
// Follow Dr. Fell's instructions: write a function named
// printListOnConsole that takes an array and prints it out,
// one item per line, on the console.
//
// Do not modify the code above; those lists are provided so
// you have arrays to test your function with.










// Code below this line is testing infrastructure.

var problemOneTestable = {
  ablativePrepositions: ablativePrepositions,
  accusativePrepositions: accusativePrepositions,
  allPrepositions: allPrepositions,
  uniquePrepositions: uniquePrepositions,
  printListOnConsole: typeof printListOnConsole === 'undefined' ?
    function(){} : printListOnConsole,
};



