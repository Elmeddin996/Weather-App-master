import React from "react";
import axios from 'axios'

export const AppContext = React.createContext([]);


export  const AppProvider=({children})=>{
const [data, setData]=React.useState([]);
const [search, setSearch]=React.useState('baku')
    
    React.useEffect (()=>{
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=56b25a787f6f4e4e90372918232805&q=${search}&days=7&aqi=no&alerts=no`)
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err))
    },[search]);

    return(
        <AppContext.Provider value={{data,setSearch}}>
         {children}
        </AppContext.Provider>
    )
}