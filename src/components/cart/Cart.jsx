import Product from "./item/Product";
import style from './Cart.module.css';
import axios from 'axios';

const Cart =(props)=>{
    const onAddOverlay = async (object)=>{
        try {
            const findOverlay = props.overlayItems.find((objectOverlay) => objectOverlay.myId === object.myId);
            
            if(findOverlay){
                axios.delete(`https://637f91cd5b1cc8d6f949a34c.mockapi.io/cart/${findOverlay.id}`)
                props.setOverlayItems((over) => over.filter(item => item.myId !== object.myId))
            }
            else {
                const {data} = await axios.post('https://637f91cd5b1cc8d6f949a34c.mockapi.io/cart', object)
                props.setOverlayItems([...props.overlayItems, data]);
            }
        } catch {
            alert('Произошла ошибка') 
        }

    }
    const onClickSearch =(inputValue)=>{
        props.setSearch(inputValue.target.value);
    }
    const onAddFavorites = async (object)=>{
        try {
            const findFavorites = props.favorites.find((objectFavorites) => objectFavorites.myId === object.myId);

            if(findFavorites){
                axios.delete(`https://637f91cd5b1cc8d6f949a34c.mockapi.io/favorites/${findFavorites.id}`)
                props.setFavorites((over) => over.filter(item => item.myId !== object.myId))
            }
            else{
                const {data} = await axios.post('https://637f91cd5b1cc8d6f949a34c.mockapi.io/favorites', object)
                props.setFavorites([...props.favorites, data]);
            }
        } catch {
           alert('Произошла ошибка') 
        }


    }


    return(
        <div className={style.cart_section}>
            <div className={style.search}>
                <h1>Туры:</h1>
                <div className={style.search_block}>
                    <img src="/img/search.png" alt="поиск"></img>
                    <input onChange={onClickSearch} placeholder="Поиск"></input>
                </div>
            </div>
        
        <div className={style.cart}>
            {
                props.item.filter((item)=> item.title.toLowerCase().includes(props.search.toLowerCase()))
                .map(object =>{
                                
                                return(
                                    <Product 
                                    key={object.id}
                                    id={object.id}
                                    myId={object.myId}
                                    title={object.title} 
                                    price={object.price} 
                                    img={object.img}
                                    
                                    favBtn ={
                                        (favObject)=>{
                                            onAddFavorites(favObject)
                                        }
                                    }

                                    onPlus={(cartObj)=>{
                                            console.log(cartObj);
                                            onAddOverlay(cartObj)
                                        }
                                    }
                                    />
                                )
                            })
            }
        </div>
    </div>
    )
}
export default Cart;