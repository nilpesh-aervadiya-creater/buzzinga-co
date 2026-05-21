import Header from "@/components/layout/Header";
import {
  EchoHealthcareApproachSection,
  EchoHealthcareApproachMediaSection,
  EchoHealthcareBriefSection,
  EchoHealthcareChallengeSection,
  EchoHealthcareChallengeDivider,
  EchoHealthcareDiscoverySection,
  EchoHealthcareDiscoveryApproachMediaSection,
  EchoHealthcareHeroSection,
} from "@/components/sections/ProjectEchoHealthcareSections";

export default function ProjectEchoHealthcare() {
  return (
    <>
      <Header />
      <main>
        <EchoHealthcareHeroSection />
        <EchoHealthcareBriefSection />
        <EchoHealthcareChallengeDivider />
        <EchoHealthcareChallengeSection />
        <EchoHealthcareDiscoverySection />
        <EchoHealthcareDiscoveryApproachMediaSection />
        <EchoHealthcareApproachSection />
        <EchoHealthcareApproachMediaSection />
      </main>
    </>
  );
}
