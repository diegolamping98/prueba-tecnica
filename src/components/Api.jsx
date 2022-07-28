import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const Api = () => {
  
    const {format,isLoading} = useFetch('https://datos.gob.es/apidata/nti/territory/Province?_sort=label&_pageSize=10&')
   
 

    return (

       <>
            <h1 id="contenedor">Consumo API</h1>
            <hr/>

            {
           
           isLoading
               ?(
                   <div className="alert alert-info text-center">
                   Loading...
                    </div>

               )
               :(
                        <pre>
                            {
                                JSON.stringify(format.result.items[1], null, 2)
                            }
                        </pre>
               )




       }


        </>
    
  )
}
