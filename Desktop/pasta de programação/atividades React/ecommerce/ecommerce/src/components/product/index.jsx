

export const CardsProduct = ({product}) =>{

    

    return(
        <li>
            <img src={product.images[0]} alt="" />
            <h2>{product.title}</h2>

            <p>{product.price}</p>

            <span>{product.rating}</span>
            <button>Adicionar ao Carrinho</button>



        </li>




    )
}