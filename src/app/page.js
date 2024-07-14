"use client";
import { useState } from "react";

export default function Home() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isDisplay2, setIsDisplay2] = useState(false);

  const activateDisplay = () => {
    return setIsDisplay(!isDisplay);
  };

  const activateDisplay2 = () => {
    return setIsDisplay2(!isDisplay2);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="image-top-home">
        <img
          src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/v1/image/upload/v1720885918/RGllbkNoYW4vZHJpbGxkb3duX2NvcGllX3dkcnBkOQ==/drilldown"
          alt="img-relax"
        />
      </div>
      <div className="container">
        <div className="title-home-top">
          Soyez les bienvenus sur Relaxation Dien Chan
        </div>
        <div className="text-home">
          Découvrez le pouvoir revitalisant du Dien Chan, une méthode innovante
          de réflexologie faciale vietnamienne. Réveillez votre éclat naturel et
          revitalisez votre bien-être avec nos techniques douces et efficaces.
          Offrez-vous une expérience de relaxation profonde et redécouvrez
          l'harmonie intérieure grâce à notre approche holistique. Embrassez une
          peau radieuse et une détente totale avec le Dien Chan – votre chemin
          vers une santé équilibrée et une beauté naturelle.
        </div>
        <div className="title-home">Les outils pour pratiquer</div>
        <div
          className="image-home"
          onClick={() => {
            activateDisplay();
          }}
        >
          <div>
            <img
              src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/v1/image/upload/v1720880176/RGllbkNoYW4vSU1HXzIwMjEwMjI0XzE2MjYxNV9jdHZxcHI=/drilldown"
              alt="tools-dienchan"
            />
          </div>
        </div>
        {isDisplay ? (
          <div
            className="popup-overlay"
            onClick={() => {
              activateDisplay();
            }}
          >
            <div className="popup-home">
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/v1/image/upload/v1720880176/RGllbkNoYW4vSU1HXzIwMjEwMjI0XzE2MjYxNV9jdHZxcHI=/drilldown"
                alt="tools-full-size"
              />
            </div>
          </div>
        ) : null}
        <div className="text-home">
          Le Dien Chan utilise une variété d'outils spécialisés pour stimuler
          les points réflexes du visage, favorisant ainsi la relaxation et le
          rééquilibrage énergétique. Des stylets en métal ou en bois sont
          utilisés pour appliquer des pressions précises, tandis que les
          rouleaux de massage améliorent la circulation et détendent les muscles
          faciaux. Des instruments d'acupression ciblent les points spécifiques
          pour soulager les tensions et améliorer le flux énergétique. Les
          pierres précieuses comme le jade contribuent aux propriétés
          énergétiques du traitement. Les plaques de réflexologie guident la
          stimulation des zones réflexes, tandis que les miroirs facilitent le
          diagnostic et l'application personnalisée des techniques. Ensemble,
          ces outils enrichissent le Dien Chan en aidant à rétablir l'harmonie
          intérieure et à promouvoir un bien-être global.
        </div>
        <div className="title-home">Bien-être personnel et professionnel</div>
        <div className="text-home">
          Sur le plan personnel, le Dien Chan est apprécié pour sa capacité à
          réduire le stress et l'anxiété en favorisant une relaxation profonde.
          En stimulant les points réflexes du visage, il permet également de
          soulager les tensions musculaires et de promouvoir un meilleur
          sommeil, facilitant ainsi une récupération physique et mentale
          optimale. Professionnellement, le Dien Chan peut être bénéfique en
          tant qu'outil de gestion du stress au travail. Les séances régulières
          peuvent offrir des moments de pause nécessaires dans une journée bien
          remplie, favorisant ainsi une meilleure gestion du stress et une
          augmentation de la productivité. De plus, en améliorant la clarté
          mentale et la capacité de concentration, cette pratique peut soutenir
          une performance professionnelle optimale. En intégrant le Dien Chan
          dans une routine de bien-être personnel et professionnel, il devient
          un moyen efficace de promouvoir la santé globale, d'améliorer la
          qualité de vie et de maintenir un équilibre harmonieux entre les
          exigences du travail et les besoins personnels.
        </div>
        <div className="title-home">Recharger ses énergies</div>
        <div className="text-home">
          Plongez dans une parenthèse de bien-être absolu avec nos séances de 45
          minutes de Dien Chan. Offrez-vous un moment de relaxation profonde où
          chaque pression douce sur les points réflexes du visage libère les
          tensions accumulées. Laissez-vous emporter par une sensation apaisante
          tandis que votre corps se détend et que votre esprit se décompresse.
          Nos praticiens expérimentés vous guident à travers cette expérience
          revitalisante, visant à rééquilibrer votre énergie et à restaurer
          votre vitalité. Offrez-vous ce luxe de détente et réveillez-vous
          rafraîchi, revitalisé et prêt à affronter le monde avec sérénité.
        </div>
        <div className="title-home">Le Ying et le Yang</div>
        <div className="text-home">
          Ils symbolisent l'harmonie des forces opposées et complémentaires dans
          l'univers. Dans le contexte du Dien Chan, cette dualité trouve son
          écho à travers la stimulation des points réflexes du visage pour
          rétablir l'équilibre énergétique du corps. En appliquant des pressions
          précises avec des outils spécialisés, le Dien Chan cherche à
          harmoniser les énergies Yin (froid, passif) et Yang (chaud, actif) du
          visage, favorisant ainsi la santé physique et émotionnelle. Cette
          approche holistique révèle comment l'équilibre entre le Yin et le Yang
          dans le Dien Chan peut soutenir une harmonie intérieure et un
          bien-être global.
        </div>
        <div className="title-home">Mon expertise pour vous</div>
        <div className="text-home">
          Émilie Lefevre, diplômée en Médecine avec spécialisation en Médecine
          Traditionnelle Asiatique, apporte une expertise unique en Dien Chan.
          Après avoir complété un voyage universitaire enrichissant en Asie,
          elle s'est immergée dans l'étude approfondie de la réflexologie
          faciale vietnamienne. Sa pratique intègre des techniques ancestrales
          et des méthodes contemporaines pour offrir des soins holistiques et
          personnalisés, visant à rééquilibrer l'énergie corporelle et à
          promouvoir le bien-être global de ses patients.
        </div>
        <div className="title-home">Un espace de détente</div>
        <div
          className="image-home"
          onClick={() => {
            activateDisplay2();
          }}
        >
          <div>
            <img
              src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/v1/image/upload/v1720965781/RGllbkNoYW4vSW1hZ2U1MS0yX29kaHdjaA==/drilldown"
              alt="tools-dienchan"
            />
          </div>
        </div>
        {isDisplay2 ? (
          <div
            className="popup-overlay"
            onClick={() => {
              activateDisplay2();
            }}
          >
            <div className="popup-home">
              <img
                src="https://res-console.cloudinary.com/dlfp2xvis/thumbnails/v1/image/upload/v1720965781/RGllbkNoYW4vSW1hZ2U1MS0yX29kaHdjaA==/drilldown"
                alt="tools-full-size"
              />
            </div>
          </div>
        ) : null}
        <div className="text-home">
          Notre salon vous accueille et vous permet d'oublier le monde qui vous
          entoure
        </div>
      </div>
    </main>
  );
}
