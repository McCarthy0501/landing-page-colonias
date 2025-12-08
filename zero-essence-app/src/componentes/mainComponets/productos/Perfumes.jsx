import { useParams } from "react-router-dom";
export const Perfumes=()=>{
    const {id}=useParams();

    return(<><h1>Productos</h1> <h2>{id}</h2></>)
}