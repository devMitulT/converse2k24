import React from 'react';
import { Link } from 'react-router-dom';
import instagram from './insta.png';
function Footer() {
  return (
    <>
      <div className='back'>
        <footer className='footer'>
          <div className='footer-section'>
            <h4>Head of Department</h4>
            <p>Dr. Vivaksha Jariwala</p>
          </div>
          <div className='footer-section'>
            <h4>Faculty Coordinators</h4>
            <p>Prof. Hiren Vavaiya</p>
            <p>Prof. Ankit Patel</p>
            <p>Prof. Karishma Desai </p>
            <p>Prof. Nitya Komalan </p>
          </div>
          <div className='footer-section'>
            <h4>Student Heads</h4>
            <p>Ayush Polara (+91 9924012804)</p>
            <p>Uttam Moradiya (+91 7016258764)</p>
            <p>Shreya Chopra (+91 7588331046)</p>
            <p>Mitarsh Savaliya (+91 75674558688)</p>
            <p>Jenish Sonani (+91 7777949735)</p>
            <p>Harsh Maniya (+91 8128789012)</p>
            <p>Jensi Ghadiya(+91 7016954635)</p>
          </div>
        </footer>
        <section className='her'>
          <div className='container'>
            <h2 className='sub'>Follow us on instagram !</h2>
            <div>
              <a
                href='https://www.instagram.com/converse_2k24?igsh=bmpwbnBxOHVpeWQz'
                className=''
                target='_blank'
              >
                <img src={instagram} alt='instagram' />
              </a>
            </div>
            <div>
              <p class='text-sm'>© Converse 2024 - All Rights Reserved</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Footer;
