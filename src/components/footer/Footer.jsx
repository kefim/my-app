import style from './Footer.module.css'
const Footer =()=>{
    return(
        <footer>
        <div className={style.logo}>
        LIVE-TUR
        </div>
        <p>
            Единый многоканальный номер: +7 (495) 151-88-08
        <br/>
        <br/>
            Уполномоченные агентства ООО "Туристическая компания КаприС"
        </p>
    </footer>
    )
}
export default Footer;