import style from './favoritesItem.module.css';
import React from 'react';

const FavoritesItem =(props)=>{
    const [added, setAdded] = React.useState(false);
    const [favorites, setFavorites] = React.useState(false);

    const onClickAdd =()=>{
        setAdded(!added);
        let id = props.id;
        let title = props.title;
        let decription = props.decription;
        let price = props.price;
        let img = props.img;
        props.onPlus({title,decription,price,img});
    }

    const onClickFavorites =()=>{
        setFavorites(!favorites);
        let id = props.id;
        let title = props.title;
        let decription = props.decription;
        let price = props.price;
        let img = props.img;
        props.favBtn({title,decription,price,img});
    }

    const onDelete =()=>{
        props.onDeleteFavorites(props.id)
    }

    return(
        <div className={style.cart_item}>
        {
        <button className={style.fav_btn_add} onClick={onDelete}>X</button>
        }
        <img className={style.cart_img} src={props.img}></img>
        <p className={style.cart_title}>{props.title}</p>
        <p className={style.cart_description}>Сочи из Москвы - 7 ночей<br/>05.12.2022 - 2 взрослых</p>
        <p className={style.price}>Цена:</p>
        <div className={style.cart_price}>
            <span>{props.price}</span>
            <button className={ added ? style.add_cart:  style.add_true} 
                onClick={onClickAdd} > { added ?  <img width={13}
                 src={ added ? '/img/icon.png':'' }
                 alt=""/>:'Оставить заявку' }
                </button>
        </div>
     </div>

    )
}
export default FavoritesItem;
