import {
  useContext,
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";

export interface IAuthModalContext {
  isOpen: boolean;
  isLogin: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  triggerSignIn: () => void;
  triggerSignUp: () => void;
}

export const AuthModalContext = createContext<IAuthModalContext>({
  isOpen: false,
  isLogin: true,
  setIsOpen: () => {
    // This function is intentionally left empty
  },
  setIsLogin: () => {
    // This function is intentionally left empty
  },
  triggerSignIn: () => {
    // This function is intentionally left empty
  },
  triggerSignUp: () => {
    // This function is intentionally left empty
  },
});

export interface AuthModalContextProviderProps {
  children: ReactNode;
}

export const AuthModalContextProvider = ({
  children,
}: AuthModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const triggerSignIn = () => {
    setIsLogin(true);
    setIsOpen(true);
  };

  const triggerSignUp = () => {
    setIsLogin(false);
    setIsOpen(true);
  };

  return (
    <AuthModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        isLogin,
        setIsLogin,
        triggerSignIn,
        triggerSignUp,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModalContext = () => {
  return useContext(AuthModalContext);
};

export default AuthModalContextProvider;
