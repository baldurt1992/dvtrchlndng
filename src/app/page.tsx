import { BestBusiness } from "@/components/Your-Imagine";
import { Services } from "@/components/Services";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer";
import { PaymentsMethods } from "@/components/Space";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <Services />
      <BestBusiness />
      <Contact />
      <PaymentsMethods />
      <Footer />
    </>
  );
}
