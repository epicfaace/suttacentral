import { html, css } from 'lit-element';
import SCTopSheetCommon from './sc-top-sheet-common';

class SCTopSheetParallels extends SCTopSheetCommon {
  static get styles() {
    return [super.styles];
  }

  static get properties() {
    return {
      suttaplexItem: { type: Object },
    };
  }

  constructor() {
    super();
    this.suttaplexItem = [];
  }

  connectedCallback() {
    super.connectedCallback();
    import('../suttaplex/card/sc-suttaplex.js');
  }

  show() {
    this.style.display = 'block';
  }

  hide() {
    this.style.display = 'none';
  }

  render() {
    return html`
      <section>
        <sc-suttaplex
          .item=${this.suttaplexItem}
          .clearBorderRadius="${true}"
          .suttaplexListStyle="${''}"
        ></sc-suttaplex>
      </section>
    `;
  }
}

customElements.define('sc-top-sheet-parallels', SCTopSheetParallels);
