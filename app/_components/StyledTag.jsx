export default function StyledTag({ type = "verified", children }) {
  const typeObj = {
    verified: ["border-green-400 bg-green-50", "text-green-500"],
    warning: ["border-yellow-400 bg-yellow-50", "text-yellow-500"],
    danger: ["border-red-400 bg-red-50", "text-red-500"],
    primary: ["border-primary-400 bg-primary-50", "text-primary-500"],
  };

  return (
    <div
      className={`relative py-1 px-4 flex items-center justify-center rounded-2xl border ${typeObj[type][0]}`}
    >
      <span className={`capitalize text-xs ${typeObj[type][1]}`}>
        {children}
      </span>
    </div>
  );
}
