import { Dialog } from "@headlessui/react";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useAuthModalContext } from "../contexts/AuthModal.context";
import LoginModal from "./LoginModal";
import RegisterModal from "./ResigsterModal";

export interface AuthModalSwitchProps {
  setLoginModal: Dispatch<SetStateAction<boolean>>;
}

export default function AuthCompo() {
  const { isOpen, setIsOpen, isLogin, setIsLogin } = useAuthModalContext();

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-white" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 font-sans">
        {isLogin && <LoginModal setLoginModal={setIsLogin} />}
        {!isLogin && <RegisterModal setLoginModal={setIsLogin} />}
      </div>
    </Dialog>
  );
}
