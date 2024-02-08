import { BestBusiness } from "@/components/Your-Imagine";
import { Services } from "@/components/Services/CounterData";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header/Header.jsx";
import { PaymentsMethods } from "@/components/Space";
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
