import useEffect, { use, useCallback } from "react";
import { Rating } from "flowbite-react";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

export default function Shop() {
  const { products } = useContext(DataContext);
  console.log(products);
  //
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-2 mt-3">Shop Our Products</h1>
        <p>
          Browse our collection of high-quality items. Use the filters to find
        </p>
        <p> exactly what you're looking for.</p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
            >
              <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
                <Rating
                  className="mt-2"
                  value={Math.round(product.rating.rate)}
                  readOnly
                />
                <p className="text-gray-900 font-bold text-xl mt-2">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
