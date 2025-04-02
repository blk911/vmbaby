
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-emerald-300">GAP</span>Univ
            </h2>
            <p className="text-white/70">Get away from parents. Get to know yourself.</p>
          </div>
          
          <div className="flex gap-4">
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} GAPUniv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
