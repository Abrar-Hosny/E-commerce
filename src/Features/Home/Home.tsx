import { ShoppingCart, Truck, Star, Undo2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="text-center mt-20 bg-amber-500">
        <div className="flex jsutify-center items-center flex-col">
          <ShoppingCart className="w-16 h-16 text-blue-600 mb-4" />
          <h1 className="text-5xl font-bold mb-10">
            Welcome to <span>Trendify</span>
          </h1>
        </div>

        <p>
          Discover our amazing collection of high-quality products. From
          electronics to
        </p>
        <p>fashion, we have something for everyone!</p>
        <div className="mt-10">
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-5 items-center mt-20 gap-4">
  {/* Free Shipping Card */}
  <div className="w-full md:w-1/3 mb-5 md:mb-0 p-6 bg-white text-center border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Truck className="w-10 h-10 mx-auto mb-3 text-blue-700 dark:text-gray-400" />
    <a href="#">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Free Shipping
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
      Enjoy free delivery on all orders over $50. No hidden fees, no
      surprises at checkout. Shop more, save more, stress less.
    </p>
  </div>

  {/* Top Quality Card */}
  <div className="w-full md:w-1/3 mb-5 md:mb-0 p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
    <a href="#">
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Top Quality
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
      Only the best handpicked from trusted brands. Durable, stylish, and
      built to last. You deserve top-tier products every time.
    </p>
  </div>

  {/* Easy Returns Card */}
  <div className="w-full md:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center">
      <Undo2 className="w-10 h-10 text-red-500 dark:text-gray-400 mb-3" />
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Easy Returns
        </h5>
      </a>
    </div>
    <p className="mb-3 font-normal text-center text-gray-500 dark:text-gray-400">
      Not satisfied? Return it within 30 days. No complicated steps or
      fine print. We make it easy, because shopping should be fun.
    </p>
  </div>
</div>
    </>
  );
}
