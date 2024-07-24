import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="flex justify-center">
        <div>
          <div className="header-title">
            <Link href={"/"}>Accueil</Link>
          </div>
          <div className="header-title">
            <Link href={"/dienchan"}>Dien Chan</Link>
          </div>
          <div className="header-title">
            <Link href={"/emilie-lefevre"}>Qui suis-je</Link>
          </div>
        </div>
        <div>
          <div className="header-title">
            <Link href={"/tarifs"}>Tarifs</Link>
          </div>
          <div className="header-title">
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
        <div>
          <p>
            Émilie Lefevre - Praticienne de Dien Chan <br /> 23 Rue Garibaldi
            69006 Lyon <br /> Téléphone : 06.98.99.01.02
          </p>
        </div>
      </div>
      Une thérapie destinée à tous par Émilie Lefevre
    </div>
  );
}
