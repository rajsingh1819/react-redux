import React from 'react'

function Home() {
    return (
        <div>
            <h1>Home Component</h1>
            <div className='add_to_cart'>
                <img src="https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg" />
            </div>
            <div className='card_wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://tse4.mm.bing.net/th/id/OIP.Ar-BPdrjGKFs50b9UQVImgHaMU?pid=ImgDet&rs=1" />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to Cart</button>

                </div>
            </div>
        </div>
    )
}

export default Home