import StepsCard from "./StepsCard";

function Steps() {
  const cardData = [
    {
      id: 1,
      name: "signup & create account",
      description:
        "Sign up or log in to get started with seamless verification",
    },
    {
      id: 2,
      name: "Easy Upload & Verification",
      description: "Securely upload your ID and get verified fast",
    },
    {
      id: 3,
      name: "Unlock Hassle Free Access",
      description:
        "Enjoy the convenience of one-time verification – no more redundant checks!",
    },
  ];

  return (
    <div className="flex gap-14 min-h-full justify-center items-center">
      {cardData.map((item, idx) => (
        <StepsCard key={idx} item={item} />
        // <AnimatedFadeIn >
        // </AnimatedFadeIn>
      ))}
    </div>
  );
}

export default Steps;
