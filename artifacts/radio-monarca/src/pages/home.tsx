import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiFacebook, SiWhatsapp } from "react-icons/si";
import {
  Radio,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  PlayCircle,
  PauseCircle,
  Users,
  Activity,
  Target,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  empresa: z.string().optional(),
  telefono: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  email: z.string().email("Correo electrónico inválido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function HomePage() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      telefono: "",
      email: "",
      mensaje: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    toast.success(
      "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
    );
    form.reset();
  }

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

  return (
    <div className="min-h-[100dvh] bg-background selection:bg-primary/30 selection:text-primary">
      {/* Navbar (Static / Sticky) */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Radio className="w-8 h-8 text-primary" />
            <span className="font-serif text-2xl font-bold tracking-wide">
              Radio Comunitaria Joco{" "}
              <span className="text-primary font-sans text-lg">106.9 FM</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a
              href="#nosotros"
              className="hover:text-primary transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#comunidad"
              className="hover:text-primary transition-colors"
            >
              Comunidad
            </a>
            <a
              href="#publicidad"
              className="hover:text-primary transition-colors"
            >
              Publicidad
            </a>
            <a
              href="#contacto"
              className="hover:text-primary transition-colors"
            >
              Contacto
            </a>
            <Link
              href="/videos"
              className="hover:text-primary transition-colors"
              data-testid="link-nav-videos"
            >
              Nuestros videos
            </Link>
          </div>
          <Button
            className="hidden md:flex gap-2 rounded-full font-semibold shadow-lg shadow-primary/20"
            onClick={handlePlay}
            data-testid="button-nav-listen"
          >
            {isPlaying ? <PauseCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
            {isPlaying ? "Pausar" : "Escucha en Vivo"}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent z-10" />
          <img
            src="/hero-bg.png"
            alt="Paisaje de Jocotitlán, Estado de México"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container relative z-20 px-6 pt-20 pb-32 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Transmitiendo desde Jocotitlán, Estado de México
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight break-words">
              El Latido de <br />
              <span className="text-primary sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-primary sm:to-accent">
                Nuestra Tierra
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Medio comunitario que defiende derechos humanos, equidad de género
              y la preservación de la cultura de Jocotitlán.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="w-full sm:w-auto h-16 px-10 text-lg rounded-full font-bold shadow-xl shadow-primary/30 group hover:scale-105 transition-transform duration-300"
                onClick={handlePlay}
                data-testid="button-hero-listen"
              >
                {isPlaying
                  ? <PauseCircle className="w-6 h-6 mr-3" />
                  : <PlayCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />}
                {isPlaying ? "Pausar" : "Escucha en Vivo"}
              </Button>
              <Link href="/videos" data-testid="link-hero-videos">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-16 px-10 text-lg rounded-full font-bold border-white/20 hover:border-primary/50 hover:text-primary hover:scale-105 transition-transform duration-300"
                >
                  <Video className="w-6 h-6 mr-3" />
                  Nuestros Videos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nosotros */}
      <section
        id="nosotros"
        className="py-24 relative bg-card border-y border-white/5"
      >
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
                <img
                  src="/about-image.png"
                  alt="Cabina de radio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl -z-10 rounded-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Nuestra Esencia
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Radio Comunitaria Joco es un medio comunitario comprometido con
                la defensa de los derechos humanos y la equidad de género,
                arraigado profundamente en la vida y la cultura de Jocotitlán.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Nuestra señal viaja llevando música, noticias y compañía a cada
                hogar, negocio y familia que sintoniza el 106.9 FM (XHSCCT),
                preservando la identidad y las tradiciones de nuestra comunidad.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="border border-white/10 p-6 rounded-xl bg-background/50">
                  <Activity className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-2">100% Comunitaria</h3>
                  <p className="text-sm text-muted-foreground">
                    La voz de la comunidad de Jocotitlán.
                  </p>
                </div>
                <div className="border border-white/10 p-6 rounded-xl bg-background/50">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-2">Cultura</h3>
                  <p className="text-sm text-muted-foreground">
                    Preservando la identidad de Jocotitlán.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Streaming & Comunidad */}
      <section id="comunidad" className="py-24 relative">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Una Gran Familia
            </h2>
            <p className="text-muted-foreground text-lg">
              Únete a nuestra creciente comunidad digital. Interactúa, participa
              y sé parte de la programación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 p-8 rounded-2xl text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <SiFacebook className="w-8 h-8 text-[#1877F2]" />
              </div>
              <h3 className="text-4xl font-bold mb-2">+10,000</h3>
              <p className="text-muted-foreground font-medium mb-5">
                Seguidores en Facebook
              </p>
              <a
                href="https://www.facebook.com/radiocomunitariajoco"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-facebook-page"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1877F2] hover:bg-[#1565d8] text-white text-sm font-semibold transition-colors"
              >
                <SiFacebook className="w-4 h-4" />
                Visítanos en Facebook
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary border border-primary/20 p-8 rounded-2xl text-center text-primary-foreground relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 bg-cover mix-blend-overlay" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center mx-auto mb-6">
                  {isPlaying ? <PauseCircle className="w-8 h-8" /> : <PlayCircle className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">Escucha en Línea</h3>
                <Button
                  variant="secondary"
                  className="w-full font-bold bg-white text-primary hover:bg-white/90"
                  onClick={handlePlay}
                  data-testid="button-comunidad-listen"
                >
                  {isPlaying ? "Pausar" : "Sintonizar Ahora"}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/5 p-8 rounded-2xl text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold mb-2">713+</h3>
              <p className="text-muted-foreground font-medium">
                Miembros del Canal
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publicidad */}
      <section
        id="publicidad"
        className="py-24 bg-card border-y border-white/5"
      >
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Impulsa tu Negocio
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Anúnciate en Radio Comunitaria Joco y llega a miles de oyentes
                en la región. Ofrecemos spots publicitarios profesionales,
                menciones en vivo y cobertura en nuestras redes sociales.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  Audiencia cautiva y local
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  Producción profesional de spots
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    ✓
                  </div>
                  Paquetes a la medida
                </li>
              </ul>
            </div>

            <div className="bg-background border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Solicitar Cotización</h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre"
                              {...field}
                              className="bg-card"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa (Opcional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu negocio"
                              {...field}
                              className="bg-card"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="10 dígitos"
                              {...field}
                              className="bg-card"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="tu@email.com"
                              {...field}
                              className="bg-card"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="¿Qué tipo de publicidad buscas?"
                            className="resize-none h-32 bg-card"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-12 text-md font-bold"
                  >
                    Enviar Mensaje <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto & Ubicación */}
      <section id="contacto" className="py-24">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Nuestra Casa
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Dirección</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Jocotitlán, Estado de México, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Teléfono en Cabina
                    </h4>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+527122223346"
                        className="hover:text-primary transition-colors"
                      >
                        712 222 3346
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Correo Electrónico
                    </h4>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:radiocomunitariajoco@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        radiocomunitariajoco@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.123456789!2d-99.78500000000001!3d19.71500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8c0b9b9b9b9b%3A0x0!2sJocotitl%C3%A1n%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1709660000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Jocotitlán, Estado de México"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de cobertura */}
      <section className="py-24 bg-card border-t border-white/5">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4 border border-primary/30 px-4 py-1.5 rounded-full bg-primary/5">
              Señal
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Mapa de <span className="text-primary">Cobertura</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Consulta las zonas donde puedes sintonizar Radio Comunitaria Joco 106.9 FM (XHSCCT) con mayor claridad.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["mapa1.jpg", "mapa2.jpg", "mapa3.jpg"].map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`img-mapa-${index + 1}`}
              >
                <img
                  src={`/${img}?v=1`}
                  alt={`Mapa de cobertura ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-white/10 relative overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Radio className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl font-bold tracking-wide">
                Radio Comunitaria Joco{" "}
                <span className="text-primary font-sans text-sm">106.9 FM</span>
              </span>
            </div>

            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Radio Comunitaria Joco XHSCCT. Todos los
              derechos reservados.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Hidden Audio Stream */}
      <audio
        ref={audioRef}
        src="https://stream.zeno.fm/ologvvrpjmrvv"
        preload="none"
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/527122223346"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-whatsapp-float"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-lg hover:shadow-[#25D366]/40 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Contáctanos por WhatsApp"
      >
        <SiWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
