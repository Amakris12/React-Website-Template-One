import React from 'react'
import Banner from '../components/Banner'
import LargeCard from '../components/LargeCard'
import Navbar from '../components/Navbar'
import SmallCard from '../components/SmallCard'
import NormalCard from '../components/NormalCard'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <br/>
            <LargeCard/>
            {/* <LargeCard Image="" Title=""  Info="" /> */}
            <div className="Flex">
                <NormalCard/>
                <NormalCard/>
                <NormalCard/>
            </div>
            {/* <SmallCard/> */}
        </div>
    )
}

export default Home
