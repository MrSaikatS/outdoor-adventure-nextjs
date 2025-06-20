import ContactsForm from "@/components/ContactPageComps/ContactsForm";
import HeadingComps from "@/components/HeadingComps";
import ContactHero from "@/components/HeroComps/ContactHero";
import { Facebook, Twitter, Youtube } from "lucide-react";
import { Metadata } from "next";
import { Slide, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Contact | Outdoor Adventure",
  description: "Contact page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <ContactHero />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-24 lg:py-24">
        <ContactsForm />

        <div className="space-y-6">
          <HeadingComps className="text-2xl lg:text-4xl">
            Contact Info
          </HeadingComps>

          <div className="">
            <HeadingComps className="text-lg lg:text-xl">Address​</HeadingComps>{" "}
            2nd Floor, CIT DumDum, Goruhata More, NagerBazar.
          </div>

          <div className="">
            <HeadingComps className="text-lg lg:text-xl">Email Us</HeadingComps>{" "}
            contact@example.com​
          </div>

          <div className="">
            <HeadingComps className="text-lg lg:text-xl">Call Us</HeadingComps>{" "}
            9614142256
          </div>

          <div className="space-y-4">
            <HeadingComps className="text-lg lg:text-xl">
              Follow Us
            </HeadingComps>{" "}
            <div className="flex gap-4">
              <Facebook
                fill="#fff"
                size={38}
                className="bg-primary-crimson hover:bg-foreground/80 rounded-full border-0 p-2 text-white"
              />
              <Twitter
                fill="#fff"
                size={38}
                className="bg-primary-crimson hover:bg-foreground/80 rounded-full border-0 p-2 text-white"
              />
              <Youtube
                // fill="#fff"
                size={38}
                className="bg-primary-crimson hover:bg-foreground/80 rounded-full border-0 p-2 text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Toast notification */}
      <ToastContainer
        toastClassName={"w-full max-w-sm rounded-lg bg-transparent lg:max-w-lg"}
        position="top-right"
        autoClose={3000}
        closeOnClick={true}
        transition={Slide}
      />
    </>
  );
};

export default page;
