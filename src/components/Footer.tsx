
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-violet-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">
              <span className="text-emerald-300">GAP</span>Univ
            </h2>
            <p className="text-white/70 text-sm">Get away from parents. Get to know yourself.</p>
          </div>
          
          <div className="flex gap-3">
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 h-8 w-8">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 h-8 w-8">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10 h-8 w-8">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-6 text-center">
          <p className="text-white/70 text-xs">
            © {new Date().getFullYear()} GAPUniv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
