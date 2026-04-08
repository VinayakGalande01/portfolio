import { contacts } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        Connect with Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {contacts.map((item, i) => (
          <a
            key={i}
            aria-label={`Open ${item.name}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block p-6 rounded-xl border border-gray-700
              hover:border-blue-500 hover:scale-105
              transition duration-300 text-center
              cursor-pointer will-change-transform
            "
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-400 mt-2 mb-4">
              {item.name === "Email"
                ? "Direct communication for inquiries."
                : item.name === "LinkedIn" 
                ? "Professional bridge for networking."
                : "Open-source projects & development logs."}
            </p>
            <span className="text-blue-500 font-bold group-hover:text-blue-400 transition-colors">
              {item.name === "Email"
                ? "Send Email →"
                : item.name === "LinkedIn"
                ? "Connect on LinkedIn →"
                : "View Repositories →"}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
