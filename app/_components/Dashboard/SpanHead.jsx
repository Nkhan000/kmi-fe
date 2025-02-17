import StyledTag from "@/app/_components/StyledTag";
import { FiEdit } from "react-icons/fi";

export default function SpanHead({
  head,
  span,
  isEditable = true,
  addPrimaryTag = false,
}) {
  return (
    <div className="relative flex flex-col group">
      <span className="font-semibold capitalize text-primary-400">{head}</span>
      <div className="flex gap-3">
        <span className="text-primary-800 text-xl">{span}</span>
        {addPrimaryTag && <StyledTag>primary</StyledTag>}
      </div>

      {isEditable && (
        <button className="absolute -top-2 right-6 h-2 w-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <svg className="h-5 w-5 text-lg text-primary-800">
            <FiEdit />
          </svg>
        </button>
      )}
    </div>
  );
}
