function Button({ type = "primary", children }) {
  if (type === "primary")
    return (
      <button className="bg-green-400 ease-in duration-200 px-16 py-4 rounded-md text-white text-xl font-semibold hover:bg-green-200 hover:text-primary-900 transition-all outline-gray-400 outline-offset-4">
        {children}
      </button>
    );
  if (type === "secondary")
    return (
      <button className="bg-white ease-in duration-200 px-16 py-4 rounded-md text-primary-900 text-xl font-semibold hover:bg-green-400  transition-all outline-gray-400 outline-offset-4">
        {children}
      </button>
    );
  if (type === "tertiary")
    return (
      <button className="border-4 border-green-400 ease-in duration-200 px-16 py-4 rounded-md text-primary-900 text-xl font-semibold hover:bg-green-400  transition-all outline-gray-400 outline-offset-4">
        {children}
      </button>
    );
}

export default Button;
