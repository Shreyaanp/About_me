import * as React from 'react';
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
export const siteConfig = {
  author: {
    name: 'Muhammad Ahmad',
    accounts: [
      {
        url: 'https://github.com/Shreyaanp',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/Shreyaanp',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://dev.to/shreyaanp',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />
      },
      {
        url: 'https://linkedin.com/in/Shreyaanp',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: 'https://www.instagram.com/pshreyaan/?utm_source=qr',
        label: 'Instagram Account',
        type: 'red',
        icon: <FaInstagram />
      }
    ]
  }
};