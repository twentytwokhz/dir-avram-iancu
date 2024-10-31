"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "@/components/ui/sparkles";
import { MovingBorder } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80"
          alt="Historical Romanian landscape"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-20 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold">
            Avram Iancu
          </h1>

          <div className="mb-8">
            <TextGenerateEffect
              words="The Legendary Romanian Revolutionary Leader"
              className="text-xl md:text-2xl"
            />
          </div>

          <p className="text-lg md:text-xl mb-12 font-inter text-gray-200">
            1824 - 1872
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <MovingBorder duration={3000} className="max-w-md mx-auto p-1">
              <a
                href="#biography"
                className="block w-full bg-black/50 text-white font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/70"
              >
                Discover His Legacy
              </a>
            </MovingBorder>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
    </section>
  );
}