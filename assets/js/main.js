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

  sixth.innerText = '';
  fifth.innerText = '';
  fourth.innerText = '';
  third.innerText = '';
  second.innerText = '';
  first.innerText = '';

  if (selector.value == 'standard') {
    sixth.innerText = standard[0];
    fifth.innerText = standard[1];
    fourth.innerText = standard[2];
    third.innerText = standard[3];
    second.innerText = standard[4];
    first.innerText = standard[5];
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