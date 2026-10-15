export interface Medicine {
  id: string;
  name: string;
  brand: string;
  genericName: string;
  dosageStrength: string;
  form: string;
  packSize: string;
  category: 'pain' | 'allergy' | 'digestive' | 'chronic' | 'vitamins' | 'diagnostics';
  categoryLabel: string;
  price: number;
  isRxRequired: boolean;
  indication: string;
  dosageInstructions: string;
  precautions: string;
  storageCondition: string;
  manufacturer: string;
  inStock: boolean;
  featured?: boolean;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Medicines & Care' },
  { id: 'pain', label: 'Pain & Fever Relief' },
  { id: 'allergy', label: 'Allergy & Respiratory' },
  { id: 'digestive', label: 'Digestive & Stomach' },
  { id: 'chronic', label: 'Chronic & Daily Care' },
  { id: 'vitamins', label: 'Vitamins & Immunity' },
  { id: 'diagnostics', label: 'Devices & First Aid' },
] as const;

export const MEDICINES: Medicine[] = [
  {
    id: 'med-01',
    name: 'Paracetamol Extra 500mg',
    brand: 'Panacare Labs',
    genericName: 'Paracetamol (Acetaminophen)',
    dosageStrength: '500 mg',
    form: 'Film-Coated Tablets',
    packSize: '24 Tablets',
    category: 'pain',
    categoryLabel: 'Pain & Fever Relief',
    price: 8.5,
    isRxRequired: false,
    indication: 'Relief of mild to moderate headache, muscle aches, toothache, and reduction of fever.',
    dosageInstructions: 'Adults: 1 to 2 tablets every 4 to 6 hours as needed. Do not exceed 8 tablets in 24 hours.',
    precautions: 'Do not combine with other paracetamol-containing products. Avoid alcohol consumption.',
    storageCondition: 'Store below 25°C away from direct sunlight.',
    manufacturer: 'Aura Bioscience UK',
    inStock: true,
    featured: true,
  },
  {
    id: 'med-02',
    name: 'Ibuprofen Rapid 400mg',
    brand: 'NuroFlex Health',
    genericName: 'Ibuprofen Lysine',
    dosageStrength: '400 mg',
    form: 'Soft Liquid Gel Capsules',
    packSize: '20 Liquid Capsules',
    category: 'pain',
    categoryLabel: 'Pain & Fever Relief',
    price: 11.25,
    isRxRequired: false,
    indication: 'Targeted anti-inflammatory relief for joint pain, acute backache, dental pain, and menstrual cramps.',
    dosageInstructions: 'Take 1 capsule with water after food. Repeat every 6-8 hours if necessary (max 1200mg/day).',
    precautions: 'Not recommended for patients with peptic ulcers or severe kidney impairment.',
    storageCondition: 'Store between 15°C and 25°C.',
    manufacturer: 'TheraPharm International',
    inStock: true,
    featured: true,
  },
  {
    id: 'med-03',
    name: 'Amoxicillin 500mg Capsules',
    brand: 'Clavamox Direct',
    genericName: 'Amoxicillin Trihydrate',
    dosageStrength: '500 mg',
    form: 'Hard Gelatin Capsules',
    packSize: '15 Capsules',
    category: 'chronic',
    categoryLabel: 'Chronic & Daily Care',
    price: 16.8,
    isRxRequired: false,
    indication: 'Treatment of confirmed bacterial infections of the respiratory tract, ear-nose-throat, and skin.',
    dosageInstructions: 'As directed by your healthcare practitioner. Standard adult dose is 500mg every 8 hours with or without meals.',
    precautions: 'Verify penicillin allergies prior to taking. Complete the entire prescribed course.',
    storageCondition: 'Store below 25°C in airtight container.',
    manufacturer: 'Apex Pharma Guild',
    inStock: true,
    featured: true,
  },
  {
    id: 'med-04',
    name: 'Omeprazole 20mg Delayed-Release',
    brand: 'GastroShield',
    genericName: 'Omeprazole Magnesium',
    dosageStrength: '20 mg',
    form: 'Enteric Coated Capsules',
    packSize: '28 Capsules',
    category: 'digestive',
    categoryLabel: 'Digestive & Stomach',
    price: 14.5,
    isRxRequired: false,
    indication: 'Frequent heartburn, acid reflux (GERD), and stomach acid hypersecretion.',
    dosageInstructions: 'Take 1 capsule once daily in the morning at least 30 minutes before breakfast with a glass of water.',
    precautions: 'Swallow whole; do not crush or chew. Consult a doctor if symptoms persist past 14 days.',
    storageCondition: 'Store below 30°C in moisture-resistant blister packaging.',
    manufacturer: 'BioGastro Laboratories',
    inStock: true,
    featured: true,
  },
  {
    id: 'med-05',
    name: 'Cetirizine 10mg All-Day Relief',
    brand: 'AllerShield',
    genericName: 'Cetirizine Hydrochloride',
    dosageStrength: '10 mg',
    form: 'Scored Tablets',
    packSize: '30 Tablets',
    category: 'allergy',
    categoryLabel: 'Allergy & Respiratory',
    price: 12.0,
    isRxRequired: false,
    indication: '24-hour non-drowsy relief from allergic rhinitis, hay fever, sneezing, runny nose, and itchy hives.',
    dosageInstructions: 'Adults and children over 12: Take 1 tablet (10mg) once daily with water.',
    precautions: 'May cause mild drowsiness in sensitive individuals. Avoid operating heavy machinery if affected.',
    storageCondition: 'Store at 20°C to 25°C in a dry environment.',
    manufacturer: 'Novis Health Corp',
    inStock: true,
  },
  {
    id: 'med-06',
    name: 'Lisinopril 10mg Tablets',
    brand: 'CardioPrime',
    genericName: 'Lisinopril USP',
    dosageStrength: '10 mg',
    form: 'Round Scored Tablets',
    packSize: '28 Tablets',
    category: 'chronic',
    categoryLabel: 'Chronic & Daily Care',
    price: 18.2,
    isRxRequired: false,
    indication: 'Management of hypertension (high blood pressure) and heart failure adjunctive therapy.',
    dosageInstructions: 'Take once daily at the same time each morning as directed by your healthcare practitioner.',
    precautions: 'Regular blood pressure and potassium monitoring advised. Not for use in pregnancy.',
    storageCondition: 'Store at room temperature 15°C–30°C away from humidity.',
    manufacturer: 'Vanguard Cardiovascular',
    inStock: true,
  },
  {
    id: 'med-07',
    name: 'Liposomal Vitamin D3 5,000 IU',
    brand: 'Solaris Pure',
    genericName: 'Cholecalciferol with Coconut MCT',
    dosageStrength: '5,000 IU (125 mcg)',
    form: 'Softgels',
    packSize: '60 Softgels',
    category: 'vitamins',
    categoryLabel: 'Vitamins & Immunity',
    price: 19.5,
    isRxRequired: false,
    indication: 'Supports strong bone mineralization, calcium absorption, mood stability, and immune defense.',
    dosageInstructions: 'Take 1 softgel daily with a fat-containing meal for optimal absorption.',
    precautions: 'Do not exceed recommended dose unless directed by healthcare provider. Check serum 25(OH)D levels.',
    storageCondition: 'Store in a cool dry place away from heat and direct sunlight.',
    manufacturer: 'Nordic Clinical Botanicals',
    inStock: true,
    featured: true,
  },
  {
    id: 'med-08',
    name: 'Fluticasone Propionate 50mcg Nasal Spray',
    brand: 'FlutiClear',
    genericName: 'Fluticasone Propionate',
    dosageStrength: '50 mcg/spray',
    form: 'Metered Dose Nasal Spray',
    packSize: '120 Metered Sprays',
    category: 'allergy',
    categoryLabel: 'Allergy & Respiratory',
    price: 16.95,
    isRxRequired: false,
    indication: 'Comprehensive relief of nasal congestion, sinus pressure, sneezing, and itchy watery eyes.',
    dosageInstructions: 'Prime bottle before first use. Spray 1 to 2 sprays in each nostril once daily.',
    precautions: 'Blow nose gently before application. Avoid spraying directly into eyes.',
    storageCondition: 'Store upright between 4°C and 30°C. Do not freeze.',
    manufacturer: 'AeroMed Pharma',
    inStock: true,
  },
  {
    id: 'med-09',
    name: 'Accu-Check Blood Glucose Test Strips',
    brand: 'Accu-Check Active',
    genericName: 'Diagnostic Glucose Dehydrogenase Test Strips',
    dosageStrength: '50 Strips',
    form: 'Diagnostic Strips',
    packSize: 'Box of 50 Strips',
    category: 'diagnostics',
    categoryLabel: 'Devices & First Aid',
    price: 27.5,
    isRxRequired: false,
    indication: 'Quantitative blood glucose self-monitoring for diabetes management at home or clinic.',
    dosageInstructions: 'Insert strip into compatible meter. Apply tiny blood sample to designated testing window.',
    precautions: 'Keep vial tightly closed immediately after removing a test strip. Do not use expired strips.',
    storageCondition: 'Store at 2°C to 30°C in original container. Do not expose to high humidity.',
    manufacturer: 'Roche Diagnostics',
    inStock: true,
  },
  {
    id: 'med-10',
    name: 'Zinc Picolinate 50mg High-Absorption',
    brand: 'Vitalis Organics',
    genericName: 'Zinc Picolinate Elemental',
    dosageStrength: '50 mg',
    form: 'Vegetarian Capsules',
    packSize: '90 Veggie Capsules',
    category: 'vitamins',
    categoryLabel: 'Vitamins & Immunity',
    price: 15.0,
    isRxRequired: false,
    indication: 'Immune cell activation, cellular repair, collagen synthesis, and antioxidant protection.',
    dosageInstructions: 'Take 1 capsule daily with a main meal to avoid stomach upset.',
    precautions: 'Long-term high dose zinc supplementation should be paired with copper.',
    storageCondition: 'Keep tightly sealed in a dry cool place.',
    manufacturer: 'Vitalis Pure Nutrition',
    inStock: true,
  },
  {
    id: 'med-11',
    name: 'Digital Upper Arm Blood Pressure Monitor',
    brand: 'Omron Clinical Pro',
    genericName: 'IntelliSense Automatic Sphygmomanometer',
    dosageStrength: 'Standard Arm (22-42cm)',
    form: 'Medical Device',
    packSize: '1 Complete Kit',
    category: 'diagnostics',
    categoryLabel: 'Devices & First Aid',
    price: 54.0,
    isRxRequired: false,
    indication: 'High-precision blood pressure and irregular heartbeat detection with dual-user 100-reading memory.',
    dosageInstructions: 'Rest for 5 minutes before reading. Wrap cuff snug at heart level and press Start.',
    precautions: 'Clinical grade validation (AAMI/ESH). Calibrated for adult arm sizes.',
    storageCondition: 'Keep inside protective carry case at ambient temperature.',
    manufacturer: 'Omron Healthcare',
    inStock: true,
  },
  {
    id: 'med-12',
    name: 'Hydrocolloid Sterile Wound Dressing Pack',
    brand: 'DermaSafe Clinical',
    genericName: 'Sterile Hydrocolloid Healing Pads',
    dosageStrength: '10cm x 10cm',
    form: 'Adhesive Dressing',
    packSize: 'Pack of 5 Dressings',
    category: 'diagnostics',
    categoryLabel: 'Devices & First Aid',
    price: 13.5,
    isRxRequired: false,
    indication: 'Waterproof protective healing for burns, post-surgical wounds, abrasions, and diabetic ulcers.',
    dosageInstructions: 'Clean and dry wound bed thoroughly. Warm dressing between hands and adhere smoothly.',
    precautions: 'Change when gel blister expands to within 1cm of dressing edge. Single-use only.',
    storageCondition: 'Store flat in dry sterile conditions.',
    manufacturer: 'DermaSafe Healthcare',
    inStock: true,
  },
];

export interface StoreInfo {
  name: string;
  tagline: string;
  licenseNumber: string;
  leadPharmacist: string;
  phonePrimary: string;
  phoneTollFree: string;
  phoneEmergency: string;
  emailCare: string;
  emailPrescriptions: string;
  addressLine1: string;
  addressLine2: string;
  cityStateZip: string;
  coordinates: { lat: number; lng: number };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
    driveThru: string;
  };
}

export const STORE_INFO: StoreInfo = {
  name: 'CuraMed Pharmacy & Wellness Store',
  tagline: 'Authentic Medicine, Certified Clinical Pharmacists & Neighborhood Care',
  licenseNumber: 'OR-PH-49102-CL',
  leadPharmacist: 'Dr. Sarah Jenkins, PharmD, BCPS',
  phonePrimary: '(555) 234-7890',
  phoneTollFree: '+1 (800) 482-6334',
  phoneEmergency: '(555) 234-7899',
  emailCare: 'care@curamedstore.com',
  emailPrescriptions: 'info@curamedstore.com',
  addressLine1: '742 Evergreen Healthcare Blvd',
  addressLine2: 'Suite 120 (Opposite Regional Hospital, Medical Plaza North)',
  cityStateZip: 'Springfield, OR 97477',
  coordinates: { lat: 44.0462, lng: -123.022 },
  hours: {
    weekday: 'Monday – Friday: 8:00 AM – 9:00 PM',
    saturday: 'Saturday: 9:00 AM – 7:00 PM',
    sunday: 'Sunday: 10:00 AM – 5:00 PM',
    driveThru: '24/7 Drive-Through Pick-Up Window Active',
  },
};
