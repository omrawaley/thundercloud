// 'use client'

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { Typography } from "@/components/Typography";
import WorldMap from "@/components/ui/world-map";

function Home() {
  return (
    <div>
        <Navbar />

        <div className="">
        <Section
            title="Convenient Cloud Storage"
            body={`Distributed and encrypted across localised user-hosted servers.${"\n\n"}Cheaper. Smarter. Integrated.${"\n"}This is ThunderCloud.`}
            button="Enter the Future"
            image="/NetworkImage.png"
            dir="right"
            />

        <Section
            title="Supercharged by Blockchain"
            body="Data is encrypted using state-of-the-art blockchain technology, ensuring security, credibility, and privacy."
            button="Learn More"
            image="/NetworkImage.png"
            dir="left"
            />

            <div className="flex flex-col bg-gradient-to-r from-red to-magenta p-20 mt-10 rounded-2xl text-center">
                <Typography variant="h1" className="font-brand text-white ml-2">Enjoy Servers Across the Globe</Typography>
                <Typography variant="p" className="font-brand text-white mr-2 mb-10">Nodes, or servers, can be hosted from anywhere by users, ensuring blazing fast data transfers and secure data fragmentation.</Typography>
                <WorldMap
                    lineColor="#ff2222"
                    dots={[
                      {
                        start: {
                          lat: 64.2008,
                          lng: -149.4937,
                        }, // Alaska (Fairbanks)
                        end: {
                          lat: 34.0522,
                          lng: -118.2437,
                        }, // Los Angeles
                      },
                      {
                        start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                        end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                      },
                      {
                        start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                      },
                      {
                        start: { lat: 51.5074, lng: -0.1278 }, // London
                        end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                      },
                      {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                      },
                      {
                        start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                      },
                    ]}
                  />
            </div>

        <Section
            title="Make Big Profit"
            body="Earn profit by reusing your old storage devices and contributing the space to the network as a Node."
            button="Guide"
            image="/NetworkImage.png"
            dir="right"
            />

        <Section
            title="Fleshed-Out Ecosystem"
            body="Store your files on the cloud with Chain™. Manage everything from Vault™."
            button="Learn More"
            image="/NetworkImage.png"
            dir="left"
            />
        </div>
    </div>
  );
}

export default Home;
