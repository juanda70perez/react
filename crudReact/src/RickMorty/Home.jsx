import NavBar from "../components/NavBar";
import React, { useEffect, useState } from "react";
import Personajes from "../components/personajes";
import Paginacion from "../components/Paginacion";
function Home() {
    const [personajes, setPersonajes] = useState([]);
    const [info, setInfo] = useState({})
    const url = "https://rickandmortyapi.com/api/character";
    const fecthPersonajes = (urlApi) => {
        fetch(urlApi)
            .then(Response => Response.json())
            .then(data => {
                setPersonajes(data.results);
                setInfo(data.info);
            })
            .catch(error => console.log(error))
    };
    const onPrevious = () =>{
        fecthPersonajes(info.prev)
    }
    const onNext =() =>{
        fecthPersonajes(info.next)
    }
    useEffect(() => {
        fecthPersonajes(url)
    }, [])

    return (
        <div>
            <NavBar titule="Rick y Morty"></NavBar>
            <div className="container-fluid mt-5">
                <Paginacion onPrevious={onPrevious} onNext={onNext} prev={info.prev} next={info.next}></Paginacion>
                <Personajes personajes={personajes}></Personajes>
                <Paginacion onPrevious={onPrevious} onNext={onNext}  prev={info.prev} next={info.next}></Paginacion>
            </div>
        </div>


    );
}
export default Home;
