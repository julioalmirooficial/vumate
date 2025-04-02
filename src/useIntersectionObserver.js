import { onMounted, onUnmounted } from "vue";

/**
 * Applies a bouncing effect to the given element.
 *
 * @param {HTMLElement} element - The DOM element to apply the bounce effect to.
 * @param {Object} reboundConfig - The configuration for the rebound effect.
 * @param {number} reboundConfig.reboundCount - The number of bounces. If 0, no bounce occurs.
 * @param {string} reboundConfig.axis - The axis along which the bounce occurs ("X" or "Y").
 * @returns {void}
 */

const bounceEffect = (
  element,
  reboundConfig = { reboundCount: 0, axis: "Y" }
) => {
  const { reboundCount, axis } = reboundConfig;

  if (reboundCount === 0) return;
  const baseBounce = 15;

  const bounceSteps = [];
  for (let i = 0; i < reboundCount; i++) {
    const distance = baseBounce - i * 2;
    const duration = 200 - i * 30;

    bounceSteps.push(
      {
        translate: axis === "X" ? `-${distance}px` : `-${distance}px`,
        duration,
      },
      { translate: axis === "X" ? "0px" : "0px", duration: duration - 20 }
    );
  }

  let delay = 0;
  bounceSteps.forEach(({ translate, duration }) => {
    setTimeout(() => {
      element.style.transition = `transform ${duration}ms ease-out, all 250ms ease-in-out`;
      element.style.transform = `translate${axis}(${translate})`;
    }, delay);
    delay += duration;
  });
};

/**
 * Custom hook to observe elements and trigger animations when they enter the viewport.
 *
 * @param {Array} selectors - Array of objects, each containing a `selector` (CSS selector) and `animation` object.
 * @param {Object} options - Options for the IntersectionObserver.
 * @returns {void}
 */
export function useIntersectionObserver(selectors, options = {}) {
  let observer;

  onMounted(() => {
    if (!Array.isArray(selectors) || selectors.length === 0) return;
    if (observer) return;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { animation } = selectors.find((s) =>
            entry.target.matches(s.selector)
          );

          if (!animation) return;

          const {
            transform = ["none", "none"],
            opacity = ["1", "1"],
            duration = 0.8,
            easing = "ease-in-out",
            rebounds = {
              reboundCount: 0,
              axis: "X",
            },
          } = animation;

          Object.entries(animation).forEach(([prop, values]) => {
            if (prop !== "duration" && prop !== "easing") {
              entry.target.style.transition = `all ${duration}s ${easing}`;
              entry.target.style[prop] = values[1] || values[0];
            }
          });

          if (rebounds.reboundCount > 0) {
            setTimeout(() => {
              bounceEffect(entry.target, animation.rebounds);
            }, animation.duration * 1000);
          }

          observer.unobserve(entry.target);
        }
      });
    }, options);

    selectors.forEach(({ selector, animation }) => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((el) => {
        const {
          transform = ["none", "none"],
          opacity = ["1", "1"],
          duration = 0.8,
          easing = "ease-in-out",
          rebounds = {
            reboundCount: 0,
            axis: "X",
          },
        } = animation;

        Object.entries(animation).forEach(([prop, values]) => {
          if (prop !== "duration" && prop !== "easing") {
            el.style[prop] = values[0] || transform[0];
          }
        });

        observer.observe(el);
      });
    });
  });

  onUnmounted(() => {
    observer?.disconnect();
    observer = null;
  });
}
