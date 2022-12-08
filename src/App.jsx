import './App.css';
import Header from './components/header/Header.jsx';
import Banner from './components/banner/Banner.jsx';
import Cart from './components/cart/Cart.jsx';
import Form from './components/form/Form.jsx';
import Footer from './components/footer/Footer.jsx';
import Overlay from './components/overlay/Overlay';
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home.jsx';
import Favorites from './components/favorites/Favorites.jsx';

export const AppContext = React.createContext({})

function App(){
    //состояние корзины
    const [overlayOpen, setOverlayOpen] = React.useState(false);
    //хранение данных туров
    const [tours,setTours] = React.useState([]);
    //для хранения объектов корзины
    const [overlayItems, setOverlayItems] = React.useState([]);
    //Для поиска
    const [search, setSearch] = React.useState('');
    //Для хранения избранных заявок
    const [favorites, setFavorites] = React.useState([]);
    React.useEffect(()=>
            {
                async function axiosData(){
                    const toursData = await axios.get('https://637f91cd5b1cc8d6f949a34c.mockapi.io/tours')
                    const cartData = await axios.get('https://637f91cd5b1cc8d6f949a34c.mockapi.io/cart')
                    const favoritesData = await axios.get('https://637f91cd5b1cc8d6f949a34c.mockapi.io/favorites')

                    setTours(toursData.data)
                    setOverlayItems(cartData.data)
                    setFavorites(favoritesData.data)
                }

                axiosData();
            },
            []
    )

    const deleteItems =(id)=>{
        console.log(id);
        axios.delete(`https://637f91cd5b1cc8d6f949a34c.mockapi.io/cart/${id}`)
        setOverlayItems((objectDelete)=> objectDelete.filter(item => item.id !== id));

    }

    const isAdded =(myId)=>{
        return overlayItems.some((objectIsAdded)=> objectIsAdded.myId === myId)
    }
    
    const isFav =(myId)=>{
        return favorites.some((objectIsFavorites)=> objectIsFavorites.myId === myId)
    }

    return(

        <AppContext.Provider
            value={{
                tours,
                setTours,
                overlayItems,
                setOverlayItems,
                favorites,
                setFavorites,
                isAdded,
                isFav
            }}
        >

        <div className="app">

            {
                overlayOpen ? 
                <Overlay 
                total_price={
                    overlayItems.reduce((elements = overlayItems.length, obj) => 
                    elements + obj.price, 0
                    )
                }
                overlayProp={overlayItems} 
                closeOverlay={()=> setOverlayOpen(false)} 
                deleteItems={deleteItems}/>:null
            }

            <Header openOverlay={()=> setOverlayOpen(true)} overlayItems={overlayItems}/>

            <Routes>
                <Route path='/favorites' element={
                <Favorites favorites={favorites}
                setFavorites={setFavorites}
                item={tours}
                overlayItems={overlayItems} 
                setOverlayItems={setOverlayItems} 
                />}>
                </Route>

                <Route path='/' element={                
                <Home item={tours} 
                overlayItems={overlayItems} 
                setOverlayItems={setOverlayItems} 
                setSearch={setSearch} 
                search={search} 
                favorites={favorites} 
                setFavorites={setFavorites}/>}>
                </Route>

                <Route path='/form' 
                    element={
                        <Form/>

                    }>
                </Route>
            </Routes>

            <Footer/>
        
        </div>
        </AppContext.Provider>
    )
}
export default App;