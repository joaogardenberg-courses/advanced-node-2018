// Node event loop
// node myFile.js

const pendingTimers     = [];
const pendingOSTasks    = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
  // Check 1: Any pending setTimeout, setInterval, setImmediate?
  // Check 2: Any pending OS tasks? (Like server listening to port)
  // Check 3: Any pending long running operations? (Like fs module)
  return pendingTimers.length ||
    pendingOSTasks.length ||
    pendingOperations.length;
}

// Every iteration is equivalent to 1 'tick'
while(shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions
  // are ready to be called

  // 2) Node looks at pendingTasks and pendingOperations and
  // calls relevant callbacks

  // 3) Pause execution. Continue when...
  //  - a new pendingOSTask is done
  //  - a new pendingOperation is done
  //  - a timer is about to complete

  // 4) Look at pendingTimers. Call any setImmediate

  // 5) Handle any 'close' events
}

// Exit back to terminal