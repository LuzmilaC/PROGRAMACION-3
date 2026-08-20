import Article from "../Article/Article";
import Categories from "../Categories/Categories";

function Main () {
    return(
        <div>
            <section className="top-data">
                <Article titulo="Products In Database" datos="135"/>
                <Article titulo="Amount In Products" datos="$645.634"/>
                <Article titulo="User Quantity" datos="90"/>     
            </section>
            <h2>Categories in database</h2>
            
            <Categories></Categories>
                        
        </div>
            
    )
}

export default Main