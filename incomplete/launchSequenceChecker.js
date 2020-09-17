// launchSequenceChecker , codesignal challenge: (EASY)

// The master launch sequence consists of several independent sequences for different systems. Your goal is to verify that all the individual system sequences are in strictly increasing order. In other words, for any two elements i and j (i < j) of the master launch sequence that belong to the same system (having systemNames[i] = systemNames[j]), their values should be in strictly increasing order (i.e. stepNumbers[i] < stepNumbers[j]).

// Example

// For systemNames = ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"] and   
//            stepNumbers = [1, 10, 11, 2, 12, 111], the output should be
// launchSequenceChecker(systemNames, stepNumbers) = true.

// There are three independent sequences for systems "stage_1", "stage_2", and "dragon". These sequences are [1, 2], [10, 12], and [11, 111], respectively. The elements are in strictly increasing order for all three.

// For systemNames = ["stage_1", "stage_1", "stage_2", "dragon"] and stepNumbers = [2, 1, 12, 111], the output should be
// launchSequenceChecker(systemNames, stepNumbers) = false.

// There are three independent sequences for systems "stage_1", "stage_2", and "dragon". These sequences are [2, 1], [12], and [111], respectively. In the first sequence, the elements are not ordered properly.



function launchSequenceChecker(systemNames, stepNumbers) {
  return 'foo';
}



// test1
systemNames=
["stage_1",
  "stage_2",
  "dragon",
  "stage_1",
  "stage_2",
  "dragon"];
stepNumbers= [1, 10, 11, 2, 12, 111]; //true

// //test2
// systemNames=
// ["stage_1", 
//  "stage_1", 
//  "stage_2", 
//  "dragon"]
// stepNumbers= [2, 1, 12, 111]; //false

// //test3
// systemNsystemNames=
// ["Falcon 9", 
//  "Falcon 9", 
//  "Falcon 9", 
//  "Falcon 9", 
//  "Falcon 9", 
//  "Falcon 9"]
// stepNumbers= [1, 3, 5, 7, 7, 9]; //false

// //test4
// systemNames=
// ["Dragon", 
//  "Dragon", 
//  "Dragon", 
//  "Dragon", 
//  "dragon", 
//  "Dragon", 
//  "dragon"]
// stepNumbers= [1, 3, 5, 7, 7, 9, 8]; //true

// //test5
// systemNames= ["Dragon"]
// stepNumbers= [1000000000]; //true

// //test6
// systemNames=
// ["CrewDragon", 
//  "CrewDragon"]
// stepNumbers= [100, 23]; //false

// //test7
// systemNames=
// ["CrewDragon", 
//  "Dragon", 
//  "SuperDraco", 
//  "Falcon 9"]
// stepNumbers= [4, 3, 2, 1]; //true

// //test8
// systemNames=
// ["Dragon", 
//  "Falcon 9", 
//  "Dragon", 
//  "Falcon 9", 
//  "Falcon 9", 
//  "Dragon", 
//  "Dragon", 
//  "Dragon", 
//  "Falcon 9"]
// stepNumbers= [1, 1, 3, 2, 4, 10, 20, 100, 4]; //false

console.log(launchSequenceChecker(systemNames, stepNumbers));