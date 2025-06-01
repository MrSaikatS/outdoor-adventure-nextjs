import Header from "@/components/HeaderComps/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Outdoor Adventure",
  description: "Contact page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default page;
