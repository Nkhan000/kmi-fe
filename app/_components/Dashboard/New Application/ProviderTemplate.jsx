import Image from "next/image";

export default function ProviderTemplate() {
  return (
    <div className="group relative py-3 px-4 max-h-fit  border-b-2 border-green-200 hover:border-green-300 rounded-md">
      <header className="flex items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            src="/pp.jpg"
            alt="company logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold text-primary-700">
            Nepal Bank Ltd.
          </span>
          <span className="text-sm text-primary-600">Government Bank</span>
        </div>
      </header>
      <div className="absolute opacity-0 group-hover:opacity-100 ease-out duration-150 flex items-center top-0 right-5 gap-2">
        <label
          htmlFor="select"
          className="cursor-pointer  text-sm text-primary-600"
        >
          Select
        </label>
        <input type="radio" id="select" className="cursor-pointer " />
      </div>
    </div>
  );
}
