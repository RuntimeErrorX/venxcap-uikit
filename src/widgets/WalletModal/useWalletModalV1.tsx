import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModalV1 = (login: Login, logout: () => void, t: (key: string) => string, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} t={t} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} t={t} />);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModalV1;
