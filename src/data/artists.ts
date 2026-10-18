function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export type TimelineEvent = {
  year: string;
  event: string;
};

export type Patron = {
  name: string;
  detail: string;
};

export type Artwork = {
  title: string;
  caption: string;
  imageSrc?: string;
  source: string;
  period: string;
  details: string;
  whyArt: string;
  selectionReason: string;
};

export type Artist = {
  id: string;
  selectorLabel: string;
  placeholder: boolean;
  fullName: string;
  lifespan: string;
  birthplace: string;
  artStyle: string;
  portraitCaption: string;
  portraitSrc?: string;
  biographySource?: string;
  timeline: TimelineEvent[];
  timelineSource: string;
  patrons: Patron[];
  patronsSource: string;
  artworks: Artwork[];
  funFact: {
    source: string;
    fact: string;
  };
};

export const sections = [
  { id: "biography", label: "Biography & Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "patrons", label: "Major Patrons" },
  { id: "artworks", label: "Featured Artworks" },
  { id: "facts", label: "Surprising Facts" },
] as const;

function placeholderArtist(index: 3): Artist {
  return {
    id: `artist-${index}`,
    selectorLabel: `Artist ${index}`,
    placeholder: true,
    fullName: "[ Insert Full Name ]",
    lifespan: "[ Insert Life Span Dates ]",
    birthplace: "[ Insert Place of Birth ]",
    artStyle: "[ Insert Style & Focus ]",
    portraitCaption: `Photo Placeholder: Artist ${index} Portrait`,
    timeline: [
      { year: "[ Year ]", event: "[ Milestone Event ]" },
      { year: "[ Year ]", event: "[ Milestone Event ]" },
      { year: "[ Year ]", event: "[ Milestone Event ]" },
    ],
    timelineSource: "[ Insert Reference Link ]",
    patrons: [
      {
        name: "[ Patron Name / Organization ]",
        detail: "[ Context / Commission details ]",
      },
      {
        name: "[ Patron Name / Organization ]",
        detail: "[ Context / Commission details ]",
      },
    ],
    patronsSource: "[ Insert Reference Link ]",
    artworks: [1, 2].map((artworkIndex) => ({
      title: `[ Artwork Title ${artworkIndex} ]`,
      caption: `[ Photo Placeholder: Artwork Title ${artworkIndex} ]`,
      source: "[ Insert Reference Link ]",
      period: "[ Date range & Patron details ]",
      details: "[ Artwork description and execution ]",
      whyArt: "[ Analysis ]",
      selectionReason: "[ Personal commentary ]",
    })),
    funFact: {
      source: "[ Insert Reference Link ]",
      fact: "[ Highlighting notable fact or historical anecdote ]",
    },
  };
}

export const artists: Artist[] = [
  {
    id: "leonardo",
    selectorLabel: "Leonardo da Vinci",
    placeholder: false,
    fullName: "Leonardo di ser Piero da Vinci",
    lifespan: "April 15, 1452 – May 2, 1519",
    birthplace: "Anchiano",
    artStyle: "Renaissance style with a blend of human psychology",
    portraitCaption: "Collage centered on a portrait labeled Leonardo Da Vinci, surrounded by paintings and drawings.",
    portraitSrc: publicAsset("leonardo.jpg?v=2"),
    timeline: [
      {
        year: "1452",
        event: "Born on April 15th in the village of Anchiano.",
      },
      {
        year: "1472",
        event:
          "20-year-old Leonardo is accepted into the painters' guild of Florence.",
      },
      {
        year: "1482",
        event:
          'Moves to Milan to work in the service of the city\'s duke, Ludovico Sforza; gained the title of "painter and engineer of the duke."',
      },
      {
        year: "1516",
        event: "The King of France invites Leonardo to come work for him.",
      },
      {
        year: "1519",
        event: "Dies on May 2 in France.",
      },
    ],
    timelineSource: "https://davincilife.com/timeline.html",
    patrons: [
      {
        name: "Lorenzo de’ Medici",
        detail: "Member of the Medici family.",
      },
      {
        name: "Ludovico Sforza",
        detail: "Duke of Milan.",
      },
      {
        name: "Cesare Borgia",
        detail: "Son of Pope Alexander VI.",
      },
      {
        name: "Confraternity of the Immaculate Conception",
        detail:
          "Commissioned Leonardo to paint an altarpiece in the Church of San Francesco Grande in 1483.",
      },
      {
        name: "Republic of Florence",
        detail:
          "Commissioned Leonardo to paint a mural of the battle of Anghiari.",
      },
    ],
    patronsSource:
      "https://historyextra.com/period/renaissance/leonardo-da-vinci-art-patrons-supporters-ludovico-sforza-isabella-deste-borgias",
    artworks: [
      {
        title: "The Last Supper",
        caption: "The Last Supper",
        imageSrc: publicAsset("last-supper.png"),
        source:
          "https://cenacolovinciano.org/en/museum/the-works/the-last-supper-leonardo-da-vinci-1452-1519",
        period:
          "Painted between 1494 and 1498. Commissioned by Ludovico Sforza, the Duke of Milan, for the Dominican monastery of Santa Maria delle Grazie in Milan.",
        details:
          "Leonardo was trying to learn how to incorporate light, sound, and movement. The painting includes detailed postures, expressions, and gestures to convey intense human emotions.",
        whyArt:
          "Captures Human Emotion and Soul, and includes unique techniques.",
        selectionReason:
          "Chosen because it has many interesting hidden details and represents harmony and chaos.",
      },
      {
        title: "Mona Lisa",
        caption: "Mona Lisa",
        imageSrc: publicAsset("mona-lisa.png"),
        source:
          "https://artandobject.com/news/mona-lisa-brief-history-da-vincis-famous-painting",
        period:
          "A famous portrait painted by Leonardo between 1503 and 1519. Commissioned by Francesco del Giocondo, a wealthy Italian silk merchant, around 1503.",
        details:
          "Most scholars believe it was a portrait of Italian noble Lisa del Giocondo. She is dressed in elegant simplicity, which draws attention to her face. His understanding of facial anatomy gave the painting an effect of her staring at you with her mysterious smile. Eventually became part of the French royal collection and is now displayed at the Louvre Museum in Paris, France.",
        whyArt: "Uses advanced techniques to create a realistic portrait.",
        selectionReason: "Chosen because it is very popular.",
      },
    ],
    funFact: {
      source:
        "https://historyhit.com/facts-you-might-not-know-about-leonardo-da-vinci",
      fact: "Leonardo Da Vinci’s biggest project was destroyed. Leonardo was commissioned by the Duke of Milan to create a 25-foot-tall structure of the Duke’s father on horseback. Leonardo spent 17 years planning the statue. Before it was completed, French forces invaded Milan in 1499.",
    },
  },
  {
    id: "el-greco",
    selectorLabel: "El Greco",
    placeholder: false,
    fullName: "Domenikos Theotokopoulos",
    lifespan: "Born in 1541",
    birthplace: "Crete",
    artStyle: "Painter",
    portraitCaption: "Portrait of El Greco.",
    portraitSrc: publicAsset("el-greco.jpg"),
    biographySource: "https://www.frick.org/exhibitions/el_greco/biography",
    timeline: [
      {
        year: "1577–1579",
        event: "He painted The Disrobing of Christ.",
      },
      {
        year: "1587",
        event: "He painted the Burial of the Count of Orgaz.",
      },
      {
        year: "1590",
        event: "He painted the St. Louis King of France with a Page.",
      },
      {
        year: "1599",
        event: "He painted the View of Toledo.",
      },
      {
        year: "1613",
        event: "He painted the St. Idelfonso.",
      },
    ],
    timelineSource: "https://www.wikiart.org/en/el-greco",
    patrons: [
      {
        name: "Diego de Castilla",
        detail:
          "Dean of Toledo Cathedral. Commissioned El Greco to paint three altarpieces for the Church of Santo Domingo el Antiguo in Toledo and was also instrumental in the commission of the Espolio (The Disrobing of Christ) for the cathedral vestiary.",
      },
      {
        name: "Priest of Santo Tomé in Toledo",
        detail: "Commissioned The Burial of Count Orgaz in 1586.",
      },
      {
        name: "Giulio Clovio",
        detail:
          "Secured quarters for El Greco in the palace of Cardinal Alessandro Farnese by providing a letter of recommendation.",
      },
      {
        name: "Cardinal Alessandro Farnese",
        detail: "Provided housing/quarters for El Greco in his Roman palace.",
      },
      {
        name: "Philip II",
        detail:
          "El Greco made an unsuccessful bid for royal patronage/commissions from him in Madrid.",
      },
    ],
    patronsSource: "",
    artworks: [
      {
        title: "The Disrobing of Christ",
        caption: "The Disrobing of Christ",
        imageSrc: publicAsset("disrobing.jpg"),
        source:
          "https://www.museodelprado.es/en/whats-on/new/one-of-el-grecos-great-masterpieces-the-disrobing/7a3d15a2-8ce3-429d-96b5-9d0f2cc0bfc7",
        period:
          "Commissioned by Diego de Castilla in 1577–1579. Painted for a room used to house religious relics in Toledo Cathedral.",
        details:
          "This painting was painted by El Greco. The scene is when Christ has ascended to Calvary and is stripped of his clothes before getting nailed to the cross. The painting is aimed to convey Christ’s physical and mental suffering. The painting was found in excellent condition. As a result, Rafael Alonso cleaned it and repaired small areas of damaged paint.",
        whyArt:
          "It does a wonderful job at catching the emotions, and looks pretty realistic.",
        selectionReason:
          "Chosen because there is so much happening in it, there are many people crowded around. When you first look at the painting, you first see Christ in a bright red robe.",
      },
      {
        title: "The Burial of the Count of Orgaz",
        caption: "The Burial of the Count of Orgaz",
        imageSrc: publicAsset("burial.jpg"),
        source: "https://smarthistory.org/el-greco-burial-of-the-count-orgaz/",
        period:
          "Andrés Núñez de Madrid, the parish priest of Santo Tomé Church in Toledo, commissioned El Greco to paint The Burial of the Count of Orgaz between 1586 and 1588.",
        details:
          "A large painting for the Count of Orgaz’s burial chapel. It depicted the miraculous story of Saints Augustine and Stephen lowering the Count into his tomb.",
        whyArt:
          "There are so many details, and it includes many vibrant colors.",
        selectionReason:
          "Chosen because it is very appealing to the eye, with many details and colors.",
      },
    ],
    funFact: {
      source:
        "https://news.wttw.com/2020/03/05/10-things-know-about-el-greco-including-his-brazen-offer-repaint-sistine-chapel",
      fact: "El Greco did not think that Miechalangelo was a great artist. He said that Miechalangelo was good at drawing, but didn’t know anything about color. This is crazy because Miechalangelo was one of the most famous artists of his time.",
    },
  },
  placeholderArtist(3),
];
