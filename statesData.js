// TODO: replace with API call when available.
//
// Competent-authority directory used by the "Select State to Request
// Certification" step. Each entry mirrors the shape we expect the live
// directory endpoint to return, so swapping `STATES_DATA` for a fetch()
// result later requires no changes in the component.
//
//   id        unique slug
//   name      authority display name
//   short     friendly short name (used in toasts)
//   address   single-line mailing address
//   phone     formatted phone number
//   email     authentications inbox
//   website   official website URL
//   available whether the authority is live on this platform
//
window.STATES_DATA = [
  {
    id: "aldenmoor",
    name: "Aldenmoor Secretary of State",
    short: "Aldenmoor",
    address: "12 Civic Center Drive, Suite 100, Aldenmoor, AM 31045",
    phone: "(404) 287-6610",
    email: "authentications@sos.am.gov",
    website: "https://sos.aldenmoor.gov",
    available: true,
  },
  {
    id: "arvencrest",
    name: "Arvencrest Secretary of State",
    short: "Arvencrest",
    address: "500 State House Row, Suite 310, Arvencrest, AV 29087",
    phone: "(731) 556-4490",
    email: "records@sos.arvencrest.gov",
    website: "https://sos.arvencrest.gov",
    available: false,
  },
  {
    id: "briarcliff",
    name: "Briarcliff Secretary of State",
    short: "Briarcliff",
    address: "47 Magnolia Boulevard, Suite 220, Briarcliff, BC 18820",
    phone: "(259) 555-0173",
    email: "authentications@sos.briarcliff.gov",
    website: "https://sos.briarcliff.gov",
    available: true,
  },
  {
    id: "cedarmont",
    name: "Cedarmont Secretary of State",
    short: "Cedarmont",
    address: "9 Statehouse Plaza, Suite 600, Cedarmont, CD 40114",
    phone: "(518) 555-0142",
    email: "records@sos.cedarmont.gov",
    website: "https://sos.cedarmont.gov",
    available: true,
  },
  {
    id: "delmarva",
    name: "Delmarva Secretary of State",
    short: "Delmarva",
    address: "218 Harbor Assembly Drive, Suite 300 Crownhaven, DM 23972",
    phone: "(485) 555-0126",
    email: "authentications@sos.dm.gov",
    website: "https://sos.dm.gov",
    available: true,
  },
  {
    id: "everwood",
    name: "Everwood Secretary of State",
    short: "Everwood",
    address: "330 Liberty Square, Suite 145, Everwood, EW 55210",
    phone: "(612) 555-0188",
    email: "authentications@sos.everwood.gov",
    website: "https://sos.everwood.gov",
    available: true,
  },
  {
    id: "granitebay",
    name: "Granite Bay Secretary of State",
    short: "Granite Bay",
    address: "1400 Quarry Road, Suite 75, Granite Bay, GB 87330",
    phone: "(775) 555-0119",
    email: "records@sos.granitebay.gov",
    website: "https://sos.granitebay.gov",
    available: false,
  },
  {
    id: "havenport",
    name: "Havenport Secretary of State",
    short: "Havenport",
    address: "82 Marina Court, Suite 410, Havenport, HP 02144",
    phone: "(207) 555-0164",
    email: "authentications@sos.havenport.gov",
    website: "https://sos.havenport.gov",
    available: true,
  },
  {
    id: "oldfoundland",
    name: "Oldfoundland Secretary of State",
    short: "Oldfoundland",
    address: "100 Commonwealth Hall, Suite 400, Ashbourne, Oldfoundland 23984",
    phone: "(394) 555-0148",
    email: "records@sos.oldfoundland.example",
    website: "https://sos.oldfoundland.example",
    available: true,
  },
  {
    id: "westmarch",
    name: "Westmarch Secretary of State",
    short: "Westmarch",
    address: "275 Frontier Avenue, Suite 90, Westmarch, WM 71309",
    phone: "(303) 555-0151",
    email: "authentications@sos.westmarch.gov",
    website: "https://sos.westmarch.gov",
    available: true,
  },
];
