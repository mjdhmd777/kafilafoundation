import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react";
import logo from "@/assets/kafila-logo.png";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Donate", href: "/donate" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "/refund" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/kafilafoundation", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/kafilafoundation", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/kafilafoundation", icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/kafilafoundation", icon: Youtube },
  { name: "LinkedIn", href: "https://linkedin.com/company/kafilafoundation", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Kafila Foundation" className="h-16 w-auto bg-white rounded-lg p-1" />
            </Link>
            <h3 className="font-heading font-bold text-xl mb-2">Kafila Foundation (J&K)</h3>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Promising People for a Better Tomorrow
            </p>
            <p className="text-primary-foreground/70 text-sm italic">
              "Main Akela Hi Chala Tha Jaanib-E-Manzil Magar, Loog Sath Aatey Gaye Aur Caravaan Banta Gaya."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Cherakote (Lolab)-193223,<br />
                  District Kupwara, Kashmir-193222
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+919596573672" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                    +91 9596 573 672
                  </a>
                  <a href="tel:+917051753672" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block">
                    +91 7051 753 672
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="mailto:info@kafilafoundation.org" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  info@kafilafoundation.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Connect With Us</h4>
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p className="text-center md:text-left">
              With Respect & Gratitude, We Conclude
            </p>
            <p className="flex items-center gap-2 text-center md:text-right flex-wrap justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 text-red-400 fill-red-400 animate-pulse" /> by 
              <span className="inline-flex items-center gap-1">
                Majid Hameed
                <a 
                  href="https://linkedin.com/in/majidhameed" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label="Majid Hameed LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-[#0A66C2] hover:text-[#0A66C2]" />
                </a>
              </span>
              <span>&</span>
              <span className="inline-flex items-center gap-1">
                Syed Liyaqat
                <a 
                  href="https://linkedin.com/in/syedliyaqat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label="Syed Liyaqat LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-[#0A66C2] hover:text-[#0A66C2]" />
                </a>
              </span>
            </p>
          </div>
          <p className="text-center text-xs text-primary-foreground/50 mt-4">
            © {new Date().getFullYear()} Kafila Foundation (J&K). All rights reserved. Registered under Govt. of India, Ministry of Corporate Affairs & NITI Aayog.
          </p>
        </div>
      </div>
    </footer>
  );
}
