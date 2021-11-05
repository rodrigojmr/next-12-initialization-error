import { Configuration, apply } from 'twind';

import { theme } from './theme';

export const config: Configuration = {
  mode: 'silent',
  preflight: (preflight, { theme }) => ({
    ...preflight,
    html: {
      'scroll-behavior': 'smooth',
      'scroll-padding': '4.5rem'
    },
    // "h1, h2, h3, h4, h5, h6": {
    //   fontFamily: "Montserrat",
    // },
    // body: {
    //   fontFamily: "Gotham",
    // },
    // "*[class^=snipcart]": {
    //   margin: "0",_app
    //   padding: "0",
    //   border: "0",
    //   font: "inherit",
    //   color: "inherit",
    //   background: "transparent",
    //   display: "block",
    //   lineHeight: "1",
    //   listStyle: "none",
    //   quotes: "none",
    //   borderCollapse: "collapse",
    //   borderSpacing: "0",
    //   boxSizing: "border-box",
    //   "-webkit-font-smoothing": "antialiased",
    //   "-moz-osx-font-smoothing": "grayscale",
    // },
    // Modal background
    // ".snipcart-modal__container, .snipcart-modal, .snipcart-cart-header": {
    //   backgroundColor: `${theme("colors.gray.100")} !important`,
    // },
    '.snipcart,  .snipcart__actions--link, .snipcart-button-link, .snipcart-modal__close': apply`font-secondary!`,
    // Font weight
    '.snipcart__font--black, .snipcart__font--black, .snipcart__font--subtitle, .snipcart-button-link': apply`font-medium!`,

    // SVG Colors
    '.snipcart *:not(.snipcart-featured-payment-methods__list-item):not(.is-danger):not(.snipcart-base-button__icon):not(.snipcart__box--badge) > svg path':
      {
        fill: theme('colors.green.600')
      },
    // Hide individual price
    // ".snipcart-item-quantity__total-price": {
    //   display: "none !important",
    // },
    // // Hide "portes de envio serão calculados"
    // ".snipcart-summary-fees__notice": {
    //   display: "none !important",
    // },
    // Hide Cart Quantity
    '.snipcart-item-line__quantity, .snipcart-item-line__info, .snipcart-item-line__variants':
      {
        display: 'none !important'
      },
    // No margin bottom between cart items
    '.snipcart-item-line__container': {
      margin: '0px !important',
      '@media (max-width: 640px)': {
        marginBottom: '0 !important',
        padding: '20px 15px !important'
      }
    },
    '.snipcart-item-line__media--small': {
      width: '50px !important',
      height: '50px !important',
      flexShrink: 0,
      marginRight: '10px !important'
    },
    '.snipcart-item-line__media--small img': {
      width: '100% !important',
      objectFit: 'cover !important',
      maxWidth: 'none !important'
    },
    '.snipcart-item-quantity__quantity': {
      maxWidth: '120px !important'
    },
    // Adjust small product image
    '.snipcart-item-line__image': {
      objectFit: 'cover',
      height: '100%'
    },
    // FAQ Question Color
    '.accordion-heading': {
      fontWeight: 500,
      color: theme('colors.newGreen.600')
    },
    '#rcc-decline-button': {
      display: 'none !important'
    },
    'div[id^="gb-widget"] > div > a:last-child': {
      display: 'none !important'
    }
  }),
  prefix: true,
  theme: {
    extend: theme
  }
};
