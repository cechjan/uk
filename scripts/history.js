/*
    55. př. n. l. - 1000    
*/
const events1Period = [
    {
        "year":"55 - 54 př. n. l.",
        "description":"Napadení Juliusem Cesarem",
        "detail":"Ostrov Velkou Británii, který tenkrát obývaly různé keltské kmeny, napadl Julius Caesar v rámci svého galského tažení dvěma výpravami v letech 55 až 54 př. n. l. Dosadil zde sobě nakloněného krále a začal vybírat tribut."
    },
    {
        "year":"43 - 47",
        "description":"Claudiova výprava",
        "detail":"Trvale si Římané jih Velké Británie podrobili Claudiovou výpravou z let 43 až 47 a zorganizovali zde svou provincii, kterou později za císaře Hadriána opevnili ze severu Hadriánovým valem proti severobritským kmenům, jako byli Piktové."
    },
    {
        "year":"287 - 296",
        "description":"Odtržení a dobytí",
        "detail":"Roku 287 Británii od římské říše odtrhl vzbouřený důstojník Carausius, západní caesar Constantius I. Chlorus ji však roku 296 dobyl zpět."
    },
    {
        "year":"409",
        "description":"Konec římské nadvlády",
        "detail":"Římskou nadvládu nad Británií v době hroutící se západní části impéria ukončila armádní vzpoura z roku 409, byť zde přinejmenším do 40. let 5. století přetrvaly poměry římské doby."
    },
    {
        "year":"5. - 7. století",
        "description":"Vpád germánských kmenů",
        "detail":"Po pádu římské moci v 5. století na ostrovy pronikaly germánské kmeny Anglosasové. Jejich jazyk je základem dnešní angličtiny. Byly položeny základy pozdějšího Skotského království. V 7. století vykrystalizovalo sedm nejdůležitějších anglosaských království v dnešní Anglii, a to Wessex, Sussex, Essex, Northumbrie, Mercie, Východní Anglie a Kent."
    },
    {
        "year":"789 - 926",
        "description":"Nájezdy Vikingů",
        "detail":"Roku 789 došlo k prvnímu nájezdu loupeživých Vikingů. Dánská invaze ve východní Anglii roku 865, kterou vedli Halfdan Ragnarsson a Ivar Bezkostý, pak znamenala začátek trvalé přítomnosti Vikingů v Anglii. Jejich hlavním protivníkem tehdy byl wessexský král Alfréd Veliký."
    }
]

const people1Period = [
    {
        "name":"Julius Caesar",
        "birth":"12./13. 7. 100 př. n. l.",
        "death":"15. 3. 44 př. n. l.",
        "biography":"Gaius Julius Caesar byl vojevůdce a politik a jeden z nejmocnějších mužů antické historie. Sehrál klíčovou roli v procesu zániku římské republiky a její transformace v monarchii.",
        "picture":"img/juliuscaesar.jpg"
    },
    {
        "name":"Claudius",
        "birth":"1. 8. 10 př. n. l.",
        "death":"13. 10. 54",
        "biography":"Tiberius Claudius Caesar Augustus Germanicus, známý spíše jako Claudius, byl římský císař z julsko-klaudijské dynastie, vládnoucí od roku 41 až do své smrti.",
        "picture":"img/claudius.png"
    },
    {
        "name":"Hadrianus",
        "birth":"24. 1. 76",
        "death":"10. 7. 138",
        "biography":"Publius Aelius Hadrianus, běžně známý jako Hadrianus, byl římský císař v letech 117 až 138. Náležel k tzv. adoptivním císařům, mezi nimiž vládl jako třetí v pořadí.",
        "picture":"img/hadrianus.png"
    },
    {
        "name":"Constantius I. Chlorus",
        "birth":"31. 3. 250",
        "death":"25. 7. 306",
        "biography":"Flavius Valerius Constantius, známý jako Constantius I., byzantskými historiky přezdívaný Chlorus („bledý“), byl císařem na západě římské říše v době existence tetrarchie.",
        "picture":"img/chlorus.png"
    },
    {
        "name":"Halfdan Ragnarsson",
        "birth":"?",
        "death":"877",
        "biography":"Halfdan Ragnarsson byl vikingský vůdce a velitel Velké pohanské armády, která napadla anglosaská království v roce 865.",
        "picture":"img/ragnarsson.png"
    },
    {
        "name":"Alfréd Veliký",
        "birth":"849",
        "death":"26. 10. 899",
        "biography":"Alfréd Veliký byl v letech 871 až 899 králem anglosaského království Wessex. Je oceňován pro obranu království proti Vikingům.",
        "picture":"img/alfredveliky.png"
    },
]

/*
    1001 - 1500
*/
const events2Period = [
    {
        "year":"1066",
        "description":"Smrt krále a invaze",
        "detail":"Smrt Eduarda Vyznavače roku 1066 přivodila dynastickou krizi, na kterou sousedé anglosaského království, Dánové a Normané, reagovali invazí. Poslední anglosaský král Harold II. odrazil Dány, avšak vylodění normanského vévody Viléma Dobyvatele již nedokázal čelit. Bitva u Hastingsu 14. října 1066 znamenala Haroldovu smrt a podrobení Anglie Normanům. Francouzsky mluvící Normané postupně zabrali velkou část Británie a spojili Velkou Británii do jednoho celku s Normandií, a tím i Francií. Toto spojení existovalo až do roku 1204."
    },
    {
        "year":"1120",
        "description":"Vymření normanské dynastie	",
        "detail":"Potopení Bílé lodi (1120) s jediným dědicem trůnu Vilémem Aethelingem na palubě způsobilo vymření normanské dynastie."
    },
    {
        "year":"1215",
        "description":"Britská konstituční monarchie",
        "detail":"Slabý král Jan Bezzemek ztratil počátkem 13. století většinu pevninských držav ve prospěch francouzského krále, a byl pak roku 1215 anglickými velmoži donucen přijmout Velkou listinu práv a svobod omezující královskou moc a považovanou někdy za zárodek budoucí britské konstituční monarchie."
    },
    {
        "year":"1328 - 1453",
        "description":"Stoletá válka",
        "detail":"Vymření Kapetovců ve Francii roku 1328 umožnilo anglickému králi Eduardu III. vznést nárok na pařížský trůn. Tím vyvolané politické napětí roku 1337 vyústilo ve stoletou válku s Francií, jež s přestávkami trvala do roku 1453"
    }
]

const people2Period = [
    {
        "name":"Eduard III. Vyznavač",
        "birth":"1003",
        "death":"5. 1. 1066",
        "biography":"Eduard III. Vyznavač byl předposledním anglickým králem anglosaského původu. Vládl od roku 1042 až do své smrti.",
        "picture":"img/eduardIIIvyznavac.png"
    },
    {
        "name":"Harold II. Godwinson",
        "birth":"1022",
        "death":"14. 10. 1066",
        "biography":"Harold II. Godwinson byl poslední korunovaný anglosaský král Anglie. Vládl v období po smrti svého předchůdce Eduarda III.",
        "picture":"img/Harold2.png"
    },
    {
        "name":"Vilém I. Dobyvatel",
        "birth":"1028",
        "death":"9. 9. 1087",
        "biography":"Vilém I. Dobyvatel byl jako Vilém II. Normanský v letech 1035 – 1087 normandský vévoda a v letech 1066 – 1087 navíc anglický král.",
        "picture":"img/VilemDobyvatel.png"
    },
    {
        "name":"Vilém Aetheling",
        "birth":"5. 8. 1103",
        "death":"25. 11. 1120",
        "biography":"Vilém Aetheling byl normandský vévoda a jediný legitimní syn anglického krále Jindřicha I. Zahynul společně s mnoha syny normandské šlechty při ztroskotání Bílé lodi.",
        "picture":"img/vilemAetheling.png"
    },
    {
        "name":"Jan Bezzemek",
        "birth":"24. 12. 1166",
        "death":"18./19. 10. 1216",
        "biography":"Jan zvaný Bezzemek (anglicky: John Lackland) byl králem Anglie z rodu Plantagenetů.",
        "picture":"img/JanBezzemek.png"
    },
    {
        "name":"Eduard III.",
        "birth":"13. 11. 1312",
        "death":"21. 7. 1377",
        "biography":"Eduard III. byl jeden z nejúspěšnějších králů Anglie ve středověku. Obnovil autoritu krále po katastrofální vládě svého otce Eduarda II. a změnil Anglii v jednu z nejmocnějších vojenských mocností Evropy.",
        "picture":"img/eduardIII.png"
    },
]

/*
    1501 - 1700
*/
const events3Period = [
    {
        "year":"1527 – 1534",
        "description":"Spor s papežem",
        "detail":"V době počínající reformace se Jindřich VIII. vzepřel papeži, aby dosáhl rozvodu s Kateřinou Aragonskou. Tím Jindřich VIII. roku 1534 zahájil anglickou reformaci a zároveň ustavil absolutistickou monarchii, v níž světská i duchovní moc pochází od krále."
    },
    {
        "year":"druhá polovina 15. století",
        "description":"Vláda žen",
        "detail":"Po smrti patnáctiletého Eduarda VI. se na anglickém trůně vystřídaly tři ženy. Jana Greyová vládla jen devět dní, než ji svrhla Marie I., jež se neúspěšně pokusila vrátit Anglii ke katolictví a svými brutálními metodami si vysloužila přízvisko Krvavá. Protestantka Alžběta I. pak vládla 44 let a do její vlády připadá odražení španělského pokusu o invazi."
    },
    {
        "year":"1603",
        "description":"Spojení Skotska s Anglií	",
        "detail":"Alžbětou Tudorovci vymřeli a trůn roku 1603 zdědil skotský král Jakub VI. Stuart, jenž pak Anglii vládl jako Jakub I. Později zákony o unii z roku 1707 Skotsko s Anglií spojily do unitárního Království Velké Británie."
    },
]

const people3Period = [
    {
        "name":"Jindřich VIII. Tudor",
        "birth":"28. 6. 1491",
        "death":"28. 1. 1547",
        "biography":"Jindřich VIII. Tudor byl král Anglie, Irska a uchazeč o trůn Francie. Byl následníkem Jindřicha VII. a druhý anglický panovník z rodu Tudorovců.",
        "picture":"img/jindrichVIIITudor.png"
    },
    {
        "name":"Eduard VI.",
        "birth":"12. 10. 1537",
        "death":"6. 7. 1553",
        "biography":"Eduard VI. byl třetí anglický král z rodu Tudorovců, který nastoupil na trůn v devíti letech po smrti svého otce Jindřicha VIII.",
        "picture":"img/eduardVI.png"
    },
    {
        "name":"Jana Greyová",
        "birth":"1536",
        "death":"12. 2. 1554",
        "biography":"Jana Greyová byla vládnoucí královna Anglie a Irska po devět dní v roce 1553.",
        "picture":"img/janaGreyova.png"
    },
    {
        "name":"Marie I. Tudorovna",
        "birth":"18. 2. 1516",
        "death":"17. 11. 1558",
        "biography":"Marie I. Tudorovna byla královna Anglie a Irska. Stala se čtvrtým korunovaným panovníkem z rodu Tudorovců.",
        "picture":"img/marieItudorovna.png"
    },
    {
        "name":"Alžběta I.",
        "birth":"7. 9. 1533",
        "death":"24. 3. 1603",
        "biography":"Alžběta I. byla královna Anglie a Irska. Byla dcerou Jindřicha VIII. a jeho druhé ženy Anny Boleynové a stala se pátou a poslední panovnicí z rodu Tudorovců.",
        "picture":"img/alzbetaI.png"
    },
    {
        "name":"Jakub I. Stuart",
        "birth":"19. 6. 1566",
        "death":"27. 3. 1625",
        "biography":"Jakub I. Stuart byl král Skotska jako Jakub VI. a Anglie jako Jakub I. Stal se nástupcem posledního panovníka Anglie a Irska z rodu Tudorovců Alžběty I.",
        "picture":"img/jakubIstuart.png"
    },
]

/*
    1701 - 1900
*/
const events4Period = [
    {
        "year":"1701 - 1714",
        "description":"Hannoverská dynastie",
        "detail":"Zákon o nástupnictví (1701) vyloučil katolické Stuartovce z dědictví trůnu, a tak roku 1714 britskou korunu získal hannoverský kurfiřt Jiří I."
    },
    {
        "year":"1713 – 1776",
        "description":"Koloniální expanze",
        "detail":"Mezinárodní postavení Velké Británie, posílené úspěchem ve válce o španělské dědictví a po ní následujícím utrechtským mírem (1713), umožnilo další koloniální expanzi v zámoří. \„První Britskou říši\" v Severní Americe rozbila americká revoluce: třináct kolonií se roku 1776 odtrhlo, odrazilo britská intervenční vojska a založilo Spojené státy americké. Pozornost Britů se tak upřela na další kontinenty. Již roku 1770 mořeplavec James Cook prohlásil Austrálii za britské území."
    },
    {
        "year":"polovina 18. Století",
        "description":"Zemědělská a průmyslová revoluce	",
        "detail":"Kolem poloviny 18. století začala v Británii zemědělská a průmyslová revoluce. Rozvoj průmyslu vyžadoval a podnítil vynálezy, jako byly tkalcovský stav s létajícím člunkem, dopřádací stroj či mykací stroj, průmyslově použitelný parní stroj (pracovali na něm mj. Thomas Newcomen, 1712, a James Watt, 1765), portlandský cement, parní lokomotiva nebo Bessemerův proces výroby oceli. Ruku v ruce s tím šel rozmach věd. A to jak přírodních, jež zastupovali například biolog Charles Darwin či fyzikové Michael Faraday a James Clerk Maxwell, tak i humanitních."
    },
]

const people4Period = [
    {
        "name":"Jiří I.",
        "birth":"28. 5. 1660",
        "death":"11. 6. 1727",
        "biography":"Jiří I. byl od roku 1698 vévoda brunšvicko-lüneburský od roku 1708 kurfiřt hannoverský a od 1. srpna 1714 panovník Království Velké Británie a Irska.",
        "picture":"img/jiriI.png"
    },
    {
        "name":"James Cook",
        "birth":"27. 10. 1728",
        "death":"14. 2. 1779",
        "biography":"James Cook byl mořeplavec, objevitel a výzkumník, jehož plavby a hlavně vydané práce výrazně posunuly znalosti o Zemi.",
        "picture":"img/jamesCook.png"
    },
    {
        "name":"Thomas Newcomen",
        "birth":"24. 2. 1663",
        "death":"5. 8. 1729",
        "biography":"Thomas Newcomen byl anglický kovář a vynálezce, tvůrce prvních parních strojů.",
        "picture":"img/thomasNewcomen.png"
    },
    {
        "name":"James Watt",
        "birth":"19. 1. 1736",
        "death":"25. 8. 1819",
        "biography":"James Watt byl skotský fyzik, mechanik, matematik a vynálezce-samouk, známý především skrze své vynálezy a vylepšení parních strojů.",
        "picture":"img/jamesWatt.png"
    },
    {
        "name":"Charles Darwin",
        "birth":"12. 2. 1809",
        "death":"19. 4. 1882",
        "biography":"Charles Robert Darwin, byl britský přírodovědec a zakladatel evoluční biologie. Evoluční teorii opíral o přírodní výběr a pohlavní výběr.",
        "picture":"img/charlesDarwin.png"
    },
    {
        "name":"Michael Faraday",
        "birth":"22. 9. 1791",
        "death":"25. 8. 1867",
        "biography":"Michael Faraday byl anglický chemik a fyzik. V roce 1831 objevil elektromagnetickou indukci, magnetické a elektrické siločáry.",
        "picture":"img/michaelFaraday.png"
    },
    {
        "name":"James Clerk Maxwell",
        "birth":"13. 6. 1831",
        "death":"5. 11. 1879",
        "biography":"James Clerk Maxwell byl skotský všestranný fyzik. Jeho nejvýznamnějším objevem je obecný matematický popis elmag. pole.",
        "picture":"img/jamesMaxwell.png"
    },
]

/*
    1901 - 1938
*/
const events5Period = [
    {
        "year":"1914",
        "description":"Británie a první světová válka",
        "detail":"Konflikt Rakouska-Uherska a Srbska v létě 1914 se velmocím nepodařilo vyřešit ani omezit, postupně se zapojovaly další státy, až 4. srpna i Velká Británie vyhlásila válku Německu poté, co přepadlo Belgii. Britové bojující po boku Francouzů zde utrpěli mnohasettisícové ztráty."
    },
    {
        "year":"1916",
        "description":"První tanky v bitvě",
        "detail":"V září 1916 Britové na Sommě nasadili vozy Mark I, první bojeschopné tanky světa."
    },
    {
        "year":"1918",
        "description":"Volební právo pro ženy",
        "detail":"Válka přinesla mnoho změn ve společnosti a politice. Ženy, jež za války musely přebírat mnoho tradičně mužských činností, získaly volební právo."
    },
    {
        "year":"1928",
        "description":"Objev penicilínu",
        "detail":"K tehdejším britským vědcům patřili například objevitel penicilínu Alexander Fleming."
    },
    {
        "year":"1931",
        "description":"Velká hospodářská krize",
        "detail":"Velká hospodářská krize zasáhla Británii roku 1931."
    },
]

const people5Period = [
    {
        "name":"David Lloyd George",
        "birth":"17. 1. 1863",
        "death":"26. 3. 1945",
        "biography":"David Lloyd George, 1. hrabě z Dwyforu, byl britský státník a jediný premiér, který pocházel z Walesu.",
        "picture":"img/davidGeorge.png"
    },
    {
        "name":"Ramsay MacDonald",
        "birth":"12. 10. 1866",
        "death":"9. 11. 1937",
        "biography":"James Ramsay MacDonald byl britský státník, člen Labouristické strany a premiér.",
        "picture":"img/ramsayMacDonald.png"
    },
    {
        "name":"Stanley Baldwin",
        "birth":"3. 8. 1867",
        "death":"14. 12. 1947",
        "biography":"Stanley Baldwin, 1. hrabě Baldwin z Bewdley, byl britský státník, člen Konzervativní strany, premiér a vůdčí postava britské politiky v meziválečném období.",
        "picture":"img/stanleyBaldwin.png"
    },
    {
        "name":"Charlie Chaplin",
        "birth":"16. 4. 1889",
        "death":"25. 12. 1977",
        "biography":"Charlie Chaplin, byl britský herec, režisér a scenárista, který patřil k nejslavnějším světovým filmovým tvůrcům 20. století.",
        "picture":"img/charlieChaplin.png"
    },
    {
        "name":"Alexander Fleming",
        "birth":"6. 8. 1881",
        "death":"11. 3. 1955",
        "biography":"Sir Alexander Fleming byl skotský lékař známý objevem baktericidních účinků lysozymu, ale hlavně získáním penicilinu.",
        "picture":"img/alexanderFleming.png"
    },
]

/*
    1939 - 1947
*/
const events6Period = [
    {
        "year":"1939",
        "description":"Británie a druhá světová válka",
        "detail":"Po německém přepadení britského spojence Polska 1. září 1939 začala druhá světová válka, do které Velká Británie vstoupila 3. září."
    },
    {
        "year":"1940",
        "description":"Invaze na britské ostrovy",
        "detail":"Němci plánovali invazi na britské ostrovy, ale nejprve potřebovali dosáhnout vzdušné nadvlády. To se jim však nepodařilo, když v létě 1940 RAF porazila německou Luftwaffe v bitvě o Británii."
    },
    {
        "year":"1942",
        "description":"Británie a Československo",
        "detail":"V Londýně se usídlila exilová vláda Československa a její vojáci bojovali bok po boku Britů. K jejich úspěchům patřil atentát na nacistického pohlavára Heydricha, provedený československými parašutisty vysazenými britským letectvem."
    },
    {
        "year":"1947",
        "description":"Rozklad britské koloniální říše",
        "detail":"Druhá světová válka urychlila rozklad britské koloniální říše; její nejlidnatější část, Indie, získala nezávislost roku 1947 (Zákon o nezávislosti Indie)."
    },
]

const people6Period = [
    {
        "name":"Winston Churchill",
        "birth":"30. 11. 1874",
        "death":"24. 1. 1965",
        "biography":"Sir Winston Leonard Spencer-Churchill byl britský politik, státník, premiér Spojeného království v letech 1940–1945 a 1951–1955.",
        "picture":"img/winstonChurchill.png"
    },
    {
        "name":"Jozef Gabčík",
        "birth":"8. 4. 1912",
        "death":"18. 6. 1942",
        "biography":"Jozef Gabčík byl voják československé armády v zahraničí ve Francii a Velké Británii.",
        "picture":"img/jozefGabcik.png"
    },
    {
        "name":"Jan Kubiš",
        "birth":"24. 6. 1913",
        "death":"18. 6. 1942",
        "biography":"Jan Kubiš byl příslušník československé zahraniční armády ve Velké Británii.",
        "picture":"img/janKubis.png"
    },
]

$(function(){

    $("#rok-obdobi").text("Období: " + $("[checked=checked]").parent().text());

    $("label").on("click", function(){
        $("#rok-obdobi").text("Období: " + $(this).text());
    });

    events1Period.forEach((event)=>{

        let nadpis = document.getElementById("nadpis");
        let casovaOsa = nadpis.offsetWidth / events1Period.length;
        console.log(casovaOsa);

        /*$("#udalosti-text").html(`${event.description} &nbsp;&nbsp; ${event.year} <br> ${event.detail}`);*/
        /*$("#udalosti-text").append(`<div>${event.description} &nbsp;&nbsp; ${event.year} <br> ${event.detail}</div><br>`);*/
        $("#udalosti-text").append(`<div style="width:${casovaOsa}px;" class="casovaOsaRoky text-center">${event.year}</div>`);
    });
    $(".casovaOsaRoky").append("<hr>");
    $(".casovaOsaRoky").on("click", function(){
        events1Period.forEach((event)=>{
            if(event.year == $(this).text()){
                $(".casovaOsaRoky").css({"font-weight":"normal"});
                $(".udalost").hide(500);
                $(".udalosti").empty();
                $("#udalosti-text").append(`<p class="udalost opacityEffect-history"><br><b>${event.description}</b><br>${event.detail}</p>`);
                $(this).css({"font-weight":"bold"});
            }
        });
    });

    people1Period.forEach((people)=>{
        /*$("#osoby-text").append(`<div>${people.name} &nbsp;&nbsp; * ${people.birth} &nbsp;&nbsp; X ${people.death} <br> ${people.biography}</div><br>`);*/
        $(".picture").append(`<div class="div-parent card">
                                <div>
                                    <img src="${people.picture}" alt="${people.name}" class="card-img">
                                    <i class="fas fa-chevron-right arrow"></i>
                                </div>
                                </div>
                                <p class="people-biography"><b>${people.name}</b> <br> ${people.biography}</p>`);
    });
    $(".people-biography").hide();
        $(".arrow").on("click", function(){
            $(".people-biography").hide(500);
            $(this).parents(".div-parent").next("p").show(500);
    });
    

    $('#btn1').on('click', function(){

        let nadpis = document.getElementById("nadpis");
        let casovaOsa = nadpis.offsetWidth / events1Period.length;
        console.log(casovaOsa);

        $("#udalosti-text").empty();
        $("#osoby-text").empty();
        $(".picture").empty();
        events1Period.forEach((event)=>{
            /*$("#udalosti-text").html(`${event.description} &nbsp;&nbsp; ${event.year} <br> ${event.detail}`);*/
            /*$("#udalosti-text").append(`<div>${event.description} &nbsp;&nbsp; ${event.year} <br> ${event.detail}</div><br>`);*/
            $("#udalosti-text").append(`<div style="width:${casovaOsa}px;" class="casovaOsaRoky text-center">${event.year}</div>`);
        });
        $(".casovaOsaRoky").append("<hr>");
        $(".casovaOsaRoky").on("click", function(){
            events1Period.forEach((event)=>{
                if(event.year == $(this).text()){
                    $(".casovaOsaRoky").css({"font-weight":"normal"});
                    $(".udalost").hide(500);
                    $(".udalosti").empty();
                    $("#udalosti-text").append(`<p class="udalost opacityEffect-history"><br><b>${event.description}</b><br>${event.detail}</p>`);
                    $(this).css({"font-weight":"bold"});
                }
            });
        });

        people1Period.forEach((people)=>{
            /*$("#osoby-text").append(`<div>${people.name} &nbsp;&nbsp; * ${people.birth} &nbsp;&nbsp; X ${people.death} <br> ${people.biography}</div><br>`);*/
            $(".picture").append(`<div class="div-parent card">
                                    <div>
                                        <img src="${people.picture}" alt="${people.name}" class="card-img">
                                        <i class="fas fa-chevron-right arrow"></i>
                                    </div>
                                </div>
                                <p class="people-biography"><b>${people.name}</b> <br> ${people.biography}</p>`);
        });
        $(".people-biography").hide();
        $(".arrow").on("click", function(){
            $(".people-biography").hide(500);
            $(this).parents(".div-parent").next("p").show(500);
        });
    });

    $('#btn2').on('click', function(){

        let nadpis = document.getElementById("nadpis");
        let casovaOsa = nadpis.offsetWidth / events2Period.length;
        console.log(casovaOsa);

        $("#udalosti-text").empty();
        $("#osoby-text").empty();
        $(".picture").empty();
        events2Period.forEach((event)=>{
            /*$("#udalosti-text").append(`<div>${event.description} &nbsp;&nbsp; ${event.year} <br> ${event.detail}</div><br>`);*/
            $("#udalosti-text").append(`<div style="width:${casovaOsa}px;" class="casovaOsaRoky text-center">${event.year}</div>`);
        });
        $(".casovaOsaRoky").append("<hr>");
        $(".casovaOsaRoky").on("click", function(){
            events2Period.forEach((event)=>{
                if(event.year == $(this).text()){
                    $(".casovaOsaRoky").css({"font-weight":"normal"});
                    $(".udalost").hide(500);
                    $(".udalosti").empty();
                    $("#udalosti-text").append(`<p class="udalost opacityEffect-history"><br><b>${event.description}</b><br>${event.detail}</p>`);
                    $(this).css({"font-weight":"bold"});
                }
            });
        });

        people2Period.forEach((people)=>{
            /*$("#osoby-text").append(`<div>${people.name} &nbsp;&nbsp; * ${people.birth} &nbsp;&nbsp; X ${people.death} <br> ${people.biography}</div><br>`);*/
            $(".picture").append(`<div class="div-parent card">
                                    <div>
                                        <img src="${people.picture}" alt="${people.name}" class="card-img">
                                        <i class="fas fa-chevron-right arrow"></i>
                                    </div>
                                </div>
                                <p class="people-biography"><b>${people.name}</b> <br> ${people.biography}</p>`);
        });
        $(".people-biography").hide();
        $(".arrow").on("click", function(){
            $(".people-biography").hide(500);
            $(this).parents(".div-parent").next("p").show(500);
        });
    });
    
    $('#btn3').on('click', function(){

        let nadpis = document.getElementById("nadpis");
        let casovaOsa = nadpis.offsetWidth / events3Period.length;
        console.log(casovaOsa);

        $("#udalosti-text").empty();
        $("#osoby-text").empty();
        $(".picture").empty();
        events3Period.forEach((event)=>{
            /*$("#udalosti-text").append(`<div>${event.description} &nbsp;&nbsp; ${event.year} <br> ${event.detail}</div><br>`);*/
            $("#udalosti-text").append(`<div style="width:${casovaOsa}px;" class="casovaOsaRoky text-center">${event.year}</div>`);
        });
        $(".casovaOsaRoky").append("<hr>");
        $(".casovaOsaRoky").on("click", function(){
            events3Period.forEach((event)=>{
                if(event.year == $(this).text()){
                    $(".casovaOsaRoky").css({"font-weight":"normal"});
                    $(".udalost").hide(500);
                    $(".udalosti").empty();
                    $("#udalosti-text").append(`<p class="udalost opacityEffect-history"><br><b>${event.description}</b><br>${event.detail}</p>`);
                    $(this).css({"font-weight":"bold"});
                }
            });
        });

        people3Period.forEach((people)=>{
            /*$("#osoby-text").append(`<div>${people.name} &nbsp;&nbsp; * ${people.birth} &nbsp;&nbsp; X ${people.death} <br> ${people.biography}</div><br>`);*/
            $(".picture").append(`<div class="div-parent card">
                                    <div>
                                        <img src="${people.picture}" alt="${people.name}" class="card-img">
                                        <i class="fas fa-chevron-right arrow"></i>
                                    </div>
                                </div>
                                <p class="people-biography"><b>${people.name}</b> <br> ${people.biography}</p>`);
        });
        $(".people-biography").hide();
        $(".arrow").on("click", function(){
            $(".people-biography").hide(500);
            $(this).parents(".div-parent").next("p").show(500);
        });
    });

    $('#btn4').on('click', function(){

        let nadpis = document.getElementById("nadpis");
        let casovaOsa = nadpis.offsetWidth / events4Period.length;
        console.log(casovaOsa);

        $("#udalosti-text").empty();
        $("#osoby-text").empty();
        $(".picture").empty();
        events4Period.forEach((event)=>{
            /*$("#udalosti-text").append(`<div>${event.description} &nbsp;&nbsp; ${event.year} <br> ${event.detail}</div><br>`);*/
            $("#udalosti-text").append(`<div style="width:${casovaOsa}px;" class="casovaOsaRoky text-center">${event.year}</div>`);
        });
        $(".casovaOsaRoky").append("<hr>");
        $(".casovaOsaRoky").on("click", function(){
            events4Period.forEach((event)=>{
                if(event.year == $(this).text()){
                    $(".casovaOsaRoky").css({"font-weight":"normal"});
                    $(".udalost").hide(500);
                    $(".udalosti").empty();
                    $("#udalosti-text").append(`<p class="udalost opacityEffect-history"><br><b>${event.description}</b><br>${event.detail}</p>`);
                    $(this).css({"font-weight":"bold"});
                }
            });
        });

        people4Period.forEach((people)=>{
            /*$("#osoby-text").append(`<div>${people.name} &nbsp;&nbsp; * ${people.birth} &nbsp;&nbsp; X ${people.death} <br> ${people.biography}</div><br>`);*/
            $(".picture").append(`<div class="div-parent card">
                                    <div>
                                        <img src="${people.picture}" alt="${people.name}" class="card-img">
                                        <i class="fas fa-chevron-right arrow"></i>
                                    </div>
                                </div>
                                <p class="people-biography"><b>${people.name}</b> <br> ${people.biography}</p>`);
        });
        $(".people-biography").hide();
        $(".arrow").on("click", function(){
            $(".people-biography").hide(500);
            $(this).parents(".div-parent").next("p").show(500);
        });
    });

    $('#btn5').on('click', function(){

        let nadpis = document.getElementById("nadpis");
        let casovaOsa = nadpis.offsetWidth / events5Period.length;
        console.log(casovaOsa);

        $("#udalosti-text").empty();
        $("#osoby-text").empty();
        $(".picture").empty();
        events5Period.forEach((event)=>{
            /*$("#udalosti-text").append(`<div>${event.description} &nbsp;&nbsp; ${event.year} <br> ${event.detail}</div><br>`);*/
            $("#udalosti-text").append(`<div style="width:${casovaOsa}px;" class="casovaOsaRoky text-center">${event.year}</div>`);
        });
        $(".casovaOsaRoky").append("<hr>");
        $(".casovaOsaRoky").on("click", function(){
            events5Period.forEach((event)=>{
                if(event.year == $(this).text()){
                    $(".casovaOsaRoky").css({"font-weight":"normal"});
                    $(".udalost").hide(500);
                    $(".udalosti").empty();
                    $("#udalosti-text").append(`<p class="udalost opacityEffect-history"><br><b>${event.description}</b><br>${event.detail}</p>`);
                    $(this).css({"font-weight":"bold"});
                }
            });
        });

        people5Period.forEach((people)=>{
            /*$("#osoby-text").append(`<div>${people.name} &nbsp;&nbsp; * ${people.birth} &nbsp;&nbsp; X ${people.death} <br> ${people.biography}</div><br>`);*/
            $(".picture").append(`<div class="div-parent card">
                                    <div>
                                        <img src="${people.picture}" alt="${people.name}" class="card-img">
                                        <i class="fas fa-chevron-right arrow"></i>
                                    </div>
                                </div>
                                <p class="people-biography"><b>${people.name}</b> <br> ${people.biography}</p>`);
        });
        $(".people-biography").hide();
        $(".arrow").on("click", function(){
            $(".people-biography").hide(500);
            $(this).parents(".div-parent").next("p").show(500);
        });
    });

    $('#btn6').on('click', function(){

        let nadpis = document.getElementById("nadpis");
        let casovaOsa = nadpis.offsetWidth / events6Period.length;
        console.log(casovaOsa);

        $("#udalosti-text").empty();
        $("#osoby-text").empty();
        $(".picture").empty();

        events6Period.forEach((event)=>{
            /*$("#udalosti-text").append(`<div>${event.description} &nbsp;&nbsp; ${event.year} <br> ${event.detail}</div><br>`);*/
            $("#udalosti-text").append(`<div style="width:${casovaOsa}px;" class="casovaOsaRoky text-center">${event.year}</div>`);
        });
        $(".casovaOsaRoky").append("<hr>");
        /*events6Period.forEach((event)=>{
            $("#udalosti-text").append(`<p class="udalost"><b>${event.description}</b><br>${event.detail}</p>`);
        });*/
        /*$(".udalost").hide();*/
        $(".casovaOsaRoky").on("click", function(){
            events6Period.forEach((event)=>{
                if(event.year == $(this).text()){
                    $(".casovaOsaRoky").css({"font-weight":"normal"});
                    $(".udalost").hide(500);
                    $(".udalosti").empty();
                    $("#udalosti-text").append(`<p class="udalost opacityEffect-history"><br><b>${event.description}</b><br>${event.detail}</p>`);
                    $(this).css({"font-weight":"bold"});
                }
            });
        });


        people6Period.forEach((people)=>{
            /*$("#osoby-text").append(`<div>${people.name} &nbsp;&nbsp; * ${people.birth} &nbsp;&nbsp; X ${people.death} <br> ${people.biography}</div><br>`);*/
            $(".picture").append(`<div class="div-parent card">
                                    <div>
                                        <img src="${people.picture}" alt="${people.name}" class="card-img">
                                        <i class="fas fa-chevron-right arrow"></i>
                                    </div>
                                </div>
                                <p class="people-biography"><b>${people.name}</b> <br> ${people.biography}</p>`);
        });
        $(".people-biography").hide();
        $(".arrow").on("click", function(){
            $(".people-biography").hide(500);
            $(this).parents(".div-parent").next("p").show(500);
        });
    });
})
