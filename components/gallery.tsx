"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600457048942-a46f5069cb42?auto=format&fit=crop&q=80&w=1200",
    alt: "Historical Romanian building",
    title: "Revolutionary Headquarters",
  },
  {
    src: "https://images.unsplash.com/photo-1557425300-c3f6addf1e1c?auto=format&fit=crop&q=80&w=1200",
    alt: "Mountain landscape",
    title: "Apuseni Mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&q=80&w=1200",
    alt: "Historical documents",
    title: "Revolutionary Documents",
  },
  {
    src: "/images/casa-memoriala.jpg",
    alt: "Traditional artifacts at Casa Memoriala",
    title: "Cultural Heritage",
  },
];

export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16"
        >
          Historical Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-playfair font-bold text-center px-4">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a href="/resources">
            <Button
              variant="outline"
              size="lg"
              className="group"
            >
              More Resources
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}