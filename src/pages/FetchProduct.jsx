import React, { useEffect } from 'react';
import { useProductStore } from '../stores/useProductStore';
import { Link } from 'react-router-dom';

const FetchProduct = () => {
    
    const { products, fetchAllProducts } = useProductStore();
    
    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return (
        <div className='container'>
            <div className="bg-white">
                <div className="mx-auto cursor-pointer max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
                        {products.map((product) => (
                            <Link to={`/products/${product._id}`} key={product.id}>
                                <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                                    <div className="aspect-h-4 aspect-w-3 sm:aspect-none group-hover:opacity-75 sm:h-96">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-center sm:h-full sm:w-full"
                                            style={{ aspectRatio: 2 / 3, objectFit: "contain" }}
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col space-y-2 p-4">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{product.description.slice(0, 20)}</p>
                                        <div className="flex flex-1 flex-col justify-end">
                                            <p className="text-sm italic text-gray-500">{product.category}</p>
                                            <p className="text-base font-medium text-gray-900">{product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FetchProduct;
