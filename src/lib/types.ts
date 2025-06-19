import { z } from "zod";
import { contactSchema } from "./schema";

export type EventType = {
  eId: string;
  eImage: string;
  eTitle: string;
  eDescription: string;
};

export type ServiceType = {
  sId: string;
  sImage: string;
  sTitle: string;
  sDescription: string;
};

export type ProjectType = {
  pId: string;
  pCategory: string;
  pTitle: string;
  pDescription: string;
  pImage: Array<{
    pImgId: string;
    pImgSrc: string;
  }>;
};

export type ContactSchemaType = z.infer<typeof contactSchema>;
