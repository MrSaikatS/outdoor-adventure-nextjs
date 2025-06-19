import HeadingComps from "../HeadingComps";

const ContactHero = () => {
  return (
    <section className="w-full bg-[url(/contact/contact-bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="grid place-items-center bg-black/50 py-28 lg:py-[15rem]">
        <HeadingComps className="text-background text-4xl lg:text-6xl">
          Contact Us
        </HeadingComps>
      </div>
    </section>
  );
};

export default ContactHero;
