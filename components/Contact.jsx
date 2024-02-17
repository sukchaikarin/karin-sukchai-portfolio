import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import ContactItem from "./ContactItem";
const Contact = () => {
  const [result, setResult] = useState(false);
  const [btnlabel, setBtnlabel] = useState("Send");

  const onSubmit = async (event) => {
    event.preventDefault();
    setBtnlabel("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb436272-ba8f-447f-b305-adc055f72a45");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(true);
      setBtnlabel("Send");

      setTimeout(() => {
        setResult(false);
      }, 5000);
    } else {
      console.log("Error", res);
      setResult(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center  py-6   xl:py-24 bg-secondary "
    >
      <h2 className="h2 mb-6">Contact</h2>

      <div className="pb-4">
        {result && (
          <Alert className=" text-black bg-lime-500">
            <AlertTitle>submitted!</AlertTitle>
            <AlertDescription>
              Thank you for submitting form. I will reply as soon as possible.
            </AlertDescription>
          </Alert>
        )}
      </div>

      <Card className="md:w-[500px] lg:w-[1024px] ">
        <CardHeader>
          <CardTitle>Let's Work Together</CardTitle>
          <CardDescription>
            {`(this message will sending to my email)`}
          </CardDescription>
          <form onSubmit={onSubmit}>
            <CardContent className="p-0 pb-6 flex  justify-center gap-4">
              <div className="grow pt-4">
                <div className="grid w-full items-center gap-4">
                  <div className=" flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Please enter your name..."
                      autocomplete="name"
                    />
                  </div>
                  <div className=" flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your-email@email.com"
                      autocomplete="email"
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      placeholder="Type your message here."
                      id="message"
                      name="message"
                      autocomplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="grow flex justify-center ">
                <ContactItem />
              </div>
            </CardContent>
            <CardFooter className="p-0">
              <Button
                size="lg"
                className="gap-x-2  shadow-lg px-4"
                type="submit"
              >
                {btnlabel} <Send />
              </Button>
            </CardFooter>
          </form>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Contact;
