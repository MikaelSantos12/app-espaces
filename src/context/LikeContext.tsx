import React, { ReactNode, createContext, useContext, useState } from "react";

interface LikeContextType {
  isLiked: boolean;
  toggleLike: () => void;
  likePost: () => void;
  setIsLiked: (arg: boolean) => void;
}

const LikeContext = createContext<LikeContextType | undefined>(undefined);

interface LikeProviderProps {
  children: ReactNode;
}

export const LikeProvider: React.FC<LikeProviderProps> = ({ children }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };
  const likePost = () => {
    setIsLiked(true);
  };
  return (
    <LikeContext.Provider value={{ isLiked, toggleLike, likePost, setIsLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLikeContext = (): LikeContextType => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLikeContext must be used within a LikeProvider");
  }
  return context;
};
