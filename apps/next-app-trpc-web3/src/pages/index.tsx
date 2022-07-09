import { Button } from "ui";

import MainLayout from "@/layouts/public/MainLayout";
import MainSection from "@/components/MainSection";
import WalletConnectButton from "@/module/wallet-connect";

const IndexPage = () => (
  <MainLayout>
    <MainSection>
      <Button />
      <WalletConnectButton />
    </MainSection>
  </MainLayout>
);

export default IndexPage;
