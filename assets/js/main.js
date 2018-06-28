// tunings array/object
const tunings = {
  standard: ['E','A','D','G','B','E'],
  dropD: ['D','A','D','G','B','E'],
  dropCSharp: ['C#','G#','C#','F#','A#','D#']
};

const { standard, dropD, dropCSharp } = tunings;

// target tune selector
const selector = document.getElementById('tuning');

const intune = () => {
  const sixth = document.getElementById('sixth');
  const fifth = document.getElementById('fifth');
  const fourth = document.getElementById('fourth');
  const third = document.getElementById('third');
  const second = document.getElementById('second');
  const first = document.getElementById('first');

  sixth.innerHTML = '';
  fifth.innerHTML = '';
  fourth.innerHTML = '';
  third.innerHTML = '';
  second.innerHTML = '';
  first.innerHTML = '';

  if (selector.value == 'standard') {
    sixth.innerHTML = standard[0];
    fifth.innerHTML = standard[1];
    fourth.innerHTML = standard[2];
    third.innerHTML = standard[3];
    second.innerHTML = standard[4];
    first.innerHTML = standard[5];
  } else if (selector.value == 'dropD') {
    sixth.innerHTML = dropD[0];
    fifth.innerHTML = dropD[1];
    fourth.innerHTML = dropD[2];
    third.innerHTML = dropD[3];
    second.innerHTML = dropD[4];
    first.innerHTML = dropD[5];
  } else if (selector.value == 'dropCSharp') {
    sixth.innerHTML = dropCSharp[0];
    fifth.innerHTML = dropCSharp[1];
    fourth.innerHTML = dropCSharp[2];
    third.innerHTML = dropCSharp[3];
    second.innerHTML = dropCSharp[4];
    first.innerHTML = dropCSharp[5];
  }
}

selector.addEventListener("change", function() {
  intune();
});

document.addEventListener("DOMContentLoaded", function () {
  intune();
});