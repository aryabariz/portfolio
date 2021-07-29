export function getScreenHeight() {
  if (typeof window !== undefined) {
    return window.innerHeight;
  }
}

export function isMobile() {
  if (typeof window !== 'undefined') {
    const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }
}
