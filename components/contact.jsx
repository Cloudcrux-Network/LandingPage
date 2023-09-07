"use client";
import { useState } from "react";
import { submitContactForm } from "/app/actions";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className={`${
        pending
          ? "animate-pulsing"
          : `hover:scale-[1.1] active:scale-[1.2] hover:bg-sky-700 active:bg-sky-800`
      } px-4 py-2 bg-sky-600 text-white rounded transition-all`}
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
const ContactForm = () => {
  const [message, setMessage] = useState("");
  async function OnSubmit(formData) {
    const res = await submitContactForm(formData);
    setMessage(res.message);
  }

  return (
    <form action={OnSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="text-black w-full p-2 border rounded shadow-sm"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="text-black w-full p-2 border rounded shadow-sm"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          className="text-black w-full p-2 border rounded shadow-sm"
          placeholder="123-456-7890"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          className="text-black w-full p-2 border rounded shadow-sm"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <div>
        <SubmitButton />
        {message && <span className="ml-4 text-red-500">{message}</span>}
      </div>
    </form>
  );
};

export default ContactForm;
