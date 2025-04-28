"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="container py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto relative z-10"
      >
        <h2 className="mb-4 text-3xl font-bold text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="mb-8 text-muted-foreground text-center backdrop-blur-sm bg-background/20 rounded-lg p-4">
          I'm currently available for freelance work or full-time positions.
          Feel free to reach out if you have a project in mind or just want to
          connect.
        </p>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-4 backdrop-blur-sm bg-card/30 rounded-lg"
          >
            <div className="rounded-full gradient-bg-1 p-3 text-white">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <a
                href="mailto:barshonshifat2@gmail.com"
                className="text-muted-foreground hover:text-primary"
              >
                barshonshifat2@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-4 backdrop-blur-sm bg-card/30 rounded-lg"
          >
            <div className="rounded-full gradient-bg-2 p-3 text-white">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <a
                href="tel:+8801867707331"
                className="text-muted-foreground hover:text-primary"
              >
                +880 1867707331
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-4 backdrop-blur-sm bg-card/30 rounded-lg"
          >
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted-foreground">
                Muslim Modern Road, Mirpur-14, Dhaka
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
