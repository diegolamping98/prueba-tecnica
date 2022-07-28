import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  
    const [state, setState] = useState({
        format: null,
        isLoading: true,
        

    })

  const getFetch = async () => {

    setState({
        ...state,
        isLoading: true,
    })
    const resp = await fetch(url);
    const format = await resp.json();
    
    //console.log(format.result.items[1])

    setState({
        format,
        isLoading: false,
      
    });
  }
  
  useEffect(() => {

      getFetch();
  }, [url])
  
  
  
    return {
        
        format: state.format,
        isLoading: state.isLoading,
    };
    
  
}
