import ContactsForm from "@/components/ContactPageComps/ContactsForm";
import ContactHero from "@/components/HeroComps/ContactHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Outdoor Adventure",
  description: "Contact page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <ContactHero />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 space-y-24 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <ContactsForm />

        <div className="">Contacts</div>
      </section>
    </>
  );
};

export default page;
