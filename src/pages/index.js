import React from 'react'
import Link from 'gatsby-link'
import {Icon} from 'react-fa';

const IndexPage = () => (
  <div>
    <ul style={{ listStyle: 'none', float: 'left' }}>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}><a href="https://www.facebook.com/Ben-Baur-363420870338396/"><Icon name="facebook" /> Facebook</a></li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}><a href="https://twitter.com/benjbaur"><Icon name="twitter" /> Twitter</a></li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}><a href="https://www.instagram.com/benjbaur/"><Icon name="instagram" /> Instagram</a></li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}><a href="http://www.imdb.com/name/nm3553654/"><Icon name="imdb" /> IMDb</a></li>
    </ul>
  </div>
)

export default IndexPage
