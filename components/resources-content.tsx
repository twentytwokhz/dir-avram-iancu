"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Image as ImageIcon, BookOpen } from "lucide-react";

const resources = [
  {
    title: "Original Letters and Documents",
    category: "Documents",
    description: "Collection of Avram Iancu's personal correspondence and official documents from the revolutionary period.",
    thumbnail: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&q=80",
    link: "#",
    icon: FileText,
  },
  {
    title: "Historical Photographs",
    category: "Images",
    description: "Rare photographs of locations, artifacts, and historical sites related to the 1848-1849 revolution.",
    thumbnail: "https://images.unsplash.com/photo-1600457048942-a46f5069cb42?auto=format&fit=crop&q=80",
    link: "#",
    icon: ImageIcon,
  },
  {
    title: "Academic Research Papers",
    category: "Research",
    description: "Contemporary historical research and academic papers analyzing Avram Iancu's impact on Romanian history.",
    thumbnail: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80",
    link: "#",
    icon: BookOpen,
  },
  {
    title: "Maps and Battle Plans",
    category: "Documents",
    description: "Strategic maps and battle plans from the revolutionary campaign in the Apuseni Mountains.",
    thumbnail: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80",
    link: "#",
    icon: FileText,
  },
  {
    title: "Cultural Impact Collection",
    category: "Research",
    description: "Documents and studies about Avram Iancu's influence on Romanian culture and national identity.",
    thumbnail: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80",
    link: "#",
    icon: BookOpen,
  },
  {
    title: "Memorial Sites Gallery",
    category: "Images",
    description: "Photographic collection of monuments, memorial houses, and commemorative sites.",
    thumbnail: "https://images.unsplash.com/photo-1557425300-c3f6addf1e1c?auto=format&fit=crop&q=80",
    link: "#",
    icon: ImageIcon,
  },
];

export function Resources() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Historical Resources
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our curated collection of historical documents, images, and research materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-lg overflow-hidden border transition-colors">
                <div className="relative aspect-video">
                  <Image
                    src={resource.thumbnail}
                    alt={resource.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <resource.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group">
                      View Resource
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}