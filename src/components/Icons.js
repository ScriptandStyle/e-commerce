// src/components/Icons.js
import React from 'react';

// Define SVG paths for our icons
const svgIcons = {
  chevronDown: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
  settings: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
  logIn: 'M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z',
  user: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  edit: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
  x: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  logOut: 'M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z',
  star: 'M12 2l2.4 7.4h7.6l-6 4.4 2.4 7.4-6-4.4-6 4.4 2.4-7.4-6-4.4h7.6z',
  starHalf: 'M12 2l2.4 7.4h7.6l-6 4.4 2.4 7.4-6-4.4v-14.8z',
  starEmpty: 'M12 2l2.4 7.4h7.6l-6 4.4 2.4 7.4-6-4.4-6 4.4 2.4-7.4-6-4.4h7.6l2.4-7.4z',
  shoppingCart: 'M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 3h4l2.7 11h9.3l2-8h-13.6m15.6 0h-2l-2 8h-9.3l-.7-3h12m-12.7-8h-4.3l-.7-3h-2v2h1l3.6 14h12.4c-.7 1.2-.7 2.8 0 4h2c-.7-1.2-.7-2.8 0-4h-2l-2-8h2l2 8',
  alertCircle: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v7h-2zm0 8h2v2h-2z',
  checkCircle: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13l-4 4 1.41 1.41L10 9.83l7.59 7.59L19 16l-9-9z',
  plus: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
  file: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z',
  info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  review: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z',
  bolt: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-13l-4 4 1.41 1.41L10 9.83l7.59 7.59L19 16l-9-9z',
  facebook: 'M23 3H5c-1.1 0-2 .9-2 2v18l4-4h6V5h4v14h6l4 4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 16H7v-7h7v7zm-4-2h-3v-3h3v3zm0-4H7v-3h7v3z',
  twitter: 'M23 3H5c-1.1 0-2 .9-2 2v18l4-4h6V5h4v14h6l4 4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 16H7v-7h7v7zm-4-2h-3v-3h3v3zm0-4H7v-3h7v3z',
  pinterest: 'M23 3H5c-1.1 0-2 .9-2 2v18l4-4h6V5h4v14h6l4 4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 16H7v-7h7v7zm-4-2h-3v-3h3v3zm0-4H7v-3h7v3z',
  cart: 'M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 3h4l2.7 11h9.3l2-8h-13.6m15.6 0h-2l-2 8h-9.3l-.7-3h12m-12.7-8h-4.3l-.7-3h-2v2h1l3.6 14h12.4c-.7 1.2-.7 2.8 0 4h2c-.7-1.2-.7-2.8 0-4h-2l-2-8h2l2 8',
};

// Create SVG component function
const SvgIcon = ({ path, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d={path} />
  </svg>
);

export const Icons = {
  ChevronDown: (props) => <SvgIcon path={svgIcons.chevronDown} {...props} />,
  Settings: (props) => <SvgIcon path={svgIcons.settings} {...props} />,
  LogIn: (props) => <SvgIcon path={svgIcons.logIn} {...props} />,
  User: (props) => <SvgIcon path={svgIcons.user} {...props} />,
  Edit: (props) => <SvgIcon path={svgIcons.edit} {...props} />,
  X: (props) => <SvgIcon path={svgIcons.x} {...props} />,
  LogOut: (props) => <SvgIcon path={svgIcons.logOut} {...props} />,
  Star: (props) => <SvgIcon path={svgIcons.star} {...props} />,
  StarHalf: (props) => <SvgIcon path={svgIcons.starHalf} {...props} />,
  StarEmpty: (props) => <SvgIcon path={svgIcons.starEmpty} {...props} />,
  ShoppingCart: (props) => <SvgIcon path={svgIcons.shoppingCart} {...props} />,
  AlertCircle: (props) => <SvgIcon path={svgIcons.alertCircle} {...props} />,
  CheckCircle: (props) => <SvgIcon path={svgIcons.checkCircle} {...props} />,
  Plus: (props) => <SvgIcon path={svgIcons.plus} {...props} />,
  File: (props) => <SvgIcon path={svgIcons.file} {...props} />,
  Info: (props) => <SvgIcon path={svgIcons.info} {...props} />,
  Review: (props) => <SvgIcon path={svgIcons.review} {...props} />,
  Bolt: (props) => <SvgIcon path={svgIcons.bolt} {...props} />,
  Facebook: (props) => <SvgIcon path={svgIcons.facebook} {...props} />,
  Twitter: (props) => <SvgIcon path={svgIcons.twitter} {...props} />,
  Pinterest: (props) => <SvgIcon path={svgIcons.pinterest} {...props} />,
  Cart: (props) => <SvgIcon path={svgIcons.cart} {...props} />,
};