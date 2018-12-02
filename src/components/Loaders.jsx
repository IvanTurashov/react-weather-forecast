import React from 'react';
import styled, { css } from 'react-emotion';
import GlobalIcon from '../../assets/global-loader.gif';
import LoaderIcon from '../../assets/loader.gif';
import ErrorIcon from '../../assets/error.png';

// CSS

const ContainerCSS = css`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const IndicatorCSS = css`
  background-repeat: no-repeat;
  background-size: cover;
`;

// Global loader

const GlobalContainer = styled('div')`
  ${ContainerCSS};
  position: fixed;
  z-index: 1000;
`;

const GlobalIndicator = styled('div')`
  width: 72px;
  height: 72px;
  background-image: url(${GlobalIcon});
  ${IndicatorCSS};
`;

export function GlobalLoader() {
    return (
        <GlobalContainer>
            <GlobalIndicator />
        </GlobalContainer>
    );
}

// Loader

export const Loader = styled('div')`
  position: relative;

  &::after {
      display: none;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff center center no-repeat;
      opacity: 0.8;
      
      ${({ showLoader }) => showLoader && css`
          display: block;
          background-image: url(${LoaderIcon});
      `}
      
      ${({ showError }) => showError && css`
          display: block;
          background-image: url(${ErrorIcon});
      `}
  }
`;