import Logo from "../assets/Logo_12.png"
function AppBar() {
  return (
    <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
      <div className="">
        <img
          src={Logo}
          alt="logo"
          className="h-7"
        ></img>
      </div>
    </div>
  );
}

export default AppBar;
