import React from 'react'
import './Inbox.scss'
import InboxFrame from './InboxFrame'
import SendMessage from './SendMessage'

function App() {
  return (
    <div className='inbox__wrap wrapper'>
      <div className="inbox__content content">
        <div className="chat">
          <InboxFrame />
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

export default App;
