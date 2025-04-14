import React, { createContext, useContext, useState, ReactNode } from "react";

// Déclare les types pour le contexte
interface PropsContextType {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  prenom: string;
  setPrenom: React.Dispatch<React.SetStateAction<string>>;
  cardData: { title: string; description: string }[];
  items: string[];
  profileData: { userName: string; userDescription: string; userImage: any };
}

// Crée le contexte avec une valeur par défaut
const PropsContext = createContext<PropsContextType | undefined>(undefined);

// Définir les types pour le Provider, y compris children
interface PropsProviderProps {
  children: ReactNode; // Cela permet d'accepter des éléments enfants
}

// Le composant Provider pour enrober les composants qui ont besoin du contexte
export const PropsProvider: React.FC<PropsProviderProps> = ({ children }) => {
  const [message, setMessage] = useState<string>("Titre de l'app");
  const [prenom, setPrenom] = useState<string>("Aurélien");
  const [cardData] = useState([
    { title: "carte1", description: "description de la carte 1" },
    { title: "carte2", description: "description de la carte 2" },
    { title: "carte3", description: "description de la carte 3" },
  ]);
  const [items] = useState<string[]>(["Alice", "Bob", "Charlie", "Diana"]);
  const [profileData] = useState({
    userName: "John Doe",
    userDescription: "Développeur React Native",
    userImage: require("@/assets/images/user.png"), // Remplace par l'image de ton profil
  });

  return (
    <PropsContext.Provider
      value={{
        message,
        setMessage,
        prenom,
        setPrenom,
        cardData,
        items,
        profileData,
      }}
    >
      {children}
    </PropsContext.Provider>
  );
};

// Crée un hook personnalisé pour utiliser le contexte
export const useProps = (): PropsContextType => {
  const context = useContext(PropsContext);
  if (!context) {
    throw new Error("useProps must be used within a PropsProvider");
  }
  return context;
};
