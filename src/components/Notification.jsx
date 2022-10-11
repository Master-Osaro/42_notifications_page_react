
const Notification =({ profilePhoto, name, action, isActionJoinLeftGroup, isActionReactToPost, isActionSentMessage, isActionReactToImage, groupName,postTitle,time,imageReactionThumbnail,messageDetails, notificationRead, markAllRead})=> {

    const reactToPostOrJoinedGroup =()=>{
      if(isActionReactToPost){
        return postTitle
      }
      else if(isActionJoinLeftGroup){
        return <strong className="group">{groupName} &nbsp; </strong>
      }
      else{
        return ''
      }
    }
  return (
 
    <>
      <div className={`card ${notificationRead===false&&markAllRead===false?'unread': ''}`}>
        <img src={profilePhoto} alt="Mark's profile pic" />
        <div className="info__wrapper">
          <p className="info"> <span><span className="name">{name} &nbsp; </span> {action} <strong>&nbsp;&nbsp; {reactToPostOrJoinedGroup()}&nbsp;</strong> {notificationRead===false&&markAllRead===false?<span className="read"></span>: ''} </span>  </p>
          <p className="date">{time}</p>
          {isActionSentMessage?<p className="message">{messageDetails}</p>:''}
        </div>
        {isActionReactToImage?<img src={imageReactionThumbnail} alt="" className="action-img" />:''}
      </div>

    </>


  );
}

export default Notification;
