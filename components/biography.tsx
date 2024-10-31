"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export function Biography() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="biography"
      ref={ref}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12">
            The People's Champion
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&q=80"
                alt="Historical portrait representation"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Avram Iancu (1824-1872) emerged as a pivotal figure in Romanian history during the tumultuous period of the 1848-1849 revolution in Transylvania. As a lawyer by training, he transformed into a military leader who fought for the rights and freedom of the Romanian people.
              </p>
              <p className="text-lg leading-relaxed">
                Known as "Crăișorul Munților" (The Prince of the Mountains), Iancu led the Romanian peasants in their struggle for social and national emancipation, organizing a remarkable defense of the Apuseni Mountains against Hungarian revolutionary forces.
              </p>
              <Link href="/biography">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold"
                >
                  Read More
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}