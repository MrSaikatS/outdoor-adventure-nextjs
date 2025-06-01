import Header from "@/components/HeaderComps/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Outdoor Adventure",
  description: "Services page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default page;
