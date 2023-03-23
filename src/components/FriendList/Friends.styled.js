import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;

  border-radius: 4px;
  box-shadow: 0px 8px 20px rgba(28, 28, 30, 0.5);
`;

export const FriendStatsLabel = styled.span`
  display: block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 15px;

  ${props =>
    props.stats ? `background-color: green` : `background-color: red`};
`;

export const FriendAvatar = styled.img`
  margin-right: 15px;
  border-radius: 5px;
  background-color: rgb(229, 229, 229);
`;

export const FriendName = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
