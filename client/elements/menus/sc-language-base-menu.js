import { html, LitElement, svg } from 'lit-element';
import { API_ROOT } from '../../constants.js';
import { store } from '../../redux-store';
import { LitLocalized } from '../addons/localization-mixin';
import { languageBaseMenuCss } from './sc-language-base-menu-css';
import { icon } from '../../img/sc-icon';
import '@material/mwc-list/mwc-list-item';
import { dispatchCustomEvent } from '../../utils/customEvent';

class LanguageBaseMenu extends LitLocalized(LitElement) {
  static get properties() {
    return {
      languageListResponse: Array,
      selectedLanguageNum: Number,
      localizedStringsPath: String,
      cloneName: String, // pass a unique name here to use in the language change event identifier.
      noRoot: Boolean, // If true, no root languages will be displayed.
      disabled: Boolean,
    };
  }

  get actions() {
    return {
      changeLanguage(language, fullName) {
        store.dispatch({
          type: 'CHANGE_SITE_LANGUAGE',
          language: language,
          fullName: fullName,
        });
      },
      changeLanguageMenuVisibility(visibility) {
        store.dispatch({
          type: 'CHANGE_LANGUAGE_MENU_VISIBILITY_STATE',
          languageMenuVisibility: visibility,
        });
      },
    };
  }

  get apiUrl() {
    return `${API_ROOT}/languages?all=true`;
  }

  constructor() {
    super();
    this.localizedStringsPath = '/localization/elements/sc-language-base-menu';
    this.languageListResponse = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this._fetchLanguageList();
  }

  _showMoreMenu() {
    this.actions.changeLanguageMenuVisibility(false);
  }

  languageTemplate(language) {
    return html`
      <mwc-list-item
        id="${language.uid}"
        @click="${this._selectedLanguageNumChanged} "
        class="language-name"
      >
        ${language.name}
      </mwc-list-item>
    `;
  }

  _selectedLanguageNumChanged(event) {
    if (!this.languageListResponse || this.languageListResponse.length === 0) {
      return;
    }
    if (!this.selectedLanguageNum && this.selectedLanguageNum !== 0) {
      return;
    }

    try {
      this.selectedLanguageNum = this._findChosenLanguageIndex(event.target.id);
      const chosenLanguage = this.languageListResponse[this.selectedLanguageNum];
      // If it's not a main language change menu (but a clone), dispatch an event
      if (this.cloneName) {
        dispatchEvent(
          new CustomEvent(`${this.cloneName}-language-changed`, {
            detail: { isoCode: chosenLanguage.iso_code, name: chosenLanguage.name },
            composed: true,
            bubbles: true,
          })
        );
      } else {
        this.actions.changeLanguage(chosenLanguage.iso_code, chosenLanguage.name);
      }
    } catch (e) {
      console.error(e);
    }

    dispatchCustomEvent(this, 'item-selected');
  }

  async _fetchLanguageList() {
    this.languageListResponse = await (await fetch(this.apiUrl)).json();

    if (this.noRoot) {
      this.languageListResponse = this.languageListResponse.filter(lang => !lang.is_root);
    }

    this.selectedLanguageNum = this._findChosenLanguageIndex(this.language);
  }

  _findChosenLanguageIndex(chosenLang) {
    try {
      return this.languageListResponse.findIndex(language => language.iso_code === chosenLang);
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  render() {
    return html`
      ${languageBaseMenuCss}

      <div class="menu-item-wrapper text-only">
        <mwc-icon-button
          title="Return to main menu"
          class="more-menu-return-arrow"
          @click="${this._showMoreMenu}"
        >
          ${icon.arrow_left}
        </mwc-icon-button>
        <span class="language-base-menu-head-main">Choose your language</span>
      </div>

      <div class="menu-item-wrapper text-only">
        <span class="language-base-menu-head-secondary"
          >Where available, view translations and site UI in selected language.</span
        >
      </div>

      <li divider role="separator"></li>
      ${this.languageListResponse.map(language => this.languageTemplate(language))}
    `;
  }
}

customElements.define('sc-language-base-menu', LanguageBaseMenu);
