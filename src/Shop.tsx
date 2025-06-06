import useEffect from "react";
import { Rating } from "flowbite-react";

export default function Shop() {

 

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-2 mt-3">Shop Our Products</h1>
        <p>
          Browse our collection of high-quality items. Use the filters to find
          exactly what you're looking for.
        </p>
      </div>

      <div>
        {/* item1 */}
        <div className="w-full mt-14 mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img
      className="p-8 rounded-t-lg"
      src="/docs/images/products/apple-watch.png"
      alt="Product Image"
    />
  </a>
  <hr className="w-1/2 mx-auto border-gray-300 dark:border-gray-600" />
  <div className="px-5 pb-5">
    <a href="#">
      <h5 className="text-sm font-bold text-gray-900 dark:text-white mt-4">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      </h5>
    </a>


    <div className="mt-2 flex items-center justify-between">
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        $599
      </span>
      <div className="flex items-center gap-1">
        <Rating />
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">
          5.0
        </span>
      </div>
    </div>

    <div className="mt-6 flex justify-center">
      <button className="bg-blue-700 hover:bg-blue-800 transition-colors px-4 py-2 text-white rounded w-full">
        Add to cart
      </button>
    </div>
  </div>
</div>

      </div>
    </>
  );
}
