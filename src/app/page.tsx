import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

function Home() {
  return (
    <div>
        <Navbar />

        <div className="">
        <Section
            title="Convenient Cloud Storage"
            body={`Distributed and encrypted across localised user-hosted servers.${"\n\n"}Cheaper. Smarter. Integrated.${"\n"}This is ThunderCloud.`}
            button="Enter the Future"
            />

        <Section
            title="Supercharged by Blockchain"
            body="Data is encrypted using state-of-the-art blockchain technology, ensuring security, credibility, and privacy."
            button="Learn More"
            />

        <Section
            title="Make Big Profit"
            body="Earn profit by reusing your old storage devices and contributing the space to the network as a Node™."
            button="Guide"
            />

        <Section
            title="Fleshed-Out Ecosystem"
            body="Store your files on the cloud with Chain™. Manage everything from Vault™."
            button="Learn More"
            />
        </div>
    </div>
  );
}

export default Home;
