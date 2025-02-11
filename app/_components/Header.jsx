import Navigation from "@/app/_components/NavigationLogin";
import Logo from "./Logo";
import NavigationLogin from "@/app/_components/NavigationLogin";
import NavigationMenu from "./NavigationMenu";

function Header() {
  return (
    <header className="z-50 sticky top-0 px-4 py-2 backdrop-saturate-180 backdrop-blur-md  ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <NavigationMenu />
        <NavigationLogin />
      </div>
    </header>
  );
}

export default Header;
