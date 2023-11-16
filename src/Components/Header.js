import React from 'react'

function Header(props) {
    // console.log("Header ", props.data);
    return (
        <div>


            <div className='add_to_cart'>
                <span className='cart-count'>{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg" />
            </div>

        </div>
    )
}

export default Header