"use client";

import { useState, useRef } from "react";
import { contactData } from "@/data/about";
import emailjs from 'emailjs-com';

type SendingResultType = "success" | "error" | "warning" | null;
type senderData = {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const { sectionLabel, headline, headlineHighlight, headlineAfter, description, contactInfo, form } = contactData;

  const [sendingResult, setSendingResult] = useState<{ message: string; type: SendingResultType } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const checkSenderData = (data: senderData) => {
    if (!data.email || !data.name || !data.message) {
      setSendingResult({ message: "Please fill in all required fields.", type: "warning" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setSendingResult({ message: "Please enter a valid email address.", type: "warning" });
      return false;
    }
    setSendingResult(null);
    return true;
  }

  const getResultColor = (type: SendingResultType) => {
    switch (type) {
      case "success":
        return "text-green-600";
      case "error":
        return "text-red-600";
      case "warning":
        return "text-yellow-600";
      default:
        return "";
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data: senderData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    console.log(data);

    if (!checkSenderData(data)) return;

    emailjs.sendForm(
      'service_m902cbx',
      'template_umc0v38',
      e.currentTarget as HTMLFormElement,
      'A1JMLTnXZN_GblJm_'
    ).then(
      () => {
        setSendingResult({ message: "Thank you! Your email was sent successfully!", type: "success" });
        formRef.current?.reset(); // Reset the form
      },
      (error) => {
        setSendingResult({
          message: "Something went wrong while sending your message. Please send it directly to our email: mohamedlouahchi9@gmail.com",
          type: "error"
        });
        console.error("Email sending error:", error);
      }
    ).catch((error) => {
      setSendingResult({
        message: "Something went wrong while sending your message. Please send it directly to our email: mohamedlouahchi9@gmail.com",
        type: "error"
      });
      console.error("Email sending error:", error);
    });
  };

  return (
    <section className="py-32 px-6 bg-surface-container-lowest" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: info */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-secondary font-headline font-bold text-sm tracking-[0.3em] uppercase">
              {sectionLabel}
            </span>
            <h2 className="text-5xl md:text-6xl font-black font-headline tracking-tighter leading-none">
              {headline}{" "}
              <span className="text-gradient">{headlineHighlight}</span>
              {headlineAfter}
            </h2>
            <p className="text-on-surface-variant text-lg max-w-md">{description}</p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 text-on-surface hover:text-secondary transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <span className="font-headline font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={sendEmail} className="glass-panel p-10 rounded-[2.5rem] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {form.fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <label className="text-[10px] font-black tracking-widest text-outline uppercase ml-1">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-surface-container-low border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-secondary transition-all px-4 py-4 rounded-t-xl text-white outline-none"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-outline uppercase ml-1">
                  {form.textarea.label}
                </label>
                <textarea
                  name="message"
                  placeholder={form.textarea.placeholder}
                  rows={form.textarea.rows}
                  className="w-full bg-surface-container-low border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-secondary transition-all px-4 py-4 rounded-t-xl text-white resize-none outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-primary-container to-secondary rounded-2xl font-headline font-black text-white uppercase tracking-[0.2em] hover:shadow-[0_0_30px_-5px_rgba(29,78,216,0.6)] transition-all"
              >
                {form.submitLabel}
              </button>
              <p className={`${sendingResult ? 'visible mt-4' : 'invisible'} text-center ${getResultColor(sendingResult?.type ?? null)} text-lg`}>
                {sendingResult?.message || ""}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
