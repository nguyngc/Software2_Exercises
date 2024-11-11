'use strict';

const noCandidates = parseInt(prompt('Enter the number of candidates:'));
let candidates = [];
const names = [];
let name = '';
for (let i = 0; i < noCandidates; i++) {
  name = prompt(`Name for candidate ${i + 1}:`);
  names.push(name);
  candidates.push({'name': name, 'votes': 0});
}

function updateVote(candidates, candidateName) {
  for (let candidate of candidates) {
    if (candidate['name'] === candidateName) {
      candidate['votes']++;
    }
  }
  return candidates;
}

function printResult(candidates) {
  for (let candidate of candidates) {
    console.log(`${candidate['name']}: ${candidate['votes']} votes`);
  }
}

const voters = parseInt(prompt('Enter the number of voters:'));
let selectedCandidate = '';
for (let i = 0; i < voters; i++) {
  selectedCandidate = prompt(`Who you will vote for? ${names}`);
  candidates = updateVote(candidates, selectedCandidate);
}

const sortedCandidates = candidates.sort(function(a, b) {
  return b['votes'] - a['votes'];
});

console.log(
    `The winner is ${sortedCandidates[0]['name']} with ${sortedCandidates[0]['votes']} votes.`);
console.log('Results:');
printResult(sortedCandidates);