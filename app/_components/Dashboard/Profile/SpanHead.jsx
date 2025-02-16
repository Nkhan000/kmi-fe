import StyledTag from "../../StyledTag";

export default function SpanHead({ head, span, addPrimaryTag = false }) {
  return (
    <div className="flex flex-col">
      <span className="font-semibold capitalize text-primary-400">{head}</span>
      <div className="flex gap-3">
        <span className="text-primary-800 text-xl">{span}</span>
        {addPrimaryTag && <StyledTag>primary</StyledTag>}
      </div>
    </div>
  );
}
