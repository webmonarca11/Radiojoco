import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Radio, ArrowLeft } from "lucide-react";

const videos = [
  {
    id: "JF3fUOGfFkk",
    title: "JOCOTITLÁN, ESTADO DE MÉXICO",
    description: "¡Te esperamos con el corazón abierto!",
  },
  {
    id: "BeydC_RBRJg",
    title: "Gran Fiesta en Honor a Padre Jesús",
    description: "Familias, amigos y visitantes se unieron en un ambiente lleno de fe, música y tradición.",
  },
  {
    id: "Wjo5ukOz1ZI",
    title: "📍 Hecho en Jocotitlán",
    description: "Un par de hermanas preparan deliciosos platillos de auténtica comida casera.",
  },
  {
    id: "Hpuxv4TuqnM",
    title: "¿UN OSO BAILAR?🐻",
    description: "Tiburcio, el oso acróbata que llegó al pueblo con los misteriosos “húngaros”",
  },
  {
    id: "LoVkFxWievk",
    title: "Entrevista Especial 📬",
    description: "Una historia de vida relatada desde nuestra comunidad en Jocotitlán…",
  },
  {
    id: "XYLwIXEFu0Q",
    title: "🌟 Hecho en Jocotitlán 🍽️",
    description: "Un platillo irresistible, preparado con ingredientes frescos y el auténtico sazón de nuestra comunidad.",
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-[100dvh] bg-background selection:bg-primary/30 selection:text-primary">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Radio className="w-8 h-8 text-primary" />
            <span className="font-serif text-2xl font-bold tracking-wide">
              Radio Comunitaria Joco <span className="text-primary font-sans text-lg">106.9 FM</span>
            </span>
          </div>
          <Link
            href="/"
            data-testid="link-back-home"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Regresar al inicio
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-36 pb-12 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4 border border-primary/30 px-4 py-1.5 rounded-full bg-primary/5">
            Canal de Videos
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Nuestros <span className="text-primary">Videos</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Revive los mejores momentos de Radio Comunitaria Joco 106.9 FM (XHSCCT) — transmisiones, entrevistas y eventos de nuestra comunidad.
          </p>
        </motion.div>
      </section>

      {/* Video Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group"
              data-testid={`card-video-${index}`}
            >
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Radio Comunitaria Joco XHSCCT. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
