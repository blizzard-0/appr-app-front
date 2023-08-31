import { MyWalletPageProvider } from '../../modules/wallet/context';
import MyWalletPageInner from '../../modules/wallet/MyWalletPage';

export default function MyWalletPage() {
  return (
    <MyWalletPageProvider>
      <MyWalletPageInner />
    </MyWalletPageProvider>
  );
}
