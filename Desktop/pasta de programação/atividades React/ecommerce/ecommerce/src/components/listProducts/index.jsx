
import { useEffect } from "react"
import { api } from "../../services/api"
import {CardsProduct} from '../product/index'

export const ListProducts = ({listProducts, setListProducts}) =>{

    useEffect(() => {
        const requestProducts = async() =>{
            try {   
                const response = await api.get('/products')
                setListProducts(response.data.products)
            } catch (error) {
                console.log(error)
            }
        }
        requestProducts()
   },[])


  
      return(

            <ul>
                {
                    listProducts.map((product) => {
                        return <CardsProduct product={product}/>
                    })
                }



            </ul>



      )

   
    
}