
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import {Cart} from '../pages/Cart'
import {Dashboard} from '../pages/dashboard'

export const RoutesContainer = () =>{

    const [listProducts, setListProducts] = useState([])


    return(
        <Routes>
                <Route path='/' element={<Dashboard  setListProducts={setListProducts} listProducts={listProducts}/>}/>
                <Route path='/cart' element={<Cart />}/>

        </Routes>
    )
    




}