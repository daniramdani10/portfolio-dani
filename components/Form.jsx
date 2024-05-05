"use client";

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        // Optionally, reset the form after successful submission
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {/* input  name*/}
      <div className="relative flex items-center">
        <Input
          type="text"
          id="nameInput"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input  email*/}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="emailInput"
          name="email"
          value={formData.email}
          onChange={handleChange}
          // required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Textarea
          id="messageInput"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]" type="submit">
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
