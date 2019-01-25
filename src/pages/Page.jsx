import React, { Component } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import StyleConst from '../style/constants';
import { Transition } from "react-transition-group";

const PageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${StyleConst.menuHeight});
  opacity: ${props => props.transitionState === 'entered' ? 1 : '0'};
  transition: opacity .8s ease-out;
  box-sizing: border-box;

  @media (max-width: ${StyleConst.xs}) and (max-height: ${StyleConst.xs}) {
    height:  calc(100vh - ${StyleConst.menuHeightSlim});
  }
  
  ${({ fullSize }) => fullSize && css`
    height: 100vh;
  `}

  ${({ background }) => background && css`
    background: ${background};
  `}
  
  ${({ center }) => center && css`
    align-items: center;
    justify-content: center;
  `}
`;

class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    render() {
        const { mounted } = this.state;
        const { children, ...rest } = this.props;

        return (
            <Transition in={mounted}
                        timeout={0}
                        unmountOnExit>
                {(state) => (
                    <PageContainer
                        transitionState={state}
                        {...rest}>
                        {children}
                    </PageContainer>
                )}
            </Transition>
        )
    }
}


export default Page;