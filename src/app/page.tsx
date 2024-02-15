import { BestBusiness } from "@/components/Your-Imagine/BestBusiness.tsx";
import { Services } from "@/components/Services/CounterData.jsx";
import { FirstBlock } from "@/components/FirstBlock/FirstBlock.tsx";
import { Footer } from "@/components/Footer/Footer.tsx";
import { PaymentsMethods } from "@/components/Space/Space.tsx";
import { Header } from "@/components/Header/Header.jsx";
import { Contact } from "@/components/Contact/Contact.tsx";
import { WathsappButton } from "@/components/WhatsappButton/WhatsappButton";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <Services />
      <BestBusiness />
      <Contact />
      <PaymentsMethods />
      <WathsappButton />
      <Footer />
    </>
  );
}
