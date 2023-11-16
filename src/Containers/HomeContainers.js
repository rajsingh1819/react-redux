
import Home from '../Components/Home'
import { connect } from 'react-redux'
import { add_to_cart ,remove_to_cart} from '../Services/Actions/action';



const mapStateToProps = state => ({
    data: state.cartItems

})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(add_to_cart(data)),
    removeToCartHandler: data => dispatch(remove_to_cart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;