import React from "react";

function Card ({ category }) {
    return(
            <article className="card">
                <p>{category}</p>
            </article>
    )
}
export default Card;