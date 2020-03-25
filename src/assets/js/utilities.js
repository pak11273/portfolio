/* YOU NEED THIS FUNCTION TO SUPPORT THE OTHER SCROLL FUNCTIONS BELOW */

export function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect()

  var top = elementBoundary.top
  var bottom = elementBoundary.bottom

  return top >= 0 && bottom <= window.innerHeight
}

/* EOF YOU NEED THIS FOR ANY SCROLL FUNCTIONS */

/* SCROLL TO TOP UTILITIES */

// easing functions http://goo.gl/5HLl8
export const EaseInOutQuad = function(t, b, c, d) {
  t /= d / 2
  if (t < 1) {
    return (c / 2) * t * t + b
  }
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

export const EaseInCubic = function(t, b, c, d) {
  var tc = (t /= d) * t * t
  return b + c * tc
}

export const InOutQuintic = function(t, b, c, d) {
  var ts = (t /= d) * t,
    tc = ts * t
  return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc)
}

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
export const requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()

export function scrollTo(to, callback, duration) {
  // because it's so difficult to detect the scrolling element, just move them all
  function move(amount) {
    document.documentElement.scrollTop = amount
    document.body.parentNode.scrollTop = amount
    document.body.scrollTop = amount
  }
  function position() {
    return (
      document.documentElement.scrollTop ||
      document.body.parentNode.scrollTop ||
      document.body.scrollTop
    )
  }
  var start = position(),
    change = to - start,
    currentTime = 0,
    increment = 20
  duration = typeof duration === "undefined" ? 500 : duration
  var animateScroll = function() {
    // increment the time
    currentTime += increment
    // find the value with the quadratic in-out easing function
    var val = EaseInOutQuad(currentTime, start, change, duration)
    // move the document.body
    move(val)
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll)
    } else {
      if (callback && typeof callback === "function") {
        // the animation is done so lets callback
        callback()
      }
    }
  }
  animateScroll()
}

/* EOF SCROLL TO TOP UTILITIES */

/* ANIMATE VISIBLE COMPONENTS */
export function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect()

  var top = elementBoundary.top
  var bottom = elementBoundary.bottom
  var height = elementBoundary.height

  return top + height >= 0 && height + window.innerHeight >= bottom
}

/* EOF ANIMATE VISIBLE COMPONENTS */
