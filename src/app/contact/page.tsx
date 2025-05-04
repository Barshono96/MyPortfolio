"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const contactItems = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: (
        <a
          href="mailto:barshonshifat2@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          barshonshifat2@gmail.com
        </a>
      ),
      gradient: "gradient-bg-1",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      content: (
        <div className="flex flex-col">
          <a
            href="tel:+8801867707331"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            +880 1867707331
          </a>
          <a
            href="tel:+8801780662278"
            className="text-muted-foreground hover:text-primary transition-colors mt-1"
          >
            +880 1780662278
          </a>
        </div>
      ),
      gradient: "gradient-bg-2",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp",
      content: (
        <div className="flex flex-col">
          <a
            href="https://wa.me/8801867707331"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-green-500 transition-colors"
          >
            +880 1867707331
          </a>
          <a
            href="https://wa.me/8801780662278"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-green-500 transition-colors mt-1"
          >
            +880 1780662278
          </a>
        </div>
      ),
      gradient: "bg-green-500",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      content: (
        <p className="text-muted-foreground">
          Muslim Modern Road, Mirpur-14, Dhaka
        </p>
      ),
      gradient: "bg-primary",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container py-24 relative">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-blob"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-32 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute -bottom-24 left-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"
      />

      <div className="mb-16 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-muted-foreground md:text-lg"
        >
          I'm currently available for freelance work or full-time positions.
          Feel free to reach out if you have a project in mind or just want to
          connect.
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.div className="mb-12 space-y-6">
          {contactItems.map((contactItem, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 p-4 rounded-lg card-hover border border-transparent hover:border-border transition-all"
            >
              <div
                className={`rounded-full ${contactItem.gradient} p-3 text-white`}
              >
                {contactItem.icon}
              </div>
              <div>
                <h3 className="font-medium">{contactItem.title}</h3>
                {contactItem.content}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 shadow-sm"
        >
          <h3 className="mb-4 text-lg font-medium">Working Hours</h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-2"
          >
            {[
              { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
              { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
              { day: "Sunday", hours: "Closed" },
            ].map((schedule, i) => (
              <motion.div
                key={i}
                variants={item}
                className="flex justify-between"
              >
                <span className="text-muted-foreground">{schedule.day}</span>
                <span>{schedule.hours}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
