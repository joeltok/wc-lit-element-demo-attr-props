import { html, css, LitElement } from 'lit';

export class MyWebComponent extends LitElement {
  static properties = {
    stringAttribute: {type: String},
    numberAttribute: {type: Number},
    booleanAttribute: {type: Boolean},
    objectProperty: {type: Object, attribute: false},
    arrayProperty: {type: Array, attribute: false},

    jsonStringifiedObjectAttribute: {type: Object},
    jsonStringifiedArrayAttribute: {type: Array},

    lowercaseattributecheck: {type: String},
    lowercaseattributeCHECK: {type: String},

    reactiveCount:  {type: Number, attribute: false},
  };

  constructor() {
    super();
  }

  updateNonReactiveCount() {
    this.dispatchEvent(new CustomEvent('update-non-reactive-count', { 
      detail: {
        nonReactiveCount: ++this.nonReactiveCount,
      }
    }))
  }

  updateReactiveCount() {
    this.dispatchEvent(new CustomEvent('update-reactive-count', { 
      detail: {
        reactiveCount: ++this.reactiveCount,
      }
    }))
  }

  render() {
    return html`
      <p>Welcome to My Web Componet. Let's display some attributes and properties.</p>
      <h3>Attributes and Properties</h3>
      <ul>
        <li>stringAttribute: ${this.stringAttribute}, which is of type ${typeof this.stringAttribute}</li>
        <li>numberAttribute: ${this.numberAttribute}, which is of type ${typeof this.numberAttribute}</li>
        <li>booleanAttribute: ${this.booleanAttribute}, which is of type ${typeof this.booleanAttribute}</li>
        <li>objectProperty: ${JSON.stringify(this.objectProperty)}
        <li>arrayProperty: ${JSON.stringify(this.arrayProperty)}
      </ul>
      <h3>JSON Stringified attributes</h3>
      <ul>
        <li>jsonStringifiedObjectAttribute: ${JSON.stringify(this.jsonStringifiedObjectAttribute)}</li>
        <li>jsonStringifiedArrayAttribute: ${JSON.stringify(this.jsonStringifiedArrayAttribute)}</li>
      </ul>
      <h3>Attribute naming conventions + identical lowercased attributes</h3>
      <ul>
        <li>lowercaseattributecheck: ${this.lowercaseattributecheck}</li>
        <li>lowercaseattributeCHECK: ${this.lowercaseattributeCHECK}</li>
      </ul>
      </h3>
      <h3>Setting properties without reactivity + sending events</h3>
      <ul>
        <li>nonReactiveCount: ${this.nonReactiveCount}</li>
        <li>reactiveCount: ${this.reactiveCount}</li>
        </ul>        
        <button @click=${this.updateNonReactiveCount}>Update Non Reactive Count</button>
        <button @click=${this.updateReactiveCount}>Update Reactive Count</button>
      </h3>
    `;
  }
}