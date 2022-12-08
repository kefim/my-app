import ProductItem from "./item/ProductItem"
import style from './Overlay.module.css';

const Overlay = (props) => {
    return (
        <div className={style.overlay}>
            <div className={style.product}>
                <div className={style.title_block}>
                    <h2>Заявки</h2>
                    <button className={style.close_btn} onClick={props.closeOverlay}>X</button>
                </div>
                {

                    props.overlayProp.length >0?


                    <div className={style.product_list}>
                            {
                                    props.overlayProp.map(object => {
                                
                                        return(
                                        <ProductItem key={object.id} id={object.id} title={object.title} price={object.price} img={object.img} onPlus={()=>console.log("добавили в корзину")} deleteItems={props.deleteItems}/>
                                    )
                                    })
                            }
                            {/* <ProductItem title="Название" price="36 000" img="/img/1.jpeg"/> */}
                    </div>

                    :<h1>Заявок нет</h1>
                }


                <div className={style.total_price}>
                    <p className={style.total_price_text}>Итог:</p>
                    <p className={style.total_price_summ}>{props.total_price}</p>
                    <button>Оставить заявку</button>
                </div>
                

            </div>
        </div>
    )
}

export default Overlay;
