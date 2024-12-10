function setupIntersectionObserver(element, isLTR, speed, initialTranslate) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);
  
  

  // function scrollHandler() {
  //   const translateX =
  //     (window.innerHeight - element.getBoundingClientRect().top) * speed;
  //   const totalTranslate = isLTR
  //     ? translateX + initialTranslate
  //     : -(translateX + initialTranslate);

  //   element.style.transform = `translateX(${totalTranslate}px)`;
  // }

  function scrollHandler() {
    const boundingRect = element.getBoundingClientRect();
    if (boundingRect.top < window.innerHeight && boundingRect.bottom > 0) {
      const translateX =
        (window.innerHeight - boundingRect.top) * speed;
      const totalTranslate = isLTR
        ? translateX + initialTranslate
        : -(translateX + initialTranslate);
      element.style.transform = `translateX(${totalTranslate}px)`;
    }
  }
  
}

export default setupIntersectionObserver;