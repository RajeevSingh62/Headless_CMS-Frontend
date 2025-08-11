import React from 'react'
import Carousal from '../components/Carousal'
import Trending from '../components/Trending'
import weeklyLatest from './../components/weeklyLatest';
import Gallery from '../components/Gallery';

const Main = () => {
  return (
    <div>
      <Carousal/>
      <Trending/>
      <weeklyLatest/>
      <Gallery/>
    </div>
  )
}

export default Main
