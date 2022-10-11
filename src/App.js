import { useState } from 'react';
import './App.css';
import Notification from './components/Notification';
import data from './data'

function App() {
  const [notificationList] = useState(data)
  const [notificationCount, setNotificationCount] = useState(3)
  const [ markAllRead, setmarkAllRead] = useState(false)
  return (
    <main>
    <section className="header">
      <h2>Notifications <span className="notification-count">{notificationCount}</span> </h2>
      <a href="#markread" className="mark-read" onClick={(e)=>{
        e.preventDefault();
        if(!markAllRead){
          setNotificationCount(0);
          setmarkAllRead(true);
        }else{
          setNotificationCount(3);
          setmarkAllRead(false);
        }  
      }
        }>{!markAllRead?'Mark all as read':'Undo'}</a>
    </section>
    <article className="card-list">
      {
        notificationList.map((notification, index)=>{
          return <Notification key={index}  {...notification} markAllRead={markAllRead} />
        })
      }
    </article>
  </main>

  );
}

export default App;
