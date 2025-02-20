import { FaRegUserCircle } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import Button from "../../Button";

export default function UserVerification() {
  return (
    <section role="section overflow-y-scroll">
      <div className="flex items-center justify-between">
        <h2 className="text-primary-800 text-3xl">Profile Status</h2>

        <div>
          <Button size="sm">Edit</Button>
        </div>
      </div>

      {/* <div className="h-[35rem] bg-primary-50 py-3 pt- px-3">
        <div className="bg-white min-h-full rounded-md rounded-t-none">
          &nbsp;
        </div>
      </div> */}
    </section>
  );
}

//  {/*
//       <div className="bg-primary-50 grid grid-cols-3 gap-10 py-3 px-3 pb-0 rounded-lg rounded-bl-none rounded-br-none">
//         <div className="bg-white flex flex-col items-center justify-center p-4 rounded-xl rounded-bl-none rounded-br-none relative before:absolute before:content-[''] before:w-full before:h-6 before:-bottom-4  before:bg-white">
//           <svg className="h-14 w-14 text-5xl text-primary-700 relative">
//             <FaRegUserCircle />
//           </svg>
//           <span className="text-primary-700">General Verification</span>
//         </div>

//          <div className="bg-white flex flex-col items-center justify-center p-4 rounded-xl rounded-bl-none rounded-br-none">
//           <svg className="h-14  w-14 text-5xl text-primary-700">
//             <MdDocumentScanner />
//           </svg>
//           <span className="text-primary-700">Documents</span>
//         </div>
//         <div className="bg-white flex flex-col items-center justify-center p-4 rounded-xl rounded-bl-none rounded-br-none">
//           <svg className="h-14  w-14 text-5xl text-primary-700">
//             <GrStatusGood />
//           </svg>
//           <span className="text-primary-700">Profile Status</span>
//         </div>
//       </div>
//         */}
