export function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
      window.setTimeout(SVS_B, curTime, eAmt, where);
      curTime += time / 100;
    }
  }
  
  function SVS_B(eAmt, where) {
    if (where === "center" || where === "") window.scrollBy(0, eAmt / 2);
    if (where === "top") window.scrollBy(0, eAmt);
  }
  
  export const SmoothHorizontalScrolling = (element, time, amount, start) => {
    let eAmt = amount / 100;
    let curTime = 0;
    let scrollCounter = 0;
    while (curTime <= time) {
        window.setTimeout(SHS_B, curTime, element, scrollCounter, eAmt, start);
        curTime += time / 100;
        scrollCounter++;
    }
};

const SHS_B = (element, sc, eAmt, start) => {
    element.scrollLeft = eAmt * sc + start;
};
  

  export function randomRgbaColor(opacity) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    let color = `rgba(${R}, ${G}, ${B}, ${opacity})`;
    return color;
  }