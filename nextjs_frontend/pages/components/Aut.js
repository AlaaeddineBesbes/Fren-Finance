import Middle from './Middle'
import RightBar from './RightBar'
import React, { useState, useEffect } from 'react'
import { TagCloud } from 'react-tagcloud'
import { useRouter } from "next/router";

const Aut = () => {
    const { query } = useRouter();
    const [auteur, setAuteur] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
         fetch('http://localhost:5000/authors_info')
          .then((res) => res.json())
          .then((data) => {
           data.filter(function(aut){ 
            if(aut.name==query['name']){
              setAuteur(aut)
            }
        })
           
           
           setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      if (isLoading) {
        return(
      <div className=" bg-white h-full " > 
      <div className="flex  ml-3 mt-6 space-x-2  mr-4 "> 
     <div className=" bg-white  ml-2   shadow-sm w-full h-screen   ">
       <h1>Loading ...</h1>
       </div>
       </div>
       </div>)}
       return (
        
        <div className=" bg-white h-full " > 
                 <div className="flex  ml-3 mt-6 space-x-2  mr-4 "> 
                <div className=" bg-white  ml-2   shadow-sm w-full h-screen   ">
                <br></br>
                 <span></span> <h2 className='text-xl  font-semibold text-blue-600 ' >Nom et Prenom  : {auteur.name}</h2>
                 <br></br>
                 <span></span> <h2 className='text-xl  font-semibold text-blue-600 ' >ID : { auteur.id}</h2>
                 <br></br>
             <span></span> <h2 className='text-xl  font-semibold text-blue-600 ' >Université  : { auteur.institution.name }</h2>
                 <br></br>
                 <span></span> <h2 className='text-xl  font-semibold text-blue-600 ' >Nombre des publications  :  {auteur.nbrPublication }</h2>
                 <br></br>
                 <h2 className='text-xl  font-semibold text-blue-600 ' >Nuage des concepts:</h2>
                 <TagCloud
                  minSize={1}
                  maxSize={80}  
                  tags={auteur.concepts}
                  />
                 <br></br>    
           </div>
            
        </div>
        </div>
        )
      }



export default Aut
