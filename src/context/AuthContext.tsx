import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "@/services/api";
import {
  getStorageToken,
  removeStorageToken,
  saveStorageToken,
} from "@/storage/storageAuth";
type User = {
  id?: string;
  name?: string;
  username?: string;
  token?: string;
  refresh_token?: string;
  firstLoginProps?: FirstLoginProps;
};
export type AuthContextDataProps = {
  user: any;

  updateUser: (token: string, refreshToken: string) => void;
  setUser: (payload: User) => void;
  signOut: () => void;
};
type FirstLoginProps = {
  access_token: string;
  refresh_token: string;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  const updateUser = (token: string, refreshToken: string) => {
    saveStorageToken({ token, refreshToken });
    setUser({
      token,
    });
  };

  async function loadUserData() {
    try {
      const { token, refreshToken } = await getStorageToken();
      console.log("token", token);
      if (token) {
        api.feed.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setUser({
          token,
        });
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

        updateUser,
        signOut,
        setUser,
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
