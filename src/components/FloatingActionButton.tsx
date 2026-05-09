"use client";
import { contactData } from "@/data/about";
export function FloatingActionButton() {
  const handleContact = () => {
    const phoneNumber = '+213' + contactData.contactInfo[1].label.replace(/\s/g, '');
    const message = "Hello I want to contact you";
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    )
  };
  return (
    <div className="fixed bottom-8 right-8 z-40 hidden md:flex group">
      <button
        onClick={handleContact}
        className="cursor-pointer w-16 h-16 rounded-full bg-secondary text-on-secondary shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
      >
        <span className="material-symbols-outlined text-3xl">
          chat_bubble
        </span>
      </button>

      <span className="absolute right-full mt-4 mr-4 px-4 py-2 bg-surface-container-highest text-white text-xs font-bold rounded-xl whitespace-nowrap opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible transition-opacity">
        Let&apos;s talk
      </span>
    </div>
  );
}
