import AnimatedFadeIn from "../Animations/AnimatedFadeIn";
import Button from "../Button";

export default function JoinUs() {
  return (
    <AnimatedFadeIn>
      <div className="min-h-[65vh] bg-brand-gradient-01 bg-white flex flex-col gap-14 items-center justify-center">
        <h2 className="text-4xl text-primary-800 font-semibold">
          Join us in revolutionizing digital identity—where trust 🤝 meets
          technology 👩‍💻⚙️!
        </h2>
        <div className="flex gap-5">
          <Button size="xl" variation="tertiary">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </AnimatedFadeIn>
  );
}
