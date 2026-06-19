import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Radio, ArrowLeft, Youtube } from "lucide-react";
import { SiFacebook } from "react-icons/si";

const youtubeVideo = {
  id: "JF3fUOGfFkk",
  title: "JOCOTITLÁN, ESTADO DE MÉXICO",
  description: "¡Te esperamos con el corazón abierto!",
};

const facebookVideos = [
  {
    // PEGA TU LINK DE FACEBOOK AQUI
    href: "https://www.facebook.com/reel/1596586461672678?locale=es_LA",
    title: "Desde 1820 ya teníamos Ayuntamiento",
    description:
      "Antes de que México terminara de ser una nación libre e independiente, Jocotitlán ya sabía organizarse y gobernarse con dignidad.",
  },
  {
    // PEGA TU LINK DE FACEBOOK AQUI
    href: "https://www.facebook.com/reel/1441061310539274?locale=es_LA",
    title: "📍 Ruta Mexiquense",
    description: "¿Sabías que en un solo lugar puedes encontrar de TODO?",
  },
  {
    // PEGA TU LINK DE FACEBOOK AQUI
    href: "https://www.facebook.com/reel/10001395233206631?locale=es_LA",
    title: "Un tesoro de fe y historia en el corazón de Jocotitlán",
    description: "La iglesia de Jesús Nazareno, construida en el siglo XVI, no solo fue el primer templo de la comunidad",
  },
  {
    // PEGA TU LINK DE FACEBOOK AQUI
    href: "https://www.facebook.com/reel/1817828938998302?locale=es_LA",
    title: "Ruta Mexiquense: Hoy estuvimos en el corazón de Jocotitlán",
    description: "Doña Agustina teje sueños y crea obras de arte. ¡Descubre Joco y déjate sorprender!✨",
  },
  {
    // PEGA TU LINK DE FACEBOOK AQUI
    href: "https://www.facebook.com/reel/1541865720527326?locale=es_LA",
    title: "🌶️🔥 RUTA MEXIQUENSE 🔥🌶️",
    description: "Hoy visitamos “Las Enchiladas Las Kanijas” en el centro de Jocotitlán.",
  },
  {
    href: "https://www.facebook.com/reel/1904641253784968",
    title: "Reel — Radio Comunitaria Joco",
    description: "Contenido destacado de nuestra estación comunitaria.",
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
              Radio Comunitaria Joco{" "}
              <span className="text-primary font-sans text-lg">106.9 FM</span>
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
            Revive los mejores momentos de Radio Comunitaria Joco 106.9 FM
            (XHSCCT) — transmisiones, entrevistas y eventos de nuestra
            comunidad.
          </p>
        </motion.div>
      </section>

      {/* YouTube Video — destacado */}
      <section className="container mx-auto px-6 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <Youtube className="w-6 h-6 text-[#FF0000]" />
          <h2 className="text-xl font-bold">Destacado en YouTube</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group max-w-2xl"
          data-testid="card-video-youtube"
        >
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideo.id}`}
              title={youtubeVideo.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {youtubeVideo.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {youtubeVideo.description}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Facebook Videos */}
      <section className="container mx-auto px-6 pb-24">
        <div className="flex items-center gap-3 mb-6">
          <SiFacebook className="w-6 h-6 text-[#1877F2]" />
          <h2 className="text-xl font-bold">Videos de Facebook</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facebookVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group"
              data-testid={`card-video-facebook-${index}`}
            >
              {/* Iframe responsivo de Facebook — reemplaza el href del objeto facebookVideos arriba */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.href)}&show_text=0&mute=0`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={video.title}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <SiFacebook className="w-4 h-4 text-[#1877F2] shrink-0" />
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </div>
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
          © {new Date().getFullYear()} Radio Comunitaria Joco XHSCCT. Todos los
          derechos reservados.
        </div>
      </footer>
    </div>
  );
}
