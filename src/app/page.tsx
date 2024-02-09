import { BestBusiness } from "@/components/Your-Imagine/BestBusiness";
import { Services } from "@/components/Services/CounterData";
import { FirstBlock } from "@/components/FirstBlock/FirstBlock";
import { Footer } from "@/components/Footer/Footer";
import { PaymentsMethods } from "@/components/Space/Space";
import { Header } from "@/components/Header/Header";
import { Contact } from "@/components/Contact/Contact";

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
