import {
  CategoryType,
  ProductType,
  ProductsGroupType,
} from "@/components/types";

export const products: ProductType[] = [
  {
    id: "101",
    name: "Pipes and Fittings",
    description: "HDPEWComIconDesc",
    images: [{ src: "/img/products/HDPE-Comp.webp" }],
    subDescription: "HDPEWComSubproductDesc",
    categoryId: "1",
    permalink: "/sub-products/1",
    properties: [
      "Chem Resistant",
      "Flexible",
      "Food Grade",
      "High Temp",
      "Impact Resistant",
      "Lightweight",
      "Long Usage Life",
      "Pressure Resistance",
    ],
    standards: [
      "TIS 982-2556 (Potable water certification)",
      "Leading pipe provider in PWA and MWA for 20+ years",
      "ISO 9001, 14001, 45001",
      "PE80, PE100",
      "HDPE 2,3 layers"
    ],
    standardsIcons: [
      "/img/standards/TIS 1.svg",
      "/img/standards/PWA 1.svg",
      "/img/standards/UKAS 1.svg",
      "/img/standards/MIT 2.svg",
      "/img/standards/PE100 1.webp",
    ],
    questions: [
      {
        question: "HDPEWFAQ1",
        answer:
          "HDPEWFAQA1",
      },
      {
        question: "HDPEWFAQ2",
        answer:
          "HDPEWFAQA2",
      },
      {
        question: "HDPEWFAQ3",
        answer:
          "HDPEWFAQA3",
      },
      {
        question: "HDPEWFAQ4",
        answer:
          "HDPEWFAQA4",
      },
      {
        question: "HDPEWFAQ5",
        answer:
          "HDPEWFAQA5",
      },
      {
        question: "HDPEWFAQ6",
        answer:
          "HDPEWFAQA6",
      },
      {
        question: "HDPEWFAQ7",
        answer:
          "HDPEWFAQA7",      },
      {
        question: "HDPEWFAQ8",
        answer:
          "HDPEWFAQA8",
      },
    ],
    whyUsTitle: "why_us_title_1",
    whyUsDescription: ["HDPEWWhyUs1","HDPEWWhyUs2"],
    contactLink: "/contact",
    catalogLink: "https://pspipe.co.th/resource/PE-Catalog.pdf",
    sizeValues: ["HDPEWSize1", "HDPEWSize2"],
    projectCards: [
      {
        image: "/img/projects/Infrastructure.webp",
        title: "Infrastructure",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Farming.webp",
        title: "Farming",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-2-img.webp",
        title: "Industry",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Mining.webp",
        title: "Mining",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Megastructures.webp",
        title: "Megastructures",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-1-img.webp",
        title: "Transport",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Energy.webp",
        title: "Energy ",
        content: "",
        link: "#",
      },
    ],
    content: {
      title: "HDPEWTitle2",
      descreption: "HDPEWDesc2",
    },
  },
  {
    id: "102",
    name: "Pipes and Fittings",
    description: "PBWComIconDesc",
    images: [{ src: "/img/products/PB.webp" }],
    subDescription: "PBWComSubproductDesc",
    categoryId: "2",
    permalink: "/sub-products/1",
    properties: [
      "Chem Resistant",
      "Flexible",
      "Food Grade",
      "High Temp",
      "Impact Resistant",
      "Lightweight",
      "Long Usage Life",
      "Pressure Resistance",
    ],
    standards: [
      "TIS 910-2556 (Potable water certification)",
      "Leading pipe provider in PWA and MWA for 20+ years",
      "ISO 9001, 14001, 45001",
    ],
    standardsIcons: [
      "/img/standards/TIS 1.svg",
      "/img/standards/PWA 1.svg",
      "/img/standards/UKAS 1.svg",
      "/img/standards/MIT 2.svg",
    ],
    questions: [
      {
        question: "PBWFAQ1",
        answer:
          "PBWFAQA1",
      },
      {
        question: "PBWFAQ2",
        answer:
          "PBWFAQA2",
      },
      {
        question: "PBWFAQ3",
        answer:
          "PBWFAQA3",
      },
      {
        question: "PBWFAQ4",
        answer:
          "PBWFAQA4",
      },
      {
        question: "PBWFAQ5",
        answer:
          "PBWFAQA5",
      },
      {
        question: "PBWFAQ6",
        answer:
          "PBWFAQA6",
      },
      
    ],
    whyUsTitle: "why_us_title_1",
    whyUsDescription: ["PBWWhyUs1","PBWWhyUs2"],
    contactLink: "/contact",
    catalogLink: "https://pspipe.co.th/resource/PB-Catalog.pdf",
    sizeValues: ["PBWSize1", "PBWSize2"],
    projectCards: [
      {
        image: "/img/projects/Infrastructure.webp",
        title: "Infrastructure",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-2-img.webp",
        title: "Industry",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Megastructures.webp",
        title: "Megastructures",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-1-img.webp",
        title: "Transport",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Energy.webp",
        title: "Energy ",
        content: "",
        link: "#",
      },
    ],
    content: {
      title: "PBWTitle2",
      descreption: "PBWDesc2",
    },
  },
  {
    id: "103",
    name: "Conduit",
    description: "HDPEEComIconDesc",
    images: [{ src: "/img/products/HDPE-Electricity.webp" }],
    subDescription: "HDPEEComSubproductDesc",
    categoryId: "7",
    permalink: "/sub-products/1",
    properties: [
      "Chem Resistant",
      "Flexible",
      "High Temp",
      "Impact Resistant",
      "Lightweight",
      "Long Usage Life",
    ],
    standards: [
      "TIS 982-2556 (Potable water certification)",
      "Leading pipe provider in EGAT, MEA and PEA for 20+ years",
    ],
    standardsIcons: [
      "/img/standards/TIS 1.svg",
      "/img/standards/UKAS 1.svg",
      "/img/standards/MIT 2.svg",
    ],
    questions: [
      {
        question: "HDPEEFAQ1",
        answer:
          "HDPEEFAQA1",
      },
      {
        question: "HDPEEFAQ2",
        answer:
          "HDPEEFAQA2",
      },
      {
        question: "HDPEEFAQ3",
        answer:
          "HDPEEFAQA3",
      },
      {
        question: "HDPEEFAQ4",
        answer:
          "HDPEEFAQA4",
      },
      {
        question: "HDPEEFAQ5",
        answer:
          "HDPEEFAQA5",
      },
    ],
    whyUsTitle: "why_us_title_1",
    whyUsDescription: ["HDPEEWhyUs1","HDPEEWhyUs2"],
    contactLink: "/contact",
    catalogLink: "https://pspipe.co.th/resource/PE-Catalog.pdf",
    sizeValues: ["HDPEESize1", "HDPEESize2"],
    projectCards: [
      {
        image: "/img/projects/Infrastructure.webp",
        title: "Infrastructure",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Energy.webp",
        title: "Energy",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-2-img.webp",
        title: "Industry",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Megastructures.webp",
        title: "Megastructures",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-1-img.webp",
        title: "Transport",
        content: "",
        link: "#",
      },
    ],
    content: {
      title: "HDPEETitle2",
      descreption: "HDPEEDesc2",
    },
  },
  {
    id: "104",
    name: "EFlex",
    description: "EFLEXComIconDesc",
    images: [{ src: "/img/products/Eflex.webp" }],
    subDescription: "EFLEXComSubproductDesc",
    categoryId: "7",
    permalink: "/sub-products/1",
    properties: [
      "Chem Resistant",
      "Flexible",
      "High Temp",
      "Impact Resistant",
      "Lightweight",
      "Long Usage Life",
    ],
    standards: [
      "Leading pipe provider in EGAT, MEA and PEA for 20+ years",
    ],
    standardsIcons: [
      "/img/standards/UKAS 1.svg",
      "/img/standards/MIT 2.svg",
    ],
    questions: [
      {
        question: "EFLEXFAQ1",
        answer:
          "EFLEXFAQA1",
      },
      {
        question: "EFLEXFAQ2",
        answer:
          "EFLEXFAQA2",
      },
      {
        question: "EFLEXFAQ3",
        answer:
          "EFLEXFAQA3",
      },
      {
        question: "EFLEXFAQ4",
        answer:
          "EFLEXFAQA4",
      },
      {
        question: "EFLEXFAQ5",
        answer:
          "EFLEXFAQA5",
      },
    ],
    whyUsTitle: "why_us_title_1",
    whyUsDescription: ["EFLEXWhyUs1","EFLEXWhyUs2"],
    contactLink: "/contact",
    catalogLink: "https://pspipe.co.th/resource/Eflex-Catalog.pdf",
    sizeValues: ["EFLEXSize1", "EFLEXSize2"],
    projectCards: [
      {
        image: "/img/projects/Infrastructure.webp",
        title: "Infrastructure",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Energy.webp",
        title: "Energy",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-2-img.webp",
        title: "Industry",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Megastructures.webp",
        title: "Megastructures",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-1-img.webp",
        title: "Transport",
        content: "",
        link: "#",
      },
    ],
    content: {
      title: "EFLEXTitle2",
      descreption: "EFLEXDesc2",
    },
  },
  {
    id: "105",
    name: "HDPE Liner",
    description: "XHDPESComIconDesc",
    images: [{ src: "/img/products/HDPE-Liner.webp" }],
    subDescription: "XHDPESComSubproductDesc",
    categoryId: "3",
    permalink: "/sub-products/1",
    properties: [
      "Chem Resistant",
      "Flexible",
      "High Temp",
      "Long Usage Life",
      "Pressure Resistance",
      "Food Grade",
      "Imperm Barrier",
    ],
    standards: [
      "ASTM GRI GM 13",
      "Leading plastics provider in South East Asia for 20+ years",
    ],
    standardsIcons: [

      "/img/standards/UKAS 1.svg",
      "/img/standards/GRI.webp",
    ],
    questions: [
      {
        question: "XHDPESFAQ1",
        answer:
          "XHDPESFAQA1",
      },
      {
        question: "XHDPESFAQ2",
        answer:
          "XHDPESFAQA2",
      },
      {
        question: "XHDPESFAQ3",
        answer:
          "XHDPESFAQA3",
      },
      {
        question: "XHDPESFAQ4",
        answer:
          "XHDPESFAQA4",
      },
      {
        question: "XHDPESFAQ5",
        answer:
          "XHDPESFAQA5",
      },
    ],
    whyUsTitle: "why_us_title_1",
    whyUsDescription: ["XHDPESWhyUs1","XHDPESWhyUs2"],
    contactLink: "/contact",
    catalogLink: "https://pspipe.co.th/resource/HDPELiner-Catalog.pdf",
    sizeValues: ["XHDPESSize1", "XHDPESSize2","XHDPESSize3"],
    projectCards: [
      {
        image: "/img/projects/Phetburi Lining Project.webp",
        title: "Aquaculture",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Water.webp",
        title: "Water Containment",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Energy.webp",
        title: "Energy",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Waste Treatment.webp",
        title: "Mining",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Megastructures.webp",
        title: "Megastructures",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-1-img.webp",
        title: "Transport",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Landfill.webp",
        title: "Waste",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Biogas.webp",
        title: "Biogas",
        content: "",
        link: "#",
      },
    ],
    content: {
      title: "XHDPESTitle2",
      descreption: "XHDPESDesc2",
    },
  },
  {
    id: "106",
    name: "Nonwoven",
    description: "XTEXComIconDesc",
    images: [{ src: "/img/products/Non-Woven.webp" }],
    subDescription: "XTEXComSubproductDesc",
    categoryId: "4",
    permalink: "/sub-products/1",
    properties: [
      "Barrier",
      "Chem Resistant",
      "Drainage",
      "Filtration",
      "Flexible",
      "Food Grade",
      "Impact Resistant",
      "Lightweight",
      "Long Usage Life",
    ],
    standards: [
      "Leading plastics provider in South East Asia for 20+ years",
    ],
    standardsIcons: [

      "/img/standards/UKAS 1.svg",
      "/img/standards/GRI.webp",
    ],
    questions: [
      {
        question: "XTEXFAQ1",
        answer:
          "XTEXFAQA1",
      },
      {
        question: "XTEXFAQ2",
        answer:
          "XTEXFAQA2",
      },
      {
        question: "XTEXFAQ3",
        answer:
          "XTEXFAQA3",
      },
      {
        question: "XTEXFAQ4",
        answer:
          "XTEXFAQA4",
      },
      {
        question: "XTEXFAQ5",
        answer:
          "XTEXFAQA5",
      },
      {
        question: "XTEXFAQ6",
        answer:
          "XTEXFAQA6",
      },
    ],
    whyUsTitle: "why_us_title_1",
    whyUsDescription: ["XTEXWhyUs1","XTEXWhyUs2"],
    contactLink: "/contact",
    catalogLink: "https://pspipe.co.th/resource/Geosynthetics-Catalog.pdf",
    sizeValues: ["XTEXSize1", "XTEXSize2","XTEXSize3"],
    projectCards: [
      {
        image: "/img/projects/Phetburi Lining Project.webp",
        title: "Aquaculture",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Water.webp",
        title: "Water Containment",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Energy.webp",
        title: "Energy",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Waste Treatment.webp",
        title: "Mining",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Megastructures.webp",
        title: "Megastructures",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/project-card-1-img.webp",
        title: "Transport",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Landfill.webp",
        title: "Waste",
        content: "",
        link: "#",
      },
    ],
    content: {
      title: "XTEXTitle2",
      descreption: "XTEXDesc2",
    },
  },
  {
    id: "107",
    name: "Geotube",
    description: "XTUBEComIconDesc",
    images: [{ src: "/img/products/Geotube.webp" }],
    subDescription: "XTUBEComSubproductDesc",
    categoryId: "5",
    permalink: "/sub-products/1",
    properties: [
      "Chem Resistant",
      "Filtration",
      "Flexible",
      "Impact Resistant",
      "Lightweight",
      "Long Usage Life",
      "Erosion Prot",
    ],
    standards: [
      "Leading plastics provider in South East Asia for 20+ years",
    ],
    standardsIcons: [

      "/img/standards/UKAS 1.svg",
      "/img/standards/GRI.webp",
    ],
    questions: [
      {
        question: "XTUBEFAQ1",
        answer:
          "XTUBEFAQA1",
      },
      {
        question: "XTUBEFAQ2",
        answer:
          "XTUBEFAQA2",
      },
      {
        question: "XTUBEFAQ3",
        answer:
          "XTUBEFAQA3",
      },
      {
        question: "XTUBEFAQ4",
        answer:
          "XTUBEFAQA4",
      },
      {
        question: "XTUBEFAQ5",
        answer:
          "XTUBEFAQA5",
      },
      {
        question: "XTUBEFAQ6",
        answer:
          "XTUBEFAQA6",
      },
    ],
    whyUsTitle: "why_us_title_1",
    whyUsDescription: ["XTUBEWhyUs1","XTUBEWhyUs2"],
    contactLink: "/contact",
    catalogLink: "https://pspipe.co.th/resource/Geosynthetics-Catalog.pdf",
    sizeValues: ["XTUBESize1", "XTUBESize2","XTUBESize3"],
    projectCards: [
      {
        image: "/img/projects/Farming 1.webp",
        title: "Farming",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Waste Treatment.webp",
        title: "Mining",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Megastructures.webp",
        title: "Waterway Protection",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/CoastalProt.webp",
        title: "Coastal Protection",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/SludgeTreat.webp",
        title: "Sludge Treatment",
        content: "",
        link: "#",
      },
    ],
    content: {
      title: "XTUBETitle2",
      descreption: "XTUBEDesc2",
    },
  },
  {
    id: "108",
    name: "Concrete Mattress",
    description: "XMATComIconDesc",
    images: [{ src: "/img/products/Concerete-Mattress.webp" }],
    subDescription: "XMATComSubproductDesc",
    categoryId: "6",
    permalink: "/sub-products/1",
    properties: [
      "Chem Resistant",
      "Flexible",
      "Impact Resistant",
      "Lightweight",
      "Long Usage Life",
      "Erosion Prot",
    ],
    standards: [
      "Leading plastics provider in South East Asia for 20+ years",
    ],
    standardsIcons: [

      "/img/standards/UKAS 1.svg",
    ],
    questions: [
      {
        question: "XMATFAQ1",
        answer:
          "XMATFAQA1",
      },
      {
        question: "XMATFAQ2",
        answer:
          "XMATFAQA2",
      },
      {
        question: "XMATFAQ3",
        answer:
          "XMATFAQA3",
      },
      {
        question: "XMATFAQ4",
        answer:
          "XMATFAQA4",
      },
    ],
    whyUsTitle: "why_us_title_1",
    whyUsDescription: ["XMATWhyUs1","XMATWhyUs2"],
    contactLink: "/contact",
    catalogLink: "https://pspipe.co.th/resource/Geosynthetics-Catalog.pdf",
    sizeValues: ["XMATSize1", "XMATSize2"],
    projectCards: [
      {
        image: "/img/projects/Water.webp",
        title: "Water Containment",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Megastructures.webp",
        title: "Waterway Protection",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/CoastalProt.webp",
        title: "Coastal Protection",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Landfill.webp",
        title: "Waste",
        content: "",
        link: "#",
      },
    ],
    content: {
      title: "XMATTitle2",
      descreption: "XMATDesc2",
    },
  },

  {
    id: "109",
    name: "GCCM",
    description: "XGCCMComIconDesc",
    images: [{ src: "/img/products/GCCM.webp" }],
    subDescription: "XGCCMComSubproductDesc",
    categoryId: "6",
    permalink: "/sub-products/1",
    properties: [
      "Chem Resistant",
      "Flexible",
      "Impact Resistant",
      "Long Usage Life",
      "Erosion Prot",
    ],
    standards: [
      "Leading plastics provider in South East Asia for 20+ years",
    ],
    standardsIcons: [

      "/img/standards/UKAS 1.svg",
    ],
    questions: [
      {
        question: "XGCCMFAQ1",
        answer:
          "XGCCMFAQA1",
      },
      {
        question: "XGCCMFAQ2",
        answer:
          "XGCCMFAQA2",
      },
      {
        question: "XGCCMFAQ3",
        answer:
          "XGCCMFAQA3",
      },
      {
        question: "XGCCMFAQ4",
        answer:
          "XGCCMFAQA4",
      },
    ],
    whyUsTitle: "why_us_title_1",
    whyUsDescription: ["XGCCMWhyUs1","XGCCMWhyUs2"],
    contactLink: "/contact",
    catalogLink: "https://pspipe.co.th/resource/Geosynthetics-Catalog.pdf",
    sizeValues: ["XGCCMSize1", "XGCCMSize2"],
    projectCards: [
      {
        image: "/img/projects/Water.webp",
        title: "Water Containment",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Megastructures.webp",
        title: "Waterway Protection",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/CoastalProt.webp",
        title: "Coastal Protection",
        content: "",
        link: "#",
      },
      {
        image: "/img/projects/Landfill.webp",
        title: "Waste",
        content: "",
        link: "#",
      },
    ],
    content: {
      title: "XGCCMTitle2",
      descreption: "XGCCMDesc2",
    },
  },



];

// Mock data for CategoryType
export const categories: CategoryType[] = [
  {
    id: "1",
    productsGroupId: "1",
    name: "HDPE",
    description: [
      "HDPEDesc1",
      "HDPEDesc2",
      "HDPEDesc3",
      "HDPEDesc4",
    ],
  },
  {
    id: "2",
    productsGroupId: "1",
    name: "PB",
    description: [
      "PBDesc1",
      "PBDesc2",
      "PBDesc3",
      "PBDesc4",
    ],
  },
  {
    id: "6",
    productsGroupId: "3",
    name: "Geocomposites",
    description: [
      "CompDesc1",
      "CompDesc2",
      "CompDesc3",
      "CompDesc4",
    ],
  },
  {
    id: "3",
    productsGroupId: "3",
    name: "Geomembranes",
    description: [
      "MemDesc1",
      "MemDesc2",
      "MemDesc3",
      "MemDesc4",
    ],
  },
  {
    id: "4",
    productsGroupId: "3",
    name: "Geotextiles",
    description: [
      "TextileDesc1",
      "TextileDesc2",
      "TextileDesc3",
      "TextileDesc4",
    ],
  },
  {
    id: "5",
    productsGroupId: "3",
    name: "Geotubes",
    description: [
      "TubeDesc1",
      "TubeDesc2",
      "TubeDesc3",
      "TubeDesc4",
    ],
  },
  
  {
    id: "7",
    productsGroupId: "2",
    name: "HDPE",
    description: [
      "HDPEEDesc1",
      "HDPEEDesc2",
      "HDPEEDesc3",
      "HDPEEDesc4",
    ],
  },
  
];

export const productsGroups: ProductsGroupType[] = [
  {
    id: "1",
    title: "water",
    img: "/img/water.webp",
    color: "#0f4c81",
  },
  {
    id: "2",
    title: "Electricity",
    img: "/img/electricity.webp",
    color: "#FF6626",
  },
  {
    id: "3",
    title: "Geosynthetics",
    img: "/img/geosynthetics.webp",
    color: "#99DD77",
  },
];

export const slugs = products.map((product) => ({
  text: `${categories
    .find((category) => category.id === product.categoryId)
    ?.name.toLowerCase()}-${product.name.toLowerCase()}`,
  productId: product.id,
}));
