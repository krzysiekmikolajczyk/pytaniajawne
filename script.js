const totalPages = 68;
let currentPage = 0;

const pagesContainer = document.getElementById('pages');
const pageNumber = document.getElementById('page-number');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const toggleBtn = document.getElementById('toggle-theme');

// Przykładowe teksty - tutaj wpisz swoje treści
const pageTexts = [

  `1. Motyw cierpienia niezawinionego - Księga Hioba

w: - cierpienie towarzyszy człowiekowi od zawsze

- człowiek wielokrotnie próbował odnaleźć źródło/powód cierpienia, często widząc je w swoich czynach, które miały zostać ukarane właśnie cierpieniem

- występuje cierpienie niezawinione, dla którego powód ciężko znaleźć, przez co od zawsze byto szczególnie intrygujące

t: mimo braku zrozumienia, dlaczego cierpienie dotyka człowieka, ten jest w stanie je znieść dzięki bardzo silnej wierze w boga

1: Księga Hioba

- Hiob - bogaty, sprawiedliwy, pobożny, ma liczną rodzinę

- Szatan stawia tezę, że Hiob odwróci się od Boga, gdy straci wszystko co posiada na Ziemi. Bóg wystawia Hioba na próbę

- Hiob traci dzieci, bogactwo, choruje na trąd, żona namawia go, by odwrócił się od boga, ten jednak przy nim pozostaje

- Hiob odzyskuje to, co miał i żyje szczęśliwie prez kolejne 140 lat

- ufa w boską sprawiedliwość

2: Jan Kochanowski - Treny

- autor po stracie Urszulki buntuje sie przeciw bogu, preżywa kryzys światopoglądowy, nie jest w stanie zrozumieć woli boga

- w trenie XIX ma wizję, że jego matka opiekuje się Urszulką W niebie, daje mu to pocieszenie i nadzieję, przywraca wiarę w boga, akceptuje to, co się wydarzyło.

P: - mimo braku zrozumienia boskiej woli, bohaterowie z bardzo silną wiarą są w stanie zaakceptować cierpienie niezawinione, wierząc w słuszność boskich czynów`,

    //////////////////////////////////////////////////////////

  `2. Człowiek wobec niestałości świata - Księga Koheleta

W:

- człowich często popada w iluzję, że zdobycie bogactwa, stawy, mądrości zapewni mu w życiu pewną stałość

- nie zauważa, że wszystkie te wartości może stracić w jednej chwili i że nie pomogą mu w obliczu śmierci

t: pogoń za marnymi/przemijającymi wartościami może zagrozić duszy człowieka i sprawić, że ten zmarnuje czas dany mu na ziemii.

1: Księga Koheleta

- mędrzec doświadczył w życiu wielu ziemskich dóbr - bogactwa, przyjemności, zdobył mądrość - doszedł do wniosku, że wszystko to jest marnością, przemija w obliczu śmierci

- człowiek powinien pneżyć życie godnie, zgodnie z bożymi przykazaniami, pokornie wobec jego decyzji

powinien czerpać radość z codziennego życia, mimo świadomości jego kruchości

2: Jan Kochanowski - Treny

- w obliczu straty córki poeta poddaje wątpliwości sens zdobywania wiedzy, gdyż nie pomaga mu ona poradzić sobie z cierpieniem

- przechodzi kryzys światopoglądowy, lecz dochodzi do wniosku, że musi zaufać bożym (chociaż niezrozumianym) intencjom, udaje mu się zaakceptować boską wolę,

- dostnega premijalność życia i widzi w życiu duchowym prawdziwą wartość.

P. Człowiek powinien skupić się na tym, by przeżyć życie w sposób który zapewni mu życie wieczne, a takze pozwoli zaakceptować przemijalność życia`,

///////////////////////////////////////////////////////////////////////////////////////////

  `3. Wizja końca świata - Apokalipsa św. Jana

w:

-człowiek od zawsze zastanawiał się, jak będzie wyglądat koniec świata, który, jak wrystho co ziemskie, wiedys preminie

-duty wpływ na postneganie świata miato chnesujaristwo i inne religie

t: Oblicza końca świata są różnorodne i zależne od czasów, wlktórych zostaty stworzone

1: Apokalipsa św. Jana

-biblijna wizia hońca świata - petna symboliki

-4 jeźdźcy apokalipsy - wojna, głód, zaraza, śmierć aniotowie, barance, 7 pieczęci

---nastrój

grozy, niepokoju, kataliliomy

wizia powstania nowego świata, wolnego od zta, zwycięstwa Boga nad wrellum ztem

podniosłość, powaga - prypomnienie, że luazdego człowieka dotknie sąd bozy

stanowiła inspiracje dla wielu twórców późniejszych epok

R2: Czestaw Mitosz-, Plovenka horicu świata"

Se

ορισ zwyczajnego dnia, który ornaiza jednocześnie koniec świata

honiec nadchodu powole, niespektakularnie, bez epickich wydanen

ludzie zdaja się być obojętni, spokojni, może nieświadomi

- pesymistyczna refleksia, że ludzie nie zdara, prygotowal się do nieuchronnego, a nawet nie zauwaza tego, co nadchod

koniec jest nieuchronny nie daje nadziei na zbawienie

P: Biblia starata się odpowiedzieć ludziom na pytania egry stenye lne, a problem bardues artyści późnierszych epok traktowale me ta forycznie, by ukazać co stanowi zagrożenia współczesnych ludzi (obojętność, memoc)`,
  
////////////////////////////////////////////////////////

`4 . Poświęcenie się w imię wyższych wartości - Mitologia

W:

- altruizm - poświęcenie dla innych

Jana Parandowskiego

poświęcenie imię innych wartości - dla kraju, religii i boga Wir

t: poświęcenie się dla wyżorych wartości szla che tności, sity i zasługiwało na zawsze było wyrazem uznanie

1. Jan Parandowski - Mitologia (mit o Prometeuru)

- tytan, który stworzył człowieka z gliny nauczyt go wielu umiejętności, dat podstawową wiedzę 0 Świecie

- dat człowiekowi ogień, który niwelowat ludzką, słabość i bezbronmost wykradt ogień Olimpu wbrew woli bogów

orchat Zeusa, dzięki czemu ludzie mogli jeść mięso ofiarne, oddawać bogom slutadai tturer i hości.

- puszka pandory - hara dla ludzi

-Liara dia Prometeura -

prybuty do skat Kauliath, gdwe codziennie prylatywat orcet i wyladat mu wa, trobe, która

*stale od rastata

2. Albert Camus - Dżuma

Doktor na Bernard Rieux tym, by wa lizyć większość chorych umre W Z czasie epidemii honcentruje się jedynie chorobą, mimo świadomości, że

- naraia siebie na którego pryczyny niebezpieczeństwo w hre Imię walki ze ztem, potrafit zrozumieć

P

: Postawy ludzi, którzy potrafią zaryzykować swoim życiem dla dobra innych wielko dusinosi ha wrelhie bezsprecznie wyrazem dobroci bohaterów uzha nie sra cu neli. 1 zastugurquych

Niewiele ludzi jest gotowe no talkie poświęcenie.` ,

/////////////////////////////////////////////////////////

`5

. Problematyka winy I leary - Mitologia Jana Parandowskiego

W.

- żadna wina nie La moralna porostanie bez hary-uniwersalna prawda - to prawo uwzględniają systemy sądowe stwonone puez ludzi

jest to problematylia podejmowana w literatune od starożytności aż do czasów wspótizesnych

ti kara jest następstwem haider winy, chociaż more prybrać różné formy

1. Mitologia (mit o Syzyfie)

- Sycyf - król Korynta, lutóry cieszyt się szacunkiem bogów

→-zdradzit velkret Zeusa, za co ben skazat go I zaufaniem no śmiert

- Syzyf chciat uniknąc śmiera, uwięzit Tana tova o lochach, pner Co ludzie prestali umierać

-Reus uwolnit Tana tova

- Syryf nalazat zonie a później poskarzył się by nie grebata jego ciata, na nia, gdy zna lact się w Hadesie

- dostat pozwolenie, by wrócić na ziemię, by ukarać żonę i żył ponownie, do póli nie prypomnieli sobie o nim bogowie

- dostat leave wieczną kara spottrata go, - musiał właczac hamień pod góre во chuat orιιαί preznaczenie

2. Fiodor Dostojewski - Zbrodnia i hara

Rodion Raskolnikow i jego teoria o nadludziach

Zbrodnia - zabójstwo lech wiarki, w imię dobra ludzkości" a realnie, by prekonać się 0 swojej wyższoś

- wyrzuty sumienia pora dze nia , problemy psychiczne, nieumiejętnośc sobie ze swoim

- hara - obalenie własnej teorii, świadomość, że nie jest wyjgthong. a później talize zoy tha na sy berię

P: kara moze godrić W mied wymiar fizyczny, ale takze cato willia wiześniejsze spojnenie psychicznie, rujnować jego na Swiat` ,

//////////////////////////////////////////////

`6

- . Miłość silniejra niż śmierć Mitologia Jana Parandowskiego

W:

- sita mitości to temat ponadczasowy, od wieciów podejmowany W literaturze

mitość potrafi zmieniać żyue ludilue wai go na lepore, motywo do dobrych czynów, ale również prowadzić do tragedi

t:

prawdziwa mitość może stać się dla ludzi ważniejsia od własnego życia, prerwyciętając śmierć

1. Jan Parandowski - Mitologia (Mit o Orfeuru i Eurydyce)

- Orfeur-wybitny pieśnian, wirtuoz gry niesamowity wpływ na ludzi i no lutni, która miata pryro de

- Orfeur pogrążył się zmarła W rozpaczy po śmierci tony, utora uliasrona pnez mię

- by odzyskać zone 1 udat się do Madesu, prelionat Hadesa Persefonę swoją pieśnia mitosug do tony (mitose była dla niego ponad strach pred śmiercia)

- miał odzyskać Eurydykę, jeśli wracad nie obejny się ta siebie, gdy będą podziemi. Stęskniony widoku żony obrócił się I utracit Eurydykę bezpowrotnie. Myślat o niej do honica życia, a jego mitose stała się wieczna

2. William Stelespir- „Romeo i Julia"

jedna z najbardzię znanych histori mitosnych w literaturce

- honflikt między rodzinami Kapuletów i Montelich

slub w Romeo tajemnicy wyrazem niezwykle silnej mitosi

wygnany Julia biene lele miasta pnez zabójtwo Tybaltal huge usypiajquy i poronije śmierć, by nie wychodzić Julii)

Z

kuzyna

Romeo utruwa się, pewny, że Julia umarta Za Parysa

- Julia zabija się sibylebem Romea, mitość staje się Wieczna, a rodziny się godzą

P: Bohaterowie son się dlo na W stanie stracić życie, poświęcając mitości lub Zwemli hie będąc w stanie doświadczyć` ,

///////////////////////////////////////////////

`7.

. Heroizm jalko postawa człowielia w zmaganiu się, z lovem

W: -heroizm- zdolność do wiellich czynów odwagi, determinayi, walki - Iliada Homero w imię idei uznawanych stusine, nawet, gdy sytuaya wydaje się być shazo na

τα t: heroizm staje się tródtem inspiraui dla innych, ho porażkę podziwiających poświęcenie w imię dobrych wartości,

1. Homer - Iliada

mimo świadomości nadciągającej pregranej

- Parys porwat Helenę - zone, króla Sparty - Menelaosa, co doprowadza Greliami, a mieszkańcami Troi do wojny trojańskiel - między (Greliami)

-Achilles - wojownik Gredi, Melitor - bohater Trojański

- Heli tor Swiadomy, że prawdopodobnie umne, podermuje walke by zachować honor, broniąc Troi swojego miasto i rodziny.

1

- Achilles walizy, mimo świadomości, że wybiera krótkie żywe deyduja się ho chwata i udział W wojnie, ale ważniejra jest dla niego pomorzenie swojego pryjaciela - Patroklesa

- Priam udaje się do namiotu Achillesa, by proo prović o ciało zabitego Hektora - determinaya i odwaga, by godnie pochowal syna

2. Albert Camus - Džuma

- Bernard Rieux walizquy że więkstość ludzi Z umrze chorobą, mimo świadomości, postawa heroiczno-

Doktor narażał swoje życie, lecz nie miat wątpliwości, co do ze celowości swoich czynów - ztem, podjęue działania - celem była walka

egry stenya lizm

P: Heroizm to τα sturne ponad pnede wrystkim podjęcie działań uważanych postawienie wyznawanych wartości wory stho tragicznej sytuayi Inne mimo świadomości` ,

///////////////////////////////////

`8. Konflikt raji moralnych - Antygona Sofoklesa

W: -moralność podpowiada ludziom, co jest dobre, a co zte

- honflikt ravi pojawia się, gdy worysthie wybory wydaja się zte , mogą, sprowadzić na hogoś cierpienie

t: honflikt rayi moralnych występuje, gdy pojawia się wybór tragiczny, a hazdy wybór prowadzi do daloych tragedii

1. Sofokles - Antygona

Polincikes zabija EtHohlesa w bratobójurym pojedynkum o władzę

- Kreon zakazuje pochowania Polincikera, by uharaí zdradę - podigt wybór tragiczny - po 1. stronie prawa boshie, uczucia rodzinne (Kreon-wuj Polincikesa), po 2. stronie-dobro kraju, pnestneganie sprawiedliwych praw ludzkich

Siostra poległych - Antygona podejmuje inną decyzję, kierując się miłością do brata i strachem pred griewem Bożym.

Antygona zostaje shazana to samo na smiere i popełnia samobójstwo, robi Hajmon-syn Kreono, a ukochany Antygony

- Kreon doprowadza do tragedii, której nie unilungtby,

podejmując inny wybór

2. Manna Krall, Zdqzyć pred panem Bogiem"

- mieszkańcy gettia mają wybór między powoling, okrutna Śmiercuq phetrwanie) głodu (zawre mogą, mieć jakąś nadrigę na a godną śmierua wywotulge powstanie W getue bronią w relen, J

- podawanie dzieciom trecizny prez pielęgniarki

P: Człowiek W cravem sy tua ji mimo własnej woli zostaje postawiony bez wyjścia i który jest skazany na musi tragedie podiąć wybór,

Musi mieć site, wewnętring, by takiej decyzji nie obwiniać się po podięciu`,

/////////////////////////////

`9.

Człowiek wobec preznaczenia - Antygona Sofoklesa

w:

- fatum jako sita agzqua nad lovem catowillia -motyw popularny w mitologii i twórczości starożytnych

- w czasach współczesnych ludue taluze trafiają, w sytuacye bez wylsua

t: z preznaczeniem nie morna wygrać

Sofokles- Antygona

Nad Rodem Labdoludów od pokoleń ciąży fatum - Lajos uwiódł

młodego chłopca, co nie spodobało się bogom, który prehlęli caty ród. Syn Lajova Edyp, nieświadomie zabit gua I poślubit własną mathe. Synowie Edypa - Eteoliles Polineques zginele w walie

0 władzę nad Tebami. Tragiczne wydarzenia, które następują, po pochowaniu ciata Polinerkesa prez Antygone, sa n fatum. Antygono ata do podjęcia wybór tragiciny, miata który do prowadzit do śmierci jej samej, jak i Hajmono Eurydylu.

A

2.

→ Makbet

-wpływ sit wyzrych ma ograniczone duatanie-ostatecznie to bohater podejmuje decyzje swoim losie Ulega polusie władzy, co prowadzi do jego upadlun. Sity nadpryrodrone wzbudzają W nim jest odpowiedzialny sam swoje czyny. τα

P:

→

Niezależnie, czy cztowich wiercy jego lovem crasem ustanowione tostaje postawiony gdzie żadnym odmienic swoich wyborem losów. W fatum reg dzque pnez bogów, W sytuayi, nie jest w stanie

pisarzy`,

/////////////////////////////////

`10.

Motyw tańca śmierci

Rozmowa mistrza Poliliarpa ze śmiercia

W:

- skupienie na śmiera w epoce Średniowiecza spowodowane Hocentryzmem, wrechobecnością chorób i wojen, zaraz powstanie polec Ars moriendi, Memento mori, Danse macabre

t.

taniec smieru to motyw prypominający o równo śu worystlich wobec śmieru, bez względu no stan spotevrny posiadania pochodzenie

1. Rozmowa mistra Polikarpa ze śmiercuą

- postać śmierci ukazuje się pred mędrcem za jego prośba ulhazana jako ghilquy trup pnerażenie, ale ma て hoso, w rele, budri talkie elementy groteski, homizmи

Poliliare za daje. śmierci pytania, a ta odpowiadająı tłumaczy, że zabiera hażdego bez wiględu na pochodzenie czy zasługi

-uhazuje premijalność zyua, zmusza do refleluy, nad własnym życiem

-wartore dydaktyczna

2. Jan Kochanowstu treny

-poeta nie może zaakceptować, pogodzić się ze śmieruą córki

- w wulu 19 utworów widzimy, jak stopniowo dostnega nieuchronność śmieru, tych eru, litora do najbardziej niewinnych do bylia również

- Smieri poete, do refleksje nad ulotnosing tycia

P: Bohaterowie po doświadizeniu bliskośco śmierci do chodra do hieu chronno su, tych samych wniosków 0 a takze do tego, že nalezy żyć godnie, bo hażdy cztowich zostanie rozliczony ze swych ozynów`,

//////////////////////////////

`11.

Średniowieczny etos rycerski - Pieśń Rolandue

W

etos to zbiór wartości, wzorców i norm poute, powania charakterystycznych dla danej grupy sporeczne, który powinien być prestnegany, by realizowal pewne

- średnio wiecze - elosy świętego (ascety), władcy, rycerza | ideaty

t:

etos rycerski promowat wartości takie jak honor, Od waga, lojalność wobec włady i bogo-, walka W obronie Ojczyzny i wiary

e

e

1. Pieśń 0 Rolandrie

-tytutowy bohater walizy w wojskach Karola Wielkiego w wyprawie preciw Saracenom (muzutmanom) w Hiszpanii

- pieśń ma na celu inspirowanie do prestrzegania wrονόω, lktórymi weruje się Roland

-staje do bitwy mimo prewagi preciwnitia, nie wywa pomocy, by zachowa honor, męstwo

pned smieruą wspina się na górę, by być bliżej boga, odwraca się W werunku wroga - podkreśla, że zginął driemie walizac Z pogonami

anioło wie zanosia, dusre Rolanda do nieba - Ars Moriendi

2. Menryk Sienkiewicz -,, Potop"

Michat Wołodyjowski nasobieniem etosu rycerskiego, mimo, że akya nie dieje się W Średniowieczu

poliaz niezwylitych umiejętnośu w pojedynku z Kmicicem

wierność królowi, honor, polhora, religijność, sracanlı + Kmicic do hobiet

P: Średnio wieczny

etos rycerski tostat wykorzystany późniejszych epolia ch do bre i , promując wartości rlo chetne. talize W jedno zna cznie` ,

////////////////////////////////

`12. Moralna odpowiedzialność za cryny - Malibet Williama

soba jalkies honsekwencje Szelispira w:-hażdy czyn niesie τα

-nawet cryny nieocenione prez spoteczeństwo 59 oceniane prez nare sumieme, które jest grovem moralnośu

t-monalna odpowiedzialność lest ча счупу рополопа zawore, niezależnie od opinic upoteczne i otowiq- zuiquego prawa

1. William Szekspir - Makbet

-Makbet na porra Hen - oddany, honorowy rycerz levéla Dunkana

- spotkanie trech wiedź budzi w him riadze władzy, którą stale podryca Lady Makbet

- Makbet zabila króla Dunkana, dera zabójstwo Banka

widzi ducha Banka - pierwsze ornaki

Banko-pryjauel lutong we present

szaleństwa wiedni miat by quen leblow

Lady Malibet nie wytny muje psychicznie i popetnia samobójstwo Wiześniej majacke i linatylule

- Makbet czuje ciggty strach pred utratą wtadry i ginie w pojedynkun Makdufem (wiernym rycerem Dunia na)

Maubet jego żona ulegli polusie władzy, co było świa- domym wy bovem dla tego murą ponieść jego konsekwenye

2.

Ibrodnia hara - Fiodor Dostojewski

Rodion Raskotnikow popetnia zbrodnie, by prekonać się, że należy do nadludzi

- nie wytnymuje presli prychicznej powodowanei prez sumienie - gros moralności

-hara fizyczna-zestanie na sybır, dużo bardrug dotiliwa dla Rosho Ini ho wa oba lita lest ta wewnętrna, utora lego życiowe prelonania

P:

Każdy zostanie rozliczony za rozliczeniu sumienie często we cryny w tym największą rolę gra gwarantuje moralną odpowiedzialność τα oryny`,

//////////////////////////////////

`13. Czy człowich decyduje o własnym losie? - Makbet

W: - twórcy od starożytnośu zastanawiale się, w jakim stopniu lovy (zto wielia sa za leine od niego samego

-porque fatum iqiqiego nad ludzkim lovem

t: zewnetune czynnillu to od cato wielka nie są bez znaczenia, ale zazwyczaj zależy, czy ulegnie ztu

1. William Szekspir - Mo-lubet

-Makbet-szlachetny, odważny, zaufany, wierny and low rycerz

-spotha nie Z władzy, której ulega czarownicami również budri w nim zadzę namową Lady Makbet τα

-Malubet dla władzy staje się zbrodniarzem, kro la Dunkana, strażników, Banha

- Wizja wła dry to polkusa, której ulega Mahbet, jednak decyzja haleta ta do wstą pieniu na drogę zbrodni niego, co zdawało się mu wypominal jego sumienie

2. Zbrodnia i hara - Frodor Dostojewski

Rasholnihow wierzy, że ma prawo decydowal innych o Cosie ludzi, bo został stworzony jako jednostha wybitna, nad cato wick

po zbrodni prekonuje się, że odpowie moralnie za Wrystie czyny, jakich się dopuścit

harda decyzia podięta prez człowicha zostanie ro le crono pnez lego sumienie

Catowich decyduje własnym losie odpowie τα be decyzje

P: Człowich a rawre, gdy ma ztem, powinien odpowiedzialny το wybór między dobrem wybrać dobro sam jest ten wybór decyzię o własnym losie i nie powinien usprawiedliwiać się preznaczeniem`,

/////////////////////////////////

`14. Jalu wpływ na człowielia ma sprawowanie prez niego władzy?

- Makbet

W:-władza to nanędzie które w dobrych rękach potrafı adzić do prowadzić upored dhowania, usprawnienia duatania spoteczności

-wronec władcy w średniowieczu - sprawiedliwy, odważny, szlachetny, wierny bogu

-władza stanowi poluse dla wielu mezdolnych do jel sprawowania

t:-wradza i żądza jei rozrenania mote prowadzić do niemoralnych działań

1. Makbet Williama Szelespira

- spotkanie wiedźm pobudza w Malubeve zadzę władzy, litovel ulega takve jego zona

Tabójstwo Dunkana, by zdobył władzę

- strach pned utratą władzy i zabójstwo Banlia (htom otry mat prepowiednie że będrie opem wólów)

-ze rlachet nego rycerza Malibet staje się człowicluem ber mora (no su, dla lktórego liczy się tylko utrymanie tronu

- trau żonę pryjaciót, racunch, a nawet wławne człowieczeństw

2. George Orwell - Rok 1984

Opis życia Winstona Smitha w Swzecie podpong dhowanym prez władzę totalitarng,

- partia, która by uthymywać się pny władzy, stwonyta speyalny system century, poliyi myśli, masowej inwigilayi

-haidy rodzaj spreciwu prowade do tortur, by zmienić (hontr) rewolucyjne prekonania I Śmierci

-O'Brien zdradzajquy, że władza to dla partii jedyna sturna najwyżra wartośc

P: Władza predstawiana jest jako niejalne uzależnienie

- erto wick by 19 19 posiadający może być zdolny do wryshuego, uzymać`,

////////////////////////////////

`15.

Czy dobra materialne czynia, człowieka rezęśliwym?

shapiec Moliera

W:-suręsie to najbardzie; porą dana pnez czło wiella wartofl zdobywanie innych ma prowadzić właśnie do rizęśua

Chnesujanie chuele je osiągnąć popner sturbę bogu, epillurejczycy prez pryjemne zyue, stoly prez Umiarliowanie

=t

: Wielu ludzi próbuje osiągnąć surę sue prez zdobywanie dobr materialnych, co by uczynić ich spełnionymi nigdy nie będzie wystarczajque

1. Molier - Slug piec

- Harpagon prez slepa, pogon za bogactwem sluqputwo upośledza swoje relaye rodinne

-Chie nanuvi dzieciom swoją wolę τα zmusić Elizę, by wysta za możnego Anzelma, a Kleanta, by oženit się ze starsią wdowo

Planuje poślubic Marianne, wlitorei

rakochany jest jego syn Eliza chuato folierego (chuat uniknige hortow slubu

orizedra na wszystleim - jedzeniu (paręstunek dla gości), wynagrodzeniu stużby, a swore pieniądze bryma zalopane wogródku - nie wy nilla 2 nich żadne dobro

- udziela pożyczek lichwiarskich - korzysta Z trudnej sytuayı

- by odzyskać szkatu the toba, zgadza się na wszystko innych

2. Księga Koheleta

-ślub Kleanta z Marianng

- mędnec doświadizyt worysthich door materialnych, jalue oferule Swiat określit je jako marność

- Odlurył, że zęście spokój cztowich moze doświadıryi tylko dzięku żyuu zgodnie z prykazaniami bożymi

P: Dobra materialne hura człowieka lecz zamiast prowadzić do ha prawdziwe suzęścia często wiarę, szacunek czynią go ślepym tródła stizę sua - rodzinę, wśród ludzi Bliskich`,

//////////////////////////////////


`16. Przyczyny nieporozumień między rodzicami a dziećmi.

Shapiec Moliera

W: - wartości, którymi kieruje się catowich są mu wpajane od driedia, pourg Howo od rodziców

-z biegiem crasu poglądy się zmieniaja, prez wpływ nowych czynników, ludzi, Sro do wish

t: nieporozumienia między rodzicami a dziećmi zwykle wynikają 2 różnicy w wyznawanych wartościach

1. Molier-sha, piec

cenie na majgthun, obojętny - Harpagon - skupiony wyłącznie -postnega własne drien jalko obugzenie finansowe, chie zmusić je do matterństw, które pozwolą whtad finansowy W ich życie mu na mniejsy

priorytetem Kleanta i Elizy jest mitość

-Kleant chie poślubić uboga Mariannę, Eliza hiemajętnego Wa levega

Harpagon godu się go że hre no matzeństwa tylko dzięki zapewnienia poniesie hosztów wesela i posagu dla córki,

a także, by odzyskać szkatuthe - brak stans no zrozumienie pnez skrajnie różne wyznawane, wartości

2. Sławomir Mrożek - Tango

- Stomil i Eleonora

predstawiciele pokolenia, litove dolionato w chaosie , ciera się wrelang wolnością, frywolnością i odrucają tradyye

rewolugi овусгаjowej - żyją,

Artur-ich syn dobne, elegancio się ubiera studiuje prawo me dy ly ne prez pokolenie jego rodziców czuje się pozbawiony możliwości buntu , jego buntem staje się cher wprowadzenia porządlus, tadu

- to, co dla очпаста jednego pokolenia jest postępem dla drugiego po prostu chaos

P: Jeśli pokolenia wyznają skrajnie odmienne wartości hie potrafia, wykazać się chęcia / możliwością zrozumienia 1 uężko będzie honfliktów racji lub nieporozumień. 0 uniknięcie`,
//////////////////////////////////



/////////////////////////////////


  "Strona 68: Ostatnia strona."
];

// Tworzenie 68 stron
for (let i = 0; i < totalPages; i++) {
  const page = document.createElement('div');
  page.classList.add('page');

  const textBox = document.createElement('div');
  textBox.classList.add('text-box');
  textBox.textContent = pageTexts[i];

  page.appendChild(textBox);
  pagesContainer.appendChild(page);
}

function updateView() {
  pagesContainer.style.transform = `translateX(-${currentPage * 100}vw)`;
  pageNumber.textContent = `${currentPage + 1} / ${totalPages}`;
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === totalPages - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateView();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateView();
  }
});

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});


updateView();
