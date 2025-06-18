
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, LinkIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-12">
      <header className="text-center space-y-4">
        <Image
          src="/LevelAndHammer.png"
          alt="Level & Hammer Co. Logo"
          width={150}
          height={150}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold">Level & Hammer Co.</h1>
        <p className="text-lg text-gray-600">Reliable Craftsmanship. Local Experts.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Bathroom Renovations</li>
              <li>Flooring Installation</li>
              <li>Drywall & Painting</li>
              <li>Decks & Fencing</li>
              <li>Lighting & Fixture Installs</li>
              <li>Welding & Custom Metal Work</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold">Why Choose Us</h2>
            <p>We're a two-man team with years of hands-on experience. Our work speaks for itself, and we're committed to quality, communication, and showing up when we say we will.</p>
            <p>Serving Fayetteville, NC and surrounding areas.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Get a Free Estimate</h2>
        <p>Ready to start your next project? Call, text, or email us today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="flex items-center gap-2">
            <Phone size={16} /> (910) XXX-XXXX
          </Button>
          <Button className="flex items-center gap-2" variant="outline">
            <Mail size={16} /> levelandhammer@gmail.com
          </Button>
          <Button className="flex items-center gap-2" variant="secondary">
            <LinkIcon size={16} /> <a href="https://openphone.com" target="_blank">OpenPhone</a>
          </Button>
          <Button className="flex items-center gap-2" variant="secondary">
            <LinkIcon size={16} /> <a href="https://quoteiq.io" target="_blank">Quote IQ</a>
          </Button>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-12">
        &copy; {new Date().getFullYear()} Level & Hammer Co. All rights reserved.
      </footer>
    </div>
  );
}
