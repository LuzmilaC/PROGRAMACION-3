import Article from "../Article/Article";
import Categories from "../Categories/Categories";

function main () {
    return(
        <div>
            <section class="top-data"> 
                <Article></Article>
                <Article></Article>
                <Article></Article>
            </section>
            <h2>Categories in database</h2>
                    <section class="general-data"> 
                        <Categories></Categories>
                        
                    </section>

        </div>
            
    )
}

export default main