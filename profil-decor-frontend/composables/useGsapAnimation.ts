import gsap from 'gsap';

export default function () {

  function initFirstTitleWordAnimation() {
    return gsap.timeline().to('#landing-title-profil', { duration: 3, ease: 'power4', stagger: 0.1, opacity: 1, markers: false });
  }

  function initSecondTitleWordAnimation() {
    return gsap.timeline().to('#landing-title-decor', { duration: 3, ease: 'power4', stagger: 0.1, opacity: 1, markers: false });
  }

  function initOpacityAnimation(isFadeAway = false) {
    return gsap.timeline().to('#landing-page', { duration: 0.25, ease: "power4", opacity: isFadeAway ? 0 : 1 });
  }

  function initTitleScrollAnimation() {
    const timeline = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: '#landing-section',
        start: 'center center',
        end: 'bottom+=50% center',
        pin: true,
        markers: false
      }
    });

    timeline
      .to('#landing-title-profil', { x: '-=100vw', ease: 'expo.inOut' })
      .to('#landing-title-decor', { x: '+=100vw', ease: 'expo.inOut' }, '<');
  }

  function playLandingTitleAnimations() {
    initFirstTitleWordAnimation().play();
    initSecondTitleWordAnimation().play();
    initTitleScrollAnimation();
  }

  return {
    playLandingTitleAnimations,
    initOpacityAnimation
  };

}