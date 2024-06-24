import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { ReactNode, useContext, createContext } from "react";

export interface ISessionContext {
  session: Session | null;
}

export const SessionContext = createContext<ISessionContext>({
  session: null,
});

export interface SessionContextProviderProps {
  children: ReactNode;
}

export const SessionContextProvider = ({
  children,
}: SessionContextProviderProps) => {
  const { data: session } = useSession();
  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  return useContext(SessionContext);
};

export default SessionContextProvider;