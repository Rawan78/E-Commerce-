import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faFacebook , faInstagram  , faGoogle, faLinkedin , faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className='bg-light text-center text-white'>
      <div className='p-4 pb-0'>
        <div className='mb-4'>
          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
           <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
          </Button>

          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
          </Button>

          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon>
          </Button>
          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
          </Button>

          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
          </Button>

          <Button
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
          </Button>
        </div>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='#'>
          E-Commerce.com
        </a>

      </div>
    </div>
  );
}