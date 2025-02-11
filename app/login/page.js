import LoginForm from "@/app/_components/Authentication/LoginForm";

export default function Login() {
  return (
    <section className="min-h-screen min-w-full p-12 flex mx-auto flex-col items-center">
      <div className="border-4">
        <LoginForm />
      </div>
    </section>
  );
}
