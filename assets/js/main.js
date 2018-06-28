// tunings array/object
const tunings = {
  eStandard: ['E', 'A', 'D', 'G', 'B', 'E'],
  bStandard: ['B', 'E', 'A', 'D', 'F#', 'B'],
  aStandard: ['A', 'D', 'G', 'C', 'E', 'A'],
  gStandard: ['G', 'C', 'F', 'A#', 'D', 'G'],
  fStandard: ['F', 'A#', 'D#', 'G#', 'C', 'F'],
  dropD: ['D', 'A', 'D', 'G', 'B', 'E'],
  dropCSharp: ['C#', 'G#', 'C#', 'F#', 'A#', 'D#'],
  dropC: ['C', 'G', 'C', 'F', 'A', 'D'],
  dropB: ['B', 'F#', 'B', 'E', 'G#', 'C#'],
  dropBFlat: ['Bb', 'F', 'Bb', 'Eb', 'G', 'C'],
  dropA: ['A', 'E', 'A', 'D', 'F#', 'B'],
  dropGSharp: ['G#', 'D#', 'G#', 'C#', 'F', 'A#'],
  openC: ['C', 'G', 'C', 'G', 'C', 'E'],
  eFlatTuning: ['Eb', 'Ab', 'Db', 'Gb', 'Bb', 'A#'],
  dTuning: ['D', 'G', 'C', 'F', 'A', 'D'],
  cSharpTuning: ['C#', 'F#', 'B', 'E', 'G#', 'C#'],
  cTuning: ['C', 'F', 'A#', 'D#', 'G', 'C'],
};

// target tune selector
const selector = document.getElementById('tuning');

const intune = () => {
  const sixth = document.getElementById('sixth');
  const fifth = document.getElementById('fifth');
  const fourth = document.getElementById('fourth');
  const third = document.getElementById('third');
  const second = document.getElementById('second');
  const first = document.getElementById('first');

  sixth.innerText = '';
  fifth.innerText = '';
  fourth.innerText = '';
  third.innerText = '';
  second.innerText = '';
  first.innerText = '';

  if (selector.value == 'eStandard') {
    sixth.innerText = tunings.eStandard[0];
    fifth.innerText = tunings.eStandard[1];
    fourth.innerText = tunings.eStandard[2];
    third.innerText = tunings.eStandard[3];
    second.innerText = tunings.eStandard[4];
    first.innerText = tunings.eStandard[5];
  } else if (selector.value == 'bStandard') {
    sixth.innerText = tunings.bStandard[0];
    fifth.innerText = tunings.bStandard[1];
    fourth.innerText = tunings.bStandard[2];
    third.innerText = tunings.bStandard[3];
    second.innerText = tunings.bStandard[4];
    first.innerText = tunings.bStandard[5];
  } else if (selector.value == 'aStandard') {
    sixth.innerText = tunings.aStandard[0];
    fifth.innerText = tunings.aStandard[1];
    fourth.innerText = tunings.aStandard[2];
    third.innerText = tunings.aStandard[3];
    second.innerText = tunings.aStandard[4];
    first.innerText = tunings.aStandard[5];
  } else if (selector.value == 'gStandard') {
    sixth.innerText = tunings.gStandard[0];
    fifth.innerText = tunings.gStandard[1];
    fourth.innerText = tunings.gStandard[2];
    third.innerText = tunings.gStandard[3];
    second.innerText = tunings.gStandard[4];
    first.innerText = tunings.gStandard[5];
  } else if (selector.value == 'fStandard') {
    sixth.innerText = tunings.fStandard[0];
    fifth.innerText = tunings.fStandard[1];
    fourth.innerText = tunings.fStandard[2];
    third.innerText = tunings.fStandard[3];
    second.innerText = tunings.fStandard[4];
    first.innerText = tunings.fStandard[5];
  } else if (selector.value == 'dropD') {
    sixth.innerText = tunings.dropD[0];
    fifth.innerText = tunings.dropD[1];
    fourth.innerText = tunings.dropD[2];
    third.innerText = tunings.dropD[3];
    second.innerText = tunings.dropD[4];
    first.innerText = tunings.dropD[5];
  } else if (selector.value == 'dropCSharp') {
    sixth.innerText = tunings.dropCSharp[0];
    fifth.innerText = tunings.dropCSharp[1];
    fourth.innerText = tunings.dropCSharp[2];
    third.innerText = tunings.dropCSharp[3];
    second.innerText = tunings.dropCSharp[4];
    first.innerText = tunings.dropCSharp[5];
  } else if (selector.value == 'dropC') {
    sixth.innerText = tunings.dropC[0];
    fifth.innerText = tunings.dropC[1];
    fourth.innerText = tunings.dropC[2];
    third.innerText = tunings.dropC[3];
    second.innerText = tunings.dropC[4];
    first.innerText = tunings.dropC[5];
  } else if (selector.value == 'dropB') {
    sixth.innerText = tunings.dropB[0];
    fifth.innerText = tunings.dropB[1];
    fourth.innerText = tunings.dropB[2];
    third.innerText = tunings.dropB[3];
    second.innerText = tunings.dropB[4];
    first.innerText = tunings.dropB[5];
  } else if (selector.value == 'dropBFlat') {
    sixth.innerText = tunings.dropBFlat[0];
    fifth.innerText = tunings.dropBFlat[1];
    fourth.innerText = tunings.dropBFlat[2];
    third.innerText = tunings.dropBFlat[3];
    second.innerText = tunings.dropBFlat[4];
    first.innerText = tunings.dropBFlat[5];
  } else if (selector.value == 'dropA') {
    sixth.innerText = tunings.dropA[0];
    fifth.innerText = tunings.dropA[1];
    fourth.innerText = tunings.dropA[2];
    third.innerText = tunings.dropA[3];
    second.innerText = tunings.dropA[4];
    first.innerText = tunings.dropA[5];
  } else if (selector.value == 'dropGSharp') {
    sixth.innerText = tunings.dropGSharp[0];
    fifth.innerText = tunings.dropGSharp[1];
    fourth.innerText = tunings.dropGSharp[2];
    third.innerText = tunings.dropGSharp[3];
    second.innerText = tunings.dropGSharp[4];
    first.innerText = tunings.dropGSharp[5];
  } else if (selector.value == 'openC') {
    sixth.innerText = tunings.openC[0];
    fifth.innerText = tunings.openC[1];
    fourth.innerText = tunings.openC[2];
    third.innerText = tunings.openC[3];
    second.innerText = tunings.openC[4];
    first.innerText = tunings.openC[5];
  } else if (selector.value == 'eFlatTuning') {
    sixth.innerText = tunings.eFlatTuning[0];
    fifth.innerText = tunings.eFlatTuning[1];
    fourth.innerText = tunings.eFlatTuning[2];
    third.innerText = tunings.eFlatTuning[3];
    second.innerText = tunings.eFlatTuning[4];
    first.innerText = tunings.eFlatTuning[5];
  } else if (selector.value == 'dTuning') {
    sixth.innerText = tunings.dTuning[0];
    fifth.innerText = tunings.dTuning[1];
    fourth.innerText = tunings.dTuning[2];
    third.innerText = tunings.dTuning[3];
    second.innerText = tunings.dTuning[4];
    first.innerText = tunings.dTuning[5];
  } else if (selector.value == 'cSharpTuning') {
    sixth.innerText = tunings.cSharpTuning[0];
    fifth.innerText = tunings.cSharpTuning[1];
    fourth.innerText = tunings.cSharpTuning[2];
    third.innerText = tunings.cSharpTuning[3];
    second.innerText = tunings.cSharpTuning[4];
    first.innerText = tunings.cSharpTuning[5];
  } else if (selector.value == 'cTuning') {
    sixth.innerText = tunings.cTuning[0];
    fifth.innerText = tunings.cTuning[1];
    fourth.innerText = tunings.cTuning[2];
    third.innerText = tunings.cTuning[3];
    second.innerText = tunings.cTuning[4];
    first.innerText = tunings.cTuning[5];
  }
}

selector.addEventListener("change", function() {
  intune();
});

document.addEventListener("DOMContentLoaded", function () {
  intune();
});