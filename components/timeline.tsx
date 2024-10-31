"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineEvents = [
  {
    year: "July 1824",
    title: "Birth",
    description: "Born in Vidra de Sus (now Avram Iancu), Alba County, to Alexandru and Maria Iancu, free peasants in the Apuseni Mountains. His father was a wealthy forest ranger who ensured young Avram received the best education possible, setting the foundation for his future leadership role.",
  },
  {
    year: "September 1841",
    title: "Academic Beginning",
    description: "Began studies at the Cluj Law Academy, where he first encountered ideas of national awakening and social justice. During his studies, he formed close relationships with other Romanian intellectuals and became deeply involved in student political discussions about civil rights and national identity.",
  },
  {
    year: "June 1844",
    title: "Legal Career",
    description: "Graduated from law school and started working as a cancellist (clerk) at the Transylvanian Royal Court in Târgu Mureș. His position gave him firsthand exposure to the systemic inequalities faced by Romanian peasants, fueling his passion for social reform and justice.",
  },
  {
    year: "March 1848",
    title: "Revolutionary Spark",
    description: "Participated in the initial revolutionary meetings in Cluj, emerging as a key figure among Romanian intellectuals. His powerful oratory skills and deep understanding of peasant rights quickly established him as a natural leader in the growing movement for national liberation.",
  },
  {
    year: "May 15-17, 1848",
    title: "Blaj Assembly",
    description: "Played a crucial role in the Great National Assembly at Blaj, where over 40,000 Romanians gathered to demand national rights. His passionate speeches about freedom and equality electrified the crowds, earning him the nickname 'Crăișorul Munților' (The Prince of the Mountains).",
  },
  {
    year: "September 1848",
    title: "Military Leadership",
    description: "Organized the Romanian military forces in the Apuseni Mountains, establishing a remarkable defense system. His innovative guerrilla warfare tactics and strategic use of mountain terrain proved highly effective, transforming peasant volunteers into a formidable fighting force.",
  },
  {
    year: "January-March 1849",
    title: "Strategic Defense",
    description: "Successfully defended the mountain passes and mining towns, coordinating operations with Austrian imperial forces. His brilliant military strategy included establishing a network of signal fires across mountain peaks and organizing local communities into rapid-response defense units.",
  },
  {
    year: "August 1849",
    title: "Revolutionary Peak",
    description: "Achieved significant military victories, securing control over the entire Apuseni Mountains region. His forces successfully protected Romanian communities while maintaining discipline and order, earning respect from both allies and adversaries for his honorable conduct during warfare.",
  },
  {
    year: "December 1852",
    title: "Post-Revolution",
    description: "Refused the Austrian Empire's offer of nobility and awards, staying true to his principles and the peasants' cause. This decision reflected his unwavering commitment to social justice and earned him even greater admiration among the Romanian population, though it came at great personal cost.",
  },
  {
    year: "September 10, 1872",
    title: "Final Journey",
    description: "Passed away in Baia de Criș, leaving behind a legacy of fighting for freedom and social justice. His funeral drew thousands of mourners from across Transylvania, and his last words reportedly expressed hope for the future freedom of his people, cementing his status as a national hero.",
  },
];

export function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="timeline"
      ref={ref}
      className="py-20 bg-secondary"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Revolutionary Timeline
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow the journey of Avram Iancu through the pivotal moments that shaped Romanian history.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Event Content */}
              <div className="w-5/12">
                <div className={`p-6 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}>
                  <div className="mb-2">
                    <span className="text-2xl font-playfair font-bold text-primary">
                      {event.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full shadow-lg" />
                <div className="w-2 h-2 bg-primary/50 rounded-full mt-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}