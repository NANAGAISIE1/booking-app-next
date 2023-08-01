import SignUpButton from "../SignUpButton";
import HamburgerMenu from "./HamburgerMenu";

const Menu = () => {
  return (
    <div className=" flex justify-center space-x-3 items-center">
      <SignUpButton />
      <HamburgerMenu />
    </div>
  );
};

export default Menu;
