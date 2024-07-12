import SelectUser from "../SelectUser/SelectUser";
import { Logo } from "../Logo/Logo";
const logos = ["/logo.svg", "/vite.svg"];

export default function Header() {
  return (
    <>
      <Logo image={logos[0]} />
      <SelectUser />
    </>
  );
}
