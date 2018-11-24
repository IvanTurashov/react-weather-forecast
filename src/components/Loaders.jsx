import React from 'react';
import styled, { css } from 'react-emotion';
import GlobalIcon from '../../assets/global-loader.gif';
import Icon from '../../assets/loader.gif';

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

const Container = styled('div')`
  ${ContainerCSS};
  position: absolute;
  z-index: 1;
  background-color: rgba(255, 255, 255, .3);
`;

const Indicator = styled('div')`
  width: 48px;
  height: 6px;
  background-image: url(${Icon});
  ${IndicatorCSS};
`;

export function Loader() {
    return (
        <Container>
            <Indicator />
        </Container>
    );
}