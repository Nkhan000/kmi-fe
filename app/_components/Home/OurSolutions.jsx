import SectionHead from "../SectionHead";
import SolutionsList from "./SolutionsList";

function OurSolutions() {
  return (
    <section className="min-h-screen px-20 py-12 pb-0 flex flex-col gap-14 bottom-[2px]">
      <SectionHead
        mainHead="our solutions"
        subHead="Get high qualities solutions for all of your personal requirements"
      />
      <SolutionsList />
    </section>
  );
}

export default OurSolutions;
