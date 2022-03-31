import React from 'react'

const LargeCard = ({Image,Title,Info}) => {
    return (
        <div className="largeCard">
            <img src="https://i.pinimg.com/originals/14/cd/1f/14cd1fcf05ad082e4c93d19cc7cc3896.jpg" alt="" />
            <h3>Large Card</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptatum mollitia, inventore deserunt omnis maxime praesentium aliquam vitae cumque modi, recusandae sed ipsum, numquam quis? Quisquam sequi eaque ea quae cum, vero veniam, ut excepturi facilis fugiat in atque nostrum?</p>
        </div>
    // <div className="largeCard">
    //     <img src={Image} alt="" />
    //     <h3>{Title}</h3>
    //     <hr />
    //     <p>{Info}</p>
    // </div>
    )
}

export default LargeCard
