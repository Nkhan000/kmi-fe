"use client";

function Button({
  type = "primary",
  variation = "primary",
  size = "md",
  handleClick,
  isDisabled = false,
  children,
}) {
  const textPadding =
    size == "lg"
      ? "px-8 py-2"
      : size == "md"
      ? "px-6 py-2"
      : size == "sm"
      ? "p-2"
      : "px-8 py-4";

  const bgColor =
    variation == "danger"
      ? "bg-red-400"
      : variation == "warning"
      ? "bg-yellow-400"
      : "bg-green-400";

  const bgColorHover =
    variation == "danger"
      ? "hover:bg-red-300"
      : variation == "warning"
      ? "hover:bg-yellow-300"
      : "hover:bg-green-300";

  const btnStyles = {
    primary: `max-w-full ${bgColor} ease-in duration-200 ${textPadding} rounded-md text-white text-${size} font-semibold ${bgColorHover} hover:text-primary-800 transition-all outline-gray-400 outline-offset-4`,
    secondary: `max-w-full bg-white ease-in duration-200 ${textPadding} rounded-md text-primary-900 text-${size} font-semibold hover:bg-green-400  transition-all outline-gray-400 outline-offset-4`,
    tertiary: `max-w-full border-2 border-green-400 ease-in duration-200 ${textPadding} rounded-md text-primary-900 text-${size} font-semibold hover:bg-green-400 hover:text-primary-50 transition-all outline-gray-400 outline-offset-4`,
  };
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={` ${btnStyles[type]} ${
        isDisabled
          ? "cursor-not-allowed bg-primary-50 hover:bg-primary-50 hover:text-primary-200"
          : "cursor-pointer"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
