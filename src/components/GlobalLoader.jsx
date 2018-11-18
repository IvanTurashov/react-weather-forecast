import React from 'react';
import styled from 'react-emotion';
import LoaderIcon from '../../assets/loader.gif';

const LoaderContainer = styled('div')`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1000;
`;

const LoaderIndicator = styled('div')`
  width: 72px;
  height: 72px;
  background-image: url(${LoaderIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function () {
    return (
        <LoaderContainer>
            <LoaderIndicator />
        </LoaderContainer>
    );
};