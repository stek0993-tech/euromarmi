import { createFileRoute, Link } from "@tanstack/react-router";
import { MaterialsHall } from "@/components/MaterialsHall";
import heroAmbiente from "@/assets/hero-ambiente.jpg";
import workKitchen from "@/assets/work-kitchen.jpg";
import workDetail from "@/assets/work-detail.jpg";
import logoEuromarmi from "@/assets/euromarmi-logo.png";
import logoXtone from "@/assets/partners/xtone.png";
import logoCosentino from "@/assets/partners/cosentino.png";
import logoLaminam from "@/assets/partners/laminam.png";
import logoNeolith from "@/assets/partners/neolith.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import xtAdamantina from "@/assets/xtone/adamantina.jpg";
import xtAlpinus from "@/assets/xtone/alpinus.jpg";
import xtAndromeda from "@/assets/xtone/andromeda.jpg";
import xtBaobab from "@/assets/xtone/baobab.jpg";
import xtBlackCosmic from "@/assets/xtone/black-cosmic.jpg";
import xtBlueRoma from "@/assets/xtone/blue-roma.jpg";
import xtCycloneBlack from "@/assets/xtone/cyclone-black.jpg";
import xtMontBlanc from "@/assets/xtone/mont-blanc.jpg";
import xtPangea from "@/assets/xtone/pangea.jpg";
import xtRomaImperiale from "@/assets/xtone/roma-imperiale.jpg";
import xtSelvaggioGreen from "@/assets/xtone/selvaggio-green.jpg";
import xtTremorDark from "@/assets/xtone/tremor-dark.jpg";
import xtViaLactea from "@/assets/xtone/via-lactea.jpg";
import xt2AgedClay from "@/assets/xtone2/aged-clay.jpg";
import xt2AlpiVerde from "@/assets/xtone2/alpi-verde.jpg";
import xt2AlpinusWhite from "@/assets/xtone2/alpinus-white.jpg";
import xt2Amazonite from "@/assets/xtone2/amazonite.jpg";
import xt2AndesBlue from "@/assets/xtone2/andes-blue.jpg";
import xt2AntiqueGold from "@/assets/xtone2/antique-gold.jpg";
import xt2ArsBeige from "@/assets/xtone2/ars-beige.jpg";
import xt2AstanaGrey from "@/assets/xtone2/astana-grey.jpg";
import xt2BottegaAcero from "@/assets/xtone2/bottega-acero.jpg";
import xt2BottegaAntracita from "@/assets/xtone2/bottega-antracita.jpg";
import xt2BottegaCaliza from "@/assets/xtone2/bottega-caliza.jpg";
import xt2BrecciaImperiale from "@/assets/xtone2/breccia-imperiale.jpg";
import xt2CalacattaAntico from "@/assets/xtone2/calacatta-antico.jpg";
import xt2CalacattaGold from "@/assets/xtone2/calacatta-gold.jpg";
import xt2CalacattaGreen from "@/assets/xtone2/calacatta-green.jpg";
import xt2CalacattaViola from "@/assets/xtone2/calacatta-viola.jpg";
import xt2Calatorao from "@/assets/xtone2/calatorao.jpg";
import xt2Camouflage from "@/assets/xtone2/camouflage.jpg";
import xt2CeppoCarabelas from "@/assets/xtone2/ceppo-carabelas.jpg";
import xt2Ele from "@/assets/xtone2/ele.jpg";
import xt2EwoodCamel from "@/assets/xtone2/ewood-camel.jpg";
import xt2FioriDiBosco from "@/assets/xtone2/fiori-di-bosco.jpg";
import xt2GlemWhite from "@/assets/xtone2/glem-white.jpg";
import xt2InvisibleWhite from "@/assets/xtone2/invisible-white.jpg";
import xt2LiemBlack from "@/assets/xtone2/liem-black.jpg";
import xt2LiemDark from "@/assets/xtone2/liem-dark.jpg";
import xt2MallorcaCaliza from "@/assets/xtone2/mallorca-caliza.jpg";
import xt2MontrealWhite from "@/assets/xtone2/montreal-white.jpg";
import xt2Navona from "@/assets/xtone2/navona.jpg";
import xt2Neda from "@/assets/xtone2/neda.jpg";
import xt2Negresco from "@/assets/xtone2/negresco.jpg";
import xt2NyloNoir from "@/assets/xtone2/nylo-noir.jpg";
import xt2OrobicoDark from "@/assets/xtone2/orobico-dark.jpg";
import xt2PaonazzoBiondo from "@/assets/xtone2/paonazzo-biondo.jpg";
import xt2PietraSicilia from "@/assets/xtone2/pietra-sicilia.jpg";
import xt2PortLaurent from "@/assets/xtone2/port-laurent.jpg";
import xt2StatuarioVenato from "@/assets/xtone2/statuario-venato.jpg";
import xt2TadelaktSand from "@/assets/xtone2/tadelakt-sand.jpg";
import xt2TajMahal from "@/assets/xtone2/taj-mahal.jpg";
import xt2Tura from "@/assets/xtone2/tura.jpg";
import xt2Vendome from "@/assets/xtone2/vendome.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Euromarmi — Lavorazione Marmi e Gres Porcellanato" },
      {
        name: "description",
        content:
          "Lavorazione artigianale di marmi, graniti e gres porcellanato per piani cucina, bagni e rivestimenti su misura. Vendita lastre e materiali pregiati.",
      },
      { property: "og:title", content: "Euromarmi — Marmi e Gres Porcellanato" },
      {
        property: "og:description",
        content:
          "Superfici sartoriali in marmo, granito e gres porcellanato per architettura d'interni d'eccellenza.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", title: "Piani Cucina & Bagno", to: "/piani-cucina-bagno" as const },
  { n: "02", title: "Rivestimenti Su Misura", to: "/rivestimenti" as const },
  { n: "03", title: "Scale e Complementi", to: "/scale-complementi" as const },
  { n: "04", title: "Arte Funeraria", to: "/arte-funeraria" as const },
];

const gallery = [
  { img: gallery1, cat: "Cucina", name: "Isola in marmo Calacatta" },
  { img: gallery2, cat: "Bagno", name: "Vanity in marmo bianco" },
  { img: gallery3, cat: "Scale", name: "Scala scenografica" },
  { img: gallery4, cat: "Arte Funeraria", name: "Monumento in marmo" },
  { img: workKitchen, cat: "Cucina", name: "Piano in pietra scura" },
  { img: workDetail, cat: "Dettaglio", name: "Giunzione millimetrica" },
];

const partners = [
  { name: "Cosentino", logo: logoCosentino },
  { name: "XTONE", logo: logoXtone },
  { name: "Laminam", logo: logoLaminam },
  { name: "Neolith", logo: logoNeolith },
];

const materials = [
  {
    cat: "Quarzite",
    name: "Adamantina",
    img: xtAdamantina,
    origin: "America",
    variation: "Forte · retroilluminabile",
    finishes: "Lucida · 100284008 · G1222",
    desc: "Venature biancastre marcate prendono forma su un fondo dai toni verdastri. L'eleganza della quarzite dona agli ambienti un'estetica inimitabile, esaltata dalla possibilità di retroilluminare la lastra.",
  },
  {
    cat: "Granito",
    name: "Alpinus",
    img: xtAlpinus,
    origin: "America",
    variation: "Moderata · retroilluminabile",
    finishes: "Lucida · 100278109 · G1209",
    desc: "Di carattere esotico e audace, Alpinus porta la natura negli spazi con toni cremosi e una struttura venata che crea ambienti sofisticati. Le qualità del granito si esaltano quando la luce cade sulla superficie.",
  },
  {
    cat: "Granito",
    name: "Andromeda",
    img: xtAndromeda,
    origin: "Asia",
    variation: "Moderata",
    finishes: "Lucida · 100278088 · G1206",
    desc: "La luminosità e l'irregolarità di questo granito si traducono in una superficie naturale dai toni verdastri, punteggiata da piccoli pigmenti granata. Andromeda si adatta a qualsiasi spazio grazie al suo fascino estetico.",
  },
  {
    cat: "Granito",
    name: "Baobab",
    img: xtBaobab,
    origin: "Africa",
    variation: "Forte",
    finishes: "Lucida · 100278105 · G1226",
    desc: "La bellezza più pura raggiunge il massimo splendore grazie alle gemme blu intenso che accompagnano il disegno di Baobab. Una scelta che arricchisce l'ambiente e si intensifica con l'illuminazione della superficie.",
  },
  {
    cat: "Granito",
    name: "Black Cosmic",
    img: xtBlackCosmic,
    origin: "America",
    variation: "Forte",
    finishes: "Lucida · 100278089 · G1208 · Leather · 100305550",
    desc: "Intenso ed esclusivo, Black Cosmic ricrea uno spettacolo astrale in cui minuziosi dettagli dorati e argentati affiorano sulla superficie naturale. La finitura lucida produce un effetto radiante di grande valore decorativo.",
  },
  {
    cat: "Quarzite",
    name: "Blue Roma",
    img: xtBlueRoma,
    origin: "America",
    variation: "Forte",
    finishes: "Lucida · 100278086 · G1213 · Honed · 100285062",
    desc: "Dall'aspetto avvolgente, esalta il contrasto cromatico tra l'azzurro grigio della pietra e le venature ramate della sua struttura scenografica. La quarzite blu diventa il punto focale della stanza.",
  },
  {
    cat: "Quarzite",
    name: "Cyclone Black",
    img: xtCycloneBlack,
    origin: "America",
    variation: "Forte",
    finishes: "Lucida · 100317208 · G1218 · Leather · 100317198",
    desc: "Di forte personalità, Cyclone sorprende con un fondo scuro attraversato da infinite venature incrociate che emulano un cielo in tempesta, in un contrasto netto tra bianco e nero. Un aspetto uniforme che dona distinzione ed esclusività.",
  },
  {
    cat: "Quarzite",
    name: "Mont Blanc",
    img: xtMontBlanc,
    origin: "America",
    variation: "Lieve",
    finishes: "Lucida · 100267161 · G1214 · Honed · 100278112",
    desc: "Mont Blanc rende omaggio alla quarzite bianca senza tempo con una palette che combina toni beige, nude e tortora. Il fondo bianco avorio e le sue venature richiamano la bellezza del paesaggio alpino.",
  },
  {
    cat: "Granito",
    name: "Pangea",
    img: xtPangea,
    origin: "America",
    variation: "Forte · retroilluminabile",
    finishes: "Lucida · 100278103 · G1224",
    desc: "Dall'estetica di grande impatto, Pangea presenta l'unione di quarzo e feldspato dando vita a un'autentica esplosione cristallina. Valorizzabile con la retroilluminazione, è una delle collezioni più esclusive per l'interior design.",
  },
  {
    cat: "Quarzite",
    name: "Roma Imperiale",
    img: xtRomaImperiale,
    origin: "America",
    variation: "Forte",
    finishes: "Lucida · 100278108 · G1213 · Honed · 100305552",
    desc: "Bellezza incomparabile ed eleganza innata: Roma Imperiale è la sintesi tra l'armonia del suo cromatismo e la complessità della struttura venata. Toni beige e sfumature terrose per spazi di grande personalità.",
  },
  {
    cat: "Granito",
    name: "Selvaggio Green",
    img: xtSelvaggioGreen,
    origin: "America",
    variation: "Forte",
    finishes: "Lucida · 100304425 · G1213 · Leather · 100304424",
    desc: "Selvaggio Green è una delle pietre naturali più sorprendenti della selezione Altissima. Si distingue per le ampie linee nere che attraversano il fondo verde scuro, dando allo spazio un carattere inconfondibile.",
  },
  {
    cat: "Quarzite",
    name: "Tremor Dark",
    img: xtTremorDark,
    origin: "America",
    variation: "Forte",
    finishes: "Lucida · 100317006 · G1215 · Leather · 100316999",
    desc: "Scuro, audace ed elegante: Tremor veste gli spazi di complessità e bellezza. Le onde morbide disegnate sulla superficie mostrano venature ambra, grigio e bianco che ricordano i corsi d'acqua cristallini dentro la montagna.",
  },
  {
    cat: "Granito",
    name: "Via Lactea",
    img: xtViaLactea,
    origin: "America",
    variation: "Lieve",
    finishes: "Lucida · 100266527 · G1233",
    desc: "Sottigliezza, eleganza e delicatezza caratterizzano questo granito. Il nero intenso della superficie, attraversato da venature lineari dai colori tenui, crea spazi di grande personalità.",
  },
  {
    cat: "Cemento",
    name: "Aged Clay",
    img: xt2AgedClay,
    origin: "Naturale",
    variation: "Effetto argilla",
    finishes: "Media · uniforme",
    desc: "Superficie effetto cemento dal tono caldo terracotta, con una texture materica vellutata che richiama l'argilla invecchiata. Ideale per ambienti contemporanei dal carattere caldo ed essenziale.",
  },
  {
    cat: "Marmo",
    name: "Alpi Verde",
    img: xt2AlpiVerde,
    origin: "Naturale",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo verde intenso attraversato da marcate venature bianco-crema. Un materiale scenografico che porta nell'ambiente tutta la forza cromatica della pietra alpina.",
  },
  {
    cat: "Quarzite",
    name: "Alpinus White",
    img: xt2AlpinusWhite,
    origin: "Naturale",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Quarzite dal fondo chiaro screziato di beige, oro e verde, con inclusioni scure che ricordano i cristalli naturali della pietra. Un effetto grezzo e prezioso allo stesso tempo.",
  },
  {
    cat: "Quarzite",
    name: "Amazonite",
    img: xt2Amazonite,
    origin: "America del Sud",
    variation: "Forte · retroilluminabile",
    finishes: "Lucida",
    desc: "Ispirata alla pietra semipreziosa da cui prende il nome, unisce toni verde smeraldo a venature dorate su fondo grigio. Un materiale di grande impatto per superfici di rappresentanza.",
  },
  {
    cat: "Quarzite",
    name: "Andes Blue",
    img: xt2AndesBlue,
    origin: "America del Sud",
    variation: "Forte · retroilluminabile",
    finishes: "Lucida",
    desc: "Quarzite blu cobalto con vene dorate e bianche che si intrecciano sulla superficie, in un gioco cromatico che ricorda le pietre semipreziose delle Ande.",
  },
  {
    cat: "Cemento",
    name: "Antique Gold",
    img: xt2AntiqueGold,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Naturale",
    desc: "Effetto cemento dal caldo tono bronzo-dorato, con superficie opaca e materica. Un colore caldo e avvolgente per ambienti che cercano calore senza rinunciare all'essenzialità.",
  },
  {
    cat: "Pietra",
    name: "Ars Beige",
    img: xt2ArsBeige,
    origin: "Europa",
    variation: "Media",
    finishes: "Naturale",
    desc: "Pietra beige dalla texture morbida e uniforme, appena striata da sottili venature. Un tono neutro e versatile, perfetto per grandi superfici continue.",
  },
  {
    cat: "Marmo",
    name: "Astana Grey",
    img: xt2AstanaGrey,
    origin: "Europa",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo grigio percorso da una vena scura e decisa che ne attraversa tutta la lastra, su un fondo screziato di toni caldi. Carattere deciso per progetti dal segno contemporaneo.",
  },
  {
    cat: "Cemento",
    name: "Bottega Acero",
    img: xt2BottegaAcero,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Naturale",
    desc: "Effetto cemento chiaro dalla texture nebulosa e uniforme, nella collezione Bottega. Superficie discreta e contemporanea, pensata per ambienti minimal.",
  },
  {
    cat: "Cemento",
    name: "Bottega Antracita",
    img: xt2BottegaAntracita,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Naturale",
    desc: "Effetto cemento antracite dalla superficie compatta e uniforme. Il tono scuro e materico della collezione Bottega per ambienti dal carattere deciso.",
  },
  {
    cat: "Cemento",
    name: "Bottega Caliza",
    img: xt2BottegaCaliza,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Naturale",
    desc: "Effetto cemento nei toni caldi della calce, con superficie vellutata e uniforme. La versione più calda della collezione Bottega.",
  },
  {
    cat: "Marmo",
    name: "Breccia Imperiale",
    img: xt2BrecciaImperiale,
    origin: "Italia",
    variation: "Media",
    finishes: "Lucida",
    desc: "Marmo chiaro con delicate venature grigie che disegnano un motivo brecciato elegante e discreto. Un classico senza tempo per ambienti raffinati.",
  },
  {
    cat: "Marmo",
    name: "Calacatta Antico",
    img: xt2CalacattaAntico,
    origin: "Italia",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo bianco Calacatta con venature grigio-dorate ampie e decise, dal fondo leggermente anticato. L'eleganza classica del marmo di Carrara in chiave contemporanea.",
  },
  {
    cat: "Marmo",
    name: "Calacatta Gold",
    img: xt2CalacattaGold,
    origin: "Italia",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo bianco venato da riflessi dorati che si diramano sulla superficie con andamento naturale. Il Calacatta più luminoso e prezioso, per interni di grande impatto.",
  },
  {
    cat: "Marmo",
    name: "Calacatta Green",
    img: xt2CalacattaGreen,
    origin: "Italia",
    variation: "Media",
    finishes: "Lucida",
    desc: "Variante del Calacatta con un sottile sottotono verde e venature grigie sottili. Una lettura originale e contemporanea del marmo bianco classico.",
  },
  {
    cat: "Marmo",
    name: "Calacatta Viola",
    img: xt2CalacattaViola,
    origin: "Italia",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo bianco attraversato da venature scure e riflessi violacei, dal disegno grafico e deciso. Una lastra scenografica per pareti e superfici a vista.",
  },
  {
    cat: "Marmo",
    name: "Calatorao",
    img: xt2Calatorao,
    origin: "Spagna",
    variation: "Media",
    finishes: "Lucida",
    desc: "Marmo nero compatto solcato da sottili venature bianche lineari. Un nero elegante e discreto, ideale per top e rivestimenti di forte carattere.",
  },
  {
    cat: "Pietra",
    name: "Camouflage",
    img: xt2Camouflage,
    origin: "Naturale",
    variation: "Media",
    finishes: "Naturale",
    desc: "Pietra dalla texture mossa e materica, con macchie chiare e scure che si fondono in un disegno organico e mimetico. Superficie di forte personalità per ambienti contemporanei.",
  },
  {
    cat: "Pietra",
    name: "Ceppo Carabelas",
    img: xt2CeppoCarabelas,
    origin: "Naturale",
    variation: "Media",
    finishes: "Naturale",
    desc: "Pietra beige a grana fine, punteggiata da inclusioni minute che richiamano il tipico ceppo lombardo. Texture calda e naturale per pavimenti e rivestimenti.",
  },
  {
    cat: "Legno",
    name: "Ele",
    img: xt2Ele,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Effetto legno",
    desc: "Gres effetto legno in un tono scuro ed elegante, con venatura verticale regolare. Il calore del legno naturale con le prestazioni della superficie in grande formato.",
  },
  {
    cat: "Legno",
    name: "Ewood Camel",
    img: xt2EwoodCamel,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Effetto legno",
    desc: "Gres effetto legno dal tono miele-camel, con venatura naturale e calda. Perfetto per pavimenti continui dall'atmosfera accogliente.",
  },
  {
    cat: "Marmo",
    name: "Fiori di Bosco",
    img: xt2FioriDiBosco,
    origin: "Italia",
    variation: "Media",
    finishes: "Lucida",
    desc: "Marmo bianco con delicate venature grigie diffuse, dal disegno fitto e naturale. Un classico rivisitato per superfici luminose e raffinate.",
  },
  {
    cat: "Marmo",
    name: "Glem White",
    img: xt2GlemWhite,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Lucida",
    desc: "Marmo bianco dalla superficie quasi uniforme, appena attraversata da sottili venature grigio chiaro. Purezza ed essenzialità per grandi superfici luminose.",
  },
  {
    cat: "Marmo",
    name: "Invisible White",
    img: xt2InvisibleWhite,
    origin: "Naturale",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo bianco percorso da decise venature grigio-antracite dal disegno grafico e contrastato. Un bianco di carattere, tutt'altro che invisibile.",
  },
  {
    cat: "Marmo",
    name: "Liem Black",
    img: xt2LiemBlack,
    origin: "Naturale",
    variation: "Media",
    finishes: "Lucida",
    desc: "Marmo blu-nero profondo, solcato da sottili venature chiare che ne esaltano la profondità cromatica. Eleganza scura per ambienti sofisticati.",
  },
  {
    cat: "Marmo",
    name: "Liem Dark",
    img: xt2LiemDark,
    origin: "Naturale",
    variation: "Media",
    finishes: "Lucida",
    desc: "Marmo grigio-antracite dalla superficie compatta, con venature chiare sottili appena percettibili. Un fondo scuro e avvolgente dal grande equilibrio cromatico.",
  },
  {
    cat: "Pietra",
    name: "Mallorca Caliza",
    img: xt2MallorcaCaliza,
    origin: "Spagna",
    variation: "Leggera",
    finishes: "Naturale",
    desc: "Pietra calcarea chiara dalla texture nebulosa e uniforme, ispirata alle cave mediterranee di Mallorca. Un beige tenue e versatile.",
  },
  {
    cat: "Marmo",
    name: "Montreal White",
    img: xt2MontrealWhite,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Lucida",
    desc: "Marmo bianco-grigio dalla superficie soffusa e uniforme, con vene sottilissime appena percettibili. Un fondo chiaro e discreto per ogni ambiente.",
  },
  {
    cat: "Travertino",
    name: "Navona",
    img: xt2Navona,
    origin: "Italia",
    variation: "Media",
    finishes: "Naturale",
    desc: "Effetto travertino nei toni caldi del beige, con la classica striatura lineare della pietra romana. Calore e tradizione per ambienti dal fascino senza tempo.",
  },
  {
    cat: "Legno",
    name: "Neda",
    img: xt2Neda,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Effetto legno",
    desc: "Gres effetto legno chiaro e naturale, con venatura fine e regolare. Un tono neutro e luminoso per pavimenti continui dal design contemporaneo.",
  },
  {
    cat: "Marmo",
    name: "Negresco",
    img: xt2Negresco,
    origin: "Naturale",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo nero intenso attraversato da sottili venature dorate e bianche che si diramano sulla superficie. Un nero prezioso per interni di grande carattere.",
  },
  {
    cat: "Marmo",
    name: "Nylo Noir",
    img: xt2NyloNoir,
    origin: "Naturale",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo nero profondo attraversato da nette venature ramate che disegnano un motivo grafico e deciso. Superficie scenografica per pareti e top di grande formato.",
  },
  {
    cat: "Pietra",
    name: "Orobico Dark",
    img: xt2OrobicoDark,
    origin: "Italia",
    variation: "Forte",
    finishes: "Naturale",
    desc: "Pietra scura dal disegno brecciato, con vene calde che si intrecciano su un fondo grigio-bruno intenso. Il carattere alpino dell'Orobico in chiave contemporanea.",
  },
  {
    cat: "Marmo",
    name: "Paonazzo Biondo",
    img: xt2PaonazzoBiondo,
    origin: "Italia",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo bianco con ampie venature dorate e nere dal disegno deciso e continuo, nella tradizione del Paonazzo apuano. Una lastra di forte impatto scenico.",
  },
  {
    cat: "Pietra",
    name: "Pietra Sicilia",
    img: xt2PietraSicilia,
    origin: "Italia",
    variation: "Leggera",
    finishes: "Naturale",
    desc: "Pietra grigia a grana fine e superficie uniforme, ispirata alle cave siciliane. Texture calda e naturale per pavimenti e rivestimenti di grande formato.",
  },
  {
    cat: "Marmo",
    name: "Port Laurent",
    img: xt2PortLaurent,
    origin: "Francia",
    variation: "Forte",
    finishes: "Lucida",
    desc: "Marmo nero con dense venature dorate che si intrecciano sulla superficie, ispirato ai celebri marmi neri francesi. Lusso ed eleganza per ambienti di rappresentanza.",
  },
  {
    cat: "Marmo",
    name: "Statuario Venato",
    img: xt2StatuarioVenato,
    origin: "Italia",
    variation: "Media",
    finishes: "Lucida",
    desc: "Marmo bianco statuario con venature grigie morbide e continue, dal disegno naturale ed elegante. Il classico per eccellenza tra i marmi bianchi italiani.",
  },
  {
    cat: "Pietra",
    name: "Tadelakt Sand",
    img: xt2TadelaktSand,
    origin: "Naturale",
    variation: "Leggera",
    finishes: "Naturale",
    desc: "Effetto tadelakt nei toni sabbia, con superficie vellutata e leggermente nuvolata. La calda essenzialità dell'intonaco marocchino in una lastra di grande formato.",
  },
  {
    cat: "Marmo",
    name: "Taj Mahal",
    img: xt2TajMahal,
    origin: "India",
    variation: "Media",
    finishes: "Lucida",
    desc: "Marmo beige-crema dal fondo caldo e venature sottili, ispirato alla celebre quarzite indiana. Un tono avvolgente per ambienti eleganti e luminosi.",
  },
  {
    cat: "Pietra",
    name: "Tura",
    img: xt2Tura,
    origin: "Naturale",
    variation: "Media",
    finishes: "Naturale",
    desc: "Pietra grigio-beige con una vena calda che ne attraversa la superficie, in un equilibrio naturale di toni chiari e caldi. Versatile per grandi ambienti continui.",
  },
  {
    cat: "Marmo",
    name: "Vendome",
    img: xt2Vendome,
    origin: "Francia",
    variation: "Media",
    finishes: "Lucida",
    desc: "Marmo grigio-beige con venature dorate e morbide sfumature, ispirato all'eleganza discreta della pietra francese. Un tono raffinato per interni contemporanei.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-accent/20">
      {/* Navigation — plain opaque bar, logo left / sections right. */}
      <nav className="fixed top-0 w-full z-50 px-6 lg:px-12 py-6 flex justify-between items-center bg-background/90 backdrop-blur-sm border-b border-border">
        <Link to="/" aria-label="Euromarmi — home" className="flex items-center">
          <img src={logoEuromarmi} alt="Euromarmi" className="h-7 md:h-9 w-auto" loading="eager" />
        </Link>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-display font-medium text-foreground">
          <a href="#lavorazioni" className="hover:opacity-60 transition-opacity">
            Lavorazioni
          </a>
          <a href="#materiali" className="hover:opacity-60 transition-opacity">
            Materiali
          </a>
          <a href="#galleria" className="hover:opacity-60 transition-opacity">
            Galleria
          </a>
          <a href="#partner" className="hover:opacity-60 transition-opacity">
            Partner
          </a>
          <a href="#chi-siamo" className="hover:opacity-60 transition-opacity">
            Chi Siamo
          </a>
          <a href="#contatti" className="hover:opacity-60 transition-opacity">
            Contatti
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroAmbiente}
            alt="Isola cucina in quarzite in un ambiente open space"
            width={1809}
            height={1056}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
            MATERIA
            <br />
            <span className="italic font-body font-normal">Senza Tempo</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto font-body italic">
            Lavorazione artigianale di marmi, graniti e gres porcellanato per l'architettura
            d'interni d'eccellenza.
          </p>
        </div>
      </section>

      {/* Official partner */}
      <section id="xtone-partner" className="py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase text-center mb-10">
            Partner Ufficiale
          </h2>
          <div className="bg-card border border-border rounded-xl px-8 py-16 md:px-16 md:py-20 text-center flex flex-col items-center">
            <img
              src={logoXtone}
              alt="XTONE"
              className="object-contain mb-10"
              style={{ height: "clamp(40px, 5.2vw, 80px)", width: "auto" }}
            />
            <p className="font-body text-lg md:text-xl leading-relaxed text-foreground max-w-2xl">
              Siamo Partner Ufficiale XTONE, il prestigioso brand di superfici di grande formato del
              Gruppo Porcelanosa.
              <br />
              <br />
              Una partnership che testimonia il livello tecnico e qualitativo delle nostre
              lavorazioni e che ci consente di offrire competenza specializzata nella trasformazione
              e lavorazione delle superfici XTONE.
              <br />
              <br />
              <span className="italic">
                Tecnologia, esperienza e qualità Made in Italy al servizio dei progetti più
                ambiziosi.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partner" className="py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase">
              Alcuni dei nostri partner
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-background aspect-[3/2] flex items-center justify-center px-8 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="w-full max-w-[150px] h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="lavorazioni" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="md:sticky md:top-32">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6">
              L'Arte della
              <br />
              Trasformazione
            </h2>
            <p className="text-muted-foreground max-w-md mb-12">
              Dalla lastra grezza al dettaglio millimetrico. Realizziamo superfici che definiscono
              lo spazio domestico con la forza della pietra naturale e l'innovazione del gres
              porcellanato.
            </p>
            <div className="space-y-4">
              {services.map((s) => (
                <Link to={s.to} key={s.n} className="group block border-b border-border pb-4">
                  <span className="text-xs text-accent font-display font-bold uppercase tracking-[0.2em]">
                    {s.n}
                  </span>
                  <h3 className="text-2xl mt-2 group-hover:translate-x-2 transition-transform duration-500 italic">
                    {s.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-8">
            <img
              src={workKitchen}
              alt="Isola cucina in pietra scura"
              width={800}
              height={1024}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            <img
              src={workDetail}
              alt="Dettaglio di giunzione marmo"
              width={800}
              height={608}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materiali" className="bg-[#1a1a1a] text-white py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-between items-end mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter uppercase">
              Selezione Materiali
            </h2>
            <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">
              Campionario 2026
            </span>
          </div>
          <MaterialsHall items={materials} kickerLogo={logoXtone} kickerLogoAlt="XTONE" />
        </div>
      </section>

      {/* Gallery */}
      <section id="galleria" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-between items-end mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-display font-bold">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase mt-4">
              Galleria
              <br />
              <span className="italic font-body font-normal normal-case tracking-normal">
                dei lavori
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Una selezione di realizzazioni firmate Euromarmi: cucine, bagni, scale e opere d'arte
            funeraria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((g, i) => (
            <figure
              key={g.name}
              className={`group relative overflow-hidden ${i % 5 === 0 ? "md:col-span-2 aspect-[16/10]" : "aspect-[4/5]"}`}
            >
              <img
                src={g.img}
                alt={g.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <figcaption className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent text-white">
                <span className="font-display font-bold uppercase text-[10px] tracking-[0.2em] opacity-80">
                  {g.cat}
                </span>
                <span className="text-xl italic">{g.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Chi Siamo */}
      <section
        id="chi-siamo"
        className="border-t border-border py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-display font-bold">
              Chi Siamo
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase mt-4">
              Trent'anni
              <br />
              di{" "}
              <span className="italic font-body font-normal normal-case tracking-normal">
                passione per la pietra
              </span>
              .
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed">
            Tutto è iniziato quasi trent'anni fa dalla passione di un giovane ragazzo per la
            lavorazione del marmo. Da allora, ogni lastra viene selezionata personalmente nelle cave
            e nei centri di produzione del gres in Italia, e ogni progetto viene seguito con la
            stessa cura del primo giorno: qualità impeccabile, precisione millimetrica e posa in
            opera curata fin nel minimo dettaglio.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contatti"
        className="py-24 md:py-32 px-6 lg:px-12 bg-background border-t border-border"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-8">
              Richiedi una
              <br />
              Consulenza
            </h2>
            <div className="space-y-8 font-display text-sm tracking-wide text-muted-foreground uppercase">
              <div>
                <p className="text-foreground font-bold mb-1">Laboratorio</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Euromarmi+Santori+Via+Anguillarese+Roma&travelmode=driving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
                >
                  Via Anguillarese km 1.200, 00123 Roma (RM)
                </a>
              </div>
              <div>
                <p className="text-foreground font-bold mb-1">Contatti</p>
                <p>+39 06 304 6839</p>
                <a
                  href="mailto:info@euromarmisantori.it"
                  className="normal-case tracking-normal hover:text-foreground transition-colors"
                >
                  info@euromarmisantori.it
                </a>
              </div>
              <div>
                <p className="text-foreground font-bold mb-1">Orari</p>
                <p>Lun — Ven · 08:00 — 13:00 / 14:00 — 17:00</p>
                <p>Sab · su appuntamento</p>
              </div>
            </div>
          </div>

          <form
            id="form-contatti"
            action="https://formsubmit.co/info@euromarmisantori.it"
            method="POST"
            className="space-y-6 scroll-mt-32"
          >
            <input type="hidden" name="_subject" value="Nuova richiesta dal sito Euromarmi" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                required
                className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <input
              type="tel"
              name="telefono"
              placeholder="Telefono"
              className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="progetto"
              placeholder="Il tuo progetto"
              rows={4}
              required
              className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-foreground text-background font-display text-[10px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              Invia Messaggio
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display font-bold text-sm tracking-tighter uppercase">
            © 2026 Euromarmi · P.IVA 05568741002
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-display text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookie
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Floating contact button */}
      <a
        href="#form-contatti"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] bg-foreground text-background font-display text-[10px] uppercase tracking-[0.2em] px-6 py-4 shadow-2xl hover:bg-accent transition-colors"
      >
        Contattaci
      </a>
    </div>
  );
}
