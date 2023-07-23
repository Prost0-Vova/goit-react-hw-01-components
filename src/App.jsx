import React from "react";
import Profile from "./components/ProfileCard";
import data from './data/data.json';
import Statistics from './components/Statistics/StatisticsStyledComponents';
import friend from './data/friends.json';
import Friends from './components/FriendsList';
import transactions from './data/transactions.json';
import Transactions from './components/Transactions';


export const App = () => {
    return (
      <>
        <Profile />
        <Statistics title="Upload stats" stats={data} />
        <Friends friends={friend} />
        <Transactions items={transactions} />;
      </>
    );
  };
