"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Stay Connected with History
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter for updates on historical research, events, and new discoveries about Avram Iancu's legacy.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground text-primary max-w-sm"
              required
            />
            <Button
              type="submit"
              variant="secondary"
              className="px-8"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}