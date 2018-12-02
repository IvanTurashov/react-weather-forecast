import styled from 'react-emotion';
import StyleConst from './constants';

export const Page = styled('div')`
`;

export const Row = styled('div')`
  display: flex;
`;

export const ListItemTitle = styled('li')`
  padding: 0 8px 0 calc(30% + 16px);
  font-size: 16px;
  font-weight: bold;
  
  & + * {
    margin-top: 8px;
  }
`;

export const ListItem = styled('li')`
  display: flex;
  flex-direction: row;
  align-content: baseline;
  justify-content: flex-start;
  
  & > *:nth-child(1) {
    text-align: right;
    color: #666666;
  }
  
  & > *:nth-child(2) {
    padding-left: 30px;
    word-break: break-word;
    min-height: 19px;
  }
  
  & + * {
    margin-top: 8px;
  }
`;

export const List = styled('ul')`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  padding: 0;
`;