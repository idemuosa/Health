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
  name: 'NewLight Health Services',
  tagline: 'Leading Healthcare Provider, Pharmacy & Wellness Center in Benin City',
  licenseNumber: 'ED-PH-88204-NL',
  leadPharmacist: 'Pharm. Wisdom Idemudia',
  phonePrimary: '09066302198',
  phoneTollFree: '09066302198',
  phoneEmergency: '09066302198',
  emailCare: 'idemudiawisdom7@gmail.com',
  emailPrescriptions: 'idemudiawisdom7@gmail.com',
  addressLine1: 'No. 4 Atamu Street, off Musheshe',
  addressLine2: 'off Upper Sakponba Road',
  cityStateZip: 'Benin City, Edo State, Nigeria',
  coordinates: { lat: 6.335, lng: 5.603 },
  hours: {
    weekday: 'Monday – Friday: 8:00 AM – 9:00 PM',
    saturday: 'Saturday: 8:00 AM – 8:00 PM',
    sunday: 'Sunday: 10:00 AM – 6:00 PM',
    driveThru: 'Emergency & Consultation Desk Active Daily',
  },
};
