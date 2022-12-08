import FavoritesItem from './item/FavoritesItem.jsx';
import style from "./favorites.module.css";
import { AppContext } from '../../App.jsx';
import React from 'react';
import axios from 'axios';



const Favorites =(props)=>{

    const context = React.useContext(AppContext)

    const onAddOverlay =(object)=>{
        axios.post('https://637f91cd5b1cc8d6f949a34c.mockapi.io/cart', object)
        context.setOverlayItems([...props.overlayItems, object]);
    }

    // const onAddFavorites =(object)=>{
    //     axios.post('https://637f91cd5b1cc8d6f949a34c.mockapi.io/favorites', object)
    //     props.setFavorites([...props.favorites, object]);
    // }

    const onDeleteFavorites =(id)=>{
        console.log(id);
        axios.delete(`https://637f91cd5b1cc8d6f949a34c.mockapi.io/favorites/${id}`)
        context.setFavorites((favorites)=> favorites.filter(item => item.id !== id));
    }


    return(
        <div className={style.cart_section}>
            <div className={style.search}>
                <h1>Избранные туры: </h1>

            </div>
        
        <div className={style.cart}>
            {
                props.favorites.map(object =>{
                                
                                return(
                                    <FavoritesItem 
                                    key={object.id}
                                    id={object.id}
                                    myId={object.myId}
                                    title={object.title} 
                                    price={object.price} 
                                    img={object.img}
                                    
                                    onDeleteFavorites ={
                                        (id)=>{
                                            onDeleteFavorites(id)
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
export default Favorites;