import {useLoaderData,} from "react-router-dom";
import ProductCard from "./ProductCard";
const Products = () => {
    const {products}=useLoaderData()
    // console.log(products)

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
                {
                    products?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;