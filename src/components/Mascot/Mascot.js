import React from 'react';
import PropTypes from 'prop-types';

const Mascot = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 194 296"
    >
      <defs>
        <ellipse id="b" cx="91" cy="271.775" rx="91" ry="15.892" />
        <filter
          id="a"
          width="111%"
          height="162.9%"
          x="-5.5%"
          y="-25.2%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation="3"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125905797 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path id="c" d="M0 .208h175.995v215.65H0" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use
          fill="#000"
          filter="url(#a)"
          xlinkHref="#b"
          transform="translate(6)"
        />
        <g transform="translate(9.26 55.446)">
          <mask id="d" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <path
            fill="#F6C823"
            fillRule="nonzero"
            d="M175.83 122.78c-1.035-14.577-4.475-28.49-9.893-41.414-1.435-3.423-2.96-6.8-4.668-10.075 6.05-3.507 10.123-9.942 10.123-17.323 0-11.124-9.218-20.14-20.59-20.14H25.21c-11.37 0-20.59 9.016-20.59 20.14 0 7.375 4.066 13.806 10.11 17.316-1.707 3.273-3.232 6.65-4.667 10.072C4.643 94.28 1.2 108.198.165 122.778c-.08 1.734-.165 3.468-.165 5.22 0 12.6 2.095 24.716 5.91 36.066 1.136 3.196 3.323 8.698 6.003 12.372.293.377.57.745.902 1.14l.118.143c1.19 1.397 2.63 2.894 4.364 4.378 1.75 1.486 3.776 2.97 6.083 4.212 2.28 1.235 4.94 2.233 7.565 2.564 2.747.385 5.646-.076 7.858-1.595 2.256-1.483 3.868-4.076 4.802-7.008 1.862-5.94 1.656-12.67 1.085-18.755-.623-6.137-1.76-11.84-2.89-16.685-2.29-9.698-4.537-15.995-4.537-15.995s2.685 6.122 5.673 15.7c1.477 4.792 3.03 10.45 4.11 16.673.998 6.212 1.803 13.054.176 20.048-.835 3.436-2.577 7.06-5.75 9.51-3.173 2.49-7.142 3.262-10.707 3.346-3.752.025-7.084-.812-10.105-1.938-.368-.14-.682-.318-1.04-.466 5.525 8.15 12.104 15.542 19.502 22.067 3.946 2.122 10.376 3.69 18.893-.636 14.85-7.542 29.7-8.38 29.7-8.38s14.85.838 29.702 8.38c9.98 5.07 17.093 2.052 20.698-.474 6.87-6.236 13.01-13.222 18.215-20.887-.334.136-.626.303-.968.432-3.022 1.126-6.353 1.964-10.106 1.938-3.564-.084-7.533-.855-10.708-3.345-3.17-2.45-4.913-6.074-5.748-9.51-1.627-6.995-.823-13.837.176-20.048 1.08-6.224 2.633-11.882 4.11-16.674 2.988-9.578 5.672-15.7 5.672-15.7s-2.247 6.297-4.538 15.995c-1.128 4.846-2.265 10.548-2.89 16.685-.57 6.086-.775 12.816 1.087 18.756.933 2.93 2.546 5.524 4.8 7.005 2.214 1.52 5.112 1.98 7.86 1.595 2.624-.33 5.285-1.328 7.565-2.563 2.307-1.242 4.333-2.727 6.083-4.213 2.355-2.017 4.138-4.036 5.507-5.818 2.137-2.972 3.952-7.08 5.165-10.223 4.263-11.927 6.598-24.74 6.598-38.094 0-1.754-.085-3.487-.164-5.22"
            mask="url(#d)"
          />
        </g>
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M78.796 123.8c0 10.152-8.412 18.38-18.79 18.38-10.375 0-18.787-8.228-18.787-18.38 0-10.15 8.41-18.38 18.787-18.38 10.377 0 18.79 8.23 18.79 18.38"
        />
        <path
          fill="#25282C"
          fillRule="nonzero"
          d="M68.37 123.8c0 4.52-3.745 8.18-8.363 8.18-4.617 0-8.36-3.66-8.36-8.18 0-4.516 3.743-8.178 8.36-8.178 4.618 0 8.362 3.662 8.362 8.18M34.47 99.31c-5.705 0-10.33 4.523-10.33 10.103 0 3.62 1.962 6.77 4.886 8.555 3.574-5.743 7.563-11.21 11.95-16.343-1.78-1.426-4.026-2.316-6.506-2.316M160.064 99.31c-2.486 0-4.735.893-6.517 2.323 4.386 5.134 8.374 10.6 11.947 16.342 2.93-1.783 4.9-4.937 4.9-8.562 0-5.58-4.626-10.104-10.33-10.104"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M58.844 117.876c0 2.48-2.055 4.49-4.59 4.49-2.535 0-4.59-2.01-4.59-4.49 0-2.48 2.055-4.49 4.59-4.49 2.535 0 4.59 2.01 4.59 4.49M153.296 123.8c0 10.152-8.412 18.38-18.788 18.38-10.377 0-18.788-8.228-18.788-18.38 0-10.15 8.41-18.38 18.788-18.38 10.376 0 18.788 8.23 18.788 18.38"
        />
        <path
          fill="#25282C"
          fillRule="nonzero"
          d="M142.87 123.8c0 4.52-3.745 8.18-8.362 8.18-4.618 0-8.362-3.66-8.362-8.18 0-4.516 3.744-8.178 8.362-8.178 4.617 0 8.36 3.662 8.36 8.18"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M133.344 117.876c0 2.48-2.055 4.49-4.59 4.49-2.535 0-4.59-2.01-4.59-4.49 0-2.48 2.055-4.49 4.59-4.49 2.535 0 4.59 2.01 4.59 4.49M122.522 159.292c0 13.802-11.437 24.99-25.546 24.99-14.108 0-25.545-11.188-25.545-24.99 0-13.802 11.438-24.99 25.546-24.99 14.11 0 25.546 11.188 25.546 24.99"
        />
        <path
          fill="#25282C"
          fillRule="nonzero"
          d="M95.318 184.2c.55.036 1.098.083 1.657.083.56 0 1.108-.047 1.66-.082v-32.48h-3.317v32.48"
        />
        <path
          fill="#25282C"
          fillRule="nonzero"
          d="M110.23 145.647c0-.346-.067-.672-.162-.987-.042-.155-.075-.246-.075-.246h-.003c-.12-.308-.282-.592-.48-.85v-.004s-1.5-3.027-12.383-3.055v-.004c-.026 0-.05.003-.075.003l-.076-.002v.005c-6.332.016-9.48 1.045-11.01 1.906-.924.363-1.65 1.092-2.003 2.004h-.006s-.04.107-.085.286c-.088.303-.15.616-.15.947 0 .03.008.057.01.087-.066 1.57.46 4.335 4.1 7.17 3.58 2.792 6.33 3.702 7.843 4.004.115.026.233.042.35.06.595.095.95.094.95.094s.353 0 .946-.093c.12-.02.242-.036.36-.063 1.513-.303 4.262-1.215 7.838-4.002 3.624-2.825 4.16-5.58 4.1-7.152.002-.036.012-.07.012-.106"
        />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M23.126 223.555s-1.365-1.736-2.868-4.673c-1.513-2.923-3.047-7.054-4.027-11.302-.995-4.248-1.47-8.583-1.564-11.838-.087-3.26.122-5.434.122-5.434s.163.526.388 1.45c.22.92.53 2.233.906 3.81.72 3.15 1.586 7.33 2.572 11.47.94 4.15 2.03 8.258 2.928 11.342l1.107 3.74c.296.905.436 1.435.436 1.435M150.53 197.31s-.04 1.463-.27 3.584c-.246 2.12-.726 4.89-1.3 7.633-.598 2.738-1.28 5.458-1.894 7.5-.286 1.022-.627 1.866-.8 2.468-.202.598-.352.938-.352.938s-.242-1.444-.26-3.603c-.01-2.156.28-5.01.873-7.8.603-2.79 1.5-5.51 2.358-7.49.87-1.978 1.644-3.23 1.644-3.23M34.14 91.717s-1.536.576-3.54 1.754c-1.01.57-2.135 1.29-3.26 2.137-1.134.836-2.248 1.83-3.273 2.902-1.056 1.048-1.942 2.24-2.79 3.364-.762 1.178-1.503 2.284-2.042 3.306-.606.99-1.028 1.872-1.34 2.49-.32.617-.538.968-.538.968s.004-.398.072-1.094c.108-.683.103-1.72.476-2.875.262-1.193.807-2.514 1.493-3.898.742-1.356 1.71-2.714 2.86-3.93 2.333-2.412 5.375-4.06 7.794-4.655 2.42-.647 4.087-.47 4.087-.47"
        />
        <g fillRule="nonzero">
          <path
            fill="#CA2439"
            d="M170.485 238.147c3.657-5.882 8.94-17.818 8.94-17.818s2.223-6.563 2.68-9.574c.46-3.012 1.205-4.87 1.205-4.87s2.67-18.18 2.444-27.658c-.175-7.324-3.473-15.423-3.648-22.747-8.553-2.56-47.904 22.748-47.904 22.748-1.124-.707-18.43 13.884-35.84 13.756-15.97-.118-86.146-32.138-86.146-32.138-1.18-.19-4.87 11.885-4.133 24.35.623 10.547 1.37 27.33 3.114 32.397 2.363 6.86 8.633 13.376 10.993 19.246 1.897 4.72 5.11 9.207 7.006 13.928 0 0 23.088 2.51 49.38 2.8 30.42.333 79.124-1.616 85.42-2.8 2.445-3.93 4.045-7.69 6.49-11.62z"
          />
          <path
            fill="#F6C724"
            d="M48.655 210.605S59.78 236.203 41.3 239.94c-18.48 3.738-30.496-23.15-30.496-23.15l37.85-6.185z"
          />
          <g fill="#1F2228">
            <path d="M49.85 208.868l1.662 8.44-38.175 8.833-2.835-10.56" />
            <path d="M41.006 192.012l1.775 3.647.876 1.758.976 1.965 1.036 2.103c.347.72.7 1.45 1.055 2.18l1.03 2.19c.324.73.644 1.446.954 2.14l.835 2.03c.268.644.45 1.286.667 1.856.2.577.305 1.142.447 1.62.124.488.132.96.194 1.32.044.177.02.362-.007.526l-.055.41c-.03.223-.044.34-.044.34l.098-.364.12-.44c.052-.175.105-.373.094-.564-.004-.39.056-.89-.002-1.41-.075-.51-.113-1.106-.255-1.71-.15-.603-.272-1.273-.494-1.938-.22-.668-.412-1.388-.704-2.092-.276-.71-.537-1.455-.876-2.178-.332-.727-.67-1.465-1.005-2.203l-1.09-2.164-1.128-2.06-1.114-1.9c-.37-.596-.72-1.16-1.045-1.68-1.32-2.068-2.337-3.384-2.337-3.384" />
          </g>
          <path
            fill="#F6C724"
            d="M144.064 210.605s-11.124 25.598 7.356 29.335c18.48 3.738 30.496-23.15 30.496-23.15l-37.852-6.185z"
          />
          <g fill="#1F2228">
            <path d="M143.333 208.868l-3.562 8.6 40.075 8.673 2.835-10.56" />
            <path d="M152.177 192.012l-1.776 3.647-.874 1.758-.975 1.965-1.035 2.103-1.055 2.18-1.03 2.19c-.324.73-.645 1.446-.954 2.14l-.835 2.03c-.268.644-.448 1.286-.666 1.856-.2.577-.306 1.142-.45 1.62-.123.488-.13.96-.192 1.32-.044.177-.02.362.008.526.02.16.04.3.054.41l.045.34-.1-.364c-.03-.12-.072-.266-.118-.44-.053-.175-.106-.373-.095-.564.003-.39-.056-.89.002-1.41.074-.51.112-1.106.254-1.71.148-.603.27-1.273.493-1.938.218-.668.412-1.388.703-2.092.277-.71.538-1.455.877-2.178.33-.727.67-1.465 1.005-2.203l1.09-2.164 1.128-2.06 1.114-1.9 1.046-1.68c1.32-2.068 2.337-3.384 2.337-3.384" />
          </g>
        </g>
        <path
          fill="#DEDAB8"
          d="M95.318 208.717H90.23v2.13h5.088v6.518H90.23v2.126h5.088v6.523H90.23v2.127h5.088v6.517H90.23v2.128h5.088v12.946h-66.22c-.164 3.04 5.39 4.665 5.39 4.665h126.607c2.533-3.25 2.694-1.624 2.533-4.664H97.405v-12.945h5.09v-2.128h-5.09v-6.517h5.09v-2.127h-5.09v-6.522h5.09v-2.125h-5.09v-6.517h5.09v-2.13h-5.09V191.12c-.345.018-.688.042-1.043.042-.356 0-.7-.024-1.044-.042v17.595z"
        />
        <path
          fill="#181C38"
          d="M143.687 46.315C143.687 20.737 122.787 0 97.002 0c-25.785 0-46.69 20.737-46.69 46.315 0 0 .518 29.088-4.747 42.138-2.963 7.345 28.342 15.24 56.974 14.216 28.632-1.025 42.928-9.676 44.312-11.058 3.165-3.16-3.165-45.297-3.165-45.297z"
        />
        <path
          stroke="#1F2228"
          strokeWidth="1.571"
          d="M47.148 91.612s-17.69 29.445-12.66 55.284c5.028 25.84 34.816 44.226 62.512 44.226 27.696 0 58.298-23.55 62.513-47.385 4.216-23.835-14.243-53.704-14.243-53.704"
        />
        <path
          stroke="#1F2228"
          strokeWidth="3.142"
          d="M12.33 159.532s14.212 6.115 31.653 14.216c17.44 8.1 40.052 18.954 53.808 18.954 15.744 0 39.663-16.083 58.558-26.852 18.895-10.77 25.322-11.057 25.322-11.057"
        />
      </g>
    </svg>
  );
};

Mascot.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

Mascot.defaultProps = {
  width: '194',
  height: '296'
};

export default Mascot;
