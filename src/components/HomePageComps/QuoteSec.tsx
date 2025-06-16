import Image from "next/image";

const QuoteSec = () => {
  return (
    <section className="bg-[#ECECEC]">
      <div className="relative mx-auto grid max-w-7xl place-items-center gap-8 px-6 py-12 lg:gap-0">
        <Image
          src={"/home/quote-1.png"}
          alt="quote"
          width={500}
          height={300}
          className="h-20 w-28 lg:absolute lg:left-0 lg:mx-6 lg:my-12"
        />
        <div className="font-noto-sans space-y-4 text-center">
          <div className="text-xl">
            &quot; Fuerat aestu carentem habentia spectent tonitrua mutastis
            locavit liberioris. &quot;
          </div>
          <div className="">- Adam Sendler</div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSec;
