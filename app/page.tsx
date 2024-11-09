import { ModeToggle } from "@/components/darktheme/toogle-mode";
import LoginForm from "@/components/login/login-form";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <div className="flex h-full items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
