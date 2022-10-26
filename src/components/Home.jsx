import React, { useRef, useReducer } from 'react';
import '../App.css';
import comic from '../media/comic.png';
import man from '../media/man.png';
import PriceTable from './PriceTable';
import CheckCircle from './checkCircle';
import { paragraphStyle } from './PriceTable';

const cancelButtonStyle = {
  position: 'absolute',
  top: '0rem',
  right: '0rem',
  width: '2rem',
  height: '2rem',
  fontSize: '.7rem',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#ff4242',
  color: '#fff',
  transition: 'all .3s ease'
}

const closeButton = {
  position: 'absolute',
  top: '0rem',
  right: '0rem',
  width: '2rem',
  height: '2rem',
  fontSize: '.7rem',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#ff4242',
  color: '#fff',
  transition: 'all .3s ease'
}

const overlayStyle = {
  width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  position: 'fixed',
  backgroundColor: 'rgba(0, 0, 0, .55)',
  transition: 'all .3s ease',
  zIndex: '10'
}

const messageButton = {
  padding: '.5em',
  backgroundColor: 'rgba(255, 0, 0, .1)',
  color: '#fff',
  border: 'none',
  overflow: 'hidden',
  borderRadius: '0em .3em 0em .3em',
  fontSize: '1em',
  cursor: 'pointer',
  zIndex: '20'
}

const ACTIONS = {
  MEMBERSHIP: 'membership-modal',
  CLOSE_MEMBERSHIP: 'close-membership',
  
  CONTACT: 'contact-modal',
  CLOSE_CONTACT: 'close-contact',

  NOTIFICATION: 'notif-modal',
  CLOSE_NOTIF: 'close-notif',
  
  OVERLAY: 'overlay',
  REMOVE_OVERLAY: 'remove-overlay',
}

const initialState = {
  membershipModal: false, 
  overlay: false, 
  contactModal: false, 
  notification: false
}

function reducer(state, action) {
  switch(action.type) {

    case ACTIONS.MEMBERSHIP:
      return { ...state, membershipModal: !state.membershipModal };

    case ACTIONS.CONTACT: 
      return { ...state, contactModal: !state.contactModal };

    case ACTIONS.NOTIFICATION:
      return { ...state, notification: !state.notification };

    case ACTIONS.OVERLAY:
      return { ...state, overlay: !state.overlay };

    case ACTIONS.CLOSE_CONTACT:
      return { ...state, contactModal: false };

    case ACTIONS.CLOSE_MEMBERSHIP:
      return { ...state, membershipModal: false };

    case ACTIONS.CLOSE_NOTIF:
      return { ...state, notification: false };

    case ACTIONS.REMOVE_OVERLAY:
      return { ...state, overlay: false };

    default:
      throw new Error();
  }
}

const Home = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const validation = () => {
    nameRef.current.focus();
  }

  const sendMessage = (e) => {
    e.preventDefault();

    if (nameRef.current.value === "") return validation();

    dispatch({ type: ACTIONS.CLOSE_CONTACT });
    dispatch({ type: ACTIONS.REMOVE_OVERLAY });
    dispatch({ type: ACTIONS.NOTIFICATION });

    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification("Message Sent!", {
          body: "Your message has been sent successfully."
        })
      }
    })
  }

  const premiumPerks = ['Access to equipments', 'All weather workout', 'Monetary motivation', 'Personal Trainers', 'Fitness classes', 'Fewer distractions', 'Practical equipments', 'Individual coaching']

  const standardPerks = ['Access to equipments', 'All weather workout', 'Monetary motivation', 'Fitness classes', 'Practical equipments']

  const freePerks = ['Access to equipments', 'All weather workouts']

    return (
        <>
        <div className='content'>
        <h1>SHORTER WORKOUTS, <br/> <span>BETTER RESULTS</span></h1>
        
        <p>SHORT, MANAGEABLE WORKOUTS FOR <br/> PEOPLE WITH NO TIME.</p>

        <div className='btn'>
          <button onClick={() => {
            dispatch({ type: ACTIONS.OVERLAY })
            dispatch({ type: ACTIONS.MEMBERSHIP })
          }}>START HERE</button>
          <button onClick={() => {
            dispatch({ type: ACTIONS.OVERLAY })
            dispatch({ type: ACTIONS.CONTACT })
          }} >GET IN TOUCH</button>
        </div>
        {state.notification ?
          <div className="message-modal" >
            <p>Your message has been sent!</p>
            <button style={messageButton} onClick={() => dispatch({ type: ACTIONS.CLOSE_NOTIF })} >X</button>
          </div> : "" }
        {state.overlay ? <div className="overlay" style={overlayStyle} ></div> : ""}
        {state.membershipModal ?
        <div className='membership-container'>
          <button onClick={() => {
             dispatch({ type: ACTIONS.CLOSE_MEMBERSHIP })
             dispatch({ type: ACTIONS.REMOVE_OVERLAY })
          }} style={cancelButtonStyle} >X</button>

        <div className='text-content'>
          <PriceTable price='FREE' type='BASIC' content={freePerks.map(free => <p style={paragraphStyle} >{free} <CheckCircle /></p>)} />
          <PriceTable price='$9.99' type='STANDARD' content={standardPerks.map(standard => <p style={paragraphStyle}>{standard} <CheckCircle /> </p> )} />
          <PriceTable price='$49.99' type='PREMIUM' content={premiumPerks.map(premium => <p style={paragraphStyle} >{premium} <CheckCircle /> </p>)} />
        </div>
        <img src={comic} alt='comic' />
        </div> : "" }

        {state.contactModal ?
        <div className="contact-container">
          <img src={man} alt="Man" />
          <form>
            <button onClick={() => {
              dispatch({ type: ACTIONS.REMOVE_OVERLAY });
              dispatch({ type: ACTIONS.CLOSE_CONTACT })
            }
            } style={closeButton}>X</button>
            <h1>Contact Us</h1>
            <input type="text" required placeholder='Your Name' ref={nameRef} />
            <input type="email" required placeholder='Email ID' ref={emailRef} />
            <textarea name="message" placeholder='Message' id="" cols="50" rows="8" ref={messageRef} ></textarea>
            <button onClick={sendMessage} >SEND</button>
          </form>
          
        </div> : "" }
        </div>
        </>
    );
}

export default Home;