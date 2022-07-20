import React, {useContext} from "react";
import { GlobalContext } from "../../context/global/global.context";


export default function ComponenteBisNieto() {
    const {state} = useContext(GlobalContext);
    return(
        <div className="">
            <br/>
            <h4 className="subT">Contador de visitas: {state.count ?? "No se ha recibido un valor"}</h4>
            <br/>
            <h4 className="subT">Tecnologias que manejan</h4>
        </div>
    );
}