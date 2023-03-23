import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin-top: 50px;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0px 8px 20px rgba(28, 28, 30, 0.5),
    0px 4px 10px rgba(255, 255, 255, 0.1);
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-bottom: 40px;
`;

export const ProfileAvatar = styled.img`
  margin-top: 35px;
  margin-bottom: 35px;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: rgb(229, 229, 229);
`;

export const ProfileName = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const ProfileTagLocation = styled.p`
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  color: #867c7c;
`;

export const ProfileStats = styled.ul`
  display: flex;
  border-top: 1px solid rgb(191, 191, 191);
  height: 80px;
  background-color: rgb(229, 229, 229);
`;

export const ProfileStat = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    border-right: 1px solid rgb(191, 191, 191);
  }
`;

export const ProfileLabel = styled.span`
  color: #867c7c;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const ProfileQuantity = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
