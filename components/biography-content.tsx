"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export function Biography() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <article className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-8">
            Avram Iancu
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            1824 - 1872
          </p>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&q=80"
                alt="Historical portrait representation"
                fill
                className="object-cover"
              />
            </div>

            <h2>Early Life and Education</h2>
            <p>
              Born in 1824 in Vidra de Sus (now named Avram Iancu), Alba County, Transylvania, Avram Iancu came from a family of free peasants. His father, Alexandru Iancu, ensured he received a proper education, first at the village school and later at the prestigious Cluj Law Academy.
            </p>

            <h2>Legal Career and Revolutionary Awakening</h2>
            <p>
              After completing his law studies in 1844, Iancu began working as a clerk at the Târgu Mureș Royal Court. It was during this period that he witnessed firsthand the social and national oppression of Romanians in Transylvania, which would later fuel his revolutionary spirit.
            </p>

            <h2>Leadership in the 1848 Revolution</h2>
            <p>
              When the revolution erupted in 1848, Iancu emerged as a natural leader of the Romanian peasants. He organized and led the defense of the Apuseni Mountains, creating a remarkable military structure that successfully resisted Hungarian revolutionary forces.
            </p>

            <h2>Military Strategy and Achievements</h2>
            <p>
              Known as "Crăișorul Munților" (The Prince of the Mountains), Iancu demonstrated exceptional military prowess. He established a network of mountain outposts and implemented guerrilla warfare tactics that proved highly effective against conventional military forces.
            </p>

            <h2>Social Vision and Principles</h2>
            <p>
              Iancu's fight was not merely a military one. He advocated for social justice, the abolition of serfdom, and equal rights for all nationalities in Transylvania. His vision extended beyond ethnic lines, promoting a future of peaceful coexistence and mutual respect.
            </p>

            <h2>Later Life and Legacy</h2>
            <p>
              After the revolution, Iancu faced personal struggles and declined various honors from the Austrian Empire, staying true to his principles. He spent his final years among the people of the Apuseni Mountains, where he passed away in 1872.
            </p>

            <h2>Historical Impact</h2>
            <p>
              Avram Iancu's legacy continues to inspire generations of Romanians. His struggle for social justice and national rights became a symbol of the Romanian national movement in Transylvania. Today, numerous institutions, streets, and monuments bear his name, testament to his enduring influence on Romanian society and culture.
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}