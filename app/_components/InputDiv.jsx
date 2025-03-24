export default function InputDiv({ id, className = "", label, type = "text" }) {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <label htmlFor={id} className="text-primary-600 capitalize">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border capitalize px-3 py-2 text-primary-800 rounded-lg aria-selected:border-green-300 focus:outline-green-300"
        placeholder={label}
      />
    </div>
  );
}
