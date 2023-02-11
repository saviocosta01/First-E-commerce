import { Link } from "react-router-dom";
import {ListProducts} from '../../components/listProducts'

export const Dashboard = ({listProducts, setListProducts}) => {
  return (
    <>
      <header>
        <h2>E-commerce</h2>
        <nav>
          <Link to={""}>Promoção</Link>
          <Link to={""}>Mais Vendidos</Link>
          <select name="" id="">
            <option value="">Categorias</option>
          </select>
          <div>
            <input type="text" placeholder="Digite um produto" />
            <button></button>
          </div>
          <img src="carrinho" alt="" />
        </nav>
      </header>

        <main>

                <section>

                   <ListProducts setListProducts={setListProducts} listProducts={listProducts}/>
                    
                </section>       





        </main>




    </>
  );
};
