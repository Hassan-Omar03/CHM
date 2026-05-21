import pAdhesive from "@/assessts/Adhensive bonding.jpeg";
import pAdmixture from "@/assessts/Concrete mixture.png";
import pRepair from "@/assessts/Concrete repair.png";
import pFlooring from "@/assessts/Floring system.png";
import pGrout from "@/assessts/Grout and anchor.png";
import pSealant from "@/assessts/Joint Sealants.png";
import pCoating from "@/assessts/Protective Coating & Sealers.jpeg";
import pWaterproof from "@/assessts/waterproofing.png";
import pOthers from "@/assessts/p-others.jpg";

export const productCategories = [
  {
    slug: "adhesive-bonding",
    title: "Adhesive Bonding",
    image: pAdhesive,
    description:
      "High-strength bonding agents engineered for tile, stone and structural adhesion across demanding substrates.",
  },
  {
    slug: "concrete-admixture",
    title: "Concrete Admixture",
    image: pAdmixture,
    description:
      "Performance-enhancing admixtures that improve workability, strength, durability and set-time control.",
  },
  {
    slug: "concrete-repair",
    title: "Concrete Repair",
    image: pRepair,
    description:
      "Polymer-modified repair mortars and resins for structural restoration, crack injection and surface rehabilitation.",
  },
  {
    slug: "flooring-system",
    title: "Flooring System",
    image: pFlooring,
    description:
      "Industrial epoxy and polyurethane flooring for warehouses, factories, garages and high-traffic facilities.",
  },
  {
    slug: "grout-anchor",
    title: "Grout and Anchor",
    image: pGrout,
    description:
      "Non-shrink cementitious and epoxy grouts for precision machine bases, anchor bolts and structural fixings.",
  },
  {
    slug: "joint-sealants",
    title: "Joint Sealants",
    image: pSealant,
    description:
      "Polyurethane, silicone and hybrid sealants for expansion joints, façade systems and watertight detailing.",
  },
  {
    slug: "protective-coating-sealers",
    title: "Protective Coating & Sealers",
    image: pCoating,
    description:
      "Long-life coatings and penetrating sealers protecting concrete and steel from chemicals, abrasion and corrosion.",
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    image: pWaterproof,
    description:
      "Liquid-applied membranes, crystalline systems and bituminous solutions for roofs, basements and wet areas.",
  },
  {
    slug: "others",
    title: "Others",
    image: pOthers,
    description:
      "Road marking paints, thermoplastic systems, glass beads and specialty road safety chemicals.",
  },
];

export const services = [
  { title: "Construction Chemical Consultation", desc: "Specification support, product selection and value engineering tailored to project requirements." },
  { title: "Waterproofing Solutions", desc: "Comprehensive waterproofing design and material recommendations for every building envelope." },
  { title: "Concrete Repair Systems", desc: "Diagnostic-driven repair strategies extending the service life of concrete structures." },
  { title: "Industrial Flooring Support", desc: "Substrate evaluation, system design and installation guidance for high-performance floors." },
  { title: "Protective Coating Applications", desc: "Surface preparation specs, coating selection and field support for long-term protection." },
  { title: "Road Marking Solutions", desc: "Durable road marking systems and reflective materials engineered for road safety." },
  { title: "Technical Site Assistance", desc: "On-site engineering supervision, mock-ups and quality assurance during application." },
  { title: "Product Support Services", desc: "Training, technical data sheets and after-sales support for contractors and consultants." },
];

export const workflow = [
  { step: "01", title: "Consultation", desc: "Understanding project goals, environment and performance requirements." },
  { step: "02", title: "Site Inspection", desc: "Detailed substrate assessment and site condition analysis." },
  { step: "03", title: "Product Selection", desc: "Engineering the optimal chemical system for the application." },
  { step: "04", title: "Application Support", desc: "On-site technical guidance during installation and curing." },
  { step: "05", title: "Quality Inspection", desc: "Testing, verification and performance validation." },
  { step: "06", title: "Final Delivery", desc: "Documentation, warranties and long-term maintenance recommendations." },
];
