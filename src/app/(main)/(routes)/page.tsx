import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <Button>
        <LoginLink>Sign in</LoginLink>
      </Button>
      <br />
      <br />
      <Button>
        <RegisterLink>Sign up</RegisterLink>
      </Button>
      <br />
      <br />
      <ModeToggle />
    </div>
  );
}
