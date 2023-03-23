import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/Friends';
import friends from '../data/FriendList.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
