import { Rating } from "flowbite-react";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

export default function Shop() {
  const { products } = useContext(DataContext);
  console.log(products);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2  gap-6 mt-8 mb-8 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden  flex items-center justify-center">
                <img
                  className="w-72 h-72 object-contain p-4 transition-transform duration-300 ease-in-out hover:scale-105"
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  style={{
                    imageRendering: "high-quality",
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-800 leading-tight min-h-[3rem]">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description.slice(0, 100)}...
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Rating
                    value={Math.round(product.rating.rate)}
                    readOnly
                    size="sm"
                  />
                  <span className="text-xs text-gray-500">
                    ({product.rating.count})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-indigo-600">
                    ${product.price}
                  </p>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
