async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function delayedLoopLogic() {
  for (var i = 0; i < 5; i++) {
    console.log('Report results: ', i);
    await sleep(3000);
  }
}

delayedLoopLogic();
