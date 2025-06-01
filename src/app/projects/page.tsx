import Header from "@/components/HeaderComps/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Outdoor Adventure",
  description: "Projects page of Outdoor Adventure",
};

const page = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default page;
