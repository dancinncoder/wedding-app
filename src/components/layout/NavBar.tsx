import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex gap-[100px] justify-center">
      <Link href="/about">ABOUT</Link>
      <Link href="/films">FILMS</Link>
      <Link href="/reservation">RESERVATION</Link>
      <Link href="/qna">QnA</Link>
      <div className="flex gap-2">
        <Image
          alt="instagram logo"
          src="/images/insta-logo.png"
          width={30}
          height={30}
        />
        <Image
          alt="facebook logo"
          src="/images/fb-logo.png"
          width={30}
          height={30}
        />
      </div>
    </nav>
  );
};

export default NavBar;
