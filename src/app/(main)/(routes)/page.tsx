import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <Button>
        <LoginLink>Sign in</LoginLink>
      </Button>
      <Button>
        <RegisterLink>Sign up</RegisterLink>
      </Button>
    </div>
  );
}
