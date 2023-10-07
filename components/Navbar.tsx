"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/");
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-1">
          <div className="block">
            <SignedOut>
              <Link href="/sign-in">
                <CustomButton
                  title="Sign In"
                  btnType="button"
                  containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                  handleClick={handleSignUp}
                />
              </Link>
            </SignedOut>
            <SignedIn>
              <div>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
