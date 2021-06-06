import React from 'react'

//data
import userData from './data/user.json'
import friendsData from './data/firends.json'
import statsData from './data/statistical-data.json'
import transactionsData from './data/transactions.json'

//components
import Profile from './components/Profile'
import FriendList from './components/FriendList'
import Statistics from './components/Statistics'
import TransactionHistory from './components/TransactionHistory'

function App() {
  return (
    <div>
      <Profile user={userData} />
      <FriendList friends={friendsData} />
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
      <TransactionHistory transactions={transactionsData} />
    </div>
  )
}

export default App
