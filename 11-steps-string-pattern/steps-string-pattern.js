// The function should console log a step shape
// with n levels using the # character.
// Make sure the step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = (n) => {
  for (let row = 1; row <= n; row++) {
    let step = "";

    for (let col = 1; col <= n; col++) {
      if (col <= row) {
        step += "#";
      }

      step += " ";
    }

    console.log(step);
  }
};

steps(11);
