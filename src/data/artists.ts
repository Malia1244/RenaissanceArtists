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

export type Citation = {
  label: string;
  url: string;
};

export const sections = [
  { id: "biography", label: "Biography & Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "patrons", label: "Major Patrons" },
  { id: "artworks", label: "Featured Artworks" },
  { id: "facts", label: "Surprising Facts" },
] as const;

export function citationsFor(artist: Artist): Citation[] {
  const citations: Citation[] = [];
  if (artist.biographySource) {
    citations.push({ label: "Biography", url: artist.biographySource });
  }
  if (artist.timelineSource) {
    citations.push({ label: "Timeline", url: artist.timelineSource });
  }
  if (artist.patronsSource) {
    citations.push({ label: "Major patrons", url: artist.patronsSource });
  }
  for (const artwork of artist.artworks) {
    if (artwork.source) citations.push({ label: artwork.title, url: artwork.source });
  }
  if (artist.funFact.source) {
    citations.push({ label: "Surprising fact", url: artist.funFact.source });
  }
  return citations;
}

export const artists: Artist[] = [
  {
    id: "leonardo",
    selectorLabel: "Leonardo da Vinci",
    placeholder: false,
    fullName: "Leonardo di ser Piero da Vinci",
    lifespan: "April 15, 1452 - May 2, 1519",
    birthplace: "Anchiano, near Vinci Italy",
    artStyle:
      "Renaissance style with a blend of human psychology, he was a painter, sculptor and engineer.",
    portraitCaption:
      "Collage centered on a portrait labeled Leonardo Da Vinci, surrounded by paintings and drawings.",
    portraitSrc: publicAsset("leonardo.jpg?v=2"),
    timeline: [
      {
        year: "1452",
        event: "Leonardo da Vinci was born on April 15th in the village of Anchiano.",
      },
      {
        year: "1472",
        event: "20 year old Leonardo is accepted into the painters' guild of Florence.",
      },
      {
        year: "1482",
        event:
          'Leonardo moves to Milan to work in the service of the city\'s duke, Ludovico Sforza. He gained the title of "painter and engineer of the duke."',
      },
      {
        year: "1495 - 1498",
        event: "He painted the Last Supper.",
      },
      {
        year: "1516",
        event: "The king of France invites Leonardo to come work for him.",
      },
      {
        year: "1519",
        event: "May 2, Leonardo dies in France.",
      },
    ],
    timelineSource: "https://www.davincilife.com/timeline.html",
    patrons: [
      {
        name: "Lorenzo de’ Medici",
        detail: "Member of the Medici family.",
      },
      {
        name: "Ludovico Sforza",
        detail: "Duke of Milan and commissioned Leonardo as a painter and engineer.",
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
        detail: "Commissioned Leonardo to paint a mural of the battle of Anghiar.",
      },
    ],
    patronsSource:
      "https://www.historyextra.com/period/renaissance/leonardo-da-vinci-art-patrons-supporters-ludovico-sforza-isabella-deste-borgias/",
    artworks: [
      {
        title: "The Last Supper",
        caption: "The Last Supper",
        imageSrc: publicAsset("last-supper.png"),
        source:
          "https://cenacolovinciano.org/en/museum/the-works/the-last-supper-leonardo-da-vinci-1452-1519/",
        period:
          "Painted between 1494 and 1498. The painting was commissioned by Ludovico Sforza, the Duke of Milan. It was created for the Dominican monastery of Santa Maria delle Grazie in Milan.",
        details:
          "He was trying to learn how to incorporate light, sound, and movement. The painting includes detailed postures, expressions, and gestures to convey intense human emotions.",
        whyArt:
          "This painting is considered art because it captures Human Emotion and Soul, and includes unique techniques.",
        selectionReason:
          "I chose this painting because I believe that it has many interesting hidden details, and represents harmony and chaos.",
      },
      {
        title: "Mona Lisa",
        caption: "Mona Lisa",
        imageSrc: publicAsset("mona-lisa.png"),
        source:
          "https://www.artandobject.com/news/mona-lisa-brief-history-da-vincis-famous-painting",
        period:
          "A Famous Portrait painted by Leonardo between 1503 and 1519. The painting was commissioned by Francesco del Giocondo, a wealthy Italian silk merchant, around 1503.",
        details:
          "Most Scholars believed it was a portrait of Italian noble Lisa del Giocondo. In the painting, Mona Lisa is dressed in elegant simplicity, which draws attention to her face. His understanding of Facial anatomy gave the painting an effect of her staring at you with her mysterious smile. The painting eventually became part of the French royal collection and is now displayed at the Louvre Museum in Paris, France.",
        whyArt:
          "This painting is art because it uses advanced techniques to create a realistic portrait.",
        selectionReason:
          "I chose this painting because it is very popular, and because I like the colors.",
      },
    ],
    funFact: {
      source: "https://www.historyhit.com/facts-you-might-not-know-about-leonardo-da-vinci/",
      fact: "Leonardo Da Vinci’s biggest project was destroyed. Leonardo was Commissioned by the Duke of Milan to create a 25 feet tall structure of the Duke’s father on horseback. Leonardo spent 17 years planning the statue. Before it was completed, French forces invaded Milan in 1499. The clay sculpture was used for target practice by the victorious French soldiers, shattering it to pieces.",
    },
  },
  {
    id: "el-greco",
    selectorLabel: "El Greco",
    placeholder: false,
    fullName: "Doménikos Theotokópoulos, commonly known as El Greco.",
    lifespan:
      "October 1, 1541 (Crete, Greece which was then under the Venetian rule) - April 7, 1614 (Toledo, Spain)",
    birthplace: "Crete, Greece",
    artStyle: "Painter",
    portraitCaption: "Portrait of El Greco.",
    portraitSrc: publicAsset("el-greco.jpg"),
    biographySource: "https://www.frick.org/exhibitions/el_greco/biography",
    timeline: [
      {
        year: "1577 - 1579",
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
        year: "1603 - 1614",
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
        name: "Andrés Núñez de Madrid",
        detail:
          "Priest of Santo Tomé in Toledo. Commissioned The Burial of Count Orgaz in 1586.",
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
    patronsSource: "https://www.metmuseum.org/essays/el-greco-1541-1614",
    artworks: [
      {
        title: "The Disrobing of Christ",
        caption: "The Disrobing of Christ",
        imageSrc: publicAsset("disrobing.jpg"),
        source:
          "https://www.museodelprado.es/en/whats-on/new/one-of-el-grecos-great-masterpieces-the-disrobing/7a3d15a2-8ce3-429d-96b5-9d0f2cc0bfc7",
        period:
          "It was commissioned by Diego de Castilla in 1577 - 1579. It was painted for a room used to house religious relics in Toledo Cathedral.",
        details:
          "This painting was painted by El Greco. The scene is when Christ has ascended to Calvary and is stripped of his clothes before getting nailed to the cross. The painting is aimed to convey Christ’s physical and mental suffering. The painting was found in excellent condition. As a result, Rafael Alonso cleaned it and repaired small areas of damaged paint.",
        whyArt:
          "This painting is art because it does a wonderful job at catching the emotions, and looks pretty realistic.",
        selectionReason:
          "I chose this painting because there is so much happening in it, there are many people crowded around. I like how when you first look at the painting, you first see Christ in a bright red robe.",
      },
      {
        title: "The Burial of the Count of Orgaz",
        caption: "The Burial of the Count of Orgaz",
        imageSrc: publicAsset("burial.jpg"),
        source: "https://smarthistory.org/el-greco-burial-of-the-count-orgaz/",
        period:
          "Andrés Núñez de Madrid, the parish priest of Santo Tomé Church in Toledo, commissioned El Greco to paint The Burial of the Count of Orgaz between 1586 and 1588.",
        details:
          "He commissioned a large painting for the Count of Orgaz’s burial chapel. It depicted the miraculous story of Saints Augustine and Stephen lowering the Count into his tomb. The painting contains two separate levels, a heavenly scene above, and an earthly burial below.",
        whyArt:
          "This piece is considered art because there are so many details, and includes many vibrant colors.",
        selectionReason:
          "I chose this painting because it is very appealing to the eye, with many details and colors.",
      },
    ],
    funFact: {
      source:
        "https://news.wttw.com/2020/03/05/10-things-know-about-el-greco-including-his-brazen-offer-repaint-sistine-chapel",
      fact: "El Greco did not think that Michelangelo was a great artist. He said that Miechalangelo was good at drawing, but didn’t know anything about color. This is crazy because Michelangelo was one of the most famous artists of his time.",
    },
  },
  {
    id: "botticelli",
    selectorLabel: "Botticelli",
    placeholder: false,
    fullName: "Sandro Botticeli ( Alessandro di Mariano Filipepi )",
    lifespan: "March 1, 1445 - May 17, 1510",
    birthplace: "Florence, Italy",
    artStyle: "Painter",
    portraitCaption: "Portrait of Sandro Botticelli.",
    portraitSrc: publicAsset("botticelli.png"),
    biographySource: "https://www.biography.com/artists/sandro-botticelli",
    timeline: [
      {
        year: "1475 - 1476",
        event:
          "Botticelli created the painting called Adoration of the Magi. This painting was considered to be the start of his successful career.",
      },
      {
        year: "1477 - 1482",
        event: "Botticelli creates the Primavera.",
      },
      {
        year: "1481",
        event:
          "The Pope summoned Botticelli to fresco the walls of the Sistine Chapel. He worked with other Florence artists.",
      },
      {
        year: "1482 - 1485",
        event: "Botticelli creates the Birth of Venus.",
      },
      {
        year: "1491",
        event:
          'Botticelli temporarily stopped painting to follow the preacher Savonarola, and he likely burned some of his own "pagan" artwork.',
      },
    ],
    timelineSource: "https://www.softschools.com/timelines/sandro_botticelli_timeline/137/",
    patrons: [
      {
        name: "The Medici Family",
        detail: "Wealthy rulers and art supporters in Florence.",
      },
      {
        name: "Lorenzo di Pierfrancesco de’ Medici",
        detail:
          "A Medici family member believed to be associated with the painting Primavera and other pieces made by Bottecelli, although the exact commission is uncertain.",
      },
      {
        name: "Vespucci Family",
        detail:
          "Commissioned Botticelli to paint half of the choir screen of their church, the Ognisanti.",
      },
    ],
    patronsSource: "https://muse.jhu.edu/pub/354/oa_edited_volume/chapter/2778919",
    artworks: [
      {
        title: "The Birth of Venus",
        caption: "The Birth of Venus",
        imageSrc: publicAsset("birth-of-venus.png"),
        source: "https://www.uffizi.it/en/artworks/birth-of-venus",
        period:
          "A painting created from 1483 - 1485 by Sandro Botticelli. The work was believed to be commissioned by a member of the Medici family.",
        details:
          "The painting is a scene of the goddess of love and beauty arriving on land on the island of Cyprus on a giant seashell. Wind gods blow her towards the shore, while a young woman wearing a cloak covered in flowers waits for her arrival. At the time, paintings were commonly made on wood. However, the Birth of Venus was painted on canvas, used for decorative paintings in wealthy homes.",
        whyArt:
          "This painting was considered art because it celebrates the beauty of the naked body and it showed a subject from classical mythology rather than a Christian religious story.",
        selectionReason:
          "I chose this piece of art because of the realistic details, and unique subtle but vibrant colors.",
      },
      {
        title: "Primavera",
        caption: "Primavera",
        imageSrc: publicAsset("primavera.jpg"),
        source: "https://www.italianrenaissance.org/a-closer-look-botticellis-primavera/",
        period:
          "Sandro Botticelli created this painting between 1480 and 1482. The painting was likely commissioned by Lorenzo di Pierfrancesco de' Medici.",
        details:
          "This painting shows a scene of a group of figures in an orange grove. In the center is the Roman goddess, Venus. Above her is her blindfolded son Cupid. The tree limbs behind Cupid create an arch around Venus, making her the main subject. To the far left is Mercury, the god of the month of May uses a staff to push away the winter clouds. To the right of Mercury is a group called the Three Graces. These figures represent love, beauty and chastity which connects to romance. Cupid aiming his arrow at them symbolizes love and marriage. On the right side of the photo, we see Zephyrus, the west wind about to take a nymph named Chloris. After successfully taking her, she turns into Flora, the Spring goddess. In this painting Flora is throwing flowers that have been gathered in her dress. This symbolizes springtime and fertility. The precise meaning of this painting is unknown, but it was probably created for the marriage of Lorenzo di Pierfrancesco (a cousin of the powerful Lorenzo the Magnificent Medici) in May, 1482.",
        whyArt:
          "This painting is art because of all the techniques used such as the very light lace see-through worn by the Three Graces, and the detail that goes into their faces.",
        selectionReason: "",
      },
    ],
    funFact: {
      source: "https://www.famsf.org/learn-engage/read-watch-listen/five-things-about-botticelli",
      fact: "Botticelli is actually a nickname given to him. His older brother Giovanni’s nickname was Botticello (meaning “small barrel”). The nickname was passed down to Alessandro as “ Botticelli”.",
    },
  },
];
