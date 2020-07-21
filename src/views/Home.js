import React from 'react'
import CardManga from '../components/CardMovie';

const Home = (params) => {
    return (
        <div className="container p-4">
            <div className="row">
                <CardManga />
            </div>
        </div>
    )
}

export default Home