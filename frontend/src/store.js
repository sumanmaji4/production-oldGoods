import {createStore, combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer  } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { orderCreateReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(
    localStorage.getItem('cartItems')   
): []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(
    localStorage.getItem('userInfo')   
): null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') 
? JSON.parse( localStorage.getItem('shippingAddress') )
: { }

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : " ";

const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage, 
        shippingAddress: shippingAddressFromStorage, 
        paymentMethod: paymentMethodFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]



const store = configureStore({ 
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware
})


/*
const store = createStore(reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)
*/



export default store