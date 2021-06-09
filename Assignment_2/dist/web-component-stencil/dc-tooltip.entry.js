import { r as registerInstance, h, g as getElement } from './index-c78f5c7d.js';

const tooltipCss = ":host{position:relative;}:host-context(p){font-weight:bold}.icon{background:black;color:white;padding:0.15rem 0.5rem;text-align:center;border-radius:50%;margin-left:5px}div{font-weight:normal;background-color:black;color:white;position:absolute;z-index:10;top:1.5rem;left:var(--left);width:120px;padding:0.5rem;border-radius:3px;box-shadow:1px 1px 6px rgba(0,0,0,0.26);display:none}:host([opened]) div{display:block}";

const SideDrawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opened = false;
  }
  onOpen(event) {
    if (this.opened) {
      this.opened = false;
    }
    else {
      this.opened = true;
      const div = this.element.shadowRoot.querySelector('div');
      console.log(div);
      // console.lo
      div.style.setProperty('--left', `calc(${event.clientX}px - 60px)`);
    }
  }
  render() {
    return [
      h("slot", null),
      h("span", { class: "icon", onClick: this.onOpen.bind(this) }, "?"),
      h("div", null, this.text)
    ];
  }
  get element() { return getElement(this); }
};
SideDrawer.style = tooltipCss;

export { SideDrawer as dc_tooltip };
