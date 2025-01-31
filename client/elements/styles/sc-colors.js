import { css } from 'lit-element';

export const SCColors = css`
  html {
    /* Text */
    --sc-primary-text-color: rgb(34, 33, 32);
    --sc-secondary-text-color: rgb(116, 115, 114);
    --sc-tertiary-text-color: rgb(255, 255, 255);
    --sc-icon-color: rgb(159, 158, 157);
    --sc-icon-color-opaque: rgba(159, 158, 157, 0.3);
    /* Main colors */
    --sc-primary-color: #ce8400;
    --sc-primary-color-light: #ffcb61;
    --sc-primary-color-light-transparent: rgba(255, 203, 97, 0.3);
    --sc-primary-color-medium: #f6b735;
    --sc-primary-color-dark: rgb(161, 108, 0);
    --sc-primary-color-darkest: rgb(138, 93, 0);
    --sc-primary-accent-color: #43a047;
    --sc-primary-accent-color-light: #52c756;
    --sc-primary-accent-color-light-transparent: rgba(67, 160, 71, 0.1);
    --sc-primary-accent-color-dark: #3b763b;
    --sc-secondary-accent-color: #9c27b0;

    /* Background colors */
    --sc-primary-background-color: rgb(250, 249, 248);
    --sc-secondary-background-color: rgb(255, 255, 255);
    --sc-tertiary-background-color: rgb(244, 243, 242);

    /* Other colors */
    --sc-border-color: rgba(0, 0, 0, 0.12);
    --sc-textual-info-background-color: rgb(227, 226, 225);
    --sc-toast-error-color: #f44336;
    --sc-toast-success-color: #43a047;
    --sc-pie-chart-bg-color: #e1f7d0;
    --sc-pie-chart-fill-color: #c1eda1;
  }
`;
