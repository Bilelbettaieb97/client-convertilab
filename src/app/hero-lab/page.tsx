import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroLabClient from "./HeroLabClient";

export const metadata = {
  title: "Hero Lab : Comparaison",
  robots: { index: false, follow: false },
};

export default function HeroLabPage() {
  return (
    <>
      <Navigation />
      <HeroLabClient />
      <Footer />
    </>
  );
}
