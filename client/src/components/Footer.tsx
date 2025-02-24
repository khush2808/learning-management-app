import { Text } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Khush. All Rights Reserved.</p>
      <div className="footer__links">
        {["About", "Privacy Policy", "Licensing", "Contact"].map((item) => (
					item === "About" ? (<Link
            key={item}
            href="https://khushshah.vercel.app"
            className="footer__link"
            scroll={false}
          >
            {item}
          </Link>):
          (<span aria-disabled
            key={item}
            className="footer__link"
          >
            {item}
          </span>)
					
        ))}
      </div>
    </div>
  );
};

export default Footer;