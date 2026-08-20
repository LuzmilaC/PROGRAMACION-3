import Card from "../Card/Card";

const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"];

function Categories () {
    return(
        <div>
            <section className="general-data">
                {categories.map((category, index) => (
                    <Card key={index} category={category} />
                ))}
            </section>
        </div>
    )
}

export default Categories;
