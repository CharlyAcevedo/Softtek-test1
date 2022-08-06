import React, { useState, useEffect } from "react";

const useCharacters = (url, _start = 1, _finish = 20) => {
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState(null);
    const [error, setError] = useState("");

    
    const callApi = async (start = _start, finish = _finish) => {
        const numChars = [];
        for(start; start <= finish; start++){
            numChars.push(start)
        }
        try{
            const response = await fetch(url + "/" + numChars)
            if (!response.ok){
                throw new Error(response.statusText)
            }
            const data = await response.json()            
            const dataMaped = data.map((char) => {
                let newChar = {
                    id: char.id,
                    name: char.name,
                    image: char.image,
                    location: char.location.name,
                }
                return newChar
            })
            setCharacters(prevState => (dataMaped))
        } catch (error) {
            setError(prevState => (error.message))
        }
        setIsLoading(prevState => (false))
    }

    useEffect(()=>{
        callApi()
    },[])

    return {
      characters,
      error,
      isLoading,
      reCall: callApi,
    };

};

export default useCharacters;