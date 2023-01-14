import React from "react";
import ProfilePage from "./ProfilePage";

export const Profil = () => {
  return (
    <>
      <ProfilePage
        image={user.image}
        name={user.name}
        description={user.description}
        address1="Adresse 1"
        address2="Adresse 2"
        skills={user.skills}
        isActive={user.isActive}
      />
    </>
  );
};

const user = {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    image: "https://i.pravatar.cc/200",
    description: "Je suis un développeur web passionné et dévoué qui aime relever des défis et apprendre de nouvelles technologies. J'ai une solide expérience en développement front-end et back-end, en utilisant des technologies telles que HTML, CSS, JavaScript, React, Node.js, Python et PHP. J'ai également une bonne compréhension des bases de données et de l'architecture logicielle. Je suis capable de travailler en équipe et de respecter les délais impartis tout en maintenant un haut niveau de qualité dans mon travail. Je suis toujours impatient de découvrir de nouveaux outils et de nouvelles méthodes pour améliorer mes compétences et mon rendement.",
    address1: "Adresse 1",
    address2: "Adresse 2",
    skills: ["Maîtrise des langages de programmation web tels que HTML, CSS et JavaScript",
     "Connaissance des frameworks et des bibliothèques pour le développement web tels que React, Angular et Vue.js ",
      "Connaissance de l'architecture logicielle et des bases de données"],
    isActive: true
}
