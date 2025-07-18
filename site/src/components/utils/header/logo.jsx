import { Link } from "react-router-dom";
import logo from "../../../assets/logo/PRIME-YARD-Profile-Pic_1-1.png";
import logo2 from "../../../assets/logo/prime-yard-logo-horizontal-short-terracotta-rgb-900px-w-72ppi__prime-yard-logo-horizontal-short-terracotta-rgb-900px-w-72ppi.png";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 font-golos cursor-pointer">
      {/* <img
        src={logo}
        className="w-12 h-12 rounded-full bg-brand-orange p-1"
        alt="Prime Yard logo"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-bold text-brand-beige">Prime Yard</span>
        <span className="text-sm text-brand-beige tracking-wide">
          Apartments
        </span>
      </div> */}
      <img src={logo2}  className="h-8" alt="" />
    </Link>
  );
}

export default Logo;
