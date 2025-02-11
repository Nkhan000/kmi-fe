export default function DashboardSideNavigation() {
  const links = [
    { href: "/", label: "profile" },
    { href: "/", label: "Usage Overview" },
    { href: "/", label: "Add Documents" },
    { href: "/", label: "Update Settings" },
    { href: "/", label: "Feedback & Support" },
    { href: "/", label: "logout" },
  ];

  return (
    <div className="min-h-full bg-brand-gradient-03 py-20">
      <ul className="flex flex-col gap-2">
        {links.map((link, idx) => (
          <li
            key={idx}
            className="text-2xl capitalize px-12 py-4 hover:bg-white ease-out duration-200 hover:text-primary-700"
          >
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
