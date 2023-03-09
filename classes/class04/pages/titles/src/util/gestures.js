const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp

const ScrollDownGesture = new GestureDescription('scroll-down')  // ✊️
const ScrollUpGesture = new GestureDescription('scroll-up') // 🖐
const ThumbsUpGesture = new GestureDescription('thumbs_up') //👍
const ClickGesture = new GestureDescription('click') // 🤏🏻

// Scroll Down
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}


// ScrollUp
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
}


// ThumbUp
// - curl: none (must)
// - direction vertical up (best)
// - direction diagonal up left / right (acceptable)-----------------------------------------------------------------------------
ThumbsUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ThumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
ThumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
ThumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

// all other fingers:
// - curled (best)
// - half curled (acceptable)
// - pointing down is NOT acceptable
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ThumbsUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  ThumbsUpGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

// require the index finger to be somewhat left or right pointing
// but NOT down and NOT fully up
ThumbsUpGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
ThumbsUpGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
ThumbsUpGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
ThumbsUpGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);




// Click
// -----------------------------------------------------------------------------
ClickGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8)
ClickGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.5)

ClickGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
ClickGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.4)

ClickGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
ClickGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9)

ClickGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
ClickGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9)

ClickGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)
ClickGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9)


const knownGestures = [
  ScrollDownGesture,
  ScrollUpGesture,
  ThumbsUpGesture,
  ClickGesture,
]

const gestureStrings = {
  'scroll-up': '🖐',
  'scroll-down': '✊️',
  'thumbs_up': '👍',
  'click': '🤏🏻'
}

export {
  knownGestures,
  gestureStrings
}