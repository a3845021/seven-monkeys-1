var welcomeAnim = true;
var whyplayAnim = true;
var puzzlesAnim = true;
var downloadAnim = true;

function staggerSeparator() {
  TweenMax.staggerFrom('.separator', 2, {
    scale: 1.5,
    autoAlpha: 0,
    delay: 0.15,
    ease: Elastic.easeOut,
    force3D: true
  }, 0.2);
}

function isResponsive() {
  return $(window).width() < 900 ? true : false;
}

function welcome() {
  $('.welcome').removeClass('hidden');

  if (!welcomeAnim || isResponsive()) {
    return
  }

  TweenLite.set('.store', {
    transformOrigin: '-10px 50%'
  });

  TweenLite.set('.icon-scroll-down', {
    opacity: 0,
    marginTop: '-30px'
  });

  staggerSeparator();

  var tl = new TimelineLite({
    delay: 1,
    onComplete: function() {
      welcomeAnim = false;
    }
  });

  tl
  .from('.welcome__title', 1, {
    y: 40,
    autoAlpha: 0,
    ease: Power2.easeInOut
  })
  .from('.welcome__text', 1, {
    y: -40,
    autoAlpha: 0,
    ease: Power2.easeInOut
  }, '-=1')
  .from('.game-monkey-icon', 1, {
    autoAlpha: 0,
  })
  .from('.store', 0.5, {
    rotationX: -180,
    autoAlpha: 0,
  }, '-=0.5')
  .from('.scroll-down__text', 1, {
    autoAlpha: 0,
  })
  .to('.icon-scroll-down', 2, {
    autoAlpha: 1,
    y: 30,
    ease: Bounce.easeOut
  }, '-=1');
}

function whyplay() {
  $('.why-play').removeClass('hidden');

  if (!whyplayAnim || isResponsive()) {
    return;
  }

  TweenLite.set(['.why-play__image-top', '.why-play__image-middle', '.why-play__image-bottom'], {
    opacity: 0
  });

  staggerSeparator();

  var tl = new TimelineLite({
    onComplete: function() {
      whyplayAnim = false;
    }
  });

  tl
  .from('.why-play__title', 1, {
    y: 40,
    autoAlpha: 0,
    ease: Power2.easeInOut
  })
  .from('.why-play__text', 1, {
    y: -40,
    autoAlpha: 0,
    ease: Power2.easeInOut
  }, '-=1')
  .to('.why-play__image-top', 1, {
    x: -150,
    autoAlpha: 1
  })
  .to('.why-play__image-middle', 1, {
    x: 150,
    autoAlpha: 1
  }, '-=0.5')
  .to('.why-play__image-bottom', 1, {
    autoAlpha: 1
  }, '-=0.5');
}

function puzzles() {
  $('.puzzles').removeClass('hidden');

  if (!puzzlesAnim || isResponsive()) {
    return
  }

  staggerSeparator();

  var monkeys = $('.puzzle__monkey');

  var tl = new TimelineLite({
    onComplete: function() {
      puzzlesAnim = false;
    }
  });

  tl
  .from('.puzzles__title', 1, {
    y: 40,
    autoAlpha: 0,
    ease: Power2.easeInOut
  })
  .from('.puzzles__text', 1, {
    y: -40,
    autoAlpha: 0,
    ease: Power2.easeInOut
  }, '-=1');

  tl.add(TweenMax.staggerFrom(monkeys, 2, {
    scale: 2.5,
    autoAlpha: 0,
    delay: 0.15,
    ease: Elastic.easeOut,
    force3D: true
  }, 0.05));
}

function download() {
  $('.download').removeClass('hidden');

  if (!downloadAnim || isResponsive()) {
    return;
  }

  TweenLite.set('.game-fairy-icon', {
    y: '-30px'
  });

  TweenMax.to('.game-fairy-icon', 1, {
    y: 0,
    repeat: -1,
    yoyo: true,
    ease: Bounce.easeOut,
    delay: 0.5
  });

  var tl = new TimelineLite({
    onComplete: function() {
      downloadAnim = false;
    }
  });

  tl
  .from('.game-fairy-icon', 0.25, {
    autoAlpha: 0,
  })
  .from('.download__title', 1, {
    y: -20,
    autoAlpha: 0
  })
  .from('.store', 0.5, {
    rotationX: -180,
    autoAlpha: 0,
  }, '-=0.5')
  .from([
    '.download__text',
    '.download__social',
    '.download__nav',
    '.download__copyrigth'
    ], 0.5, {
    autoAlpha: 0
  });
}
