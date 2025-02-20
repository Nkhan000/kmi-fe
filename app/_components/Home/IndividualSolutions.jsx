import Image from "next/image";

export default function IndividiualSolution() {
  return (
    <div className="min-h-[70vh] mx-auto w-[80%]">
      <div className="grid grid-cols-3 grid-rows-[14rem_14rem_14rem] gap-2">
        <div className="relative border-4 rounded-xl col-start-1 col-end-3 row-start-1 row-end-3 overflow-hidden">
          <div className="relative h-full w-full ">
            <Image
              fill
              src="/user-mobile.jpg"
              alt="userimg"
              className="object-cover"
            />
          </div>
          <div className="min-w-full bg-white min-h-full absolute top-[55%] rounded-tr-3xl rounded-tl-3xl overflow-hidden hover:top-0 hover:rounded-tr-none hover:rounded-tl-none ease-in duration-300">
            <div>test</div>
          </div>
        </div>

        <div className="relative border-4 rounded-xl col-start-3 -col-end-1 overflow-hidden">
          <div className="relative h-full w-full ">
            <Image
              fill
              src="/user-mobile.jpg"
              alt="userimg"
              className="object-cover"
            />
          </div>
          <div className="min-w-full bg-white min-h-full absolute top-[55%] rounded-tr-3xl rounded-tl-3xl overflow-hidden hover:top-0 hover:rounded-tr-none hover:rounded-tl-none ease-in duration-300">
            <div>test</div>
          </div>
        </div>
        <div className="border-4 rounded-xl row-start-3 relative overflow-hidden">
          <div className="relative h-full w-full ">
            <Image
              fill
              src="/user-mobile.jpg"
              alt="userimg"
              className="object-cover"
            />
          </div>
          <div className="min-w-full bg-white min-h-full absolute top-[55%] rounded-tr-3xl rounded-tl-3xl overflow-hidden hover:top-0 hover:rounded-tr-none hover:rounded-tl-none ease-in duration-300">
            <div>test</div>
          </div>
        </div>
        <div className="border-4 rounded-xl col-start-3 relative overflow-hidden">
          <div className="relative h-full w-full ">
            <Image
              fill
              src="/user-mobile.jpg"
              alt="userimg"
              className="object-cover"
            />
          </div>
          <div className="min-w-full bg-white min-h-full absolute top-[55%] rounded-tr-3xl rounded-tl-3xl overflow-hidden hover:top-0 hover:rounded-tr-none hover:rounded-tl-none ease-in duration-300">
            <div>test</div>
          </div>
        </div>
        <div className="border-4 rounded-xl row-start-3 col-start-2 -col-end-1 relative overflow-hidden">
          <div className="relative h-full w-full ">
            <Image
              fill
              src="/user-mobile.jpg"
              alt="userimg"
              className="object-cover"
            />
          </div>
          <div className="min-w-full bg-white min-h-full absolute top-[55%] rounded-tr-3xl rounded-tl-3xl overflow-hidden hover:top-0 hover:rounded-tr-none hover:rounded-tl-none ease-in duration-300">
            <div>test</div>
          </div>
        </div>
      </div>
    </div>
  );
}
