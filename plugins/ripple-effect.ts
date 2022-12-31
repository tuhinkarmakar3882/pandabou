import { defineNuxtPlugin } from "nuxt/app";

interface IRippleDimensions {
  dx: number;
  dy: number;
  radius: number;
}

interface IRippleStyles extends IRippleDimensions {
  borderSize: number;
  offsetWidth: number;
  offsetHeight: number;
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
  borderBottomLeftRadius: string;
  borderBottomRightRadius: string;
}

interface IDefaultProps {
  bg: string;
  zIndex: string;
  transition: number;
}

class Ripple {
  private readonly _ripple: HTMLElement;
  private readonly _container: HTMLElement;
  private readonly _defaultProps: IDefaultProps;
  private readonly _target: HTMLElement;
  private readonly _computedDimensions: IRippleStyles;
  private readonly _previousTargetPosition: string;

  constructor(
    target: HTMLElement,
    defaultProps: IDefaultProps,
    computedDimensions: IRippleStyles
  ) {
    this._target = target;
    this._previousTargetPosition = target.style.position;

    this._container = document.createElement("div");
    this._container.className = "ripple-container";

    this._ripple = document.createElement("div");
    this._ripple.className = "ripple";

    this._container.appendChild(this._ripple);
    this._defaultProps = defaultProps;

    this._addDefaultStyles();
    this._computedDimensions = computedDimensions;

    this._addComputedStyles();
  }

  show() {
    this._target.appendChild(this._container);

    setTimeout(() => this._flow(), 0);
  }

  clear() {
    setTimeout(() => {
      this._ripple.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }, 250);

    // Timeout set to get a smooth removal of the ripple
    setTimeout(() => {
      this._container.parentNode?.removeChild(this._container);
    }, this._defaultProps.transition + 500);

    this._target.removeEventListener("mouseup", this.clear, false);

    // After removing event set position to target to its original one
    // Timeout is needed to avoid jerky effect of ripple jumping out parent target
    setTimeout(() => {
      let clearPosition = true;

      for (const childNode of this._target.childNodes) {
        if ((childNode as HTMLElement).className === "ripple-container") {
          clearPosition = false;
          break;
        }
      }

      if (!clearPosition) return;

      this._target.style.position = this._previousTargetPosition || "";
    }, this._defaultProps.transition + 350);
  }

  private _flow() {
    const { radius, dx, dy } = this._computedDimensions;

    this._ripple.style.width = `${radius * 2}px`;
    this._ripple.style.height = `${radius * 2}px`;
    this._ripple.style.marginLeft = `${dx - radius}px`;
    this._ripple.style.marginTop = `${dy - radius}px`;
  }

  private _addComputedStyles() {
    const {
      dx,
      dy,
      borderSize,
      offsetWidth,
      offsetHeight,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
    } = this._computedDimensions;

    this._ripple.style.marginLeft = `${dx}px`;
    this._ripple.style.marginTop = `${dy}px`;

    this._container.style.left = `${0 - borderSize}px`;
    this._container.style.top = `${0 - borderSize}px`;

    this._container.style.width = `${offsetWidth}px`;
    this._container.style.height = `${offsetHeight}px`;

    this._container.style.borderTopLeftRadius = borderTopLeftRadius;
    this._container.style.borderTopRightRadius = borderTopRightRadius;
    this._container.style.borderBottomLeftRadius = borderBottomLeftRadius;
    this._container.style.borderBottomRightRadius = borderBottomRightRadius;
  }

  private _addDefaultStyles() {
    this._ripple.style.marginTop = "0";
    this._ripple.style.marginLeft = "0";
    this._ripple.style.width = "1px";
    this._ripple.style.height = "1px";
    this._ripple.style.transition = `all ${this._defaultProps.transition}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    this._ripple.style.borderRadius = "50%";
    this._ripple.style.pointerEvents = "none";
    this._ripple.style.position = "relative";
    this._ripple.style.zIndex = this._defaultProps.zIndex;
    this._ripple.style.backgroundColor = this._defaultProps.bg;

    // Styles for rippleContainer
    this._container.style.position = "absolute";
    this._container.style.height = "0";
    this._container.style.width = "0";
    this._container.style.pointerEvents = "none";
    this._container.style.overflow = "hidden";
    this._container.style.direction = "ltr";
  }
}

const getComputedDimension = (
  event: MouseEvent,
  target: HTMLElement
): IRippleStyles => {
  const {
    borderWidth,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
  } = getComputedStyle(target);

  const { offsetWidth, offsetHeight } = target;

  const rect = target.getBoundingClientRect();
  const left = rect.left;
  const top = rect.top;
  const dx = event.clientX - left;
  const dy = event.clientY - top;
  const maxX = Math.max(dx, offsetWidth - dx);
  const maxY = Math.max(dy, offsetHeight - dy);
  const radius = Math.sqrt(maxX * maxX + maxY * maxY);
  const borderSize = parseInt(borderWidth.replace("px", ""));

  return {
    dx,
    dy,
    radius,
    borderSize,
    offsetWidth,
    offsetHeight,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
  };
};

const createRipple = (
  event: MouseEvent,
  target: HTMLElement,
  defaultProps: IDefaultProps
) => {
  const computedDimension = getComputedDimension(event, target);
  const ripple = new Ripple(target, defaultProps, computedDimension);

  if (target.style.position !== "relative") {
    target.style.position = "relative";
  }

  ripple.show();
  ripple.clear();
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("ripple", {
    beforeMount(htmlElement, binding) {
      const defaultProps: IDefaultProps = {
        zIndex: "9999",
        transition: 350,
        bg: binding.value || "var(--color-ripple)",
      };

      htmlElement.addEventListener("mousedown", (event: MouseEvent) => {
        createRipple(event, htmlElement, defaultProps);
      });
    },

    getSSRProps() {
      return {};
    },
  });
});
