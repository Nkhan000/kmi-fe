function Button({ type = "primary", size = "md", children }) {
  const textPadding =
    size == "lg" ? "px-8 py-2" : size == "md" ? "px-6 py-2" : "p-2";
  const btnStyles = {
    primary: `max-w-fit bg-green-400 ease-in duration-200 ${textPadding} rounded-md text-white text-${size} font-semibold hover:bg-green-200 hover:text-primary-900 transition-all outline-gray-400 outline-offset-4`,
    secondary: `max-w-fit bg-white ease-in duration-200 ${textPadding} rounded-md text-primary-900 text-${size} font-semibold hover:bg-green-400  transition-all outline-gray-400 outline-offset-4`,
    tertiary: `max-w-fit border-2 border-green-400 ease-in duration-200 ${textPadding} rounded-md text-primary-900 text-${size} font-semibold hover:bg-green-400  transition-all outline-gray-400 outline-offset-4`,
  };
  return <button className={btnStyles[type]}>{children}</button>;
}

export default Button;
