import style from './ProductItem.module.css'
import { AppContext } from '../../../App';
import React from 'react';

const Product =(props)=>{

    const context = React.useContext(AppContext)

    const [added, setAdded] = React.useState(props.isAdded);
    const [favorites, setFavorites] = React.useState(false);

    const onClickAdd =()=>{
        setAdded(!added);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let decription = props.decription;
        let price = props.price;
        let img = props.img;
        props.onPlus({title,decription,price,img,id,myId});
    }

    const onClickFavorites =()=>{
        setFavorites(!favorites);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let decription = props.decription;
        let price = props.price;
        let img = props.img;
        props.favBtn({title,decription,price,img,id,myId});
    }
    // const onClickPlus = ()=>{
    //     alert(props.title)
    // }
    return(
        <div className={style.cart_item}>
        {


        context.isFav(props.myId) == false ?
        <button className={style.fav_btn} onClick={onClickFavorites}>Добавить в избранное</button>
        :
        <button className={style.fav_btn_add} onClick={onClickFavorites}>Добавлен в избранное</button>
        }
        <img className={style.cart_img} src={props.img}></img>
        <p className={style.cart_title}>{props.title}</p>
        <p className={style.cart_description}>Сочи из Москвы - 7 ночей<br/>05.12.2022 - 2 взрослых</p>
        <p className={style.price}>Цена:</p>
        <div className={style.cart_price}>
            <span>{props.price}</span>
            <button className={ added ? style.add_cart:  style.add_true} 
                onClick={onClickAdd} > { context.isAdded(props.myId) ?  <img width={13}
                 src={ context.isAdded(props.myId) ? '/img/icon.png':'' }
                 alt=""/>:'Оставить заявку' }
                </button>
        </div>
     </div>

    )
}
export default Product;
