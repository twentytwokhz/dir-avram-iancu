import { Github, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-bold">About</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated to preserving and sharing the legacy of Avram Iancu, a legendary Romanian revolutionary leader.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#biography" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Biography
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Historical Documents
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Educational Materials
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-bold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Florin Bobis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}