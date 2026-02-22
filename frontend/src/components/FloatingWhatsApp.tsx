"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/256768827827"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg motion-safe:animate-bounce hover:animate-none hover:scale-110 transition-transform duration-200 group"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.65 4.788 1.786 6.8L2 30l7.397-1.74A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.456a11.41 11.41 0 0 1-5.822-1.598l-.417-.247-4.39 1.033 1.072-4.277-.272-.44A11.38 11.38 0 0 1 4.6 16.003C4.6 9.713 9.713 4.6 16.003 4.6c6.29 0 11.397 5.113 11.397 11.403 0 6.287-5.107 11.453-11.397 11.453zm6.26-8.572c-.344-.172-2.032-1.003-2.347-1.117-.315-.115-.545-.172-.775.172-.23.343-.888 1.117-1.088 1.346-.2.23-.4.258-.743.086-.344-.172-1.452-.535-2.765-1.706-1.022-.913-1.712-2.04-1.912-2.384-.2-.343-.021-.529.15-.7.154-.153.344-.4.516-.6.172-.2.23-.343.344-.572.115-.23.058-.43-.029-.6-.086-.172-.775-1.87-1.06-2.558-.28-.672-.564-.58-.775-.59l-.66-.011c-.23 0-.6.086-.915.43-.315.343-1.202 1.175-1.202 2.865s1.23 3.322 1.4 3.55c.172.23 2.42 3.695 5.864 5.183.82.354 1.46.565 1.958.723.822.262 1.571.225 2.162.137.66-.098 2.032-.83 2.318-1.633.286-.8.286-1.488.2-1.633-.086-.143-.315-.23-.659-.4z" />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
