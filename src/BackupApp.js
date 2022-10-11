import markAvatar from './images/avatar-mark-webber.webp';
import angelaAvatar from './images/avatar-angela-gray.webp';
import jacobAvatar from './images/avatar-jacob-thompson.webp';
import rizkyaAvatar from './images/avatar-rizky-hasanuddin.webp';
import kimberlyAvatar from './images/avatar-kimberly-smith.webp';
import nathanAvatar from './images/avatar-nathan-peterson.webp';
import annaAvatar from './images/avatar-anna-kim.webp';
import chessImage from './images/image-chess.webp';
import './App.css';


/**
 * The Component is currently not being used in this project
 * Used it to guide my creation of data objects and Notification Component
 * @returns 
 */
function App() {
  return (
    <main>
    <section className="header">
      <h2>Notifications <span className="notification-count">3</span> </h2>
      <a href="#markread" className="mark-read">Mark all as read</a>
    </section>
    <article className="card-list">
      <div className="card unread">
        <img src={markAvatar} alt="Mark's profile pic" />
        <div className="info__wrapper">
          <p className="info"> <span><span className="name">Mark Webber &nbsp; </span> reacted to your recent post <strong>&nbsp;&nbsp; My first tournament today!&nbsp;</strong> <span className="read"></span></span>  </p>
          <p className="date">1m ago</p>
        </div>
      </div>
      <div className="card">
        <img src={angelaAvatar} alt="Angela's profile pic" />
        <div className="info__wrapper">
          <p className="info"><span><span className="name">Angela Gray &nbsp; </span> followed you &nbsp;</span></p>
          <p className="date">5m ago</p>
        </div>
      </div>
      <div className="card">
        <img src={jacobAvatar} alt="Jacob's profile pic" />
        <div className="info__wrapper">
          <p className="info"><span><span className="name">Jacob Thompson &nbsp;</span> has joined your group&nbsp; <strong className="group">Chess Club &nbsp; </strong></span> </p>
          <p className="date"> 1 day ago</p>
        </div>
        
      </div>
      <div className="card">    
        <div className="info-img__wrapper">
          <img src={rizkyaAvatar} alt="Rizky's profile pic" />
          <div className="info__wrapper">
            <p className="info"><span><span className="name"> Rizky Hasanuddin &nbsp;</span>   sent you a private message &nbsp;</span></p>
            <p className="date"> 5 days ago</p>
            <p className="message">
              Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
              I'm already having lots of fun and improving my game.
            </p>
          </div>
        </div>
        
      </div>
      <div className="card">
        <img src={kimberlyAvatar} alt="kimberly's profile pic" />
        <div className="info__wrapper">
          <p className="info"> <span><span className="name"> Kimberly Smith &nbsp;</span>       commented on your picture &nbsp;</span></p>
          <p className="date">   1 week ago</p>
        </div>
        <img src={chessImage} alt="" className="action-img" />
      </div>
      <div className="card">
        <img src={nathanAvatar} alt="Nathan's profile pic" />
        <div className="info__wrapper">
          <p className="info"><span><span className="name">  Nathan Peterson &nbsp;</span>   reacted to your recent post <strong>&nbsp;&nbsp;5 end-game strategies to increase your win rate</strong></span> </p>
          <p className="date">  2 weeks ago</p>
        </div>
      </div>
      <div className="card">
        <img src={annaAvatar} alt="Anna Kim's profile pic" />
        <div className="info__wrapper">
          <p className="info"> <span><span className="name">  Anna Kim&nbsp;</span>  left the group <strong className="group">&nbsp;&nbsp;Chess Club</strong>&nbsp;</span> </p>
          <p className="date">  2 weeks ago</p>
        </div>
      </div>
    </article>
  </main>

  );
}

export default App;
