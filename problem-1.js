// Quiz: For and Functions
//
// Question 1: the Return of Dr. Fell
// (because every villain deserves one last stinger in the credits)
//
// Dr Fell is in an absolute panic.  His grants are being
// audited, and they want a hardcopy of his magnum opus, the
// Collection of Word Lists.
//
// You've seen some of the Collection before.  It ranges
// from neat, orderly arrays like this:

var ablativePrepositions = ['ante', 'ad', 'circum',
  'contra', 'inter', 'intra', 'post', 'in', 'praeter'];

var accusativePrepositions = ['a', 'ab', 'de', 'cum', 'e',
  'ex', 'in', 'sine', 'pro', 'prae', 'sub', 'super'];

// to horrible code that somehow manages to work, but you
// never want to fully comprehend how.
//
// (Those two are provided as handy test cases.x
//
// Follow Dr. Fell's instructions: write a function named
// printListOnConsole that takes an array and prints it out,
// one item per line, on the console.











// Code below this line is testing infrastructure.

var problemOneTestable = {
  ablativePrepositions: ablativePrepositions,
  accusativePrepositions: accusativePrepositions,
  allPrepositions: allPrepositions,
  uniquePrepositions: uniquePrepositions,
  printListOnConsole: typeof printListOnConsole === 'undefined' ?
    function(){} : printListOnConsole,
};



