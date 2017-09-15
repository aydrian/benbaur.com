import React from 'react'
import {Icon} from 'react-fa'

import './footer.scss'

const Footer = () => (
  <div className='footer' >
    <ul>
      <li><a href="https://www.facebook.com/Ben-Baur-363420870338396/"><Icon name="facebook" /> Facebook</a></li>
      <li><a href="https://twitter.com/benjbaur"><Icon name="twitter" /> Twitter</a></li>
      <li><a href="https://www.instagram.com/benjbaur/"><Icon name="instagram" /> Instagram</a></li>
      <li><a href="http://www.imdb.com/name/nm3553654/"><Icon name="imdb" /> IMDb</a></li>
    </ul>
  </div>
)

export default Footer
