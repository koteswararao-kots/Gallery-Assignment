import React from 'react';
import './staticPage.css';

const userDetails = {
  Name: 'Alan Ford',
  EmpeloyeeID: '0000512',
  Appointment: '9:00 (24-05-2016)',
  Email: 'alan.form@gmail.nl',
  phone: '+31123456789'

};
// var arrow = "<";
function StaticPage() {
  return (
    <div className="site-container">
      <div className='header'>
        <div className='header-content'>
          <h3>{userDetails.Name}</h3>
          <span>{userDetails.EmpeloyeeID}</span>
        </div>
        <div className='header-box'>
          <button >print</button>

        </div>
      </div>
      <div className='customer-info' >
        <div className='customer-info-content'>
          <h3>{'Appointment On'}</h3>
          <h3 className='text'>{userDetails.Appointment}</h3>
        </div>
        <div className='customer-info-content'>
          <h3>{'Email'}</h3>
          <h3 className='text'>{userDetails.Email}</h3>
        </div>
        <div className='customer-info-content'>
          <h3>{'phone'}</h3>
          <h3 className='text'>{userDetails.phone}</h3>
        </div>


      </div>
      <div className='order-info'>
        <div className='order-info-content'>
          <h3>{'Status'}</h3>
          <p>{'In progress'}</p>
        </div>
        <div className='order-info-content'>
          <h3>{'Door'}</h3>
          <p>{'Mark'}</p>
        </div>
        <div className='order-info-content'>
          <h3>{'Time'}</h3>
          <p>{'10:30'}<span >{'(25-05-2016)'}</span></p>

        </div>




      </div>
      <div className='product-list'>
        <input className='checkbox' type='checkbox'></input>
        <img src='https://www.w3schools.com/howto/img_avatar.png' alt = "avatarImage"></img>
        <div className='product-list-content'>
          <h3>{"Boltart Bossbesen"}</h3>
          <p>{"Overhweerlijke Bolstart met bosbessen unit ki van de bijenkorf"}</p>
        </div>


      </div>

    </div>
  );
}

export default StaticPage;