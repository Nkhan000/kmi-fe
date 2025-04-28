import Button from "@/app/_components/Button";
import InputDiv from "@/app/_components/InputDiv";
import StyledOption from "@/app/_components/StyledOptions";
import ParentOrGuardianDetails from "./ParentOrGuardianDetail";

export default function GeneralInfoForm() {
  return (
    <form className="flex flex-col gap-6 flex-shrink-0">
      <div className="grid grid-cols-3 gap-4">
        <InputDiv id="full-name" label="Full Name" />
        <InputDiv id="mid-name" label="Middle Name" />
        <InputDiv id="last-name" label="last Name" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <InputDiv id="nationality" label="nationality" />
        <InputDiv id="contact" label="contact number" />
        <InputDiv id="dob" label="date of birth" type="date" />
      </div>
      <div className="grid grid-cols-3">
        <StyledOption
          oreintation="col"
          name="gender"
          valuesArr={["male", "female", "others"]}
        ></StyledOption>
        <StyledOption
          oreintation="col"
          name="profession"
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
        <StyledOption
          oreintation="col"
          name="maritial Status"
          valuesArr={["single", "married", "widowed", "divorced "]}
        ></StyledOption>

        <div className="mt-4 mb-4 col-span-3 flex flex-col gap-4 items-center">
          <span className="text-2xl font-semibold text-primary-400">
            Parmanent Address
          </span>
          <div className="self-stretch grid grid-cols-4 gap-2">
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
          </div>
        </div>
      </div>

      <ParentOrGuardianDetails relation="father" />
      <ParentOrGuardianDetails relation="mother" />
      <ParentOrGuardianDetails relation="spouse" />
      <ParentOrGuardianDetails relation="grand father" addAddress={false} />
    </form>
  );
}
