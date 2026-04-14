import logo from "@/assets/logo-xl.png";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="bg-emerald-900">
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <Image src={logo} width={410} height={60} alt="Website Logo" />
          <p className="text-gray-200 text-center">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="text-center">
            <h3 className="text-xl text-white mb-3">Social Links</h3>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white grid place-items-center cursor-pointer">
                <RiInstagramFill className="text-black size-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white grid place-items-center cursor-pointer">
                <FaFacebookSquare className="text-black size-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white grid place-items-center cursor-pointer">
                <RiTwitterXFill className="text-black size-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 font-light gap-4 py-8">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms of Service</span>
            <span className="cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
}
