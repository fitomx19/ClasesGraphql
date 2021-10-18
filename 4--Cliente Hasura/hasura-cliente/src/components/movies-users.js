import React from "react";
import { useSubscription, gql } from "@apollo/client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";


const USERS = gql`
subscription{
    Usuarios{
      id_usuario
      nombre_usuario
      created_at
    }
  }
`;

export default function Usuario(){
    const {loading, error, data} = useSubscription(USERS)
    console.log(error)
    if(loading) return <p>Cargando...</p>;
    if(error) return <p>Hay un error</p>;
    console.log(error);

    return data.Usuarios.map(({id_usuario,nombre_usuario,created_at}) =>(
        <div  key={id_usuario}>
            <p>{nombre_usuario} | {created_at} </p>
        </div>
    ))
}