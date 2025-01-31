import { html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import SCTopSheetCommon from './sc-top-sheet-common';
import { typographyCommonStyles } from '../styles/sc-typography-common-styles.js';

class SCTopSheetPublicationLegacy extends SCTopSheetCommon {
  constructor() {
    super();
    this.infoDialogMetaArea = '';
    this.localizedStringsPath = '/localization/elements/sc-site-layout';
  }

  static get styles() {
    return [
      super.styles,
      typographyCommonStyles,
      css`
        :host {
          font-family: var(--sc-sans-font);
          line-height: 1.333;
        }

        h2 {
          font-family: var(--sc-serif-font);
          color: var(--sc-primary-text-color);
        }
      `,
    ];
  }

  static get properties() {
    return {
      infoDialogMetaArea: { type: String },
      localizedStringsPath: { type: String },
    };
  }

  _stateChanged(state) {
    super._stateChanged(state);
    if (this.infoDialogMetaArea !== state.suttaMetaText) {
      this.infoDialogMetaArea = state.suttaMetaText;
    }
  }

  render() {
    return html`
      <section>
        <h2>${this.localize('publicationDetails')}</h2>
        ${unsafeHTML(this.infoDialogMetaArea)}
      </section>
    `;
  }
}

customElements.define('sc-top-sheet-publication-legacy', SCTopSheetPublicationLegacy);
