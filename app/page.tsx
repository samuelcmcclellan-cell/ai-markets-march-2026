"use client";

import SlideController from "@/components/SlideController";
import Title from "@/components/slides/01_Title";
import Agenda from "@/components/slides/02_Agenda";
import WhyAIMatters from "@/components/slides/03_WhyAIMatters";
import WhatIsAI from "@/components/slides/04_WhatIsAI";
import TheAIStack from "@/components/slides/05_TheAIStack";
import SupplyChainMap from "@/components/slides/06_SupplyChainMap";
import PoweringBuildout from "@/components/slides/07_PoweringBuildout";
import HyperscalerCapex from "@/components/slides/08_HyperscalerCapex";
import SemiMarket from "@/components/slides/09_SemiMarket";
import MemoryDeepDive from "@/components/slides/10_MemoryDeepDive";
import AILabRace from "@/components/slides/11_AILabRace";
import AgenticAI from "@/components/slides/12_AgenticAI";
import GreatDivergence from "@/components/slides/13_GreatDivergence";
import BubbleDebunk from "@/components/slides/14_BubbleDebunk";
import SupplyChainFragility from "@/components/slides/15_SupplyChainFragility";
import PolicyRegulation from "@/components/slides/16_PolicyRegulation";
import PoliticalHeadwinds from "@/components/slides/17_PoliticalHeadwinds";
import OrbitalCompute from "@/components/slides/18_OrbitalCompute";
import Humanoids from "@/components/slides/19_Humanoids";
import AutonomousMobility from "@/components/slides/20_AutonomousMobility";
import HealthcareAI from "@/components/slides/21_HealthcareAI";
import KeyTakeaways from "@/components/slides/22_KeyTakeaways";

const slides = [
  <Title key="01" />,
  <Agenda key="02" />,
  <WhyAIMatters key="03" />,
  <WhatIsAI key="04" />,
  <TheAIStack key="05" />,
  <SupplyChainMap key="06" />,
  <PoweringBuildout key="07" />,
  <HyperscalerCapex key="08" />,
  <SemiMarket key="09" />,
  <MemoryDeepDive key="10" />,
  <AILabRace key="11" />,
  <AgenticAI key="12" />,
  <GreatDivergence key="13" />,
  <BubbleDebunk key="14" />,
  <SupplyChainFragility key="15" />,
  <PolicyRegulation key="16" />,
  <PoliticalHeadwinds key="17" />,
  <OrbitalCompute key="18" />,
  <Humanoids key="19" />,
  <AutonomousMobility key="20" />,
  <HealthcareAI key="21" />,
  <KeyTakeaways key="22" />,
];

const sectionColors = [
  "#3b82f6", // 0  Title                - THE LANDSCAPE
  "#3b82f6", // 1  Agenda               - THE LANDSCAPE
  "#3b82f6", // 2  Why AI Matters       - THE LANDSCAPE
  "#3b82f6", // 3  What Is AI?          - THE LANDSCAPE
  "#3b82f6", // 4  AI Stack             - THE LANDSCAPE
  "#3b82f6", // 5  Supply Chain Map     - THE LANDSCAPE
  "#3b82f6", // 6  Powering Buildout    - THE LANDSCAPE
  "#f59e0b", // 7  Hyperscaler Capex    - THE MARKET
  "#f59e0b", // 8  Semi Market          - THE MARKET
  "#f59e0b", // 9  Memory Deep Dive     - THE MARKET
  "#f59e0b", // 10 AI Labs              - THE MARKET
  "#10b981", // 11 Agentic AI           - THE SHIFTS
  "#10b981", // 12 Great Divergence     - THE SHIFTS
  "#ef4444", // 13 Bubble Debunk        - THE RISKS
  "#ef4444", // 14 Supply Chain Risk    - THE RISKS
  "#ef4444", // 15 Policy Regulation    - THE RISKS
  "#ef4444", // 16 Political            - THE RISKS
  "#8b5cf6", // 17 Orbital Compute      - THE FRONTIER
  "#8b5cf6", // 18 Humanoids            - THE FRONTIER
  "#8b5cf6", // 19 Self-Driving         - THE FRONTIER
  "#8b5cf6", // 20 Healthcare AI        - THE FRONTIER
  "#f59e0b", // 21 Key Takeaways
];

const sectionLabels = [
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE LANDSCAPE",
  "THE MARKET",
  "THE MARKET",
  "THE MARKET",
  "THE MARKET",
  "THE SHIFTS",
  "THE SHIFTS",
  "THE RISKS",
  "THE RISKS",
  "THE RISKS",
  "THE RISKS",
  "THE FRONTIER",
  "THE FRONTIER",
  "THE FRONTIER",
  "THE FRONTIER",
  "KEY TAKEAWAYS",
];

export default function Home() {
  return (
    <SlideController
      slides={slides}
      sectionColors={sectionColors}
      sectionLabels={sectionLabels}
    />
  );
}
