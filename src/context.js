import React, { useContext } from "react";
import { useEffect ,useState} from "react";

const AppContext =  React.createContext();
const URL = `http://www.omdbapi.com/?apikey=fd655946`;
const AppProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(true);
    
    const [movie ,setMovie] =  useState([]);
    const [isError, setIsError] = useState({ show:"false", msg:""})
    const [query,setQuery] = useState("avengers")
    const getMovie = async(url)=>{
        try{
           const res = await fetch(url);
           const data = await res.json();
           console.log(data);
           if (data.Response === "True"){
            setIsLoading ( false);
           setMovie(data.Search);
        }
        else{
            setIsError({
                show:true,
                msg:data.error,
            });
        }
    }catch(error){
            console.log(error);
        }
    };
        
    useEffect(() => {
      
    getMovie(`${URL}&s=${query}`);
      
    },[query]);
    
    return <AppContext.Provider value={{isLoading, isError,movie,query,setQuery}}>{children}</AppContext.Provider>;
};

const useGlobalContext = ()=>{return useContext(AppContext)};

export {AppContext,AppProvider,useGlobalContext};