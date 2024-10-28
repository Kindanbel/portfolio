

const Preloader = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-100 bg-opacity-75 z-50 transition-opacity duration-500 ease-in-out">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-[#964B00] rounded-full animate-spin"></div>
          <p className="ml-4 text-lg text-gray-600">Loading...</p>
        </div>
      );
}

export default Preloader