import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModalV1: (login: Login, logout: () => void, t: (key: string) => string, account?: string | undefined) => ReturnType;
export default useWalletModalV1;
