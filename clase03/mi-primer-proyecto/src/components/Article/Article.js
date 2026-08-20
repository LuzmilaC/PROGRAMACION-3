import React from "react";
import Main from "../Main/Main";

function Article (props) {
    return(
            
                <article className="data-detail">
                <div className="card-content">
                    <h4>{props.titulo}</h4>
                    <p>{props.datos}</p>
                </div>
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </article>   
    
    )
}

export default Article