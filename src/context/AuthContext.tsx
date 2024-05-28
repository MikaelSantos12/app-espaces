import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { apiAuth } from "@/services/api-auth";
import {
  getStorageToken,
  removeStorageToken,
  saveStorageToken,
} from "@/storage/storageAuth";
import { AxiosResponse } from "axios";

export type AuthContextDataProps = {
  user: any;
  signInWithEmail: (email: string) => Promise<AxiosResponse>;
  updateUser: (user: any) => void;
  signOut: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({});

  async function signInWithEmail(email: string) {
    const res = await apiAuth.post("/sessions/email", {
      email,
    });
    return res;
  }
  const updateUser = (token: string) => {
    saveStorageToken({ token });
    setUser({
      token,
    });
  };

  async function loadUserData() {
    try {
      const { token } = await getStorageToken();

      if (token) {
        updateUser(token);
      }
    } catch (error) {
      throw error;
    }
  }
  const signOut = async () => {
    await removeStorageToken();
    setUser({});
  };
  useEffect(() => {
    loadUserData();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithEmail,
        updateUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
