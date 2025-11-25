

import { FaYoutube} from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { PiInstagramLogoLight } from "react-icons/pi";

export default function ConnectWithUs({ className, property1 = "Youtube" }) {
  const icons = {
    youtube: <FaYoutube size={24}   className="text-[#7E7577] group-hover:text-white transition" />,
    facebook: <AiFillFacebook size={24} className="text-[#7E7577] group-hover:text-white transition"/>,
    instagram: <PiInstagramLogoLight size={24} className="text-[#7E7577] group-hover:text-white transition"/>,
  };

  const key = property1.toLowerCase();

  // Text-only items
  if (
    property1 === "Pre-Publication" ||
    property1 === "Feedback" ||
    property1 === "Bulletin" ||
    property1 === "Return & Refund Policy" ||
    property1 === "Archives" ||
    property1 === "Privacy Policy" ||
    property1 === "Catalogue" ||
    property1 === "Terms & Conditions"
  ) {
    return (
      <div className={className}>
        <p className="font-['Inter'] text-[14px] text-[#7e7577] hover:text-white cursor-pointer leading-6">
          {property1}
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex gap-2 items-center  group cursor-pointer">
        {icons[key] && (
          <div className="shrink-0">{icons[key]}</div>
        )}

        <p className="font-['Inter'] text-[14px] text-[#7e7577] hover:text-white cursor-pointer leading-6">
          {property1}
        </p>
      </div>
    </div>
  );
}


