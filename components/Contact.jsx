import React from "react";
import { Card, CardContent } from "./ui/card";

import { RiPhoneFill } from "react-icons/ri";
import ContactItem from "./ContactItem";
const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center  py-6   xl:py-24 bg-secondary "
    >
      <h2 className="h2 mb-10">Contact</h2>

      <Card className="w-auto p-6">
        <CardContent className=" pt-6">
          <ContactItem />
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
