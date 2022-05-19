import Middle from './Middle'
import RightBar from './RightBar'
import React, { useState, useEffect } from 'react'
import { TagCloud } from 'react-tagcloud'
import { useRouter } from "next/router";

const Aut = () => {

    useEffect(() => {
        fetch('http://localhost:5000/auteur')
          .then((res) => res.json())
          .then((data) => {
            setAuteurs(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

const { query } = useRouter();
const [auteur, setAuteur] = useState([]);
 
    return (
        <div className=" bg-white h-full " > 

            <div className="flex  ml-3 mt-6 space-x-2  mr-4 ">
                <div className=" bg-white  ml-2   shadow-sm w-full h-screen   ">
              
                <h1>Nombre de l'auteur: </h1>

        
        </div>
    
            </div>
        </div>
    )
}


export default Aut
