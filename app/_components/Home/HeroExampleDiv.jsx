import Image from "next/image";

function HeroExampleDiv() {
  return (
    <div className="min-h-full flex flex-col gap-6 z-20">
      <div className="flex justify-between items-center border p-4 rounded-lg shadow-md z-20 bg-white">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-[50%] border-2 overflow-hidden">
            <Image
              src="/pp.jpg"
              fill
              alt="profile-picture"
              className="bg-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-primary-800 font-semibold text-2xl">
              Mell Miller
            </span>
            <span className="text-primary-700 text-2 font-light">
              Id:454cd87sds8855
            </span>
          </div>
        </div>
        <div className="min-w-10 px-10 py-3 bg-green-300 rounded-lg">
          <span className="text-primary-900 font-semibold">Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_30%]">
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-primary-800 font-semibold">
            Details :
          </span>
          <div className="flex flex-col gap-1">
            <div className="">
              <span className="text-md text-primary-800 font-semibold">
                National ID:
              </span>
              <span className="text-md text-primary-800 font-light">
                &nbsp;34-XX-XX-XXXX
              </span>
            </div>
            <div className="">
              <span className="text-md text-primary-800 font-semibold">
                Permanent Address:
              </span>
              <span className="text-md text-primary-800 font-light">
                &nbsp;XX Str.,
              </span>
              <span className="text-md text-primary-800 font-light">
                &nbsp; NY 11103,
              </span>
              <span className="text-md text-primary-800 font-light">
                &nbsp;US.
              </span>
            </div>
            <div className="">
              <span className="text-md text-primary-800 font-semibold">
                Contact:
              </span>
              <span className="text-md text-primary-800 font-light">
                &nbsp;+01-
              </span>
              <span className="text-md text-primary-800 font-light">
                XXX XXX XXX
              </span>
            </div>
            <div className="">
              <span className="text-md text-primary-800 font-semibold">
                Work Email:
              </span>
              <span className="text-md text-primary-800 font-light">
                &nbsp;millmiller.us@email.com
              </span>
            </div>
          </div>
        </div>
        <div className="min-h-full max-w-44 bg-green-100 text-center flex items-center rounded-md p-2">
          <p className="text-primary-950 font-semibold text-sm space-x-4 leading-6">
            Get your documents approved and ready to share in few simple steps
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroExampleDiv;
