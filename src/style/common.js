import styled from '@emotion/styled';

export const List = styled('ul')`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  padding: 0;
`;

export const ListItem = styled('li')`
  display: flex;
  flex-direction: row;
  align-content: baseline;
  justify-content: flex-start;
  
  & > *:nth-child(1) {
    text-align: right;
    color: #666;
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