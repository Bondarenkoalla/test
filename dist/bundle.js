/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSES: () => (/* binding */ CLASSES),
/* harmony export */   CLASS_ACTIVE: () => (/* binding */ CLASS_ACTIVE),
/* harmony export */   CLASS_ARROW: () => (/* binding */ CLASS_ARROW),
/* harmony export */   CLASS_ARROWS: () => (/* binding */ CLASS_ARROWS),
/* harmony export */   CLASS_ARROW_NEXT: () => (/* binding */ CLASS_ARROW_NEXT),
/* harmony export */   CLASS_ARROW_PREV: () => (/* binding */ CLASS_ARROW_PREV),
/* harmony export */   CLASS_AUTOPLAY: () => (/* binding */ CLASS_AUTOPLAY),
/* harmony export */   CLASS_CLONE: () => (/* binding */ CLASS_CLONE),
/* harmony export */   CLASS_CONTAINER: () => (/* binding */ CLASS_CONTAINER),
/* harmony export */   CLASS_INITIALIZED: () => (/* binding */ CLASS_INITIALIZED),
/* harmony export */   CLASS_LIST: () => (/* binding */ CLASS_LIST),
/* harmony export */   CLASS_LOADING: () => (/* binding */ CLASS_LOADING),
/* harmony export */   CLASS_NEXT: () => (/* binding */ CLASS_NEXT),
/* harmony export */   CLASS_PAGINATION: () => (/* binding */ CLASS_PAGINATION),
/* harmony export */   CLASS_PAGINATION_PAGE: () => (/* binding */ CLASS_PAGINATION_PAGE),
/* harmony export */   CLASS_PAUSE: () => (/* binding */ CLASS_PAUSE),
/* harmony export */   CLASS_PLAY: () => (/* binding */ CLASS_PLAY),
/* harmony export */   CLASS_PREV: () => (/* binding */ CLASS_PREV),
/* harmony export */   CLASS_PROGRESS: () => (/* binding */ CLASS_PROGRESS),
/* harmony export */   CLASS_PROGRESS_BAR: () => (/* binding */ CLASS_PROGRESS_BAR),
/* harmony export */   CLASS_ROOT: () => (/* binding */ CLASS_ROOT),
/* harmony export */   CLASS_SLIDE: () => (/* binding */ CLASS_SLIDE),
/* harmony export */   CLASS_SLIDER: () => (/* binding */ CLASS_SLIDER),
/* harmony export */   CLASS_SPINNER: () => (/* binding */ CLASS_SPINNER),
/* harmony export */   CLASS_TRACK: () => (/* binding */ CLASS_TRACK),
/* harmony export */   CLASS_VISIBLE: () => (/* binding */ CLASS_VISIBLE),
/* harmony export */   EVENT_ACTIVE: () => (/* binding */ EVENT_ACTIVE),
/* harmony export */   EVENT_ARROWS_MOUNTED: () => (/* binding */ EVENT_ARROWS_MOUNTED),
/* harmony export */   EVENT_ARROWS_UPDATED: () => (/* binding */ EVENT_ARROWS_UPDATED),
/* harmony export */   EVENT_AUTOPLAY_PAUSE: () => (/* binding */ EVENT_AUTOPLAY_PAUSE),
/* harmony export */   EVENT_AUTOPLAY_PLAY: () => (/* binding */ EVENT_AUTOPLAY_PLAY),
/* harmony export */   EVENT_AUTOPLAY_PLAYING: () => (/* binding */ EVENT_AUTOPLAY_PLAYING),
/* harmony export */   EVENT_CLICK: () => (/* binding */ EVENT_CLICK),
/* harmony export */   EVENT_DESTROY: () => (/* binding */ EVENT_DESTROY),
/* harmony export */   EVENT_DRAG: () => (/* binding */ EVENT_DRAG),
/* harmony export */   EVENT_DRAGGED: () => (/* binding */ EVENT_DRAGGED),
/* harmony export */   EVENT_DRAGGING: () => (/* binding */ EVENT_DRAGGING),
/* harmony export */   EVENT_HIDDEN: () => (/* binding */ EVENT_HIDDEN),
/* harmony export */   EVENT_INACTIVE: () => (/* binding */ EVENT_INACTIVE),
/* harmony export */   EVENT_LAZYLOAD_LOADED: () => (/* binding */ EVENT_LAZYLOAD_LOADED),
/* harmony export */   EVENT_MOUNTED: () => (/* binding */ EVENT_MOUNTED),
/* harmony export */   EVENT_MOVE: () => (/* binding */ EVENT_MOVE),
/* harmony export */   EVENT_MOVED: () => (/* binding */ EVENT_MOVED),
/* harmony export */   EVENT_NAVIGATION_MOUNTED: () => (/* binding */ EVENT_NAVIGATION_MOUNTED),
/* harmony export */   EVENT_PAGINATION_MOUNTED: () => (/* binding */ EVENT_PAGINATION_MOUNTED),
/* harmony export */   EVENT_PAGINATION_UPDATED: () => (/* binding */ EVENT_PAGINATION_UPDATED),
/* harmony export */   EVENT_READY: () => (/* binding */ EVENT_READY),
/* harmony export */   EVENT_REFRESH: () => (/* binding */ EVENT_REFRESH),
/* harmony export */   EVENT_REPOSITIONED: () => (/* binding */ EVENT_REPOSITIONED),
/* harmony export */   EVENT_RESIZE: () => (/* binding */ EVENT_RESIZE),
/* harmony export */   EVENT_RESIZED: () => (/* binding */ EVENT_RESIZED),
/* harmony export */   EVENT_SCROLL: () => (/* binding */ EVENT_SCROLL),
/* harmony export */   EVENT_SCROLLED: () => (/* binding */ EVENT_SCROLLED),
/* harmony export */   EVENT_SHIFTED: () => (/* binding */ EVENT_SHIFTED),
/* harmony export */   EVENT_SLIDE_KEYDOWN: () => (/* binding */ EVENT_SLIDE_KEYDOWN),
/* harmony export */   EVENT_UPDATED: () => (/* binding */ EVENT_UPDATED),
/* harmony export */   EVENT_VISIBLE: () => (/* binding */ EVENT_VISIBLE),
/* harmony export */   EventBus: () => (/* binding */ EventBus),
/* harmony export */   EventInterface: () => (/* binding */ EventInterface),
/* harmony export */   RequestInterval: () => (/* binding */ RequestInterval),
/* harmony export */   STATUS_CLASSES: () => (/* binding */ STATUS_CLASSES),
/* harmony export */   Splide: () => (/* binding */ Splide),
/* harmony export */   SplideRenderer: () => (/* binding */ SplideRenderer),
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   Throttle: () => (/* binding */ Throttle),
/* harmony export */   "default": () => (/* binding */ Splide)
/* harmony export */ });
/*!
 * Splide.js
 * Version  : 3.6.12
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
const PROJECT_CODE = "splide";
const DATA_ATTRIBUTE = `data-${PROJECT_CODE}`;

const CREATED = 1;
const MOUNTED = 2;
const IDLE = 3;
const MOVING = 4;
const DESTROYED = 5;
const STATES = {
  CREATED,
  MOUNTED,
  IDLE,
  MOVING,
  DESTROYED
};

const DEFAULT_EVENT_PRIORITY = 10;
const DEFAULT_USER_EVENT_PRIORITY = 20;

function empty(array) {
  array.length = 0;
}

function isObject(subject) {
  return !isNull(subject) && typeof subject === "object";
}
function isArray(subject) {
  return Array.isArray(subject);
}
function isFunction(subject) {
  return typeof subject === "function";
}
function isString(subject) {
  return typeof subject === "string";
}
function isUndefined(subject) {
  return typeof subject === "undefined";
}
function isNull(subject) {
  return subject === null;
}
function isHTMLElement(subject) {
  return subject instanceof HTMLElement;
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push(...toArray(items));
  return array;
}

const arrayProto = Array.prototype;

function slice(arrayLike, start, end) {
  return arrayProto.slice.call(arrayLike, start, end);
}

function find(arrayLike, predicate) {
  return slice(arrayLike).filter(predicate)[0];
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, (name) => {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, (node) => {
    const parent = ref.parentNode;
    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  return parent ? slice(parent.children).filter((child) => matches(child, selector)) : [];
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

function forOwn(object, iteratee, right) {
  if (object) {
    let keys = Object.keys(object);
    keys = right ? keys.reverse() : keys;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}

function assign(object) {
  slice(arguments, 1).forEach((source) => {
    forOwn(source, (value, key) => {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object, source) {
  forOwn(source, (value, key) => {
    if (isArray(value)) {
      object[key] = value.slice();
    } else if (isObject(value)) {
      object[key] = merge(isObject(object[key]) ? object[key] : {}, value);
    } else {
      object[key] = value;
    }
  });
  return object;
}

function removeAttribute(elm, attrs) {
  if (elm) {
    forEach(attrs, (attr) => {
      elm.removeAttribute(attr);
    });
  }
}

function setAttribute(elm, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, (value2, name) => {
      setAttribute(elm, name, value2);
    });
  } else {
    isNull(value) ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
  }
}

function create(tag, attrs, parent) {
  const elm = document.createElement(tag);
  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }
  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }
  if (!isNull(value)) {
    const { style: style2 } = elm;
    value = `${value}`;
    if (style2[prop] !== value) {
      style2[prop] = value;
    }
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({ preventScroll: true });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, (node) => {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function measure(parent, value) {
  if (isString(value)) {
    const div = create("div", { style: `width: ${value}; position: absolute;` }, parent);
    value = rect(div).width;
    remove(div);
  }
  return value;
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();
  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return slice(parent.querySelectorAll(selector));
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function unit(value) {
  return isString(value) ? value : value ? `${value}px` : "";
}

function assert(condition, message = "") {
  if (!condition) {
    throw new Error(`[${PROJECT_CODE}] ${message}`);
  }
}

function nextTick(callback) {
  setTimeout(callback);
}

const noop = () => {
};

function raf(func) {
  return requestAnimationFrame(func);
}

const { min, max, floor, ceil, abs } = Math;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, minOrMax, maxOrMin, exclusive) {
  const minimum = min(minOrMax, maxOrMin);
  const maximum = max(minOrMax, maxOrMin);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  const minimum = min(x, y);
  const maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, (replacement) => {
    string = string.replace("%s", `${replacement}`);
  });
  return string;
}

function pad(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

const ids = {};
function uniqueId(prefix) {
  return `${prefix}${pad(ids[prefix] = (ids[prefix] || 0) + 1)}`;
}

function EventBus() {
  let handlers = {};
  function on(events, callback, key, priority = DEFAULT_EVENT_PRIORITY) {
    forEachEvent(events, (event, namespace) => {
      handlers[event] = handlers[event] || [];
      push(handlers[event], {
        _event: event,
        _callback: callback,
        _namespace: namespace,
        _priority: priority,
        _key: key
      }).sort((handler1, handler2) => handler1._priority - handler2._priority);
    });
  }
  function off(events, key) {
    forEachEvent(events, (event, namespace) => {
      const eventHandlers = handlers[event];
      handlers[event] = eventHandlers && eventHandlers.filter((handler) => {
        return handler._key ? handler._key !== key : key || handler._namespace !== namespace;
      });
    });
  }
  function offBy(key) {
    forOwn(handlers, (eventHandlers, event) => {
      off(event, key);
    });
  }
  function emit(event) {
    (handlers[event] || []).forEach((handler) => {
      handler._callback.apply(handler, slice(arguments, 1));
    });
  }
  function destroy() {
    handlers = {};
  }
  function forEachEvent(events, iteratee) {
    toArray(events).join(" ").split(" ").forEach((eventNS) => {
      const fragments = eventNS.split(".");
      iteratee(fragments[0], fragments[1]);
    });
  }
  return {
    on,
    off,
    offBy,
    emit,
    destroy
  };
}

const EVENT_MOUNTED = "mounted";
const EVENT_READY = "ready";
const EVENT_MOVE = "move";
const EVENT_MOVED = "moved";
const EVENT_SHIFTED = "shifted";
const EVENT_CLICK = "click";
const EVENT_ACTIVE = "active";
const EVENT_INACTIVE = "inactive";
const EVENT_VISIBLE = "visible";
const EVENT_HIDDEN = "hidden";
const EVENT_SLIDE_KEYDOWN = "slide:keydown";
const EVENT_REFRESH = "refresh";
const EVENT_UPDATED = "updated";
const EVENT_RESIZE = "resize";
const EVENT_RESIZED = "resized";
const EVENT_REPOSITIONED = "repositioned";
const EVENT_DRAG = "drag";
const EVENT_DRAGGING = "dragging";
const EVENT_DRAGGED = "dragged";
const EVENT_SCROLL = "scroll";
const EVENT_SCROLLED = "scrolled";
const EVENT_DESTROY = "destroy";
const EVENT_ARROWS_MOUNTED = "arrows:mounted";
const EVENT_ARROWS_UPDATED = "arrows:updated";
const EVENT_PAGINATION_MOUNTED = "pagination:mounted";
const EVENT_PAGINATION_UPDATED = "pagination:updated";
const EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
const EVENT_AUTOPLAY_PLAY = "autoplay:play";
const EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
const EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
const EVENT_LAZYLOAD_LOADED = "lazyload:loaded";

function EventInterface(Splide2) {
  const { event } = Splide2;
  const key = {};
  let listeners = [];
  function on(events, callback, priority) {
    event.on(events, callback, key, priority);
  }
  function off(events) {
    event.off(events, key);
  }
  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, (target, event2) => {
      listeners.push([target, event2, callback, options]);
      target.addEventListener(event2, callback, options);
    });
  }
  function unbind(targets, events, callback) {
    forEachEvent(targets, events, (target, event2) => {
      listeners = listeners.filter((listener) => {
        if (listener[0] === target && listener[1] === event2 && (!callback || listener[2] === callback)) {
          target.removeEventListener(event2, listener[2], listener[3]);
          return false;
        }
        return true;
      });
    });
  }
  function forEachEvent(targets, events, iteratee) {
    forEach(targets, (target) => {
      if (target) {
        events.split(" ").forEach(iteratee.bind(null, target));
      }
    });
  }
  function destroy() {
    listeners = listeners.filter((data) => unbind(data[0], data[1]));
    event.offBy(key);
  }
  event.on(EVENT_DESTROY, destroy, key);
  return {
    on,
    off,
    emit: event.emit,
    bind,
    unbind,
    destroy
  };
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  const { now } = Date;
  let startTime;
  let rate = 0;
  let id;
  let paused = true;
  let count = 0;
  function update() {
    if (!paused) {
      const elapsed = now() - startTime;
      if (elapsed >= interval) {
        rate = 1;
        startTime = now();
      } else {
        rate = elapsed / interval;
      }
      if (onUpdate) {
        onUpdate(rate);
      }
      if (rate === 1) {
        onInterval();
        if (limit && ++count >= limit) {
          return pause();
        }
      }
      raf(update);
    }
  }
  function start(resume) {
    !resume && cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    raf(update);
  }
  function pause() {
    paused = true;
  }
  function rewind() {
    startTime = now();
    rate = 0;
    if (onUpdate) {
      onUpdate(rate);
    }
  }
  function cancel() {
    cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }
  function set(time) {
    interval = time;
  }
  function isPaused() {
    return paused;
  }
  return {
    start,
    rewind,
    pause,
    cancel,
    set,
    isPaused
  };
}

function State(initialState) {
  let state = initialState;
  function set(value) {
    state = value;
  }
  function is(states) {
    return includes(toArray(states), state);
  }
  return { set, is };
}

function Throttle(func, duration) {
  let interval;
  function throttled() {
    if (!interval) {
      interval = RequestInterval(duration || 0, () => {
        func.apply(this, arguments);
        interval = null;
      }, null, 1);
      interval.start();
    }
  }
  return throttled;
}

function Options(Splide2, Components2, options) {
  const throttledObserve = Throttle(observe);
  let initialOptions;
  let points;
  let currPoint;
  function setup() {
    try {
      merge(options, JSON.parse(getAttribute(Splide2.root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, e.message);
    }
    initialOptions = merge({}, options);
    const { breakpoints } = options;
    if (breakpoints) {
      const isMin = options.mediaQuery === "min";
      points = Object.keys(breakpoints).sort((n, m) => isMin ? +m - +n : +n - +m).map((point) => [
        point,
        matchMedia(`(${isMin ? "min" : "max"}-width:${point}px)`)
      ]);
      observe();
    }
  }
  function mount() {
    if (points) {
      addEventListener("resize", throttledObserve);
    }
  }
  function destroy(completely) {
    if (completely) {
      removeEventListener("resize", throttledObserve);
    }
  }
  function observe() {
    const item = find(points, (item2) => item2[1].matches) || [];
    if (item[0] !== currPoint) {
      onMatch(currPoint = item[0]);
    }
  }
  function onMatch(point) {
    const newOptions = options.breakpoints[point] || initialOptions;
    if (newOptions.destroy) {
      Splide2.options = initialOptions;
      Splide2.destroy(newOptions.destroy === "completely");
    } else {
      if (Splide2.state.is(DESTROYED)) {
        destroy(true);
        Splide2.mount();
      }
      Splide2.options = newOptions;
    }
  }
  return {
    setup,
    mount,
    destroy
  };
}

const RTL = "rtl";
const TTB = "ttb";

const ORIENTATION_MAP = {
  marginRight: ["marginBottom", "marginLeft"],
  autoWidth: ["autoHeight"],
  fixedWidth: ["fixedHeight"],
  paddingLeft: ["paddingTop", "paddingRight"],
  paddingRight: ["paddingBottom", "paddingLeft"],
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: ["ArrowUp", "ArrowRight"],
  ArrowRight: ["ArrowDown", "ArrowLeft"]
};
function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly) {
    const { direction } = options;
    const index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop][index] || prop;
  }
  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }
  return {
    resolve,
    orient
  };
}

const CLASS_ROOT = PROJECT_CODE;
const CLASS_SLIDER = `${PROJECT_CODE}__slider`;
const CLASS_TRACK = `${PROJECT_CODE}__track`;
const CLASS_LIST = `${PROJECT_CODE}__list`;
const CLASS_SLIDE = `${PROJECT_CODE}__slide`;
const CLASS_CLONE = `${CLASS_SLIDE}--clone`;
const CLASS_CONTAINER = `${CLASS_SLIDE}__container`;
const CLASS_ARROWS = `${PROJECT_CODE}__arrows`;
const CLASS_ARROW = `${PROJECT_CODE}__arrow`;
const CLASS_ARROW_PREV = `${CLASS_ARROW}--prev`;
const CLASS_ARROW_NEXT = `${CLASS_ARROW}--next`;
const CLASS_PAGINATION = `${PROJECT_CODE}__pagination`;
const CLASS_PAGINATION_PAGE = `${CLASS_PAGINATION}__page`;
const CLASS_PROGRESS = `${PROJECT_CODE}__progress`;
const CLASS_PROGRESS_BAR = `${CLASS_PROGRESS}__bar`;
const CLASS_AUTOPLAY = `${PROJECT_CODE}__autoplay`;
const CLASS_PLAY = `${PROJECT_CODE}__play`;
const CLASS_PAUSE = `${PROJECT_CODE}__pause`;
const CLASS_SPINNER = `${PROJECT_CODE}__spinner`;
const CLASS_INITIALIZED = "is-initialized";
const CLASS_ACTIVE = "is-active";
const CLASS_PREV = "is-prev";
const CLASS_NEXT = "is-next";
const CLASS_VISIBLE = "is-visible";
const CLASS_LOADING = "is-loading";
const STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING];
const CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function Elements(Splide2, Components2, options) {
  const { on } = EventInterface(Splide2);
  const { root } = Splide2;
  const elements = {};
  const slides = [];
  let classes;
  let slider;
  let track;
  let list;
  function setup() {
    collect();
    identify();
    addClass(root, classes = getClasses());
  }
  function mount() {
    on(EVENT_REFRESH, refresh, DEFAULT_EVENT_PRIORITY - 2);
    on(EVENT_UPDATED, update);
  }
  function destroy() {
    [root, track, list].forEach((elm) => {
      removeAttribute(elm, "style");
    });
    empty(slides);
    removeClass(root, classes);
  }
  function refresh() {
    destroy();
    setup();
  }
  function update() {
    removeClass(root, classes);
    addClass(root, classes = getClasses());
  }
  function collect() {
    slider = child(root, `.${CLASS_SLIDER}`);
    track = query(root, `.${CLASS_TRACK}`);
    list = child(track, `.${CLASS_LIST}`);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, `.${CLASS_SLIDE}:not(.${CLASS_CLONE})`));
    const autoplay = find(`.${CLASS_AUTOPLAY}`);
    const arrows = find(`.${CLASS_ARROWS}`);
    assign(elements, {
      root,
      slider,
      track,
      list,
      slides,
      arrows,
      autoplay,
      prev: query(arrows, `.${CLASS_ARROW_PREV}`),
      next: query(arrows, `.${CLASS_ARROW_NEXT}`),
      bar: query(find(`.${CLASS_PROGRESS}`), `.${CLASS_PROGRESS_BAR}`),
      play: query(autoplay, `.${CLASS_PLAY}`),
      pause: query(autoplay, `.${CLASS_PAUSE}`)
    });
  }
  function identify() {
    const id = root.id || uniqueId(PROJECT_CODE);
    root.id = id;
    track.id = track.id || `${id}-track`;
    list.id = list.id || `${id}-list`;
  }
  function find(selector) {
    return child(root, selector) || child(slider, selector);
  }
  function getClasses() {
    return [
      `${CLASS_ROOT}--${options.type}`,
      `${CLASS_ROOT}--${options.direction}`,
      options.drag && `${CLASS_ROOT}--draggable`,
      options.isNavigation && `${CLASS_ROOT}--nav`,
      CLASS_ACTIVE
    ];
  }
  return assign(elements, {
    setup,
    mount,
    destroy
  });
}

const ROLE = "role";
const ARIA_CONTROLS = "aria-controls";
const ARIA_CURRENT = "aria-current";
const ARIA_LABEL = "aria-label";
const ARIA_HIDDEN = "aria-hidden";
const TAB_INDEX = "tabindex";
const DISABLED = "disabled";
const ARIA_ORIENTATION = "aria-orientation";
const ALL_ATTRIBUTES = [
  ROLE,
  ARIA_CONTROLS,
  ARIA_CURRENT,
  ARIA_LABEL,
  ARIA_HIDDEN,
  ARIA_ORIENTATION,
  TAB_INDEX,
  DISABLED
];

const SLIDE = "slide";
const LOOP = "loop";
const FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  const { on, emit, bind, destroy: destroyEvents } = EventInterface(Splide2);
  const { Components, root, options } = Splide2;
  const { isNavigation, updateOnMove } = options;
  const { resolve } = Components.Direction;
  const styles = getAttribute(slide, "style");
  const isClone = slideIndex > -1;
  const container = child(slide, `.${CLASS_CONTAINER}`);
  const focusableNodes = options.focusableNodes && queryAll(slide, options.focusableNodes);
  let destroyed;
  function mount() {
    if (!isClone) {
      slide.id = `${root.id}-slide${pad(index + 1)}`;
    }
    bind(slide, "click keydown", (e) => {
      emit(e.type === "click" ? EVENT_CLICK : EVENT_SLIDE_KEYDOWN, self, e);
    });
    on([EVENT_REFRESH, EVENT_REPOSITIONED, EVENT_SHIFTED, EVENT_MOVED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);
    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }
  function destroy() {
    destroyed = true;
    destroyEvents();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
  }
  function initNavigation() {
    const idx = isClone ? slideIndex : index;
    const label = format(options.i18n.slideX, idx + 1);
    const controls = Splide2.splides.map((target) => target.splide.root.id).join(" ");
    setAttribute(slide, ARIA_LABEL, label);
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, "menuitem");
    updateActivity(isActive());
  }
  function onMove() {
    if (!destroyed) {
      update();
    }
  }
  function update() {
    if (!destroyed) {
      const { index: currIndex } = Splide2;
      updateActivity(isActive());
      updateVisibility(isVisible());
      toggleClass(slide, CLASS_PREV, index === currIndex - 1);
      toggleClass(slide, CLASS_NEXT, index === currIndex + 1);
    }
  }
  function updateActivity(active) {
    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      if (isNavigation) {
        setAttribute(slide, ARIA_CURRENT, active || null);
      }
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }
  function updateVisibility(visible) {
    const hidden = !visible && (!isActive() || isClone);
    setAttribute(slide, ARIA_HIDDEN, hidden || null);
    setAttribute(slide, TAB_INDEX, !hidden && options.slideFocus ? 0 : null);
    if (focusableNodes) {
      focusableNodes.forEach((node) => {
        setAttribute(node, TAB_INDEX, hidden ? -1 : null);
      });
    }
    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }
  }
  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }
  function isActive() {
    const { index: curr } = Splide2;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }
  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }
    const trackRect = rect(Components.Elements.track);
    const slideRect = rect(slide);
    const left = resolve("left");
    const right = resolve("right");
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }
  function isWithin(from, distance) {
    let diff = abs(from - index);
    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }
    return diff <= distance;
  }
  const self = {
    index,
    slideIndex,
    slide,
    container,
    isClone,
    mount,
    destroy,
    update,
    style: style$1,
    isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  const { on, emit, bind } = EventInterface(Splide2);
  const { slides, list } = Components2.Elements;
  const Slides2 = [];
  function mount() {
    init();
    on(EVENT_REFRESH, refresh);
    on([EVENT_MOUNTED, EVENT_REFRESH], () => {
      Slides2.sort((Slide1, Slide2) => Slide1.index - Slide2.index);
    });
  }
  function init() {
    slides.forEach((slide, index) => {
      register(slide, index, -1);
    });
  }
  function destroy() {
    forEach$1((Slide2) => {
      Slide2.destroy();
    });
    empty(Slides2);
  }
  function refresh() {
    destroy();
    init();
  }
  function update() {
    forEach$1((Slide2) => {
      Slide2.update();
    });
  }
  function register(slide, index, slideIndex) {
    const object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
  }
  function get(excludeClones) {
    return excludeClones ? filter((Slide2) => !Slide2.isClone) : Slides2;
  }
  function getIn(page) {
    const { Controller } = Components2;
    const index = Controller.toIndex(page);
    const max = Controller.hasFocus() ? 1 : options.perPage;
    return filter((Slide2) => between(Slide2.index, index, index + max - 1));
  }
  function getAt(index) {
    return filter(index)[0];
  }
  function add(items, index) {
    forEach(items, (slide) => {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }
      if (isHTMLElement(slide)) {
        const ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, emit.bind(null, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }
  function remove$1(matcher) {
    remove(filter(matcher).map((Slide2) => Slide2.slide));
    emit(EVENT_REFRESH);
  }
  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }
  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : (Slide2) => isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index));
  }
  function style(prop, value, useContainer) {
    forEach$1((Slide2) => {
      Slide2.style(prop, value, useContainer);
    });
  }
  function observeImages(elm, callback) {
    const images = queryAll(elm, "img");
    let { length } = images;
    if (length) {
      images.forEach((img) => {
        bind(img, "load error", () => {
          if (!--length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }
  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }
  function isEnough() {
    return Slides2.length > options.perPage;
  }
  return {
    mount,
    destroy,
    update,
    register,
    get,
    getIn,
    getAt,
    add,
    remove: remove$1,
    forEach: forEach$1,
    filter,
    style,
    getLength,
    isEnough
  };
}

function Layout(Splide2, Components2, options) {
  const { on, bind, emit } = EventInterface(Splide2);
  const { Slides } = Components2;
  const { resolve } = Components2.Direction;
  const { root, track, list } = Components2.Elements;
  const { getAt } = Slides;
  let vertical;
  let rootRect;
  function mount() {
    init();
    bind(window, "resize load", Throttle(emit.bind(this, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }
  function init() {
    rootRect = null;
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize();
  }
  function resize() {
    const newRect = rect(root);
    if (!rootRect || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      Slides.style(resolve("marginRight"), unit(options.gap));
      Slides.style("width", cssSlideWidth() || null);
      setSlidesHeight();
      rootRect = newRect;
      emit(EVENT_RESIZED);
    }
  }
  function setSlidesHeight() {
    Slides.style("height", cssSlideHeight() || null, true);
  }
  function cssPadding(right) {
    const { padding } = options;
    const prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }
  function cssTrackHeight() {
    let height = "";
    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = `calc(${height} - ${cssPadding(false)} - ${cssPadding(true)})`;
    }
    return height;
  }
  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }
  function cssSlideWidth() {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }
  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? "" : cssSlideSize() : cssHeight());
  }
  function cssSlideSize() {
    const gap = unit(options.gap);
    return `calc((100%${gap && ` + ${gap}`})/${options.perPage || 1}${gap && ` - ${gap}`})`;
  }
  function listSize() {
    return rect(list)[resolve("width")];
  }
  function slideSize(index, withoutGap) {
    const Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }
  function totalSize(index, withoutGap) {
    const Slide = getAt(index);
    if (Slide) {
      const right = rect(Slide.slide)[resolve("right")];
      const left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }
    return 0;
  }
  function sliderSize() {
    return totalSize(Splide2.length - 1, true) - totalSize(-1, true);
  }
  function getGap() {
    const Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }
  function getPadding(right) {
    return parseFloat(style(track, resolve(`padding${right ? "Right" : "Left"}`))) || 0;
  }
  return {
    mount,
    listSize,
    slideSize,
    sliderSize,
    totalSize,
    getPadding
  };
}

function Clones(Splide2, Components2, options) {
  const { on, emit } = EventInterface(Splide2);
  const { Elements, Slides } = Components2;
  const { resolve } = Components2.Direction;
  const clones = [];
  let cloneCount;
  function mount() {
    init();
    on(EVENT_REFRESH, refresh);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
  }
  function init() {
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      emit(EVENT_RESIZE);
    }
  }
  function destroy() {
    remove(clones);
    empty(clones);
  }
  function refresh() {
    destroy();
    init();
  }
  function observe() {
    if (cloneCount < computeCloneCount()) {
      emit(EVENT_REFRESH);
    }
  }
  function generate(count) {
    const slides = Slides.get().slice();
    const { length } = slides;
    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }
      push(slides.slice(-count), slides.slice(0, count)).forEach((Slide, index) => {
        const isHead = index < count;
        const clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }
  function cloneDeep(elm, index) {
    const clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = `${Splide2.root.id}-clone${pad(index + 1)}`;
    return clone;
  }
  function computeCloneCount() {
    let { clones: clones2 } = options;
    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (!clones2) {
      const fixedSize = measure(Elements.list, options[resolve("fixedWidth")]);
      const fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      const baseCount = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage;
      clones2 = baseCount * (options.drag ? (options.flickMaxPages || 1) + 1 : 2);
    }
    return clones2;
  }
  return {
    mount,
    destroy
  };
}

function Move(Splide2, Components2, options) {
  const { on, emit } = EventInterface(Splide2);
  const { slideSize, getPadding, totalSize, listSize, sliderSize } = Components2.Layout;
  const { resolve, orient } = Components2.Direction;
  const { list, track } = Components2.Elements;
  let Transition;
  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }
  function destroy() {
    removeAttribute(list, "style");
  }
  function reposition() {
    if (!isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      emit(EVENT_REPOSITIONED);
    }
  }
  function move(dest, index, prev, callback) {
    if (!isBusy()) {
      const { set } = Splide2.state;
      const position = getPosition();
      if (dest !== index) {
        Transition.cancel();
        translate(shift(position, dest > index), true);
      }
      set(MOVING);
      emit(EVENT_MOVE, index, prev, dest);
      Transition.start(index, () => {
        set(IDLE);
        emit(EVENT_MOVED, index, prev, dest);
        if (options.trimSpace === "move" && dest !== prev && position === getPosition()) {
          Components2.Controller.go(dest > prev ? ">" : "<", false, callback);
        } else {
          callback && callback();
        }
      });
    }
  }
  function jump(index) {
    translate(toPosition(index, true));
  }
  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      const destination = preventLoop ? position : loop(position);
      list.style.transform = `translate${resolve("X")}(${destination}px)`;
      position !== destination && emit(EVENT_SHIFTED);
    }
  }
  function loop(position) {
    if (Splide2.is(LOOP)) {
      const diff = orient(position - getPosition());
      const exceededMin = exceededLimit(false, position) && diff < 0;
      const exceededMax = exceededLimit(true, position) && diff > 0;
      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }
    return position;
  }
  function shift(position, backwards) {
    const excess = position - getLimit(backwards);
    const size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }
  function cancel() {
    translate(getPosition());
    Transition.cancel();
  }
  function toIndex(position) {
    const Slides = Components2.Slides.get();
    let index = 0;
    let minDistance = Infinity;
    for (let i = 0; i < Slides.length; i++) {
      const slideIndex = Slides[i].index;
      const distance = abs(toPosition(slideIndex, true) - position);
      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }
    return index;
  }
  function toPosition(index, trimming) {
    const position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }
  function getPosition() {
    const left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }
  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize() - listSize()));
    }
    return position;
  }
  function offset(index) {
    const { focus } = options;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }
  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }
  function isBusy() {
    return Splide2.state.is(MOVING) && options.waitForTransition;
  }
  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    const exceededMin = max !== true && orient(position) < orient(getLimit(false));
    const exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }
  return {
    mount,
    destroy,
    move,
    jump,
    translate,
    shift,
    cancel,
    toIndex,
    toPosition,
    getPosition,
    getLimit,
    isBusy,
    exceededLimit
  };
}

function Controller(Splide2, Components2, options) {
  const { on } = EventInterface(Splide2);
  const { Move } = Components2;
  const { getPosition, getLimit } = Move;
  const { isEnough, getLength } = Components2.Slides;
  const isLoop = Splide2.is(LOOP);
  const isSlide = Splide2.is(SLIDE);
  let currIndex = options.start || 0;
  let prevIndex = currIndex;
  let slideCount;
  let perMove;
  let perPage;
  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH], init, DEFAULT_EVENT_PRIORITY - 1);
  }
  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    currIndex = clamp(currIndex, 0, slideCount - 1);
  }
  function go(control, allowSameIndex, callback) {
    const dest = parse(control);
    if (options.useScroll) {
      scroll(dest, true, true, options.speed, callback);
    } else {
      const index = loop(dest);
      if (index > -1 && !Move.isBusy() && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }
  function scroll(destination, useIndex, snap, duration, callback) {
    const dest = useIndex ? destination : toDest(destination);
    Components2.Scroll.scroll(useIndex || snap ? Move.toPosition(dest, true) : destination, duration, () => {
      setIndex(Move.toIndex(Move.getPosition()));
      callback && callback();
    });
  }
  function parse(control) {
    let index = currIndex;
    if (isString(control)) {
      const [, indicator, number] = control.match(/([+\-<>])(\d+)?/) || [];
      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +`${indicator}${+number || 1}`, currIndex, true);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, getEnd());
    }
    return index;
  }
  function getNext(destination) {
    return getAdjacent(false, destination);
  }
  function getPrev(destination) {
    return getAdjacent(true, destination);
  }
  function getAdjacent(prev, destination) {
    const number = perMove || (hasFocus() ? 1 : perPage);
    const dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex);
    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : getEnd();
      }
    }
    return destination ? dest : loop(dest);
  }
  function computeDestIndex(dest, from, incremental) {
    if (isEnough()) {
      const end = getEnd();
      if (dest < 0 || dest > end) {
        if (between(0, dest, from, true) || between(end, from, dest, true)) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = perMove || hasFocus() ? dest : dest < 0 ? -(slideCount % perPage || perPage) : slideCount;
          } else if (options.rewind) {
            dest = dest < 0 ? end : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (!incremental && dest !== from) {
          dest = perMove ? dest : toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }
    return dest;
  }
  function getEnd() {
    let end = slideCount - perPage;
    if (hasFocus() || isLoop && perMove) {
      end = slideCount - 1;
    }
    return max(end, 0);
  }
  function loop(index) {
    if (isLoop) {
      return isEnough() ? index % slideCount + (index < 0 ? slideCount : 0) : -1;
    }
    return index;
  }
  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, getEnd());
  }
  function toPage(index) {
    if (!hasFocus()) {
      index = between(index, slideCount - perPage, slideCount - 1) ? slideCount - 1 : index;
      index = floor(index / perPage);
    }
    return index;
  }
  function toDest(destination) {
    const closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, getEnd()) : closest;
  }
  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }
  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }
  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }
  return {
    mount,
    go,
    scroll,
    getNext,
    getPrev,
    getAdjacent,
    getEnd,
    setIndex,
    getIndex,
    toIndex,
    toPage,
    toDest,
    hasFocus
  };
}

const XML_NAME_SPACE = "http://www.w3.org/2000/svg";
const PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
const SIZE = 40;

function Arrows(Splide2, Components2, options) {
  const { on, bind, emit } = EventInterface(Splide2);
  const { classes, i18n } = options;
  const { Elements, Controller } = Components2;
  let wrapper = Elements.arrows;
  let prev = Elements.prev;
  let next = Elements.next;
  let created;
  const arrows = {};
  function mount() {
    init();
    on(EVENT_UPDATED, init);
  }
  function init() {
    if (options.arrows) {
      if (!prev || !next) {
        createArrows();
      }
    }
    if (prev && next) {
      if (!arrows.prev) {
        const { id } = Elements.track;
        setAttribute(prev, ARIA_CONTROLS, id);
        setAttribute(next, ARIA_CONTROLS, id);
        arrows.prev = prev;
        arrows.next = next;
        listen();
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      } else {
        display(wrapper, options.arrows === false ? "none" : "");
      }
    }
  }
  function destroy() {
    if (created) {
      remove(wrapper);
    } else {
      removeAttribute(prev, ALL_ATTRIBUTES);
      removeAttribute(next, ALL_ATTRIBUTES);
    }
  }
  function listen() {
    const { go } = Controller;
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_UPDATED, EVENT_REFRESH, EVENT_SCROLLED], update);
    bind(next, "click", () => {
      go(">", true);
    });
    bind(prev, "click", () => {
      go("<", true);
    });
  }
  function createArrows() {
    wrapper = create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    before(wrapper, child(options.arrows === "slider" && Elements.slider || Splide2.root));
  }
  function createArrow(prev2) {
    const arrow = `<button class="${classes.arrow} ${prev2 ? classes.prev : classes.next}" type="button"><svg xmlns="${XML_NAME_SPACE}" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}"><path d="${options.arrowPath || PATH}" />`;
    return parseHtml(arrow);
  }
  function update() {
    const index = Splide2.index;
    const prevIndex = Controller.getPrev();
    const nextIndex = Controller.getNext();
    const prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    const nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    prev.disabled = prevIndex < 0;
    next.disabled = nextIndex < 0;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
    emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
  }
  return {
    arrows,
    mount,
    destroy
  };
}

const INTERVAL_DATA_ATTRIBUTE = `${DATA_ATTRIBUTE}-interval`;

function Autoplay(Splide2, Components2, options) {
  const { on, bind, emit } = EventInterface(Splide2);
  const interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), update);
  const { isPaused } = interval;
  const { Elements } = Components2;
  let hovered;
  let focused;
  let paused;
  function mount() {
    const { autoplay } = options;
    if (autoplay) {
      initButton(true);
      initButton(false);
      listen();
      if (autoplay !== "pause") {
        play();
      }
    }
  }
  function initButton(forPause) {
    const prop = forPause ? "pause" : "play";
    const button = Elements[prop];
    if (button) {
      setAttribute(button, ARIA_CONTROLS, Elements.track.id);
      setAttribute(button, ARIA_LABEL, options.i18n[prop]);
      bind(button, "click", forPause ? pause : play);
    }
  }
  function listen() {
    const { root } = Elements;
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", (e) => {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }
    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", (e) => {
        focused = e.type === "focusin";
        autoToggle();
      });
    }
    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, updateInterval);
  }
  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = paused = false;
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }
  function pause(manual = true) {
    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
    paused = manual;
  }
  function autoToggle() {
    if (!paused) {
      if (!hovered && !focused) {
        play();
      } else {
        pause(false);
      }
    }
  }
  function update(rate) {
    const { bar } = Elements;
    bar && style(bar, "width", `${rate * 100}%`);
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }
  function updateInterval() {
    const Slide = Components2.Slides.getAt(Splide2.index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }
  return {
    mount,
    destroy: interval.cancel,
    play,
    pause,
    isPaused
  };
}

function Cover(Splide2, Components2, options) {
  const { on } = EventInterface(Splide2);
  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, (img, Slide) => {
        toggle(true, img, Slide);
      });
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply.bind(null, true));
    }
  }
  function destroy() {
    apply(false);
  }
  function apply(cover) {
    Components2.Slides.forEach((Slide) => {
      const img = child(Slide.container || Slide.slide, "img");
      if (img && img.src) {
        toggle(cover, img, Slide);
      }
    });
  }
  function toggle(cover, img, Slide) {
    Slide.style("background", cover ? `center/cover no-repeat url("${img.src}")` : "", true);
    display(img, cover ? "none" : "");
  }
  return {
    mount,
    destroy
  };
}

const BOUNCE_DIFF_THRESHOLD = 10;
const BOUNCE_DURATION = 600;
const FRICTION_FACTOR = 0.6;
const BASE_VELOCITY = 1.5;
const MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  const { on, emit } = EventInterface(Splide2);
  const { Move } = Components2;
  const { getPosition, getLimit, exceededLimit } = Move;
  let interval;
  let scrollCallback;
  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }
  function scroll(destination, duration, callback, suppressConstraint) {
    const start = getPosition();
    let friction = 1;
    duration = duration || computeDuration(abs(destination - start));
    scrollCallback = callback;
    clear();
    interval = RequestInterval(duration, onScrolled, (rate) => {
      const position = getPosition();
      const target = start + (destination - start) * easing(rate);
      const diff = (target - getPosition()) * friction;
      Move.translate(position + diff);
      if (Splide2.is(SLIDE) && !suppressConstraint && exceededLimit()) {
        friction *= FRICTION_FACTOR;
        if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
          bounce(exceededLimit(false));
        }
      }
    }, 1);
    emit(EVENT_SCROLL);
    interval.start();
  }
  function bounce(backwards) {
    scroll(getLimit(!backwards), BOUNCE_DURATION, null, true);
  }
  function onScrolled() {
    const position = getPosition();
    const index = Move.toIndex(position);
    if (!between(index, 0, Splide2.length - 1)) {
      Move.translate(Move.shift(position, index > 0), true);
    }
    scrollCallback && scrollCallback();
    emit(EVENT_SCROLLED);
  }
  function computeDuration(distance) {
    return max(distance / BASE_VELOCITY, MIN_DURATION);
  }
  function clear() {
    if (interval) {
      interval.cancel();
    }
  }
  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onScrolled();
    }
  }
  function easing(t) {
    const { easingFunc } = options;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }
  return {
    mount,
    destroy: clear,
    scroll,
    cancel
  };
}

const SCROLL_LISTENER_OPTIONS = { passive: false, capture: true };

const FRICTION = 5;
const LOG_INTERVAL = 200;
const POINTER_DOWN_EVENTS = "touchstart mousedown";
const POINTER_MOVE_EVENTS = "touchmove mousemove";
const POINTER_UP_EVENTS = "touchend touchcancel mouseup";

function Drag(Splide2, Components2, options) {
  const { on, emit, bind, unbind } = EventInterface(Splide2);
  const { Move, Scroll, Controller } = Components2;
  const { track } = Components2.Elements;
  const { resolve, orient } = Components2.Direction;
  const { getPosition, exceededLimit } = Move;
  let basePosition;
  let baseEvent;
  let prevBaseEvent;
  let lastEvent;
  let isFree;
  let dragging;
  let hasExceeded = false;
  let clickPrevented;
  let disabled;
  let target;
  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, { capture: true });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }
  function init() {
    const { drag } = options;
    disable(!drag);
    isFree = drag === "free";
  }
  function onPointerDown(e) {
    if (!disabled) {
      const { noDrag } = options;
      const isTouch = isTouchEvent(e);
      const isDraggable = !noDrag || !matches(e.target, noDrag);
      clickPrevented = false;
      if (isDraggable && (isTouch || !e.button)) {
        if (!Move.isBusy()) {
          target = isTouch ? track : window;
          prevBaseEvent = null;
          lastEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }
  function onPointerMove(e) {
    if (!lastEvent) {
      emit(EVENT_DRAG);
    }
    lastEvent = e;
    if (e.cancelable) {
      const diff = coordOf(e) - coordOf(baseEvent);
      if (dragging) {
        Move.translate(basePosition + constrain(diff));
        const expired = timeOf(e) - timeOf(baseEvent) > LOG_INTERVAL;
        const exceeded = hasExceeded !== (hasExceeded = exceededLimit());
        if (expired || exceeded) {
          save(e);
        }
        emit(EVENT_DRAGGING);
        clickPrevented = true;
        prevent(e);
      } else {
        let { dragMinThreshold: thresholds } = options;
        thresholds = isObject(thresholds) ? thresholds : { mouse: 0, touch: +thresholds || 10 };
        dragging = abs(diff) > (isTouchEvent(e) ? thresholds.touch : thresholds.mouse);
        if (isSliderDirection()) {
          prevent(e);
        }
      }
    }
  }
  function onPointerUp(e) {
    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    const { index } = Splide2;
    if (lastEvent) {
      if (dragging || e.cancelable && isSliderDirection()) {
        const velocity = computeVelocity(e);
        const destination = computeDestination(velocity);
        if (isFree) {
          Controller.scroll(destination);
        } else if (Splide2.is(FADE)) {
          Controller.go(index + orient(sign(velocity)));
        } else {
          Controller.go(Controller.toDest(destination), true);
        }
        prevent(e);
      }
      emit(EVENT_DRAGGED);
    } else {
      if (!isFree && getPosition() !== Move.toPosition(index)) {
        Controller.go(index, true);
      }
    }
    dragging = false;
  }
  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }
  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }
  function isSliderDirection() {
    const diffX = abs(coordOf(lastEvent) - coordOf(baseEvent));
    const diffY = abs(coordOf(lastEvent, true) - coordOf(baseEvent, true));
    return diffX > diffY;
  }
  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !hasExceeded) {
      const base = baseEvent === lastEvent && prevBaseEvent || baseEvent;
      const diffCoord = coordOf(lastEvent) - coordOf(base);
      const diffTime = timeOf(e) - timeOf(base);
      const isFlick = timeOf(e) - timeOf(lastEvent) < LOG_INTERVAL;
      if (diffTime && isFlick) {
        return diffCoord / diffTime;
      }
    }
    return 0;
  }
  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }
  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.touches[0] : e)[`page${resolve(orthogonal ? "Y" : "X")}`];
  }
  function timeOf(e) {
    return e.timeStamp;
  }
  function constrain(diff) {
    return diff / (hasExceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }
  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }
  function isDragging() {
    return dragging;
  }
  function disable(value) {
    disabled = value;
  }
  return {
    mount,
    disable,
    isDragging
  };
}

const IE_ARROW_KEYS = ["Left", "Right", "Up", "Down"];
const KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
  const { on, bind, unbind } = EventInterface(Splide2);
  const { root } = Splide2;
  const { resolve } = Components2.Direction;
  let target;
  let disabled;
  function mount() {
    init();
    on(EVENT_UPDATED, onUpdated);
    on(EVENT_MOVE, onMove);
  }
  function init() {
    const { keyboard } = options;
    if (keyboard) {
      if (keyboard === "focused") {
        target = root;
        setAttribute(root, TAB_INDEX, 0);
      } else {
        target = window;
      }
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }
  function destroy() {
    unbind(target, KEYBOARD_EVENT);
    if (isHTMLElement(target)) {
      removeAttribute(target, TAB_INDEX);
    }
  }
  function disable(value) {
    disabled = value;
  }
  function onMove() {
    const _disabled = disabled;
    disabled = true;
    nextTick(() => {
      disabled = _disabled;
    });
  }
  function onUpdated() {
    destroy();
    init();
  }
  function onKeydown(e) {
    if (!disabled) {
      const { key } = e;
      const normalizedKey = includes(IE_ARROW_KEYS, key) ? `Arrow${key}` : key;
      if (normalizedKey === resolve("ArrowLeft")) {
        Splide2.go("<");
      } else if (normalizedKey === resolve("ArrowRight")) {
        Splide2.go(">");
      }
    }
  }
  return {
    mount,
    destroy,
    disable
  };
}

const SRC_DATA_ATTRIBUTE = `${DATA_ATTRIBUTE}-lazy`;
const SRCSET_DATA_ATTRIBUTE = `${SRC_DATA_ATTRIBUTE}-srcset`;
const IMAGE_SELECTOR = `[${SRC_DATA_ATTRIBUTE}], [${SRCSET_DATA_ATTRIBUTE}]`;

function LazyLoad(Splide2, Components2, options) {
  const { on, off, bind, emit } = EventInterface(Splide2);
  const isSequential = options.lazyLoad === "sequential";
  let images = [];
  let index = 0;
  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, refresh);
      if (!isSequential) {
        on([EVENT_MOUNTED, EVENT_REFRESH, EVENT_MOVED, EVENT_SCROLLED], observe);
      }
    }
  }
  function refresh() {
    destroy();
    init();
  }
  function init() {
    Components2.Slides.forEach((_Slide) => {
      queryAll(_Slide.slide, IMAGE_SELECTOR).forEach((_img) => {
        const src = getAttribute(_img, SRC_DATA_ATTRIBUTE);
        const srcset = getAttribute(_img, SRCSET_DATA_ATTRIBUTE);
        if (src !== _img.src || srcset !== _img.srcset) {
          const className = options.classes.spinner;
          const parent = _img.parentElement;
          const _spinner = child(parent, `.${className}`) || create("span", className, parent);
          setAttribute(_spinner, ROLE, "presentation");
          images.push({ _img, _Slide, src, srcset, _spinner });
          !_img.src && display(_img, "none");
        }
      });
    });
    if (isSequential) {
      loadNext();
    }
  }
  function destroy() {
    index = 0;
    images = [];
  }
  function observe() {
    images = images.filter((data) => {
      const distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      if (data._Slide.isWithin(Splide2.index, distance)) {
        return load(data);
      }
      return true;
    });
    if (!images.length) {
      off(EVENT_MOVED);
    }
  }
  function load(data) {
    const { _img } = data;
    addClass(data._Slide.slide, CLASS_LOADING);
    bind(_img, "load error", (e) => {
      onLoad(data, e.type === "error");
    });
    ["srcset", "src"].forEach((name) => {
      if (data[name]) {
        setAttribute(_img, name, data[name]);
        removeAttribute(_img, name === "src" ? SRC_DATA_ATTRIBUTE : SRCSET_DATA_ATTRIBUTE);
      }
    });
  }
  function onLoad(data, error) {
    const { _Slide } = data;
    removeClass(_Slide.slide, CLASS_LOADING);
    if (!error) {
      remove(data._spinner);
      display(data._img, "");
      emit(EVENT_LAZYLOAD_LOADED, data._img, _Slide);
      emit(EVENT_RESIZE);
    }
    if (isSequential) {
      loadNext();
    }
  }
  function loadNext() {
    if (index < images.length) {
      load(images[index++]);
    }
  }
  return {
    mount,
    destroy
  };
}

function Pagination(Splide2, Components2, options) {
  const { on, emit, bind, unbind } = EventInterface(Splide2);
  const { Slides, Elements, Controller } = Components2;
  const { hasFocus, getIndex } = Controller;
  const items = [];
  let list;
  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on([EVENT_MOVE, EVENT_SCROLLED], update);
  }
  function init() {
    destroy();
    if (options.pagination && Slides.isEnough()) {
      createPagination();
      emit(EVENT_PAGINATION_MOUNTED, { list, items }, getAt(Splide2.index));
      update();
    }
  }
  function destroy() {
    if (list) {
      remove(list);
      items.forEach((item) => {
        unbind(item.button, "click");
      });
      empty(items);
      list = null;
    }
  }
  function createPagination() {
    const { length } = Splide2;
    const { classes, i18n, perPage } = options;
    const parent = options.pagination === "slider" && Elements.slider || Elements.root;
    const max = hasFocus() ? length : ceil(length / perPage);
    list = create("ul", classes.pagination, parent);
    for (let i = 0; i < max; i++) {
      const li = create("li", null, list);
      const button = create("button", { class: classes.page, type: "button" }, li);
      const controls = Slides.getIn(i).map((Slide) => Slide.slide.id);
      const text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", onClick.bind(null, i));
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      items.push({ li, button, page: i });
    }
  }
  function onClick(page) {
    Controller.go(`>${page}`, true, () => {
      const Slide = Slides.getAt(Controller.toIndex(page));
      Slide && focus(Slide.slide);
    });
  }
  function getAt(index) {
    return items[Controller.toPage(index)];
  }
  function update() {
    const prev = getAt(getIndex(true));
    const curr = getAt(getIndex());
    if (prev) {
      removeClass(prev.button, CLASS_ACTIVE);
      removeAttribute(prev.button, ARIA_CURRENT);
    }
    if (curr) {
      addClass(curr.button, CLASS_ACTIVE);
      setAttribute(curr.button, ARIA_CURRENT, true);
    }
    emit(EVENT_PAGINATION_UPDATED, { list, items }, prev, curr);
  }
  return {
    items,
    mount,
    destroy,
    getAt,
    update
  };
}

const TRIGGER_KEYS = [" ", "Enter", "Spacebar"];
function Sync(Splide2, Components2, options) {
  const { list } = Components2.Elements;
  const events = [];
  function mount() {
    Splide2.splides.forEach((target) => {
      !target.isParent && sync(target.splide);
    });
    if (options.isNavigation) {
      navigate();
    }
  }
  function destroy() {
    removeAttribute(list, ALL_ATTRIBUTES);
    events.forEach((event) => {
      event.destroy();
    });
    empty(events);
  }
  function remount() {
    destroy();
    mount();
  }
  function sync(splide) {
    [Splide2, splide].forEach((instance) => {
      const event = EventInterface(instance);
      const target = instance === Splide2 ? splide : Splide2;
      event.on(EVENT_MOVE, (index, prev, dest) => {
        target.go(target.is(LOOP) ? dest : index);
      });
      events.push(event);
    });
  }
  function navigate() {
    const event = EventInterface(Splide2);
    const { on } = event;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    setAttribute(list, ROLE, "menu");
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }
  function update() {
    setAttribute(list, ARIA_ORIENTATION, options.direction !== TTB ? "horizontal" : null);
  }
  function onClick(Slide) {
    Splide2.go(Slide.index);
  }
  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, e.key)) {
      onClick(Slide);
      prevent(e);
    }
  }
  return {
    mount,
    destroy,
    remount
  };
}

function Wheel(Splide2, Components2, options) {
  const { bind } = EventInterface(Splide2);
  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }
  function onWheel(e) {
    if (e.cancelable) {
      const { deltaY } = e;
      if (deltaY) {
        const backwards = deltaY < 0;
        Splide2.go(backwards ? "<" : ">");
        shouldPrevent(backwards) && prevent(e);
      }
    }
  }
  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }
  return {
    mount
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Options: Options,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel
});

const I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay"
};

const DEFAULTS = {
  type: "slide",
  speed: 400,
  waitForTransition: true,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  keyboard: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  slideFocus: true,
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  classes: CLASSES,
  i18n: I18N
};

function Fade(Splide2, Components2, options) {
  const { on } = EventInterface(Splide2);
  function mount() {
    on([EVENT_MOUNTED, EVENT_REFRESH], () => {
      nextTick(() => {
        Components2.Slides.style("transition", `opacity ${options.speed}ms ${options.easing}`);
      });
    });
  }
  function start(index, done) {
    const { track } = Components2.Elements;
    style(track, "height", unit(rect(track).height));
    nextTick(() => {
      done();
      style(track, "height", "");
    });
  }
  return {
    mount,
    start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  const { bind } = EventInterface(Splide2);
  const { Move, Controller } = Components2;
  const { list } = Components2.Elements;
  let endCallback;
  function mount() {
    bind(list, "transitionend", (e) => {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }
  function start(index, done) {
    const destination = Move.toPosition(index, true);
    const position = Move.getPosition();
    const speed = getSpeed(index);
    if (abs(destination - position) >= 1 && speed >= 1) {
      apply(`transform ${speed}ms ${options.easing}`);
      Move.translate(destination, true);
      endCallback = done;
    } else {
      Move.jump(index);
      done();
    }
  }
  function cancel() {
    apply("");
  }
  function getSpeed(index) {
    const { rewindSpeed } = options;
    if (Splide2.is(SLIDE) && rewindSpeed) {
      const prev = Controller.getIndex(true);
      const end = Controller.getEnd();
      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }
    return options.speed;
  }
  function apply(transition) {
    style(list, "transition", transition);
  }
  return {
    mount,
    start,
    cancel
  };
}

const _Splide = class {
  constructor(target, options) {
    this.event = EventBus();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._options = {};
    this._Extensions = {};
    const root = isString(target) ? query(document, target) : target;
    assert(root, `${root} is invalid.`);
    this.root = root;
    merge(DEFAULTS, _Splide.defaults);
    merge(merge(this._options, DEFAULTS), options || {});
  }
  mount(Extensions, Transition) {
    const { state, Components: Components2 } = this;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._Components = Components2;
    this._Transition = Transition || this._Transition || (this.is(FADE) ? Fade : Slide);
    this._Extensions = Extensions || this._Extensions;
    const Constructors = assign({}, ComponentConstructors, this._Extensions, { Transition: this._Transition });
    forOwn(Constructors, (Component, key) => {
      const component = Component(this, Components2, this._options);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, (component) => {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  }
  sync(splide) {
    this.splides.push({ splide });
    splide.splides.push({ splide: this, isParent: true });
    if (this.state.is(IDLE)) {
      this._Components.Sync.remount();
      splide.Components.Sync.remount();
    }
    return this;
  }
  go(control) {
    this._Components.Controller.go(control);
    return this;
  }
  on(events, callback) {
    this.event.on(events, callback, null, DEFAULT_USER_EVENT_PRIORITY);
    return this;
  }
  off(events) {
    this.event.off(events);
    return this;
  }
  emit(event) {
    this.event.emit(event, ...slice(arguments, 1));
    return this;
  }
  add(slides, index) {
    this._Components.Slides.add(slides, index);
    return this;
  }
  remove(matcher) {
    this._Components.Slides.remove(matcher);
    return this;
  }
  is(type) {
    return this._options.type === type;
  }
  refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  }
  destroy(completely = true) {
    const { event, state } = this;
    if (state.is(CREATED)) {
      event.on(EVENT_READY, this.destroy.bind(this, completely), this);
    } else {
      forOwn(this._Components, (component) => {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }
    return this;
  }
  get options() {
    return this._options;
  }
  set options(options) {
    const { _options } = this;
    merge(_options, options);
    if (!this.state.is(CREATED)) {
      this.emit(EVENT_UPDATED, _options);
    }
  }
  get length() {
    return this._Components.Slides.getLength(true);
  }
  get index() {
    return this._Components.Controller.getIndex();
  }
};
let Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;

const CLASS_RENDERED = "is-rendered";

const RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

class Style {
  constructor(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }
  rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    const selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    const styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  }
  build() {
    let css = "";
    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }
    Object.keys(this.styles).sort((n, m) => this.options.mediaQuery === "min" ? +n - +m : +m - +n).forEach((breakpoint) => {
      if (breakpoint !== "default") {
        css += `@media screen and (max-width: ${breakpoint}px) {`;
        css += this.buildSelectors(this.styles[breakpoint]);
        css += `}`;
      }
    });
    return css;
  }
  buildSelectors(selectors) {
    let css = "";
    forOwn(selectors, (styles, selector) => {
      selector = `#${this.id} ${selector}`.trim();
      css += `${selector} {`;
      forOwn(styles, (value, prop) => {
        if (value || value === 0) {
          css += `${prop}: ${value};`;
        }
      });
      css += "}";
    });
    return css;
  }
}

class SplideRenderer {
  constructor(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }
  static clean(splide) {
    const { on } = EventInterface(splide);
    const { root } = splide;
    const clones = queryAll(root, `.${CLASS_CLONE}`);
    on(EVENT_MOUNTED, () => {
      remove(child(root, "style"));
    });
    remove(clones);
  }
  init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  }
  initSlides() {
    push(this.slides, this.contents.map((content, index) => {
      content = isString(content) ? { html: content } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};
      this.cover(content);
      const classes = `${this.options.classes.slide} ${index === 0 ? CLASS_ACTIVE : ""}`;
      assign(content.attrs, {
        class: `${classes} ${content.attrs.class || ""}`.trim(),
        style: this.buildStyles(content.styles)
      });
      return content;
    }));
    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  }
  registerRootStyles() {
    this.breakpoints.forEach(([width, options]) => {
      this.Style.rule(" ", "max-width", unit(options.width), width);
    });
  }
  registerTrackStyles() {
    const { Style: Style2 } = this;
    const selector = `.${CLASS_TRACK}`;
    this.breakpoints.forEach(([width, options]) => {
      Style2.rule(selector, this.resolve("paddingLeft"), this.cssPadding(options, false), width);
      Style2.rule(selector, this.resolve("paddingRight"), this.cssPadding(options, true), width);
      Style2.rule(selector, "height", this.cssTrackHeight(options), width);
    });
  }
  registerListStyles() {
    const { Style: Style2 } = this;
    const selector = `.${CLASS_LIST}`;
    this.breakpoints.forEach(([width, options]) => {
      Style2.rule(selector, "transform", this.buildTranslate(options), width);
      if (!this.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", this.cssAspectRatio(options), width);
      }
    });
  }
  registerSlideStyles() {
    const { Style: Style2 } = this;
    const selector = `.${CLASS_SLIDE}`;
    this.breakpoints.forEach(([width, options]) => {
      Style2.rule(selector, "width", this.cssSlideWidth(options), width);
      Style2.rule(selector, "height", this.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, this.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(`${selector} > img`, "display", options.cover ? "none" : "inline", width);
    });
  }
  buildTranslate(options) {
    const { resolve, orient } = this.Direction;
    const values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));
    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push(...this.cssOffsetCenter(options));
    }
    return values.filter(Boolean).map((value) => `translate${resolve("X")}(${value})`).join(" ");
  }
  cssOffsetClones(options) {
    const { resolve, orient } = this.Direction;
    const cloneCount = this.getCloneCount();
    if (this.isFixedWidth(options)) {
      const { value, unit: unit2 } = this.parseCssValue(options[resolve("fixedWidth")]);
      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }
    const percent = 100 * cloneCount / options.perPage;
    return `${orient(percent)}%`;
  }
  cssOffsetCenter(options) {
    const { resolve, orient } = this.Direction;
    if (this.isFixedWidth(options)) {
      const { value, unit: unit2 } = this.parseCssValue(options[resolve("fixedWidth")]);
      return [this.buildCssValue(orient(value / 2), unit2)];
    }
    const values = [];
    const { perPage, gap } = options;
    values.push(`${orient(50 / perPage)}%`);
    if (gap) {
      const { value, unit: unit2 } = this.parseCssValue(gap);
      const gapOffset = (value / perPage - value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), unit2));
    }
    return values;
  }
  cssOffsetGaps(options) {
    const cloneCount = this.getCloneCount();
    if (cloneCount && options.gap) {
      const { orient } = this.Direction;
      const { value, unit: unit2 } = this.parseCssValue(options.gap);
      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }
      const { perPage } = options;
      const gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }
    return "";
  }
  resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  }
  cssPadding(options, right) {
    const { padding } = options;
    const prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }
  cssTrackHeight(options) {
    let height = "";
    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = `calc(${height} - ${this.cssPadding(options, false)} - ${this.cssPadding(options, true)})`;
    }
    return height;
  }
  cssHeight(options) {
    return unit(options.height);
  }
  cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  }
  cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  }
  cssSlideSize(options) {
    const gap = unit(options.gap);
    return `calc((100%${gap && ` + ${gap}`})/${options.perPage || 1}${gap && ` - ${gap}`})`;
  }
  cssAspectRatio(options) {
    const { heightRatio } = options;
    return heightRatio ? `${1 / heightRatio}` : "";
  }
  buildCssValue(value, unit2) {
    return `${value}${unit2}`;
  }
  parseCssValue(value) {
    if (isString(value)) {
      const number = parseFloat(value) || 0;
      const unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return { value: number, unit: unit2 };
    }
    return { value, unit: "px" };
  }
  parseBreakpoints() {
    const { breakpoints } = this.options;
    this.breakpoints.push(["default", this.options]);
    if (breakpoints) {
      forOwn(breakpoints, (options, width) => {
        this.breakpoints.push([width, merge(merge({}, this.options), options)]);
      });
    }
  }
  isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  }
  isLoop() {
    return this.options.type === LOOP;
  }
  isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }
      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }
    return false;
  }
  isVertical() {
    return this.options.direction === TTB;
  }
  buildClasses() {
    const { options } = this;
    return [
      CLASS_ROOT,
      `${CLASS_ROOT}--${options.type}`,
      `${CLASS_ROOT}--${options.direction}`,
      options.drag && `${CLASS_ROOT}--draggable`,
      options.isNavigation && `${CLASS_ROOT}--nav`,
      CLASS_ACTIVE,
      !this.config.hidden && CLASS_RENDERED
    ].filter(Boolean).join(" ");
  }
  buildAttrs(attrs) {
    let attr = "";
    forOwn(attrs, (value, key) => {
      attr += value ? ` ${camelToKebab(key)}="${value}"` : "";
    });
    return attr.trim();
  }
  buildStyles(styles) {
    let style = "";
    forOwn(styles, (value, key) => {
      style += ` ${camelToKebab(key)}:${value};`;
    });
    return style.trim();
  }
  renderSlides() {
    const { slideTag: tag } = this.config;
    return this.slides.map((content) => {
      return `<${tag} ${this.buildAttrs(content.attrs)}>${content.html || ""}</${tag}>`;
    }).join("");
  }
  cover(content) {
    const { styles, html = "" } = content;
    if (this.options.cover && !this.options.lazyLoad) {
      const src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
      if (src && src[2]) {
        styles.background = `center/cover no-repeat url('${src[2]}')`;
      }
    }
  }
  generateClones(contents) {
    const { classes } = this.options;
    const count = this.getCloneCount();
    const slides = contents.slice();
    while (slides.length < count) {
      push(slides, slides);
    }
    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach((content, index) => {
      const attrs = assign({}, content.attrs, { class: `${content.attrs.class} ${classes.clone}` });
      const clone = assign({}, content, { attrs });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  }
  getCloneCount() {
    if (this.isLoop()) {
      const { options } = this;
      if (options.clones) {
        return options.clones;
      }
      const perPage = max(...this.breakpoints.map(([, options2]) => options2.perPage));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }
    return 0;
  }
  renderArrows() {
    let html = "";
    html += `<div class="${this.options.classes.arrows}">`;
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += `</div>`;
    return html;
  }
  renderArrow(prev) {
    const { classes, i18n } = this.options;
    const attrs = {
      class: `${classes.arrow} ${prev ? classes.prev : classes.next}`,
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return `<button ${this.buildAttrs(attrs)}><svg xmlns="${XML_NAME_SPACE}" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}"><path d="${this.options.arrowPath || PATH}" /></svg></button>`;
  }
  html() {
    const { rootClass, listTag, arrows, beforeTrack, afterTrack, slider, beforeSlider, afterSlider } = this.config;
    let html = "";
    html += `<div id="${this.id}" class="${this.buildClasses()} ${rootClass || ""}">`;
    html += `<style>${this.Style.build()}</style>`;
    if (slider) {
      html += beforeSlider || "";
      html += `<div class="splide__slider">`;
    }
    html += beforeTrack || "";
    if (arrows) {
      html += this.renderArrows();
    }
    html += `<div class="splide__track">`;
    html += `<${listTag} class="splide__list">`;
    html += this.renderSlides();
    html += `</${listTag}>`;
    html += `</div>`;
    html += afterTrack || "";
    if (slider) {
      html += `</div>`;
      html += afterSlider || "";
    }
    html += `</div>`;
    return html;
  }
}




/***/ }),

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():0}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@splidejs/splide/dist/css/splide-core.min.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@splidejs/splide/dist/css/splide-core.min.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide--draggable>.splide__slider>.splide__track,.splide--draggable>.splide__track{-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide--fade>.splide__slider>.splide__track>.splide__list,.splide--fade>.splide__track>.splide__list{display:block}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide,.splide--fade>.splide__track>.splide__list>.splide__slide{left:0;opacity:0;position:absolute;top:0;z-index:0}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide.is-active,.splide--fade>.splide__track>.splide__list>.splide__slide.is-active{opacity:1;position:relative;z-index:1}.splide--rtl{direction:rtl}.splide--ttb.is-active>.splide__slider>.splide__track>.splide__list,.splide--ttb.is-active>.splide__track>.splide__list{display:block}.splide__container{box-sizing:border-box;position:relative}.splide__list{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important;transform-style:preserve-3d}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide__progress__bar{width:0}.splide{outline:none;position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;list-style-type:none!important;margin:0;outline:none;position:relative}.splide__slide img{vertical-align:bottom}.splide__slider{position:relative}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__track{overflow:hidden;position:relative;z-index:0}`, "",{"version":3,"sources":["webpack://./node_modules/@splidejs/splide/dist/css/splide-core.min.css"],"names":[],"mappings":"AAAA,0BAA0B,GAAG,mBAAmB,CAAC,GAAG,uBAAuB,CAAC,CAAC,oFAAoF,wBAAwB,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,sGAAsG,aAAa,CAAC,oIAAoI,MAAM,CAAC,SAAS,CAAC,iBAAiB,CAAC,KAAK,CAAC,SAAS,CAAC,wJAAwJ,SAAS,CAAC,iBAAiB,CAAC,SAAS,CAAC,aAAa,aAAa,CAAC,wHAAwH,aAAa,CAAC,mBAAmB,qBAAqB,CAAC,iBAAiB,CAAC,cAAc,kCAAkC,CAAC,0BAA0B,CAAC,mBAAmB,CAAC,YAAY,CAAC,WAAW,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,2BAA2B,CAAC,qDAAqD,aAAa,CAAC,oBAAoB,qBAAqB,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,YAAY,CAAC,kBAAkB,CAAC,cAAc,CAAC,oBAAoB,CAAC,sBAAsB,CAAC,QAAQ,CAAC,mBAAmB,CAAC,uBAAuB,oBAAoB,CAAC,aAAa,CAAC,oBAAoB,CAAC,QAAQ,CAAC,mBAAmB,CAAC,uBAAuB,OAAO,CAAC,QAAQ,YAAY,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,2CAA2C,kBAAkB,CAAC,eAAe,kCAAkC,CAAC,0BAA0B,CAAC,qBAAqB,CAAC,mBAAmB,CAAC,aAAa,CAAC,8BAA8B,CAAC,QAAQ,CAAC,YAAY,CAAC,iBAAiB,CAAC,mBAAmB,qBAAqB,CAAC,gBAAgB,iBAAiB,CAAC,iBAAiB,2CAA2C,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,iBAAiB,CAAC,QAAQ,CAAC,cAAc,CAAC,oBAAoB,CAAC,WAAW,CAAC,MAAM,CAAC,WAAW,CAAC,iBAAiB,CAAC,OAAO,CAAC,KAAK,CAAC,UAAU,CAAC,eAAe,eAAe,CAAC,iBAAiB,CAAC,SAAS","sourcesContent":["@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide--draggable>.splide__slider>.splide__track,.splide--draggable>.splide__track{-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide--fade>.splide__slider>.splide__track>.splide__list,.splide--fade>.splide__track>.splide__list{display:block}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide,.splide--fade>.splide__track>.splide__list>.splide__slide{left:0;opacity:0;position:absolute;top:0;z-index:0}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide.is-active,.splide--fade>.splide__track>.splide__list>.splide__slide.is-active{opacity:1;position:relative;z-index:1}.splide--rtl{direction:rtl}.splide--ttb.is-active>.splide__slider>.splide__track>.splide__list,.splide--ttb.is-active>.splide__track>.splide__list{display:block}.splide__container{box-sizing:border-box;position:relative}.splide__list{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important;transform-style:preserve-3d}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide__progress__bar{width:0}.splide{outline:none;position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;list-style-type:none!important;margin:0;outline:none;position:relative}.splide__slide img{vertical-align:bottom}.splide__slider{position:relative}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__track{overflow:hidden;position:relative;z-index:0}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/aos/dist/aos.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/aos/dist/aos.css ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-aos][data-aos][data-aos-duration="50"], body[data-aos-duration="50"] [data-aos] {
  -webkit-transition-duration: 50ms;
          transition-duration: 50ms; }

[data-aos][data-aos][data-aos-delay="50"], body[data-aos-delay="50"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="50"].aos-animate, body[data-aos-delay="50"] [data-aos].aos-animate {
  -webkit-transition-delay: 50ms;
          transition-delay: 50ms; }

[data-aos][data-aos][data-aos-duration="100"], body[data-aos-duration="100"] [data-aos] {
  -webkit-transition-duration: .1s;
          transition-duration: .1s; }

[data-aos][data-aos][data-aos-delay="100"], body[data-aos-delay="100"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="100"].aos-animate, body[data-aos-delay="100"] [data-aos].aos-animate {
  -webkit-transition-delay: .1s;
          transition-delay: .1s; }

[data-aos][data-aos][data-aos-duration="150"], body[data-aos-duration="150"] [data-aos] {
  -webkit-transition-duration: .15s;
          transition-duration: .15s; }

[data-aos][data-aos][data-aos-delay="150"], body[data-aos-delay="150"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="150"].aos-animate, body[data-aos-delay="150"] [data-aos].aos-animate {
  -webkit-transition-delay: .15s;
          transition-delay: .15s; }

[data-aos][data-aos][data-aos-duration="200"], body[data-aos-duration="200"] [data-aos] {
  -webkit-transition-duration: .2s;
          transition-duration: .2s; }

[data-aos][data-aos][data-aos-delay="200"], body[data-aos-delay="200"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="200"].aos-animate, body[data-aos-delay="200"] [data-aos].aos-animate {
  -webkit-transition-delay: .2s;
          transition-delay: .2s; }

[data-aos][data-aos][data-aos-duration="250"], body[data-aos-duration="250"] [data-aos] {
  -webkit-transition-duration: .25s;
          transition-duration: .25s; }

[data-aos][data-aos][data-aos-delay="250"], body[data-aos-delay="250"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="250"].aos-animate, body[data-aos-delay="250"] [data-aos].aos-animate {
  -webkit-transition-delay: .25s;
          transition-delay: .25s; }

[data-aos][data-aos][data-aos-duration="300"], body[data-aos-duration="300"] [data-aos] {
  -webkit-transition-duration: .3s;
          transition-duration: .3s; }

[data-aos][data-aos][data-aos-delay="300"], body[data-aos-delay="300"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="300"].aos-animate, body[data-aos-delay="300"] [data-aos].aos-animate {
  -webkit-transition-delay: .3s;
          transition-delay: .3s; }

[data-aos][data-aos][data-aos-duration="350"], body[data-aos-duration="350"] [data-aos] {
  -webkit-transition-duration: .35s;
          transition-duration: .35s; }

[data-aos][data-aos][data-aos-delay="350"], body[data-aos-delay="350"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="350"].aos-animate, body[data-aos-delay="350"] [data-aos].aos-animate {
  -webkit-transition-delay: .35s;
          transition-delay: .35s; }

[data-aos][data-aos][data-aos-duration="400"], body[data-aos-duration="400"] [data-aos] {
  -webkit-transition-duration: .4s;
          transition-duration: .4s; }

[data-aos][data-aos][data-aos-delay="400"], body[data-aos-delay="400"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="400"].aos-animate, body[data-aos-delay="400"] [data-aos].aos-animate {
  -webkit-transition-delay: .4s;
          transition-delay: .4s; }

[data-aos][data-aos][data-aos-duration="450"], body[data-aos-duration="450"] [data-aos] {
  -webkit-transition-duration: .45s;
          transition-duration: .45s; }

[data-aos][data-aos][data-aos-delay="450"], body[data-aos-delay="450"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="450"].aos-animate, body[data-aos-delay="450"] [data-aos].aos-animate {
  -webkit-transition-delay: .45s;
          transition-delay: .45s; }

[data-aos][data-aos][data-aos-duration="500"], body[data-aos-duration="500"] [data-aos] {
  -webkit-transition-duration: .5s;
          transition-duration: .5s; }

[data-aos][data-aos][data-aos-delay="500"], body[data-aos-delay="500"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="500"].aos-animate, body[data-aos-delay="500"] [data-aos].aos-animate {
  -webkit-transition-delay: .5s;
          transition-delay: .5s; }

[data-aos][data-aos][data-aos-duration="550"], body[data-aos-duration="550"] [data-aos] {
  -webkit-transition-duration: .55s;
          transition-duration: .55s; }

[data-aos][data-aos][data-aos-delay="550"], body[data-aos-delay="550"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="550"].aos-animate, body[data-aos-delay="550"] [data-aos].aos-animate {
  -webkit-transition-delay: .55s;
          transition-delay: .55s; }

[data-aos][data-aos][data-aos-duration="600"], body[data-aos-duration="600"] [data-aos] {
  -webkit-transition-duration: .6s;
          transition-duration: .6s; }

[data-aos][data-aos][data-aos-delay="600"], body[data-aos-delay="600"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="600"].aos-animate, body[data-aos-delay="600"] [data-aos].aos-animate {
  -webkit-transition-delay: .6s;
          transition-delay: .6s; }

[data-aos][data-aos][data-aos-duration="650"], body[data-aos-duration="650"] [data-aos] {
  -webkit-transition-duration: .65s;
          transition-duration: .65s; }

[data-aos][data-aos][data-aos-delay="650"], body[data-aos-delay="650"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="650"].aos-animate, body[data-aos-delay="650"] [data-aos].aos-animate {
  -webkit-transition-delay: .65s;
          transition-delay: .65s; }

[data-aos][data-aos][data-aos-duration="700"], body[data-aos-duration="700"] [data-aos] {
  -webkit-transition-duration: .7s;
          transition-duration: .7s; }

[data-aos][data-aos][data-aos-delay="700"], body[data-aos-delay="700"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="700"].aos-animate, body[data-aos-delay="700"] [data-aos].aos-animate {
  -webkit-transition-delay: .7s;
          transition-delay: .7s; }

[data-aos][data-aos][data-aos-duration="750"], body[data-aos-duration="750"] [data-aos] {
  -webkit-transition-duration: .75s;
          transition-duration: .75s; }

[data-aos][data-aos][data-aos-delay="750"], body[data-aos-delay="750"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="750"].aos-animate, body[data-aos-delay="750"] [data-aos].aos-animate {
  -webkit-transition-delay: .75s;
          transition-delay: .75s; }

[data-aos][data-aos][data-aos-duration="800"], body[data-aos-duration="800"] [data-aos] {
  -webkit-transition-duration: .8s;
          transition-duration: .8s; }

[data-aos][data-aos][data-aos-delay="800"], body[data-aos-delay="800"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="800"].aos-animate, body[data-aos-delay="800"] [data-aos].aos-animate {
  -webkit-transition-delay: .8s;
          transition-delay: .8s; }

[data-aos][data-aos][data-aos-duration="850"], body[data-aos-duration="850"] [data-aos] {
  -webkit-transition-duration: .85s;
          transition-duration: .85s; }

[data-aos][data-aos][data-aos-delay="850"], body[data-aos-delay="850"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="850"].aos-animate, body[data-aos-delay="850"] [data-aos].aos-animate {
  -webkit-transition-delay: .85s;
          transition-delay: .85s; }

[data-aos][data-aos][data-aos-duration="900"], body[data-aos-duration="900"] [data-aos] {
  -webkit-transition-duration: .9s;
          transition-duration: .9s; }

[data-aos][data-aos][data-aos-delay="900"], body[data-aos-delay="900"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="900"].aos-animate, body[data-aos-delay="900"] [data-aos].aos-animate {
  -webkit-transition-delay: .9s;
          transition-delay: .9s; }

[data-aos][data-aos][data-aos-duration="950"], body[data-aos-duration="950"] [data-aos] {
  -webkit-transition-duration: .95s;
          transition-duration: .95s; }

[data-aos][data-aos][data-aos-delay="950"], body[data-aos-delay="950"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="950"].aos-animate, body[data-aos-delay="950"] [data-aos].aos-animate {
  -webkit-transition-delay: .95s;
          transition-delay: .95s; }

[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos] {
  -webkit-transition-duration: 1s;
          transition-duration: 1s; }

[data-aos][data-aos][data-aos-delay="1000"], body[data-aos-delay="1000"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1000"].aos-animate, body[data-aos-delay="1000"] [data-aos].aos-animate {
  -webkit-transition-delay: 1s;
          transition-delay: 1s; }

[data-aos][data-aos][data-aos-duration="1050"], body[data-aos-duration="1050"] [data-aos] {
  -webkit-transition-duration: 1.05s;
          transition-duration: 1.05s; }

[data-aos][data-aos][data-aos-delay="1050"], body[data-aos-delay="1050"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1050"].aos-animate, body[data-aos-delay="1050"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.05s;
          transition-delay: 1.05s; }

[data-aos][data-aos][data-aos-duration="1100"], body[data-aos-duration="1100"] [data-aos] {
  -webkit-transition-duration: 1.1s;
          transition-duration: 1.1s; }

[data-aos][data-aos][data-aos-delay="1100"], body[data-aos-delay="1100"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1100"].aos-animate, body[data-aos-delay="1100"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.1s;
          transition-delay: 1.1s; }

[data-aos][data-aos][data-aos-duration="1150"], body[data-aos-duration="1150"] [data-aos] {
  -webkit-transition-duration: 1.15s;
          transition-duration: 1.15s; }

[data-aos][data-aos][data-aos-delay="1150"], body[data-aos-delay="1150"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1150"].aos-animate, body[data-aos-delay="1150"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.15s;
          transition-delay: 1.15s; }

[data-aos][data-aos][data-aos-duration="1200"], body[data-aos-duration="1200"] [data-aos] {
  -webkit-transition-duration: 1.2s;
          transition-duration: 1.2s; }

[data-aos][data-aos][data-aos-delay="1200"], body[data-aos-delay="1200"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1200"].aos-animate, body[data-aos-delay="1200"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.2s;
          transition-delay: 1.2s; }

[data-aos][data-aos][data-aos-duration="1250"], body[data-aos-duration="1250"] [data-aos] {
  -webkit-transition-duration: 1.25s;
          transition-duration: 1.25s; }

[data-aos][data-aos][data-aos-delay="1250"], body[data-aos-delay="1250"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1250"].aos-animate, body[data-aos-delay="1250"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.25s;
          transition-delay: 1.25s; }

[data-aos][data-aos][data-aos-duration="1300"], body[data-aos-duration="1300"] [data-aos] {
  -webkit-transition-duration: 1.3s;
          transition-duration: 1.3s; }

[data-aos][data-aos][data-aos-delay="1300"], body[data-aos-delay="1300"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1300"].aos-animate, body[data-aos-delay="1300"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.3s;
          transition-delay: 1.3s; }

[data-aos][data-aos][data-aos-duration="1350"], body[data-aos-duration="1350"] [data-aos] {
  -webkit-transition-duration: 1.35s;
          transition-duration: 1.35s; }

[data-aos][data-aos][data-aos-delay="1350"], body[data-aos-delay="1350"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1350"].aos-animate, body[data-aos-delay="1350"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.35s;
          transition-delay: 1.35s; }

[data-aos][data-aos][data-aos-duration="1400"], body[data-aos-duration="1400"] [data-aos] {
  -webkit-transition-duration: 1.4s;
          transition-duration: 1.4s; }

[data-aos][data-aos][data-aos-delay="1400"], body[data-aos-delay="1400"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1400"].aos-animate, body[data-aos-delay="1400"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.4s;
          transition-delay: 1.4s; }

[data-aos][data-aos][data-aos-duration="1450"], body[data-aos-duration="1450"] [data-aos] {
  -webkit-transition-duration: 1.45s;
          transition-duration: 1.45s; }

[data-aos][data-aos][data-aos-delay="1450"], body[data-aos-delay="1450"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1450"].aos-animate, body[data-aos-delay="1450"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.45s;
          transition-delay: 1.45s; }

[data-aos][data-aos][data-aos-duration="1500"], body[data-aos-duration="1500"] [data-aos] {
  -webkit-transition-duration: 1.5s;
          transition-duration: 1.5s; }

[data-aos][data-aos][data-aos-delay="1500"], body[data-aos-delay="1500"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1500"].aos-animate, body[data-aos-delay="1500"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.5s;
          transition-delay: 1.5s; }

[data-aos][data-aos][data-aos-duration="1550"], body[data-aos-duration="1550"] [data-aos] {
  -webkit-transition-duration: 1.55s;
          transition-duration: 1.55s; }

[data-aos][data-aos][data-aos-delay="1550"], body[data-aos-delay="1550"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1550"].aos-animate, body[data-aos-delay="1550"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.55s;
          transition-delay: 1.55s; }

[data-aos][data-aos][data-aos-duration="1600"], body[data-aos-duration="1600"] [data-aos] {
  -webkit-transition-duration: 1.6s;
          transition-duration: 1.6s; }

[data-aos][data-aos][data-aos-delay="1600"], body[data-aos-delay="1600"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1600"].aos-animate, body[data-aos-delay="1600"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.6s;
          transition-delay: 1.6s; }

[data-aos][data-aos][data-aos-duration="1650"], body[data-aos-duration="1650"] [data-aos] {
  -webkit-transition-duration: 1.65s;
          transition-duration: 1.65s; }

[data-aos][data-aos][data-aos-delay="1650"], body[data-aos-delay="1650"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1650"].aos-animate, body[data-aos-delay="1650"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.65s;
          transition-delay: 1.65s; }

[data-aos][data-aos][data-aos-duration="1700"], body[data-aos-duration="1700"] [data-aos] {
  -webkit-transition-duration: 1.7s;
          transition-duration: 1.7s; }

[data-aos][data-aos][data-aos-delay="1700"], body[data-aos-delay="1700"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1700"].aos-animate, body[data-aos-delay="1700"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.7s;
          transition-delay: 1.7s; }

[data-aos][data-aos][data-aos-duration="1750"], body[data-aos-duration="1750"] [data-aos] {
  -webkit-transition-duration: 1.75s;
          transition-duration: 1.75s; }

[data-aos][data-aos][data-aos-delay="1750"], body[data-aos-delay="1750"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1750"].aos-animate, body[data-aos-delay="1750"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.75s;
          transition-delay: 1.75s; }

[data-aos][data-aos][data-aos-duration="1800"], body[data-aos-duration="1800"] [data-aos] {
  -webkit-transition-duration: 1.8s;
          transition-duration: 1.8s; }

[data-aos][data-aos][data-aos-delay="1800"], body[data-aos-delay="1800"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1800"].aos-animate, body[data-aos-delay="1800"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.8s;
          transition-delay: 1.8s; }

[data-aos][data-aos][data-aos-duration="1850"], body[data-aos-duration="1850"] [data-aos] {
  -webkit-transition-duration: 1.85s;
          transition-duration: 1.85s; }

[data-aos][data-aos][data-aos-delay="1850"], body[data-aos-delay="1850"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1850"].aos-animate, body[data-aos-delay="1850"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.85s;
          transition-delay: 1.85s; }

[data-aos][data-aos][data-aos-duration="1900"], body[data-aos-duration="1900"] [data-aos] {
  -webkit-transition-duration: 1.9s;
          transition-duration: 1.9s; }

[data-aos][data-aos][data-aos-delay="1900"], body[data-aos-delay="1900"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1900"].aos-animate, body[data-aos-delay="1900"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.9s;
          transition-delay: 1.9s; }

[data-aos][data-aos][data-aos-duration="1950"], body[data-aos-duration="1950"] [data-aos] {
  -webkit-transition-duration: 1.95s;
          transition-duration: 1.95s; }

[data-aos][data-aos][data-aos-delay="1950"], body[data-aos-delay="1950"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="1950"].aos-animate, body[data-aos-delay="1950"] [data-aos].aos-animate {
  -webkit-transition-delay: 1.95s;
          transition-delay: 1.95s; }

[data-aos][data-aos][data-aos-duration="2000"], body[data-aos-duration="2000"] [data-aos] {
  -webkit-transition-duration: 2s;
          transition-duration: 2s; }

[data-aos][data-aos][data-aos-delay="2000"], body[data-aos-delay="2000"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2000"].aos-animate, body[data-aos-delay="2000"] [data-aos].aos-animate {
  -webkit-transition-delay: 2s;
          transition-delay: 2s; }

[data-aos][data-aos][data-aos-duration="2050"], body[data-aos-duration="2050"] [data-aos] {
  -webkit-transition-duration: 2.05s;
          transition-duration: 2.05s; }

[data-aos][data-aos][data-aos-delay="2050"], body[data-aos-delay="2050"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2050"].aos-animate, body[data-aos-delay="2050"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.05s;
          transition-delay: 2.05s; }

[data-aos][data-aos][data-aos-duration="2100"], body[data-aos-duration="2100"] [data-aos] {
  -webkit-transition-duration: 2.1s;
          transition-duration: 2.1s; }

[data-aos][data-aos][data-aos-delay="2100"], body[data-aos-delay="2100"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2100"].aos-animate, body[data-aos-delay="2100"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.1s;
          transition-delay: 2.1s; }

[data-aos][data-aos][data-aos-duration="2150"], body[data-aos-duration="2150"] [data-aos] {
  -webkit-transition-duration: 2.15s;
          transition-duration: 2.15s; }

[data-aos][data-aos][data-aos-delay="2150"], body[data-aos-delay="2150"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2150"].aos-animate, body[data-aos-delay="2150"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.15s;
          transition-delay: 2.15s; }

[data-aos][data-aos][data-aos-duration="2200"], body[data-aos-duration="2200"] [data-aos] {
  -webkit-transition-duration: 2.2s;
          transition-duration: 2.2s; }

[data-aos][data-aos][data-aos-delay="2200"], body[data-aos-delay="2200"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2200"].aos-animate, body[data-aos-delay="2200"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.2s;
          transition-delay: 2.2s; }

[data-aos][data-aos][data-aos-duration="2250"], body[data-aos-duration="2250"] [data-aos] {
  -webkit-transition-duration: 2.25s;
          transition-duration: 2.25s; }

[data-aos][data-aos][data-aos-delay="2250"], body[data-aos-delay="2250"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2250"].aos-animate, body[data-aos-delay="2250"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.25s;
          transition-delay: 2.25s; }

[data-aos][data-aos][data-aos-duration="2300"], body[data-aos-duration="2300"] [data-aos] {
  -webkit-transition-duration: 2.3s;
          transition-duration: 2.3s; }

[data-aos][data-aos][data-aos-delay="2300"], body[data-aos-delay="2300"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2300"].aos-animate, body[data-aos-delay="2300"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.3s;
          transition-delay: 2.3s; }

[data-aos][data-aos][data-aos-duration="2350"], body[data-aos-duration="2350"] [data-aos] {
  -webkit-transition-duration: 2.35s;
          transition-duration: 2.35s; }

[data-aos][data-aos][data-aos-delay="2350"], body[data-aos-delay="2350"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2350"].aos-animate, body[data-aos-delay="2350"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.35s;
          transition-delay: 2.35s; }

[data-aos][data-aos][data-aos-duration="2400"], body[data-aos-duration="2400"] [data-aos] {
  -webkit-transition-duration: 2.4s;
          transition-duration: 2.4s; }

[data-aos][data-aos][data-aos-delay="2400"], body[data-aos-delay="2400"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2400"].aos-animate, body[data-aos-delay="2400"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.4s;
          transition-delay: 2.4s; }

[data-aos][data-aos][data-aos-duration="2450"], body[data-aos-duration="2450"] [data-aos] {
  -webkit-transition-duration: 2.45s;
          transition-duration: 2.45s; }

[data-aos][data-aos][data-aos-delay="2450"], body[data-aos-delay="2450"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2450"].aos-animate, body[data-aos-delay="2450"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.45s;
          transition-delay: 2.45s; }

[data-aos][data-aos][data-aos-duration="2500"], body[data-aos-duration="2500"] [data-aos] {
  -webkit-transition-duration: 2.5s;
          transition-duration: 2.5s; }

[data-aos][data-aos][data-aos-delay="2500"], body[data-aos-delay="2500"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2500"].aos-animate, body[data-aos-delay="2500"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.5s;
          transition-delay: 2.5s; }

[data-aos][data-aos][data-aos-duration="2550"], body[data-aos-duration="2550"] [data-aos] {
  -webkit-transition-duration: 2.55s;
          transition-duration: 2.55s; }

[data-aos][data-aos][data-aos-delay="2550"], body[data-aos-delay="2550"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2550"].aos-animate, body[data-aos-delay="2550"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.55s;
          transition-delay: 2.55s; }

[data-aos][data-aos][data-aos-duration="2600"], body[data-aos-duration="2600"] [data-aos] {
  -webkit-transition-duration: 2.6s;
          transition-duration: 2.6s; }

[data-aos][data-aos][data-aos-delay="2600"], body[data-aos-delay="2600"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2600"].aos-animate, body[data-aos-delay="2600"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.6s;
          transition-delay: 2.6s; }

[data-aos][data-aos][data-aos-duration="2650"], body[data-aos-duration="2650"] [data-aos] {
  -webkit-transition-duration: 2.65s;
          transition-duration: 2.65s; }

[data-aos][data-aos][data-aos-delay="2650"], body[data-aos-delay="2650"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2650"].aos-animate, body[data-aos-delay="2650"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.65s;
          transition-delay: 2.65s; }

[data-aos][data-aos][data-aos-duration="2700"], body[data-aos-duration="2700"] [data-aos] {
  -webkit-transition-duration: 2.7s;
          transition-duration: 2.7s; }

[data-aos][data-aos][data-aos-delay="2700"], body[data-aos-delay="2700"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2700"].aos-animate, body[data-aos-delay="2700"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.7s;
          transition-delay: 2.7s; }

[data-aos][data-aos][data-aos-duration="2750"], body[data-aos-duration="2750"] [data-aos] {
  -webkit-transition-duration: 2.75s;
          transition-duration: 2.75s; }

[data-aos][data-aos][data-aos-delay="2750"], body[data-aos-delay="2750"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2750"].aos-animate, body[data-aos-delay="2750"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.75s;
          transition-delay: 2.75s; }

[data-aos][data-aos][data-aos-duration="2800"], body[data-aos-duration="2800"] [data-aos] {
  -webkit-transition-duration: 2.8s;
          transition-duration: 2.8s; }

[data-aos][data-aos][data-aos-delay="2800"], body[data-aos-delay="2800"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2800"].aos-animate, body[data-aos-delay="2800"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.8s;
          transition-delay: 2.8s; }

[data-aos][data-aos][data-aos-duration="2850"], body[data-aos-duration="2850"] [data-aos] {
  -webkit-transition-duration: 2.85s;
          transition-duration: 2.85s; }

[data-aos][data-aos][data-aos-delay="2850"], body[data-aos-delay="2850"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2850"].aos-animate, body[data-aos-delay="2850"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.85s;
          transition-delay: 2.85s; }

[data-aos][data-aos][data-aos-duration="2900"], body[data-aos-duration="2900"] [data-aos] {
  -webkit-transition-duration: 2.9s;
          transition-duration: 2.9s; }

[data-aos][data-aos][data-aos-delay="2900"], body[data-aos-delay="2900"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2900"].aos-animate, body[data-aos-delay="2900"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.9s;
          transition-delay: 2.9s; }

[data-aos][data-aos][data-aos-duration="2950"], body[data-aos-duration="2950"] [data-aos] {
  -webkit-transition-duration: 2.95s;
          transition-duration: 2.95s; }

[data-aos][data-aos][data-aos-delay="2950"], body[data-aos-delay="2950"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="2950"].aos-animate, body[data-aos-delay="2950"] [data-aos].aos-animate {
  -webkit-transition-delay: 2.95s;
          transition-delay: 2.95s; }

[data-aos][data-aos][data-aos-duration="3000"], body[data-aos-duration="3000"] [data-aos] {
  -webkit-transition-duration: 3s;
          transition-duration: 3s; }

[data-aos][data-aos][data-aos-delay="3000"], body[data-aos-delay="3000"] [data-aos] {
  -webkit-transition-delay: 0s;
          transition-delay: 0s; }

[data-aos][data-aos][data-aos-delay="3000"].aos-animate, body[data-aos-delay="3000"] [data-aos].aos-animate {
  -webkit-transition-delay: 3s;
          transition-delay: 3s; }

[data-aos] {
  pointer-events: none; }

[data-aos].aos-animate {
  pointer-events: auto; }

[data-aos][data-aos][data-aos-easing=linear], body[data-aos-easing=linear] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
          transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75); }

[data-aos][data-aos][data-aos-easing=ease], body[data-aos-easing=ease] [data-aos] {
  -webkit-transition-timing-function: ease;
          transition-timing-function: ease; }

[data-aos][data-aos][data-aos-easing=ease-in], body[data-aos-easing=ease-in] [data-aos] {
  -webkit-transition-timing-function: ease-in;
          transition-timing-function: ease-in; }

[data-aos][data-aos][data-aos-easing=ease-out], body[data-aos-easing=ease-out] [data-aos] {
  -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out; }

[data-aos][data-aos][data-aos-easing=ease-in-out], body[data-aos-easing=ease-in-out] [data-aos] {
  -webkit-transition-timing-function: ease-in-out;
          transition-timing-function: ease-in-out; }

[data-aos][data-aos][data-aos-easing=ease-in-back], body[data-aos-easing=ease-in-back] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
          transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045); }

[data-aos][data-aos][data-aos-easing=ease-out-back], body[data-aos-easing=ease-out-back] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275); }

[data-aos][data-aos][data-aos-easing=ease-in-out-back], body[data-aos-easing=ease-in-out-back] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }

[data-aos][data-aos][data-aos-easing=ease-in-sine], body[data-aos-easing=ease-in-sine] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
          transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715); }

[data-aos][data-aos][data-aos-easing=ease-out-sine], body[data-aos-easing=ease-out-sine] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
          transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1); }

[data-aos][data-aos][data-aos-easing=ease-in-out-sine], body[data-aos-easing=ease-in-out-sine] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
          transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95); }

[data-aos][data-aos][data-aos-easing=ease-in-quad], body[data-aos-easing=ease-in-quad] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
          transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53); }

[data-aos][data-aos][data-aos-easing=ease-out-quad], body[data-aos-easing=ease-out-quad] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); }

[data-aos][data-aos][data-aos-easing=ease-in-out-quad], body[data-aos-easing=ease-in-out-quad] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
          transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955); }

[data-aos][data-aos][data-aos-easing=ease-in-cubic], body[data-aos-easing=ease-in-cubic] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
          transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53); }

[data-aos][data-aos][data-aos-easing=ease-out-cubic], body[data-aos-easing=ease-out-cubic] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); }

[data-aos][data-aos][data-aos-easing=ease-in-out-cubic], body[data-aos-easing=ease-in-out-cubic] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
          transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955); }

[data-aos][data-aos][data-aos-easing=ease-in-quart], body[data-aos-easing=ease-in-quart] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
          transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53); }

[data-aos][data-aos][data-aos-easing=ease-out-quart], body[data-aos-easing=ease-out-quart] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); }

[data-aos][data-aos][data-aos-easing=ease-in-out-quart], body[data-aos-easing=ease-in-out-quart] [data-aos] {
  -webkit-transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
          transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955); }

@media screen {
  html:not(.no-js) [data-aos^=fade][data-aos^=fade] {
    opacity: 0;
    transition-property: opacity,-webkit-transform;
    -webkit-transition-property: opacity,-webkit-transform;
    transition-property: opacity,transform;
    transition-property: opacity,transform,-webkit-transform; }
  html:not(.no-js) [data-aos^=fade][data-aos^=fade].aos-animate {
    opacity: 1;
    -webkit-transform: none;
    transform: none; }
  html:not(.no-js) [data-aos=fade-up] {
    -webkit-transform: translate3d(0, 100px, 0);
    transform: translate3d(0, 100px, 0); }
  html:not(.no-js) [data-aos=fade-down] {
    -webkit-transform: translate3d(0, -100px, 0);
    transform: translate3d(0, -100px, 0); }
  html:not(.no-js) [data-aos=fade-right] {
    -webkit-transform: translate3d(-100px, 0, 0);
    transform: translate3d(-100px, 0, 0); }
  html:not(.no-js) [data-aos=fade-left] {
    -webkit-transform: translate3d(100px, 0, 0);
    transform: translate3d(100px, 0, 0); }
  html:not(.no-js) [data-aos=fade-up-right] {
    -webkit-transform: translate3d(-100px, 100px, 0);
    transform: translate3d(-100px, 100px, 0); }
  html:not(.no-js) [data-aos=fade-up-left] {
    -webkit-transform: translate3d(100px, 100px, 0);
    transform: translate3d(100px, 100px, 0); }
  html:not(.no-js) [data-aos=fade-down-right] {
    -webkit-transform: translate3d(-100px, -100px, 0);
    transform: translate3d(-100px, -100px, 0); }
  html:not(.no-js) [data-aos=fade-down-left] {
    -webkit-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0); }
  html:not(.no-js) [data-aos^=zoom][data-aos^=zoom] {
    opacity: 0;
    transition-property: opacity,-webkit-transform;
    -webkit-transition-property: opacity,-webkit-transform;
    transition-property: opacity,transform;
    transition-property: opacity,transform,-webkit-transform; }
  html:not(.no-js) [data-aos^=zoom][data-aos^=zoom].aos-animate {
    opacity: 1;
    -webkit-transform: translateZ(0) scale(1);
    transform: translateZ(0) scale(1); }
  html:not(.no-js) [data-aos=zoom-in] {
    -webkit-transform: scale(0.6);
    transform: scale(0.6); }
  html:not(.no-js) [data-aos=zoom-in-up] {
    -webkit-transform: translate3d(0, 100px, 0) scale(0.6);
    transform: translate3d(0, 100px, 0) scale(0.6); }
  html:not(.no-js) [data-aos=zoom-in-down] {
    -webkit-transform: translate3d(0, -100px, 0) scale(0.6);
    transform: translate3d(0, -100px, 0) scale(0.6); }
  html:not(.no-js) [data-aos=zoom-in-right] {
    -webkit-transform: translate3d(-100px, 0, 0) scale(0.6);
    transform: translate3d(-100px, 0, 0) scale(0.6); }
  html:not(.no-js) [data-aos=zoom-in-left] {
    -webkit-transform: translate3d(100px, 0, 0) scale(0.6);
    transform: translate3d(100px, 0, 0) scale(0.6); }
  html:not(.no-js) [data-aos=zoom-out] {
    -webkit-transform: scale(1.2);
    transform: scale(1.2); }
  html:not(.no-js) [data-aos=zoom-out-up] {
    -webkit-transform: translate3d(0, 100px, 0) scale(1.2);
    transform: translate3d(0, 100px, 0) scale(1.2); }
  html:not(.no-js) [data-aos=zoom-out-down] {
    -webkit-transform: translate3d(0, -100px, 0) scale(1.2);
    transform: translate3d(0, -100px, 0) scale(1.2); }
  html:not(.no-js) [data-aos=zoom-out-right] {
    -webkit-transform: translate3d(-100px, 0, 0) scale(1.2);
    transform: translate3d(-100px, 0, 0) scale(1.2); }
  html:not(.no-js) [data-aos=zoom-out-left] {
    -webkit-transform: translate3d(100px, 0, 0) scale(1.2);
    transform: translate3d(100px, 0, 0) scale(1.2); }
  html:not(.no-js) [data-aos^=slide][data-aos^=slide] {
    transition-property: -webkit-transform;
    -webkit-transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    transition-property: transform,-webkit-transform;
    visibility: hidden; }
  html:not(.no-js) [data-aos^=slide][data-aos^=slide].aos-animate {
    visibility: visible;
    -webkit-transform: translateZ(0);
    transform: translateZ(0); }
  html:not(.no-js) [data-aos=slide-up] {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0); }
  html:not(.no-js) [data-aos=slide-down] {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0); }
  html:not(.no-js) [data-aos=slide-right] {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0); }
  html:not(.no-js) [data-aos=slide-left] {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0); }
  html:not(.no-js) [data-aos^=flip][data-aos^=flip] {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition-property: -webkit-transform;
    -webkit-transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    transition-property: transform,-webkit-transform; }
  html:not(.no-js) [data-aos=flip-left] {
    -webkit-transform: perspective(2500px) rotateY(-100deg);
    transform: perspective(2500px) rotateY(-100deg); }
  html:not(.no-js) [data-aos=flip-left].aos-animate {
    -webkit-transform: perspective(2500px) rotateY(0);
    transform: perspective(2500px) rotateY(0); }
  html:not(.no-js) [data-aos=flip-right] {
    -webkit-transform: perspective(2500px) rotateY(100deg);
    transform: perspective(2500px) rotateY(100deg); }
  html:not(.no-js) [data-aos=flip-right].aos-animate {
    -webkit-transform: perspective(2500px) rotateY(0);
    transform: perspective(2500px) rotateY(0); }
  html:not(.no-js) [data-aos=flip-up] {
    -webkit-transform: perspective(2500px) rotateX(-100deg);
    transform: perspective(2500px) rotateX(-100deg); }
  html:not(.no-js) [data-aos=flip-up].aos-animate {
    -webkit-transform: perspective(2500px) rotateX(0);
    transform: perspective(2500px) rotateX(0); }
  html:not(.no-js) [data-aos=flip-down] {
    -webkit-transform: perspective(2500px) rotateX(100deg);
    transform: perspective(2500px) rotateX(100deg); }
  html:not(.no-js) [data-aos=flip-down].aos-animate {
    -webkit-transform: perspective(2500px) rotateX(0);
    transform: perspective(2500px) rotateX(0); } }
`, "",{"version":3,"sources":["webpack://./node_modules/aos/dist/aos.css"],"names":[],"mappings":"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","sourcesContent":["[data-aos][data-aos][data-aos-duration=\"50\"],body[data-aos-duration=\"50\"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay=\"50\"],body[data-aos-delay=\"50\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"50\"].aos-animate,body[data-aos-delay=\"50\"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration=\"100\"],body[data-aos-duration=\"100\"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay=\"100\"],body[data-aos-delay=\"100\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"100\"].aos-animate,body[data-aos-delay=\"100\"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration=\"150\"],body[data-aos-duration=\"150\"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay=\"150\"],body[data-aos-delay=\"150\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"150\"].aos-animate,body[data-aos-delay=\"150\"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration=\"200\"],body[data-aos-duration=\"200\"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay=\"200\"],body[data-aos-delay=\"200\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"200\"].aos-animate,body[data-aos-delay=\"200\"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration=\"250\"],body[data-aos-duration=\"250\"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay=\"250\"],body[data-aos-delay=\"250\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"250\"].aos-animate,body[data-aos-delay=\"250\"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration=\"300\"],body[data-aos-duration=\"300\"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay=\"300\"],body[data-aos-delay=\"300\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"300\"].aos-animate,body[data-aos-delay=\"300\"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration=\"350\"],body[data-aos-duration=\"350\"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay=\"350\"],body[data-aos-delay=\"350\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"350\"].aos-animate,body[data-aos-delay=\"350\"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration=\"400\"],body[data-aos-duration=\"400\"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay=\"400\"],body[data-aos-delay=\"400\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"400\"].aos-animate,body[data-aos-delay=\"400\"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration=\"450\"],body[data-aos-duration=\"450\"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay=\"450\"],body[data-aos-delay=\"450\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"450\"].aos-animate,body[data-aos-delay=\"450\"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration=\"500\"],body[data-aos-duration=\"500\"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay=\"500\"],body[data-aos-delay=\"500\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"500\"].aos-animate,body[data-aos-delay=\"500\"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration=\"550\"],body[data-aos-duration=\"550\"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay=\"550\"],body[data-aos-delay=\"550\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"550\"].aos-animate,body[data-aos-delay=\"550\"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration=\"600\"],body[data-aos-duration=\"600\"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay=\"600\"],body[data-aos-delay=\"600\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"600\"].aos-animate,body[data-aos-delay=\"600\"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration=\"650\"],body[data-aos-duration=\"650\"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay=\"650\"],body[data-aos-delay=\"650\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"650\"].aos-animate,body[data-aos-delay=\"650\"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration=\"700\"],body[data-aos-duration=\"700\"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay=\"700\"],body[data-aos-delay=\"700\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"700\"].aos-animate,body[data-aos-delay=\"700\"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration=\"750\"],body[data-aos-duration=\"750\"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay=\"750\"],body[data-aos-delay=\"750\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"750\"].aos-animate,body[data-aos-delay=\"750\"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration=\"800\"],body[data-aos-duration=\"800\"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay=\"800\"],body[data-aos-delay=\"800\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"800\"].aos-animate,body[data-aos-delay=\"800\"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration=\"850\"],body[data-aos-duration=\"850\"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay=\"850\"],body[data-aos-delay=\"850\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"850\"].aos-animate,body[data-aos-delay=\"850\"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration=\"900\"],body[data-aos-duration=\"900\"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay=\"900\"],body[data-aos-delay=\"900\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"900\"].aos-animate,body[data-aos-delay=\"900\"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration=\"950\"],body[data-aos-duration=\"950\"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay=\"950\"],body[data-aos-delay=\"950\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"950\"].aos-animate,body[data-aos-delay=\"950\"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration=\"1000\"],body[data-aos-duration=\"1000\"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay=\"1000\"],body[data-aos-delay=\"1000\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate,body[data-aos-delay=\"1000\"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration=\"1050\"],body[data-aos-duration=\"1050\"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay=\"1050\"],body[data-aos-delay=\"1050\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate,body[data-aos-delay=\"1050\"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration=\"1100\"],body[data-aos-duration=\"1100\"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay=\"1100\"],body[data-aos-delay=\"1100\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate,body[data-aos-delay=\"1100\"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration=\"1150\"],body[data-aos-duration=\"1150\"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay=\"1150\"],body[data-aos-delay=\"1150\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate,body[data-aos-delay=\"1150\"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration=\"1200\"],body[data-aos-duration=\"1200\"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay=\"1200\"],body[data-aos-delay=\"1200\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate,body[data-aos-delay=\"1200\"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration=\"1250\"],body[data-aos-duration=\"1250\"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay=\"1250\"],body[data-aos-delay=\"1250\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate,body[data-aos-delay=\"1250\"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration=\"1300\"],body[data-aos-duration=\"1300\"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay=\"1300\"],body[data-aos-delay=\"1300\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate,body[data-aos-delay=\"1300\"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration=\"1350\"],body[data-aos-duration=\"1350\"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay=\"1350\"],body[data-aos-delay=\"1350\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate,body[data-aos-delay=\"1350\"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration=\"1400\"],body[data-aos-duration=\"1400\"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay=\"1400\"],body[data-aos-delay=\"1400\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate,body[data-aos-delay=\"1400\"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration=\"1450\"],body[data-aos-duration=\"1450\"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay=\"1450\"],body[data-aos-delay=\"1450\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate,body[data-aos-delay=\"1450\"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration=\"1500\"],body[data-aos-duration=\"1500\"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay=\"1500\"],body[data-aos-delay=\"1500\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate,body[data-aos-delay=\"1500\"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration=\"1550\"],body[data-aos-duration=\"1550\"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay=\"1550\"],body[data-aos-delay=\"1550\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate,body[data-aos-delay=\"1550\"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration=\"1600\"],body[data-aos-duration=\"1600\"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay=\"1600\"],body[data-aos-delay=\"1600\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate,body[data-aos-delay=\"1600\"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration=\"1650\"],body[data-aos-duration=\"1650\"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay=\"1650\"],body[data-aos-delay=\"1650\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate,body[data-aos-delay=\"1650\"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration=\"1700\"],body[data-aos-duration=\"1700\"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay=\"1700\"],body[data-aos-delay=\"1700\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate,body[data-aos-delay=\"1700\"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration=\"1750\"],body[data-aos-duration=\"1750\"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay=\"1750\"],body[data-aos-delay=\"1750\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate,body[data-aos-delay=\"1750\"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration=\"1800\"],body[data-aos-duration=\"1800\"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay=\"1800\"],body[data-aos-delay=\"1800\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate,body[data-aos-delay=\"1800\"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration=\"1850\"],body[data-aos-duration=\"1850\"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay=\"1850\"],body[data-aos-delay=\"1850\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate,body[data-aos-delay=\"1850\"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration=\"1900\"],body[data-aos-duration=\"1900\"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay=\"1900\"],body[data-aos-delay=\"1900\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate,body[data-aos-delay=\"1900\"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration=\"1950\"],body[data-aos-duration=\"1950\"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay=\"1950\"],body[data-aos-delay=\"1950\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate,body[data-aos-delay=\"1950\"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration=\"2000\"],body[data-aos-duration=\"2000\"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay=\"2000\"],body[data-aos-delay=\"2000\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate,body[data-aos-delay=\"2000\"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration=\"2050\"],body[data-aos-duration=\"2050\"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay=\"2050\"],body[data-aos-delay=\"2050\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate,body[data-aos-delay=\"2050\"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration=\"2100\"],body[data-aos-duration=\"2100\"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay=\"2100\"],body[data-aos-delay=\"2100\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate,body[data-aos-delay=\"2100\"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration=\"2150\"],body[data-aos-duration=\"2150\"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay=\"2150\"],body[data-aos-delay=\"2150\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate,body[data-aos-delay=\"2150\"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration=\"2200\"],body[data-aos-duration=\"2200\"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay=\"2200\"],body[data-aos-delay=\"2200\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate,body[data-aos-delay=\"2200\"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration=\"2250\"],body[data-aos-duration=\"2250\"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay=\"2250\"],body[data-aos-delay=\"2250\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate,body[data-aos-delay=\"2250\"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration=\"2300\"],body[data-aos-duration=\"2300\"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay=\"2300\"],body[data-aos-delay=\"2300\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate,body[data-aos-delay=\"2300\"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration=\"2350\"],body[data-aos-duration=\"2350\"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay=\"2350\"],body[data-aos-delay=\"2350\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate,body[data-aos-delay=\"2350\"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration=\"2400\"],body[data-aos-duration=\"2400\"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay=\"2400\"],body[data-aos-delay=\"2400\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate,body[data-aos-delay=\"2400\"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration=\"2450\"],body[data-aos-duration=\"2450\"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay=\"2450\"],body[data-aos-delay=\"2450\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate,body[data-aos-delay=\"2450\"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration=\"2500\"],body[data-aos-duration=\"2500\"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay=\"2500\"],body[data-aos-delay=\"2500\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate,body[data-aos-delay=\"2500\"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration=\"2550\"],body[data-aos-duration=\"2550\"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay=\"2550\"],body[data-aos-delay=\"2550\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate,body[data-aos-delay=\"2550\"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration=\"2600\"],body[data-aos-duration=\"2600\"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay=\"2600\"],body[data-aos-delay=\"2600\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate,body[data-aos-delay=\"2600\"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration=\"2650\"],body[data-aos-duration=\"2650\"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay=\"2650\"],body[data-aos-delay=\"2650\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate,body[data-aos-delay=\"2650\"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration=\"2700\"],body[data-aos-duration=\"2700\"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay=\"2700\"],body[data-aos-delay=\"2700\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate,body[data-aos-delay=\"2700\"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration=\"2750\"],body[data-aos-duration=\"2750\"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay=\"2750\"],body[data-aos-delay=\"2750\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate,body[data-aos-delay=\"2750\"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration=\"2800\"],body[data-aos-duration=\"2800\"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay=\"2800\"],body[data-aos-delay=\"2800\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate,body[data-aos-delay=\"2800\"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration=\"2850\"],body[data-aos-duration=\"2850\"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay=\"2850\"],body[data-aos-delay=\"2850\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate,body[data-aos-delay=\"2850\"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration=\"2900\"],body[data-aos-duration=\"2900\"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay=\"2900\"],body[data-aos-delay=\"2900\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate,body[data-aos-delay=\"2900\"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration=\"2950\"],body[data-aos-duration=\"2950\"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay=\"2950\"],body[data-aos-delay=\"2950\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate,body[data-aos-delay=\"2950\"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration=\"3000\"],body[data-aos-duration=\"3000\"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay=\"3000\"],body[data-aos-delay=\"3000\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate,body[data-aos-delay=\"3000\"] [data-aos].aos-animate{transition-delay:3s}[data-aos]{pointer-events:none}[data-aos].aos-animate{pointer-events:auto}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}@media screen{html:not(.no-js) [data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}html:not(.no-js) [data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;-webkit-transform:none;transform:none}html:not(.no-js) [data-aos=fade-up]{-webkit-transform:translate3d(0,100px,0);transform:translate3d(0,100px,0)}html:not(.no-js) [data-aos=fade-down]{-webkit-transform:translate3d(0,-100px,0);transform:translate3d(0,-100px,0)}html:not(.no-js) [data-aos=fade-right]{-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}html:not(.no-js) [data-aos=fade-left]{-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}html:not(.no-js) [data-aos=fade-up-right]{-webkit-transform:translate3d(-100px,100px,0);transform:translate3d(-100px,100px,0)}html:not(.no-js) [data-aos=fade-up-left]{-webkit-transform:translate3d(100px,100px,0);transform:translate3d(100px,100px,0)}html:not(.no-js) [data-aos=fade-down-right]{-webkit-transform:translate3d(-100px,-100px,0);transform:translate3d(-100px,-100px,0)}html:not(.no-js) [data-aos=fade-down-left]{-webkit-transform:translate3d(100px,-100px,0);transform:translate3d(100px,-100px,0)}html:not(.no-js) [data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}html:not(.no-js) [data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}html:not(.no-js) [data-aos=zoom-in]{-webkit-transform:scale(.6);transform:scale(.6)}html:not(.no-js) [data-aos=zoom-in-up]{-webkit-transform:translate3d(0,100px,0) scale(.6);transform:translate3d(0,100px,0) scale(.6)}html:not(.no-js) [data-aos=zoom-in-down]{-webkit-transform:translate3d(0,-100px,0) scale(.6);transform:translate3d(0,-100px,0) scale(.6)}html:not(.no-js) [data-aos=zoom-in-right]{-webkit-transform:translate3d(-100px,0,0) scale(.6);transform:translate3d(-100px,0,0) scale(.6)}html:not(.no-js) [data-aos=zoom-in-left]{-webkit-transform:translate3d(100px,0,0) scale(.6);transform:translate3d(100px,0,0) scale(.6)}html:not(.no-js) [data-aos=zoom-out]{-webkit-transform:scale(1.2);transform:scale(1.2)}html:not(.no-js) [data-aos=zoom-out-up]{-webkit-transform:translate3d(0,100px,0) scale(1.2);transform:translate3d(0,100px,0) scale(1.2)}html:not(.no-js) [data-aos=zoom-out-down]{-webkit-transform:translate3d(0,-100px,0) scale(1.2);transform:translate3d(0,-100px,0) scale(1.2)}html:not(.no-js) [data-aos=zoom-out-right]{-webkit-transform:translate3d(-100px,0,0) scale(1.2);transform:translate3d(-100px,0,0) scale(1.2)}html:not(.no-js) [data-aos=zoom-out-left]{-webkit-transform:translate3d(100px,0,0) scale(1.2);transform:translate3d(100px,0,0) scale(1.2)}html:not(.no-js) [data-aos^=slide][data-aos^=slide]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;visibility:hidden}html:not(.no-js) [data-aos^=slide][data-aos^=slide].aos-animate{visibility:visible;-webkit-transform:translateZ(0);transform:translateZ(0)}html:not(.no-js) [data-aos=slide-up]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}html:not(.no-js) [data-aos=slide-down]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}html:not(.no-js) [data-aos=slide-right]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}html:not(.no-js) [data-aos=slide-left]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}html:not(.no-js) [data-aos^=flip][data-aos^=flip]{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}html:not(.no-js) [data-aos=flip-left]{-webkit-transform:perspective(2500px) rotateY(-100deg);transform:perspective(2500px) rotateY(-100deg)}html:not(.no-js) [data-aos=flip-left].aos-animate{-webkit-transform:perspective(2500px) rotateY(0);transform:perspective(2500px) rotateY(0)}html:not(.no-js) [data-aos=flip-right]{-webkit-transform:perspective(2500px) rotateY(100deg);transform:perspective(2500px) rotateY(100deg)}html:not(.no-js) [data-aos=flip-right].aos-animate{-webkit-transform:perspective(2500px) rotateY(0);transform:perspective(2500px) rotateY(0)}html:not(.no-js) [data-aos=flip-up]{-webkit-transform:perspective(2500px) rotateX(-100deg);transform:perspective(2500px) rotateX(-100deg)}html:not(.no-js) [data-aos=flip-up].aos-animate{-webkit-transform:perspective(2500px) rotateX(0);transform:perspective(2500px) rotateX(0)}html:not(.no-js) [data-aos=flip-down]{-webkit-transform:perspective(2500px) rotateX(100deg);transform:perspective(2500px) rotateX(100deg)}html:not(.no-js) [data-aos=flip-down].aos-animate{-webkit-transform:perspective(2500px) rotateX(0);transform:perspective(2500px) rotateX(0)}}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_splidejs_splide_dist_css_splide_core_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/@splidejs/splide/dist/css/splide-core.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@splidejs/splide/dist/css/splide-core.min.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_splidejs_splide_dist_css_splide_core_min_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0; }

html {
  height: 100%; }

ul {
  list-style: none;
  padding: 0;
  margin: 0; }

body {
  height: 100%;
  color: #242851;
  background: #FFF8F5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px; }

.content {
  overflow: hidden;
  position: relative; }

@media (min-width: 1200px) {
  .container {
    max-width: 1170px; } }

@media (max-width: 991px) {
  .container {
    max-width: 100%; } }

a {
  -webkit-transition: color 300ms;
  transition: color 300ms;
  -webkit-text-decoration: none;
  text-decoration: none; }
  a:hover {
    -webkit-text-decoration: none;
    text-decoration: none; }
  a:active {
    -webkit-text-decoration: none;
    text-decoration: none; }
  a:disabled, a_disabled {
    pointer-events: none;
    -webkit-text-decoration: none;
    text-decoration: none; }

.typography {
  margin: 0;
  padding: 0; }
  .typography__body {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    font-family: "Quicksand", sans-serif; }
  .typography__h1 {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 100px;
    line-height: 120px; }
    @media screen and (max-width: 991px) {
      .typography__h1 {
        font-size: 57px;
        line-height: 70px; } }
  .typography__h2 {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 87px; }
    @media screen and (max-width: 991px) {
      .typography__h2 {
        font-size: 50px;
        line-height: 57px; } }
  .typography__h3 {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 68px; }
  .typography__h4 {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 35px; }
  .typography__info {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px; }
  .typography__bold {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px; }
  .typography__smallText {
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px; }
  .typography__centered {
    text-align: center; }
  .typography__red {
    color: #FF7751; }

.firstSection {
  padding-top: 150px;
  padding-bottom: 192px;
  position: relative; }
  .firstSection__title {
    margin-bottom: 30px; }
  .firstSection__text {
    margin-bottom: 60px; }
  .firstSection__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
  .firstSection__button {
    margin-right: 20px; }
  .firstSection__image {
    width: 638px; }
    @media screen and (max-width: 768px) {
      .firstSection__image {
        margin-top: 30px;
        width: 100%; } }
  .firstSection__circle {
    position: absolute;
    width: 680px;
    height: 680px;
    background: #FFCDB8;
    -webkit-filter: blur(100px);
            filter: blur(100px);
    bottom: 130px;
    z-index: -1;
    border-radius: 50%; }
  .firstSection__imageWrapper {
    position: relative; }
  .firstSection__decoration {
    position: absolute;
    width: auto; }
    .firstSection__decoration_first {
      right: 0;
      top: 0;
      -webkit-animation: top-bottom 5s infinite;
              animation: top-bottom 5s infinite; }
    .firstSection__decoration_second {
      right: -118px;
      bottom: 176px;
      -webkit-animation: top-bottom 8s infinite;
              animation: top-bottom 8s infinite; }
    .firstSection__decoration_third {
      left: -90px;
      top: 184px;
      -webkit-animation: rotate 5s infinite;
              animation: rotate 5s infinite; }
    .firstSection__decoration_fourth {
      bottom: 244px;
      -webkit-animation: top-bottom 7s infinite;
              animation: top-bottom 7s infinite; }

.secondSection {
  background: #FFECE4;
  border-radius: 50px;
  padding: 100px;
  margin: 0 -100px; }
  @media screen and (max-width: 1320px) {
    .secondSection {
      margin: 0;
      padding: 50px; } }
  .secondSection__info {
    margin-bottom: 10px; }
  .secondSection__title {
    margin-bottom: 60px; }
  @media screen and (max-width: 1199px) {
    .secondSection__list {
      margin-bottom: -30px; } }
  @media screen and (max-width: 1199px) {
    .secondSection__list li {
      margin-bottom: 30px; } }
  .secondSection__listItem {
    background: #FFFFFF;
    border-radius: 30px;
    padding: 50px 40px;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column; }
    .secondSection__listItem:hover {
      background: -webkit-gradient(linear, left top, left bottom, from(#FFBBA9), to(#FF6236));
      background: linear-gradient(180deg, #FFBBA9 0%, #FF6236 100%);
      -webkit-box-shadow: 0px 15px 40px rgba(255, 122, 85, 0.3);
              box-shadow: 0px 15px 40px rgba(255, 122, 85, 0.3);
      color: #FFFFFF; }
  .secondSection__image {
    margin: 0 auto 35px;
    -webkit-box-shadow: 0px 12px 25px rgba(98, 131, 118, 0.3);
            box-shadow: 0px 12px 25px rgba(98, 131, 118, 0.3);
    border-radius: 50%; }

.thirdSection {
  padding: 155px 0;
  position: relative; }
  .thirdSection__info {
    margin-bottom: 10px; }
  .thirdSection__title {
    margin-bottom: 30px; }
  .thirdSection__text {
    margin-bottom: 25px; }
  .thirdSection__image {
    width: 492px; }
    @media screen and (max-width: 991px) {
      .thirdSection__image {
        margin-top: 30px;
        width: 100%;
        max-width: 492px; } }
  .thirdSection__list {
    margin-bottom: 46px; }
  .thirdSection__listItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
    .thirdSection__listItem:not(:last-child) {
      margin-bottom: 25px; }
  .thirdSection__icon {
    margin-right: 10px; }
  .thirdSection__circle {
    position: absolute;
    width: 685px;
    height: 685px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    background: #FFDBCC;
    -webkit-filter: blur(100px);
            filter: blur(100px);
    z-index: -1;
    border-radius: 50%; }
  .thirdSection__imageWrapper {
    position: relative;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
  .thirdSection__decoration {
    position: absolute; }
    .thirdSection__decoration_first {
      right: -45px;
      bottom: -50px;
      -webkit-animation: right-left 10s infinite;
              animation: right-left 10s infinite; }
    .thirdSection__decoration_second {
      left: -108px;
      bottom: -50px;
      -webkit-animation: left-right 10s infinite;
              animation: left-right 10s infinite; }
    .thirdSection__decoration_third {
      left: -90px;
      top: 68px;
      -webkit-animation: top-bottom 8s infinite;
              animation: top-bottom 8s infinite; }
    .thirdSection__decoration_fourth {
      right: -63px;
      top: 140px;
      width: 60px;
      -webkit-animation: rotate 5s infinite;
              animation: rotate 5s infinite; }

.fourthSection {
  background: #FFECE4;
  border-radius: 50px;
  padding: 100px;
  margin: 0 -100px; }
  @media screen and (max-width: 1320px) {
    .fourthSection {
      margin: 0;
      padding: 50px; } }
  .fourthSection__info {
    margin-bottom: 10px; }
  .fourthSection__title {
    margin-bottom: 60px; }
  @media screen and (max-width: 1320px) {
    .fourthSection__list {
      margin-bottom: -30px; } }
  .fourthSection__listItem {
    background-color: #FFFFFF;
    border-radius: 146px;
    padding: 50px 50px 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center; }
    @media screen and (max-width: 1320px) {
      .fourthSection__listItem {
        margin-bottom: 30px; } }
  .fourthSection__image {
    margin-bottom: 30px; }
  .fourthSection__listTitle {
    margin-bottom: 7px; }

.fifthSection {
  padding: 130px 0;
  position: relative; }
  .fifthSection__decoration {
    position: absolute;
    right: -106px;
    top: 73px;
    -webkit-animation: top-bottom 8s infinite;
            animation: top-bottom 8s infinite; }
  .fifthSection__slide {
    background: #FFFFFF;
    border-radius: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    padding: 60px; }
  .fifthSection .splide__list {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
  .fifthSection .splide__slide.is-active {
    height: 843px !important; }
  .fifthSection .splide__slide.is-active {
    background: -webkit-gradient(linear, left top, left bottom, from(#FFA389), to(#FF6439));
    background: linear-gradient(180deg, #FFA389 0%, #FF6439 100%);
    -webkit-box-shadow: 0px 15px 40px rgba(255, 103, 61, 0.3);
            box-shadow: 0px 15px 40px rgba(255, 103, 61, 0.3);
    color: #FFFFFF; }
    .fifthSection .splide__slide.is-active p {
      color: #FFFFFF; }
    .fifthSection .splide__slide.is-active .button {
      background: #FFFFFF;
      -webkit-box-shadow: 0px 10px 25px rgba(255, 124, 84, 0.3);
              box-shadow: 0px 10px 25px rgba(255, 124, 84, 0.3);
      color: #FF7751; }
      .fifthSection .splide__slide.is-active .button:hover {
        -webkit-box-shadow: 0px 10px 25px white;
                box-shadow: 0px 10px 25px white; }
  .fifthSection__heading {
    margin-bottom: 50px; }
  .fifthSection__info {
    margin-bottom: 25px; }
  .fifthSection__price {
    margin-bottom: 40px; }

.sixthSection {
  background: #FFECE4;
  border-radius: 50px;
  padding: 64px 100px 39px 100px;
  margin: 0 -100px;
  position: relative; }
  @media screen and (max-width: 1320px) {
    .sixthSection {
      margin: 0;
      padding: 50px; } }
  .sixthSection__title {
    margin-bottom: 30px; }
  .sixthSection__info {
    margin-bottom: 50px; }
  .sixthSection__imageWrapper {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end; }
    @media screen and (max-width: 991px) {
      .sixthSection__imageWrapper {
        margin-top: 50px; } }
  .sixthSection__decoration {
    position: absolute; }
    .sixthSection__decoration_first {
      bottom: 187px;
      left: 0; }
    .sixthSection__decoration_second {
      -webkit-transform: rotate(131deg);
              transform: rotate(131deg);
      bottom: 126px;
      left: 0; }
    .sixthSection__decoration_third {
      -webkit-animation: top-bottom 8s infinite;
              animation: top-bottom 8s infinite; }
    .sixthSection__decoration_fourth {
      left: 0;
      -webkit-animation: top-bottom 8s infinite;
              animation: top-bottom 8s infinite; }
    .sixthSection__decoration_fifth {
      left: -49px;
      top: -75px;
      -webkit-animation: rotate 5s infinite;
              animation: rotate 5s infinite; }
  .sixthSection__circle {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    width: 307px;
    height: 307px;
    background: #FF9E75;
    border-radius: 50%;
    -webkit-filter: blur(100px);
            filter: blur(100px); }
  .sixthSection__image {
    width: 417px;
    z-index: 1;
    position: relative; }
    @media screen and (max-width: 991px) {
      .sixthSection__image {
        margin-top: 60px;
        width: 100%; } }

.button {
  background: -webkit-gradient(linear, left top, left bottom, from(#FFA992), color-stop(65%, #FF7852));
  background: linear-gradient(180deg, #FFA992 0%, #FF7852 65%);
  -webkit-box-shadow: 0px 10px 25px rgba(255, 124, 84, 0.3);
          box-shadow: 0px 10px 25px rgba(255, 124, 84, 0.3);
  border-radius: 30px;
  color: #FFFFFF;
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  padding: 16px 35px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  text-align: center; }
  @media screen and (max-width: 991px) {
    .button {
      padding: 16px; } }
  .button_green {
    -webkit-box-shadow: 0px 10px 25px rgba(125, 181, 35, 0.3) !important;
            box-shadow: 0px 10px 25px rgba(125, 181, 35, 0.3) !important; }
  .button_green {
    background: -webkit-gradient(linear, left top, left bottom, from(#00d7c3), color-stop(65%, #00d7c3));
    background: linear-gradient(180deg, #00d7c3 0%, #00d7c3 65%); }
    .button_green:hover {
      -webkit-box-shadow: 0 0 10px 0 #3de0d2 inset, 0 0 20px 2px rgba(75, 196, 182, 0.72) !important;
              box-shadow: 0 0 10px 0 #3de0d2 inset, 0 0 20px 2px rgba(75, 196, 182, 0.72) !important; }
  .button:hover {
    -webkit-box-shadow: 0 0 10px 0 #de694e inset, 0 0 20px 2px #ce7a5a;
            box-shadow: 0 0 10px 0 #de694e inset, 0 0 20px 2px #ce7a5a; }

@-webkit-keyframes rotate {
  50% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

@keyframes rotate {
  50% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

@-webkit-keyframes top-bottom {
  50% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px); } }

@keyframes top-bottom {
  50% {
    -webkit-transform: translateY(-30px);
            transform: translateY(-30px); } }

@-webkit-keyframes left-right {
  from {
    -webkit-transform: translateX(-30px);
            transform: translateX(-30px); }
  50% {
    -webkit-transform: translate(30px, 20px);
            transform: translate(30px, 20px); }
  100% {
    -webkit-transform: translateX(-30px);
            transform: translateX(-30px); } }

@keyframes left-right {
  from {
    -webkit-transform: translateX(-30px);
            transform: translateX(-30px); }
  50% {
    -webkit-transform: translate(30px, 20px);
            transform: translate(30px, 20px); }
  100% {
    -webkit-transform: translateX(-30px);
            transform: translateX(-30px); } }

@-webkit-keyframes right-left {
  from {
    -webkit-transform: translateX(15px);
            transform: translateX(15px); }
  50% {
    -webkit-transform: translate(-15px, 20px);
            transform: translate(-15px, 20px); }
  100% {
    -webkit-transform: translateX(15px);
            transform: translateX(15px); } }

@keyframes right-left {
  from {
    -webkit-transform: translateX(15px);
            transform: translateX(15px); }
  50% {
    -webkit-transform: translate(-15px, 20px);
            transform: translate(-15px, 20px); }
  100% {
    -webkit-transform: translateX(15px);
            transform: translateX(15px); } }

.footer {
  padding: 130px 0 30px;
  color: #707283;
  position: relative; }
  .footer__decoration {
    position: absolute;
    right: 132px;
    top: 59px;
    -webkit-animation: rotate 6s infinite;
            animation: rotate 6s infinite; }
  .footer__logo {
    margin-bottom: 25px; }
  .footer__info {
    margin-bottom: 30px; }
  .footer__heading {
    margin-bottom: 25px; }
  .footer__link {
    color: #707283;
    -webkit-text-decoration: none;
    text-decoration: none; }
    .footer__link:hover {
      -webkit-text-decoration: underline;
      text-decoration: underline;
      color: #FF7751; }
  .footer li:not(:last-child) {
    margin-bottom: 15px; }
  .footer__copyright {
    margin-top: 130px; }

.header {
  position: fixed;
  padding-left: 100px;
  padding-right: 100px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  z-index: 99;
  height: 90px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }
  .header_background {
    background: #FFF8F5; }
  @media screen and (max-width: 768px) {
    .header {
      padding: 0 15px; } }
  .header .hidden {
    display: none; }
  .header__logo {
    min-width: 148px; }
  .header__icons_hidden {
    display: none; }
  .header__navList {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
    @media screen and (max-width: 1120px) {
      .header__navList {
        display: none; } }
  .header__navLink {
    color: #242851;
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-align: center; }
    @media screen and (max-width: 1120px) {
      .header__navLink {
        font-size: 32px; } }
    .header__navLink:hover {
      color: #FF7751; }
  @media screen and (max-width: 768px) {
    .header__button {
      display: none; } }
  .header__button_mobile {
    display: none; }
    @media screen and (max-width: 768px) {
      .header__button_mobile {
        display: block; } }
  .header__navItem:not(:last-child) {
    margin-right: 55px; }
    @media screen and (max-width: 1120px) {
      .header__navItem:not(:last-child) {
        margin-right: 0;
        margin-bottom: 50px; } }
  .header__mobile {
    position: absolute;
    right: 0;
    top: 90px;
    background-color: #FFF8F5;
    z-index: 99;
    padding: 30px 30px 90px 90px;
    border-bottom-left-radius: 54px;
    width: 60%; }
    @media screen and (min-width: 1121px) {
      .header__mobile {
        display: none; } }
    @media screen and (max-width: 768px) {
      .header__mobile {
        width: 100%; } }

.navigationOpener {
  display: none;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 24px;
  height: 16px;
  margin-left: 10px;
  cursor: pointer; }
  @media screen and (max-width: 1120px) {
    .navigationOpener {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex; } }
  .navigationOpener span {
    position: relative;
    width: 100%;
    height: 2.67px;
    background: #FF7751;
    z-index: 100;
    cursor: pointer; }
    .navigationOpener span:before, .navigationOpener span:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      background: #FF7751;
      -webkit-transition: all .3s linear;
      transition: all .3s linear; }
    .navigationOpener span:before {
      top: -6px; }
    .navigationOpener span:after {
      top: 6px; }
  .navigationOpener_isActive span {
    -webkit-transition: all .3s linear;
    transition: all .3s linear;
    background: transparent; }
    .navigationOpener_isActive span:before, .navigationOpener_isActive span:after {
      top: 0;
      background: #FF7751; }
    .navigationOpener_isActive span:before {
      -webkit-transform: rotate(45deg);
              transform: rotate(45deg); }
    .navigationOpener_isActive span:after {
      right: 0;
      -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg); }

.navigationBackdrop {
  position: fixed;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  z-index: -100;
  -webkit-transition: all 300ms;
  transition: all 300ms; }
  @media screen and (min-width: 1121px) {
    .navigationBackdrop {
      display: none !important; } }
  .navigationBackdrop_isShown {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 98;
    display: block; }
`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/typography.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/first-section.scss","webpack://./src/styles/second-section.scss","webpack://./src/styles/third-section.scss","webpack://./src/styles/fourth-section.scss","webpack://./src/styles/fifth-section.scss","webpack://./src/styles/sixth-section.scss","webpack://./src/styles/button.scss","webpack://./src/styles/animation.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/header.scss","webpack://./src/styles/navigation-opener.scss","webpack://./src/styles/navigation-backdrop.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n  color: $font-color;\r\n  background: $background-color;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 18px;\r\n  line-height: 28px;\r\n}\r\n\r\n.content {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.container {\r\n  @media(min-width: 1200px) {\r\n    max-width: 1170px;\r\n  }\r\n\r\n  @media (max-width: 991px) {\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n\r\na {\r\n  transition: color 300ms;\r\n  //color: $blue;\r\n  text-decoration: none;\r\n\r\n  &:hover {\r\n    //color: $btn-hover;\r\n    text-decoration: none;\r\n  }\r\n\r\n  &:active {\r\n    //color: $btn-active;\r\n    text-decoration: none;\r\n  }\r\n\r\n  &:disabled,\r\n  &_disabled {\r\n    pointer-events: none;\r\n    text-decoration: none;\r\n    //color: $disable;\r\n  }\r\n}\r\n","$background-color: #FFF8F5;\r\n$font-color: #242851;\r\n$red: #FF7751;\r\n$gradient-red: linear-gradient(180deg, #FFA992 0%, #FF7852 65%);\r\n$gradient-green: linear-gradient(180deg, #C3E48F 0%, #8EC637 65%);\r\n",".typography {\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  &__body {\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    line-height: 25px;\r\n    font-family: $font-family-second;\r\n  }\r\n\r\n  &__h1 {\r\n    font-family: $font-family-main;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 100px;\r\n    line-height: 120px;\r\n\r\n    @media screen and (max-width: 991px) {\r\n      font-size: 57px;\r\n      line-height: 70px;\r\n    }\r\n  }\r\n\r\n  &__h2 {\r\n    font-family: $font-family-main;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 64px;\r\n    line-height: 87px;\r\n\r\n    @media screen and (max-width: 991px) {\r\n      font-size: 50px;\r\n      line-height: 57px;\r\n    }\r\n\r\n  }\r\n\r\n  &__h3 {\r\n    font-family: $font-family-main;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 50px;\r\n    line-height: 68px;\r\n  }\r\n\r\n  &__h4 {\r\n    font-family: $font-family-main;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 26px;\r\n    line-height: 35px;\r\n  }\r\n\r\n  &__info {\r\n    font-family: $font-family-main;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 20px;\r\n    line-height: 27px;\r\n  }\r\n\r\n  &__bold {\r\n    font-family: $font-family-main;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n  }\r\n\r\n  &__smallText {\r\n    font-family: $font-family-second;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n  }\r\n\r\n  &__centered {\r\n    text-align: center;\r\n  }\r\n\r\n  &__red {\r\n    color: #FF7751;\r\n  }\r\n}","$font-family-main: 'Nunito', sans-serif;\r\n$font-family-second: 'Quicksand', sans-serif;\r\n",".firstSection {\r\n  padding-top: 150px;\r\n  padding-bottom: 192px;\r\n  position: relative;\r\n\r\n  &__title {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  &__text {\r\n    margin-bottom: 60px;\r\n  }\r\n\r\n  &__buttons {\r\n    display: flex;\r\n  }\r\n\r\n  &__button {\r\n    margin-right: 20px;\r\n  }\r\n\r\n  &__image {\r\n    width: 638px;\r\n\r\n    @media screen and (max-width: 768px) {\r\n      margin-top: 30px;\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n  &__circle {\r\n    position: absolute;\r\n    width: 680px;\r\n    height: 680px;\r\n    background: #FFCDB8;\r\n    filter: blur(100px);\r\n    bottom: 130px;\r\n    z-index: -1;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  &__imageWrapper {\r\n    position: relative;\r\n  }\r\n\r\n  &__decoration {\r\n    position: absolute;\r\n    width: auto;\r\n\r\n    &_first {\r\n      right: 0;\r\n      top: 0;\r\n      animation: top-bottom 5s infinite;\r\n    }\r\n\r\n    &_second {\r\n      right: -118px;\r\n      bottom: 176px;\r\n      animation: top-bottom 8s infinite;\r\n    }\r\n\r\n    &_third {\r\n      left: -90px;\r\n      top: 184px;\r\n      animation: rotate 5s infinite;\r\n    }\r\n\r\n    &_fourth {\r\n      bottom: 244px;\r\n      animation: top-bottom 7s infinite;\r\n    }\r\n  }\r\n}",".secondSection {\r\n  background: #FFECE4;\r\n  border-radius: 50px;\r\n  padding: 100px;\r\n  margin: 0 -100px;\r\n\r\n  @media screen and (max-width: 1320px) {\r\n    margin: 0;\r\n    padding: 50px;\r\n  }\r\n\r\n  &__info {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  &__title {\r\n    margin-bottom: 60px;\r\n  }\r\n\r\n  &__list {\r\n    @media screen and (max-width: 1199px) {\r\n      margin-bottom: -30px;\r\n    }\r\n\r\n    li {\r\n      @media screen and (max-width: 1199px) {\r\n        margin-bottom: 30px;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__listItem {\r\n    background: #FFFFFF;\r\n    border-radius: 30px;\r\n    padding: 50px 40px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    &:hover {\r\n      background: linear-gradient(180deg, #FFBBA9 0%, #FF6236 100%);\r\n      box-shadow: 0px 15px 40px rgba(255, 122, 85, 0.3);\r\n      color: #FFFFFF;\r\n    }\r\n  }\r\n\r\n  &__image {\r\n    margin: 0 auto 35px;\r\n    box-shadow: 0px 12px 25px rgba(98, 131, 118, 0.3);\r\n    border-radius: 50%;\r\n  }\r\n}",".thirdSection {\r\n  padding: 155px 0;\r\n  position: relative;\r\n\r\n  &__info {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  &__title {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  &__text {\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  &__image {\r\n    width: 492px;\r\n\r\n    @media screen and (max-width: 991px) {\r\n      margin-top: 30px;\r\n      width: 100%;\r\n      max-width: 492px;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    margin-bottom: 46px;\r\n  }\r\n\r\n  &__listItem {\r\n    display: flex;\r\n\r\n    &:not(:last-child) {\r\n      margin-bottom: 25px;\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    margin-right: 10px;\r\n  }\r\n\r\n  &__circle {\r\n    position: absolute;\r\n    width: 685px;\r\n    height: 685px;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: #FFDBCC;\r\n    filter: blur(100px);\r\n    z-index: -1;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  &__imageWrapper {\r\n    position: relative;\r\n    justify-content: center;\r\n    display: flex;\r\n  }\r\n\r\n  &__decoration {\r\n    position: absolute;\r\n\r\n    &_first {\r\n      right: -45px;\r\n      bottom: -50px;\r\n      animation: right-left 10s infinite;\r\n    }\r\n\r\n    &_second {\r\n      left: -108px;\r\n      bottom: -50px;\r\n      animation: left-right 10s infinite;\r\n    }\r\n\r\n    &_third {\r\n      left: -90px;\r\n      top: 68px;\r\n      animation: top-bottom 8s infinite;\r\n    }\r\n\r\n    &_fourth {\r\n      right: -63px;\r\n      top: 140px;\r\n      width: 60px;\r\n      animation: rotate 5s infinite;\r\n    }\r\n  }\r\n}",".fourthSection {\r\n  background: #FFECE4;\r\n  border-radius: 50px;\r\n  padding: 100px;\r\n  margin: 0 -100px;\r\n\r\n  @media screen and (max-width: 1320px) {\r\n    margin: 0;\r\n    padding: 50px;\r\n  }\r\n\r\n  &__info {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  &__title {\r\n    margin-bottom: 60px;\r\n  }\r\n  &__list{\r\n    @media screen and (max-width: 1320px) {\r\n      margin-bottom: -30px;\r\n    }\r\n  }\r\n\r\n  &__listItem {\r\n    background-color: #FFFFFF;\r\n    border-radius: 146px;\r\n    padding: 50px 50px 70px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n\r\n    @media screen and (max-width: 1320px) {\r\n      margin-bottom: 30px;\r\n    }\r\n  }\r\n\r\n  &__image {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  &__listTitle {\r\n    margin-bottom: 7px;\r\n  }\r\n\r\n  &__listText {\r\n  }\r\n}",".fifthSection {\r\n  padding: 130px 0;\r\n  position: relative;\r\n\r\n  &__decoration {\r\n    position: absolute;\r\n    right: -106px;\r\n    top: 73px;\r\n    animation: top-bottom 8s infinite;\r\n  }\r\n\r\n  &__slide {\r\n    background: #FFFFFF;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 60px;\r\n  }\r\n\r\n  .splide__list {\r\n    align-items: center;\r\n  }\r\n\r\n  .splide__slide.is-active {\r\n    background: linear-gradient(180deg, #FFA389 0%, #FF6439 100%);\r\n    box-shadow: 0px 15px 40px rgba(255, 103, 61, 0.3);\r\n    color: #FFFFFF;\r\n    height: 843px !important;\r\n\r\n    p {\r\n      color: #FFFFFF;\r\n    }\r\n\r\n    .button {\r\n      background: #FFFFFF;\r\n      box-shadow: 0px 10px 25px rgba(255, 124, 84, 0.3);\r\n      color: #FF7751;\r\n\r\n      &:hover{\r\n        box-shadow: 0px 10px 25px rgb(255, 255, 255);\r\n      }\r\n    }\r\n  }\r\n\r\n  &__heading {\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  &__info {\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  &__price {\r\n    margin-bottom: 40px;\r\n  }\r\n}",".sixthSection {\r\n  background: #FFECE4;\r\n  border-radius: 50px;\r\n  padding: 64px 100px 39px 100px;\r\n  margin: 0 -100px;\r\n  position: relative;\r\n\r\n  @media screen and (max-width: 1320px) {\r\n    margin: 0;\r\n    padding: 50px;\r\n  }\r\n\r\n  &__title {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  &__info {\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  &__imageWrapper {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n\r\n    @media screen and (max-width: 991px) {\r\n      margin-top: 50px;\r\n    }\r\n  }\r\n\r\n  &__decoration {\r\n    position: absolute;\r\n\r\n    &_first {\r\n      bottom: 187px;\r\n      left: 0;\r\n    }\r\n\r\n    &_second {\r\n      transform: rotate(131deg);\r\n      bottom: 126px;\r\n      left: 0;\r\n    }\r\n\r\n    &_third{\r\n      animation: top-bottom 8s infinite;\r\n    }\r\n\r\n    &_fourth {\r\n      left: 0;\r\n      animation: top-bottom 8s infinite;\r\n    }\r\n\r\n    &_fifth {\r\n      left: -49px;\r\n      top: -75px;\r\n      animation: rotate 5s infinite;\r\n    }\r\n  }\r\n\r\n  &__circle {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 307px;\r\n    height: 307px;\r\n    background: #FF9E75;\r\n    border-radius: 50%;\r\n    filter: blur(100px);\r\n  }\r\n\r\n  &__image {\r\n    width: 417px;\r\n    z-index: 1;\r\n    position: relative;\r\n\r\n    @media screen and (max-width: 991px) {\r\n      margin-top: 60px;\r\n      width: 100%;\r\n    }\r\n  }\r\n}",".button {\r\n  background: $gradient-red;\r\n  box-shadow: 0px 10px 25px rgba(255, 124, 84, 0.3);\r\n  border-radius: 30px;\r\n  color: #FFFFFF;\r\n  font-family: $font-family-main;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  line-height: 27px;\r\n  padding: 16px 35px;\r\n  box-sizing: border-box;\r\n  transition: all 300ms;\r\n  text-align: center;\r\n\r\n  @media screen and (max-width: 991px) {\r\n    padding: 16px;\r\n  }\r\n\r\n  &_green {\r\n    background: linear-gradient(180deg, #00d7c3 0%, #00d7c3 65%);\r\n    box-shadow: 0px 10px 25px rgba(125, 181, 35, 0.3) !important;\r\n\r\n    &:hover {\r\n      box-shadow: 0 0 10px 0 #3de0d2 inset, 0 0 20px 2px rgba(75, 196, 182, 0.72) !important;\r\n    }\r\n  }\r\n\r\n  &:hover {\r\n    box-shadow: 0 0 10px 0 #de694e inset, 0 0 20px 2px #ce7a5a;\r\n  }\r\n}",".animation {\r\n  @keyframes rotate {\r\n    50% {\r\n      transform: rotate(90deg);\r\n    }\r\n  }\r\n\r\n  @keyframes top-bottom {\r\n    50% {\r\n      transform: translateY(-30px);\r\n    }\r\n  }\r\n\r\n  @keyframes left-right {\r\n    from {\r\n      transform: translateX(-30px);\r\n    }\r\n    50% {\r\n      transform: translate(30px, 20px);\r\n    }\r\n    100% {\r\n      transform: translateX(-30px);\r\n    }\r\n  }\r\n\r\n  @keyframes right-left {\r\n    from {\r\n      transform: translateX(15px);\r\n    }\r\n    50% {\r\n      transform: translate(-15px, 20px);\r\n    }\r\n    100% {\r\n      transform: translateX(15px);\r\n    }\r\n  }\r\n}\r\n",".footer {\r\n  padding: 130px 0 30px;\r\n  color: #707283;\r\n  position: relative;\r\n\r\n  &__decoration {\r\n    position: absolute;\r\n    right: 132px;\r\n    top: 59px;\r\n    animation: rotate 6s infinite;\r\n  }\r\n\r\n  &__logo {\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  &__info {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  &__heading {\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  &__link {\r\n    color: #707283;\r\n    text-decoration: none;\r\n\r\n    &:hover {\r\n      text-decoration: underline;\r\n      color: $red;\r\n    }\r\n  }\r\n\r\n  li:not(:last-child) {\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  &__copyright {\r\n    margin-top: 130px;\r\n  }\r\n}",".header {\r\n  position: fixed;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  z-index: 99;\r\n  height: 90px;\r\n  align-items: center;\r\n\r\n  &_background {\r\n    background: #FFF8F5;\r\n\r\n  }\r\n\r\n  @media screen and (max-width: 768px) {\r\n    padding: 0 15px;\r\n  }\r\n\r\n  .hidden {\r\n    display: none;\r\n  }\r\n\r\n  &__logo {\r\n    min-width: 148px;\r\n  }\r\n\r\n  &__icons {\r\n    &_hidden {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__navList {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    @media screen and (max-width: 1120px) {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__navLink {\r\n    color: #242851;\r\n    font-family: $font-family-main;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n    line-height: 27px;\r\n    text-align: center;\r\n\r\n    @media screen and (max-width: 1120px) {\r\n      font-size: 32px;\r\n    }\r\n\r\n    &:hover {\r\n      color: $red;\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    @media screen and (max-width: 768px) {\r\n      display: none;\r\n    }\r\n\r\n    &_mobile {\r\n      display: none;\r\n\r\n      @media screen and (max-width: 768px) {\r\n        display: block;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__navItem:not(:last-child) {\r\n    margin-right: 55px;\r\n\r\n    @media screen and (max-width: 1120px) {\r\n      margin-right: 0;\r\n      margin-bottom: 50px;\r\n    }\r\n  }\r\n\r\n  &__mobile {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 90px;\r\n    background-color: $background-color;\r\n    z-index: 99;\r\n    padding: 30px 30px 90px 90px;\r\n    border-bottom-left-radius: 54px;\r\n    width: 60%;\r\n\r\n    @media screen and (min-width: 1121px) {\r\n      display: none;\r\n    }\r\n\r\n    @media screen and (max-width: 768px) {\r\n      width: 100%;\r\n    }\r\n  }\r\n}",".navigationOpener {\r\n  //display: flex;\r\n  display: none;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 24px;\r\n  height: 16px;\r\n  margin-left: 10px;\r\n  cursor: pointer;\r\n\r\n  @media screen and (max-width: 1120px) {\r\n    display: flex;\r\n  }\r\n\r\n  span {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 2.67px;\r\n    background: $red;\r\n    z-index: 100;\r\n    cursor: pointer;\r\n\r\n    &:before, &:after {\r\n      content: '';\r\n      position: absolute;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      background: $red;\r\n      transition: all .3s linear;\r\n    }\r\n\r\n    &:before {\r\n      top: -6px;\r\n    }\r\n\r\n    &:after {\r\n      top: 6px;\r\n    }\r\n  }\r\n\r\n  &_isActive {\r\n    span {\r\n      transition: all .3s linear;\r\n      background: transparent;\r\n\r\n      &:before, &:after {\r\n        top: 0;\r\n        background: $red;\r\n      }\r\n\r\n      &:before {\r\n        transform: rotate(45deg);\r\n      }\r\n\r\n      &:after {\r\n        right: 0;\r\n        transform: rotate(-45deg);\r\n      }\r\n    }\r\n  }\r\n}",".navigationBackdrop {\r\n  position: fixed;\r\n  top: 90px;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: none;\r\n  z-index: -100;\r\n  transition: all 300ms;\r\n\r\n  @media screen and (min-width: 1121px) {\r\n    display: none !important;\r\n  }\r\n\r\n  &_isShown {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    z-index: 98;\r\n    display: block;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./aos.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/aos/dist/aos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_aos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_aos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_aos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_aos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");


new _splidejs_splide__WEBPACK_IMPORTED_MODULE_1__["default"]('.splide', {
  type: 'loop',
  speed: 900,
  autoplay: true,
  perPage: 3,
  arrows: false,
  pagination: false,
  pauseOnFocus: true,
  rewind: true,
  focus: 'center',
  perMove: 1,
  updateOnMove: true,
  drag: true,
  swipe: true,
  start: 1,
  fixedHeight: 750,
  breakpoints: {
    1198: {
      perPage: 2
    },
    768: {
      perPage: 1,
      start: 0
    }
  }
}).mount();


aos__WEBPACK_IMPORTED_MODULE_2___default().init({
  easing: 'ease-out',
  once: true,
  disable: 'phone'
});

//menu open
var menuBtn = document.querySelector('.navigationOpener');
var menu = document.querySelector('.header__mobile');
var backdrop = document.querySelector('.navigationBackdrop');
menuBtn.addEventListener('click', onMenuBtnClick);
function onMenuBtnClick(e) {
  menuBtn.classList.toggle('navigationOpener_isActive');
  menu.classList.toggle('hidden');
  backdrop.classList.toggle('navigationBackdrop_isShown');
}
var header = document.querySelector('.header');
document.addEventListener('DOMContentLoaded', function () {
  onScrollChangeBackground();
});
function onScrollChangeBackground() {
  addEventListener('scroll', function () {
    window.scrollY > 15 ? header.classList.add('header_background') : header.classList.remove('header_background');
  });
  window.scrollY > 15 ? header.classList.add('header_background') : header.classList.remove('header_background');
}
;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLE1BQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFVBQVUsRUFBRSxhQUFhO0FBQzFFLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLGlCQUFpQjtBQUMzQixVQUFVLGdCQUFnQjtBQUMxQixVQUFVLHVCQUF1QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnR0FBZ0csYUFBYSxtQkFBbUIsTUFBTSxhQUFhLG1CQUFtQixNQUFNLGFBQWEsbUJBQW1CLE1BQU0sYUFBYSxtQkFBbUIsTUFBTSxjQUFjLG1CQUFtQixPQUFPLGNBQWMsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGVBQWUsbUJBQW1CLFFBQVEsZUFBZSxtQkFBbUIsUUFBUSxlQUFlLG1CQUFtQixRQUFRLGdCQUFnQixtQkFBbUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFNBQVMsZ0JBQWdCLG1CQUFtQixTQUFTLGdCQUFnQixtQkFBbUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFNBQVMsZ0JBQWdCLG1CQUFtQixTQUFTLGdCQUFnQixtQkFBbUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFNBQVMsZ0JBQWdCLG1CQUFtQixTQUFTLGdCQUFnQixtQkFBbUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFNBQVMsZ0JBQWdCLG1CQUFtQixTQUFTLGdCQUFnQixtQkFBbUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFNBQVMsZ0JBQWdCLG1CQUFtQixTQUFTLGdCQUFnQixtQkFBbUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFNBQVMsZ0JBQWdCLG1CQUFtQixTQUFTLGdCQUFnQixtQkFBbUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFNBQVMsZ0JBQWdCLG1CQUFtQixTQUFTLGdCQUFnQixtQkFBbUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFNBQVMsZ0JBQWdCLG1CQUFtQixTQUFTLGdCQUFnQixtQkFBbUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFNBQVMsZ0JBQWdCLG1CQUFtQixTQUFTLGdCQUFnQixtQkFBbUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixVQUFVLGlCQUFpQixtQkFBbUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixVQUFVLGlCQUFpQixtQkFBbUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixVQUFVLGlCQUFpQixtQkFBbUIsVUFBVSx1QkFBdUIsVUFBVSx1QkFBdUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixVQUFVLGlCQUFpQixtQkFBbUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixVQUFVLGlCQUFpQixtQkFBbUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixVQUFVLGlCQUFpQixtQkFBbUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixVQUFVLGlCQUFpQixtQkFBbUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixVQUFVLGlCQUFpQixtQkFBbUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixVQUFVLGlCQUFpQixtQkFBbUIsVUFBVSxpQkFBaUIsbUJBQW1CLFVBQVUsaUJBQWlCLG1CQUFtQixLQUFLLEtBQUssV0FBVyxZQUFZLFlBQVksYUFB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b0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHVCQUF1Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxvQkFBb0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHlCQUF5Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxzQkFBc0IsNkZBQTZGLDBCQUEwQix1RkFBdUYsb0JBQW9CLCtHQUErRyx1QkFBdUIsNkZBQTZGLHVCQUF1Qix1RkFBdUYsb0JBQW9CLCtHQUErRyxvQkFBb0IsV0FBVyxvQkFBb0IsdUJBQXVCLG9CQUFvQixxRkFBcUYseURBQXlELGlGQUFpRixnQ0FBZ0MsdUZBQXVGLG1DQUFtQyx5RkFBeUYsb0NBQW9DLCtGQUErRix1Q0FBdUMsaUdBQWlHLDJEQUEyRCxtR0FBbUcsNkRBQTZELHlHQUF5Ryw0REFBNEQsaUdBQWlHLHlEQUF5RCxtR0FBbUcseURBQXlELHlHQUF5RywwREFBMEQsaUdBQWlHLDBEQUEwRCxtR0FBbUcseURBQXlELHlHQUF5Ryw0REFBNEQsbUdBQW1HLDBEQUEwRCxxR0FBcUcseURBQXlELDJHQUEyRyw0REFBNEQsbUdBQW1HLDBEQUEwRCxxR0FBcUcseURBQXlELDJHQUEyRyw0REFBNEQsY0FBYyxrREFBa0QsVUFBVSw4Q0FBOEMsc0NBQXNDLHdEQUF3RCw4REFBOEQsVUFBVSx1QkFBdUIsZUFBZSxvQ0FBb0MseUNBQXlDLGlDQUFpQyxzQ0FBc0MsMENBQTBDLGtDQUFrQyx1Q0FBdUMsMENBQTBDLGtDQUFrQyxzQ0FBc0MseUNBQXlDLGlDQUFpQywwQ0FBMEMsOENBQThDLHNDQUFzQyx5Q0FBeUMsNkNBQTZDLHFDQUFxQyw0Q0FBNEMsK0NBQStDLHVDQUF1QywyQ0FBMkMsOENBQThDLHNDQUFzQyxrREFBa0QsVUFBVSw4Q0FBOEMsc0NBQXNDLHdEQUF3RCw4REFBOEQsVUFBVSx5Q0FBeUMsaUNBQWlDLG9DQUFvQyw0QkFBNEIsb0JBQW9CLHVDQUF1QyxtREFBbUQsMkNBQTJDLHlDQUF5QyxvREFBb0QsNENBQTRDLDBDQUEwQyxvREFBb0QsNENBQTRDLHlDQUF5QyxtREFBbUQsMkNBQTJDLHFDQUFxQyw2QkFBNkIscUJBQXFCLHdDQUF3QyxvREFBb0QsNENBQTRDLDBDQUEwQyxxREFBcUQsNkNBQTZDLDJDQUEyQyxxREFBcUQsNkNBQTZDLDBDQUEwQyxvREFBb0QsNENBQTRDLG9EQUFvRCxzQ0FBc0MsOEJBQThCLGdEQUFnRCxrQkFBa0IsZ0VBQWdFLG1CQUFtQixnQ0FBZ0Msd0JBQXdCLHFDQUFxQyx3Q0FBd0MsZ0NBQWdDLHVDQUF1Qyx5Q0FBeUMsaUNBQWlDLHdDQUF3Qyx5Q0FBeUMsaUNBQWlDLHVDQUF1Qyx3Q0FBd0MsZ0NBQWdDLGtEQUFrRCxtQ0FBbUMsMkJBQTJCLHNDQUFzQyw4QkFBOEIsZ0RBQWdELHNDQUFzQyx1REFBdUQsK0NBQStDLGtEQUFrRCxpREFBaUQseUNBQXlDLHVDQUF1QyxzREFBc0QsOENBQThDLG1EQUFtRCxpREFBaUQseUNBQXlDLG9DQUFvQyx1REFBdUQsK0NBQStDLGdEQUFnRCxpREFBaUQseUNBQXlDLHNDQUFzQyxzREFBc0QsOENBQThDLGtEQUFrRCxpREFBaUQsMENBQTBDLG1CQUFtQjtBQUMxMHRDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy82QnZDO0FBQzZHO0FBQ2pCO0FBQ2lFO0FBQzdKLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsMEJBQTBCLHNJQUFpQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpdEJBQWl0QixVQUFVLGdCQUFnQixLQUFLLGdCQUFnQixLQUFLLFlBQVksV0FBVyxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksZUFBZSxjQUFjLGFBQWEsYUFBYSxhQUFhLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxLQUFLLHdCQUF3QixLQUFLLEtBQUssc0JBQXNCLEtBQUssWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxVQUFVLGVBQWUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGtCQUFrQixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sS0FBSyxVQUFVLHVCQUF1QixLQUFLLGFBQWEsY0FBYyxhQUFhLFdBQVcsaUJBQWlCLE1BQU0sS0FBSyxVQUFVLHVCQUF1QixLQUFLLGFBQWEsY0FBYyxhQUFhLFdBQVcsaUJBQWlCLE1BQU0sYUFBYSxjQUFjLGFBQWEsV0FBVyxpQkFBaUIsTUFBTSxhQUFhLGNBQWMsYUFBYSxXQUFXLGlCQUFpQixNQUFNLGFBQWEsY0FBYyxhQUFhLFdBQVcsaUJBQWlCLE1BQU0sYUFBYSxjQUFjLGFBQWEsV0FBVyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxnQkFBZ0IsT0FBTyxZQUFZLGFBQWEsa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sV0FBVyxXQUFXLGVBQWUsS0FBSyxpQkFBaUIsTUFBTSxlQUFlLEtBQUssS0FBSyxZQUFZLHFCQUFxQixLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxZQUFZLGdCQUFnQixLQUFLLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxZQUFZLGFBQWEsV0FBVyxpQkFBaUIsTUFBTSxLQUFLLFVBQVUsc0JBQXNCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sS0FBSyx1QkFBdUIsS0FBSyxLQUFLLHVCQUF1QixLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsT0FBTyxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLGVBQWUsS0FBSyxLQUFLLFlBQVksV0FBVyx1QkFBdUIsS0FBSyxpQkFBaUIsTUFBTSxXQUFXLFdBQVcsZUFBZSxLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksV0FBVyxlQUFlLEtBQUssaUJBQWlCLE1BQU0sVUFBVSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxZQUFZLGFBQWEsV0FBVyxpQkFBaUIsTUFBTSxLQUFLLFVBQVUsc0JBQXNCLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sS0FBSyx1QkFBdUIsS0FBSyxZQUFZLGFBQWEsYUFBYSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxLQUFLLHVCQUF1QixLQUFLLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxhQUFhLG1CQUFtQixNQUFNLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sS0FBSyxVQUFVLHNCQUFzQixNQUFNLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLEtBQUssdUJBQXVCLEtBQUssaUJBQWlCLE1BQU0sVUFBVSxlQUFlLEtBQUssWUFBWSxhQUFhLFdBQVcsZUFBZSxLQUFLLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLEtBQUssWUFBWSxzQkFBc0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLEtBQUssc0JBQXNCLEtBQUssWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE9BQU8sYUFBYSxtQkFBbUIsT0FBTyxLQUFLLFlBQVksd0JBQXdCLE1BQU0sS0FBSyxZQUFZLHdCQUF3QixNQUFNLEtBQUssWUFBWSx3QkFBd0IsTUFBTSxLQUFLLFlBQVksd0JBQXdCLE1BQU0sS0FBSyxZQUFZLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSx3QkFBd0IsTUFBTSxLQUFLLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxZQUFZLHdCQUF3QixNQUFNLEtBQUssWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLFlBQVksd0JBQXdCLE1BQU0sS0FBSyxZQUFZLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSx3QkFBd0IsT0FBTyxZQUFZLFdBQVcsaUJBQWlCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGlCQUFpQixLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxNQUFNLHVCQUF1QixNQUFNLGdCQUFnQixLQUFLLGlCQUFpQixNQUFNLGVBQWUsTUFBTSxXQUFXLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sS0FBSyxxQkFBcUIsS0FBSyxVQUFVLGFBQWEsY0FBYyxhQUFhLFdBQVcsWUFBWSxrQkFBa0IsTUFBTSxLQUFLLHFCQUFxQixNQUFNLGdCQUFnQixNQUFNLEtBQUsscUJBQXFCLEtBQUssZUFBZSxLQUFLLEtBQUsscUJBQXFCLEtBQUssaUJBQWlCLE1BQU0sS0FBSyxVQUFVLHVCQUF1QixLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsWUFBWSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssS0FBSyxxQkFBcUIsS0FBSyxLQUFLLHFCQUFxQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksZ0JBQWdCLEtBQUssS0FBSyxXQUFXLFdBQVcsc0JBQXNCLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLGVBQWUsT0FBTyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixPQUFPLGdCQUFnQixNQUFNLGdCQUFnQixLQUFLLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxVQUFVLGlCQUFpQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxZQUFZLG1C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WUFBTTtJQUM3Qk8sTUFBTSxDQUFDQyxPQUFPLEdBQUcsRUFBRSxHQUFHSCxNQUFNLENBQUNGLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLG1CQUFtQixDQUFDLEdBQUdKLE1BQU0sQ0FBQ0YsU0FBUyxDQUFDTyxNQUFNLENBQUMsbUJBQW1CLENBQUM7RUFDbEgsQ0FBQyxDQUFDO0VBRUZILE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLEVBQUUsR0FBR0gsTUFBTSxDQUFDRixTQUFTLENBQUNNLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHSixNQUFNLENBQUNGLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLG1CQUFtQixDQUFDO0FBQ2xIO0FBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvQHNwbGlkZWpzL3NwbGlkZS9kaXN0L2pzL3NwbGlkZS5lc20uanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9hb3MvZGlzdC9hb3MuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9Ac3BsaWRlanMvc3BsaWRlL2Rpc3QvY3NzL3NwbGlkZS1jb3JlLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9hb3MvZGlzdC9hb3MuY3NzIiwid2VicGFjazovL3Rlc3QvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvYW9zL2Rpc3QvYW9zLmNzcz8wNmExIiwid2VicGFjazovL3Rlc3QvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NmZlMSIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Rlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogU3BsaWRlLmpzXG4gKiBWZXJzaW9uICA6IDMuNi4xMlxuICogTGljZW5zZSAgOiBNSVRcbiAqIENvcHlyaWdodDogMjAyMiBOYW90b3NoaSBGdWppdGFcbiAqL1xuY29uc3QgUFJPSkVDVF9DT0RFID0gXCJzcGxpZGVcIjtcbmNvbnN0IERBVEFfQVRUUklCVVRFID0gYGRhdGEtJHtQUk9KRUNUX0NPREV9YDtcblxuY29uc3QgQ1JFQVRFRCA9IDE7XG5jb25zdCBNT1VOVEVEID0gMjtcbmNvbnN0IElETEUgPSAzO1xuY29uc3QgTU9WSU5HID0gNDtcbmNvbnN0IERFU1RST1lFRCA9IDU7XG5jb25zdCBTVEFURVMgPSB7XG4gIENSRUFURUQsXG4gIE1PVU5URUQsXG4gIElETEUsXG4gIE1PVklORyxcbiAgREVTVFJPWUVEXG59O1xuXG5jb25zdCBERUZBVUxUX0VWRU5UX1BSSU9SSVRZID0gMTA7XG5jb25zdCBERUZBVUxUX1VTRVJfRVZFTlRfUFJJT1JJVFkgPSAyMDtcblxuZnVuY3Rpb24gZW1wdHkoYXJyYXkpIHtcbiAgYXJyYXkubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qoc3ViamVjdCkge1xuICByZXR1cm4gIWlzTnVsbChzdWJqZWN0KSAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gXCJvYmplY3RcIjtcbn1cbmZ1bmN0aW9uIGlzQXJyYXkoc3ViamVjdCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShzdWJqZWN0KTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oc3ViamVjdCkge1xuICByZXR1cm4gdHlwZW9mIHN1YmplY3QgPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKHN1YmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdWJqZWN0ID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNVbmRlZmluZWQoc3ViamVjdCkge1xuICByZXR1cm4gdHlwZW9mIHN1YmplY3QgPT09IFwidW5kZWZpbmVkXCI7XG59XG5mdW5jdGlvbiBpc051bGwoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdCA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaCh2YWx1ZXMsIGl0ZXJhdGVlKSB7XG4gIHRvQXJyYXkodmFsdWVzKS5mb3JFYWNoKGl0ZXJhdGVlKTtcbn1cblxuZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5LCBpdGVtcykge1xuICBhcnJheS5wdXNoKC4uLnRvQXJyYXkoaXRlbXMpKTtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5mdW5jdGlvbiBzbGljZShhcnJheUxpa2UsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGFycmF5UHJvdG8uc2xpY2UuY2FsbChhcnJheUxpa2UsIHN0YXJ0LCBlbmQpO1xufVxuXG5mdW5jdGlvbiBmaW5kKGFycmF5TGlrZSwgcHJlZGljYXRlKSB7XG4gIHJldHVybiBzbGljZShhcnJheUxpa2UpLmZpbHRlcihwcmVkaWNhdGUpWzBdO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbG0sIGNsYXNzZXMsIGFkZCkge1xuICBpZiAoZWxtKSB7XG4gICAgZm9yRWFjaChjbGFzc2VzLCAobmFtZSkgPT4ge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgZWxtLmNsYXNzTGlzdFthZGQgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0obmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxtLCBjbGFzc2VzKSB7XG4gIHRvZ2dsZUNsYXNzKGVsbSwgaXNTdHJpbmcoY2xhc3NlcykgPyBjbGFzc2VzLnNwbGl0KFwiIFwiKSA6IGNsYXNzZXMsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmQocGFyZW50LCBjaGlsZHJlbikge1xuICBmb3JFYWNoKGNoaWxkcmVuLCBwYXJlbnQuYXBwZW5kQ2hpbGQuYmluZChwYXJlbnQpKTtcbn1cblxuZnVuY3Rpb24gYmVmb3JlKG5vZGVzLCByZWYpIHtcbiAgZm9yRWFjaChub2RlcywgKG5vZGUpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSByZWYucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyhlbG0sIHNlbGVjdG9yKSB7XG4gIHJldHVybiBpc0hUTUxFbGVtZW50KGVsbSkgJiYgKGVsbVtcIm1zTWF0Y2hlc1NlbGVjdG9yXCJdIHx8IGVsbS5tYXRjaGVzKS5jYWxsKGVsbSwgc2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbihwYXJlbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBwYXJlbnQgPyBzbGljZShwYXJlbnQuY2hpbGRyZW4pLmZpbHRlcigoY2hpbGQpID0+IG1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKSkgOiBbXTtcbn1cblxuZnVuY3Rpb24gY2hpbGQocGFyZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPyBjaGlsZHJlbihwYXJlbnQsIHNlbGVjdG9yKVswXSA6IHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxuZnVuY3Rpb24gZm9yT3duKG9iamVjdCwgaXRlcmF0ZWUsIHJpZ2h0KSB7XG4gIGlmIChvYmplY3QpIHtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAga2V5cyA9IHJpZ2h0ID8ga2V5cy5yZXZlcnNlKCkgOiBrZXlzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChrZXkgIT09IFwiX19wcm90b19fXCIpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGVlKG9iamVjdFtrZXldLCBrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbihvYmplY3QpIHtcbiAgc2xpY2UoYXJndW1lbnRzLCAxKS5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICBmb3JPd24oc291cmNlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgb2JqZWN0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKG9iamVjdCwgc291cmNlKSB7XG4gIGZvck93bihzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBvYmplY3Rba2V5XSA9IHZhbHVlLnNsaWNlKCk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIG9iamVjdFtrZXldID0gbWVyZ2UoaXNPYmplY3Qob2JqZWN0W2tleV0pID8gb2JqZWN0W2tleV0gOiB7fSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbG0sIGF0dHJzKSB7XG4gIGlmIChlbG0pIHtcbiAgICBmb3JFYWNoKGF0dHJzLCAoYXR0cikgPT4ge1xuICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWxtLCBhdHRycywgdmFsdWUpIHtcbiAgaWYgKGlzT2JqZWN0KGF0dHJzKSkge1xuICAgIGZvck93bihhdHRycywgKHZhbHVlMiwgbmFtZSkgPT4ge1xuICAgICAgc2V0QXR0cmlidXRlKGVsbSwgbmFtZSwgdmFsdWUyKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpc051bGwodmFsdWUpID8gcmVtb3ZlQXR0cmlidXRlKGVsbSwgYXR0cnMpIDogZWxtLnNldEF0dHJpYnV0ZShhdHRycywgU3RyaW5nKHZhbHVlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlKHRhZywgYXR0cnMsIHBhcmVudCkge1xuICBjb25zdCBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChhdHRycykge1xuICAgIGlzU3RyaW5nKGF0dHJzKSA/IGFkZENsYXNzKGVsbSwgYXR0cnMpIDogc2V0QXR0cmlidXRlKGVsbSwgYXR0cnMpO1xuICB9XG4gIHBhcmVudCAmJiBhcHBlbmQocGFyZW50LCBlbG0pO1xuICByZXR1cm4gZWxtO1xufVxuXG5mdW5jdGlvbiBzdHlsZShlbG0sIHByb3AsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbG0pW3Byb3BdO1xuICB9XG4gIGlmICghaXNOdWxsKHZhbHVlKSkge1xuICAgIGNvbnN0IHsgc3R5bGU6IHN0eWxlMiB9ID0gZWxtO1xuICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcbiAgICBpZiAoc3R5bGUyW3Byb3BdICE9PSB2YWx1ZSkge1xuICAgICAgc3R5bGUyW3Byb3BdID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXkoZWxtLCBkaXNwbGF5Mikge1xuICBzdHlsZShlbG0sIFwiZGlzcGxheVwiLCBkaXNwbGF5Mik7XG59XG5cbmZ1bmN0aW9uIGZvY3VzKGVsbSkge1xuICBlbG1bXCJzZXRBY3RpdmVcIl0gJiYgZWxtW1wic2V0QWN0aXZlXCJdKCkgfHwgZWxtLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsbSwgYXR0cikge1xuICByZXR1cm4gZWxtLmdldEF0dHJpYnV0ZShhdHRyKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxtLCBjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGVsbSAmJiBlbG0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlY3QodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShub2Rlcykge1xuICBmb3JFYWNoKG5vZGVzLCAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1lYXN1cmUocGFyZW50LCB2YWx1ZSkge1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgY29uc3QgZGl2ID0gY3JlYXRlKFwiZGl2XCIsIHsgc3R5bGU6IGB3aWR0aDogJHt2YWx1ZX07IHBvc2l0aW9uOiBhYnNvbHV0ZTtgIH0sIHBhcmVudCk7XG4gICAgdmFsdWUgPSByZWN0KGRpdikud2lkdGg7XG4gICAgcmVtb3ZlKGRpdik7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbCkge1xuICByZXR1cm4gY2hpbGQobmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKS5ib2R5KTtcbn1cblxuZnVuY3Rpb24gcHJldmVudChlLCBzdG9wUHJvcGFnYXRpb24pIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5KHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QWxsKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNsaWNlKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsbSwgY2xhc3Nlcykge1xuICB0b2dnbGVDbGFzcyhlbG0sIGNsYXNzZXMsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdW5pdCh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA/IGAke3ZhbHVlfXB4YCA6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UgPSBcIlwiKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtQUk9KRUNUX0NPREV9XSAke21lc3NhZ2V9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV4dFRpY2soY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjayk7XG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7XG59O1xuXG5mdW5jdGlvbiByYWYoZnVuYykge1xuICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xufVxuXG5jb25zdCB7IG1pbiwgbWF4LCBmbG9vciwgY2VpbCwgYWJzIH0gPSBNYXRoO1xuXG5mdW5jdGlvbiBhcHByb3hpbWF0ZWx5RXF1YWwoeCwgeSwgZXBzaWxvbikge1xuICByZXR1cm4gYWJzKHggLSB5KSA8IGVwc2lsb247XG59XG5cbmZ1bmN0aW9uIGJldHdlZW4obnVtYmVyLCBtaW5Pck1heCwgbWF4T3JNaW4sIGV4Y2x1c2l2ZSkge1xuICBjb25zdCBtaW5pbXVtID0gbWluKG1pbk9yTWF4LCBtYXhPck1pbik7XG4gIGNvbnN0IG1heGltdW0gPSBtYXgobWluT3JNYXgsIG1heE9yTWluKTtcbiAgcmV0dXJuIGV4Y2x1c2l2ZSA/IG1pbmltdW0gPCBudW1iZXIgJiYgbnVtYmVyIDwgbWF4aW11bSA6IG1pbmltdW0gPD0gbnVtYmVyICYmIG51bWJlciA8PSBtYXhpbXVtO1xufVxuXG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIHgsIHkpIHtcbiAgY29uc3QgbWluaW11bSA9IG1pbih4LCB5KTtcbiAgY29uc3QgbWF4aW11bSA9IG1heCh4LCB5KTtcbiAgcmV0dXJuIG1pbihtYXgobWluaW11bSwgbnVtYmVyKSwgbWF4aW11bSk7XG59XG5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4gKyh4ID4gMCkgLSArKHggPCAwKTtcbn1cblxuZnVuY3Rpb24gY2FtZWxUb0tlYmFiKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHN0cmluZywgcmVwbGFjZW1lbnRzKSB7XG4gIGZvckVhY2gocmVwbGFjZW1lbnRzLCAocmVwbGFjZW1lbnQpID0+IHtcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShcIiVzXCIsIGAke3JlcGxhY2VtZW50fWApO1xuICB9KTtcbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gcGFkKG51bWJlcikge1xuICByZXR1cm4gbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyfWAgOiBgJHtudW1iZXJ9YDtcbn1cblxuY29uc3QgaWRzID0ge307XG5mdW5jdGlvbiB1bmlxdWVJZChwcmVmaXgpIHtcbiAgcmV0dXJuIGAke3ByZWZpeH0ke3BhZChpZHNbcHJlZml4XSA9IChpZHNbcHJlZml4XSB8fCAwKSArIDEpfWA7XG59XG5cbmZ1bmN0aW9uIEV2ZW50QnVzKCkge1xuICBsZXQgaGFuZGxlcnMgPSB7fTtcbiAgZnVuY3Rpb24gb24oZXZlbnRzLCBjYWxsYmFjaywga2V5LCBwcmlvcml0eSA9IERFRkFVTFRfRVZFTlRfUFJJT1JJVFkpIHtcbiAgICBmb3JFYWNoRXZlbnQoZXZlbnRzLCAoZXZlbnQsIG5hbWVzcGFjZSkgPT4ge1xuICAgICAgaGFuZGxlcnNbZXZlbnRdID0gaGFuZGxlcnNbZXZlbnRdIHx8IFtdO1xuICAgICAgcHVzaChoYW5kbGVyc1tldmVudF0sIHtcbiAgICAgICAgX2V2ZW50OiBldmVudCxcbiAgICAgICAgX2NhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgX25hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgICAgICBfcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICBfa2V5OiBrZXlcbiAgICAgIH0pLnNvcnQoKGhhbmRsZXIxLCBoYW5kbGVyMikgPT4gaGFuZGxlcjEuX3ByaW9yaXR5IC0gaGFuZGxlcjIuX3ByaW9yaXR5KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBvZmYoZXZlbnRzLCBrZXkpIHtcbiAgICBmb3JFYWNoRXZlbnQoZXZlbnRzLCAoZXZlbnQsIG5hbWVzcGFjZSkgPT4ge1xuICAgICAgY29uc3QgZXZlbnRIYW5kbGVycyA9IGhhbmRsZXJzW2V2ZW50XTtcbiAgICAgIGhhbmRsZXJzW2V2ZW50XSA9IGV2ZW50SGFuZGxlcnMgJiYgZXZlbnRIYW5kbGVycy5maWx0ZXIoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIuX2tleSA/IGhhbmRsZXIuX2tleSAhPT0ga2V5IDoga2V5IHx8IGhhbmRsZXIuX25hbWVzcGFjZSAhPT0gbmFtZXNwYWNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gb2ZmQnkoa2V5KSB7XG4gICAgZm9yT3duKGhhbmRsZXJzLCAoZXZlbnRIYW5kbGVycywgZXZlbnQpID0+IHtcbiAgICAgIG9mZihldmVudCwga2V5KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgKGhhbmRsZXJzW2V2ZW50XSB8fCBbXSkuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlci5fY2FsbGJhY2suYXBwbHkoaGFuZGxlciwgc2xpY2UoYXJndW1lbnRzLCAxKSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBoYW5kbGVycyA9IHt9O1xuICB9XG4gIGZ1bmN0aW9uIGZvckVhY2hFdmVudChldmVudHMsIGl0ZXJhdGVlKSB7XG4gICAgdG9BcnJheShldmVudHMpLmpvaW4oXCIgXCIpLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChldmVudE5TKSA9PiB7XG4gICAgICBjb25zdCBmcmFnbWVudHMgPSBldmVudE5TLnNwbGl0KFwiLlwiKTtcbiAgICAgIGl0ZXJhdGVlKGZyYWdtZW50c1swXSwgZnJhZ21lbnRzWzFdKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG9uLFxuICAgIG9mZixcbiAgICBvZmZCeSxcbiAgICBlbWl0LFxuICAgIGRlc3Ryb3lcbiAgfTtcbn1cblxuY29uc3QgRVZFTlRfTU9VTlRFRCA9IFwibW91bnRlZFwiO1xuY29uc3QgRVZFTlRfUkVBRFkgPSBcInJlYWR5XCI7XG5jb25zdCBFVkVOVF9NT1ZFID0gXCJtb3ZlXCI7XG5jb25zdCBFVkVOVF9NT1ZFRCA9IFwibW92ZWRcIjtcbmNvbnN0IEVWRU5UX1NISUZURUQgPSBcInNoaWZ0ZWRcIjtcbmNvbnN0IEVWRU5UX0NMSUNLID0gXCJjbGlja1wiO1xuY29uc3QgRVZFTlRfQUNUSVZFID0gXCJhY3RpdmVcIjtcbmNvbnN0IEVWRU5UX0lOQUNUSVZFID0gXCJpbmFjdGl2ZVwiO1xuY29uc3QgRVZFTlRfVklTSUJMRSA9IFwidmlzaWJsZVwiO1xuY29uc3QgRVZFTlRfSElEREVOID0gXCJoaWRkZW5cIjtcbmNvbnN0IEVWRU5UX1NMSURFX0tFWURPV04gPSBcInNsaWRlOmtleWRvd25cIjtcbmNvbnN0IEVWRU5UX1JFRlJFU0ggPSBcInJlZnJlc2hcIjtcbmNvbnN0IEVWRU5UX1VQREFURUQgPSBcInVwZGF0ZWRcIjtcbmNvbnN0IEVWRU5UX1JFU0laRSA9IFwicmVzaXplXCI7XG5jb25zdCBFVkVOVF9SRVNJWkVEID0gXCJyZXNpemVkXCI7XG5jb25zdCBFVkVOVF9SRVBPU0lUSU9ORUQgPSBcInJlcG9zaXRpb25lZFwiO1xuY29uc3QgRVZFTlRfRFJBRyA9IFwiZHJhZ1wiO1xuY29uc3QgRVZFTlRfRFJBR0dJTkcgPSBcImRyYWdnaW5nXCI7XG5jb25zdCBFVkVOVF9EUkFHR0VEID0gXCJkcmFnZ2VkXCI7XG5jb25zdCBFVkVOVF9TQ1JPTEwgPSBcInNjcm9sbFwiO1xuY29uc3QgRVZFTlRfU0NST0xMRUQgPSBcInNjcm9sbGVkXCI7XG5jb25zdCBFVkVOVF9ERVNUUk9ZID0gXCJkZXN0cm95XCI7XG5jb25zdCBFVkVOVF9BUlJPV1NfTU9VTlRFRCA9IFwiYXJyb3dzOm1vdW50ZWRcIjtcbmNvbnN0IEVWRU5UX0FSUk9XU19VUERBVEVEID0gXCJhcnJvd3M6dXBkYXRlZFwiO1xuY29uc3QgRVZFTlRfUEFHSU5BVElPTl9NT1VOVEVEID0gXCJwYWdpbmF0aW9uOm1vdW50ZWRcIjtcbmNvbnN0IEVWRU5UX1BBR0lOQVRJT05fVVBEQVRFRCA9IFwicGFnaW5hdGlvbjp1cGRhdGVkXCI7XG5jb25zdCBFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQgPSBcIm5hdmlnYXRpb246bW91bnRlZFwiO1xuY29uc3QgRVZFTlRfQVVUT1BMQVlfUExBWSA9IFwiYXV0b3BsYXk6cGxheVwiO1xuY29uc3QgRVZFTlRfQVVUT1BMQVlfUExBWUlORyA9IFwiYXV0b3BsYXk6cGxheWluZ1wiO1xuY29uc3QgRVZFTlRfQVVUT1BMQVlfUEFVU0UgPSBcImF1dG9wbGF5OnBhdXNlXCI7XG5jb25zdCBFVkVOVF9MQVpZTE9BRF9MT0FERUQgPSBcImxhenlsb2FkOmxvYWRlZFwiO1xuXG5mdW5jdGlvbiBFdmVudEludGVyZmFjZShTcGxpZGUyKSB7XG4gIGNvbnN0IHsgZXZlbnQgfSA9IFNwbGlkZTI7XG4gIGNvbnN0IGtleSA9IHt9O1xuICBsZXQgbGlzdGVuZXJzID0gW107XG4gIGZ1bmN0aW9uIG9uKGV2ZW50cywgY2FsbGJhY2ssIHByaW9yaXR5KSB7XG4gICAgZXZlbnQub24oZXZlbnRzLCBjYWxsYmFjaywga2V5LCBwcmlvcml0eSk7XG4gIH1cbiAgZnVuY3Rpb24gb2ZmKGV2ZW50cykge1xuICAgIGV2ZW50Lm9mZihldmVudHMsIGtleSk7XG4gIH1cbiAgZnVuY3Rpb24gYmluZCh0YXJnZXRzLCBldmVudHMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgZm9yRWFjaEV2ZW50KHRhcmdldHMsIGV2ZW50cywgKHRhcmdldCwgZXZlbnQyKSA9PiB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChbdGFyZ2V0LCBldmVudDIsIGNhbGxiYWNrLCBvcHRpb25zXSk7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudDIsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB1bmJpbmQodGFyZ2V0cywgZXZlbnRzLCBjYWxsYmFjaykge1xuICAgIGZvckVhY2hFdmVudCh0YXJnZXRzLCBldmVudHMsICh0YXJnZXQsIGV2ZW50MikgPT4ge1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgICAgaWYgKGxpc3RlbmVyWzBdID09PSB0YXJnZXQgJiYgbGlzdGVuZXJbMV0gPT09IGV2ZW50MiAmJiAoIWNhbGxiYWNrIHx8IGxpc3RlbmVyWzJdID09PSBjYWxsYmFjaykpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudDIsIGxpc3RlbmVyWzJdLCBsaXN0ZW5lclszXSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZm9yRWFjaEV2ZW50KHRhcmdldHMsIGV2ZW50cywgaXRlcmF0ZWUpIHtcbiAgICBmb3JFYWNoKHRhcmdldHMsICh0YXJnZXQpID0+IHtcbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgZXZlbnRzLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGl0ZXJhdGVlLmJpbmQobnVsbCwgdGFyZ2V0KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChkYXRhKSA9PiB1bmJpbmQoZGF0YVswXSwgZGF0YVsxXSkpO1xuICAgIGV2ZW50Lm9mZkJ5KGtleSk7XG4gIH1cbiAgZXZlbnQub24oRVZFTlRfREVTVFJPWSwgZGVzdHJveSwga2V5KTtcbiAgcmV0dXJuIHtcbiAgICBvbixcbiAgICBvZmYsXG4gICAgZW1pdDogZXZlbnQuZW1pdCxcbiAgICBiaW5kLFxuICAgIHVuYmluZCxcbiAgICBkZXN0cm95XG4gIH07XG59XG5cbmZ1bmN0aW9uIFJlcXVlc3RJbnRlcnZhbChpbnRlcnZhbCwgb25JbnRlcnZhbCwgb25VcGRhdGUsIGxpbWl0KSB7XG4gIGNvbnN0IHsgbm93IH0gPSBEYXRlO1xuICBsZXQgc3RhcnRUaW1lO1xuICBsZXQgcmF0ZSA9IDA7XG4gIGxldCBpZDtcbiAgbGV0IHBhdXNlZCA9IHRydWU7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXBhdXNlZCkge1xuICAgICAgY29uc3QgZWxhcHNlZCA9IG5vdygpIC0gc3RhcnRUaW1lO1xuICAgICAgaWYgKGVsYXBzZWQgPj0gaW50ZXJ2YWwpIHtcbiAgICAgICAgcmF0ZSA9IDE7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5vdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmF0ZSA9IGVsYXBzZWQgLyBpbnRlcnZhbDtcbiAgICAgIH1cbiAgICAgIGlmIChvblVwZGF0ZSkge1xuICAgICAgICBvblVwZGF0ZShyYXRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChyYXRlID09PSAxKSB7XG4gICAgICAgIG9uSW50ZXJ2YWwoKTtcbiAgICAgICAgaWYgKGxpbWl0ICYmICsrY291bnQgPj0gbGltaXQpIHtcbiAgICAgICAgICByZXR1cm4gcGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmFmKHVwZGF0ZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0KHJlc3VtZSkge1xuICAgICFyZXN1bWUgJiYgY2FuY2VsKCk7XG4gICAgc3RhcnRUaW1lID0gbm93KCkgLSAocmVzdW1lID8gcmF0ZSAqIGludGVydmFsIDogMCk7XG4gICAgcGF1c2VkID0gZmFsc2U7XG4gICAgcmFmKHVwZGF0ZSk7XG4gIH1cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiByZXdpbmQoKSB7XG4gICAgc3RhcnRUaW1lID0gbm93KCk7XG4gICAgcmF0ZSA9IDA7XG4gICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICBvblVwZGF0ZShyYXRlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbiAgICByYXRlID0gMDtcbiAgICBpZCA9IDA7XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBzZXQodGltZSkge1xuICAgIGludGVydmFsID0gdGltZTtcbiAgfVxuICBmdW5jdGlvbiBpc1BhdXNlZCgpIHtcbiAgICByZXR1cm4gcGF1c2VkO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhcnQsXG4gICAgcmV3aW5kLFxuICAgIHBhdXNlLFxuICAgIGNhbmNlbCxcbiAgICBzZXQsXG4gICAgaXNQYXVzZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIGxldCBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgc3RhdGUgPSB2YWx1ZTtcbiAgfVxuICBmdW5jdGlvbiBpcyhzdGF0ZXMpIHtcbiAgICByZXR1cm4gaW5jbHVkZXModG9BcnJheShzdGF0ZXMpLCBzdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHsgc2V0LCBpcyB9O1xufVxuXG5mdW5jdGlvbiBUaHJvdHRsZShmdW5jLCBkdXJhdGlvbikge1xuICBsZXQgaW50ZXJ2YWw7XG4gIGZ1bmN0aW9uIHRocm90dGxlZCgpIHtcbiAgICBpZiAoIWludGVydmFsKSB7XG4gICAgICBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChkdXJhdGlvbiB8fCAwLCAoKSA9PiB7XG4gICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgfSwgbnVsbCwgMSk7XG4gICAgICBpbnRlcnZhbC5zdGFydCgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG5mdW5jdGlvbiBPcHRpb25zKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIGNvbnN0IHRocm90dGxlZE9ic2VydmUgPSBUaHJvdHRsZShvYnNlcnZlKTtcbiAgbGV0IGluaXRpYWxPcHRpb25zO1xuICBsZXQgcG9pbnRzO1xuICBsZXQgY3VyclBvaW50O1xuICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICB0cnkge1xuICAgICAgbWVyZ2Uob3B0aW9ucywgSlNPTi5wYXJzZShnZXRBdHRyaWJ1dGUoU3BsaWRlMi5yb290LCBEQVRBX0FUVFJJQlVURSkpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhc3NlcnQoZmFsc2UsIGUubWVzc2FnZSk7XG4gICAgfVxuICAgIGluaXRpYWxPcHRpb25zID0gbWVyZ2Uoe30sIG9wdGlvbnMpO1xuICAgIGNvbnN0IHsgYnJlYWtwb2ludHMgfSA9IG9wdGlvbnM7XG4gICAgaWYgKGJyZWFrcG9pbnRzKSB7XG4gICAgICBjb25zdCBpc01pbiA9IG9wdGlvbnMubWVkaWFRdWVyeSA9PT0gXCJtaW5cIjtcbiAgICAgIHBvaW50cyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5zb3J0KChuLCBtKSA9PiBpc01pbiA/ICttIC0gK24gOiArbiAtICttKS5tYXAoKHBvaW50KSA9PiBbXG4gICAgICAgIHBvaW50LFxuICAgICAgICBtYXRjaE1lZGlhKGAoJHtpc01pbiA/IFwibWluXCIgOiBcIm1heFwifS13aWR0aDoke3BvaW50fXB4KWApXG4gICAgICBdKTtcbiAgICAgIG9ic2VydmUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKHBvaW50cykge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aHJvdHRsZWRPYnNlcnZlKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgaWYgKGNvbXBsZXRlbHkpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhyb3R0bGVkT2JzZXJ2ZSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG9ic2VydmUoKSB7XG4gICAgY29uc3QgaXRlbSA9IGZpbmQocG9pbnRzLCAoaXRlbTIpID0+IGl0ZW0yWzFdLm1hdGNoZXMpIHx8IFtdO1xuICAgIGlmIChpdGVtWzBdICE9PSBjdXJyUG9pbnQpIHtcbiAgICAgIG9uTWF0Y2goY3VyclBvaW50ID0gaXRlbVswXSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG9uTWF0Y2gocG9pbnQpIHtcbiAgICBjb25zdCBuZXdPcHRpb25zID0gb3B0aW9ucy5icmVha3BvaW50c1twb2ludF0gfHwgaW5pdGlhbE9wdGlvbnM7XG4gICAgaWYgKG5ld09wdGlvbnMuZGVzdHJveSkge1xuICAgICAgU3BsaWRlMi5vcHRpb25zID0gaW5pdGlhbE9wdGlvbnM7XG4gICAgICBTcGxpZGUyLmRlc3Ryb3kobmV3T3B0aW9ucy5kZXN0cm95ID09PSBcImNvbXBsZXRlbHlcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChTcGxpZGUyLnN0YXRlLmlzKERFU1RST1lFRCkpIHtcbiAgICAgICAgZGVzdHJveSh0cnVlKTtcbiAgICAgICAgU3BsaWRlMi5tb3VudCgpO1xuICAgICAgfVxuICAgICAgU3BsaWRlMi5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZXR1cCxcbiAgICBtb3VudCxcbiAgICBkZXN0cm95XG4gIH07XG59XG5cbmNvbnN0IFJUTCA9IFwicnRsXCI7XG5jb25zdCBUVEIgPSBcInR0YlwiO1xuXG5jb25zdCBPUklFTlRBVElPTl9NQVAgPSB7XG4gIG1hcmdpblJpZ2h0OiBbXCJtYXJnaW5Cb3R0b21cIiwgXCJtYXJnaW5MZWZ0XCJdLFxuICBhdXRvV2lkdGg6IFtcImF1dG9IZWlnaHRcIl0sXG4gIGZpeGVkV2lkdGg6IFtcImZpeGVkSGVpZ2h0XCJdLFxuICBwYWRkaW5nTGVmdDogW1wicGFkZGluZ1RvcFwiLCBcInBhZGRpbmdSaWdodFwiXSxcbiAgcGFkZGluZ1JpZ2h0OiBbXCJwYWRkaW5nQm90dG9tXCIsIFwicGFkZGluZ0xlZnRcIl0sXG4gIHdpZHRoOiBbXCJoZWlnaHRcIl0sXG4gIGxlZnQ6IFtcInRvcFwiLCBcInJpZ2h0XCJdLFxuICByaWdodDogW1wiYm90dG9tXCIsIFwibGVmdFwiXSxcbiAgeDogW1wieVwiXSxcbiAgWDogW1wiWVwiXSxcbiAgWTogW1wiWFwiXSxcbiAgQXJyb3dMZWZ0OiBbXCJBcnJvd1VwXCIsIFwiQXJyb3dSaWdodFwiXSxcbiAgQXJyb3dSaWdodDogW1wiQXJyb3dEb3duXCIsIFwiQXJyb3dMZWZ0XCJdXG59O1xuZnVuY3Rpb24gRGlyZWN0aW9uKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIGZ1bmN0aW9uIHJlc29sdmUocHJvcCwgYXhpc09ubHkpIHtcbiAgICBjb25zdCB7IGRpcmVjdGlvbiB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBpbmRleCA9IGRpcmVjdGlvbiA9PT0gUlRMICYmICFheGlzT25seSA/IDEgOiBkaXJlY3Rpb24gPT09IFRUQiA/IDAgOiAtMTtcbiAgICByZXR1cm4gT1JJRU5UQVRJT05fTUFQW3Byb3BdW2luZGV4XSB8fCBwcm9wO1xuICB9XG4gIGZ1bmN0aW9uIG9yaWVudCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAqIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMID8gMSA6IC0xKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc29sdmUsXG4gICAgb3JpZW50XG4gIH07XG59XG5cbmNvbnN0IENMQVNTX1JPT1QgPSBQUk9KRUNUX0NPREU7XG5jb25zdCBDTEFTU19TTElERVIgPSBgJHtQUk9KRUNUX0NPREV9X19zbGlkZXJgO1xuY29uc3QgQ0xBU1NfVFJBQ0sgPSBgJHtQUk9KRUNUX0NPREV9X190cmFja2A7XG5jb25zdCBDTEFTU19MSVNUID0gYCR7UFJPSkVDVF9DT0RFfV9fbGlzdGA7XG5jb25zdCBDTEFTU19TTElERSA9IGAke1BST0pFQ1RfQ09ERX1fX3NsaWRlYDtcbmNvbnN0IENMQVNTX0NMT05FID0gYCR7Q0xBU1NfU0xJREV9LS1jbG9uZWA7XG5jb25zdCBDTEFTU19DT05UQUlORVIgPSBgJHtDTEFTU19TTElERX1fX2NvbnRhaW5lcmA7XG5jb25zdCBDTEFTU19BUlJPV1MgPSBgJHtQUk9KRUNUX0NPREV9X19hcnJvd3NgO1xuY29uc3QgQ0xBU1NfQVJST1cgPSBgJHtQUk9KRUNUX0NPREV9X19hcnJvd2A7XG5jb25zdCBDTEFTU19BUlJPV19QUkVWID0gYCR7Q0xBU1NfQVJST1d9LS1wcmV2YDtcbmNvbnN0IENMQVNTX0FSUk9XX05FWFQgPSBgJHtDTEFTU19BUlJPV30tLW5leHRgO1xuY29uc3QgQ0xBU1NfUEFHSU5BVElPTiA9IGAke1BST0pFQ1RfQ09ERX1fX3BhZ2luYXRpb25gO1xuY29uc3QgQ0xBU1NfUEFHSU5BVElPTl9QQUdFID0gYCR7Q0xBU1NfUEFHSU5BVElPTn1fX3BhZ2VgO1xuY29uc3QgQ0xBU1NfUFJPR1JFU1MgPSBgJHtQUk9KRUNUX0NPREV9X19wcm9ncmVzc2A7XG5jb25zdCBDTEFTU19QUk9HUkVTU19CQVIgPSBgJHtDTEFTU19QUk9HUkVTU31fX2JhcmA7XG5jb25zdCBDTEFTU19BVVRPUExBWSA9IGAke1BST0pFQ1RfQ09ERX1fX2F1dG9wbGF5YDtcbmNvbnN0IENMQVNTX1BMQVkgPSBgJHtQUk9KRUNUX0NPREV9X19wbGF5YDtcbmNvbnN0IENMQVNTX1BBVVNFID0gYCR7UFJPSkVDVF9DT0RFfV9fcGF1c2VgO1xuY29uc3QgQ0xBU1NfU1BJTk5FUiA9IGAke1BST0pFQ1RfQ09ERX1fX3NwaW5uZXJgO1xuY29uc3QgQ0xBU1NfSU5JVElBTElaRUQgPSBcImlzLWluaXRpYWxpemVkXCI7XG5jb25zdCBDTEFTU19BQ1RJVkUgPSBcImlzLWFjdGl2ZVwiO1xuY29uc3QgQ0xBU1NfUFJFViA9IFwiaXMtcHJldlwiO1xuY29uc3QgQ0xBU1NfTkVYVCA9IFwiaXMtbmV4dFwiO1xuY29uc3QgQ0xBU1NfVklTSUJMRSA9IFwiaXMtdmlzaWJsZVwiO1xuY29uc3QgQ0xBU1NfTE9BRElORyA9IFwiaXMtbG9hZGluZ1wiO1xuY29uc3QgU1RBVFVTX0NMQVNTRVMgPSBbQ0xBU1NfQUNUSVZFLCBDTEFTU19WSVNJQkxFLCBDTEFTU19QUkVWLCBDTEFTU19ORVhULCBDTEFTU19MT0FESU5HXTtcbmNvbnN0IENMQVNTRVMgPSB7XG4gIHNsaWRlOiBDTEFTU19TTElERSxcbiAgY2xvbmU6IENMQVNTX0NMT05FLFxuICBhcnJvd3M6IENMQVNTX0FSUk9XUyxcbiAgYXJyb3c6IENMQVNTX0FSUk9XLFxuICBwcmV2OiBDTEFTU19BUlJPV19QUkVWLFxuICBuZXh0OiBDTEFTU19BUlJPV19ORVhULFxuICBwYWdpbmF0aW9uOiBDTEFTU19QQUdJTkFUSU9OLFxuICBwYWdlOiBDTEFTU19QQUdJTkFUSU9OX1BBR0UsXG4gIHNwaW5uZXI6IENMQVNTX1NQSU5ORVJcbn07XG5cbmZ1bmN0aW9uIEVsZW1lbnRzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgb24gfSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICBjb25zdCB7IHJvb3QgfSA9IFNwbGlkZTI7XG4gIGNvbnN0IGVsZW1lbnRzID0ge307XG4gIGNvbnN0IHNsaWRlcyA9IFtdO1xuICBsZXQgY2xhc3NlcztcbiAgbGV0IHNsaWRlcjtcbiAgbGV0IHRyYWNrO1xuICBsZXQgbGlzdDtcbiAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgY29sbGVjdCgpO1xuICAgIGlkZW50aWZ5KCk7XG4gICAgYWRkQ2xhc3Mocm9vdCwgY2xhc3NlcyA9IGdldENsYXNzZXMoKSk7XG4gIH1cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgb24oRVZFTlRfUkVGUkVTSCwgcmVmcmVzaCwgREVGQVVMVF9FVkVOVF9QUklPUklUWSAtIDIpO1xuICAgIG9uKEVWRU5UX1VQREFURUQsIHVwZGF0ZSk7XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBbcm9vdCwgdHJhY2ssIGxpc3RdLmZvckVhY2goKGVsbSkgPT4ge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKGVsbSwgXCJzdHlsZVwiKTtcbiAgICB9KTtcbiAgICBlbXB0eShzbGlkZXMpO1xuICAgIHJlbW92ZUNsYXNzKHJvb3QsIGNsYXNzZXMpO1xuICB9XG4gIGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIHNldHVwKCk7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJlbW92ZUNsYXNzKHJvb3QsIGNsYXNzZXMpO1xuICAgIGFkZENsYXNzKHJvb3QsIGNsYXNzZXMgPSBnZXRDbGFzc2VzKCkpO1xuICB9XG4gIGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgc2xpZGVyID0gY2hpbGQocm9vdCwgYC4ke0NMQVNTX1NMSURFUn1gKTtcbiAgICB0cmFjayA9IHF1ZXJ5KHJvb3QsIGAuJHtDTEFTU19UUkFDS31gKTtcbiAgICBsaXN0ID0gY2hpbGQodHJhY2ssIGAuJHtDTEFTU19MSVNUfWApO1xuICAgIGFzc2VydCh0cmFjayAmJiBsaXN0LCBcIkEgdHJhY2svbGlzdCBlbGVtZW50IGlzIG1pc3NpbmcuXCIpO1xuICAgIHB1c2goc2xpZGVzLCBjaGlsZHJlbihsaXN0LCBgLiR7Q0xBU1NfU0xJREV9Om5vdCguJHtDTEFTU19DTE9ORX0pYCkpO1xuICAgIGNvbnN0IGF1dG9wbGF5ID0gZmluZChgLiR7Q0xBU1NfQVVUT1BMQVl9YCk7XG4gICAgY29uc3QgYXJyb3dzID0gZmluZChgLiR7Q0xBU1NfQVJST1dTfWApO1xuICAgIGFzc2lnbihlbGVtZW50cywge1xuICAgICAgcm9vdCxcbiAgICAgIHNsaWRlcixcbiAgICAgIHRyYWNrLFxuICAgICAgbGlzdCxcbiAgICAgIHNsaWRlcyxcbiAgICAgIGFycm93cyxcbiAgICAgIGF1dG9wbGF5LFxuICAgICAgcHJldjogcXVlcnkoYXJyb3dzLCBgLiR7Q0xBU1NfQVJST1dfUFJFVn1gKSxcbiAgICAgIG5leHQ6IHF1ZXJ5KGFycm93cywgYC4ke0NMQVNTX0FSUk9XX05FWFR9YCksXG4gICAgICBiYXI6IHF1ZXJ5KGZpbmQoYC4ke0NMQVNTX1BST0dSRVNTfWApLCBgLiR7Q0xBU1NfUFJPR1JFU1NfQkFSfWApLFxuICAgICAgcGxheTogcXVlcnkoYXV0b3BsYXksIGAuJHtDTEFTU19QTEFZfWApLFxuICAgICAgcGF1c2U6IHF1ZXJ5KGF1dG9wbGF5LCBgLiR7Q0xBU1NfUEFVU0V9YClcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBpZGVudGlmeSgpIHtcbiAgICBjb25zdCBpZCA9IHJvb3QuaWQgfHwgdW5pcXVlSWQoUFJPSkVDVF9DT0RFKTtcbiAgICByb290LmlkID0gaWQ7XG4gICAgdHJhY2suaWQgPSB0cmFjay5pZCB8fCBgJHtpZH0tdHJhY2tgO1xuICAgIGxpc3QuaWQgPSBsaXN0LmlkIHx8IGAke2lkfS1saXN0YDtcbiAgfVxuICBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGNoaWxkKHJvb3QsIHNlbGVjdG9yKSB8fCBjaGlsZChzbGlkZXIsIHNlbGVjdG9yKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBgJHtDTEFTU19ST09UfS0tJHtvcHRpb25zLnR5cGV9YCxcbiAgICAgIGAke0NMQVNTX1JPT1R9LS0ke29wdGlvbnMuZGlyZWN0aW9ufWAsXG4gICAgICBvcHRpb25zLmRyYWcgJiYgYCR7Q0xBU1NfUk9PVH0tLWRyYWdnYWJsZWAsXG4gICAgICBvcHRpb25zLmlzTmF2aWdhdGlvbiAmJiBgJHtDTEFTU19ST09UfS0tbmF2YCxcbiAgICAgIENMQVNTX0FDVElWRVxuICAgIF07XG4gIH1cbiAgcmV0dXJuIGFzc2lnbihlbGVtZW50cywge1xuICAgIHNldHVwLFxuICAgIG1vdW50LFxuICAgIGRlc3Ryb3lcbiAgfSk7XG59XG5cbmNvbnN0IFJPTEUgPSBcInJvbGVcIjtcbmNvbnN0IEFSSUFfQ09OVFJPTFMgPSBcImFyaWEtY29udHJvbHNcIjtcbmNvbnN0IEFSSUFfQ1VSUkVOVCA9IFwiYXJpYS1jdXJyZW50XCI7XG5jb25zdCBBUklBX0xBQkVMID0gXCJhcmlhLWxhYmVsXCI7XG5jb25zdCBBUklBX0hJRERFTiA9IFwiYXJpYS1oaWRkZW5cIjtcbmNvbnN0IFRBQl9JTkRFWCA9IFwidGFiaW5kZXhcIjtcbmNvbnN0IERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xuY29uc3QgQVJJQV9PUklFTlRBVElPTiA9IFwiYXJpYS1vcmllbnRhdGlvblwiO1xuY29uc3QgQUxMX0FUVFJJQlVURVMgPSBbXG4gIFJPTEUsXG4gIEFSSUFfQ09OVFJPTFMsXG4gIEFSSUFfQ1VSUkVOVCxcbiAgQVJJQV9MQUJFTCxcbiAgQVJJQV9ISURERU4sXG4gIEFSSUFfT1JJRU5UQVRJT04sXG4gIFRBQl9JTkRFWCxcbiAgRElTQUJMRURcbl07XG5cbmNvbnN0IFNMSURFID0gXCJzbGlkZVwiO1xuY29uc3QgTE9PUCA9IFwibG9vcFwiO1xuY29uc3QgRkFERSA9IFwiZmFkZVwiO1xuXG5mdW5jdGlvbiBTbGlkZSQxKFNwbGlkZTIsIGluZGV4LCBzbGlkZUluZGV4LCBzbGlkZSkge1xuICBjb25zdCB7IG9uLCBlbWl0LCBiaW5kLCBkZXN0cm95OiBkZXN0cm95RXZlbnRzIH0gPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgY29uc3QgeyBDb21wb25lbnRzLCByb290LCBvcHRpb25zIH0gPSBTcGxpZGUyO1xuICBjb25zdCB7IGlzTmF2aWdhdGlvbiwgdXBkYXRlT25Nb3ZlIH0gPSBvcHRpb25zO1xuICBjb25zdCB7IHJlc29sdmUgfSA9IENvbXBvbmVudHMuRGlyZWN0aW9uO1xuICBjb25zdCBzdHlsZXMgPSBnZXRBdHRyaWJ1dGUoc2xpZGUsIFwic3R5bGVcIik7XG4gIGNvbnN0IGlzQ2xvbmUgPSBzbGlkZUluZGV4ID4gLTE7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNoaWxkKHNsaWRlLCBgLiR7Q0xBU1NfQ09OVEFJTkVSfWApO1xuICBjb25zdCBmb2N1c2FibGVOb2RlcyA9IG9wdGlvbnMuZm9jdXNhYmxlTm9kZXMgJiYgcXVlcnlBbGwoc2xpZGUsIG9wdGlvbnMuZm9jdXNhYmxlTm9kZXMpO1xuICBsZXQgZGVzdHJveWVkO1xuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAoIWlzQ2xvbmUpIHtcbiAgICAgIHNsaWRlLmlkID0gYCR7cm9vdC5pZH0tc2xpZGUke3BhZChpbmRleCArIDEpfWA7XG4gICAgfVxuICAgIGJpbmQoc2xpZGUsIFwiY2xpY2sga2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgZW1pdChlLnR5cGUgPT09IFwiY2xpY2tcIiA/IEVWRU5UX0NMSUNLIDogRVZFTlRfU0xJREVfS0VZRE9XTiwgc2VsZiwgZSk7XG4gICAgfSk7XG4gICAgb24oW0VWRU5UX1JFRlJFU0gsIEVWRU5UX1JFUE9TSVRJT05FRCwgRVZFTlRfU0hJRlRFRCwgRVZFTlRfTU9WRUQsIEVWRU5UX1NDUk9MTEVEXSwgdXBkYXRlKTtcbiAgICBvbihFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQsIGluaXROYXZpZ2F0aW9uKTtcbiAgICBpZiAodXBkYXRlT25Nb3ZlKSB7XG4gICAgICBvbihFVkVOVF9NT1ZFLCBvbk1vdmUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGRlc3Ryb3llZCA9IHRydWU7XG4gICAgZGVzdHJveUV2ZW50cygpO1xuICAgIHJlbW92ZUNsYXNzKHNsaWRlLCBTVEFUVVNfQ0xBU1NFUyk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKHNsaWRlLCBBTExfQVRUUklCVVRFUyk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBcInN0eWxlXCIsIHN0eWxlcyk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdE5hdmlnYXRpb24oKSB7XG4gICAgY29uc3QgaWR4ID0gaXNDbG9uZSA/IHNsaWRlSW5kZXggOiBpbmRleDtcbiAgICBjb25zdCBsYWJlbCA9IGZvcm1hdChvcHRpb25zLmkxOG4uc2xpZGVYLCBpZHggKyAxKTtcbiAgICBjb25zdCBjb250cm9scyA9IFNwbGlkZTIuc3BsaWRlcy5tYXAoKHRhcmdldCkgPT4gdGFyZ2V0LnNwbGlkZS5yb290LmlkKS5qb2luKFwiIFwiKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGxhYmVsKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ09OVFJPTFMsIGNvbnRyb2xzKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFJPTEUsIFwibWVudWl0ZW1cIik7XG4gICAgdXBkYXRlQWN0aXZpdHkoaXNBY3RpdmUoKSk7XG4gIH1cbiAgZnVuY3Rpb24gb25Nb3ZlKCkge1xuICAgIGlmICghZGVzdHJveWVkKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICghZGVzdHJveWVkKSB7XG4gICAgICBjb25zdCB7IGluZGV4OiBjdXJySW5kZXggfSA9IFNwbGlkZTI7XG4gICAgICB1cGRhdGVBY3Rpdml0eShpc0FjdGl2ZSgpKTtcbiAgICAgIHVwZGF0ZVZpc2liaWxpdHkoaXNWaXNpYmxlKCkpO1xuICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIENMQVNTX1BSRVYsIGluZGV4ID09PSBjdXJySW5kZXggLSAxKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19ORVhULCBpbmRleCA9PT0gY3VyckluZGV4ICsgMSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUgIT09IGhhc0NsYXNzKHNsaWRlLCBDTEFTU19BQ1RJVkUpKSB7XG4gICAgICB0b2dnbGVDbGFzcyhzbGlkZSwgQ0xBU1NfQUNUSVZFLCBhY3RpdmUpO1xuICAgICAgaWYgKGlzTmF2aWdhdGlvbikge1xuICAgICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ1VSUkVOVCwgYWN0aXZlIHx8IG51bGwpO1xuICAgICAgfVxuICAgICAgZW1pdChhY3RpdmUgPyBFVkVOVF9BQ1RJVkUgOiBFVkVOVF9JTkFDVElWRSwgc2VsZik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVZpc2liaWxpdHkodmlzaWJsZSkge1xuICAgIGNvbnN0IGhpZGRlbiA9ICF2aXNpYmxlICYmICghaXNBY3RpdmUoKSB8fCBpc0Nsb25lKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfSElEREVOLCBoaWRkZW4gfHwgbnVsbCk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBUQUJfSU5ERVgsICFoaWRkZW4gJiYgb3B0aW9ucy5zbGlkZUZvY3VzID8gMCA6IG51bGwpO1xuICAgIGlmIChmb2N1c2FibGVOb2Rlcykge1xuICAgICAgZm9jdXNhYmxlTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBzZXRBdHRyaWJ1dGUobm9kZSwgVEFCX0lOREVYLCBoaWRkZW4gPyAtMSA6IG51bGwpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh2aXNpYmxlICE9PSBoYXNDbGFzcyhzbGlkZSwgQ0xBU1NfVklTSUJMRSkpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19WSVNJQkxFLCB2aXNpYmxlKTtcbiAgICAgIGVtaXQodmlzaWJsZSA/IEVWRU5UX1ZJU0lCTEUgOiBFVkVOVF9ISURERU4sIHNlbGYpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzdHlsZSQxKHByb3AsIHZhbHVlLCB1c2VDb250YWluZXIpIHtcbiAgICBzdHlsZSh1c2VDb250YWluZXIgJiYgY29udGFpbmVyIHx8IHNsaWRlLCBwcm9wLCB2YWx1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgY29uc3QgeyBpbmRleDogY3VyciB9ID0gU3BsaWRlMjtcbiAgICByZXR1cm4gY3VyciA9PT0gaW5kZXggfHwgb3B0aW9ucy5jbG9uZVN0YXR1cyAmJiBjdXJyID09PSBzbGlkZUluZGV4O1xuICB9XG4gIGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICBpZiAoU3BsaWRlMi5pcyhGQURFKSkge1xuICAgICAgcmV0dXJuIGlzQWN0aXZlKCk7XG4gICAgfVxuICAgIGNvbnN0IHRyYWNrUmVjdCA9IHJlY3QoQ29tcG9uZW50cy5FbGVtZW50cy50cmFjayk7XG4gICAgY29uc3Qgc2xpZGVSZWN0ID0gcmVjdChzbGlkZSk7XG4gICAgY29uc3QgbGVmdCA9IHJlc29sdmUoXCJsZWZ0XCIpO1xuICAgIGNvbnN0IHJpZ2h0ID0gcmVzb2x2ZShcInJpZ2h0XCIpO1xuICAgIHJldHVybiBmbG9vcih0cmFja1JlY3RbbGVmdF0pIDw9IGNlaWwoc2xpZGVSZWN0W2xlZnRdKSAmJiBmbG9vcihzbGlkZVJlY3RbcmlnaHRdKSA8PSBjZWlsKHRyYWNrUmVjdFtyaWdodF0pO1xuICB9XG4gIGZ1bmN0aW9uIGlzV2l0aGluKGZyb20sIGRpc3RhbmNlKSB7XG4gICAgbGV0IGRpZmYgPSBhYnMoZnJvbSAtIGluZGV4KTtcbiAgICBpZiAoIWlzQ2xvbmUgJiYgKG9wdGlvbnMucmV3aW5kIHx8IFNwbGlkZTIuaXMoTE9PUCkpKSB7XG4gICAgICBkaWZmID0gbWluKGRpZmYsIFNwbGlkZTIubGVuZ3RoIC0gZGlmZik7XG4gICAgfVxuICAgIHJldHVybiBkaWZmIDw9IGRpc3RhbmNlO1xuICB9XG4gIGNvbnN0IHNlbGYgPSB7XG4gICAgaW5kZXgsXG4gICAgc2xpZGVJbmRleCxcbiAgICBzbGlkZSxcbiAgICBjb250YWluZXIsXG4gICAgaXNDbG9uZSxcbiAgICBtb3VudCxcbiAgICBkZXN0cm95LFxuICAgIHVwZGF0ZSxcbiAgICBzdHlsZTogc3R5bGUkMSxcbiAgICBpc1dpdGhpblxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2xpZGVzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgb24sIGVtaXQsIGJpbmQgfSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICBjb25zdCB7IHNsaWRlcywgbGlzdCB9ID0gQ29tcG9uZW50czIuRWxlbWVudHM7XG4gIGNvbnN0IFNsaWRlczIgPSBbXTtcbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIHJlZnJlc2gpO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9SRUZSRVNIXSwgKCkgPT4ge1xuICAgICAgU2xpZGVzMi5zb3J0KChTbGlkZTEsIFNsaWRlMikgPT4gU2xpZGUxLmluZGV4IC0gU2xpZGUyLmluZGV4KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaW5kZXgpID0+IHtcbiAgICAgIHJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgLTEpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZm9yRWFjaCQxKChTbGlkZTIpID0+IHtcbiAgICAgIFNsaWRlMi5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgZW1wdHkoU2xpZGVzMik7XG4gIH1cbiAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICBkZXN0cm95KCk7XG4gICAgaW5pdCgpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBmb3JFYWNoJDEoKFNsaWRlMikgPT4ge1xuICAgICAgU2xpZGUyLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgc2xpZGVJbmRleCkge1xuICAgIGNvbnN0IG9iamVjdCA9IFNsaWRlJDEoU3BsaWRlMiwgaW5kZXgsIHNsaWRlSW5kZXgsIHNsaWRlKTtcbiAgICBvYmplY3QubW91bnQoKTtcbiAgICBTbGlkZXMyLnB1c2gob2JqZWN0KTtcbiAgfVxuICBmdW5jdGlvbiBnZXQoZXhjbHVkZUNsb25lcykge1xuICAgIHJldHVybiBleGNsdWRlQ2xvbmVzID8gZmlsdGVyKChTbGlkZTIpID0+ICFTbGlkZTIuaXNDbG9uZSkgOiBTbGlkZXMyO1xuICB9XG4gIGZ1bmN0aW9uIGdldEluKHBhZ2UpIHtcbiAgICBjb25zdCB7IENvbnRyb2xsZXIgfSA9IENvbXBvbmVudHMyO1xuICAgIGNvbnN0IGluZGV4ID0gQ29udHJvbGxlci50b0luZGV4KHBhZ2UpO1xuICAgIGNvbnN0IG1heCA9IENvbnRyb2xsZXIuaGFzRm9jdXMoKSA/IDEgOiBvcHRpb25zLnBlclBhZ2U7XG4gICAgcmV0dXJuIGZpbHRlcigoU2xpZGUyKSA9PiBiZXR3ZWVuKFNsaWRlMi5pbmRleCwgaW5kZXgsIGluZGV4ICsgbWF4IC0gMSkpO1xuICB9XG4gIGZ1bmN0aW9uIGdldEF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGZpbHRlcihpbmRleClbMF07XG4gIH1cbiAgZnVuY3Rpb24gYWRkKGl0ZW1zLCBpbmRleCkge1xuICAgIGZvckVhY2goaXRlbXMsIChzbGlkZSkgPT4ge1xuICAgICAgaWYgKGlzU3RyaW5nKHNsaWRlKSkge1xuICAgICAgICBzbGlkZSA9IHBhcnNlSHRtbChzbGlkZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNIVE1MRWxlbWVudChzbGlkZSkpIHtcbiAgICAgICAgY29uc3QgcmVmID0gc2xpZGVzW2luZGV4XTtcbiAgICAgICAgcmVmID8gYmVmb3JlKHNsaWRlLCByZWYpIDogYXBwZW5kKGxpc3QsIHNsaWRlKTtcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGUsIG9wdGlvbnMuY2xhc3Nlcy5zbGlkZSk7XG4gICAgICAgIG9ic2VydmVJbWFnZXMoc2xpZGUsIGVtaXQuYmluZChudWxsLCBFVkVOVF9SRVNJWkUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbWl0KEVWRU5UX1JFRlJFU0gpO1xuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZSQxKG1hdGNoZXIpIHtcbiAgICByZW1vdmUoZmlsdGVyKG1hdGNoZXIpLm1hcCgoU2xpZGUyKSA9PiBTbGlkZTIuc2xpZGUpKTtcbiAgICBlbWl0KEVWRU5UX1JFRlJFU0gpO1xuICB9XG4gIGZ1bmN0aW9uIGZvckVhY2gkMShpdGVyYXRlZSwgZXhjbHVkZUNsb25lcykge1xuICAgIGdldChleGNsdWRlQ2xvbmVzKS5mb3JFYWNoKGl0ZXJhdGVlKTtcbiAgfVxuICBmdW5jdGlvbiBmaWx0ZXIobWF0Y2hlcikge1xuICAgIHJldHVybiBTbGlkZXMyLmZpbHRlcihpc0Z1bmN0aW9uKG1hdGNoZXIpID8gbWF0Y2hlciA6IChTbGlkZTIpID0+IGlzU3RyaW5nKG1hdGNoZXIpID8gbWF0Y2hlcyhTbGlkZTIuc2xpZGUsIG1hdGNoZXIpIDogaW5jbHVkZXModG9BcnJheShtYXRjaGVyKSwgU2xpZGUyLmluZGV4KSk7XG4gIH1cbiAgZnVuY3Rpb24gc3R5bGUocHJvcCwgdmFsdWUsIHVzZUNvbnRhaW5lcikge1xuICAgIGZvckVhY2gkMSgoU2xpZGUyKSA9PiB7XG4gICAgICBTbGlkZTIuc3R5bGUocHJvcCwgdmFsdWUsIHVzZUNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gb2JzZXJ2ZUltYWdlcyhlbG0sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW1hZ2VzID0gcXVlcnlBbGwoZWxtLCBcImltZ1wiKTtcbiAgICBsZXQgeyBsZW5ndGggfSA9IGltYWdlcztcbiAgICBpZiAobGVuZ3RoKSB7XG4gICAgICBpbWFnZXMuZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICAgIGJpbmQoaW1nLCBcImxvYWQgZXJyb3JcIiwgKCkgPT4ge1xuICAgICAgICAgIGlmICghLS1sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRMZW5ndGgoZXhjbHVkZUNsb25lcykge1xuICAgIHJldHVybiBleGNsdWRlQ2xvbmVzID8gc2xpZGVzLmxlbmd0aCA6IFNsaWRlczIubGVuZ3RoO1xuICB9XG4gIGZ1bmN0aW9uIGlzRW5vdWdoKCkge1xuICAgIHJldHVybiBTbGlkZXMyLmxlbmd0aCA+IG9wdGlvbnMucGVyUGFnZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vdW50LFxuICAgIGRlc3Ryb3ksXG4gICAgdXBkYXRlLFxuICAgIHJlZ2lzdGVyLFxuICAgIGdldCxcbiAgICBnZXRJbixcbiAgICBnZXRBdCxcbiAgICBhZGQsXG4gICAgcmVtb3ZlOiByZW1vdmUkMSxcbiAgICBmb3JFYWNoOiBmb3JFYWNoJDEsXG4gICAgZmlsdGVyLFxuICAgIHN0eWxlLFxuICAgIGdldExlbmd0aCxcbiAgICBpc0Vub3VnaFxuICB9O1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBvbiwgYmluZCwgZW1pdCB9ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIGNvbnN0IHsgU2xpZGVzIH0gPSBDb21wb25lbnRzMjtcbiAgY29uc3QgeyByZXNvbHZlIH0gPSBDb21wb25lbnRzMi5EaXJlY3Rpb247XG4gIGNvbnN0IHsgcm9vdCwgdHJhY2ssIGxpc3QgfSA9IENvbXBvbmVudHMyLkVsZW1lbnRzO1xuICBjb25zdCB7IGdldEF0IH0gPSBTbGlkZXM7XG4gIGxldCB2ZXJ0aWNhbDtcbiAgbGV0IHJvb3RSZWN0O1xuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgYmluZCh3aW5kb3csIFwicmVzaXplIGxvYWRcIiwgVGhyb3R0bGUoZW1pdC5iaW5kKHRoaXMsIEVWRU5UX1JFU0laRSkpKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGluaXQpO1xuICAgIG9uKEVWRU5UX1JFU0laRSwgcmVzaXplKTtcbiAgfVxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHJvb3RSZWN0ID0gbnVsbDtcbiAgICB2ZXJ0aWNhbCA9IG9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEI7XG4gICAgc3R5bGUocm9vdCwgXCJtYXhXaWR0aFwiLCB1bml0KG9wdGlvbnMud2lkdGgpKTtcbiAgICBzdHlsZSh0cmFjaywgcmVzb2x2ZShcInBhZGRpbmdMZWZ0XCIpLCBjc3NQYWRkaW5nKGZhbHNlKSk7XG4gICAgc3R5bGUodHJhY2ssIHJlc29sdmUoXCJwYWRkaW5nUmlnaHRcIiksIGNzc1BhZGRpbmcodHJ1ZSkpO1xuICAgIHJlc2l6ZSgpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBuZXdSZWN0ID0gcmVjdChyb290KTtcbiAgICBpZiAoIXJvb3RSZWN0IHx8IHJvb3RSZWN0LndpZHRoICE9PSBuZXdSZWN0LndpZHRoIHx8IHJvb3RSZWN0LmhlaWdodCAhPT0gbmV3UmVjdC5oZWlnaHQpIHtcbiAgICAgIHN0eWxlKHRyYWNrLCBcImhlaWdodFwiLCBjc3NUcmFja0hlaWdodCgpKTtcbiAgICAgIFNsaWRlcy5zdHlsZShyZXNvbHZlKFwibWFyZ2luUmlnaHRcIiksIHVuaXQob3B0aW9ucy5nYXApKTtcbiAgICAgIFNsaWRlcy5zdHlsZShcIndpZHRoXCIsIGNzc1NsaWRlV2lkdGgoKSB8fCBudWxsKTtcbiAgICAgIHNldFNsaWRlc0hlaWdodCgpO1xuICAgICAgcm9vdFJlY3QgPSBuZXdSZWN0O1xuICAgICAgZW1pdChFVkVOVF9SRVNJWkVEKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0U2xpZGVzSGVpZ2h0KCkge1xuICAgIFNsaWRlcy5zdHlsZShcImhlaWdodFwiLCBjc3NTbGlkZUhlaWdodCgpIHx8IG51bGwsIHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGNzc1BhZGRpbmcocmlnaHQpIHtcbiAgICBjb25zdCB7IHBhZGRpbmcgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgcHJvcCA9IHJlc29sdmUocmlnaHQgPyBcInJpZ2h0XCIgOiBcImxlZnRcIik7XG4gICAgcmV0dXJuIHBhZGRpbmcgJiYgdW5pdChwYWRkaW5nW3Byb3BdIHx8IChpc09iamVjdChwYWRkaW5nKSA/IDAgOiBwYWRkaW5nKSkgfHwgXCIwcHhcIjtcbiAgfVxuICBmdW5jdGlvbiBjc3NUcmFja0hlaWdodCgpIHtcbiAgICBsZXQgaGVpZ2h0ID0gXCJcIjtcbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGhlaWdodCA9IGNzc0hlaWdodCgpO1xuICAgICAgYXNzZXJ0KGhlaWdodCwgXCJoZWlnaHQgb3IgaGVpZ2h0UmF0aW8gaXMgbWlzc2luZy5cIik7XG4gICAgICBoZWlnaHQgPSBgY2FsYygke2hlaWdodH0gLSAke2Nzc1BhZGRpbmcoZmFsc2UpfSAtICR7Y3NzUGFkZGluZyh0cnVlKX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuICBmdW5jdGlvbiBjc3NIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHVuaXQob3B0aW9ucy5oZWlnaHQgfHwgcmVjdChsaXN0KS53aWR0aCAqIG9wdGlvbnMuaGVpZ2h0UmF0aW8pO1xuICB9XG4gIGZ1bmN0aW9uIGNzc1NsaWRlV2lkdGgoKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuYXV0b1dpZHRoID8gXCJcIiA6IHVuaXQob3B0aW9ucy5maXhlZFdpZHRoKSB8fCAodmVydGljYWwgPyBcIlwiIDogY3NzU2xpZGVTaXplKCkpO1xuICB9XG4gIGZ1bmN0aW9uIGNzc1NsaWRlSGVpZ2h0KCkge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuZml4ZWRIZWlnaHQpIHx8ICh2ZXJ0aWNhbCA/IG9wdGlvbnMuYXV0b0hlaWdodCA/IFwiXCIgOiBjc3NTbGlkZVNpemUoKSA6IGNzc0hlaWdodCgpKTtcbiAgfVxuICBmdW5jdGlvbiBjc3NTbGlkZVNpemUoKSB7XG4gICAgY29uc3QgZ2FwID0gdW5pdChvcHRpb25zLmdhcCk7XG4gICAgcmV0dXJuIGBjYWxjKCgxMDAlJHtnYXAgJiYgYCArICR7Z2FwfWB9KS8ke29wdGlvbnMucGVyUGFnZSB8fCAxfSR7Z2FwICYmIGAgLSAke2dhcH1gfSlgO1xuICB9XG4gIGZ1bmN0aW9uIGxpc3RTaXplKCkge1xuICAgIHJldHVybiByZWN0KGxpc3QpW3Jlc29sdmUoXCJ3aWR0aFwiKV07XG4gIH1cbiAgZnVuY3Rpb24gc2xpZGVTaXplKGluZGV4LCB3aXRob3V0R2FwKSB7XG4gICAgY29uc3QgU2xpZGUgPSBnZXRBdChpbmRleCB8fCAwKTtcbiAgICByZXR1cm4gU2xpZGUgPyByZWN0KFNsaWRlLnNsaWRlKVtyZXNvbHZlKFwid2lkdGhcIildICsgKHdpdGhvdXRHYXAgPyAwIDogZ2V0R2FwKCkpIDogMDtcbiAgfVxuICBmdW5jdGlvbiB0b3RhbFNpemUoaW5kZXgsIHdpdGhvdXRHYXApIHtcbiAgICBjb25zdCBTbGlkZSA9IGdldEF0KGluZGV4KTtcbiAgICBpZiAoU2xpZGUpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gcmVjdChTbGlkZS5zbGlkZSlbcmVzb2x2ZShcInJpZ2h0XCIpXTtcbiAgICAgIGNvbnN0IGxlZnQgPSByZWN0KGxpc3QpW3Jlc29sdmUoXCJsZWZ0XCIpXTtcbiAgICAgIHJldHVybiBhYnMocmlnaHQgLSBsZWZ0KSArICh3aXRob3V0R2FwID8gMCA6IGdldEdhcCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgZnVuY3Rpb24gc2xpZGVyU2l6ZSgpIHtcbiAgICByZXR1cm4gdG90YWxTaXplKFNwbGlkZTIubGVuZ3RoIC0gMSwgdHJ1ZSkgLSB0b3RhbFNpemUoLTEsIHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIGdldEdhcCgpIHtcbiAgICBjb25zdCBTbGlkZSA9IGdldEF0KDApO1xuICAgIHJldHVybiBTbGlkZSAmJiBwYXJzZUZsb2F0KHN0eWxlKFNsaWRlLnNsaWRlLCByZXNvbHZlKFwibWFyZ2luUmlnaHRcIikpKSB8fCAwO1xuICB9XG4gIGZ1bmN0aW9uIGdldFBhZGRpbmcocmlnaHQpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZSh0cmFjaywgcmVzb2x2ZShgcGFkZGluZyR7cmlnaHQgPyBcIlJpZ2h0XCIgOiBcIkxlZnRcIn1gKSkpIHx8IDA7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb3VudCxcbiAgICBsaXN0U2l6ZSxcbiAgICBzbGlkZVNpemUsXG4gICAgc2xpZGVyU2l6ZSxcbiAgICB0b3RhbFNpemUsXG4gICAgZ2V0UGFkZGluZ1xuICB9O1xufVxuXG5mdW5jdGlvbiBDbG9uZXMoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBvbiwgZW1pdCB9ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIGNvbnN0IHsgRWxlbWVudHMsIFNsaWRlcyB9ID0gQ29tcG9uZW50czI7XG4gIGNvbnN0IHsgcmVzb2x2ZSB9ID0gQ29tcG9uZW50czIuRGlyZWN0aW9uO1xuICBjb25zdCBjbG9uZXMgPSBbXTtcbiAgbGV0IGNsb25lQ291bnQ7XG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9SRUZSRVNILCByZWZyZXNoKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVTSVpFXSwgb2JzZXJ2ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoY2xvbmVDb3VudCA9IGNvbXB1dGVDbG9uZUNvdW50KCkpIHtcbiAgICAgIGdlbmVyYXRlKGNsb25lQ291bnQpO1xuICAgICAgZW1pdChFVkVOVF9SRVNJWkUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZShjbG9uZXMpO1xuICAgIGVtcHR5KGNsb25lcyk7XG4gIH1cbiAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICBkZXN0cm95KCk7XG4gICAgaW5pdCgpO1xuICB9XG4gIGZ1bmN0aW9uIG9ic2VydmUoKSB7XG4gICAgaWYgKGNsb25lQ291bnQgPCBjb21wdXRlQ2xvbmVDb3VudCgpKSB7XG4gICAgICBlbWl0KEVWRU5UX1JFRlJFU0gpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZW5lcmF0ZShjb3VudCkge1xuICAgIGNvbnN0IHNsaWRlcyA9IFNsaWRlcy5nZXQoKS5zbGljZSgpO1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBzbGlkZXM7XG4gICAgaWYgKGxlbmd0aCkge1xuICAgICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgICBwdXNoKHNsaWRlcywgc2xpZGVzKTtcbiAgICAgIH1cbiAgICAgIHB1c2goc2xpZGVzLnNsaWNlKC1jb3VudCksIHNsaWRlcy5zbGljZSgwLCBjb3VudCkpLmZvckVhY2goKFNsaWRlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc0hlYWQgPSBpbmRleCA8IGNvdW50O1xuICAgICAgICBjb25zdCBjbG9uZSA9IGNsb25lRGVlcChTbGlkZS5zbGlkZSwgaW5kZXgpO1xuICAgICAgICBpc0hlYWQgPyBiZWZvcmUoY2xvbmUsIHNsaWRlc1swXS5zbGlkZSkgOiBhcHBlbmQoRWxlbWVudHMubGlzdCwgY2xvbmUpO1xuICAgICAgICBwdXNoKGNsb25lcywgY2xvbmUpO1xuICAgICAgICBTbGlkZXMucmVnaXN0ZXIoY2xvbmUsIGluZGV4IC0gY291bnQgKyAoaXNIZWFkID8gMCA6IGxlbmd0aCksIFNsaWRlLmluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjbG9uZURlZXAoZWxtLCBpbmRleCkge1xuICAgIGNvbnN0IGNsb25lID0gZWxtLmNsb25lTm9kZSh0cnVlKTtcbiAgICBhZGRDbGFzcyhjbG9uZSwgb3B0aW9ucy5jbGFzc2VzLmNsb25lKTtcbiAgICBjbG9uZS5pZCA9IGAke1NwbGlkZTIucm9vdC5pZH0tY2xvbmUke3BhZChpbmRleCArIDEpfWA7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG4gIGZ1bmN0aW9uIGNvbXB1dGVDbG9uZUNvdW50KCkge1xuICAgIGxldCB7IGNsb25lczogY2xvbmVzMiB9ID0gb3B0aW9ucztcbiAgICBpZiAoIVNwbGlkZTIuaXMoTE9PUCkpIHtcbiAgICAgIGNsb25lczIgPSAwO1xuICAgIH0gZWxzZSBpZiAoIWNsb25lczIpIHtcbiAgICAgIGNvbnN0IGZpeGVkU2l6ZSA9IG1lYXN1cmUoRWxlbWVudHMubGlzdCwgb3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0pO1xuICAgICAgY29uc3QgZml4ZWRDb3VudCA9IGZpeGVkU2l6ZSAmJiBjZWlsKHJlY3QoRWxlbWVudHMudHJhY2spW3Jlc29sdmUoXCJ3aWR0aFwiKV0gLyBmaXhlZFNpemUpO1xuICAgICAgY29uc3QgYmFzZUNvdW50ID0gZml4ZWRDb3VudCB8fCBvcHRpb25zW3Jlc29sdmUoXCJhdXRvV2lkdGhcIildICYmIFNwbGlkZTIubGVuZ3RoIHx8IG9wdGlvbnMucGVyUGFnZTtcbiAgICAgIGNsb25lczIgPSBiYXNlQ291bnQgKiAob3B0aW9ucy5kcmFnID8gKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSArIDEgOiAyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lczI7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb3VudCxcbiAgICBkZXN0cm95XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1vdmUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBvbiwgZW1pdCB9ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIGNvbnN0IHsgc2xpZGVTaXplLCBnZXRQYWRkaW5nLCB0b3RhbFNpemUsIGxpc3RTaXplLCBzbGlkZXJTaXplIH0gPSBDb21wb25lbnRzMi5MYXlvdXQ7XG4gIGNvbnN0IHsgcmVzb2x2ZSwgb3JpZW50IH0gPSBDb21wb25lbnRzMi5EaXJlY3Rpb247XG4gIGNvbnN0IHsgbGlzdCwgdHJhY2sgfSA9IENvbXBvbmVudHMyLkVsZW1lbnRzO1xuICBsZXQgVHJhbnNpdGlvbjtcbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgVHJhbnNpdGlvbiA9IENvbXBvbmVudHMyLlRyYW5zaXRpb247XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1JFU0laRUQsIEVWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCByZXBvc2l0aW9uKTtcbiAgfVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZUF0dHJpYnV0ZShsaXN0LCBcInN0eWxlXCIpO1xuICB9XG4gIGZ1bmN0aW9uIHJlcG9zaXRpb24oKSB7XG4gICAgaWYgKCFpc0J1c3koKSkge1xuICAgICAgQ29tcG9uZW50czIuU2Nyb2xsLmNhbmNlbCgpO1xuICAgICAganVtcChTcGxpZGUyLmluZGV4KTtcbiAgICAgIGVtaXQoRVZFTlRfUkVQT1NJVElPTkVEKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbW92ZShkZXN0LCBpbmRleCwgcHJldiwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWlzQnVzeSgpKSB7XG4gICAgICBjb25zdCB7IHNldCB9ID0gU3BsaWRlMi5zdGF0ZTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9zaXRpb24oKTtcbiAgICAgIGlmIChkZXN0ICE9PSBpbmRleCkge1xuICAgICAgICBUcmFuc2l0aW9uLmNhbmNlbCgpO1xuICAgICAgICB0cmFuc2xhdGUoc2hpZnQocG9zaXRpb24sIGRlc3QgPiBpbmRleCksIHRydWUpO1xuICAgICAgfVxuICAgICAgc2V0KE1PVklORyk7XG4gICAgICBlbWl0KEVWRU5UX01PVkUsIGluZGV4LCBwcmV2LCBkZXN0KTtcbiAgICAgIFRyYW5zaXRpb24uc3RhcnQoaW5kZXgsICgpID0+IHtcbiAgICAgICAgc2V0KElETEUpO1xuICAgICAgICBlbWl0KEVWRU5UX01PVkVELCBpbmRleCwgcHJldiwgZGVzdCk7XG4gICAgICAgIGlmIChvcHRpb25zLnRyaW1TcGFjZSA9PT0gXCJtb3ZlXCIgJiYgZGVzdCAhPT0gcHJldiAmJiBwb3NpdGlvbiA9PT0gZ2V0UG9zaXRpb24oKSkge1xuICAgICAgICAgIENvbXBvbmVudHMyLkNvbnRyb2xsZXIuZ28oZGVzdCA+IHByZXYgPyBcIj5cIiA6IFwiPFwiLCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBqdW1wKGluZGV4KSB7XG4gICAgdHJhbnNsYXRlKHRvUG9zaXRpb24oaW5kZXgsIHRydWUpKTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2xhdGUocG9zaXRpb24sIHByZXZlbnRMb29wKSB7XG4gICAgaWYgKCFTcGxpZGUyLmlzKEZBREUpKSB7XG4gICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByZXZlbnRMb29wID8gcG9zaXRpb24gOiBsb29wKHBvc2l0aW9uKTtcbiAgICAgIGxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSR7cmVzb2x2ZShcIlhcIil9KCR7ZGVzdGluYXRpb259cHgpYDtcbiAgICAgIHBvc2l0aW9uICE9PSBkZXN0aW5hdGlvbiAmJiBlbWl0KEVWRU5UX1NISUZURUQpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBsb29wKHBvc2l0aW9uKSB7XG4gICAgaWYgKFNwbGlkZTIuaXMoTE9PUCkpIHtcbiAgICAgIGNvbnN0IGRpZmYgPSBvcmllbnQocG9zaXRpb24gLSBnZXRQb3NpdGlvbigpKTtcbiAgICAgIGNvbnN0IGV4Y2VlZGVkTWluID0gZXhjZWVkZWRMaW1pdChmYWxzZSwgcG9zaXRpb24pICYmIGRpZmYgPCAwO1xuICAgICAgY29uc3QgZXhjZWVkZWRNYXggPSBleGNlZWRlZExpbWl0KHRydWUsIHBvc2l0aW9uKSAmJiBkaWZmID4gMDtcbiAgICAgIGlmIChleGNlZWRlZE1pbiB8fCBleGNlZWRlZE1heCkge1xuICAgICAgICBwb3NpdGlvbiA9IHNoaWZ0KHBvc2l0aW9uLCBleGNlZWRlZE1heCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuICBmdW5jdGlvbiBzaGlmdChwb3NpdGlvbiwgYmFja3dhcmRzKSB7XG4gICAgY29uc3QgZXhjZXNzID0gcG9zaXRpb24gLSBnZXRMaW1pdChiYWNrd2FyZHMpO1xuICAgIGNvbnN0IHNpemUgPSBzbGlkZXJTaXplKCk7XG4gICAgcG9zaXRpb24gLT0gb3JpZW50KHNpemUgKiAoY2VpbChhYnMoZXhjZXNzKSAvIHNpemUpIHx8IDEpKSAqIChiYWNrd2FyZHMgPyAxIDogLTEpO1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgdHJhbnNsYXRlKGdldFBvc2l0aW9uKCkpO1xuICAgIFRyYW5zaXRpb24uY2FuY2VsKCk7XG4gIH1cbiAgZnVuY3Rpb24gdG9JbmRleChwb3NpdGlvbikge1xuICAgIGNvbnN0IFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcy5nZXQoKTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzbGlkZUluZGV4ID0gU2xpZGVzW2ldLmluZGV4O1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSBhYnModG9Qb3NpdGlvbihzbGlkZUluZGV4LCB0cnVlKSAtIHBvc2l0aW9uKTtcbiAgICAgIGlmIChkaXN0YW5jZSA8PSBtaW5EaXN0YW5jZSkge1xuICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICBpbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIGZ1bmN0aW9uIHRvUG9zaXRpb24oaW5kZXgsIHRyaW1taW5nKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBvcmllbnQodG90YWxTaXplKGluZGV4IC0gMSkgLSBvZmZzZXQoaW5kZXgpKTtcbiAgICByZXR1cm4gdHJpbW1pbmcgPyB0cmltKHBvc2l0aW9uKSA6IHBvc2l0aW9uO1xuICB9XG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGxlZnQgPSByZXNvbHZlKFwibGVmdFwiKTtcbiAgICByZXR1cm4gcmVjdChsaXN0KVtsZWZ0XSAtIHJlY3QodHJhY2spW2xlZnRdICsgb3JpZW50KGdldFBhZGRpbmcoZmFsc2UpKTtcbiAgfVxuICBmdW5jdGlvbiB0cmltKHBvc2l0aW9uKSB7XG4gICAgaWYgKG9wdGlvbnMudHJpbVNwYWNlICYmIFNwbGlkZTIuaXMoU0xJREUpKSB7XG4gICAgICBwb3NpdGlvbiA9IGNsYW1wKHBvc2l0aW9uLCAwLCBvcmllbnQoc2xpZGVyU2l6ZSgpIC0gbGlzdFNpemUoKSkpO1xuICAgIH1cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbiAgZnVuY3Rpb24gb2Zmc2V0KGluZGV4KSB7XG4gICAgY29uc3QgeyBmb2N1cyB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4gZm9jdXMgPT09IFwiY2VudGVyXCIgPyAobGlzdFNpemUoKSAtIHNsaWRlU2l6ZShpbmRleCwgdHJ1ZSkpIC8gMiA6ICtmb2N1cyAqIHNsaWRlU2l6ZShpbmRleCkgfHwgMDtcbiAgfVxuICBmdW5jdGlvbiBnZXRMaW1pdChtYXgpIHtcbiAgICByZXR1cm4gdG9Qb3NpdGlvbihtYXggPyBDb21wb25lbnRzMi5Db250cm9sbGVyLmdldEVuZCgpIDogMCwgISFvcHRpb25zLnRyaW1TcGFjZSk7XG4gIH1cbiAgZnVuY3Rpb24gaXNCdXN5KCkge1xuICAgIHJldHVybiBTcGxpZGUyLnN0YXRlLmlzKE1PVklORykgJiYgb3B0aW9ucy53YWl0Rm9yVHJhbnNpdGlvbjtcbiAgfVxuICBmdW5jdGlvbiBleGNlZWRlZExpbWl0KG1heCwgcG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbiA9IGlzVW5kZWZpbmVkKHBvc2l0aW9uKSA/IGdldFBvc2l0aW9uKCkgOiBwb3NpdGlvbjtcbiAgICBjb25zdCBleGNlZWRlZE1pbiA9IG1heCAhPT0gdHJ1ZSAmJiBvcmllbnQocG9zaXRpb24pIDwgb3JpZW50KGdldExpbWl0KGZhbHNlKSk7XG4gICAgY29uc3QgZXhjZWVkZWRNYXggPSBtYXggIT09IGZhbHNlICYmIG9yaWVudChwb3NpdGlvbikgPiBvcmllbnQoZ2V0TGltaXQodHJ1ZSkpO1xuICAgIHJldHVybiBleGNlZWRlZE1pbiB8fCBleGNlZWRlZE1heDtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vdW50LFxuICAgIGRlc3Ryb3ksXG4gICAgbW92ZSxcbiAgICBqdW1wLFxuICAgIHRyYW5zbGF0ZSxcbiAgICBzaGlmdCxcbiAgICBjYW5jZWwsXG4gICAgdG9JbmRleCxcbiAgICB0b1Bvc2l0aW9uLFxuICAgIGdldFBvc2l0aW9uLFxuICAgIGdldExpbWl0LFxuICAgIGlzQnVzeSxcbiAgICBleGNlZWRlZExpbWl0XG4gIH07XG59XG5cbmZ1bmN0aW9uIENvbnRyb2xsZXIoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBvbiB9ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIGNvbnN0IHsgTW92ZSB9ID0gQ29tcG9uZW50czI7XG4gIGNvbnN0IHsgZ2V0UG9zaXRpb24sIGdldExpbWl0IH0gPSBNb3ZlO1xuICBjb25zdCB7IGlzRW5vdWdoLCBnZXRMZW5ndGggfSA9IENvbXBvbmVudHMyLlNsaWRlcztcbiAgY29uc3QgaXNMb29wID0gU3BsaWRlMi5pcyhMT09QKTtcbiAgY29uc3QgaXNTbGlkZSA9IFNwbGlkZTIuaXMoU0xJREUpO1xuICBsZXQgY3VyckluZGV4ID0gb3B0aW9ucy5zdGFydCB8fCAwO1xuICBsZXQgcHJldkluZGV4ID0gY3VyckluZGV4O1xuICBsZXQgc2xpZGVDb3VudDtcbiAgbGV0IHBlck1vdmU7XG4gIGxldCBwZXJQYWdlO1xuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBpbml0LCBERUZBVUxUX0VWRU5UX1BSSU9SSVRZIC0gMSk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzbGlkZUNvdW50ID0gZ2V0TGVuZ3RoKHRydWUpO1xuICAgIHBlck1vdmUgPSBvcHRpb25zLnBlck1vdmU7XG4gICAgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTtcbiAgICBjdXJySW5kZXggPSBjbGFtcChjdXJySW5kZXgsIDAsIHNsaWRlQ291bnQgLSAxKTtcbiAgfVxuICBmdW5jdGlvbiBnbyhjb250cm9sLCBhbGxvd1NhbWVJbmRleCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkZXN0ID0gcGFyc2UoY29udHJvbCk7XG4gICAgaWYgKG9wdGlvbnMudXNlU2Nyb2xsKSB7XG4gICAgICBzY3JvbGwoZGVzdCwgdHJ1ZSwgdHJ1ZSwgb3B0aW9ucy5zcGVlZCwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IGxvb3AoZGVzdCk7XG4gICAgICBpZiAoaW5kZXggPiAtMSAmJiAhTW92ZS5pc0J1c3koKSAmJiAoYWxsb3dTYW1lSW5kZXggfHwgaW5kZXggIT09IGN1cnJJbmRleCkpIHtcbiAgICAgICAgc2V0SW5kZXgoaW5kZXgpO1xuICAgICAgICBNb3ZlLm1vdmUoZGVzdCwgaW5kZXgsIHByZXZJbmRleCwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzY3JvbGwoZGVzdGluYXRpb24sIHVzZUluZGV4LCBzbmFwLCBkdXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkZXN0ID0gdXNlSW5kZXggPyBkZXN0aW5hdGlvbiA6IHRvRGVzdChkZXN0aW5hdGlvbik7XG4gICAgQ29tcG9uZW50czIuU2Nyb2xsLnNjcm9sbCh1c2VJbmRleCB8fCBzbmFwID8gTW92ZS50b1Bvc2l0aW9uKGRlc3QsIHRydWUpIDogZGVzdGluYXRpb24sIGR1cmF0aW9uLCAoKSA9PiB7XG4gICAgICBzZXRJbmRleChNb3ZlLnRvSW5kZXgoTW92ZS5nZXRQb3NpdGlvbigpKSk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHBhcnNlKGNvbnRyb2wpIHtcbiAgICBsZXQgaW5kZXggPSBjdXJySW5kZXg7XG4gICAgaWYgKGlzU3RyaW5nKGNvbnRyb2wpKSB7XG4gICAgICBjb25zdCBbLCBpbmRpY2F0b3IsIG51bWJlcl0gPSBjb250cm9sLm1hdGNoKC8oWytcXC08Pl0pKFxcZCspPy8pIHx8IFtdO1xuICAgICAgaWYgKGluZGljYXRvciA9PT0gXCIrXCIgfHwgaW5kaWNhdG9yID09PSBcIi1cIikge1xuICAgICAgICBpbmRleCA9IGNvbXB1dGVEZXN0SW5kZXgoY3VyckluZGV4ICsgK2Ake2luZGljYXRvcn0keytudW1iZXIgfHwgMX1gLCBjdXJySW5kZXgsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChpbmRpY2F0b3IgPT09IFwiPlwiKSB7XG4gICAgICAgIGluZGV4ID0gbnVtYmVyID8gdG9JbmRleCgrbnVtYmVyKSA6IGdldE5leHQodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGluZGljYXRvciA9PT0gXCI8XCIpIHtcbiAgICAgICAgaW5kZXggPSBnZXRQcmV2KHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IGlzTG9vcCA/IGNvbnRyb2wgOiBjbGFtcChjb250cm9sLCAwLCBnZXRFbmQoKSk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICBmdW5jdGlvbiBnZXROZXh0KGRlc3RpbmF0aW9uKSB7XG4gICAgcmV0dXJuIGdldEFkamFjZW50KGZhbHNlLCBkZXN0aW5hdGlvbik7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0UHJldihkZXN0aW5hdGlvbikge1xuICAgIHJldHVybiBnZXRBZGphY2VudCh0cnVlLCBkZXN0aW5hdGlvbik7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0QWRqYWNlbnQocHJldiwgZGVzdGluYXRpb24pIHtcbiAgICBjb25zdCBudW1iZXIgPSBwZXJNb3ZlIHx8IChoYXNGb2N1cygpID8gMSA6IHBlclBhZ2UpO1xuICAgIGNvbnN0IGRlc3QgPSBjb21wdXRlRGVzdEluZGV4KGN1cnJJbmRleCArIG51bWJlciAqIChwcmV2ID8gLTEgOiAxKSwgY3VyckluZGV4KTtcbiAgICBpZiAoZGVzdCA9PT0gLTEgJiYgaXNTbGlkZSkge1xuICAgICAgaWYgKCFhcHByb3hpbWF0ZWx5RXF1YWwoZ2V0UG9zaXRpb24oKSwgZ2V0TGltaXQoIXByZXYpLCAxKSkge1xuICAgICAgICByZXR1cm4gcHJldiA/IDAgOiBnZXRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uID8gZGVzdCA6IGxvb3AoZGVzdCk7XG4gIH1cbiAgZnVuY3Rpb24gY29tcHV0ZURlc3RJbmRleChkZXN0LCBmcm9tLCBpbmNyZW1lbnRhbCkge1xuICAgIGlmIChpc0Vub3VnaCgpKSB7XG4gICAgICBjb25zdCBlbmQgPSBnZXRFbmQoKTtcbiAgICAgIGlmIChkZXN0IDwgMCB8fCBkZXN0ID4gZW5kKSB7XG4gICAgICAgIGlmIChiZXR3ZWVuKDAsIGRlc3QsIGZyb20sIHRydWUpIHx8IGJldHdlZW4oZW5kLCBmcm9tLCBkZXN0LCB0cnVlKSkge1xuICAgICAgICAgIGRlc3QgPSB0b0luZGV4KHRvUGFnZShkZXN0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzTG9vcCkge1xuICAgICAgICAgICAgZGVzdCA9IHBlck1vdmUgfHwgaGFzRm9jdXMoKSA/IGRlc3QgOiBkZXN0IDwgMCA/IC0oc2xpZGVDb3VudCAlIHBlclBhZ2UgfHwgcGVyUGFnZSkgOiBzbGlkZUNvdW50O1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXdpbmQpIHtcbiAgICAgICAgICAgIGRlc3QgPSBkZXN0IDwgMCA/IGVuZCA6IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3QgPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaW5jcmVtZW50YWwgJiYgZGVzdCAhPT0gZnJvbSkge1xuICAgICAgICAgIGRlc3QgPSBwZXJNb3ZlID8gZGVzdCA6IHRvSW5kZXgodG9QYWdlKGZyb20pICsgKGRlc3QgPCBmcm9tID8gLTEgOiAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdCA9IC0xO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuICBmdW5jdGlvbiBnZXRFbmQoKSB7XG4gICAgbGV0IGVuZCA9IHNsaWRlQ291bnQgLSBwZXJQYWdlO1xuICAgIGlmIChoYXNGb2N1cygpIHx8IGlzTG9vcCAmJiBwZXJNb3ZlKSB7XG4gICAgICBlbmQgPSBzbGlkZUNvdW50IC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG1heChlbmQsIDApO1xuICB9XG4gIGZ1bmN0aW9uIGxvb3AoaW5kZXgpIHtcbiAgICBpZiAoaXNMb29wKSB7XG4gICAgICByZXR1cm4gaXNFbm91Z2goKSA/IGluZGV4ICUgc2xpZGVDb3VudCArIChpbmRleCA8IDAgPyBzbGlkZUNvdW50IDogMCkgOiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIGZ1bmN0aW9uIHRvSW5kZXgocGFnZSkge1xuICAgIHJldHVybiBjbGFtcChoYXNGb2N1cygpID8gcGFnZSA6IHBlclBhZ2UgKiBwYWdlLCAwLCBnZXRFbmQoKSk7XG4gIH1cbiAgZnVuY3Rpb24gdG9QYWdlKGluZGV4KSB7XG4gICAgaWYgKCFoYXNGb2N1cygpKSB7XG4gICAgICBpbmRleCA9IGJldHdlZW4oaW5kZXgsIHNsaWRlQ291bnQgLSBwZXJQYWdlLCBzbGlkZUNvdW50IC0gMSkgPyBzbGlkZUNvdW50IC0gMSA6IGluZGV4O1xuICAgICAgaW5kZXggPSBmbG9vcihpbmRleCAvIHBlclBhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cbiAgZnVuY3Rpb24gdG9EZXN0KGRlc3RpbmF0aW9uKSB7XG4gICAgY29uc3QgY2xvc2VzdCA9IE1vdmUudG9JbmRleChkZXN0aW5hdGlvbik7XG4gICAgcmV0dXJuIGlzU2xpZGUgPyBjbGFtcChjbG9zZXN0LCAwLCBnZXRFbmQoKSkgOiBjbG9zZXN0O1xuICB9XG4gIGZ1bmN0aW9uIHNldEluZGV4KGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9PSBjdXJySW5kZXgpIHtcbiAgICAgIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgICAgIGN1cnJJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRJbmRleChwcmV2KSB7XG4gICAgcmV0dXJuIHByZXYgPyBwcmV2SW5kZXggOiBjdXJySW5kZXg7XG4gIH1cbiAgZnVuY3Rpb24gaGFzRm9jdXMoKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvcHRpb25zLmZvY3VzKSB8fCBvcHRpb25zLmlzTmF2aWdhdGlvbjtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vdW50LFxuICAgIGdvLFxuICAgIHNjcm9sbCxcbiAgICBnZXROZXh0LFxuICAgIGdldFByZXYsXG4gICAgZ2V0QWRqYWNlbnQsXG4gICAgZ2V0RW5kLFxuICAgIHNldEluZGV4LFxuICAgIGdldEluZGV4LFxuICAgIHRvSW5kZXgsXG4gICAgdG9QYWdlLFxuICAgIHRvRGVzdCxcbiAgICBoYXNGb2N1c1xuICB9O1xufVxuXG5jb25zdCBYTUxfTkFNRV9TUEFDRSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbmNvbnN0IFBBVEggPSBcIm0xNS41IDAuOTMyLTQuMyA0LjM4IDE0LjUgMTQuNi0xNC41IDE0LjUgNC4zIDQuNCAxNC42LTE0LjYgNC40LTQuMy00LjQtNC40LTE0LjYtMTQuNnpcIjtcbmNvbnN0IFNJWkUgPSA0MDtcblxuZnVuY3Rpb24gQXJyb3dzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgb24sIGJpbmQsIGVtaXQgfSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICBjb25zdCB7IGNsYXNzZXMsIGkxOG4gfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHsgRWxlbWVudHMsIENvbnRyb2xsZXIgfSA9IENvbXBvbmVudHMyO1xuICBsZXQgd3JhcHBlciA9IEVsZW1lbnRzLmFycm93cztcbiAgbGV0IHByZXYgPSBFbGVtZW50cy5wcmV2O1xuICBsZXQgbmV4dCA9IEVsZW1lbnRzLm5leHQ7XG4gIGxldCBjcmVhdGVkO1xuICBjb25zdCBhcnJvd3MgPSB7fTtcbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKEVWRU5UX1VQREFURUQsIGluaXQpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKG9wdGlvbnMuYXJyb3dzKSB7XG4gICAgICBpZiAoIXByZXYgfHwgIW5leHQpIHtcbiAgICAgICAgY3JlYXRlQXJyb3dzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcmV2ICYmIG5leHQpIHtcbiAgICAgIGlmICghYXJyb3dzLnByZXYpIHtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gRWxlbWVudHMudHJhY2s7XG4gICAgICAgIHNldEF0dHJpYnV0ZShwcmV2LCBBUklBX0NPTlRST0xTLCBpZCk7XG4gICAgICAgIHNldEF0dHJpYnV0ZShuZXh0LCBBUklBX0NPTlRST0xTLCBpZCk7XG4gICAgICAgIGFycm93cy5wcmV2ID0gcHJldjtcbiAgICAgICAgYXJyb3dzLm5leHQgPSBuZXh0O1xuICAgICAgICBsaXN0ZW4oKTtcbiAgICAgICAgZW1pdChFVkVOVF9BUlJPV1NfTU9VTlRFRCwgcHJldiwgbmV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5KHdyYXBwZXIsIG9wdGlvbnMuYXJyb3dzID09PSBmYWxzZSA/IFwibm9uZVwiIDogXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIHJlbW92ZSh3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKHByZXYsIEFMTF9BVFRSSUJVVEVTKTtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShuZXh0LCBBTExfQVRUUklCVVRFUyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICBjb25zdCB7IGdvIH0gPSBDb250cm9sbGVyO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9NT1ZFRCwgRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfU0NST0xMRURdLCB1cGRhdGUpO1xuICAgIGJpbmQobmV4dCwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBnbyhcIj5cIiwgdHJ1ZSk7XG4gICAgfSk7XG4gICAgYmluZChwcmV2LCBcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGdvKFwiPFwiLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVBcnJvd3MoKSB7XG4gICAgd3JhcHBlciA9IGNyZWF0ZShcImRpdlwiLCBjbGFzc2VzLmFycm93cyk7XG4gICAgcHJldiA9IGNyZWF0ZUFycm93KHRydWUpO1xuICAgIG5leHQgPSBjcmVhdGVBcnJvdyhmYWxzZSk7XG4gICAgY3JlYXRlZCA9IHRydWU7XG4gICAgYXBwZW5kKHdyYXBwZXIsIFtwcmV2LCBuZXh0XSk7XG4gICAgYmVmb3JlKHdyYXBwZXIsIGNoaWxkKG9wdGlvbnMuYXJyb3dzID09PSBcInNsaWRlclwiICYmIEVsZW1lbnRzLnNsaWRlciB8fCBTcGxpZGUyLnJvb3QpKTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVBcnJvdyhwcmV2Mikge1xuICAgIGNvbnN0IGFycm93ID0gYDxidXR0b24gY2xhc3M9XCIke2NsYXNzZXMuYXJyb3d9ICR7cHJldjIgPyBjbGFzc2VzLnByZXYgOiBjbGFzc2VzLm5leHR9XCIgdHlwZT1cImJ1dHRvblwiPjxzdmcgeG1sbnM9XCIke1hNTF9OQU1FX1NQQUNFfVwiIHZpZXdCb3g9XCIwIDAgJHtTSVpFfSAke1NJWkV9XCIgd2lkdGg9XCIke1NJWkV9XCIgaGVpZ2h0PVwiJHtTSVpFfVwiPjxwYXRoIGQ9XCIke29wdGlvbnMuYXJyb3dQYXRoIHx8IFBBVEh9XCIgLz5gO1xuICAgIHJldHVybiBwYXJzZUh0bWwoYXJyb3cpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBpbmRleCA9IFNwbGlkZTIuaW5kZXg7XG4gICAgY29uc3QgcHJldkluZGV4ID0gQ29udHJvbGxlci5nZXRQcmV2KCk7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gQ29udHJvbGxlci5nZXROZXh0KCk7XG4gICAgY29uc3QgcHJldkxhYmVsID0gcHJldkluZGV4ID4gLTEgJiYgaW5kZXggPCBwcmV2SW5kZXggPyBpMThuLmxhc3QgOiBpMThuLnByZXY7XG4gICAgY29uc3QgbmV4dExhYmVsID0gbmV4dEluZGV4ID4gLTEgJiYgaW5kZXggPiBuZXh0SW5kZXggPyBpMThuLmZpcnN0IDogaTE4bi5uZXh0O1xuICAgIHByZXYuZGlzYWJsZWQgPSBwcmV2SW5kZXggPCAwO1xuICAgIG5leHQuZGlzYWJsZWQgPSBuZXh0SW5kZXggPCAwO1xuICAgIHNldEF0dHJpYnV0ZShwcmV2LCBBUklBX0xBQkVMLCBwcmV2TGFiZWwpO1xuICAgIHNldEF0dHJpYnV0ZShuZXh0LCBBUklBX0xBQkVMLCBuZXh0TGFiZWwpO1xuICAgIGVtaXQoRVZFTlRfQVJST1dTX1VQREFURUQsIHByZXYsIG5leHQsIHByZXZJbmRleCwgbmV4dEluZGV4KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFycm93cyxcbiAgICBtb3VudCxcbiAgICBkZXN0cm95XG4gIH07XG59XG5cbmNvbnN0IElOVEVSVkFMX0RBVEFfQVRUUklCVVRFID0gYCR7REFUQV9BVFRSSUJVVEV9LWludGVydmFsYDtcblxuZnVuY3Rpb24gQXV0b3BsYXkoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBvbiwgYmluZCwgZW1pdCB9ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIGNvbnN0IGludGVydmFsID0gUmVxdWVzdEludGVydmFsKG9wdGlvbnMuaW50ZXJ2YWwsIFNwbGlkZTIuZ28uYmluZChTcGxpZGUyLCBcIj5cIiksIHVwZGF0ZSk7XG4gIGNvbnN0IHsgaXNQYXVzZWQgfSA9IGludGVydmFsO1xuICBjb25zdCB7IEVsZW1lbnRzIH0gPSBDb21wb25lbnRzMjtcbiAgbGV0IGhvdmVyZWQ7XG4gIGxldCBmb2N1c2VkO1xuICBsZXQgcGF1c2VkO1xuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBjb25zdCB7IGF1dG9wbGF5IH0gPSBvcHRpb25zO1xuICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgaW5pdEJ1dHRvbih0cnVlKTtcbiAgICAgIGluaXRCdXR0b24oZmFsc2UpO1xuICAgICAgbGlzdGVuKCk7XG4gICAgICBpZiAoYXV0b3BsYXkgIT09IFwicGF1c2VcIikge1xuICAgICAgICBwbGF5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGluaXRCdXR0b24oZm9yUGF1c2UpIHtcbiAgICBjb25zdCBwcm9wID0gZm9yUGF1c2UgPyBcInBhdXNlXCIgOiBcInBsYXlcIjtcbiAgICBjb25zdCBidXR0b24gPSBFbGVtZW50c1twcm9wXTtcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0NPTlRST0xTLCBFbGVtZW50cy50cmFjay5pZCk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0xBQkVMLCBvcHRpb25zLmkxOG5bcHJvcF0pO1xuICAgICAgYmluZChidXR0b24sIFwiY2xpY2tcIiwgZm9yUGF1c2UgPyBwYXVzZSA6IHBsYXkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgY29uc3QgeyByb290IH0gPSBFbGVtZW50cztcbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIGJpbmQocm9vdCwgXCJtb3VzZWVudGVyIG1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICAgICAgaG92ZXJlZCA9IGUudHlwZSA9PT0gXCJtb3VzZWVudGVyXCI7XG4gICAgICAgIGF1dG9Ub2dnbGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uRm9jdXMpIHtcbiAgICAgIGJpbmQocm9vdCwgXCJmb2N1c2luIGZvY3Vzb3V0XCIsIChlKSA9PiB7XG4gICAgICAgIGZvY3VzZWQgPSBlLnR5cGUgPT09IFwiZm9jdXNpblwiO1xuICAgICAgICBhdXRvVG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgb24oW0VWRU5UX01PVkUsIEVWRU5UX1NDUk9MTCwgRVZFTlRfUkVGUkVTSF0sIGludGVydmFsLnJld2luZCk7XG4gICAgb24oRVZFTlRfTU9WRSwgdXBkYXRlSW50ZXJ2YWwpO1xuICB9XG4gIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgaWYgKGlzUGF1c2VkKCkgJiYgQ29tcG9uZW50czIuU2xpZGVzLmlzRW5vdWdoKCkpIHtcbiAgICAgIGludGVydmFsLnN0YXJ0KCFvcHRpb25zLnJlc2V0UHJvZ3Jlc3MpO1xuICAgICAgZm9jdXNlZCA9IGhvdmVyZWQgPSBwYXVzZWQgPSBmYWxzZTtcbiAgICAgIGVtaXQoRVZFTlRfQVVUT1BMQVlfUExBWSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHBhdXNlKG1hbnVhbCA9IHRydWUpIHtcbiAgICBpZiAoIWlzUGF1c2VkKCkpIHtcbiAgICAgIGludGVydmFsLnBhdXNlKCk7XG4gICAgICBlbWl0KEVWRU5UX0FVVE9QTEFZX1BBVVNFKTtcbiAgICB9XG4gICAgcGF1c2VkID0gbWFudWFsO1xuICB9XG4gIGZ1bmN0aW9uIGF1dG9Ub2dnbGUoKSB7XG4gICAgaWYgKCFwYXVzZWQpIHtcbiAgICAgIGlmICghaG92ZXJlZCAmJiAhZm9jdXNlZCkge1xuICAgICAgICBwbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXVzZShmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZShyYXRlKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IEVsZW1lbnRzO1xuICAgIGJhciAmJiBzdHlsZShiYXIsIFwid2lkdGhcIiwgYCR7cmF0ZSAqIDEwMH0lYCk7XG4gICAgZW1pdChFVkVOVF9BVVRPUExBWV9QTEFZSU5HLCByYXRlKTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBTbGlkZSA9IENvbXBvbmVudHMyLlNsaWRlcy5nZXRBdChTcGxpZGUyLmluZGV4KTtcbiAgICBpbnRlcnZhbC5zZXQoU2xpZGUgJiYgK2dldEF0dHJpYnV0ZShTbGlkZS5zbGlkZSwgSU5URVJWQUxfREFUQV9BVFRSSUJVVEUpIHx8IG9wdGlvbnMuaW50ZXJ2YWwpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbW91bnQsXG4gICAgZGVzdHJveTogaW50ZXJ2YWwuY2FuY2VsLFxuICAgIHBsYXksXG4gICAgcGF1c2UsXG4gICAgaXNQYXVzZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gQ292ZXIoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBvbiB9ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChvcHRpb25zLmNvdmVyKSB7XG4gICAgICBvbihFVkVOVF9MQVpZTE9BRF9MT0FERUQsIChpbWcsIFNsaWRlKSA9PiB7XG4gICAgICAgIHRvZ2dsZSh0cnVlLCBpbWcsIFNsaWRlKTtcbiAgICAgIH0pO1xuICAgICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBhcHBseS5iaW5kKG51bGwsIHRydWUpKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBhcHBseShmYWxzZSk7XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHkoY292ZXIpIHtcbiAgICBDb21wb25lbnRzMi5TbGlkZXMuZm9yRWFjaCgoU2xpZGUpID0+IHtcbiAgICAgIGNvbnN0IGltZyA9IGNoaWxkKFNsaWRlLmNvbnRhaW5lciB8fCBTbGlkZS5zbGlkZSwgXCJpbWdcIik7XG4gICAgICBpZiAoaW1nICYmIGltZy5zcmMpIHtcbiAgICAgICAgdG9nZ2xlKGNvdmVyLCBpbWcsIFNsaWRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB0b2dnbGUoY292ZXIsIGltZywgU2xpZGUpIHtcbiAgICBTbGlkZS5zdHlsZShcImJhY2tncm91bmRcIiwgY292ZXIgPyBgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCB1cmwoXCIke2ltZy5zcmN9XCIpYCA6IFwiXCIsIHRydWUpO1xuICAgIGRpc3BsYXkoaW1nLCBjb3ZlciA/IFwibm9uZVwiIDogXCJcIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb3VudCxcbiAgICBkZXN0cm95XG4gIH07XG59XG5cbmNvbnN0IEJPVU5DRV9ESUZGX1RIUkVTSE9MRCA9IDEwO1xuY29uc3QgQk9VTkNFX0RVUkFUSU9OID0gNjAwO1xuY29uc3QgRlJJQ1RJT05fRkFDVE9SID0gMC42O1xuY29uc3QgQkFTRV9WRUxPQ0lUWSA9IDEuNTtcbmNvbnN0IE1JTl9EVVJBVElPTiA9IDgwMDtcblxuZnVuY3Rpb24gU2Nyb2xsKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgb24sIGVtaXQgfSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICBjb25zdCB7IE1vdmUgfSA9IENvbXBvbmVudHMyO1xuICBjb25zdCB7IGdldFBvc2l0aW9uLCBnZXRMaW1pdCwgZXhjZWVkZWRMaW1pdCB9ID0gTW92ZTtcbiAgbGV0IGludGVydmFsO1xuICBsZXQgc2Nyb2xsQ2FsbGJhY2s7XG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKEVWRU5UX01PVkUsIGNsZWFyKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGNhbmNlbCk7XG4gIH1cbiAgZnVuY3Rpb24gc2Nyb2xsKGRlc3RpbmF0aW9uLCBkdXJhdGlvbiwgY2FsbGJhY2ssIHN1cHByZXNzQ29uc3RyYWludCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gZ2V0UG9zaXRpb24oKTtcbiAgICBsZXQgZnJpY3Rpb24gPSAxO1xuICAgIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgY29tcHV0ZUR1cmF0aW9uKGFicyhkZXN0aW5hdGlvbiAtIHN0YXJ0KSk7XG4gICAgc2Nyb2xsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICBjbGVhcigpO1xuICAgIGludGVydmFsID0gUmVxdWVzdEludGVydmFsKGR1cmF0aW9uLCBvblNjcm9sbGVkLCAocmF0ZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuICAgICAgY29uc3QgdGFyZ2V0ID0gc3RhcnQgKyAoZGVzdGluYXRpb24gLSBzdGFydCkgKiBlYXNpbmcocmF0ZSk7XG4gICAgICBjb25zdCBkaWZmID0gKHRhcmdldCAtIGdldFBvc2l0aW9uKCkpICogZnJpY3Rpb247XG4gICAgICBNb3ZlLnRyYW5zbGF0ZShwb3NpdGlvbiArIGRpZmYpO1xuICAgICAgaWYgKFNwbGlkZTIuaXMoU0xJREUpICYmICFzdXBwcmVzc0NvbnN0cmFpbnQgJiYgZXhjZWVkZWRMaW1pdCgpKSB7XG4gICAgICAgIGZyaWN0aW9uICo9IEZSSUNUSU9OX0ZBQ1RPUjtcbiAgICAgICAgaWYgKGFicyhkaWZmKSA8IEJPVU5DRV9ESUZGX1RIUkVTSE9MRCkge1xuICAgICAgICAgIGJvdW5jZShleGNlZWRlZExpbWl0KGZhbHNlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxKTtcbiAgICBlbWl0KEVWRU5UX1NDUk9MTCk7XG4gICAgaW50ZXJ2YWwuc3RhcnQoKTtcbiAgfVxuICBmdW5jdGlvbiBib3VuY2UoYmFja3dhcmRzKSB7XG4gICAgc2Nyb2xsKGdldExpbWl0KCFiYWNrd2FyZHMpLCBCT1VOQ0VfRFVSQVRJT04sIG51bGwsIHRydWUpO1xuICB9XG4gIGZ1bmN0aW9uIG9uU2Nyb2xsZWQoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuICAgIGNvbnN0IGluZGV4ID0gTW92ZS50b0luZGV4KHBvc2l0aW9uKTtcbiAgICBpZiAoIWJldHdlZW4oaW5kZXgsIDAsIFNwbGlkZTIubGVuZ3RoIC0gMSkpIHtcbiAgICAgIE1vdmUudHJhbnNsYXRlKE1vdmUuc2hpZnQocG9zaXRpb24sIGluZGV4ID4gMCksIHRydWUpO1xuICAgIH1cbiAgICBzY3JvbGxDYWxsYmFjayAmJiBzY3JvbGxDYWxsYmFjaygpO1xuICAgIGVtaXQoRVZFTlRfU0NST0xMRUQpO1xuICB9XG4gIGZ1bmN0aW9uIGNvbXB1dGVEdXJhdGlvbihkaXN0YW5jZSkge1xuICAgIHJldHVybiBtYXgoZGlzdGFuY2UgLyBCQVNFX1ZFTE9DSVRZLCBNSU5fRFVSQVRJT04pO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgaW50ZXJ2YWwuY2FuY2VsKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAoaW50ZXJ2YWwgJiYgIWludGVydmFsLmlzUGF1c2VkKCkpIHtcbiAgICAgIGNsZWFyKCk7XG4gICAgICBvblNjcm9sbGVkKCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGVhc2luZyh0KSB7XG4gICAgY29uc3QgeyBlYXNpbmdGdW5jIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiBlYXNpbmdGdW5jID8gZWFzaW5nRnVuYyh0KSA6IDEgLSBNYXRoLnBvdygxIC0gdCwgNCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb3VudCxcbiAgICBkZXN0cm95OiBjbGVhcixcbiAgICBzY3JvbGwsXG4gICAgY2FuY2VsXG4gIH07XG59XG5cbmNvbnN0IFNDUk9MTF9MSVNURU5FUl9PUFRJT05TID0geyBwYXNzaXZlOiBmYWxzZSwgY2FwdHVyZTogdHJ1ZSB9O1xuXG5jb25zdCBGUklDVElPTiA9IDU7XG5jb25zdCBMT0dfSU5URVJWQUwgPSAyMDA7XG5jb25zdCBQT0lOVEVSX0RPV05fRVZFTlRTID0gXCJ0b3VjaHN0YXJ0IG1vdXNlZG93blwiO1xuY29uc3QgUE9JTlRFUl9NT1ZFX0VWRU5UUyA9IFwidG91Y2htb3ZlIG1vdXNlbW92ZVwiO1xuY29uc3QgUE9JTlRFUl9VUF9FVkVOVFMgPSBcInRvdWNoZW5kIHRvdWNoY2FuY2VsIG1vdXNldXBcIjtcblxuZnVuY3Rpb24gRHJhZyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBjb25zdCB7IG9uLCBlbWl0LCBiaW5kLCB1bmJpbmQgfSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICBjb25zdCB7IE1vdmUsIFNjcm9sbCwgQ29udHJvbGxlciB9ID0gQ29tcG9uZW50czI7XG4gIGNvbnN0IHsgdHJhY2sgfSA9IENvbXBvbmVudHMyLkVsZW1lbnRzO1xuICBjb25zdCB7IHJlc29sdmUsIG9yaWVudCB9ID0gQ29tcG9uZW50czIuRGlyZWN0aW9uO1xuICBjb25zdCB7IGdldFBvc2l0aW9uLCBleGNlZWRlZExpbWl0IH0gPSBNb3ZlO1xuICBsZXQgYmFzZVBvc2l0aW9uO1xuICBsZXQgYmFzZUV2ZW50O1xuICBsZXQgcHJldkJhc2VFdmVudDtcbiAgbGV0IGxhc3RFdmVudDtcbiAgbGV0IGlzRnJlZTtcbiAgbGV0IGRyYWdnaW5nO1xuICBsZXQgaGFzRXhjZWVkZWQgPSBmYWxzZTtcbiAgbGV0IGNsaWNrUHJldmVudGVkO1xuICBsZXQgZGlzYWJsZWQ7XG4gIGxldCB0YXJnZXQ7XG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGJpbmQodHJhY2ssIFBPSU5URVJfTU9WRV9FVkVOVFMsIG5vb3AsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICBiaW5kKHRyYWNrLCBQT0lOVEVSX1VQX0VWRU5UUywgbm9vcCwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIGJpbmQodHJhY2ssIFBPSU5URVJfRE9XTl9FVkVOVFMsIG9uUG9pbnRlckRvd24sIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICBiaW5kKHRyYWNrLCBcImNsaWNrXCIsIG9uQ2xpY2ssIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBiaW5kKHRyYWNrLCBcImRyYWdzdGFydFwiLCBwcmV2ZW50KTtcbiAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfVVBEQVRFRF0sIGluaXQpO1xuICB9XG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgeyBkcmFnIH0gPSBvcHRpb25zO1xuICAgIGRpc2FibGUoIWRyYWcpO1xuICAgIGlzRnJlZSA9IGRyYWcgPT09IFwiZnJlZVwiO1xuICB9XG4gIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZSkge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHsgbm9EcmFnIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgaXNUb3VjaCA9IGlzVG91Y2hFdmVudChlKTtcbiAgICAgIGNvbnN0IGlzRHJhZ2dhYmxlID0gIW5vRHJhZyB8fCAhbWF0Y2hlcyhlLnRhcmdldCwgbm9EcmFnKTtcbiAgICAgIGNsaWNrUHJldmVudGVkID0gZmFsc2U7XG4gICAgICBpZiAoaXNEcmFnZ2FibGUgJiYgKGlzVG91Y2ggfHwgIWUuYnV0dG9uKSkge1xuICAgICAgICBpZiAoIU1vdmUuaXNCdXN5KCkpIHtcbiAgICAgICAgICB0YXJnZXQgPSBpc1RvdWNoID8gdHJhY2sgOiB3aW5kb3c7XG4gICAgICAgICAgcHJldkJhc2VFdmVudCA9IG51bGw7XG4gICAgICAgICAgbGFzdEV2ZW50ID0gbnVsbDtcbiAgICAgICAgICBiaW5kKHRhcmdldCwgUE9JTlRFUl9NT1ZFX0VWRU5UUywgb25Qb2ludGVyTW92ZSwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgICAgICAgIGJpbmQodGFyZ2V0LCBQT0lOVEVSX1VQX0VWRU5UUywgb25Qb2ludGVyVXAsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICAgICAgICBNb3ZlLmNhbmNlbCgpO1xuICAgICAgICAgIFNjcm9sbC5jYW5jZWwoKTtcbiAgICAgICAgICBzYXZlKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZlbnQoZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gb25Qb2ludGVyTW92ZShlKSB7XG4gICAgaWYgKCFsYXN0RXZlbnQpIHtcbiAgICAgIGVtaXQoRVZFTlRfRFJBRyk7XG4gICAgfVxuICAgIGxhc3RFdmVudCA9IGU7XG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgY29uc3QgZGlmZiA9IGNvb3JkT2YoZSkgLSBjb29yZE9mKGJhc2VFdmVudCk7XG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgTW92ZS50cmFuc2xhdGUoYmFzZVBvc2l0aW9uICsgY29uc3RyYWluKGRpZmYpKTtcbiAgICAgICAgY29uc3QgZXhwaXJlZCA9IHRpbWVPZihlKSAtIHRpbWVPZihiYXNlRXZlbnQpID4gTE9HX0lOVEVSVkFMO1xuICAgICAgICBjb25zdCBleGNlZWRlZCA9IGhhc0V4Y2VlZGVkICE9PSAoaGFzRXhjZWVkZWQgPSBleGNlZWRlZExpbWl0KCkpO1xuICAgICAgICBpZiAoZXhwaXJlZCB8fCBleGNlZWRlZCkge1xuICAgICAgICAgIHNhdmUoZSk7XG4gICAgICAgIH1cbiAgICAgICAgZW1pdChFVkVOVF9EUkFHR0lORyk7XG4gICAgICAgIGNsaWNrUHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgcHJldmVudChlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB7IGRyYWdNaW5UaHJlc2hvbGQ6IHRocmVzaG9sZHMgfSA9IG9wdGlvbnM7XG4gICAgICAgIHRocmVzaG9sZHMgPSBpc09iamVjdCh0aHJlc2hvbGRzKSA/IHRocmVzaG9sZHMgOiB7IG1vdXNlOiAwLCB0b3VjaDogK3RocmVzaG9sZHMgfHwgMTAgfTtcbiAgICAgICAgZHJhZ2dpbmcgPSBhYnMoZGlmZikgPiAoaXNUb3VjaEV2ZW50KGUpID8gdGhyZXNob2xkcy50b3VjaCA6IHRocmVzaG9sZHMubW91c2UpO1xuICAgICAgICBpZiAoaXNTbGlkZXJEaXJlY3Rpb24oKSkge1xuICAgICAgICAgIHByZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gb25Qb2ludGVyVXAoZSkge1xuICAgIHVuYmluZCh0YXJnZXQsIFBPSU5URVJfTU9WRV9FVkVOVFMsIG9uUG9pbnRlck1vdmUpO1xuICAgIHVuYmluZCh0YXJnZXQsIFBPSU5URVJfVVBfRVZFTlRTLCBvblBvaW50ZXJVcCk7XG4gICAgY29uc3QgeyBpbmRleCB9ID0gU3BsaWRlMjtcbiAgICBpZiAobGFzdEV2ZW50KSB7XG4gICAgICBpZiAoZHJhZ2dpbmcgfHwgZS5jYW5jZWxhYmxlICYmIGlzU2xpZGVyRGlyZWN0aW9uKCkpIHtcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBjb21wdXRlVmVsb2NpdHkoZSk7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gY29tcHV0ZURlc3RpbmF0aW9uKHZlbG9jaXR5KTtcbiAgICAgICAgaWYgKGlzRnJlZSkge1xuICAgICAgICAgIENvbnRyb2xsZXIuc2Nyb2xsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChTcGxpZGUyLmlzKEZBREUpKSB7XG4gICAgICAgICAgQ29udHJvbGxlci5nbyhpbmRleCArIG9yaWVudChzaWduKHZlbG9jaXR5KSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIENvbnRyb2xsZXIuZ28oQ29udHJvbGxlci50b0Rlc3QoZGVzdGluYXRpb24pLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmV2ZW50KGUpO1xuICAgICAgfVxuICAgICAgZW1pdChFVkVOVF9EUkFHR0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFpc0ZyZWUgJiYgZ2V0UG9zaXRpb24oKSAhPT0gTW92ZS50b1Bvc2l0aW9uKGluZGV4KSkge1xuICAgICAgICBDb250cm9sbGVyLmdvKGluZGV4LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBzYXZlKGUpIHtcbiAgICBwcmV2QmFzZUV2ZW50ID0gYmFzZUV2ZW50O1xuICAgIGJhc2VFdmVudCA9IGU7XG4gICAgYmFzZVBvc2l0aW9uID0gZ2V0UG9zaXRpb24oKTtcbiAgfVxuICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAoIWRpc2FibGVkICYmIGNsaWNrUHJldmVudGVkKSB7XG4gICAgICBwcmV2ZW50KGUsIHRydWUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc1NsaWRlckRpcmVjdGlvbigpIHtcbiAgICBjb25zdCBkaWZmWCA9IGFicyhjb29yZE9mKGxhc3RFdmVudCkgLSBjb29yZE9mKGJhc2VFdmVudCkpO1xuICAgIGNvbnN0IGRpZmZZID0gYWJzKGNvb3JkT2YobGFzdEV2ZW50LCB0cnVlKSAtIGNvb3JkT2YoYmFzZUV2ZW50LCB0cnVlKSk7XG4gICAgcmV0dXJuIGRpZmZYID4gZGlmZlk7XG4gIH1cbiAgZnVuY3Rpb24gY29tcHV0ZVZlbG9jaXR5KGUpIHtcbiAgICBpZiAoU3BsaWRlMi5pcyhMT09QKSB8fCAhaGFzRXhjZWVkZWQpIHtcbiAgICAgIGNvbnN0IGJhc2UgPSBiYXNlRXZlbnQgPT09IGxhc3RFdmVudCAmJiBwcmV2QmFzZUV2ZW50IHx8IGJhc2VFdmVudDtcbiAgICAgIGNvbnN0IGRpZmZDb29yZCA9IGNvb3JkT2YobGFzdEV2ZW50KSAtIGNvb3JkT2YoYmFzZSk7XG4gICAgICBjb25zdCBkaWZmVGltZSA9IHRpbWVPZihlKSAtIHRpbWVPZihiYXNlKTtcbiAgICAgIGNvbnN0IGlzRmxpY2sgPSB0aW1lT2YoZSkgLSB0aW1lT2YobGFzdEV2ZW50KSA8IExPR19JTlRFUlZBTDtcbiAgICAgIGlmIChkaWZmVGltZSAmJiBpc0ZsaWNrKSB7XG4gICAgICAgIHJldHVybiBkaWZmQ29vcmQgLyBkaWZmVGltZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgZnVuY3Rpb24gY29tcHV0ZURlc3RpbmF0aW9uKHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIGdldFBvc2l0aW9uKCkgKyBzaWduKHZlbG9jaXR5KSAqIG1pbihhYnModmVsb2NpdHkpICogKG9wdGlvbnMuZmxpY2tQb3dlciB8fCA2MDApLCBpc0ZyZWUgPyBJbmZpbml0eSA6IENvbXBvbmVudHMyLkxheW91dC5saXN0U2l6ZSgpICogKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSk7XG4gIH1cbiAgZnVuY3Rpb24gY29vcmRPZihlLCBvcnRob2dvbmFsKSB7XG4gICAgcmV0dXJuIChpc1RvdWNoRXZlbnQoZSkgPyBlLnRvdWNoZXNbMF0gOiBlKVtgcGFnZSR7cmVzb2x2ZShvcnRob2dvbmFsID8gXCJZXCIgOiBcIlhcIil9YF07XG4gIH1cbiAgZnVuY3Rpb24gdGltZU9mKGUpIHtcbiAgICByZXR1cm4gZS50aW1lU3RhbXA7XG4gIH1cbiAgZnVuY3Rpb24gY29uc3RyYWluKGRpZmYpIHtcbiAgICByZXR1cm4gZGlmZiAvIChoYXNFeGNlZWRlZCAmJiBTcGxpZGUyLmlzKFNMSURFKSA/IEZSSUNUSU9OIDogMSk7XG4gIH1cbiAgZnVuY3Rpb24gaXNUb3VjaEV2ZW50KGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIFRvdWNoRXZlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQ7XG4gIH1cbiAgZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cbiAgZnVuY3Rpb24gZGlzYWJsZSh2YWx1ZSkge1xuICAgIGRpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBtb3VudCxcbiAgICBkaXNhYmxlLFxuICAgIGlzRHJhZ2dpbmdcbiAgfTtcbn1cblxuY29uc3QgSUVfQVJST1dfS0VZUyA9IFtcIkxlZnRcIiwgXCJSaWdodFwiLCBcIlVwXCIsIFwiRG93blwiXTtcbmNvbnN0IEtFWUJPQVJEX0VWRU5UID0gXCJrZXlkb3duXCI7XG5mdW5jdGlvbiBLZXlib2FyZChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBjb25zdCB7IG9uLCBiaW5kLCB1bmJpbmQgfSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICBjb25zdCB7IHJvb3QgfSA9IFNwbGlkZTI7XG4gIGNvbnN0IHsgcmVzb2x2ZSB9ID0gQ29tcG9uZW50czIuRGlyZWN0aW9uO1xuICBsZXQgdGFyZ2V0O1xuICBsZXQgZGlzYWJsZWQ7XG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9VUERBVEVELCBvblVwZGF0ZWQpO1xuICAgIG9uKEVWRU5UX01PVkUsIG9uTW92ZSk7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCB7IGtleWJvYXJkIH0gPSBvcHRpb25zO1xuICAgIGlmIChrZXlib2FyZCkge1xuICAgICAgaWYgKGtleWJvYXJkID09PSBcImZvY3VzZWRcIikge1xuICAgICAgICB0YXJnZXQgPSByb290O1xuICAgICAgICBzZXRBdHRyaWJ1dGUocm9vdCwgVEFCX0lOREVYLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldCA9IHdpbmRvdztcbiAgICAgIH1cbiAgICAgIGJpbmQodGFyZ2V0LCBLRVlCT0FSRF9FVkVOVCwgb25LZXlkb3duKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB1bmJpbmQodGFyZ2V0LCBLRVlCT0FSRF9FVkVOVCk7XG4gICAgaWYgKGlzSFRNTEVsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKHRhcmdldCwgVEFCX0lOREVYKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGlzYWJsZSh2YWx1ZSkge1xuICAgIGRpc2FibGVkID0gdmFsdWU7XG4gIH1cbiAgZnVuY3Rpb24gb25Nb3ZlKCkge1xuICAgIGNvbnN0IF9kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICBkaXNhYmxlZCA9IF9kaXNhYmxlZDtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBvblVwZGF0ZWQoKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIGluaXQoKTtcbiAgfVxuICBmdW5jdGlvbiBvbktleWRvd24oZSkge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBlO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEtleSA9IGluY2x1ZGVzKElFX0FSUk9XX0tFWVMsIGtleSkgPyBgQXJyb3cke2tleX1gIDoga2V5O1xuICAgICAgaWYgKG5vcm1hbGl6ZWRLZXkgPT09IHJlc29sdmUoXCJBcnJvd0xlZnRcIikpIHtcbiAgICAgICAgU3BsaWRlMi5nbyhcIjxcIik7XG4gICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRLZXkgPT09IHJlc29sdmUoXCJBcnJvd1JpZ2h0XCIpKSB7XG4gICAgICAgIFNwbGlkZTIuZ28oXCI+XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIG1vdW50LFxuICAgIGRlc3Ryb3ksXG4gICAgZGlzYWJsZVxuICB9O1xufVxuXG5jb25zdCBTUkNfREFUQV9BVFRSSUJVVEUgPSBgJHtEQVRBX0FUVFJJQlVURX0tbGF6eWA7XG5jb25zdCBTUkNTRVRfREFUQV9BVFRSSUJVVEUgPSBgJHtTUkNfREFUQV9BVFRSSUJVVEV9LXNyY3NldGA7XG5jb25zdCBJTUFHRV9TRUxFQ1RPUiA9IGBbJHtTUkNfREFUQV9BVFRSSUJVVEV9XSwgWyR7U1JDU0VUX0RBVEFfQVRUUklCVVRFfV1gO1xuXG5mdW5jdGlvbiBMYXp5TG9hZChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBjb25zdCB7IG9uLCBvZmYsIGJpbmQsIGVtaXQgfSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICBjb25zdCBpc1NlcXVlbnRpYWwgPSBvcHRpb25zLmxhenlMb2FkID09PSBcInNlcXVlbnRpYWxcIjtcbiAgbGV0IGltYWdlcyA9IFtdO1xuICBsZXQgaW5kZXggPSAwO1xuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAob3B0aW9ucy5sYXp5TG9hZCkge1xuICAgICAgaW5pdCgpO1xuICAgICAgb24oRVZFTlRfUkVGUkVTSCwgcmVmcmVzaCk7XG4gICAgICBpZiAoIWlzU2VxdWVudGlhbCkge1xuICAgICAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfTU9WRUQsIEVWRU5UX1NDUk9MTEVEXSwgb2JzZXJ2ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIGluaXQoKTtcbiAgfVxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIENvbXBvbmVudHMyLlNsaWRlcy5mb3JFYWNoKChfU2xpZGUpID0+IHtcbiAgICAgIHF1ZXJ5QWxsKF9TbGlkZS5zbGlkZSwgSU1BR0VfU0VMRUNUT1IpLmZvckVhY2goKF9pbWcpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gZ2V0QXR0cmlidXRlKF9pbWcsIFNSQ19EQVRBX0FUVFJJQlVURSk7XG4gICAgICAgIGNvbnN0IHNyY3NldCA9IGdldEF0dHJpYnV0ZShfaW1nLCBTUkNTRVRfREFUQV9BVFRSSUJVVEUpO1xuICAgICAgICBpZiAoc3JjICE9PSBfaW1nLnNyYyB8fCBzcmNzZXQgIT09IF9pbWcuc3Jjc2V0KSB7XG4gICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc2VzLnNwaW5uZXI7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gX2ltZy5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIGNvbnN0IF9zcGlubmVyID0gY2hpbGQocGFyZW50LCBgLiR7Y2xhc3NOYW1lfWApIHx8IGNyZWF0ZShcInNwYW5cIiwgY2xhc3NOYW1lLCBwYXJlbnQpO1xuICAgICAgICAgIHNldEF0dHJpYnV0ZShfc3Bpbm5lciwgUk9MRSwgXCJwcmVzZW50YXRpb25cIik7XG4gICAgICAgICAgaW1hZ2VzLnB1c2goeyBfaW1nLCBfU2xpZGUsIHNyYywgc3Jjc2V0LCBfc3Bpbm5lciB9KTtcbiAgICAgICAgICAhX2ltZy5zcmMgJiYgZGlzcGxheShfaW1nLCBcIm5vbmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChpc1NlcXVlbnRpYWwpIHtcbiAgICAgIGxvYWROZXh0KCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaW5kZXggPSAwO1xuICAgIGltYWdlcyA9IFtdO1xuICB9XG4gIGZ1bmN0aW9uIG9ic2VydmUoKSB7XG4gICAgaW1hZ2VzID0gaW1hZ2VzLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSBvcHRpb25zLnBlclBhZ2UgKiAoKG9wdGlvbnMucHJlbG9hZFBhZ2VzIHx8IDEpICsgMSkgLSAxO1xuICAgICAgaWYgKGRhdGEuX1NsaWRlLmlzV2l0aGluKFNwbGlkZTIuaW5kZXgsIGRpc3RhbmNlKSkge1xuICAgICAgICByZXR1cm4gbG9hZChkYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGlmICghaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgb2ZmKEVWRU5UX01PVkVEKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbG9hZChkYXRhKSB7XG4gICAgY29uc3QgeyBfaW1nIH0gPSBkYXRhO1xuICAgIGFkZENsYXNzKGRhdGEuX1NsaWRlLnNsaWRlLCBDTEFTU19MT0FESU5HKTtcbiAgICBiaW5kKF9pbWcsIFwibG9hZCBlcnJvclwiLCAoZSkgPT4ge1xuICAgICAgb25Mb2FkKGRhdGEsIGUudHlwZSA9PT0gXCJlcnJvclwiKTtcbiAgICB9KTtcbiAgICBbXCJzcmNzZXRcIiwgXCJzcmNcIl0uZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgaWYgKGRhdGFbbmFtZV0pIHtcbiAgICAgICAgc2V0QXR0cmlidXRlKF9pbWcsIG5hbWUsIGRhdGFbbmFtZV0pO1xuICAgICAgICByZW1vdmVBdHRyaWJ1dGUoX2ltZywgbmFtZSA9PT0gXCJzcmNcIiA/IFNSQ19EQVRBX0FUVFJJQlVURSA6IFNSQ1NFVF9EQVRBX0FUVFJJQlVURSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gb25Mb2FkKGRhdGEsIGVycm9yKSB7XG4gICAgY29uc3QgeyBfU2xpZGUgfSA9IGRhdGE7XG4gICAgcmVtb3ZlQ2xhc3MoX1NsaWRlLnNsaWRlLCBDTEFTU19MT0FESU5HKTtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICByZW1vdmUoZGF0YS5fc3Bpbm5lcik7XG4gICAgICBkaXNwbGF5KGRhdGEuX2ltZywgXCJcIik7XG4gICAgICBlbWl0KEVWRU5UX0xBWllMT0FEX0xPQURFRCwgZGF0YS5faW1nLCBfU2xpZGUpO1xuICAgICAgZW1pdChFVkVOVF9SRVNJWkUpO1xuICAgIH1cbiAgICBpZiAoaXNTZXF1ZW50aWFsKSB7XG4gICAgICBsb2FkTmV4dCgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBsb2FkTmV4dCgpIHtcbiAgICBpZiAoaW5kZXggPCBpbWFnZXMubGVuZ3RoKSB7XG4gICAgICBsb2FkKGltYWdlc1tpbmRleCsrXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgbW91bnQsXG4gICAgZGVzdHJveVxuICB9O1xufVxuXG5mdW5jdGlvbiBQYWdpbmF0aW9uKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgb24sIGVtaXQsIGJpbmQsIHVuYmluZCB9ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIGNvbnN0IHsgU2xpZGVzLCBFbGVtZW50cywgQ29udHJvbGxlciB9ID0gQ29tcG9uZW50czI7XG4gIGNvbnN0IHsgaGFzRm9jdXMsIGdldEluZGV4IH0gPSBDb250cm9sbGVyO1xuICBjb25zdCBpdGVtcyA9IFtdO1xuICBsZXQgbGlzdDtcbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNIXSwgaW5pdCk7XG4gICAgb24oW0VWRU5UX01PVkUsIEVWRU5UX1NDUk9MTEVEXSwgdXBkYXRlKTtcbiAgfVxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBpZiAob3B0aW9ucy5wYWdpbmF0aW9uICYmIFNsaWRlcy5pc0Vub3VnaCgpKSB7XG4gICAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XG4gICAgICBlbWl0KEVWRU5UX1BBR0lOQVRJT05fTU9VTlRFRCwgeyBsaXN0LCBpdGVtcyB9LCBnZXRBdChTcGxpZGUyLmluZGV4KSk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAobGlzdCkge1xuICAgICAgcmVtb3ZlKGxpc3QpO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB1bmJpbmQoaXRlbS5idXR0b24sIFwiY2xpY2tcIik7XG4gICAgICB9KTtcbiAgICAgIGVtcHR5KGl0ZW1zKTtcbiAgICAgIGxpc3QgPSBudWxsO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCkge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBTcGxpZGUyO1xuICAgIGNvbnN0IHsgY2xhc3NlcywgaTE4biwgcGVyUGFnZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhZ2luYXRpb24gPT09IFwic2xpZGVyXCIgJiYgRWxlbWVudHMuc2xpZGVyIHx8IEVsZW1lbnRzLnJvb3Q7XG4gICAgY29uc3QgbWF4ID0gaGFzRm9jdXMoKSA/IGxlbmd0aCA6IGNlaWwobGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgbGlzdCA9IGNyZWF0ZShcInVsXCIsIGNsYXNzZXMucGFnaW5hdGlvbiwgcGFyZW50KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICBjb25zdCBsaSA9IGNyZWF0ZShcImxpXCIsIG51bGwsIGxpc3QpO1xuICAgICAgY29uc3QgYnV0dG9uID0gY3JlYXRlKFwiYnV0dG9uXCIsIHsgY2xhc3M6IGNsYXNzZXMucGFnZSwgdHlwZTogXCJidXR0b25cIiB9LCBsaSk7XG4gICAgICBjb25zdCBjb250cm9scyA9IFNsaWRlcy5nZXRJbihpKS5tYXAoKFNsaWRlKSA9PiBTbGlkZS5zbGlkZS5pZCk7XG4gICAgICBjb25zdCB0ZXh0ID0gIWhhc0ZvY3VzKCkgJiYgcGVyUGFnZSA+IDEgPyBpMThuLnBhZ2VYIDogaTE4bi5zbGlkZVg7XG4gICAgICBiaW5kKGJ1dHRvbiwgXCJjbGlja1wiLCBvbkNsaWNrLmJpbmQobnVsbCwgaSkpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9DT05UUk9MUywgY29udHJvbHMuam9pbihcIiBcIikpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9MQUJFTCwgZm9ybWF0KHRleHQsIGkgKyAxKSk7XG4gICAgICBpdGVtcy5wdXNoKHsgbGksIGJ1dHRvbiwgcGFnZTogaSB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gb25DbGljayhwYWdlKSB7XG4gICAgQ29udHJvbGxlci5nbyhgPiR7cGFnZX1gLCB0cnVlLCAoKSA9PiB7XG4gICAgICBjb25zdCBTbGlkZSA9IFNsaWRlcy5nZXRBdChDb250cm9sbGVyLnRvSW5kZXgocGFnZSkpO1xuICAgICAgU2xpZGUgJiYgZm9jdXMoU2xpZGUuc2xpZGUpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGdldEF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1zW0NvbnRyb2xsZXIudG9QYWdlKGluZGV4KV07XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGNvbnN0IHByZXYgPSBnZXRBdChnZXRJbmRleCh0cnVlKSk7XG4gICAgY29uc3QgY3VyciA9IGdldEF0KGdldEluZGV4KCkpO1xuICAgIGlmIChwcmV2KSB7XG4gICAgICByZW1vdmVDbGFzcyhwcmV2LmJ1dHRvbiwgQ0xBU1NfQUNUSVZFKTtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShwcmV2LmJ1dHRvbiwgQVJJQV9DVVJSRU5UKTtcbiAgICB9XG4gICAgaWYgKGN1cnIpIHtcbiAgICAgIGFkZENsYXNzKGN1cnIuYnV0dG9uLCBDTEFTU19BQ1RJVkUpO1xuICAgICAgc2V0QXR0cmlidXRlKGN1cnIuYnV0dG9uLCBBUklBX0NVUlJFTlQsIHRydWUpO1xuICAgIH1cbiAgICBlbWl0KEVWRU5UX1BBR0lOQVRJT05fVVBEQVRFRCwgeyBsaXN0LCBpdGVtcyB9LCBwcmV2LCBjdXJyKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGl0ZW1zLFxuICAgIG1vdW50LFxuICAgIGRlc3Ryb3ksXG4gICAgZ2V0QXQsXG4gICAgdXBkYXRlXG4gIH07XG59XG5cbmNvbnN0IFRSSUdHRVJfS0VZUyA9IFtcIiBcIiwgXCJFbnRlclwiLCBcIlNwYWNlYmFyXCJdO1xuZnVuY3Rpb24gU3luYyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBjb25zdCB7IGxpc3QgfSA9IENvbXBvbmVudHMyLkVsZW1lbnRzO1xuICBjb25zdCBldmVudHMgPSBbXTtcbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgU3BsaWRlMi5zcGxpZGVzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgIXRhcmdldC5pc1BhcmVudCAmJiBzeW5jKHRhcmdldC5zcGxpZGUpO1xuICAgIH0pO1xuICAgIGlmIChvcHRpb25zLmlzTmF2aWdhdGlvbikge1xuICAgICAgbmF2aWdhdGUoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICByZW1vdmVBdHRyaWJ1dGUobGlzdCwgQUxMX0FUVFJJQlVURVMpO1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGVtcHR5KGV2ZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3VudCgpIHtcbiAgICBkZXN0cm95KCk7XG4gICAgbW91bnQoKTtcbiAgfVxuICBmdW5jdGlvbiBzeW5jKHNwbGlkZSkge1xuICAgIFtTcGxpZGUyLCBzcGxpZGVdLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IEV2ZW50SW50ZXJmYWNlKGluc3RhbmNlKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGluc3RhbmNlID09PSBTcGxpZGUyID8gc3BsaWRlIDogU3BsaWRlMjtcbiAgICAgIGV2ZW50Lm9uKEVWRU5UX01PVkUsIChpbmRleCwgcHJldiwgZGVzdCkgPT4ge1xuICAgICAgICB0YXJnZXQuZ28odGFyZ2V0LmlzKExPT1ApID8gZGVzdCA6IGluZGV4KTtcbiAgICAgIH0pO1xuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG5hdmlnYXRlKCkge1xuICAgIGNvbnN0IGV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gICAgY29uc3QgeyBvbiB9ID0gZXZlbnQ7XG4gICAgb24oRVZFTlRfQ0xJQ0ssIG9uQ2xpY2spO1xuICAgIG9uKEVWRU5UX1NMSURFX0tFWURPV04sIG9uS2V5ZG93bik7XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1VQREFURURdLCB1cGRhdGUpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBST0xFLCBcIm1lbnVcIik7XG4gICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgIGV2ZW50LmVtaXQoRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVELCBTcGxpZGUyLnNwbGlkZXMpO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBzZXRBdHRyaWJ1dGUobGlzdCwgQVJJQV9PUklFTlRBVElPTiwgb3B0aW9ucy5kaXJlY3Rpb24gIT09IFRUQiA/IFwiaG9yaXpvbnRhbFwiIDogbnVsbCk7XG4gIH1cbiAgZnVuY3Rpb24gb25DbGljayhTbGlkZSkge1xuICAgIFNwbGlkZTIuZ28oU2xpZGUuaW5kZXgpO1xuICB9XG4gIGZ1bmN0aW9uIG9uS2V5ZG93bihTbGlkZSwgZSkge1xuICAgIGlmIChpbmNsdWRlcyhUUklHR0VSX0tFWVMsIGUua2V5KSkge1xuICAgICAgb25DbGljayhTbGlkZSk7XG4gICAgICBwcmV2ZW50KGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIG1vdW50LFxuICAgIGRlc3Ryb3ksXG4gICAgcmVtb3VudFxuICB9O1xufVxuXG5mdW5jdGlvbiBXaGVlbChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBjb25zdCB7IGJpbmQgfSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAob3B0aW9ucy53aGVlbCkge1xuICAgICAgYmluZChDb21wb25lbnRzMi5FbGVtZW50cy50cmFjaywgXCJ3aGVlbFwiLCBvbldoZWVsLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG9uV2hlZWwoZSkge1xuICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBlO1xuICAgICAgaWYgKGRlbHRhWSkge1xuICAgICAgICBjb25zdCBiYWNrd2FyZHMgPSBkZWx0YVkgPCAwO1xuICAgICAgICBTcGxpZGUyLmdvKGJhY2t3YXJkcyA/IFwiPFwiIDogXCI+XCIpO1xuICAgICAgICBzaG91bGRQcmV2ZW50KGJhY2t3YXJkcykgJiYgcHJldmVudChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudChiYWNrd2FyZHMpIHtcbiAgICByZXR1cm4gIW9wdGlvbnMucmVsZWFzZVdoZWVsIHx8IFNwbGlkZTIuc3RhdGUuaXMoTU9WSU5HKSB8fCBDb21wb25lbnRzMi5Db250cm9sbGVyLmdldEFkamFjZW50KGJhY2t3YXJkcykgIT09IC0xO1xuICB9XG4gIHJldHVybiB7XG4gICAgbW91bnRcbiAgfTtcbn1cblxudmFyIENvbXBvbmVudENvbnN0cnVjdG9ycyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBPcHRpb25zOiBPcHRpb25zLFxuICBEaXJlY3Rpb246IERpcmVjdGlvbixcbiAgRWxlbWVudHM6IEVsZW1lbnRzLFxuICBTbGlkZXM6IFNsaWRlcyxcbiAgTGF5b3V0OiBMYXlvdXQsXG4gIENsb25lczogQ2xvbmVzLFxuICBNb3ZlOiBNb3ZlLFxuICBDb250cm9sbGVyOiBDb250cm9sbGVyLFxuICBBcnJvd3M6IEFycm93cyxcbiAgQXV0b3BsYXk6IEF1dG9wbGF5LFxuICBDb3ZlcjogQ292ZXIsXG4gIFNjcm9sbDogU2Nyb2xsLFxuICBEcmFnOiBEcmFnLFxuICBLZXlib2FyZDogS2V5Ym9hcmQsXG4gIExhenlMb2FkOiBMYXp5TG9hZCxcbiAgUGFnaW5hdGlvbjogUGFnaW5hdGlvbixcbiAgU3luYzogU3luYyxcbiAgV2hlZWw6IFdoZWVsXG59KTtcblxuY29uc3QgSTE4TiA9IHtcbiAgcHJldjogXCJQcmV2aW91cyBzbGlkZVwiLFxuICBuZXh0OiBcIk5leHQgc2xpZGVcIixcbiAgZmlyc3Q6IFwiR28gdG8gZmlyc3Qgc2xpZGVcIixcbiAgbGFzdDogXCJHbyB0byBsYXN0IHNsaWRlXCIsXG4gIHNsaWRlWDogXCJHbyB0byBzbGlkZSAlc1wiLFxuICBwYWdlWDogXCJHbyB0byBwYWdlICVzXCIsXG4gIHBsYXk6IFwiU3RhcnQgYXV0b3BsYXlcIixcbiAgcGF1c2U6IFwiUGF1c2UgYXV0b3BsYXlcIlxufTtcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gIHR5cGU6IFwic2xpZGVcIixcbiAgc3BlZWQ6IDQwMCxcbiAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG4gIHBlclBhZ2U6IDEsXG4gIGNsb25lU3RhdHVzOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIHBhZ2luYXRpb246IHRydWUsXG4gIGludGVydmFsOiA1ZTMsXG4gIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICByZXNldFByb2dyZXNzOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZWFzaW5nOiBcImN1YmljLWJlemllcigwLjI1LCAxLCAwLjUsIDEpXCIsXG4gIGRyYWc6IHRydWUsXG4gIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgc2xpZGVGb2N1czogdHJ1ZSxcbiAgdHJpbVNwYWNlOiB0cnVlLFxuICBmb2N1c2FibGVOb2RlczogXCJhLCBidXR0b24sIHRleHRhcmVhLCBpbnB1dCwgc2VsZWN0LCBpZnJhbWVcIixcbiAgY2xhc3NlczogQ0xBU1NFUyxcbiAgaTE4bjogSTE4TlxufTtcblxuZnVuY3Rpb24gRmFkZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBjb25zdCB7IG9uIH0gPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1JFRlJFU0hdLCAoKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIENvbXBvbmVudHMyLlNsaWRlcy5zdHlsZShcInRyYW5zaXRpb25cIiwgYG9wYWNpdHkgJHtvcHRpb25zLnNwZWVkfW1zICR7b3B0aW9ucy5lYXNpbmd9YCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydChpbmRleCwgZG9uZSkge1xuICAgIGNvbnN0IHsgdHJhY2sgfSA9IENvbXBvbmVudHMyLkVsZW1lbnRzO1xuICAgIHN0eWxlKHRyYWNrLCBcImhlaWdodFwiLCB1bml0KHJlY3QodHJhY2spLmhlaWdodCkpO1xuICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGRvbmUoKTtcbiAgICAgIHN0eWxlKHRyYWNrLCBcImhlaWdodFwiLCBcIlwiKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vdW50LFxuICAgIHN0YXJ0LFxuICAgIGNhbmNlbDogbm9vcFxuICB9O1xufVxuXG5mdW5jdGlvbiBTbGlkZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBjb25zdCB7IGJpbmQgfSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICBjb25zdCB7IE1vdmUsIENvbnRyb2xsZXIgfSA9IENvbXBvbmVudHMyO1xuICBjb25zdCB7IGxpc3QgfSA9IENvbXBvbmVudHMyLkVsZW1lbnRzO1xuICBsZXQgZW5kQ2FsbGJhY2s7XG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGJpbmQobGlzdCwgXCJ0cmFuc2l0aW9uZW5kXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGxpc3QgJiYgZW5kQ2FsbGJhY2spIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgIGVuZENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnQoaW5kZXgsIGRvbmUpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IE1vdmUudG9Qb3NpdGlvbihpbmRleCwgdHJ1ZSk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBNb3ZlLmdldFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc3BlZWQgPSBnZXRTcGVlZChpbmRleCk7XG4gICAgaWYgKGFicyhkZXN0aW5hdGlvbiAtIHBvc2l0aW9uKSA+PSAxICYmIHNwZWVkID49IDEpIHtcbiAgICAgIGFwcGx5KGB0cmFuc2Zvcm0gJHtzcGVlZH1tcyAke29wdGlvbnMuZWFzaW5nfWApO1xuICAgICAgTW92ZS50cmFuc2xhdGUoZGVzdGluYXRpb24sIHRydWUpO1xuICAgICAgZW5kQ2FsbGJhY2sgPSBkb25lO1xuICAgIH0gZWxzZSB7XG4gICAgICBNb3ZlLmp1bXAoaW5kZXgpO1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgYXBwbHkoXCJcIik7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0U3BlZWQoaW5kZXgpIHtcbiAgICBjb25zdCB7IHJld2luZFNwZWVkIH0gPSBvcHRpb25zO1xuICAgIGlmIChTcGxpZGUyLmlzKFNMSURFKSAmJiByZXdpbmRTcGVlZCkge1xuICAgICAgY29uc3QgcHJldiA9IENvbnRyb2xsZXIuZ2V0SW5kZXgodHJ1ZSk7XG4gICAgICBjb25zdCBlbmQgPSBDb250cm9sbGVyLmdldEVuZCgpO1xuICAgICAgaWYgKHByZXYgPT09IDAgJiYgaW5kZXggPj0gZW5kIHx8IHByZXYgPj0gZW5kICYmIGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXdpbmRTcGVlZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnMuc3BlZWQ7XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHkodHJhbnNpdGlvbikge1xuICAgIHN0eWxlKGxpc3QsIFwidHJhbnNpdGlvblwiLCB0cmFuc2l0aW9uKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1vdW50LFxuICAgIHN0YXJ0LFxuICAgIGNhbmNlbFxuICB9O1xufVxuXG5jb25zdCBfU3BsaWRlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmV2ZW50ID0gRXZlbnRCdXMoKTtcbiAgICB0aGlzLkNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUoQ1JFQVRFRCk7XG4gICAgdGhpcy5zcGxpZGVzID0gW107XG4gICAgdGhpcy5fb3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuX0V4dGVuc2lvbnMgPSB7fTtcbiAgICBjb25zdCByb290ID0gaXNTdHJpbmcodGFyZ2V0KSA/IHF1ZXJ5KGRvY3VtZW50LCB0YXJnZXQpIDogdGFyZ2V0O1xuICAgIGFzc2VydChyb290LCBgJHtyb290fSBpcyBpbnZhbGlkLmApO1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgbWVyZ2UoREVGQVVMVFMsIF9TcGxpZGUuZGVmYXVsdHMpO1xuICAgIG1lcmdlKG1lcmdlKHRoaXMuX29wdGlvbnMsIERFRkFVTFRTKSwgb3B0aW9ucyB8fCB7fSk7XG4gIH1cbiAgbW91bnQoRXh0ZW5zaW9ucywgVHJhbnNpdGlvbikge1xuICAgIGNvbnN0IHsgc3RhdGUsIENvbXBvbmVudHM6IENvbXBvbmVudHMyIH0gPSB0aGlzO1xuICAgIGFzc2VydChzdGF0ZS5pcyhbQ1JFQVRFRCwgREVTVFJPWUVEXSksIFwiQWxyZWFkeSBtb3VudGVkIVwiKTtcbiAgICBzdGF0ZS5zZXQoQ1JFQVRFRCk7XG4gICAgdGhpcy5fQ29tcG9uZW50cyA9IENvbXBvbmVudHMyO1xuICAgIHRoaXMuX1RyYW5zaXRpb24gPSBUcmFuc2l0aW9uIHx8IHRoaXMuX1RyYW5zaXRpb24gfHwgKHRoaXMuaXMoRkFERSkgPyBGYWRlIDogU2xpZGUpO1xuICAgIHRoaXMuX0V4dGVuc2lvbnMgPSBFeHRlbnNpb25zIHx8IHRoaXMuX0V4dGVuc2lvbnM7XG4gICAgY29uc3QgQ29uc3RydWN0b3JzID0gYXNzaWduKHt9LCBDb21wb25lbnRDb25zdHJ1Y3RvcnMsIHRoaXMuX0V4dGVuc2lvbnMsIHsgVHJhbnNpdGlvbjogdGhpcy5fVHJhbnNpdGlvbiB9KTtcbiAgICBmb3JPd24oQ29uc3RydWN0b3JzLCAoQ29tcG9uZW50LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudCh0aGlzLCBDb21wb25lbnRzMiwgdGhpcy5fb3B0aW9ucyk7XG4gICAgICBDb21wb25lbnRzMltrZXldID0gY29tcG9uZW50O1xuICAgICAgY29tcG9uZW50LnNldHVwICYmIGNvbXBvbmVudC5zZXR1cCgpO1xuICAgIH0pO1xuICAgIGZvck93bihDb21wb25lbnRzMiwgKGNvbXBvbmVudCkgPT4ge1xuICAgICAgY29tcG9uZW50Lm1vdW50ICYmIGNvbXBvbmVudC5tb3VudCgpO1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdChFVkVOVF9NT1VOVEVEKTtcbiAgICBhZGRDbGFzcyh0aGlzLnJvb3QsIENMQVNTX0lOSVRJQUxJWkVEKTtcbiAgICBzdGF0ZS5zZXQoSURMRSk7XG4gICAgdGhpcy5lbWl0KEVWRU5UX1JFQURZKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBzeW5jKHNwbGlkZSkge1xuICAgIHRoaXMuc3BsaWRlcy5wdXNoKHsgc3BsaWRlIH0pO1xuICAgIHNwbGlkZS5zcGxpZGVzLnB1c2goeyBzcGxpZGU6IHRoaXMsIGlzUGFyZW50OiB0cnVlIH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmlzKElETEUpKSB7XG4gICAgICB0aGlzLl9Db21wb25lbnRzLlN5bmMucmVtb3VudCgpO1xuICAgICAgc3BsaWRlLkNvbXBvbmVudHMuU3luYy5yZW1vdW50KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGdvKGNvbnRyb2wpIHtcbiAgICB0aGlzLl9Db21wb25lbnRzLkNvbnRyb2xsZXIuZ28oY29udHJvbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgb24oZXZlbnRzLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZXZlbnQub24oZXZlbnRzLCBjYWxsYmFjaywgbnVsbCwgREVGQVVMVF9VU0VSX0VWRU5UX1BSSU9SSVRZKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBvZmYoZXZlbnRzKSB7XG4gICAgdGhpcy5ldmVudC5vZmYoZXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBlbWl0KGV2ZW50KSB7XG4gICAgdGhpcy5ldmVudC5lbWl0KGV2ZW50LCAuLi5zbGljZShhcmd1bWVudHMsIDEpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBhZGQoc2xpZGVzLCBpbmRleCkge1xuICAgIHRoaXMuX0NvbXBvbmVudHMuU2xpZGVzLmFkZChzbGlkZXMsIGluZGV4KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZW1vdmUobWF0Y2hlcikge1xuICAgIHRoaXMuX0NvbXBvbmVudHMuU2xpZGVzLnJlbW92ZShtYXRjaGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBpcyh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMudHlwZSA9PT0gdHlwZTtcbiAgfVxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkZXN0cm95KGNvbXBsZXRlbHkgPSB0cnVlKSB7XG4gICAgY29uc3QgeyBldmVudCwgc3RhdGUgfSA9IHRoaXM7XG4gICAgaWYgKHN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICBldmVudC5vbihFVkVOVF9SRUFEWSwgdGhpcy5kZXN0cm95LmJpbmQodGhpcywgY29tcGxldGVseSksIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JPd24odGhpcy5fQ29tcG9uZW50cywgKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICBjb21wb25lbnQuZGVzdHJveSAmJiBjb21wb25lbnQuZGVzdHJveShjb21wbGV0ZWx5KTtcbiAgICAgIH0sIHRydWUpO1xuICAgICAgZXZlbnQuZW1pdChFVkVOVF9ERVNUUk9ZKTtcbiAgICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgICAgIGNvbXBsZXRlbHkgJiYgZW1wdHkodGhpcy5zcGxpZGVzKTtcbiAgICAgIHN0YXRlLnNldChERVNUUk9ZRUQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuICBzZXQgb3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyBfb3B0aW9ucyB9ID0gdGhpcztcbiAgICBtZXJnZShfb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICB0aGlzLmVtaXQoRVZFTlRfVVBEQVRFRCwgX29wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9Db21wb25lbnRzLlNsaWRlcy5nZXRMZW5ndGgodHJ1ZSk7XG4gIH1cbiAgZ2V0IGluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9Db21wb25lbnRzLkNvbnRyb2xsZXIuZ2V0SW5kZXgoKTtcbiAgfVxufTtcbmxldCBTcGxpZGUgPSBfU3BsaWRlO1xuU3BsaWRlLmRlZmF1bHRzID0ge307XG5TcGxpZGUuU1RBVEVTID0gU1RBVEVTO1xuXG5jb25zdCBDTEFTU19SRU5ERVJFRCA9IFwiaXMtcmVuZGVyZWRcIjtcblxuY29uc3QgUkVOREVSRVJfREVGQVVMVF9DT05GSUcgPSB7XG4gIGxpc3RUYWc6IFwidWxcIixcbiAgc2xpZGVUYWc6IFwibGlcIlxufTtcblxuY2xhc3MgU3R5bGUge1xuICBjb25zdHJ1Y3RvcihpZCwgb3B0aW9ucykge1xuICAgIHRoaXMuc3R5bGVzID0ge307XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgcnVsZShzZWxlY3RvciwgcHJvcCwgdmFsdWUsIGJyZWFrcG9pbnQpIHtcbiAgICBicmVha3BvaW50ID0gYnJlYWtwb2ludCB8fCBcImRlZmF1bHRcIjtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLnN0eWxlc1ticmVha3BvaW50XSA9IHRoaXMuc3R5bGVzW2JyZWFrcG9pbnRdIHx8IHt9O1xuICAgIGNvbnN0IHN0eWxlcyA9IHNlbGVjdG9yc1tzZWxlY3Rvcl0gPSBzZWxlY3RvcnNbc2VsZWN0b3JdIHx8IHt9O1xuICAgIHN0eWxlc1twcm9wXSA9IHZhbHVlO1xuICB9XG4gIGJ1aWxkKCkge1xuICAgIGxldCBjc3MgPSBcIlwiO1xuICAgIGlmICh0aGlzLnN0eWxlcy5kZWZhdWx0KSB7XG4gICAgICBjc3MgKz0gdGhpcy5idWlsZFNlbGVjdG9ycyh0aGlzLnN0eWxlcy5kZWZhdWx0KTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXModGhpcy5zdHlsZXMpLnNvcnQoKG4sIG0pID0+IHRoaXMub3B0aW9ucy5tZWRpYVF1ZXJ5ID09PSBcIm1pblwiID8gK24gLSArbSA6ICttIC0gK24pLmZvckVhY2goKGJyZWFrcG9pbnQpID0+IHtcbiAgICAgIGlmIChicmVha3BvaW50ICE9PSBcImRlZmF1bHRcIikge1xuICAgICAgICBjc3MgKz0gYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7YnJlYWtwb2ludH1weCkge2A7XG4gICAgICAgIGNzcyArPSB0aGlzLmJ1aWxkU2VsZWN0b3JzKHRoaXMuc3R5bGVzW2JyZWFrcG9pbnRdKTtcbiAgICAgICAgY3NzICs9IGB9YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY3NzO1xuICB9XG4gIGJ1aWxkU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICAgIGxldCBjc3MgPSBcIlwiO1xuICAgIGZvck93bihzZWxlY3RvcnMsIChzdHlsZXMsIHNlbGVjdG9yKSA9PiB7XG4gICAgICBzZWxlY3RvciA9IGAjJHt0aGlzLmlkfSAke3NlbGVjdG9yfWAudHJpbSgpO1xuICAgICAgY3NzICs9IGAke3NlbGVjdG9yfSB7YDtcbiAgICAgIGZvck93bihzdHlsZXMsICh2YWx1ZSwgcHJvcCkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgICAgICBjc3MgKz0gYCR7cHJvcH06ICR7dmFsdWV9O2A7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY3NzICs9IFwifVwiO1xuICAgIH0pO1xuICAgIHJldHVybiBjc3M7XG4gIH1cbn1cblxuY2xhc3MgU3BsaWRlUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50cywgb3B0aW9ucywgY29uZmlnLCBkZWZhdWx0cykge1xuICAgIHRoaXMuc2xpZGVzID0gW107XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5icmVha3BvaW50cyA9IFtdO1xuICAgIG1lcmdlKERFRkFVTFRTLCBkZWZhdWx0cyB8fCB7fSk7XG4gICAgbWVyZ2UobWVyZ2UodGhpcy5vcHRpb25zLCBERUZBVUxUUyksIG9wdGlvbnMgfHwge30pO1xuICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cztcbiAgICB0aGlzLmNvbmZpZyA9IGFzc2lnbih7fSwgUkVOREVSRVJfREVGQVVMVF9DT05GSUcsIGNvbmZpZyB8fCB7fSk7XG4gICAgdGhpcy5pZCA9IHRoaXMuY29uZmlnLmlkIHx8IHVuaXF1ZUlkKFwic3BsaWRlXCIpO1xuICAgIHRoaXMuU3R5bGUgPSBuZXcgU3R5bGUodGhpcy5pZCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLkRpcmVjdGlvbiA9IERpcmVjdGlvbihudWxsLCBudWxsLCB0aGlzLm9wdGlvbnMpO1xuICAgIGFzc2VydCh0aGlzLmNvbnRlbnRzLmxlbmd0aCwgXCJQcm92aWRlIGF0IGxlYXN0IDEgY29udGVudC5cIik7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgc3RhdGljIGNsZWFuKHNwbGlkZSkge1xuICAgIGNvbnN0IHsgb24gfSA9IEV2ZW50SW50ZXJmYWNlKHNwbGlkZSk7XG4gICAgY29uc3QgeyByb290IH0gPSBzcGxpZGU7XG4gICAgY29uc3QgY2xvbmVzID0gcXVlcnlBbGwocm9vdCwgYC4ke0NMQVNTX0NMT05FfWApO1xuICAgIG9uKEVWRU5UX01PVU5URUQsICgpID0+IHtcbiAgICAgIHJlbW92ZShjaGlsZChyb290LCBcInN0eWxlXCIpKTtcbiAgICB9KTtcbiAgICByZW1vdmUoY2xvbmVzKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMucGFyc2VCcmVha3BvaW50cygpO1xuICAgIHRoaXMuaW5pdFNsaWRlcygpO1xuICAgIHRoaXMucmVnaXN0ZXJSb290U3R5bGVzKCk7XG4gICAgdGhpcy5yZWdpc3RlclRyYWNrU3R5bGVzKCk7XG4gICAgdGhpcy5yZWdpc3RlclNsaWRlU3R5bGVzKCk7XG4gICAgdGhpcy5yZWdpc3Rlckxpc3RTdHlsZXMoKTtcbiAgfVxuICBpbml0U2xpZGVzKCkge1xuICAgIHB1c2godGhpcy5zbGlkZXMsIHRoaXMuY29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29udGVudCA9IGlzU3RyaW5nKGNvbnRlbnQpID8geyBodG1sOiBjb250ZW50IH0gOiBjb250ZW50O1xuICAgICAgY29udGVudC5zdHlsZXMgPSBjb250ZW50LnN0eWxlcyB8fCB7fTtcbiAgICAgIGNvbnRlbnQuYXR0cnMgPSBjb250ZW50LmF0dHJzIHx8IHt9O1xuICAgICAgdGhpcy5jb3Zlcihjb250ZW50KTtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBgJHt0aGlzLm9wdGlvbnMuY2xhc3Nlcy5zbGlkZX0gJHtpbmRleCA9PT0gMCA/IENMQVNTX0FDVElWRSA6IFwiXCJ9YDtcbiAgICAgIGFzc2lnbihjb250ZW50LmF0dHJzLCB7XG4gICAgICAgIGNsYXNzOiBgJHtjbGFzc2VzfSAke2NvbnRlbnQuYXR0cnMuY2xhc3MgfHwgXCJcIn1gLnRyaW0oKSxcbiAgICAgICAgc3R5bGU6IHRoaXMuYnVpbGRTdHlsZXMoY29udGVudC5zdHlsZXMpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pKTtcbiAgICBpZiAodGhpcy5pc0xvb3AoKSkge1xuICAgICAgdGhpcy5nZW5lcmF0ZUNsb25lcyh0aGlzLnNsaWRlcyk7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyUm9vdFN0eWxlcygpIHtcbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goKFt3aWR0aCwgb3B0aW9uc10pID0+IHtcbiAgICAgIHRoaXMuU3R5bGUucnVsZShcIiBcIiwgXCJtYXgtd2lkdGhcIiwgdW5pdChvcHRpb25zLndpZHRoKSwgd2lkdGgpO1xuICAgIH0pO1xuICB9XG4gIHJlZ2lzdGVyVHJhY2tTdHlsZXMoKSB7XG4gICAgY29uc3QgeyBTdHlsZTogU3R5bGUyIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYC4ke0NMQVNTX1RSQUNLfWA7XG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKChbd2lkdGgsIG9wdGlvbnNdKSA9PiB7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgdGhpcy5yZXNvbHZlKFwicGFkZGluZ0xlZnRcIiksIHRoaXMuY3NzUGFkZGluZyhvcHRpb25zLCBmYWxzZSksIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCB0aGlzLnJlc29sdmUoXCJwYWRkaW5nUmlnaHRcIiksIHRoaXMuY3NzUGFkZGluZyhvcHRpb25zLCB0cnVlKSwgd2lkdGgpO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwiaGVpZ2h0XCIsIHRoaXMuY3NzVHJhY2tIZWlnaHQob3B0aW9ucyksIHdpZHRoKTtcbiAgICB9KTtcbiAgfVxuICByZWdpc3Rlckxpc3RTdHlsZXMoKSB7XG4gICAgY29uc3QgeyBTdHlsZTogU3R5bGUyIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYC4ke0NMQVNTX0xJU1R9YDtcbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goKFt3aWR0aCwgb3B0aW9uc10pID0+IHtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcInRyYW5zZm9ybVwiLCB0aGlzLmJ1aWxkVHJhbnNsYXRlKG9wdGlvbnMpLCB3aWR0aCk7XG4gICAgICBpZiAoIXRoaXMuY3NzU2xpZGVIZWlnaHQob3B0aW9ucykpIHtcbiAgICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwiYXNwZWN0LXJhdGlvXCIsIHRoaXMuY3NzQXNwZWN0UmF0aW8ob3B0aW9ucyksIHdpZHRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZWdpc3RlclNsaWRlU3R5bGVzKCkge1xuICAgIGNvbnN0IHsgU3R5bGU6IFN0eWxlMiB9ID0gdGhpcztcbiAgICBjb25zdCBzZWxlY3RvciA9IGAuJHtDTEFTU19TTElERX1gO1xuICAgIHRoaXMuYnJlYWtwb2ludHMuZm9yRWFjaCgoW3dpZHRoLCBvcHRpb25zXSkgPT4ge1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwid2lkdGhcIiwgdGhpcy5jc3NTbGlkZVdpZHRoKG9wdGlvbnMpLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJoZWlnaHRcIiwgdGhpcy5jc3NTbGlkZUhlaWdodChvcHRpb25zKSB8fCBcIjEwMCVcIiwgd2lkdGgpO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIHRoaXMucmVzb2x2ZShcIm1hcmdpblJpZ2h0XCIpLCB1bml0KG9wdGlvbnMuZ2FwKSB8fCBcIjBweFwiLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShgJHtzZWxlY3Rvcn0gPiBpbWdgLCBcImRpc3BsYXlcIiwgb3B0aW9ucy5jb3ZlciA/IFwibm9uZVwiIDogXCJpbmxpbmVcIiwgd2lkdGgpO1xuICAgIH0pO1xuICB9XG4gIGJ1aWxkVHJhbnNsYXRlKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHJlc29sdmUsIG9yaWVudCB9ID0gdGhpcy5EaXJlY3Rpb247XG4gICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgdmFsdWVzLnB1c2godGhpcy5jc3NPZmZzZXRDbG9uZXMob3B0aW9ucykpO1xuICAgIHZhbHVlcy5wdXNoKHRoaXMuY3NzT2Zmc2V0R2FwcyhvcHRpb25zKSk7XG4gICAgaWYgKHRoaXMuaXNDZW50ZXIob3B0aW9ucykpIHtcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQoLTUwKSwgXCIlXCIpKTtcbiAgICAgIHZhbHVlcy5wdXNoKC4uLnRoaXMuY3NzT2Zmc2V0Q2VudGVyKG9wdGlvbnMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcy5maWx0ZXIoQm9vbGVhbikubWFwKCh2YWx1ZSkgPT4gYHRyYW5zbGF0ZSR7cmVzb2x2ZShcIlhcIil9KCR7dmFsdWV9KWApLmpvaW4oXCIgXCIpO1xuICB9XG4gIGNzc09mZnNldENsb25lcyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyByZXNvbHZlLCBvcmllbnQgfSA9IHRoaXMuRGlyZWN0aW9uO1xuICAgIGNvbnN0IGNsb25lQ291bnQgPSB0aGlzLmdldENsb25lQ291bnQoKTtcbiAgICBpZiAodGhpcy5pc0ZpeGVkV2lkdGgob3B0aW9ucykpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQ6IHVuaXQyIH0gPSB0aGlzLnBhcnNlQ3NzVmFsdWUob3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0pO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUpICogY2xvbmVDb3VudCwgdW5pdDIpO1xuICAgIH1cbiAgICBjb25zdCBwZXJjZW50ID0gMTAwICogY2xvbmVDb3VudCAvIG9wdGlvbnMucGVyUGFnZTtcbiAgICByZXR1cm4gYCR7b3JpZW50KHBlcmNlbnQpfSVgO1xuICB9XG4gIGNzc09mZnNldENlbnRlcihvcHRpb25zKSB7XG4gICAgY29uc3QgeyByZXNvbHZlLCBvcmllbnQgfSA9IHRoaXMuRGlyZWN0aW9uO1xuICAgIGlmICh0aGlzLmlzRml4ZWRXaWR0aChvcHRpb25zKSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdDogdW5pdDIgfSA9IHRoaXMucGFyc2VDc3NWYWx1ZShvcHRpb25zW3Jlc29sdmUoXCJmaXhlZFdpZHRoXCIpXSk7XG4gICAgICByZXR1cm4gW3RoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUgLyAyKSwgdW5pdDIpXTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWVzID0gW107XG4gICAgY29uc3QgeyBwZXJQYWdlLCBnYXAgfSA9IG9wdGlvbnM7XG4gICAgdmFsdWVzLnB1c2goYCR7b3JpZW50KDUwIC8gcGVyUGFnZSl9JWApO1xuICAgIGlmIChnYXApIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQ6IHVuaXQyIH0gPSB0aGlzLnBhcnNlQ3NzVmFsdWUoZ2FwKTtcbiAgICAgIGNvbnN0IGdhcE9mZnNldCA9ICh2YWx1ZSAvIHBlclBhZ2UgLSB2YWx1ZSkgLyAyO1xuICAgICAgdmFsdWVzLnB1c2godGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudChnYXBPZmZzZXQpLCB1bml0MikpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG4gIGNzc09mZnNldEdhcHMob3B0aW9ucykge1xuICAgIGNvbnN0IGNsb25lQ291bnQgPSB0aGlzLmdldENsb25lQ291bnQoKTtcbiAgICBpZiAoY2xvbmVDb3VudCAmJiBvcHRpb25zLmdhcCkge1xuICAgICAgY29uc3QgeyBvcmllbnQgfSA9IHRoaXMuRGlyZWN0aW9uO1xuICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdDogdW5pdDIgfSA9IHRoaXMucGFyc2VDc3NWYWx1ZShvcHRpb25zLmdhcCk7XG4gICAgICBpZiAodGhpcy5pc0ZpeGVkV2lkdGgob3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUgKiBjbG9uZUNvdW50KSwgdW5pdDIpO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBwZXJQYWdlIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgZ2FwcyA9IGNsb25lQ291bnQgLyBwZXJQYWdlO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQoZ2FwcyAqIHZhbHVlKSwgdW5pdDIpO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZXNvbHZlKHByb3ApIHtcbiAgICByZXR1cm4gY2FtZWxUb0tlYmFiKHRoaXMuRGlyZWN0aW9uLnJlc29sdmUocHJvcCkpO1xuICB9XG4gIGNzc1BhZGRpbmcob3B0aW9ucywgcmlnaHQpIHtcbiAgICBjb25zdCB7IHBhZGRpbmcgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgcHJvcCA9IHRoaXMuRGlyZWN0aW9uLnJlc29sdmUocmlnaHQgPyBcInJpZ2h0XCIgOiBcImxlZnRcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHBhZGRpbmcgJiYgdW5pdChwYWRkaW5nW3Byb3BdIHx8IChpc09iamVjdChwYWRkaW5nKSA/IDAgOiBwYWRkaW5nKSkgfHwgXCIwcHhcIjtcbiAgfVxuICBjc3NUcmFja0hlaWdodChvcHRpb25zKSB7XG4gICAgbGV0IGhlaWdodCA9IFwiXCI7XG4gICAgaWYgKHRoaXMuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICBoZWlnaHQgPSB0aGlzLmNzc0hlaWdodChvcHRpb25zKTtcbiAgICAgIGFzc2VydChoZWlnaHQsICdcImhlaWdodFwiIGlzIG1pc3NpbmcuJyk7XG4gICAgICBoZWlnaHQgPSBgY2FsYygke2hlaWdodH0gLSAke3RoaXMuY3NzUGFkZGluZyhvcHRpb25zLCBmYWxzZSl9IC0gJHt0aGlzLmNzc1BhZGRpbmcob3B0aW9ucywgdHJ1ZSl9KWA7XG4gICAgfVxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgY3NzSGVpZ2h0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmhlaWdodCk7XG4gIH1cbiAgY3NzU2xpZGVXaWR0aChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuYXV0b1dpZHRoID8gXCJcIiA6IHVuaXQob3B0aW9ucy5maXhlZFdpZHRoKSB8fCAodGhpcy5pc1ZlcnRpY2FsKCkgPyBcIlwiIDogdGhpcy5jc3NTbGlkZVNpemUob3B0aW9ucykpO1xuICB9XG4gIGNzc1NsaWRlSGVpZ2h0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmZpeGVkSGVpZ2h0KSB8fCAodGhpcy5pc1ZlcnRpY2FsKCkgPyBvcHRpb25zLmF1dG9IZWlnaHQgPyBcIlwiIDogdGhpcy5jc3NTbGlkZVNpemUob3B0aW9ucykgOiB0aGlzLmNzc0hlaWdodChvcHRpb25zKSk7XG4gIH1cbiAgY3NzU2xpZGVTaXplKG9wdGlvbnMpIHtcbiAgICBjb25zdCBnYXAgPSB1bml0KG9wdGlvbnMuZ2FwKTtcbiAgICByZXR1cm4gYGNhbGMoKDEwMCUke2dhcCAmJiBgICsgJHtnYXB9YH0pLyR7b3B0aW9ucy5wZXJQYWdlIHx8IDF9JHtnYXAgJiYgYCAtICR7Z2FwfWB9KWA7XG4gIH1cbiAgY3NzQXNwZWN0UmF0aW8ob3B0aW9ucykge1xuICAgIGNvbnN0IHsgaGVpZ2h0UmF0aW8gfSA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIGhlaWdodFJhdGlvID8gYCR7MSAvIGhlaWdodFJhdGlvfWAgOiBcIlwiO1xuICB9XG4gIGJ1aWxkQ3NzVmFsdWUodmFsdWUsIHVuaXQyKSB7XG4gICAgcmV0dXJuIGAke3ZhbHVlfSR7dW5pdDJ9YDtcbiAgfVxuICBwYXJzZUNzc1ZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMDtcbiAgICAgIGNvbnN0IHVuaXQyID0gdmFsdWUucmVwbGFjZSgvXFxkKihcXC5cXGQqKT8vLCBcIlwiKSB8fCBcInB4XCI7XG4gICAgICByZXR1cm4geyB2YWx1ZTogbnVtYmVyLCB1bml0OiB1bml0MiB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZSwgdW5pdDogXCJweFwiIH07XG4gIH1cbiAgcGFyc2VCcmVha3BvaW50cygpIHtcbiAgICBjb25zdCB7IGJyZWFrcG9pbnRzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgdGhpcy5icmVha3BvaW50cy5wdXNoKFtcImRlZmF1bHRcIiwgdGhpcy5vcHRpb25zXSk7XG4gICAgaWYgKGJyZWFrcG9pbnRzKSB7XG4gICAgICBmb3JPd24oYnJlYWtwb2ludHMsIChvcHRpb25zLCB3aWR0aCkgPT4ge1xuICAgICAgICB0aGlzLmJyZWFrcG9pbnRzLnB1c2goW3dpZHRoLCBtZXJnZShtZXJnZSh7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucyldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpc0ZpeGVkV2lkdGgob3B0aW9ucykge1xuICAgIHJldHVybiAhIW9wdGlvbnNbdGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShcImZpeGVkV2lkdGhcIildO1xuICB9XG4gIGlzTG9vcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnR5cGUgPT09IExPT1A7XG4gIH1cbiAgaXNDZW50ZXIob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmZvY3VzID09PSBcImNlbnRlclwiKSB7XG4gICAgICBpZiAodGhpcy5pc0xvb3AoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudHlwZSA9PT0gU0xJREUpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLm9wdGlvbnMudHJpbVNwYWNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaXNWZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICB9XG4gIGJ1aWxkQ2xhc3NlcygpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIFtcbiAgICAgIENMQVNTX1JPT1QsXG4gICAgICBgJHtDTEFTU19ST09UfS0tJHtvcHRpb25zLnR5cGV9YCxcbiAgICAgIGAke0NMQVNTX1JPT1R9LS0ke29wdGlvbnMuZGlyZWN0aW9ufWAsXG4gICAgICBvcHRpb25zLmRyYWcgJiYgYCR7Q0xBU1NfUk9PVH0tLWRyYWdnYWJsZWAsXG4gICAgICBvcHRpb25zLmlzTmF2aWdhdGlvbiAmJiBgJHtDTEFTU19ST09UfS0tbmF2YCxcbiAgICAgIENMQVNTX0FDVElWRSxcbiAgICAgICF0aGlzLmNvbmZpZy5oaWRkZW4gJiYgQ0xBU1NfUkVOREVSRURcbiAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgfVxuICBidWlsZEF0dHJzKGF0dHJzKSB7XG4gICAgbGV0IGF0dHIgPSBcIlwiO1xuICAgIGZvck93bihhdHRycywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGF0dHIgKz0gdmFsdWUgPyBgICR7Y2FtZWxUb0tlYmFiKGtleSl9PVwiJHt2YWx1ZX1cImAgOiBcIlwiO1xuICAgIH0pO1xuICAgIHJldHVybiBhdHRyLnRyaW0oKTtcbiAgfVxuICBidWlsZFN0eWxlcyhzdHlsZXMpIHtcbiAgICBsZXQgc3R5bGUgPSBcIlwiO1xuICAgIGZvck93bihzdHlsZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBzdHlsZSArPSBgICR7Y2FtZWxUb0tlYmFiKGtleSl9OiR7dmFsdWV9O2A7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlLnRyaW0oKTtcbiAgfVxuICByZW5kZXJTbGlkZXMoKSB7XG4gICAgY29uc3QgeyBzbGlkZVRhZzogdGFnIH0gPSB0aGlzLmNvbmZpZztcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMubWFwKChjb250ZW50KSA9PiB7XG4gICAgICByZXR1cm4gYDwke3RhZ30gJHt0aGlzLmJ1aWxkQXR0cnMoY29udGVudC5hdHRycyl9PiR7Y29udGVudC5odG1sIHx8IFwiXCJ9PC8ke3RhZ30+YDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9XG4gIGNvdmVyKGNvbnRlbnQpIHtcbiAgICBjb25zdCB7IHN0eWxlcywgaHRtbCA9IFwiXCIgfSA9IGNvbnRlbnQ7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb3ZlciAmJiAhdGhpcy5vcHRpb25zLmxhenlMb2FkKSB7XG4gICAgICBjb25zdCBzcmMgPSBodG1sLm1hdGNoKC88aW1nLio/c3JjXFxzKj1cXHMqKFsnXCJdKSguKz8pXFwxLio/Pi8pO1xuICAgICAgaWYgKHNyYyAmJiBzcmNbMl0pIHtcbiAgICAgICAgc3R5bGVzLmJhY2tncm91bmQgPSBgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCB1cmwoJyR7c3JjWzJdfScpYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVDbG9uZXMoY29udGVudHMpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMub3B0aW9ucztcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0Q2xvbmVDb3VudCgpO1xuICAgIGNvbnN0IHNsaWRlcyA9IGNvbnRlbnRzLnNsaWNlKCk7XG4gICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgcHVzaChzbGlkZXMsIHNsaWRlcyk7XG4gICAgfVxuICAgIHB1c2goc2xpZGVzLnNsaWNlKC1jb3VudCkucmV2ZXJzZSgpLCBzbGlkZXMuc2xpY2UoMCwgY291bnQpKS5mb3JFYWNoKChjb250ZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYXR0cnMgPSBhc3NpZ24oe30sIGNvbnRlbnQuYXR0cnMsIHsgY2xhc3M6IGAke2NvbnRlbnQuYXR0cnMuY2xhc3N9ICR7Y2xhc3Nlcy5jbG9uZX1gIH0pO1xuICAgICAgY29uc3QgY2xvbmUgPSBhc3NpZ24oe30sIGNvbnRlbnQsIHsgYXR0cnMgfSk7XG4gICAgICBpbmRleCA8IGNvdW50ID8gY29udGVudHMudW5zaGlmdChjbG9uZSkgOiBjb250ZW50cy5wdXNoKGNsb25lKTtcbiAgICB9KTtcbiAgfVxuICBnZXRDbG9uZUNvdW50KCkge1xuICAgIGlmICh0aGlzLmlzTG9vcCgpKSB7XG4gICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XG4gICAgICBpZiAob3B0aW9ucy5jbG9uZXMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY2xvbmVzO1xuICAgICAgfVxuICAgICAgY29uc3QgcGVyUGFnZSA9IG1heCguLi50aGlzLmJyZWFrcG9pbnRzLm1hcCgoWywgb3B0aW9uczJdKSA9PiBvcHRpb25zMi5wZXJQYWdlKSk7XG4gICAgICByZXR1cm4gcGVyUGFnZSAqICgob3B0aW9ucy5mbGlja01heFBhZ2VzIHx8IDEpICsgMSk7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIHJlbmRlckFycm93cygpIHtcbiAgICBsZXQgaHRtbCA9IFwiXCI7XG4gICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmNsYXNzZXMuYXJyb3dzfVwiPmA7XG4gICAgaHRtbCArPSB0aGlzLnJlbmRlckFycm93KHRydWUpO1xuICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJBcnJvdyhmYWxzZSk7XG4gICAgaHRtbCArPSBgPC9kaXY+YDtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuICByZW5kZXJBcnJvdyhwcmV2KSB7XG4gICAgY29uc3QgeyBjbGFzc2VzLCBpMThuIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICBjbGFzczogYCR7Y2xhc3Nlcy5hcnJvd30gJHtwcmV2ID8gY2xhc3Nlcy5wcmV2IDogY2xhc3Nlcy5uZXh0fWAsXG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgYXJpYUxhYmVsOiBwcmV2ID8gaTE4bi5wcmV2IDogaTE4bi5uZXh0XG4gICAgfTtcbiAgICByZXR1cm4gYDxidXR0b24gJHt0aGlzLmJ1aWxkQXR0cnMoYXR0cnMpfT48c3ZnIHhtbG5zPVwiJHtYTUxfTkFNRV9TUEFDRX1cIiB2aWV3Qm94PVwiMCAwICR7U0laRX0gJHtTSVpFfVwiIHdpZHRoPVwiJHtTSVpFfVwiIGhlaWdodD1cIiR7U0laRX1cIj48cGF0aCBkPVwiJHt0aGlzLm9wdGlvbnMuYXJyb3dQYXRoIHx8IFBBVEh9XCIgLz48L3N2Zz48L2J1dHRvbj5gO1xuICB9XG4gIGh0bWwoKSB7XG4gICAgY29uc3QgeyByb290Q2xhc3MsIGxpc3RUYWcsIGFycm93cywgYmVmb3JlVHJhY2ssIGFmdGVyVHJhY2ssIHNsaWRlciwgYmVmb3JlU2xpZGVyLCBhZnRlclNsaWRlciB9ID0gdGhpcy5jb25maWc7XG4gICAgbGV0IGh0bWwgPSBcIlwiO1xuICAgIGh0bWwgKz0gYDxkaXYgaWQ9XCIke3RoaXMuaWR9XCIgY2xhc3M9XCIke3RoaXMuYnVpbGRDbGFzc2VzKCl9ICR7cm9vdENsYXNzIHx8IFwiXCJ9XCI+YDtcbiAgICBodG1sICs9IGA8c3R5bGU+JHt0aGlzLlN0eWxlLmJ1aWxkKCl9PC9zdHlsZT5gO1xuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGh0bWwgKz0gYmVmb3JlU2xpZGVyIHx8IFwiXCI7XG4gICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwic3BsaWRlX19zbGlkZXJcIj5gO1xuICAgIH1cbiAgICBodG1sICs9IGJlZm9yZVRyYWNrIHx8IFwiXCI7XG4gICAgaWYgKGFycm93cykge1xuICAgICAgaHRtbCArPSB0aGlzLnJlbmRlckFycm93cygpO1xuICAgIH1cbiAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwic3BsaWRlX190cmFja1wiPmA7XG4gICAgaHRtbCArPSBgPCR7bGlzdFRhZ30gY2xhc3M9XCJzcGxpZGVfX2xpc3RcIj5gO1xuICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJTbGlkZXMoKTtcbiAgICBodG1sICs9IGA8LyR7bGlzdFRhZ30+YDtcbiAgICBodG1sICs9IGA8L2Rpdj5gO1xuICAgIGh0bWwgKz0gYWZ0ZXJUcmFjayB8fCBcIlwiO1xuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGh0bWwgKz0gYDwvZGl2PmA7XG4gICAgICBodG1sICs9IGFmdGVyU2xpZGVyIHx8IFwiXCI7XG4gICAgfVxuICAgIGh0bWwgKz0gYDwvZGl2PmA7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ0xBU1NFUywgQ0xBU1NfQUNUSVZFLCBDTEFTU19BUlJPVywgQ0xBU1NfQVJST1dTLCBDTEFTU19BUlJPV19ORVhULCBDTEFTU19BUlJPV19QUkVWLCBDTEFTU19BVVRPUExBWSwgQ0xBU1NfQ0xPTkUsIENMQVNTX0NPTlRBSU5FUiwgQ0xBU1NfSU5JVElBTElaRUQsIENMQVNTX0xJU1QsIENMQVNTX0xPQURJTkcsIENMQVNTX05FWFQsIENMQVNTX1BBR0lOQVRJT04sIENMQVNTX1BBR0lOQVRJT05fUEFHRSwgQ0xBU1NfUEFVU0UsIENMQVNTX1BMQVksIENMQVNTX1BSRVYsIENMQVNTX1BST0dSRVNTLCBDTEFTU19QUk9HUkVTU19CQVIsIENMQVNTX1JPT1QsIENMQVNTX1NMSURFLCBDTEFTU19TTElERVIsIENMQVNTX1NQSU5ORVIsIENMQVNTX1RSQUNLLCBDTEFTU19WSVNJQkxFLCBFVkVOVF9BQ1RJVkUsIEVWRU5UX0FSUk9XU19NT1VOVEVELCBFVkVOVF9BUlJPV1NfVVBEQVRFRCwgRVZFTlRfQVVUT1BMQVlfUEFVU0UsIEVWRU5UX0FVVE9QTEFZX1BMQVksIEVWRU5UX0FVVE9QTEFZX1BMQVlJTkcsIEVWRU5UX0NMSUNLLCBFVkVOVF9ERVNUUk9ZLCBFVkVOVF9EUkFHLCBFVkVOVF9EUkFHR0VELCBFVkVOVF9EUkFHR0lORywgRVZFTlRfSElEREVOLCBFVkVOVF9JTkFDVElWRSwgRVZFTlRfTEFaWUxPQURfTE9BREVELCBFVkVOVF9NT1VOVEVELCBFVkVOVF9NT1ZFLCBFVkVOVF9NT1ZFRCwgRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVELCBFVkVOVF9QQUdJTkFUSU9OX01PVU5URUQsIEVWRU5UX1BBR0lOQVRJT05fVVBEQVRFRCwgRVZFTlRfUkVBRFksIEVWRU5UX1JFRlJFU0gsIEVWRU5UX1JFUE9TSVRJT05FRCwgRVZFTlRfUkVTSVpFLCBFVkVOVF9SRVNJWkVELCBFVkVOVF9TQ1JPTEwsIEVWRU5UX1NDUk9MTEVELCBFVkVOVF9TSElGVEVELCBFVkVOVF9TTElERV9LRVlET1dOLCBFVkVOVF9VUERBVEVELCBFVkVOVF9WSVNJQkxFLCBFdmVudEJ1cywgRXZlbnRJbnRlcmZhY2UsIFJlcXVlc3RJbnRlcnZhbCwgU1RBVFVTX0NMQVNTRVMsIFNwbGlkZSwgU3BsaWRlUmVuZGVyZXIsIFN0YXRlLCBUaHJvdHRsZSwgU3BsaWRlIGFzIGRlZmF1bHQgfTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuQU9TPXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6e30sdD1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixuPU5hTixvPVwiW29iamVjdCBTeW1ib2xdXCIsaT0vXlxccyt8XFxzKyQvZyxhPS9eWy0rXTB4WzAtOWEtZl0rJC9pLHI9L14wYlswMV0rJC9pLGM9L14wb1swLTddKyQvaSxzPXBhcnNlSW50LHU9XCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuT2JqZWN0PT09T2JqZWN0JiZlLGQ9XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGw9dXx8ZHx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLGY9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxtPU1hdGgubWF4LHA9TWF0aC5taW4sYj1mdW5jdGlvbigpe3JldHVybiBsLkRhdGUubm93KCl9O2Z1bmN0aW9uIHYoZSxuLG8pe3ZhciBpLGEscixjLHMsdSxkPTAsbD0hMSxmPSExLHY9ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHQpO2Z1bmN0aW9uIHkodCl7dmFyIG49aSxvPWE7cmV0dXJuIGk9YT12b2lkIDAsZD10LGM9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIGgoZSl7dmFyIHQ9ZS11O3JldHVybiB2b2lkIDA9PT11fHx0Pj1ufHx0PDB8fGYmJmUtZD49cn1mdW5jdGlvbiBrKCl7dmFyIGU9YigpO2lmKGgoZSkpcmV0dXJuIHgoZSk7cz1zZXRUaW1lb3V0KGssZnVuY3Rpb24oZSl7dmFyIHQ9bi0oZS11KTtyZXR1cm4gZj9wKHQsci0oZS1kKSk6dH0oZSkpfWZ1bmN0aW9uIHgoZSl7cmV0dXJuIHM9dm9pZCAwLHYmJmk/eShlKTooaT1hPXZvaWQgMCxjKX1mdW5jdGlvbiBPKCl7dmFyIGU9YigpLHQ9aChlKTtpZihpPWFyZ3VtZW50cyxhPXRoaXMsdT1lLHQpe2lmKHZvaWQgMD09PXMpcmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBkPWUscz1zZXRUaW1lb3V0KGssbiksbD95KGUpOmN9KHUpO2lmKGYpcmV0dXJuIHM9c2V0VGltZW91dChrLG4pLHkodSl9cmV0dXJuIHZvaWQgMD09PXMmJihzPXNldFRpbWVvdXQoayxuKSksY31yZXR1cm4gbj13KG4pfHwwLGcobykmJihsPSEhby5sZWFkaW5nLHI9KGY9XCJtYXhXYWl0XCJpbiBvKT9tKHcoby5tYXhXYWl0KXx8MCxuKTpyLHY9XCJ0cmFpbGluZ1wiaW4gbz8hIW8udHJhaWxpbmc6diksTy5jYW5jZWw9ZnVuY3Rpb24oKXt2b2lkIDAhPT1zJiZjbGVhclRpbWVvdXQocyksZD0wLGk9dT1hPXM9dm9pZCAwfSxPLmZsdXNoPWZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PXM/Yzp4KGIoKSl9LE99ZnVuY3Rpb24gZyhlKXt2YXIgdD10eXBlb2YgZTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIHcoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoZnVuY3Rpb24oZSl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGV8fGZ1bmN0aW9uKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09dHlwZW9mIGV9KGUpJiZmLmNhbGwoZSk9PW99KGUpKXJldHVybiBuO2lmKGcoZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9Zyh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShpLFwiXCIpO3ZhciB1PXIudGVzdChlKTtyZXR1cm4gdXx8Yy50ZXN0KGUpP3MoZS5zbGljZSgyKSx1PzI6OCk6YS50ZXN0KGUpP246K2V9dmFyIHk9ZnVuY3Rpb24oZSxuLG8pe3ZhciBpPSEwLGE9ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHQpO3JldHVybiBnKG8pJiYoaT1cImxlYWRpbmdcImluIG8/ISFvLmxlYWRpbmc6aSxhPVwidHJhaWxpbmdcImluIG8/ISFvLnRyYWlsaW5nOmEpLHYoZSxuLHtsZWFkaW5nOmksbWF4V2FpdDpuLHRyYWlsaW5nOmF9KX0saD1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixrPU5hTix4PVwiW29iamVjdCBTeW1ib2xdXCIsTz0vXlxccyt8XFxzKyQvZyxqPS9eWy0rXTB4WzAtOWEtZl0rJC9pLEU9L14wYlswMV0rJC9pLE49L14wb1swLTddKyQvaSx6PXBhcnNlSW50LEM9XCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuT2JqZWN0PT09T2JqZWN0JiZlLEE9XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLHE9Q3x8QXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLEw9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxUPU1hdGgubWF4LE09TWF0aC5taW4sUz1mdW5jdGlvbigpe3JldHVybiBxLkRhdGUubm93KCl9O2Z1bmN0aW9uIEQoZSl7dmFyIHQ9dHlwZW9mIGU7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiBIKGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKGZ1bmN0aW9uKGUpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlfHxmdW5jdGlvbihlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PXR5cGVvZiBlfShlKSYmTC5jYWxsKGUpPT14fShlKSlyZXR1cm4gaztpZihEKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPUQodCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UoTyxcIlwiKTt2YXIgbj1FLnRlc3QoZSk7cmV0dXJuIG58fE4udGVzdChlKT96KGUuc2xpY2UoMiksbj8yOjgpOmoudGVzdChlKT9rOitlfXZhciAkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgbyxpLGEscixjLHMsdT0wLGQ9ITEsbD0hMSxmPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihoKTtmdW5jdGlvbiBtKHQpe3ZhciBuPW8sYT1pO3JldHVybiBvPWk9dm9pZCAwLHU9dCxyPWUuYXBwbHkoYSxuKX1mdW5jdGlvbiBwKGUpe3ZhciBuPWUtcztyZXR1cm4gdm9pZCAwPT09c3x8bj49dHx8bjwwfHxsJiZlLXU+PWF9ZnVuY3Rpb24gYigpe3ZhciBlPVMoKTtpZihwKGUpKXJldHVybiB2KGUpO2M9c2V0VGltZW91dChiLGZ1bmN0aW9uKGUpe3ZhciBuPXQtKGUtcyk7cmV0dXJuIGw/TShuLGEtKGUtdSkpOm59KGUpKX1mdW5jdGlvbiB2KGUpe3JldHVybiBjPXZvaWQgMCxmJiZvP20oZSk6KG89aT12b2lkIDAscil9ZnVuY3Rpb24gZygpe3ZhciBlPVMoKSxuPXAoZSk7aWYobz1hcmd1bWVudHMsaT10aGlzLHM9ZSxuKXtpZih2b2lkIDA9PT1jKXJldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdT1lLGM9c2V0VGltZW91dChiLHQpLGQ/bShlKTpyfShzKTtpZihsKXJldHVybiBjPXNldFRpbWVvdXQoYix0KSxtKHMpfXJldHVybiB2b2lkIDA9PT1jJiYoYz1zZXRUaW1lb3V0KGIsdCkpLHJ9cmV0dXJuIHQ9SCh0KXx8MCxEKG4pJiYoZD0hIW4ubGVhZGluZyxhPShsPVwibWF4V2FpdFwiaW4gbik/VChIKG4ubWF4V2FpdCl8fDAsdCk6YSxmPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOmYpLGcuY2FuY2VsPWZ1bmN0aW9uKCl7dm9pZCAwIT09YyYmY2xlYXJUaW1lb3V0KGMpLHU9MCxvPXM9aT1jPXZvaWQgMH0sZy5mbHVzaD1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1jP3I6dihTKCkpfSxnfSxXPWZ1bmN0aW9uKCl7fTtmdW5jdGlvbiBQKGUpe2UmJmUuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLmFkZGVkTm9kZXMpLG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5yZW1vdmVkTm9kZXMpO2lmKGZ1bmN0aW9uIGUodCl7dmFyIG49dm9pZCAwLG89dm9pZCAwO2ZvcihuPTA7bjx0Lmxlbmd0aDtuKz0xKXtpZigobz10W25dKS5kYXRhc2V0JiZvLmRhdGFzZXQuYW9zKXJldHVybiEwO2lmKG8uY2hpbGRyZW4mJmUoby5jaGlsZHJlbikpcmV0dXJuITB9cmV0dXJuITF9KHQuY29uY2F0KG4pKSlyZXR1cm4gVygpfSl9ZnVuY3Rpb24gWSgpe3JldHVybiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcnx8d2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyfXZhciBfPXtpc1N1cHBvcnRlZDpmdW5jdGlvbigpe3JldHVybiEhWSgpfSxyZWFkeTpmdW5jdGlvbihlLHQpe3ZhciBuPXdpbmRvdy5kb2N1bWVudCxvPW5ldyhZKCkpKFApO1c9dCxvLm9ic2VydmUobi5kb2N1bWVudEVsZW1lbnQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwLHJlbW92ZWROb2RlczohMH0pfX0sQj1mdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9LEY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxJPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LEs9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLEc9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2ksSj0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2ksUT0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaTtmdW5jdGlvbiBSKCl7cmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYXx8XCJcIn12YXIgVT1uZXcoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7Qih0aGlzLGUpfXJldHVybiBGKGUsW3trZXk6XCJwaG9uZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9UigpO3JldHVybiEoIUsudGVzdChlKSYmIUcudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwibW9iaWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1SKCk7cmV0dXJuISghSi50ZXN0KGUpJiYhUS50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJ0YWJsZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vYmlsZSgpJiYhdGhpcy5waG9uZSgpfX0se2tleTpcImllMTFcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwiLW1zLXNjcm9sbC1saW1pdFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlJiZcIi1tcy1pbWUtYWxpZ25cImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZX19XSksZX0oKSksVj1mdW5jdGlvbihlLHQpe3ZhciBuPXZvaWQgMDtyZXR1cm4gVS5pZTExKCk/KG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KGUsITAsITAse2RldGFpbDp0fSk6bj1uZXcgQ3VzdG9tRXZlbnQoZSx7ZGV0YWlsOnR9KSxkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG4pfSxYPWZ1bmN0aW9uKGUpe3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSx0KXt2YXIgbj1lLm9wdGlvbnMsbz1lLnBvc2l0aW9uLGk9ZS5ub2RlLGE9KGUuZGF0YSxmdW5jdGlvbigpe2UuYW5pbWF0ZWQmJihmdW5jdGlvbihlLHQpe3QmJnQuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZS5jbGFzc0xpc3QucmVtb3ZlKHQpfSl9KGksbi5hbmltYXRlZENsYXNzTmFtZXMpLFYoXCJhb3M6b3V0XCIsaSksZS5vcHRpb25zLmlkJiZWKFwiYW9zOmluOlwiK2Uub3B0aW9ucy5pZCxpKSxlLmFuaW1hdGVkPSExKX0pO24ubWlycm9yJiZ0Pj1vLm91dCYmIW4ub25jZT9hKCk6dD49by5pbj9lLmFuaW1hdGVkfHwoZnVuY3Rpb24oZSx0KXt0JiZ0LmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0KX0pfShpLG4uYW5pbWF0ZWRDbGFzc05hbWVzKSxWKFwiYW9zOmluXCIsaSksZS5vcHRpb25zLmlkJiZWKFwiYW9zOmluOlwiK2Uub3B0aW9ucy5pZCxpKSxlLmFuaW1hdGVkPSEwKTplLmFuaW1hdGVkJiYhbi5vbmNlJiZhKCl9KGUsd2luZG93LnBhZ2VZT2Zmc2V0KX0pfSxaPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtlJiYhaXNOYU4oZS5vZmZzZXRMZWZ0KSYmIWlzTmFOKGUub2Zmc2V0VG9wKTspdCs9ZS5vZmZzZXRMZWZ0LShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsTGVmdDowKSxuKz1lLm9mZnNldFRvcC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbFRvcDowKSxlPWUub2Zmc2V0UGFyZW50O3JldHVybnt0b3A6bixsZWZ0OnR9fSxlZT1mdW5jdGlvbihlLHQsbil7dmFyIG89ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1cIit0KTtpZih2b2lkIDAhPT1vKXtpZihcInRydWVcIj09PW8pcmV0dXJuITA7aWYoXCJmYWxzZVwiPT09bylyZXR1cm4hMX1yZXR1cm4gb3x8bn0sdGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUsbil7dmFyIG89ZWUoZS5ub2RlLFwibWlycm9yXCIsdC5taXJyb3IpLGk9ZWUoZS5ub2RlLFwib25jZVwiLHQub25jZSksYT1lZShlLm5vZGUsXCJpZFwiKSxyPXQudXNlQ2xhc3NOYW1lcyYmZS5ub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zXCIpLGM9W3QuYW5pbWF0ZWRDbGFzc05hbWVdLmNvbmNhdChyP3Iuc3BsaXQoXCIgXCIpOltdKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV9KTt0LmluaXRDbGFzc05hbWUmJmUubm9kZS5jbGFzc0xpc3QuYWRkKHQuaW5pdENsYXNzTmFtZSksZS5wb3NpdGlvbj17aW46ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPXdpbmRvdy5pbm5lckhlaWdodCxpPWVlKGUsXCJhbmNob3JcIiksYT1lZShlLFwiYW5jaG9yLXBsYWNlbWVudFwiKSxyPU51bWJlcihlZShlLFwib2Zmc2V0XCIsYT8wOnQpKSxjPWF8fG4scz1lO2kmJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaSkmJihzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaSlbMF0pO3ZhciB1PVoocykudG9wLW87c3dpdGNoKGMpe2Nhc2VcInRvcC1ib3R0b21cIjpicmVhaztjYXNlXCJjZW50ZXItYm90dG9tXCI6dSs9cy5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJib3R0b20tYm90dG9tXCI6dSs9cy5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwidG9wLWNlbnRlclwiOnUrPW8vMjticmVhaztjYXNlXCJjZW50ZXItY2VudGVyXCI6dSs9by8yK3Mub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwiYm90dG9tLWNlbnRlclwiOnUrPW8vMitzLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJ0b3AtdG9wXCI6dSs9bzticmVhaztjYXNlXCJib3R0b20tdG9wXCI6dSs9bytzLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJjZW50ZXItdG9wXCI6dSs9bytzLm9mZnNldEhlaWdodC8yfXJldHVybiB1K3J9KGUubm9kZSx0Lm9mZnNldCx0LmFuY2hvclBsYWNlbWVudCksb3V0Om8mJmZ1bmN0aW9uKGUsdCl7d2luZG93LmlubmVySGVpZ2h0O3ZhciBuPWVlKGUsXCJhbmNob3JcIiksbz1lZShlLFwib2Zmc2V0XCIsdCksaT1lO3JldHVybiBuJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG4pJiYoaT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG4pWzBdKSxaKGkpLnRvcCtpLm9mZnNldEhlaWdodC1vfShlLm5vZGUsdC5vZmZzZXQpfSxlLm9wdGlvbnM9e29uY2U6aSxtaXJyb3I6byxhbmltYXRlZENsYXNzTmFtZXM6YyxpZDphfX0pLGV9LG5lPWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFvc11cIik7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlLGZ1bmN0aW9uKGUpe3JldHVybntub2RlOmV9fSl9LG9lPVtdLGllPSExLGFlPXtvZmZzZXQ6MTIwLGRlbGF5OjAsZWFzaW5nOlwiZWFzZVwiLGR1cmF0aW9uOjQwMCxkaXNhYmxlOiExLG9uY2U6ITEsbWlycm9yOiExLGFuY2hvclBsYWNlbWVudDpcInRvcC1ib3R0b21cIixzdGFydEV2ZW50OlwiRE9NQ29udGVudExvYWRlZFwiLGFuaW1hdGVkQ2xhc3NOYW1lOlwiYW9zLWFuaW1hdGVcIixpbml0Q2xhc3NOYW1lOlwiYW9zLWluaXRcIix1c2VDbGFzc05hbWVzOiExLGRpc2FibGVNdXRhdGlvbk9ic2VydmVyOiExLHRocm90dGxlRGVsYXk6OTksZGVib3VuY2VEZWxheTo1MH0scmU9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2J9LGNlPWZ1bmN0aW9uKCl7YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXSYmKGllPSEwKSxpZSYmKG9lPXRlKG9lLGFlKSxYKG9lKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHkoZnVuY3Rpb24oKXtYKG9lLGFlLm9uY2UpfSxhZS50aHJvdHRsZURlbGF5KSkpfSxzZT1mdW5jdGlvbigpe2lmKG9lPW5lKCksZGUoYWUuZGlzYWJsZSl8fHJlKCkpcmV0dXJuIHVlKCk7Y2UoKX0sdWU9ZnVuY3Rpb24oKXtvZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7ZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiKSxhZS5pbml0Q2xhc3NOYW1lJiZlLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShhZS5pbml0Q2xhc3NOYW1lKSxhZS5hbmltYXRlZENsYXNzTmFtZSYmZS5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoYWUuYW5pbWF0ZWRDbGFzc05hbWUpfSl9LGRlPWZ1bmN0aW9uKGUpe3JldHVybiEwPT09ZXx8XCJtb2JpbGVcIj09PWUmJlUubW9iaWxlKCl8fFwicGhvbmVcIj09PWUmJlUucGhvbmUoKXx8XCJ0YWJsZXRcIj09PWUmJlUudGFibGV0KCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJiEwPT09ZSgpfTtyZXR1cm57aW5pdDpmdW5jdGlvbihlKXtyZXR1cm4gYWU9SShhZSxlKSxvZT1uZSgpLGFlLmRpc2FibGVNdXRhdGlvbk9ic2VydmVyfHxfLmlzU3VwcG9ydGVkKCl8fChjb25zb2xlLmluZm8oJ1xcbiAgICAgIGFvczogTXV0YXRpb25PYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgYnJvd3NlcixcXG4gICAgICBjb2RlIG11dGF0aW9ucyBvYnNlcnZpbmcgaGFzIGJlZW4gZGlzYWJsZWQuXFxuICAgICAgWW91IG1heSBoYXZlIHRvIGNhbGwgXCJyZWZyZXNoSGFyZCgpXCIgYnkgeW91cnNlbGYuXFxuICAgICcpLGFlLmRpc2FibGVNdXRhdGlvbk9ic2VydmVyPSEwKSxhZS5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcnx8Xy5yZWFkeShcIltkYXRhLWFvc11cIixzZSksZGUoYWUuZGlzYWJsZSl8fHJlKCk/dWUoKTooZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIsYWUuZWFzaW5nKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiLGFlLmR1cmF0aW9uKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiLGFlLmRlbGF5KSwtMT09PVtcIkRPTUNvbnRlbnRMb2FkZWRcIixcImxvYWRcIl0uaW5kZXhPZihhZS5zdGFydEV2ZW50KT9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGFlLnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtjZSghMCl9KTp3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbigpe2NlKCEwKX0pLFwiRE9NQ29udGVudExvYWRlZFwiPT09YWUuc3RhcnRFdmVudCYmW1wiY29tcGxldGVcIixcImludGVyYWN0aXZlXCJdLmluZGV4T2YoZG9jdW1lbnQucmVhZHlTdGF0ZSk+LTEmJmNlKCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCQoY2UsYWUuZGVib3VuY2VEZWxheSwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwkKGNlLGFlLmRlYm91bmNlRGVsYXksITApKSxvZSl9LHJlZnJlc2g6Y2UscmVmcmVzaEhhcmQ6c2V9fSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBrZXlmcmFtZXMgc3BsaWRlLWxvYWRpbmd7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwKX10b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19LnNwbGlkZS0tZHJhZ2dhYmxlPi5zcGxpZGVfX3NsaWRlcj4uc3BsaWRlX190cmFjaywuc3BsaWRlLS1kcmFnZ2FibGU+LnNwbGlkZV9fdHJhY2t7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnNwbGlkZS0tZmFkZT4uc3BsaWRlX19zbGlkZXI+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdCwuc3BsaWRlLS1mYWRlPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3R7ZGlzcGxheTpibG9ja30uc3BsaWRlLS1mYWRlPi5zcGxpZGVfX3NsaWRlcj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0Pi5zcGxpZGVfX3NsaWRlLC5zcGxpZGUtLWZhZGU+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdD4uc3BsaWRlX19zbGlkZXtsZWZ0OjA7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3otaW5kZXg6MH0uc3BsaWRlLS1mYWRlPi5zcGxpZGVfX3NsaWRlcj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0Pi5zcGxpZGVfX3NsaWRlLmlzLWFjdGl2ZSwuc3BsaWRlLS1mYWRlPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3Q+LnNwbGlkZV9fc2xpZGUuaXMtYWN0aXZle29wYWNpdHk6MTtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjF9LnNwbGlkZS0tcnRse2RpcmVjdGlvbjpydGx9LnNwbGlkZS0tdHRiLmlzLWFjdGl2ZT4uc3BsaWRlX19zbGlkZXI+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdCwuc3BsaWRlLS10dGIuaXMtYWN0aXZlPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3R7ZGlzcGxheTpibG9ja30uc3BsaWRlX19jb250YWluZXJ7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlfS5zcGxpZGVfX2xpc3R7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MTAwJTttYXJnaW46MCFpbXBvcnRhbnQ7cGFkZGluZzowIWltcG9ydGFudDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnNwbGlkZS5pcy1pbml0aWFsaXplZDpub3QoLmlzLWFjdGl2ZSkgLnNwbGlkZV9fbGlzdHtkaXNwbGF5OmJsb2NrfS5zcGxpZGVfX3BhZ2luYXRpb257LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MDtwb2ludGVyLWV2ZW50czpub25lfS5zcGxpZGVfX3BhZ2luYXRpb24gbGl7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MTtsaXN0LXN0eWxlLXR5cGU6bm9uZTttYXJnaW46MDtwb2ludGVyLWV2ZW50czphdXRvfS5zcGxpZGVfX3Byb2dyZXNzX19iYXJ7d2lkdGg6MH0uc3BsaWRle291dGxpbmU6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt2aXNpYmlsaXR5OmhpZGRlbn0uc3BsaWRlLmlzLWluaXRpYWxpemVkLC5zcGxpZGUuaXMtcmVuZGVyZWR7dmlzaWJpbGl0eTp2aXNpYmxlfS5zcGxpZGVfX3NsaWRley13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47Ym94LXNpemluZzpib3JkZXItYm94Oy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDtsaXN0LXN0eWxlLXR5cGU6bm9uZSFpbXBvcnRhbnQ7bWFyZ2luOjA7b3V0bGluZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlfS5zcGxpZGVfX3NsaWRlIGltZ3t2ZXJ0aWNhbC1hbGlnbjpib3R0b219LnNwbGlkZV9fc2xpZGVye3Bvc2l0aW9uOnJlbGF0aXZlfS5zcGxpZGVfX3NwaW5uZXJ7YW5pbWF0aW9uOnNwbGlkZS1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZTtib3JkZXI6MnB4IHNvbGlkICM5OTk7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czo1MCU7Ym90dG9tOjA7Y29udGFpbjpzdHJpY3Q7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjIwcHg7bGVmdDowO21hcmdpbjphdXRvO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7d2lkdGg6MjBweH0uc3BsaWRlX190cmFja3tvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDowfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BzcGxpZGVqcy9zcGxpZGUvZGlzdC9jc3Mvc3BsaWRlLWNvcmUubWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBMEIsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDLENBQUMsb0ZBQW9GLHdCQUF3QixDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLHNHQUFzRyxhQUFhLENBQUMsb0lBQW9JLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyx3SkFBd0osU0FBUyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxhQUFhLGFBQWEsQ0FBQyx3SEFBd0gsYUFBYSxDQUFDLG1CQUFtQixxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLGtDQUFrQyxDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMscURBQXFELGFBQWEsQ0FBQyxvQkFBb0IscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLE9BQU8sQ0FBQyxRQUFRLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQywyQ0FBMkMsa0JBQWtCLENBQUMsZUFBZSxrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIscUJBQXFCLENBQUMsZ0JBQWdCLGlCQUFpQixDQUFDLGlCQUFpQiwyQ0FBMkMsQ0FBQyxxQkFBcUIsQ0FBQyw2QkFBNkIsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGVBQWUsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFNBQVNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyBzcGxpZGUtbG9hZGluZ3swJXt0cmFuc2Zvcm06cm90YXRlKDApfXRve3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX0uc3BsaWRlLS1kcmFnZ2FibGU+LnNwbGlkZV9fc2xpZGVyPi5zcGxpZGVfX3RyYWNrLC5zcGxpZGUtLWRyYWdnYWJsZT4uc3BsaWRlX190cmFja3std2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3BsaWRlLS1mYWRlPi5zcGxpZGVfX3NsaWRlcj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0LC5zcGxpZGUtLWZhZGU+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdHtkaXNwbGF5OmJsb2NrfS5zcGxpZGUtLWZhZGU+LnNwbGlkZV9fc2xpZGVyPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3Q+LnNwbGlkZV9fc2xpZGUsLnNwbGlkZS0tZmFkZT4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0Pi5zcGxpZGVfX3NsaWRle2xlZnQ6MDtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7ei1pbmRleDowfS5zcGxpZGUtLWZhZGU+LnNwbGlkZV9fc2xpZGVyPi5zcGxpZGVfX3RyYWNrPi5zcGxpZGVfX2xpc3Q+LnNwbGlkZV9fc2xpZGUuaXMtYWN0aXZlLC5zcGxpZGUtLWZhZGU+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdD4uc3BsaWRlX19zbGlkZS5pcy1hY3RpdmV7b3BhY2l0eToxO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0uc3BsaWRlLS1ydGx7ZGlyZWN0aW9uOnJ0bH0uc3BsaWRlLS10dGIuaXMtYWN0aXZlPi5zcGxpZGVfX3NsaWRlcj4uc3BsaWRlX190cmFjaz4uc3BsaWRlX19saXN0LC5zcGxpZGUtLXR0Yi5pcy1hY3RpdmU+LnNwbGlkZV9fdHJhY2s+LnNwbGlkZV9fbGlzdHtkaXNwbGF5OmJsb2NrfS5zcGxpZGVfX2NvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmV9LnNwbGlkZV9fbGlzdHstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2hlaWdodDoxMDAlO21hcmdpbjowIWltcG9ydGFudDtwYWRkaW5nOjAhaW1wb3J0YW50O3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZH0uc3BsaWRlLmlzLWluaXRpYWxpemVkOm5vdCguaXMtYWN0aXZlKSAuc3BsaWRlX19saXN0e2Rpc3BsYXk6YmxvY2t9LnNwbGlkZV9fcGFnaW5hdGlvbnstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjowO3BvaW50ZXItZXZlbnRzOm5vbmV9LnNwbGlkZV9fcGFnaW5hdGlvbiBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoxO2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbjowO3BvaW50ZXItZXZlbnRzOmF1dG99LnNwbGlkZV9fcHJvZ3Jlc3NfX2Jhcnt3aWR0aDowfS5zcGxpZGV7b3V0bGluZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO3Zpc2liaWxpdHk6aGlkZGVufS5zcGxpZGUuaXMtaW5pdGlhbGl6ZWQsLnNwbGlkZS5pcy1yZW5kZXJlZHt2aXNpYmlsaXR5OnZpc2libGV9LnNwbGlkZV9fc2xpZGV7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO2xpc3Qtc3R5bGUtdHlwZTpub25lIWltcG9ydGFudDttYXJnaW46MDtvdXRsaW5lOm5vbmU7cG9zaXRpb246cmVsYXRpdmV9LnNwbGlkZV9fc2xpZGUgaW1ne3ZlcnRpY2FsLWFsaWduOmJvdHRvbX0uc3BsaWRlX19zbGlkZXJ7cG9zaXRpb246cmVsYXRpdmV9LnNwbGlkZV9fc3Bpbm5lcnthbmltYXRpb246c3BsaWRlLWxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlO2JvcmRlcjoycHggc29saWQgIzk5OTtib3JkZXItbGVmdC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTtib3R0b206MDtjb250YWluOnN0cmljdDtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MjBweDtsZWZ0OjA7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDt3aWR0aDoyMHB4fS5zcGxpZGVfX3RyYWNre292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCI1MFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDUwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTBtczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCI1MFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDUwbXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogNTBtczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjFzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4xcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxNTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjE1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMTVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjE1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4ycztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMnM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyNTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjI1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4yNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjI1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjMwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjMwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMzAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMzAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMzAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMzAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4zcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIzNTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIzNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjM1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMzVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMzUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMzUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMzUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMzUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4zNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjM1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjQwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjQwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjRzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNDAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNDAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNDAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNDAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC40cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuNHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCI0NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI0NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjQ1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNDVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNDUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNDUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNDUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNDUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC40NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjQ1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjUwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjUwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNTAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNTAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNTAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNTAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuNXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCI1NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI1NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjU1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNTVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNTUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNTUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNTUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNTUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC41NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjU1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjYwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjYwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNnM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjZzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNjAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNjAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNjAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNjAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC42cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuNnM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCI2NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI2NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjY1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNjVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNjUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNjUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNjUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNjUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC42NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjY1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjcwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjcwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuN3M7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjdzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNzAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNzAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNzAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNzAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC43cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuN3M7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCI3NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI3NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjc1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNzVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNzUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNzUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiNzUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiNzUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC43NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjc1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjgwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjgwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuOHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjhzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiODAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiODAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiODAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiODAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC44cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCI4NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI4NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjg1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuODVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiODUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiODUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiODUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiODUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC44NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjg1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjkwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjkwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuOXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjlzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiOTAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiOTAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiOTAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiOTAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC45cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuOXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCI5NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCI5NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjk1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuOTVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiOTUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiOTUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiOTUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiOTUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC45NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogLjk1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTAwMFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjEwMDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMDAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTAwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEwNTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxMDUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuMDVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuMDVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTA1MFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjEwNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMDUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTA1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjA1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjA1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjExMDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxMTAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuMXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4xczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjExMDBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMTAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTEwMFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjExMDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMS4xcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjFzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTE1MFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjExNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4xNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4xNXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMTUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTE1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjExNTBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMTUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDEuMTVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMTVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTIwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEyMDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS4ycztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjJzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTIwMFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjEyMDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMjAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTIwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMnM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxMjUwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTI1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjI1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjI1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjEyNTBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMjUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTI1MFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjEyNTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMS4yNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4yNXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxMzAwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTMwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuM3M7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMzAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTMwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjEzMDBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxMzAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDEuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4zczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjEzNTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxMzUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuMzVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuMzVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTM1MFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjEzNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxMzUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTM1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjM1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjM1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE0MDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxNDAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS40czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE0MDBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNDAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTQwMFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjE0MDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMS40cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjRzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTQ1MFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE0NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS40NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS40NXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNDUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTQ1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE0NTBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNDUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDEuNDVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNDVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTUwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTUwMFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjE1MDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNTAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTUwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxNTUwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTU1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjU1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjU1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE1NTBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNTUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTU1MFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjE1NTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMS41NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS41NXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxNjAwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTYwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjZzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNnM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNjAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTYwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE2MDBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNjAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDEuNnM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS42czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE2NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxNjUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNjVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuNjVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTY1MFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjE2NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNjUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTY1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjY1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjY1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE3MDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxNzAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuN3M7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS43czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE3MDBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNzAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTcwMFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjE3MDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMS43cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjdzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTc1MFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE3NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS43NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS43NXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxNzUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTc1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE3NTBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxNzUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDEuNzVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuNzVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMTgwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE4MDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS44cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjhzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTgwMFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjE4MDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxODAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTgwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjhzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuOHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxODUwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTg1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjg1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjg1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE4NTBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxODUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTg1MFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjE4NTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMS44NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS44NXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIxOTAwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMTkwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjlzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuOXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxOTAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTkwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjE5MDBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIxOTAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDEuOXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS45czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjE5NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIxOTUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuOTVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEuOTVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMTk1MFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjE5NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIxOTUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMTk1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjk1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjk1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIwMDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyMDAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjAwMFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjIwMDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMDAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjAwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAycztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIwNTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyMDUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIuMDVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIuMDVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjA1MFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjIwNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMDUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjA1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAyLjA1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyLjA1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIxMDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyMTAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIuMXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMi4xczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjIxMDBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMTAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjEwMFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjIxMDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMi4xcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyLjFzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjE1MFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIxNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMi4xNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMi4xNXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMTUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjE1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjIxNTBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMTUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDIuMTVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDIuMTVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjIwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIyMDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMi4ycztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjJzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjIwMFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjIyMDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMjAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjIwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAyLjJzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDIuMnM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyMjUwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjI1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjI1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjI1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjIyNTBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMjUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjI1MFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjIyNTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMi4yNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMi4yNXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyMzAwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjMwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIuM3M7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMzAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjMwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjIzMDBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyMzAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDIuM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMi4zczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjIzNTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyMzUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIuMzVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIuMzVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjM1MFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjIzNTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyMzUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjM1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAyLjM1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyLjM1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI0MDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyNDAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIuNHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMi40czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI0MDBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNDAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjQwMFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjI0MDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMi40cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyLjRzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjQ1MFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI0NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMi40NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMi40NXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNDUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjQ1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI0NTBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNDUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDIuNDVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDIuNDVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjUwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI1MDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMi41cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjUwMFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjI1MDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNTAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjUwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAyLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDIuNXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyNTUwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjU1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjU1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjU1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI1NTBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNTUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjU1MFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjI1NTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMi41NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMi41NXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyNjAwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjYwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjZzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIuNnM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNjAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjYwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI2MDBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNjAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDIuNnM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMi42czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI2NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyNjUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIuNjVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIuNjVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjY1MFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjI2NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNjUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjY1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAyLjY1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyLjY1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI3MDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyNzAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIuN3M7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMi43czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI3MDBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNzAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjcwMFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjI3MDBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMi43cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyLjdzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjc1MFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI3NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMi43NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMi43NXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyNzUwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjc1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI3NTBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyNzUwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDIuNzVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDIuNzVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVwiMjgwMFwiXSwgYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI4MDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMi44cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjhzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjgwMFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjI4MDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyODAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjgwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAyLjhzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDIuOHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyODUwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjg1MFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjg1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjg1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI4NTBcIl0sIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyODUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjg1MFwiXS5hb3MtYW5pbWF0ZSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjI4NTBcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMi44NXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMi44NXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XCIyOTAwXCJdLCBib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVwiMjkwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAyLjlzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIuOXM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyOTAwXCJdLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjkwMFwiXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwczsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cIjI5MDBcIl0uYW9zLWFuaW1hdGUsIGJvZHlbZGF0YS1hb3MtZGVsYXk9XCIyOTAwXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGUge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDIuOXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMi45czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjI5NTBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIyOTUwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDIuOTVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIuOTVzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMjk1MFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjI5NTBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIyOTUwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMjk1MFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAyLjk1cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAyLjk1czsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cIjMwMDBcIl0sIGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XCIzMDAwXCJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDNzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDNzOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVwiMzAwMFwiXSwgYm9keVtkYXRhLWFvcy1kZWxheT1cIjMwMDBcIl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XCIzMDAwXCJdLmFvcy1hbmltYXRlLCBib2R5W2RhdGEtYW9zLWRlbGF5PVwiMzAwMFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAzcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAzczsgfVxuXG5bZGF0YS1hb3NdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1saW5lYXJdLCBib2R5W2RhdGEtYW9zLWVhc2luZz1saW5lYXJdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4yNSwgMC43NSwgMC43NSk7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjI1LCAwLjc1LCAwLjc1KTsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZV0sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2VdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLWluXSwgYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbl0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0XSwgYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXRdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0XSwgYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXRdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tYmFja10sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tYmFja10gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjYsIC0wLjI4LCAwLjczNSwgMC4wNDUpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42LCAtMC4yOCwgMC43MzUsIDAuMDQ1KTsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXQtYmFja10sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LWJhY2tdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtYmFja10sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LWJhY2tdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tc2luZV0sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tc2luZV0gW2RhdGEtYW9zXSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KTsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXQtc2luZV0sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LXNpbmVdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LXNpbmVdLCBib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLW91dC1zaW5lXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1KTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1KTsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1xdWFkXSwgYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1xdWFkXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKTsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXQtcXVhZF0sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LXF1YWRdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtcXVhZF0sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LXF1YWRdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KTsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1jdWJpY10sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tY3ViaWNdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLW91dC1jdWJpY10sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LWN1YmljXSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LWN1YmljXSwgYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtY3ViaWNdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KTsgfVxuXG5bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1xdWFydF0sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tcXVhcnRdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpOyB9XG5cbltkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLW91dC1xdWFydF0sIGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LXF1YXJ0XSBbZGF0YS1hb3NdIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7IH1cblxuW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LXF1YXJ0XSwgYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtcXVhcnRdIFtkYXRhLWFvc10ge1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSk7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KTsgfVxuXG5AbWVkaWEgc2NyZWVuIHtcbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3NePWZhZGVdW2RhdGEtYW9zXj1mYWRlXSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LHRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvc149ZmFkZV1bZGF0YS1hb3NePWZhZGVdLmFvcy1hbmltYXRlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLXVwXSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMHB4LCAwKTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLWRvd25dIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDBweCwgMCk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmFkZS1yaWdodF0ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCAwLCAwKTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLWxlZnRdIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIDAsIDApOyB9XG4gIGh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZhZGUtdXAtcmlnaHRdIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMHB4LCAxMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwcHgsIDEwMHB4LCAwKTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLXVwLWxlZnRdIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIDEwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMHB4LCAxMDBweCwgMCk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmFkZS1kb3duLXJpZ2h0XSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgLTEwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgLTEwMHB4LCAwKTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLWRvd24tbGVmdF0ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDBweCwgLTEwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMHB4LCAtMTAwcHgsIDApOyB9XG4gIGh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zXj16b29tXVtkYXRhLWFvc149em9vbV0ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSx0cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSx0cmFuc2Zvcm0sLXdlYmtpdC10cmFuc2Zvcm07IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3NePXpvb21dW2RhdGEtYW9zXj16b29tXS5hb3MtYW5pbWF0ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9em9vbS1pbl0ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLWluLXVwXSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMHB4LCAwKSBzY2FsZSgwLjYpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwcHgsIDApIHNjYWxlKDAuNik7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9em9vbS1pbi1kb3duXSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDBweCwgMCkgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDBweCwgMCkgc2NhbGUoMC42KTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLWluLXJpZ2h0XSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgMCwgMCkgc2NhbGUoMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgMCwgMCkgc2NhbGUoMC42KTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLWluLWxlZnRdIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIDAsIDApIHNjYWxlKDAuNik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDBweCwgMCwgMCkgc2NhbGUoMC42KTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLW91dF0ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLW91dC11cF0ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDBweCwgMCkgc2NhbGUoMS4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMHB4LCAwKSBzY2FsZSgxLjIpOyB9XG4gIGh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20tb3V0LWRvd25dIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMHB4LCAwKSBzY2FsZSgxLjIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMHB4LCAwKSBzY2FsZSgxLjIpOyB9XG4gIGh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20tb3V0LXJpZ2h0XSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgMCwgMCkgc2NhbGUoMS4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBweCwgMCwgMCkgc2NhbGUoMS4yKTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLW91dC1sZWZ0XSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMHB4LCAwLCAwKSBzY2FsZSgxLjIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwcHgsIDAsIDApIHNjYWxlKDEuMik7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3NePXNsaWRlXVtkYXRhLWFvc149c2xpZGVdIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3NePXNsaWRlXVtkYXRhLWFvc149c2xpZGVdLmFvcy1hbmltYXRlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1zbGlkZS11cF0ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApOyB9XG4gIGh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXNsaWRlLWRvd25dIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApOyB9XG4gIGh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXNsaWRlLXJpZ2h0XSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1zbGlkZS1sZWZ0XSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3NePWZsaXBdW2RhdGEtYW9zXj1mbGlwXSB7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtOyB9XG4gIGh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZsaXAtbGVmdF0ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVkoLTEwMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVkoLTEwMGRlZyk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmxpcC1sZWZ0XS5hb3MtYW5pbWF0ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgwKTsgfVxuICBodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mbGlwLXJpZ2h0XSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgxMDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVZKDEwMGRlZyk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmxpcC1yaWdodF0uYW9zLWFuaW1hdGUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVkoMCk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmxpcC11cF0ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVgoLTEwMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVgoLTEwMGRlZyk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmxpcC11cF0uYW9zLWFuaW1hdGUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVgoMCk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmxpcC1kb3duXSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgxMDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVYKDEwMGRlZyk7IH1cbiAgaHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmxpcC1kb3duXS5hb3MtYW5pbWF0ZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgwKTsgfSB9XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9hb3MvZGlzdC9hb3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQXFGLGlDQUF3QjtVQUF4Qix5QkFBd0IsRUFBQTs7QUFHN0c7RUFINkwsNEJBQW1CO1VBQW5CLG9CQUFtQixFQUFBOztBQU1oTjtFQU53VCw4QkFBcUI7VUFBckIsc0JBQXFCLEVBQUE7O0FBUzdVO0VBVHFhLGdDQUF1QjtVQUF2Qix3QkFBdUIsRUFBQTs7QUFZNWI7RUFaOGdCLDRCQUFtQjtVQUFuQixvQkFBbUIsRUFBQTs7QUFlamlCO0VBZjJvQiw2QkFBb0I7VUFBcEIscUJBQW9CLEVBQUE7O0FBa0IvcEI7RUFsQnV2QixpQ0FBd0I7VUFBeEIseUJBQXdCLEVBQUE7O0FBcUIvd0I7RUFyQmkyQiw0QkFBbUI7VUFBbkIsb0JBQW1CLEVBQUE7O0FBd0JwM0I7RUF4Qjg5Qiw4QkFBcUI7VUFBckIsc0JBQXFCLEVBQUE7O0FBMkJuL0I7RUEzQjJrQyxnQ0FBdUI7VUFBdkIsd0JBQXVCLEVBQUE7O0FBOEJsbUM7RUE5Qm9yQyw0QkFBbUI7VUFB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RDtJQUFDLCtDQUE0QyxFQUFBO0VBQUM7SUFBMEMsc0RBQW1EO0lBQUMsOENBQTJDLEVBQUE7RUFBQztJQUFvRCxzQ0FBcUM7SUFBQyw4Q0FBNkI7SUFBN0IsOEJBQTZCO0lBQTdCLGlEQUE2QjtJQUFDLGdEQUErQztJQUFDLGtCQUFpQixFQUFBO0VBQUM7SUFBZ0UsbUJBQWtCO0lBQUMsZ0NBQStCO0lBQUMsd0JBQXVCLEVBQUE7RUFBQztJQUFxQywwQ0FBdUM7SUFBQyxrQ0FBK0IsRUFBQTtFQUFDO0lBQXVDLDJDQUF3QztJQUFDLG1DQUFnQyxFQUFBO0VBQUM7SUFBd0MsMkNBQXdDO0lBQUMsbUNBQWdDLEVBQUE7RUFBQztJQUF1QywwQ0FBdUM7SUFBQyxrQ0FBK0IsRUFBQTtFQUFDO0lBQWtELG1DQUFrQztJQUFDLDJCQUEwQjtJQUFDLHNDQUFxQztJQUFDLDhDQUE2QjtJQUE3Qiw4QkFBNkI7SUFBN0IsaURBQTZCO0lBQUMsZ0RBQStDLEVBQUE7RUFBQztJQUFzQyx1REFBc0Q7SUFBQywrQ0FBOEMsRUFBQTtFQUFDO0lBQWtELGlEQUFnRDtJQUFDLHlDQUF3QyxFQUFBO0VBQUM7SUFBdUMsc0RBQXFEO0lBQUMsOENBQTZDLEVBQUE7RUFBQztJQUFtRCxpREFBZ0Q7SUFBQyx5Q0FBd0MsRUFBQTtFQUFDO0lBQW9DLHVEQUFzRDtJQUFDLCtDQUE4QyxFQUFBO0VBQUM7SUFBZ0QsaURBQWdEO0lBQUMseUNBQXdDLEVBQUE7RUFBQztJQUFzQyxzREFBcUQ7SUFBQyw4Q0FBNkMsRUFBQTtFQUFDO0lBQWtELGlEQUFnRDtJQUFDLHlDQUF3QyxFQUFBLEVBQUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiW2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjUwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246NTBtc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiNTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiNTBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTo1MG1zfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxMDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246LjFzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxMDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjEwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjEwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouMXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjE1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjE1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouMTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxNTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjE1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjE1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouMTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyMDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246LjJzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyMDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjIwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjIwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouMnN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjI1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjI1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouMjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyNTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjI1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjI1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouMjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIzMDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIzMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246LjNzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIzMDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIzMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjMwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjMwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouM3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjM1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjM1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouMzVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIzNTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIzNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjM1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjM1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouMzVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI0MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI0MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246LjRzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI0MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI0MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjQwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjQwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouNHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjQ1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjQ1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouNDVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI0NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI0NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjQ1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjQ1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouNDVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI1MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI1MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246LjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI1MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI1MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjUwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjUwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjU1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjU1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouNTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI1NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI1NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjU1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjU1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouNTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI2MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI2MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246LjZzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI2MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI2MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjYwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjYwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouNnN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjY1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjY1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouNjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI2NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI2NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjY1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjY1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouNjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI3MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI3MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246LjdzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI3MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI3MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjcwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjcwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouN3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjc1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjc1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouNzVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI3NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI3NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjc1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjc1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouNzVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI4MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI4MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246LjhzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI4MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI4MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjgwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjgwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouOHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjg1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjg1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouODVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI4NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI4NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjg1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjg1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouODVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI5MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCI5MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246LjlzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI5MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI5MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjkwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjkwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouOXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjk1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjk1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjouOTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCI5NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCI5NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjk1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjk1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheTouOTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxMDAwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTAwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTAwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjEwMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjEwMDBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxMDAwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjFzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxMDUwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTA1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjA1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTA1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjEwNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjEwNTBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxMDUwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuMDVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxMTAwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTEwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjFzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxMTAwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTEwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTEwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjExMDBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS4xc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTE1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjExNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS4xNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjExNTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxMTUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxMTUwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTE1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjE1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTIwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjEyMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS4yc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTIwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjEyMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjEyMDBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxMjAwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuMnN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjEyNTBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxMjUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuMjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxMjUwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTI1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTI1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjEyNTBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS4yNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjEzMDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxMzAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuM3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjEzMDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxMzAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxMzAwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTMwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjNzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxMzUwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTM1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjM1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTM1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjEzNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjEzNTBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxMzUwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuMzVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxNDAwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTQwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjRzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxNDAwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTQwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTQwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjE0MDBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS40c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTQ1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjE0NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS40NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjE0NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxNDUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxNDUwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTQ1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjQ1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTUwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjE1MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS41c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTUwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjE1MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjE1MDBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxNTAwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjE1NTBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxNTUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuNTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxNTUwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTU1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTU1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjE1NTBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS41NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjE2MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxNjAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuNnN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjE2MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxNjAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxNjAwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTYwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjZzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxNjUwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTY1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjY1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTY1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjE2NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjE2NTBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxNjUwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuNjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxNzAwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTcwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjdzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxNzAwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTcwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTcwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjE3MDBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS43c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTc1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjE3NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS43NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjE3NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxNzUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxNzUwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTc1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjc1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTgwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjE4MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246MS44c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTgwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjE4MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjE4MDBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxODAwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuOHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjE4NTBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxODUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuODVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxODUwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTg1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTg1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjE4NTBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6MS44NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjE5MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxOTAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjEuOXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjE5MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxOTAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIxOTAwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMTkwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToxLjlzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIxOTUwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMTk1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoxLjk1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMTk1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjE5NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjE5NTBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIxOTUwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjEuOTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyMDAwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjAwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjAwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjIwMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjIwMDBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyMDAwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjJzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyMDUwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjA1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjA1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjA1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjIwNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjIwNTBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyMDUwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuMDVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyMTAwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjEwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjFzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyMTAwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjEwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjEwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjIxMDBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi4xc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjE1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjIxNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi4xNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjIxNTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyMTUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyMTUwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjE1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjE1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjIwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjIyMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi4yc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjIwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjIyMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjIyMDBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyMjAwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuMnN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjIyNTBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyMjUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuMjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyMjUwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjI1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjI1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjIyNTBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi4yNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjIzMDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyMzAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuM3N9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjIzMDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyMzAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyMzAwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjMwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjNzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyMzUwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjM1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjM1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjM1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjIzNTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjIzNTBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyMzUwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuMzVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyNDAwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjQwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjRzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyNDAwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjQwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjQwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjI0MDBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi40c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjQ1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjI0NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi40NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjI0NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyNDUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyNDUwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjQ1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjQ1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjUwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjI1MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi41c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjUwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjI1MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjI1MDBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyNTAwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuNXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjI1NTBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyNTUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuNTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyNTUwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjU1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjU1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjI1NTBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi41NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjI2MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyNjAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuNnN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjI2MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyNjAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyNjAwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjYwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjZzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyNjUwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjY1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjY1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjY1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjI2NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjI2NTBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyNjUwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuNjVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyNzAwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjcwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjdzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyNzAwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjcwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjcwMFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjI3MDBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi43c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjc1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjI3NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi43NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjI3NTBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyNzUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyNzUwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjc1MFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjc1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjgwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZHVyYXRpb249XFxcIjI4MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZHVyYXRpb246Mi44c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjgwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjI4MDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjI4MDBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyODAwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuOHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjI4NTBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyODUwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuODVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyODUwXFxcIl0sYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjg1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kZWxheTowc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjg1MFxcXCJdLmFvcy1hbmltYXRlLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjI4NTBcXFwiXSBbZGF0YS1hb3NdLmFvcy1hbmltYXRle3RyYW5zaXRpb24tZGVsYXk6Mi44NXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZHVyYXRpb249XFxcIjI5MDBcXFwiXSxib2R5W2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyOTAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWR1cmF0aW9uOjIuOXN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjI5MDBcXFwiXSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyOTAwXFxcIl0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLWRlbGF5OjBzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWRlbGF5PVxcXCIyOTAwXFxcIl0uYW9zLWFuaW1hdGUsYm9keVtkYXRhLWFvcy1kZWxheT1cXFwiMjkwMFxcXCJdIFtkYXRhLWFvc10uYW9zLWFuaW1hdGV7dHJhbnNpdGlvbi1kZWxheToyLjlzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIyOTUwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMjk1MFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjoyLjk1c31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMjk1MFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjI5NTBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjI5NTBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIyOTUwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjIuOTVzfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWR1cmF0aW9uPVxcXCIzMDAwXFxcIl0sYm9keVtkYXRhLWFvcy1kdXJhdGlvbj1cXFwiMzAwMFxcXCJdIFtkYXRhLWFvc117dHJhbnNpdGlvbi1kdXJhdGlvbjozc31bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1kZWxheT1cXFwiMzAwMFxcXCJdLGJvZHlbZGF0YS1hb3MtZGVsYXk9XFxcIjMwMDBcXFwiXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tZGVsYXk6MHN9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZGVsYXk9XFxcIjMwMDBcXFwiXS5hb3MtYW5pbWF0ZSxib2R5W2RhdGEtYW9zLWRlbGF5PVxcXCIzMDAwXFxcIl0gW2RhdGEtYW9zXS5hb3MtYW5pbWF0ZXt0cmFuc2l0aW9uLWRlbGF5OjNzfVtkYXRhLWFvc117cG9pbnRlci1ldmVudHM6bm9uZX1bZGF0YS1hb3NdLmFvcy1hbmltYXRle3BvaW50ZXItZXZlbnRzOmF1dG99W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWxpbmVhcl0sYm9keVtkYXRhLWFvcy1lYXNpbmc9bGluZWFyXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjUsLjI1LC43NSwuNzUpfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlXSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2V9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW5dLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW5dIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXRdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0XSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLW91dF0sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXRdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXR9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tYmFja10sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1iYWNrXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNiwtLjI4LC43MzUsLjA0NSl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LWJhY2tdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LWJhY2tdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMS4yNzUpfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLW91dC1iYWNrXSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLW91dC1iYWNrXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNjgsLS41NSwuMjY1LDEuNTUpfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLXNpbmVdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tc2luZV0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQ3LDAsLjc0NSwuNzE1KX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXQtc2luZV0sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXQtc2luZV0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjM5LC41NzUsLjU2NSwxKX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtc2luZV0sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtc2luZV0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQ0NSwuMDUsLjU1LC45NSl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tcXVhZF0sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1xdWFkXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA4NSwuNjgsLjUzKX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXQtcXVhZF0sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXQtcXVhZF0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtcXVhZF0sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtcXVhZF0gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjQ1NSwuMDMsLjUxNSwuOTU1KX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1jdWJpY10sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1jdWJpY10gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wODUsLjY4LC41Myl9W2RhdGEtYW9zXVtkYXRhLWFvc11bZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LWN1YmljXSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLW91dC1jdWJpY10gW2RhdGEtYW9zXXt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtY3ViaWNdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2UtaW4tb3V0LWN1YmljXSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNDU1LC4wMywuNTE1LC45NTUpfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLXF1YXJ0XSxib2R5W2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLXF1YXJ0XSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA4NSwuNjgsLjUzKX1bZGF0YS1hb3NdW2RhdGEtYW9zXVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1vdXQtcXVhcnRdLGJvZHlbZGF0YS1hb3MtZWFzaW5nPWVhc2Utb3V0LXF1YXJ0XSBbZGF0YS1hb3Nde3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpfVtkYXRhLWFvc11bZGF0YS1hb3NdW2RhdGEtYW9zLWVhc2luZz1lYXNlLWluLW91dC1xdWFydF0sYm9keVtkYXRhLWFvcy1lYXNpbmc9ZWFzZS1pbi1vdXQtcXVhcnRdIFtkYXRhLWFvc117dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC40NTUsLjAzLC41MTUsLjk1NSl9QG1lZGlhIHNjcmVlbntodG1sOm5vdCgubm8tanMpIFtkYXRhLWFvc149ZmFkZV1bZGF0YS1hb3NePWZhZGVde29wYWNpdHk6MDt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LHRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksdHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zXj1mYWRlXVtkYXRhLWFvc149ZmFkZV0uYW9zLWFuaW1hdGV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOm5vbmU7dHJhbnNmb3JtOm5vbmV9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmFkZS11cF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDBweCwwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLWRvd25dey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDBweCwwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLXJpZ2h0XXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHB4LDAsMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmFkZS1sZWZ0XXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDBweCwwLDApfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZhZGUtdXAtcmlnaHRdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDBweCwxMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHB4LDEwMHB4LDApfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZhZGUtdXAtbGVmdF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwcHgsMTAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHB4LDEwMHB4LDApfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZhZGUtZG93bi1yaWdodF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHB4LC0xMDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHB4LC0xMDBweCwwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mYWRlLWRvd24tbGVmdF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwcHgsLTEwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDBweCwtMTAwcHgsMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3NePXpvb21dW2RhdGEtYW9zXj16b29tXXtvcGFjaXR5OjA7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LHRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvc149em9vbV1bZGF0YS1hb3NePXpvb21dLmFvcy1hbmltYXRle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlKDEpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20taW5dey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42KTt0cmFuc2Zvcm06c2NhbGUoLjYpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20taW4tdXBdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwcHgsMCkgc2NhbGUoLjYpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMHB4LDApIHNjYWxlKC42KX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLWluLWRvd25dey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMHB4LDApIHNjYWxlKC42KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwcHgsMCkgc2NhbGUoLjYpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20taW4tcmlnaHRdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDBweCwwLDApIHNjYWxlKC42KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMHB4LDAsMCkgc2NhbGUoLjYpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20taW4tbGVmdF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwcHgsMCwwKSBzY2FsZSguNik7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHB4LDAsMCkgc2NhbGUoLjYpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20tb3V0XXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjIpO3RyYW5zZm9ybTpzY2FsZSgxLjIpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20tb3V0LXVwXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMHB4LDApIHNjYWxlKDEuMik7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwcHgsMCkgc2NhbGUoMS4yKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz16b29tLW91dC1kb3duXXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDBweCwwKSBzY2FsZSgxLjIpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDBweCwwKSBzY2FsZSgxLjIpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20tb3V0LXJpZ2h0XXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwcHgsMCwwKSBzY2FsZSgxLjIpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwcHgsMCwwKSBzY2FsZSgxLjIpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPXpvb20tb3V0LWxlZnRdey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMHB4LDAsMCkgc2NhbGUoMS4yKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwcHgsMCwwKSBzY2FsZSgxLjIpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zXj1zbGlkZV1bZGF0YS1hb3NePXNsaWRlXXt0cmFuc2l0aW9uLXByb3BlcnR5Oi13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtO3Zpc2liaWxpdHk6aGlkZGVufWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zXj1zbGlkZV1bZGF0YS1hb3NePXNsaWRlXS5hb3MtYW5pbWF0ZXt2aXNpYmlsaXR5OnZpc2libGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1zbGlkZS11cF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9c2xpZGUtZG93bl17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1zbGlkZS1yaWdodF17LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1zbGlkZS1sZWZ0XXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvc149ZmxpcF1bZGF0YS1hb3NePWZsaXBdey13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47dHJhbnNpdGlvbi1wcm9wZXJ0eTotd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybX1odG1sOm5vdCgubm8tanMpIFtkYXRhLWFvcz1mbGlwLWxlZnRdey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgtMTAwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVZKC0xMDBkZWcpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZsaXAtbGVmdF0uYW9zLWFuaW1hdGV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVZKDApO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVkoMCl9aHRtbDpub3QoLm5vLWpzKSBbZGF0YS1hb3M9ZmxpcC1yaWdodF17LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVZKDEwMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgxMDBkZWcpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZsaXAtcmlnaHRdLmFvcy1hbmltYXRley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWSgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVZKDApfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZsaXAtdXBdey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgtMTAwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVYKC0xMDBkZWcpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZsaXAtdXBdLmFvcy1hbmltYXRley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgwKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVYKDApfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZsaXAtZG93bl17LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDI1MDBweCkgcm90YXRlWCgxMDBkZWcpfWh0bWw6bm90KC5uby1qcykgW2RhdGEtYW9zPWZsaXAtZG93bl0uYW9zLWFuaW1hdGV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoMjUwMHB4KSByb3RhdGVYKDApO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSgyNTAwcHgpIHJvdGF0ZVgoMCl9fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL0BzcGxpZGVqcy9zcGxpZGUvZGlzdC9jc3Mvc3BsaWRlLWNvcmUubWluLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7IH1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICMyNDI4NTE7XG4gIGJhY2tncm91bmQ6ICNGRkY4RjU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cblxuLmNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDExNzBweDsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH0gfVxuXG5hIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAzMDBtcztcbiAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXM7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgYTpob3ZlciB7XG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIGE6YWN0aXZlIHtcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgYTpkaXNhYmxlZCwgYV9kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi50eXBvZ3JhcGh5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG4gIC50eXBvZ3JhcGh5X19ib2R5IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7IH1cbiAgLnR5cG9ncmFwaHlfX2gxIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjBweDsgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAudHlwb2dyYXBoeV9faDEge1xuICAgICAgICBmb250LXNpemU6IDU3cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4OyB9IH1cbiAgLnR5cG9ncmFwaHlfX2gyIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDg3cHg7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgLnR5cG9ncmFwaHlfX2gyIHtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTdweDsgfSB9XG4gIC50eXBvZ3JhcGh5X19oMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2OHB4OyB9XG4gIC50eXBvZ3JhcGh5X19oNCB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4OyB9XG4gIC50eXBvZ3JhcGh5X19pbmZvIHtcbiAgICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7IH1cbiAgLnR5cG9ncmFwaHlfX2JvbGQge1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDsgfVxuICAudHlwb2dyYXBoeV9fc21hbGxUZXh0IHtcbiAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7IH1cbiAgLnR5cG9ncmFwaHlfX2NlbnRlcmVkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLnR5cG9ncmFwaHlfX3JlZCB7XG4gICAgY29sb3I6ICNGRjc3NTE7IH1cblxuLmZpcnN0U2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE5MnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLmZpcnN0U2VjdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgLmZpcnN0U2VjdGlvbl9fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDsgfVxuICAuZmlyc3RTZWN0aW9uX19idXR0b25zIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5maXJzdFNlY3Rpb25fX2J1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG4gIC5maXJzdFNlY3Rpb25fX2ltYWdlIHtcbiAgICB3aWR0aDogNjM4cHg7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmZpcnN0U2VjdGlvbl9faW1hZ2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTsgfSB9XG4gIC5maXJzdFNlY3Rpb25fX2NpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2ODBweDtcbiAgICBoZWlnaHQ6IDY4MHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkNEQjg7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDEwMHB4KTtcbiAgICBib3R0b206IDEzMHB4O1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAuZmlyc3RTZWN0aW9uX19pbWFnZVdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuZmlyc3RTZWN0aW9uX19kZWNvcmF0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IGF1dG87IH1cbiAgICAuZmlyc3RTZWN0aW9uX19kZWNvcmF0aW9uX2ZpcnN0IHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHRvcC1ib3R0b20gNXMgaW5maW5pdGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogdG9wLWJvdHRvbSA1cyBpbmZpbml0ZTsgfVxuICAgIC5maXJzdFNlY3Rpb25fX2RlY29yYXRpb25fc2Vjb25kIHtcbiAgICAgIHJpZ2h0OiAtMTE4cHg7XG4gICAgICBib3R0b206IDE3NnB4O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHRvcC1ib3R0b20gOHMgaW5maW5pdGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogdG9wLWJvdHRvbSA4cyBpbmZpbml0ZTsgfVxuICAgIC5maXJzdFNlY3Rpb25fX2RlY29yYXRpb25fdGhpcmQge1xuICAgICAgbGVmdDogLTkwcHg7XG4gICAgICB0b3A6IDE4NHB4O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSA1cyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgNXMgaW5maW5pdGU7IH1cbiAgICAuZmlyc3RTZWN0aW9uX19kZWNvcmF0aW9uX2ZvdXJ0aCB7XG4gICAgICBib3R0b206IDI0NHB4O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHRvcC1ib3R0b20gN3MgaW5maW5pdGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogdG9wLWJvdHRvbSA3cyBpbmZpbml0ZTsgfVxuXG4uc2Vjb25kU2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkVDRTQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICBtYXJnaW46IDAgLTEwMHB4OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMjBweCkge1xuICAgIC5zZWNvbmRTZWN0aW9uIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDUwcHg7IH0gfVxuICAuc2Vjb25kU2VjdGlvbl9faW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAuc2Vjb25kU2VjdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgLnNlY29uZFNlY3Rpb25fX2xpc3Qge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7IH0gfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuc2Vjb25kU2VjdGlvbl9fbGlzdCBsaSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9IH1cbiAgLnNlY29uZFNlY3Rpb25fX2xpc3RJdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogNTBweCA0MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5zZWNvbmRTZWN0aW9uX19saXN0SXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNGRkJCQTkpLCB0bygjRkY2MjM2KSk7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkZCQkE5IDAlLCAjRkY2MjM2IDEwMCUpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTVweCA0MHB4IHJnYmEoMjU1LCAxMjIsIDg1LCAwLjMpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCA0MHB4IHJnYmEoMjU1LCAxMjIsIDg1LCAwLjMpO1xuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cbiAgLnNlY29uZFNlY3Rpb25fX2ltYWdlIHtcbiAgICBtYXJnaW46IDAgYXV0byAzNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEycHggMjVweCByZ2JhKDk4LCAxMzEsIDExOCwgMC4zKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDI1cHggcmdiYSg5OCwgMTMxLCAxMTgsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG5cbi50aGlyZFNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNTVweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLnRoaXJkU2VjdGlvbl9faW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuICAudGhpcmRTZWN0aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAudGhpcmRTZWN0aW9uX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG4gIC50aGlyZFNlY3Rpb25fX2ltYWdlIHtcbiAgICB3aWR0aDogNDkycHg7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgLnRoaXJkU2VjdGlvbl9faW1hZ2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA0OTJweDsgfSB9XG4gIC50aGlyZFNlY3Rpb25fX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDQ2cHg7IH1cbiAgLnRoaXJkU2VjdGlvbl9fbGlzdEl0ZW0ge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAudGhpcmRTZWN0aW9uX19saXN0SXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cbiAgLnRoaXJkU2VjdGlvbl9faWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gIC50aGlyZFNlY3Rpb25fX2NpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2ODVweDtcbiAgICBoZWlnaHQ6IDY4NXB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogI0ZGREJDQztcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMDBweCk7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTAwcHgpO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAudGhpcmRTZWN0aW9uX19pbWFnZVdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLnRoaXJkU2VjdGlvbl9fZGVjb3JhdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLnRoaXJkU2VjdGlvbl9fZGVjb3JhdGlvbl9maXJzdCB7XG4gICAgICByaWdodDogLTQ1cHg7XG4gICAgICBib3R0b206IC01MHB4O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJpZ2h0LWxlZnQgMTBzIGluZmluaXRlO1xuICAgICAgICAgICAgICBhbmltYXRpb246IHJpZ2h0LWxlZnQgMTBzIGluZmluaXRlOyB9XG4gICAgLnRoaXJkU2VjdGlvbl9fZGVjb3JhdGlvbl9zZWNvbmQge1xuICAgICAgbGVmdDogLTEwOHB4O1xuICAgICAgYm90dG9tOiAtNTBweDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsZWZ0LXJpZ2h0IDEwcyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBsZWZ0LXJpZ2h0IDEwcyBpbmZpbml0ZTsgfVxuICAgIC50aGlyZFNlY3Rpb25fX2RlY29yYXRpb25fdGhpcmQge1xuICAgICAgbGVmdDogLTkwcHg7XG4gICAgICB0b3A6IDY4cHg7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogdG9wLWJvdHRvbSA4cyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0b3AtYm90dG9tIDhzIGluZmluaXRlOyB9XG4gICAgLnRoaXJkU2VjdGlvbl9fZGVjb3JhdGlvbl9mb3VydGgge1xuICAgICAgcmlnaHQ6IC02M3B4O1xuICAgICAgdG9wOiAxNDBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSA1cyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgNXMgaW5maW5pdGU7IH1cblxuLmZvdXJ0aFNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjRkZFQ0U0O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAxMDBweDtcbiAgbWFyZ2luOiAwIC0xMDBweDsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzIwcHgpIHtcbiAgICAuZm91cnRoU2VjdGlvbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiA1MHB4OyB9IH1cbiAgLmZvdXJ0aFNlY3Rpb25fX2luZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiAgLmZvdXJ0aFNlY3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMjBweCkge1xuICAgIC5mb3VydGhTZWN0aW9uX19saXN0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0zMHB4OyB9IH1cbiAgLmZvdXJ0aFNlY3Rpb25fX2xpc3RJdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0NnB4O1xuICAgIHBhZGRpbmc6IDUwcHggNTBweCA3MHB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzIwcHgpIHtcbiAgICAgIC5mb3VydGhTZWN0aW9uX19saXN0SXRlbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH0gfVxuICAuZm91cnRoU2VjdGlvbl9faW1hZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgLmZvdXJ0aFNlY3Rpb25fX2xpc3RUaXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4OyB9XG5cbi5maWZ0aFNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMzBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLmZpZnRoU2VjdGlvbl9fZGVjb3JhdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMTA2cHg7XG4gICAgdG9wOiA3M3B4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0b3AtYm90dG9tIDhzIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB0b3AtYm90dG9tIDhzIGluZmluaXRlOyB9XG4gIC5maWZ0aFNlY3Rpb25fX3NsaWRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2MHB4OyB9XG4gIC5maWZ0aFNlY3Rpb24gLnNwbGlkZV9fbGlzdCB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmZpZnRoU2VjdGlvbiAuc3BsaWRlX19zbGlkZS5pcy1hY3RpdmUge1xuICAgIGhlaWdodDogODQzcHggIWltcG9ydGFudDsgfVxuICAuZmlmdGhTZWN0aW9uIC5zcGxpZGVfX3NsaWRlLmlzLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjRkZBMzg5KSwgdG8oI0ZGNjQzOSkpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkEzODkgMCUsICNGRjY0MzkgMTAwJSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTVweCA0MHB4IHJnYmEoMjU1LCAxMDMsIDYxLCAwLjMpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggNDBweCByZ2JhKDI1NSwgMTAzLCA2MSwgMC4zKTtcbiAgICBjb2xvcjogI0ZGRkZGRjsgfVxuICAgIC5maWZ0aFNlY3Rpb24gLnNwbGlkZV9fc2xpZGUuaXMtYWN0aXZlIHAge1xuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cbiAgICAuZmlmdGhTZWN0aW9uIC5zcGxpZGVfX3NsaWRlLmlzLWFjdGl2ZSAuYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDI1cHggcmdiYSgyNTUsIDEyNCwgODQsIDAuMyk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDI1cHggcmdiYSgyNTUsIDEyNCwgODQsIDAuMyk7XG4gICAgICBjb2xvcjogI0ZGNzc1MTsgfVxuICAgICAgLmZpZnRoU2VjdGlvbiAuc3BsaWRlX19zbGlkZS5pcy1hY3RpdmUgLmJ1dHRvbjpob3ZlciB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyNXB4IHdoaXRlOyB9XG4gIC5maWZ0aFNlY3Rpb25fX2hlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7IH1cbiAgLmZpZnRoU2VjdGlvbl9faW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuICAuZmlmdGhTZWN0aW9uX19wcmljZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxuXG4uc2l4dGhTZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI0ZGRUNFNDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNjRweCAxMDBweCAzOXB4IDEwMHB4O1xuICBtYXJnaW46IDAgLTEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMyMHB4KSB7XG4gICAgLnNpeHRoU2VjdGlvbiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiA1MHB4OyB9IH1cbiAgLnNpeHRoU2VjdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgLnNpeHRoU2VjdGlvbl9faW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDsgfVxuICAuc2l4dGhTZWN0aW9uX19pbWFnZVdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAuc2l4dGhTZWN0aW9uX19pbWFnZVdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4OyB9IH1cbiAgLnNpeHRoU2VjdGlvbl9fZGVjb3JhdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLnNpeHRoU2VjdGlvbl9fZGVjb3JhdGlvbl9maXJzdCB7XG4gICAgICBib3R0b206IDE4N3B4O1xuICAgICAgbGVmdDogMDsgfVxuICAgIC5zaXh0aFNlY3Rpb25fX2RlY29yYXRpb25fc2Vjb25kIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMxZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMxZGVnKTtcbiAgICAgIGJvdHRvbTogMTI2cHg7XG4gICAgICBsZWZ0OiAwOyB9XG4gICAgLnNpeHRoU2VjdGlvbl9fZGVjb3JhdGlvbl90aGlyZCB7XG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogdG9wLWJvdHRvbSA4cyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0b3AtYm90dG9tIDhzIGluZmluaXRlOyB9XG4gICAgLnNpeHRoU2VjdGlvbl9fZGVjb3JhdGlvbl9mb3VydGgge1xuICAgICAgbGVmdDogMDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0b3AtYm90dG9tIDhzIGluZmluaXRlO1xuICAgICAgICAgICAgICBhbmltYXRpb246IHRvcC1ib3R0b20gOHMgaW5maW5pdGU7IH1cbiAgICAuc2l4dGhTZWN0aW9uX19kZWNvcmF0aW9uX2ZpZnRoIHtcbiAgICAgIGxlZnQ6IC00OXB4O1xuICAgICAgdG9wOiAtNzVweDtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgNXMgaW5maW5pdGU7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDVzIGluZmluaXRlOyB9XG4gIC5zaXh0aFNlY3Rpb25fX2NpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgd2lkdGg6IDMwN3B4O1xuICAgIGhlaWdodDogMzA3cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGOUU3NTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTAwcHgpO1xuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDEwMHB4KTsgfVxuICAuc2l4dGhTZWN0aW9uX19pbWFnZSB7XG4gICAgd2lkdGg6IDQxN3B4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIC5zaXh0aFNlY3Rpb25fX2ltYWdlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjRkZBOTkyKSwgY29sb3Itc3RvcCg2NSUsICNGRjc4NTIpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGQTk5MiAwJSwgI0ZGNzg1MiA2NSUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDI1cHggcmdiYSgyNTUsIDEyNCwgODQsIDAuMyk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDI1NSwgMTI0LCA4NCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIHBhZGRpbmc6IDE2cHggMzVweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5idXR0b24ge1xuICAgICAgcGFkZGluZzogMTZweDsgfSB9XG4gIC5idXR0b25fZ3JlZW4ge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDEyNSwgMTgxLCAzNSwgMC4zKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDEyNSwgMTgxLCAzNSwgMC4zKSAhaW1wb3J0YW50OyB9XG4gIC5idXR0b25fZ3JlZW4ge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzAwZDdjMyksIGNvbG9yLXN0b3AoNjUlLCAjMDBkN2MzKSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwZDdjMyAwJSwgIzAwZDdjMyA2NSUpOyB9XG4gICAgLmJ1dHRvbl9ncmVlbjpob3ZlciB7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgIzNkZTBkMiBpbnNldCwgMCAwIDIwcHggMnB4IHJnYmEoNzUsIDE5NiwgMTgyLCAwLjcyKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwICMzZGUwZDIgaW5zZXQsIDAgMCAyMHB4IDJweCByZ2JhKDc1LCAxOTYsIDE4MiwgMC43MikgIWltcG9ydGFudDsgfVxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgI2RlNjk0ZSBpbnNldCwgMCAwIDIwcHggMnB4ICNjZTdhNWE7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwICNkZTY5NGUgaW5zZXQsIDAgMCAyMHB4IDJweCAjY2U3YTVhOyB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9IH1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHRvcC1ib3R0b20ge1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHRvcC1ib3R0b20ge1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7IH0gfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGVmdC1yaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7IH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDIwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMjBweCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTsgfSB9XG5cbkBrZXlmcmFtZXMgbGVmdC1yaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7IH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDIwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzBweCwgMjBweCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMHB4KTsgfSB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyByaWdodC1sZWZ0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7IH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNXB4LCAyMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNXB4LCAyMHB4KTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTsgfSB9XG5cbkBrZXlmcmFtZXMgcmlnaHQtbGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpOyB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTVweCwgMjBweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTVweCwgMjBweCk7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7IH0gfVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMTMwcHggMCAzMHB4O1xuICBjb2xvcjogIzcwNzI4MztcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5mb290ZXJfX2RlY29yYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTMycHg7XG4gICAgdG9wOiA1OXB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgNnMgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSA2cyBpbmZpbml0ZTsgfVxuICAuZm9vdGVyX19sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XG4gIC5mb290ZXJfX2luZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgLmZvb3Rlcl9faGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxuICAuZm9vdGVyX19saW5rIHtcbiAgICBjb2xvcjogIzcwNzI4MztcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAuZm9vdGVyX19saW5rOmhvdmVyIHtcbiAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIGNvbG9yOiAjRkY3NzUxOyB9XG4gIC5mb290ZXIgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuICAuZm9vdGVyX19jb3B5cmlnaHQge1xuICAgIG1hcmdpbi10b3A6IDEzMHB4OyB9XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDkwcHg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmhlYWRlcl9iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGOEY1OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7IH0gfVxuICAuaGVhZGVyIC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmhlYWRlcl9fbG9nbyB7XG4gICAgbWluLXdpZHRoOiAxNDhweDsgfVxuICAuaGVhZGVyX19pY29uc19oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmhlYWRlcl9fbmF2TGlzdCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XG4gICAgICAuaGVhZGVyX19uYXZMaXN0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG4gIC5oZWFkZXJfX25hdkxpbmsge1xuICAgIGNvbG9yOiAjMjQyODUxO1xuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcbiAgICAgIC5oZWFkZXJfX25hdkxpbmsge1xuICAgICAgICBmb250LXNpemU6IDMycHg7IH0gfVxuICAgIC5oZWFkZXJfX25hdkxpbms6aG92ZXIge1xuICAgICAgY29sb3I6ICNGRjc3NTE7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuaGVhZGVyX19idXR0b24ge1xuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG4gIC5oZWFkZXJfX2J1dHRvbl9tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmhlYWRlcl9fYnV0dG9uX21vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cbiAgLmhlYWRlcl9fbmF2SXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcbiAgICAgIC5oZWFkZXJfX25hdkl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDsgfSB9XG4gIC5oZWFkZXJfX21vYmlsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogOTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOEY1O1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHBhZGRpbmc6IDMwcHggMzBweCA5MHB4IDkwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTRweDtcbiAgICB3aWR0aDogNjAlOyB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyMXB4KSB7XG4gICAgICAuaGVhZGVyX19tb2JpbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lOyB9IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmhlYWRlcl9fbW9iaWxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxuXG4ubmF2aWdhdGlvbk9wZW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcbiAgICAubmF2aWdhdGlvbk9wZW5lciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDsgfSB9XG4gIC5uYXZpZ2F0aW9uT3BlbmVyIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIuNjdweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkY3NzUxO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAubmF2aWdhdGlvbk9wZW5lciBzcGFuOmJlZm9yZSwgLm5hdmlnYXRpb25PcGVuZXIgc3BhbjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNGRjc3NTE7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7IH1cbiAgICAubmF2aWdhdGlvbk9wZW5lciBzcGFuOmJlZm9yZSB7XG4gICAgICB0b3A6IC02cHg7IH1cbiAgICAubmF2aWdhdGlvbk9wZW5lciBzcGFuOmFmdGVyIHtcbiAgICAgIHRvcDogNnB4OyB9XG4gIC5uYXZpZ2F0aW9uT3BlbmVyX2lzQWN0aXZlIHNwYW4ge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgICAubmF2aWdhdGlvbk9wZW5lcl9pc0FjdGl2ZSBzcGFuOmJlZm9yZSwgLm5hdmlnYXRpb25PcGVuZXJfaXNBY3RpdmUgc3BhbjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkY3NzUxOyB9XG4gICAgLm5hdmlnYXRpb25PcGVuZXJfaXNBY3RpdmUgc3BhbjpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxuICAgIC5uYXZpZ2F0aW9uT3BlbmVyX2lzQWN0aXZlIHNwYW46YWZ0ZXIge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7IH1cblxuLm5hdmlnYXRpb25CYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA5MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiAtMTAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMjFweCkge1xuICAgIC5uYXZpZ2F0aW9uQmFja2Ryb3Age1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cbiAgLm5hdmlnYXRpb25CYWNrZHJvcF9pc1Nob3duIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgei1pbmRleDogOTg7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9maXJzdC1zZWN0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2Vjb25kLXNlY3Rpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90aGlyZC1zZWN0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZm91cnRoLXNlY3Rpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9maWZ0aC1zZWN0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc2l4dGgtc2VjdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FuaW1hdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL25hdmlnYXRpb24tb3BlbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2aWdhdGlvbi1iYWNrZHJvcC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdYO0VBQ0UsWUFBWTtFQUNaLGNDaEJrQjtFRGlCbEIsbUJDbEJ3QjtFRG1CeEIsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBSWxCO0VBREY7SUFFSSxpQkFBaUIsRUFBQSxFQU1wQjs7QUFIQztFQUxGO0lBTUksZUFBZSxFQUFBLEVBRWxCOztBQUdEO0VBQ0UsK0JBQXVCO0VBQXZCLHVCQUF1QjtFQUV2Qiw2QkFBcUI7RUFBckIscUJBQXFCLEVBQUE7RUFIdkI7SUFPSSw2QkFBcUI7SUFBckIscUJBQXFCLEVBQUE7RUFQekI7SUFZSSw2QkFBcUI7SUFBckIscUJBQXFCLEVBQUE7RUFaekI7SUFpQkksb0JBQW9CO0lBQ3BCLDZCQUFxQjtJQUFyQixxQkFBcUIsRUFBQTs7QUU3RHpCO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTtFQUVWO0lBQ0Usa0JBQWtC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QjtJQUMxQix1QkFBdUIsRUFBQTtJQUgxQjtNQU1LLE1BQU07TUFDTixtQmI5Q0ssRUFBQTtJYXVDVjtNQVdLLGdDQUF3QjtjQUF4Qix3QkFBd0IsRUFBQTtJQVg3QjtNQWVLLFFBQVE7TUFDUixpQ0FBeUI7Y0FBekIseUJBQXlCLEVBQUE7O0FDekRqQztFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYiw2QkFBcUI7RUFBckIscUJBQXFCLEVBQUE7RUFFckI7SUFWRjtNQVdJLHdCQUF3QixFQUFBLEVBUTNCO0VBTEM7SUFDRSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGNBQWMsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjb2xvcjogJGZvbnQtY29sb3I7XFxyXFxuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcjtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBAbWVkaWEobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zO1xcclxcbiAgLy9jb2xvcjogJGJsdWU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgLy9jb2xvcjogJGJ0bi1ob3ZlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjphY3RpdmUge1xcclxcbiAgICAvL2NvbG9yOiAkYnRuLWFjdGl2ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjpkaXNhYmxlZCxcXHJcXG4gICZfZGlzYWJsZWQge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAvL2NvbG9yOiAkZGlzYWJsZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIkYmFja2dyb3VuZC1jb2xvcjogI0ZGRjhGNTtcXHJcXG4kZm9udC1jb2xvcjogIzI0Mjg1MTtcXHJcXG4kcmVkOiAjRkY3NzUxO1xcclxcbiRncmFkaWVudC1yZWQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkE5OTIgMCUsICNGRjc4NTIgNjUlKTtcXHJcXG4kZ3JhZGllbnQtZ3JlZW46IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNDM0U0OEYgMCUsICM4RUM2MzcgNjUlKTtcXHJcXG5cIixcIi50eXBvZ3JhcGh5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAmX19ib2R5IHtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlY29uZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2gxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1tYWluO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMjBweDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDU3cHg7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2gyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1tYWluO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDg3cHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19oMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktbWFpbjtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA2OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faDQge1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1haW47XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1haW47XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjdweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2JvbGQge1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1haW47XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3NtYWxsVGV4dCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Vjb25kO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jZW50ZXJlZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3JlZCB7XFxyXFxuICAgIGNvbG9yOiAjRkY3NzUxO1xcclxcbiAgfVxcclxcbn1cIixcIiRmb250LWZhbWlseS1tYWluOiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXHJcXG4kZm9udC1mYW1pbHktc2Vjb25kOiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXHJcXG5cIixcIi5maXJzdFNlY3Rpb24ge1xcclxcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE5MnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdGV4dCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2J1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDYzOHB4O1xcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2NpcmNsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDY4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDY4MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZDREI4O1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgICBib3R0b206IDEzMHB4O1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1hZ2VXcmFwcGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGVjb3JhdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuXFxyXFxuICAgICZfZmlyc3Qge1xcclxcbiAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBhbmltYXRpb246IHRvcC1ib3R0b20gNXMgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9zZWNvbmQge1xcclxcbiAgICAgIHJpZ2h0OiAtMTE4cHg7XFxyXFxuICAgICAgYm90dG9tOiAxNzZweDtcXHJcXG4gICAgICBhbmltYXRpb246IHRvcC1ib3R0b20gOHMgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl90aGlyZCB7XFxyXFxuICAgICAgbGVmdDogLTkwcHg7XFxyXFxuICAgICAgdG9wOiAxODRweDtcXHJcXG4gICAgICBhbmltYXRpb246IHJvdGF0ZSA1cyBpbmZpbml0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX2ZvdXJ0aCB7XFxyXFxuICAgICAgYm90dG9tOiAyNDRweDtcXHJcXG4gICAgICBhbmltYXRpb246IHRvcC1ib3R0b20gN3MgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCIuc2Vjb25kU2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjRkZFQ0U0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4O1xcclxcbiAgbWFyZ2luOiAwIC0xMDBweDtcXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMjBweCkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbmZvIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xpc3Qge1xcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbGlzdEl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDQwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGQkJBOSAwJSwgI0ZGNjIzNiAxMDAlKTtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwcHggMTVweCA0MHB4IHJnYmEoMjU1LCAxMjIsIDg1LCAwLjMpO1xcclxcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbWFnZSB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvIDM1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDI1cHggcmdiYSg5OCwgMTMxLCAxMTgsIDAuMyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIH1cXHJcXG59XCIsXCIudGhpcmRTZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDE1NXB4IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAmX19pbmZvIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RleHQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1hZ2Uge1xcclxcbiAgICB3aWR0aDogNDkycHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDQ5MnB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19saXN0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xpc3RJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fY2lyY2xlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNjg1cHg7XFxyXFxuICAgIGhlaWdodDogNjg1cHg7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZEQkNDO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1hZ2VXcmFwcGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2RlY29yYXRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFxyXFxuICAgICZfZmlyc3Qge1xcclxcbiAgICAgIHJpZ2h0OiAtNDVweDtcXHJcXG4gICAgICBib3R0b206IC01MHB4O1xcclxcbiAgICAgIGFuaW1hdGlvbjogcmlnaHQtbGVmdCAxMHMgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9zZWNvbmQge1xcclxcbiAgICAgIGxlZnQ6IC0xMDhweDtcXHJcXG4gICAgICBib3R0b206IC01MHB4O1xcclxcbiAgICAgIGFuaW1hdGlvbjogbGVmdC1yaWdodCAxMHMgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl90aGlyZCB7XFxyXFxuICAgICAgbGVmdDogLTkwcHg7XFxyXFxuICAgICAgdG9wOiA2OHB4O1xcclxcbiAgICAgIGFuaW1hdGlvbjogdG9wLWJvdHRvbSA4cyBpbmZpbml0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX2ZvdXJ0aCB7XFxyXFxuICAgICAgcmlnaHQ6IC02M3B4O1xcclxcbiAgICAgIHRvcDogMTQwcHg7XFxyXFxuICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgYW5pbWF0aW9uOiByb3RhdGUgNXMgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCIuZm91cnRoU2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjRkZFQ0U0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4O1xcclxcbiAgbWFyZ2luOiAwIC0xMDBweDtcXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMjBweCkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbmZvIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG4gIH1cXHJcXG4gICZfX2xpc3R7XFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMjBweCkge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IC0zMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19saXN0SXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE0NnB4O1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggNzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMjBweCkge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltYWdlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xpc3RUaXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xpc3RUZXh0IHtcXHJcXG4gIH1cXHJcXG59XCIsXCIuZmlmdGhTZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDEzMHB4IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAmX19kZWNvcmF0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogLTEwNnB4O1xcclxcbiAgICB0b3A6IDczcHg7XFxyXFxuICAgIGFuaW1hdGlvbjogdG9wLWJvdHRvbSA4cyBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3NsaWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDYwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3BsaWRlX19saXN0IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zcGxpZGVfX3NsaWRlLmlzLWFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkEzODkgMCUsICNGRjY0MzkgMTAwJSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDQwcHggcmdiYSgyNTUsIDEwMywgNjEsIDAuMyk7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBoZWlnaHQ6IDg0M3B4ICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b24ge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDI1NSwgMTI0LCA4NCwgMC4zKTtcXHJcXG4gICAgICBjb2xvcjogI0ZGNzc1MTtcXHJcXG5cXHJcXG4gICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19oZWFkaW5nIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcHJpY2Uge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgfVxcclxcbn1cIixcIi5zaXh0aFNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogI0ZGRUNFNDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiA2NHB4IDEwMHB4IDM5cHggMTAwcHg7XFxyXFxuICBtYXJnaW46IDAgLTEwMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMyMHB4KSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1hZ2VXcmFwcGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2RlY29yYXRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFxyXFxuICAgICZfZmlyc3Qge1xcclxcbiAgICAgIGJvdHRvbTogMTg3cHg7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX3NlY29uZCB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMxZGVnKTtcXHJcXG4gICAgICBib3R0b206IDEyNnB4O1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl90aGlyZHtcXHJcXG4gICAgICBhbmltYXRpb246IHRvcC1ib3R0b20gOHMgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9mb3VydGgge1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgYW5pbWF0aW9uOiB0b3AtYm90dG9tIDhzIGluZmluaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfZmlmdGgge1xcclxcbiAgICAgIGxlZnQ6IC00OXB4O1xcclxcbiAgICAgIHRvcDogLTc1cHg7XFxyXFxuICAgICAgYW5pbWF0aW9uOiByb3RhdGUgNXMgaW5maW5pdGU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2NpcmNsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHdpZHRoOiAzMDdweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDdweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGOUU3NTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMTAwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1hZ2Uge1xcclxcbiAgICB3aWR0aDogNDE3cHg7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiLFwiLmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAkZ3JhZGllbnQtcmVkO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDI1NSwgMTI0LCA4NCwgMC4zKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktbWFpbjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjdweDtcXHJcXG4gIHBhZGRpbmc6IDE2cHggMzVweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9ncmVlbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMGQ3YzMgMCUsICMwMGQ3YzMgNjUlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDEyNSwgMTgxLCAzNSwgMC4zKSAhaW1wb3J0YW50O1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwICMzZGUwZDIgaW5zZXQsIDAgMCAyMHB4IDJweCByZ2JhKDc1LCAxOTYsIDE4MiwgMC43MikgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgI2RlNjk0ZSBpbnNldCwgMCAwIDIwcHggMnB4ICNjZTdhNWE7XFxyXFxuICB9XFxyXFxufVwiLFwiLmFuaW1hdGlvbiB7XFxyXFxuICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIHRvcC1ib3R0b20ge1xcclxcbiAgICA1MCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBrZXlmcmFtZXMgbGVmdC1yaWdodCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAyMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwcHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAa2V5ZnJhbWVzIHJpZ2h0LWxlZnQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTVweCwgMjBweCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLmZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiAxMzBweCAwIDMwcHg7XFxyXFxuICBjb2xvcjogIzcwNzI4MztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICZfX2RlY29yYXRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMzJweDtcXHJcXG4gICAgdG9wOiA1OXB4O1xcclxcbiAgICBhbmltYXRpb246IHJvdGF0ZSA2cyBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW5mbyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19oZWFkaW5nIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgICBjb2xvcjogIzcwNzI4MztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgICBjb2xvcjogJHJlZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgbGk6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jb3B5cmlnaHQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMzBweDtcXHJcXG4gIH1cXHJcXG59XCIsXCIuaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICZfYmFja2dyb3VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkY4RjU7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgICBtaW4td2lkdGg6IDE0OHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faWNvbnMge1xcclxcbiAgICAmX2hpZGRlbiB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2TGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbmF2TGluayB7XFxyXFxuICAgIGNvbG9yOiAjMjQyODUxO1xcclxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1haW47XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjdweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6ICRyZWQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2J1dHRvbiB7XFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX21vYmlsZSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19uYXZJdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19tb2JpbGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDkwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcclxcbiAgICB6LWluZGV4OiA5OTtcXHJcXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDkwcHggOTBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTRweDtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyMXB4KSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiLFwiLm5hdmlnYXRpb25PcGVuZXIge1xcclxcbiAgLy9kaXNwbGF5OiBmbGV4O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIuNjdweDtcXHJcXG4gICAgYmFja2dyb3VuZDogJHJlZDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZDogJHJlZDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgdG9wOiAtNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6YWZ0ZXIge1xcclxcbiAgICAgIHRvcDogNnB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX2lzQWN0aXZlIHtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuXFxyXFxuICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogJHJlZDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCIsXCIubmF2aWdhdGlvbkJhY2tkcm9wIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogOTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB6LWluZGV4OiAtMTAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyMXB4KSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfaXNTaG93biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gICAgei1pbmRleDogOTg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fvcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW9zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnXHJcblxyXG5pbXBvcnQgU3BsaWRlIGZyb20gJ0BzcGxpZGVqcy9zcGxpZGUnO1xyXG5cclxuXHJcbm5ldyBTcGxpZGUoJy5zcGxpZGUnLCB7XHJcbiAgICB0eXBlOiAnbG9vcCcsXHJcbiAgICBzcGVlZDogOTAwLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBwZXJQYWdlOiAzLFxyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxyXG4gICAgcmV3aW5kOiB0cnVlLFxyXG4gICAgZm9jdXM6ICdjZW50ZXInLFxyXG4gICAgcGVyTW92ZTogMSxcclxuICAgIHVwZGF0ZU9uTW92ZTogdHJ1ZSxcclxuICAgIGRyYWc6IHRydWUsXHJcbiAgICBzd2lwZTogdHJ1ZSxcclxuICAgIHN0YXJ0OiAxLFxyXG4gICAgZml4ZWRIZWlnaHQ6IDc1MCxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMTE5ODoge1xyXG4gICAgICAgICAgICBwZXJQYWdlOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIHBlclBhZ2U6IDEsXHJcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkubW91bnQoKTtcclxuXHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuXHJcbkFPUy5pbml0KHtcclxuICAgIGVhc2luZzogJ2Vhc2Utb3V0JyxcclxuICAgIG9uY2U6IHRydWUsXHJcbiAgICBkaXNhYmxlOiAncGhvbmUnLFxyXG59KTtcclxuXHJcbi8vbWVudSBvcGVuXHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbk9wZW5lcicpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbW9iaWxlJyk7XHJcbmNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25CYWNrZHJvcCcpO1xyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25NZW51QnRuQ2xpY2spO1xyXG5cclxuZnVuY3Rpb24gb25NZW51QnRuQ2xpY2soZSkge1xyXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCduYXZpZ2F0aW9uT3BlbmVyX2lzQWN0aXZlJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgYmFja2Ryb3AuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbkJhY2tkcm9wX2lzU2hvd24nKTtcclxufVxyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgb25TY3JvbGxDaGFuZ2VCYWNrZ3JvdW5kKClcclxufSlcclxuXHJcbmZ1bmN0aW9uIG9uU2Nyb2xsQ2hhbmdlQmFja2dyb3VuZCgpIHtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsWSA+IDE1ID8gaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9iYWNrZ3JvdW5kJykgOiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX2JhY2tncm91bmQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5zY3JvbGxZID4gMTUgPyBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX2JhY2tncm91bmQnKSA6IGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfYmFja2dyb3VuZCcpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiU3BsaWRlIiwidHlwZSIsInNwZWVkIiwiYXV0b3BsYXkiLCJwZXJQYWdlIiwiYXJyb3dzIiwicGFnaW5hdGlvbiIsInBhdXNlT25Gb2N1cyIsInJld2luZCIsImZvY3VzIiwicGVyTW92ZSIsInVwZGF0ZU9uTW92ZSIsImRyYWciLCJzd2lwZSIsInN0YXJ0IiwiZml4ZWRIZWlnaHQiLCJicmVha3BvaW50cyIsIm1vdW50IiwiQU9TIiwiaW5pdCIsImVhc2luZyIsIm9uY2UiLCJkaXNhYmxlIiwibWVudUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJiYWNrZHJvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1lbnVCdG5DbGljayIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJoZWFkZXIiLCJvblNjcm9sbENoYW5nZUJhY2tncm91bmQiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==