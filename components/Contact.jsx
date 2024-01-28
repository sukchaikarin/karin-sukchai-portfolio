import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center  py-6   xl:py-24 bg-secondary "
    >
      <h2 className="h2 mb-10">Contact</h2>

      <Card className="md:w-[500px] lg:w-[800px]  p-6">
        <CardHeader>
          <CardTitle>Let's Work Together</CardTitle>
          <CardDescription>
            {`(this message will sending to my email)`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex gap-2 ">
                <div className="grow flex flex-col space-y-1.5">
                  <Label htmlFor="fullname">Name</Label>
                  <Input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Please enter your name..."
                  />
                </div>
                <div className="grow flex flex-col space-y-1.5">
                  <Label htmlFor="contactemail">Email</Label>
                  <Input
                    type="email"
                    id="contactemail"
                    name="contactemail"
                    placeholder="your-email@email.com"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="what your subject?..."
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  name="message"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="gap-x-2  shadow-lg">
            Send <Send />
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Contact;
