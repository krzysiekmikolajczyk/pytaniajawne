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

- człowiek od zawsze zastanawiał się, jak będzie wyglądał koniec świata, który, jak wszystko co ziemskie, wiedys przeminie

- duży wpływ na postrzeganie świata miało chrześcijaństwo i inne religie

t: Oblicza końca świata są różnorodne i zależne od czasów, w których zostat=ły stworzone

1: Apokalipsa św. Jana

- biblijna wizja końca świata - pełna symboliki

- 4 jeźdźcy apokalipsy - wojna, głód, zaraza, śmierć; aniołowie, baranek, 7 pieczęci

- nastrój grozy, niepokoju, kataklizmy

- wizja powstania nowego świata, wolnego od zła, zwycięstwa Boga nad wszelkim złem

- podniosłość, powaga - prypomnienie, że każdego człowieka dotknie sąd boży

- stanowiła inspiracje dla wielu twórców późniejszych epok

2: Czesław Miłosz - Piosenka o końcu świata

- opis zwyczajnego dnia, który oznacza jednocześnie koniec świata

- koniec nadchodzi powoli, niespektakularnie, bez epickich wydarzeń

- ludzie zdają się być obojętni, spokojni, może nieświadomi

- pesymistyczna refleksja, że ludzie nie zdążą prygotować się do nieuchronnego, a nawet nie zauważą tego, co nadchodzi

- koniec jest nieuchronny, nie daje nadziei na zbawienie

P: Biblia starała się odpowiedzieć ludziom na pytania egzystencjalne, a artyści późniejszych epok traktowali problem bardziej metaforycznie, by ukazać co stanowi zagrożenie dla współczesnych ludzi (obojętność, niemoc)`,
  
////////////////////////////////////////////////////////

`4 . Poświęcenie się w imię wyższych wartości - Mitologia Jana Parandowskiego

W:

- altruizm - postawa poświęcenia dla innych

- ludzie poświęcają się w imię różnych wartości - dla kraju, religii i boga

t: poświęcenie się dla wyższych wartości zawsze bylo wyrazem szlachetności, siły i zasługiwało na uznanie

1. Jan Parandowski - Mitologia (mit o Prometeuszu)

- tytan, który stworzył człowieka z gliny i nauczył go wielu umiejętności, dał podstawową wiedzę o świecie

- dał człowiekowi ogień, który niwelowat ludzką słabość i bezbronność (wykradł ogień z  Olimpu wbrew woli bogów)

- oszukał Zeusa, dzięki czemu ludzie mogli jeść mięso ofiarne, a bogom oddawać tłuszcz i kości

- puszka pandory - kara dla ludzi

- kara dla Prometeusza - przykuty do skał Kaukazu, gdzie codziennie przylatywał orzeł i wyjadał mu wątrobę, która stale odrastała

2. Albert Camus - Dżuma

Doktor Bernard Rieux w czasie epidemii koncentruje się jedynie na tym, by walczyć z chorobą, mimo świadomości, że większość chorych umrze

- naraża siebie na niebezpieczeństwo w imię walki ze złem, którego przyczyny nie potrafi zrozumieć

P:

- Postawy ludzi, którzy potrafią zaryzykować swoim życiem dla dobra innych są bezsprecznie wyrazem wielkoduszności i dobroci bohaterów zasługujących na wszelkie uznanie i szacunek. Niewielu ludzi jest gotów na takie poświęcenie` ,

/////////////////////////////////////////////////////////

`5. Problematyka winy i kary - Mitologia Jana Parandowskiego

W:

- żadna wina nie pozostaje bez kary - uniwersalna prawda moralna

- to prawo uwzględniają systemy sądowe stworzone przez ludzi

- jest to problematyka podejmowana w literaturze od starożytności aż do czasów współczesnych

t: kara jest następstwem każdej winy, chociaż może przybrać różne formy

1. Mitologia (mit o Syzyfie)

- Syzyf - król Koryntu, który cieszył się szacunkiem i zaufaniem bogów

- zdradził sekret Zeusa i zawiódł jego zaufanie, za co bóg skazał go na śmierć

- Syzyf chciał uniknąć śmierci, uwięził Tanatosa w lochach, przez co ludzie przestali umierać

- Zeus w końcu uwolnił Tanatosa

- Syzyf nakazał żonie, by nie grzebała jego ciała, a później poskarżył się na nią gdy znalazł się w Hadesie

- dostał pozwolenie, by wrócić na ziemię, aby ukarać żonę i żył ponownie, dopóki nie przypomnieli sobie o nim bogowie

- dostał wtedy wieczną karę - musiał wtaczać kamień pod górę. Kara spotkała go, ponieważ chciał oszukać przeznaczenie

2. Fiodor Dostojewski - Zbrodnia i kara

- Rodion Raskolnikow i jego teoria o nadludziach

- Zbrodnia - zabójstwo lichwiarki "w imię dobra ludzkości", a realnie, by przekonać się o swojej wyższości

- wyrzuty sumienia, problemy psychiczne, nieumiejętność poradzenia sobie ze swoim czynem

- kara - obalenie własnej teorii, świadomość, że nie jest wyjątkowy, a później także zsyłka na Syberię

P: kara może mieć wymiar fizyczny, ale także godzić w człowieka psychicznie, rujnować jego wcześniejsze spojrzenie na świat.

` ,

//////////////////////////////////////////////

`
6. Miłość silniejsza niż śmierć - Mitologia Jana Parandowskiego

W:

- siła miłości to temat ponadczasowy, od wieków podejmowany w literaturze

- miłość potrafi zmieniać życie ludzkie na lepsze, motywować do dobrych czynów, ale również prowadzić do tragedii

t:

- prawdziwa miłość może stać się dla ludzi ważniejsza od własnego życia, przezwyciężając śmierć

1. Jan Parandowski - Mitologia (Mit o Orfeuszu i Eurydyce)

- Orfeusz - wybitny pieśniarz, wirtuoz gry na lutni, która miała niesamowity wpływ na ludzi i przyrodę

- Orfeusz pogrążył się w rozpaczy po śmierci żony, która umarła przez ukąszenie żmii

- by odzyskać żonę udał się do Hadesu, przekonał Hadesa i Persefonę swoją pieśnią i miłością do żony (miłość była dla niego ponad strach przed śmiercią)

- miał odzyskać Eurydykę, jeśli nie obejrzy się za siebie, gdy będą wracać z podziemii. Stęskniony widoku żony, obrócił się i utracił Eurydykę bezpowrotnie. Myślał o niej do końca życia, a jego miłość stała się wieczna.

2. William Szekspir - Romeo i Julia

- jedna z najbardziej znanych historii miłosnych w literaturze

- konflikt między rodzinami Kapuletów i Montekich

- ślub w tajemnicy wyrazem niezwykle silnej miłości

- Romeo wygnany z miasta przez zabójstwo Tybalta (kuzyna Julii)

- Julia bierze lek usypiający i pozoruje śmierć, by nie wychodzić za Parysa

- Romeo otruwa się, pewny, że Julia umarła

- Julia zabija się sztyletem Romea, miłość staje się wieczna, a rodziny się godzą

P: Bohaterowie są w stanie stracić życie, poświęcając się dla miłości lub nie będąc w stanie doświadczyć jej na ziemii
` ,

///////////////////////////////////////////////

`
7. Heroizm jako postawa człowieka w zmaganiu się z losem - Iliada Homera

W: - heroizm - zdolność do wielkich czynów - odwagi, determinacji, walki w imię idei uznawanych za słuszne, nawet gdy sytuacja wydaje się być skazana na porażkę

t: heroizm staje się źródłem inspiracji dla innych, którzy podziwiają poświęcenie w imię dobrych wartości , nawet mimo świadomości nadciągającej przegranej

1. Homer - Iliada

- Parys porwał Helenę - żonę króla Sparty - Menelaosa, co doprowadza do wojny trojańskiej - między Grekami (Spartanie), a mieszkańcami Troi

- Achilles - wojownik Greków, Hektor - bohater Trojański

- Hektor świadomy, że prawdopodobnie umrze, podejmuje walkę by zachować honor, broniąc Troi, swojego miasta i rodziny.

- Achilles walczy, mimo świadomości, że wybiera krótkie życie, decyduje się na walkę i udział w wojnie, ale ważniejsza jest dla niego chwała i pomszczenie swojego przyjaciela - Patroklosa

- Priam udaje się do namiotu Achillesa, by prosić o ciało zabitego Hektora - determinacja i odwaga, by godnie pochować syna

2. Albert Camus - Dżuma

- Bernard Rieux walczy z chorobą mimo świadomości, że większość chorych umrze - postawa heroiczna

- Doktor narażał swoje życie, lecz nie miał wątpliwości co do celowości swoich czynów - celem była walka ze złem, podjęcie działania

P: Heroizm to przede wszystkim podjęcie działań uważanych za słuszne, postawienie wyznawanych wartości ponad wszystko inne, mimo świadomości często tragicznej sytuacji
` ,

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
