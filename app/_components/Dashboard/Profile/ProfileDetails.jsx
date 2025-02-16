import Image from "next/image";
import StyledTag from "../../StyledTag";
import SpanHead from "./SpanHead";

export default function ProfileDetails() {
  return (
    <div className="min-h-full flex flex-col gap-6">
      <h1 className="text-3xl text-primary-800">Your Information</h1>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <div className="border max-h-fit rounded-md border-primary-300 overflow-hidden">
            <div className="bg-primary-50 p-4">
              <h2 className="text-xl font-semibold text-primary-800">
                Your Profile
              </h2>
            </div>
            <div className="px-8 py-4 flex flex-col items-center gap-2">
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
                <Image
                  fill
                  src="/pp.jpg"
                  alt="user-img"
                  className="object-cover"
                />
              </div>
              <div className=" relative flex flex-col items-center gap-2">
                <div className="relative flex items-center gap-4">
                  <span className="inline-block text-primary-800 font-semibold text-5xl">
                    Julia Jules
                  </span>
                  <StyledTag>verified</StyledTag>
                </div>
                <span className="text-xs italic font-light text-primary-200">
                  Joined 2024/01/05
                </span>
              </div>
            </div>
          </div>

          <div className="border max-h-fit rounded-md border-primary-300 overflow-hidden">
            <div className="bg-primary-50 p-4">
              <h2 className="text-xl text-primary-900 font-semibold">
                Your Address
              </h2>
            </div>

            <div className="flex flex-col gap-4 px-6 py-4">
              <SpanHead
                head="permanent address:"
                span="Park Avenue, 16th Street, NY 44100, US"
                addPrimaryTag={true}
              />
              <SpanHead
                head="temporary address 1:"
                span="Park Avenue, 16th Street, NY 44100, US"
              />
              <SpanHead
                head="temporary address 2:"
                span="Park Avenue, 16th Street, NY 44100, US"
              />
              <SpanHead
                head="temporary address 3:"
                span="Park Avenue, 16th Street, NY 44100, US"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 flex-col">
          <div className="border max-h-fit rounded-md border-primary-300 overflow-hidden">
            <div className="bg-primary-50 p-4">
              <h2 className="text-xl font-semibold text-primary-900">
                General Information
              </h2>
            </div>

            <div className="flex flex-col gap-4 px-6 py-4">
              <div className="grid grid-cols-2">
                <SpanHead head="Full Name:" span="Julie JulesS" />
                <SpanHead head="DOB:" span="2002/12/13" />
              </div>

              <SpanHead
                head="Country of Origin:"
                span="United States of America"
              />
              <SpanHead
                head="permanent address:"
                span="Park Avenue, 16th Street, NY 44100, US"
              />

              <div className="grid grid-cols-2">
                <SpanHead head="Contact Number:" span="+01 98 782 9871" />
                <SpanHead head="Email:" span="juliejules.us@email.com" />
              </div>

              <div className="grid grid-cols-2">
                <SpanHead head="Father's Name:" span="Father Jules" />
                <SpanHead head="Mother's Name:" span="Mother Jules" />
              </div>
              <div className="grid grid-cols-2">
                <SpanHead head="Maritial Status:" span="Unmarried" />
                <SpanHead head="Female:" span="Female" />
              </div>
            </div>
          </div>

          <div className="border max-h-fit rounded-md border-primary-300 overflow-hidden">
            <div className="bg-primary-50 p-4">
              <h2 className="text-xl text-primary-900 font-semibold">
                Your Contacts:
              </h2>
            </div>

            <div className="flex flex-col gap-4 px-6 py-4">
              <div className="grid grid-cols-2 ">
                <SpanHead
                  head="Contact Number 1:"
                  span="+01 98 783 45187"
                  addPrimaryTag={true}
                />
                <SpanHead head="Contact Number 1:" span="+01 98 783 45187" />
              </div>
              <div className="grid grid-cols-2 ">
                <SpanHead head="Contact Number 1:" span="+01 98 783 45187" />
                <SpanHead head="Contact Number 1:" span="+01 98 783 45187" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
