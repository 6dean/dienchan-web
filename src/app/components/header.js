"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function header() {
  const pathname = usePathname();

  console.log(pathname === "/");

  return (
    <div className="header">
      <div
        className={
          pathname === "/"
            ? "absolute top-20 left-0 right-0 flex justify-center gap-7"
            : " flex justify-center p-20 gap-7"
        }
      >
        <div className="header-title">
          <Link href={"/"}>Accueil</Link>
        </div>
        <div className="header-title">
          <Link href={"/dienchan"}>Dien Chan</Link>
        </div>
        <div className="header-title">
          <Link href={"/emilie-lefevre"}>Qui suis-je</Link>
        </div>
        <div className="header-title">
          <Link href={"/avis"}>Avis des patients</Link>
        </div>
        <div className="header-title">
          <Link href={"/tarifs"}>Tarifs</Link>
        </div>
        <div className="header-title">
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
