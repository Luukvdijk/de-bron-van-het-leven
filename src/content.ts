// All copy, schedule, photos and contact details for the site live here.

export const site = {
  name: "De Bron van het Levende Woord",
  legalName: "Stichting De Bron van het Levende Woord",
  street: "Transistorstraat 18",
  postcode: "1322 CE",
  city: "Almere",
  phone: "06 1279 8542",
  phoneHref: "tel:+31612798542",
  email: "info@bronvhlevendewoord.nl",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Transistorstraat+18+1322+CE+Almere",
  kvk: "32146755",
  rsin: "820433858",
  leaders: "Apostel Ivan & Joyce van Geene",
};

export const nav = [
  { href: "#bezoek", label: "Eerste bezoek" },
  { href: "#over-ons", label: "Over ons" },
  { href: "#samenkomsten", label: "Samenkomsten" },
  { href: "#agenda", label: "Agenda" },
  { href: "#ontstaan", label: "Ons verhaal" },
  { href: "#contact", label: "Contact" },
];

const uploads = "https://www.bronvhlevendewoord.nl/wp-content/uploads";

export const photos = {
  heroArch: {
    src: `${uploads}/2023/04/IMG-20230409-WA0000-682x1024.jpg`,
    alt: "Kinderen en volwassenen dansen met kleurrijke vlaggen tijdens de dienst",
  },
  heroCircle: {
    src: `${uploads}/2023/04/9-1024x683.jpg`,
    alt: "Vrouwen dansen met oranje en gele doeken",
  },
  congregation: {
    src: `${uploads}/2023/04/2-1024x682.jpg`,
    alt: "Gemeenteleden tijdens de eredienst",
  },
  shofar: {
    src: `${uploads}/2019/05/IMG_0059-1024x683.jpg`,
    alt: "Een vrouw blaast op de sjofar",
  },
  preaching: {
    src: `${uploads}/2019/05/IMG_0020-1024x683.jpg`,
    alt: "Prediking voor de gemeente",
  },
  logo: {
    src: `${uploads}/2023/03/De-Bron-van-het-Levende-Woord-text-logo-white-orange.png`,
    alt: "De Bron van het Levende Woord",
    width: 1758,
    height: 1027,
  },
};

export const gallery = [
  { src: `${uploads}/2023/04/4-1024x682.jpg`, alt: "Aanbidding met een rode vlag", span: "col-span-2 row-span-2" },
  { src: `${uploads}/2023/04/13-1024x682.jpg`, alt: "Kinderen dansen voorin de zaal", span: "" },
  { src: `${uploads}/2023/04/6-1024x683.jpg`, alt: "Dansers en een sjofar", span: "row-span-2" },
  { src: `${uploads}/2019/05/IMG_0002-1024x683.jpg`, alt: "De band op het podium", span: "" },
  { src: `${uploads}/2023/04/10-1024x682.jpg`, alt: "Feestelijk gedekte tafels", span: "col-span-2" },
  { src: `${uploads}/2023/04/5-1024x682.jpg`, alt: "Een groep met hun certificaat", span: "" },
  { src: `${uploads}/2023/04/12-1024x682.jpg`, alt: "Jongeren dansen samen", span: "" },
];

export const hero = {
  intro:
    "Een plek van aanbidding, herstel en verbondenheid in Almere. Elke zondag om 10:00 uur zijn jij en je gezin van harte welkom.",
};

export const visit = {
  intro:
    "Wil je meer weten over het geloof in God als de Vader, de Zoon en de Heilige Geest? Dan zijn jij en je gezin van harte welkom.",
  steps: [
    {
      icon: "music",
      when: "Elke zondag, 10:00 uur",
      title: "De eredienst",
      text: "We komen samen om God te aanbidden, met gebed, zang, bijbellezing en de prediking van het Woord.",
    },
    {
      icon: "child",
      when: "Tijdens de dienst",
      title: "Kinderfeest voor 0 tot 11 jaar",
      text: "De kinderen leren op een speelse manier over God en hebben plezier met elkaar.",
    },
    {
      icon: "cup",
      when: "Na afloop",
      title: "Koffie en een broodje",
      text: "Na de dienst nodigen we je graag uit om elkaar in een ontspannen sfeer te ontmoeten, te praten en te genieten van een kopje koffie en een broodje.",
    },
    {
      icon: "pin",
      when: "Waar",
      title: "Transistorstraat 18, Almere",
      text: "Je vindt ons op Transistorstraat 18, 1322 CE Almere.",
      link: { href: site.mapsUrl, label: "Plan je route" },
    },
  ],
};

export const about = {
  statementStart: "Wij zijn een gemeenschap met een apostolisch-profetische roeping om de",
  statementAccent: "verbrokenen van hart",
  statementEnd: "te verlossen en te herstellen.",
  paragraphs: [
    "We leiden mensen op in een levensstijl van aanbidding en profetische voorbede. Ons doel is een positieve impact op de natiën, door de boodschap van liefde, hoop en verlossing te verspreiden.",
    "We bouwen aan een gemeenschap van gelovigen die elkaar steunen in hun persoonlijke en geestelijke groei. Iedereen die zoekt naar een plek van geestelijke verrijking en verbondenheid is welkom.",
  ],
  leadersText:
    "Met hen aan het roer is onze gemeente toegewijd aan het dienen van Jezus en het verspreiden van Zijn liefde.",
};

// Weekday: 0 = zondag ... 6 = zaterdag. Month: 0 = januari. nth -1 = laatste van de maand.
export type Rule =
  | { kind: "weekly"; weekday: number }
  | { kind: "monthly"; weekday: number; nth: number[]; months?: number[] };

export type Gathering = {
  id: string;
  title: string;
  when: string;
  time?: string;
  audience?: string;
  description: string;
  group: "zondag" | "week" | "ontmoeting";
  rule: Rule;
  inAgenda: boolean;
};

export const gatherings: Gathering[] = [
  {
    id: "eredienst",
    title: "Eredienst",
    when: "Elke zondag",
    time: "10:00 tot 13:00 uur",
    description: "Samen God aanbidden met gebed, zang, bijbellezing en prediking.",
    group: "zondag",
    rule: { kind: "weekly", weekday: 0 },
    inAgenda: true,
  },
  {
    id: "kinderfeest",
    title: "Kinderfeest",
    when: "Elke zondag",
    time: "10:00 tot 13:00 uur",
    audience: "0 tot 11 jaar",
    description: "Activiteiten voor kinderen, gericht op het leren over God en plezier maken.",
    group: "zondag",
    rule: { kind: "weekly", weekday: 0 },
    inAgenda: false,
  },
  {
    id: "avondmaal",
    title: "Avondmaalviering",
    when: "Eerste zondag van de maand",
    time: "tijdens de eredienst",
    description: "Het gedenken van het laatste avondmaal van Jezus met brood en wijn.",
    group: "zondag",
    rule: { kind: "monthly", weekday: 0, nth: [1] },
    inAgenda: true,
  },
  {
    id: "celgroepen",
    title: "Celgroepen",
    when: "Elke dinsdag",
    time: "19:00 tot 21:00 uur",
    description: "Kleine groepen waarin we samen bidden, de Bijbel bestuderen en elkaar steunen.",
    group: "week",
    rule: { kind: "weekly", weekday: 2 },
    inAgenda: true,
  },
  {
    id: "bijbelstudie",
    title: "Bijbelstudie en bidstond",
    when: "Elke vrijdag",
    time: "20:00 tot 21:30 uur",
    description: "De Bijbel bestuderen om te groeien in kennis en begrip van God en Zijn plan.",
    group: "week",
    rule: { kind: "weekly", weekday: 5 },
    inAgenda: true,
  },
  {
    id: "tienerdienst",
    title: "Tienerdienst",
    when: "Tweede en vierde vrijdag",
    time: "19:00 tot 21:00 uur",
    audience: "12 tot 15 jaar",
    description: "Bijbelstudie en gesprekken over onderwerpen die bij hun leeftijd passen.",
    group: "week",
    rule: { kind: "monthly", weekday: 5, nth: [2, 4] },
    inAgenda: true,
  },
  {
    id: "vrouwen",
    title: "Vrouwen bij de Bron",
    when: "Laatste vrijdag van de maand",
    audience: "Vrouwen",
    description: "Vrouwen komen samen om te delen, te bidden en te groeien in hun geloof.",
    group: "ontmoeting",
    rule: { kind: "monthly", weekday: 5, nth: [-1] },
    inAgenda: true,
  },
  {
    id: "man-of-faith",
    title: "Man of Faith",
    when: "Tweede zaterdag van februari, april, juni, augustus, oktober en december",
    audience: "Mannen",
    description: "Mannen bemoedigen elkaar en groeien samen in hun geloof.",
    group: "ontmoeting",
    rule: { kind: "monthly", weekday: 6, nth: [2], months: [1, 3, 5, 7, 9, 11] },
    inAgenda: true,
  },
];

export const gatheringGroups = [
  { id: "zondag", label: "Op zondag" },
  { id: "week", label: "Doordeweeks" },
  { id: "ontmoeting", label: "Voor mannen en vrouwen" },
] as const;

export const story = {
  intro: "Onze kerkgemeenschap heeft Jezus Christus als grondlegger en hoeksteen.",
  steps: [
    {
      when: "Het begin",
      title: "Een verlangen voor Almere",
      text: "Een aantal jaren geleden hoorden we persoonlijk de stem van de Heer tot ons spreken. Er ontstond een verlangen om Almere, waar we al vele jaren met plezier wonen, dichter bij Jezus te brengen.",
    },
    {
      when: "Een tijd van gebed",
      title: "Wachten op Zijn leiding",
      text: "De Heilige Geest had onze harten al jarenlang voorbereid. In verootmoediging en volharding vroegen we de Here om richting en wijsheid, zoals in Psalm 25:1-6.",
    },
    {
      when: "Vier jaar later",
      title: "Helpen bouwen",
      text: "Door genade mochten we een voorgangersechtpaar helpen met het opstarten van een nieuwe gemeente in Almere. Na een tijd van bouwen sprak de Heer door profeten: het was tijd om verder te trekken en de staf over te dragen.",
    },
    {
      when: "Februari 2009",
      title: "De Bron van het Levende Woord",
      text: "Na opnieuw gebed om raad en strategie mochten we ons verheugen over de geboorte van Gods huis. Samen met ons gezin, de leiders, broeders en zusters en de vele kerken waarmee we samenwerken in Almere en daarbuiten.",
    },
    {
      when: "Vandaag",
      title: "Dienstbaar in de stad",
      text: "Met Apostel Ivan & Joyce van Geene aan het roer willen we door onze handel en wandel in de liefde van Christus laten zien wie Jezus is. We stellen ons dienstbaar op en zijn er waar onze medemens nood heeft.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Ik ben zo dankbaar voor de krachtige profetische aanbidding bij De Bron van het Levende Woord. Het heeft me geholpen om meer intimiteit met God te ervaren en me meer bewust te zijn van Zijn aanwezigheid in mijn leven.",
    name: "A. Jansen",
  },
  {
    quote:
      "Als nieuwkomer in Almere voelde ik me soms eenzaam en verloren, maar de gemeenschap bij De Bron heeft me met open armen ontvangen en me geholpen om me thuis te voelen.",
    name: "S. van der Meer",
  },
  {
    quote:
      "Ik ben zo dankbaar dat ik de Bijbelschool bij De Bron heb kunnen volgen. Het heeft me geholpen om te groeien in mijn kennis van Gods Woord en om me voor te bereiden op mijn roeping.",
    name: "J.W. Bakker",
  },
  {
    quote:
      "De Bron heeft me geholpen om een diepere verbinding te vinden met God en met anderen. Hun visie om de liefde van Jezus te verkondigen is een inspiratie om ook te leven voor dienen en liefhebben.",
    name: "A. de Vries",
  },
];

export const marqueeWords = ["Aanbidding", "Gebed", "Het Woord", "Profetie", "Herstel", "Gemeenschap", "Almere"];
