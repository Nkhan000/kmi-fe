export default function NewProfileForm() {
  return (
    <section className="min-h-[85vh] min-w-[90vw] p-4">
      <header className="flex flex-col gap-6">
        <h1 className="text-5xl font-semibold text-primary-200">
          Setup Your New Profile
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {[
            "general information",
            "legal information",
            "academic information",
            "other informations",
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-2 flex flex-col  items-center gap-1 shadow-md"
            >
              <span className="text-xl text-primary-700 capitalize">
                {item}
              </span>
              <div className="h-2  min-w-full rounded-full bg-brand-gradient-03"></div>
            </div>
          ))}
        </div>
      </header>

      <div></div>
    </section>
  );
}
