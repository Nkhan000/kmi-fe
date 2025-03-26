import InputDiv from "@/app/_components/InputDiv";
import StyledOption from "@/app/_components/StyledOptions";

export default function ParentOrGuardianDetails({
  relation,
  addAddress = true,
}) {
  return (
    <div className="flex flex-col gap-6 items-center">
      <span className=" capitalize text-3xl font-semibold text-primary-700">
        {relation} Details
      </span>
      <div className="self-stretch flex-col flex gap-4">
        <div className="grid grid-cols-3 gap-3">
          <InputDiv id="f-first-name" label="First Name" />
          <InputDiv id="f-mid-name" label="Middle Name" />
          <InputDiv id="f-last-name" label="Last Name" />
          <InputDiv id="f-nationality" label="nationality" />
          <InputDiv id="f-citizenship" label="citizenship number" />
          <StyledOption
            oreintation="col"
            name="Proffession"
            valuesArr={[
              "student",
              "employment",
              "business",
              "farmer",
              "self employeed",
              "government service",
              "other",
            ]}
          ></StyledOption>
        </div>
      </div>

      {addAddress && (
        <div className="self-stretch mt-4 mb-4 col-span-3 flex flex-col gap-4 items-center">
          <span className="text-2xl font-semibold text-primary-400">
            Parmanent Address
          </span>
          <div className="self-stretch grid grid-cols-4 gap-4">
            <StyledOption
              oreintation="col"
              name="state"
              valuesArr={[
                "bagmati pradesh",
                "karnali pradesh",
                "madhesh pradesh",
                "province 4",
                "province 6",
                "province 7",
              ]}
            >
              {" "}
            </StyledOption>
            <StyledOption
              oreintation="col"
              name="District"
              valuesArr={["parsa", "bara", "sarlahi", "rautahat", "jeetpur"]}
            ></StyledOption>
            <StyledOption
              oreintation="col"
              name="Municipality"
              valuesArr={[
                "Birgunj metropolitan",
                "kalaiya municipality",
                "jeetpur municipality",
                "Bindabasini V.D.C",
              ]}
            ></StyledOption>
            <InputDiv id="ward-tole" label="ward/tole" />

            <div className="flex items-center gap-3 px-4">
              <input
                type="checkbox"
                className=""
                id={`${relation}-address-same-as-perm`}
              />
              <label
                htmlFor={`${relation}-address-same-as-perm`}
                className="text-md text-primary-700"
              >
                Same as permamnet address
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
