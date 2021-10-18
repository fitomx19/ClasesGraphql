import React from "react";
import { useQuery , gql } from "@apollo/client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";



const Lista = styled.div`
    padding-top: 4rem;
    max-width:95%;
    margin: 0 auto;
    @media (min-width:768px){
        display: grid;
        grid-template-columns: repeat(2 , 1fr);
        column-gap:2rem;
    }

`;



const MOVIES = gql `

query Peliculas {
    movie(limit: 5) {
      id
      title
      original_title
    }
  }
  

`;

export default function Movies(){

    const {loading,error,data} = useQuery(MOVIES);
    console.log(error);
    if(loading) return <p>Cargando...</p>;
    if(error) return <p>Error mostrando informacion</p>;

    return data.movie.map(({id,title,original_title}) => (
        <Lista>
            <div key={id}>
                 <p>{title} | {original_title}</p> 
            </div>
        </Lista>
    ));

}