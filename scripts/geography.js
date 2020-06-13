const cities = [{
    "city": "Belfast",
    "cityId": "belfast",
    "region": "Northern Ireland",
    "regionId": "GB-UKN",
    "population": "310 000",
    "picture": "belfast.png",
    "text": "Belfast (irsky Béal Feirste) je město ve Spojeném království a hlavní město Severního Irska. Je zároveň největším městem Severního Irska a provincie Ulster, po Dublinu je druhým největším městem na Irském ostrově. V roce 2015 zde žilo přes 333 000 obyvatel a patřilo tak mezi 15 největších měst Spojeného království. Hlavním městem se stal v roce 1921 po rozdělení Irska. Leží na pobřeží Severního průlivu, který spojuje Irské moře s Atlantským oceánem, 140 km severně od Dublinu."
},
{
    "city": "Edinburgh",
    "cityId": "edinburgh",
    "region": "Scotland",
    "regionId": "GB-UKM",
    "population": "513 210",
    "picture": "edinburgh.png",
    "text": "Edinburgh česky též Edinburk, je hlavní město Skotska, konstituční součásti Spojeného království. Leží na jihovýchodě země, na pobřeží Severního moře, u zálivu Firth of Forth. Edinburgh je jednou z 32 správních jednotek Skotska, tzv. council areas. Jako sídlo skotské vlády (Scottish Government) a Skotského parlamentu je Edinburgh politickým a administrativním centrem země. Spolu s Glasgowem je také centrem kultury, vysokého školství a vědy ve Skotsku. V Edinburghu zasedá Skotský nejvyšší soud."
},
{
    "city": "Cardiff",
    "cityId": "cardiff",
    "region": "Wales",
    "regionId": "GB-UKL",
    "population": "336 200",
    "picture": "cardiff.jpg",
    "text": "Cardiff je od roku 1955 hlavní město Walesu. Město samotné má přibližně 346 000 obyvatel, s dalšími přilehlými místy cca 479 000, což z něj dělá 11. největší město ve Velké Británii. Protéká jím řeka Taff, která se zde vlévá do moře. Cardiff má dvě centra. První představuje střed města s viktoriánskými a edvardovskými ulicemi a zahradami. Zahrnuje neogotický hrad a neoklasicistní městské budovy, ale také nákupní střediska a krytou tržnici z 19. století."
},
{
    "city": "Newcastle upon Tyne",
    "cityId": "newcastle-upon-tyne",
    "region": "North East",
    "regionId": "GB-UKC",
    "population": "276 400",
    "picture": "newcastle-upon-tyne.png",
    "text": "Newcastle upon Tyne, často zkracovaný jen na Newcastle, je město a metropolitní distrikt rozkládající se na severním břehu řeky Tyne v regionu Severovýchodní Anglie. Newcastle je v rámci Anglie na 20. pořadí v počtu obyvatel a Tynesidská konurbace je v rámci Anglie na 5. pořadí. Newcastle se nachází na severovýchodu Anglie. Vlastní město se rozkládá na severním břehu řeky Tyne. Z pohledu geologie jsou významným faktorem velké zásoby uhlí. I když místní podloží obsahuje především černé uhlí, nachází se zde i jalové podloží anglického svrchního karbonu a svrchní jury."
},
{
    "city": "Liverpool",
    "cityId": "liverpool",
    "region": "North West",
    "regionId": "GB-UKD",
    "population": "513 441",
    "picture": "liverpool.png",
    "text": "Liverpool je město a metropolitní distrikt v regionu Severozápadní Anglie rozkládající se na východní části Merseyské zátoky. Liverpool je známým kulturním centrem především ve spojení s populární hudbou. Vznikla zde skupina Beatles a další. Na konci 19. století byl považován za druhý největší přístav impéria, protože přes jeho přístav procházelo nejvíce zboží ve srovnání s jinými britskými městy s výjimkou Londýna."
},
{
    "city": "Leeds",
    "cityId": "leeds",
    "region": "Yorkshire and the Humber",
    "regionId": "GB-UKE",
    "population": "760 247",
    "picture": "leeds.jpg",
    "text": "Leeds je město na severu Anglie a centrum metropolitního distriktu City of Leeds, který je součástí metropolitního hrabství West Yorkshire. Městem protéká řeka Aire. Podle výsledků sčítání obyvatel z roku 2001 má Leeds (jádro) 300 000 obyvatel, zatímco distrikt City of Leeds (celé město Leeds) má 700 000 obyvatel, žijících na ploše 551 km2. Název města pochází ze jména Leodis, což bylo anglosaské označení pro keltské království, které odolávalo určitou dobu po anglosaské invazi. První písemná zmínka o Leedsu pochází z pozemkové knihy z roku 1086."
},
{
    "city": "Birmingham",
    "cityId": "birmingham",
    "region": "West Midlands",
    "regionId": "GB-UKG",
    "population": "1 137 100",
    "picture": "birmingham.png",
    "text": "Birmingham je město a distrikt v metropolitním hrabství West Midlands. Svým významem je všeobecně považován za druhé hlavní město (po Londýnu) Velké Británie. Město získalo vážnost jako hnací síla průmyslové revoluce ve Velké Británii. Tento fakt se odrazil v pojmenování města jako továrny světa nebo města tisíce řemesel."
},
{
    "city": "Melton Mowbray",
    "cityId": "melton-mowbray",
    "region": "East Midlands",
    "regionId": "GB-UKF",
    "population": "27 158",
    "picture": "melton-mowbray.png",
    "text": "Melton Mowbray leží na řekách River Eye a Wreake. Toto město je známe pro svoje kulinířské speciality jako je sýr zvaný Stilton cheese nebo masový koláč z vepřového masa."
},
{
    "city": "Cambridge",
    "cityId": "cambridge",
    "region": "East of England",
    "regionId": "GB-UKH",
    "population": "111 000",
    "picture": "cambridge.jpg",
    "text": "Cambridge je starobylé anglické univerzitní město a administrativní centrum hrabství Cambridgeshire. Nachází se 80 km na severovýchod od Londýna a je obklopeno mnoha malými městy a vesnicemi. Je rovněž považováno za středisko technologického centra Silicon Fen. Nejznámější institucí je Univerzita v Cambridgi."
},
{
    "city": "Guildford",
    "cityId": "guildford",
    "region": "South East",
    "regionId": "GB-UKJ",
    "population": "77 057",
    "picture": "guildford.jpg",
    "text": "Guildford je město v Surrey v Anglii, 43 kilometrů jihozápadně od Londýna. Město má skoro 80 000 obyvatel. Město se v 10. století jmenovalo Guldeford a v 11. století Geldeford, oba názvy znamenaly zlato a brod. Historikové si myslí, že město mělo v názvu slovo zlato, podle květin, které zde rostou, nebo podle písku zbarveného do zlata."
},
{
    "city": "Bristol",
    "cityId": "bristol",
    "region": "South West",
    "regionId": "GB-UKK",
    "population": "567 111",
    "picture": "bristol.png",
    "text": "Bristol  je město, samostatná správní jednotka (unitary authority) a ceremoniální hrabství v regionu Jihozápadní Anglie, 185 km na západ od Londýna. Vlastní Bristol má asi 430 000 obyvatel (2009) a jeho metropolitní oblast 550 000. Počtem obyvatel je v pořadí 6. městem Anglie a 8. Velké Británie. Bristolu byl udělen královský patent roku 1155 a statut hrabství roku 1373. Po asi 500 let patřil mezi trojici největších měst Anglie."
},
{
    "city": "London (Londýn)",
    "cityId": "london",
    "region": "Great London",
    "regionId": "GB-UKI",
    "population": "8 908 081",
    "picture": "london.png",
    "text": "Londýn (anglicky London s výslovností výslovnost [ˈlʌndən] IPA) je hlavní město Spojeného království Velké Británie a Severního Irska ležící na jihovýchodě země 80 km od ústí řeky Temže. Produkuje 20 % HDP Spojeného království a londýnská City je jedním z největších světových obchodních center. Žije zde přibližně 8,91 milionu obyvatel. Londýn se spolu s New Yorkem a Tokiem řadí k nejdůležitějším městům světa."
}]

const unesco = [{
    "place": "Giant's Causeway",
    "placeId": "giants-causeway",
    "region": "Northern Ireland",
    "regionId": "GB-UKN",
    "photo": "giants-causeway.jpg",
    "description": "Čedičové útvary a skalní pobřeží v okolí.",
    "year": "1986",
    "link": "http://whc.unesco.org/en/list/369"
},
{
    "place": "St. Kilda",
    "placeId": "st-kilda",
    "region": "Scotland",
    "regionId": "GB-UKM",
    "photo": "st-kilda.jpg",
    "description": "Souostroví vulkanického původu se skalními útesy a hnízdišti ohrožených druhů ptáků.",
    "year": "1986, 2004, 2005",
    "link": "http://whc.unesco.org/en/list/387"
},
{
    "place": "Orkneje",
    "placeId": "orkneje",
    "region": "Scotland",
    "regionId": "GB-UKM",
    "photo": "orkneje.jpg",
    "description": "Neolitické monumenty.",
    "year": "1999",
    "link": "http://whc.unesco.org/en/list/514"
},
{
    "place": "Forth Rail Bridge",
    "placeId": "forth-rail-bridge",
    "region": "Scotland",
    "regionId": "GB-UKM",
    "photo": "forth-rail-bridge.jpg",
    "description": "Železniční most přes záliv Firth of Forth.",
    "year": "2015",
    "link": "http://whc.unesco.org/en/list/1485"
},
{
    "place": "Edinburgh",
    "placeId": "edinburgh-unesco",
    "region": "Scotland",
    "regionId": "GB-UKM",
    "photo": "edinburgh-unesco.jpg",
    "description": "Historické jádro města s pevností.",
    "year": "1995",
    "link": "http://whc.unesco.org/en/list/728"
},
{
    "place": "New Lanark",
    "placeId": "new-lanark",
    "region": "Scotland",
    "regionId": "GB-UKM",
    "photo": "new-lanark.jpg",
    "description": "Skotská vesnice, kde utopista Robert Owen vytvořil svůj model průmyslové společnosti.",
    "year": "2001",
    "link": "http://whc.unesco.org/en/list/429"
},
{
    "place": "Akvadukt Pontcysyllte",
    "placeId": "akvadukt-pontcysylte",
    "region": "Wales",
    "regionId": "GB-UKL",
    "photo": "akvadukt-pontcysylte.jpg",
    "description": "Přibližně 18 kilometrů dlouhý kanál bez použití zdymadel nebo vrat postavený během průmyslové revoluce.",
    "year": "2009",
    "link": "http://whc.unesco.org/en/list/1303"
},
{
    "place": "Gwynedd",
    "placeId": "gwynedd",
    "region": "Wales",
    "regionId": "GB-UKL",
    "photo": "gwynedd.jpg",
    "description": "Hrady a opevnění krále Eduarda I. z 13. století jsou příkladem obranné architektury.",
    "year": "1986",
    "link": "http://whc.unesco.org/en/list/374"
},
{
    "place": "Blaenavon",
    "placeId": "blaenavon",
    "region": "Wales",
    "regionId": "GB-UKL",
    "photo": "blaenavon.jpg",
    "description": "Kraj největších světových vývozců železa a uhlí v 19. století.",
    "year": "2000",
    "link": "http://whc.unesco.org/en/list/984"
},
{
    "place": "Hadriánův val",
    "placeId": "hadrianuv-val",
    "region": "North East",
    "regionId": "GB-UKC",
    "photo": "hadrianuv-val.jpg",
    "description": "Zbytky obranného valu, který ve 2. století postavili Římané mezi Anglií a Skotskem. Pokračuje dále napříč Evropou až k Černému moři.",
    "year": "1987, 2005, 2008",
    "link": "http://whc.unesco.org/en/list/430"
},
{
    "place": "Durham",
    "placeId": "durham",
    "region": "North East",
    "regionId": "GB-UKC",
    "photo": "durham.jpg",
    "description": "Pevnost a katedrála z 11. a 12. století jsou příklady normanské architektury.",
    "year": "1986",
    "link": "http://whc.unesco.org/en/list/370"
},
{
    "place": "Jezerní oblast",
    "placeId": "jezerni-oblast",
    "region": "North West",
    "regionId": "GB-UKD",
    "photo": "jezerni-oblast.jpg",
    "description": "Národní park v severozápadní Anglii, krajina dlouhodobě formovaná lidskou činností.",
    "year": "2017",
    "link": "http://whc.unesco.org/en/list/422"
},
{
    "place": "Liverpool – námořní obchodní centrum",
    "placeId": "liverpool-unesco",
    "region": "North West",
    "regionId": "GB-UKD",
    "photo": "liverpool-unesco.jpg",
    "description": "Šest oblastí historického centra a doků je dokladem rozmachu světového průmyslu a obchodu v 18. a 19. stol.",
    "year": "2004",
    "link": "http://whc.unesco.org/en/list/1150"
},
{
    "place": "Observatoř Jodrell Bank",
    "placeId": "observator-jordell-bank",
    "region": "North West",
    "regionId": "GB-UKD",
    "photo": "observator-jordell-bank.jpg",
    "description": "Observatoř s prvním plně řiditelným radioteleskopem na světě.",
    "year": "2019",
    "link": "http://whc.unesco.org/en/list/1594"
},
{
    "place": "Saltaire",
    "placeId": "saltaire",
    "region": "Yorkshire and the Humber",
    "regionId": "GB-UKE",
    "photo": "saltaire.jpg",
    "description": "Zachovalé průmyslové městečko z druhé poloviny 19. století.",
    "year": "2001",
    "link": "http://whc.unesco.org/en/list/1028"
},
{
    "place": "Studley Royal Park",
    "placeId": "studley-royal-park",
    "region": "Yorkshire and the Humber",
    "regionId": "GB-UKE",
    "photo": "studley-royal-park.jpg",
    "description": "Královský park založený v 18. století, zámek a ruiny opatství",
    "year": "1986",
    "link": "http://whc.unesco.org/en/list/372"
},
{
    "place": "Iron Bridge",
    "placeId": "iron-bridge",
    "region": "West Midlands",
    "regionId": "GB-UKG",
    "photo": "iron-bridge.jpg",
    "description": "Technické památky na průmyslovou revoluci v údolí řeky Severn, první litinový most na světě.",
    "year": "1986",
    "link": "http://whc.unesco.org/en/list/371"
},
{
    "place": "Derwent Valley Mills",
    "placeId": "derwent-valley-mills",
    "region": "East Midlands",
    "regionId": "GB-UKF",
    "photo": "derwent-valley-mills.jpg",
    "description": "Průmyslová krajina velkého historického významu.",
    "year": "2001",
    "link": "http://whc.unesco.org/en/list/1030"
},
{
    "place": "Blenheimský palác",
    "placeId": "blenheimsky-palac",
    "region": "South East",
    "regionId": "GB-UKJ",
    "photo": "blenheimsky-palac.jpg",
    "description": "Zámek z 18. století je typickým příkladem knížecího obydlí.",
    "year": "1987",
    "link": "http://whc.unesco.org/en/list/425"
},
{
    "place": "Canterbury",
    "placeId": "canterbury",
    "region": "South East",
    "regionId": "GB-UKJ",
    "photo": "canterbury.jpg",
    "description": "Katedrála, kostel sv. Martina (nejstarší v Anglii) a bývalé opatství sv. Augustina.",
    "year": "1988",
    "link": "http://whc.unesco.org/en/list/496"
},
{
    "place": "Avebury",
    "placeId": "avebury",
    "region": "South West",
    "regionId": "GB-UKK",
    "photo": "avebury.jpg",
    "description": "Lokality památek megalitické kultury.",
    "year": "1986",
    "link": "http://whc.unesco.org/en/list/373"
},
{
    "place": "Stonehenge",
    "placeId": "stonehenge",
    "region": "South West",
    "regionId": "GB-UKK",
    "photo": "stonehenge.jpg",
    "description": "Lokality památek megalitické kultury.",
    "year": "1986",
    "link": "http://whc.unesco.org/en/list/373"
},
{
    "place": "Bath",
    "placeId": "bath",
    "region": "South West",
    "regionId": "GB-UKK",
    "photo": "bath.jpg",
    "description": "Město založené Římany, s lázeňským komplexem a elegantní novoklasicistní architekturou.",
    "year": "1987",
    "link": "http://whc.unesco.org/en/list/428"
},
{
    "place": "Pobřeží Dorsetu a Východního Devonu",
    "placeId": "pobrezi-dorsetu-a-vychodniho-devonu",
    "region": "South West",
    "regionId": "GB-UKK",
    "photo": "pobrezi-dorsetu-a-vychodniho-devonu.jpg",
    "description": "Útesy zachycují 185 milionů let v historii Země.",
    "year": "2001",
    "link": "http://whc.unesco.org/en/list/1029"
},
{
    "place": "Důlní oblast v hrabstvích Cornwal a West Devon",
    "placeId": "dulni-oblast-v-hrabstvi-cornwal-a-devon",
    "region": "South West",
    "regionId": "GB-UKK",
    "photo": "dulni-oblast-v-hrabstvi-cornwal-a-devon.jpg",
    "description": "Svědectví rozmachu průmyslové revoluce na počátku 19. stol. Průmyslové stavby a důlní díla po intenzivní těžbě mědi a cínu.",
    "year": "2006",
    "link": "http://whc.unesco.org/en/list/1215"
},
{
    "place": "Westminster",
    "placeId": "westminster",
    "region": "Great London",
    "regionId": "GB-UKI",
    "photo": "westminster.jpg",
    "description": "Původní královská rezidence (nyní sídlo parlamentu), přestavěná v novogotickém stylu, spolu s opatstvím a kostelem z 11. století.",
    "year": "1987",
    "link": "http://whc.unesco.org/en/list/426"
},
{
    "place": "Tower of London",
    "placeId": "tower-of-london",
    "region": "Great London",
    "regionId": "GB-UKI",
    "photo": "tower-of-london.jpg",
    "description": "Londýnský hrad.",
    "year": "1988",
    "link": "http://whc.unesco.org/en/list/488"
},
{
    "place": "Greenwich",
    "placeId": "greenwich",
    "region": "Great London",
    "regionId": "GB-UKI",
    "photo": "greenwich.jpg",
    "description": "Budovy v Greenwichi nedaleko Londýna a park, ve kterém jsou umístěny, jsou význačné symboly anglického uměleckého i vědeckého úsilí v 17. a 18. století.",
    "year": "1997",
    "link": "http://whc.unesco.org/en/list/795"
},
{
    "place": "Královské botanické zahrady",
    "placeId": "kralovske-botanicke-zahrady",
    "region": "Great London",
    "regionId": "GB-UKI",
    "photo": "kralovske-botanicke-zahrady.jpg",
    "description": "Dokumentují vývoj zahradní architektury od 18. do 20. století.",
    "year": "2003",
    "link": "http://whc.unesco.org/en/list/1084"
}]


$(function(){
    let regionClicked = 1;
    let timer = 1000;

    let regionNameDisplay;

    let colorSave;

    showIsland();

    $("#uk-map circle").hide();
    $("#uk-map rect").hide();
    $(".fa-arrow-left").hide();

    $("#uk-map circle").addClass('region-pointer');
    $("#uk-map rect").addClass('region-pointer');

    let thisSave;
    let idOfClickedRegion;


    $("#uk-map path").addClass('region-pointer');

    $("#uk-map path").on('click', function(){
        if(regionClicked == 1 && timer == 1000) {
            if($(this).attr("id") != "GG" && $(this).attr("id") != "JE" && $(this).attr("id") != "IM") {
                
                regionClicked = 0;
                timer = 0;

                $("#uk-map path").hide();
                $(this).show();

                $("#uk-map path").removeClass('region-pointer');

                setTimeout(arrowShow, 1000);
                function arrowShow() {
                    $("#arrow-space").toggleClass('arrow-space');
                    $(".fa-arrow-left").show();
                }

                idOfClickedRegion = $(this).attr("id");
                $(this).addClass(`region-${idOfClickedRegion}`);

                thisSave = $(this);


                setTimeout(fixPosition, 990);

                function fixPosition() {
                    thisSave.removeClass(`region-${idOfClickedRegion}`);
                    thisSave.addClass(`region-${idOfClickedRegion}-transformed`);
                }


                regionNameDisplay = 0;

                if(regionNameDisplay == 0) {
                    setTimeout(regionNameShow, 1000);
                    function regionNameShow() {
                        /*$('#region-name').text(city.region);*/
                        $('#region-name').text(thisSave.attr("title"));
                        regionNameDisplay =  1;
                    }
                }

                if($('#city-checkbox').is(':checked')) {
                    cities.forEach((city)=>{
                        if(city.region == $(this).attr("title")){
                            $(`#${city.cityId}`).delay(1000).show(500);
                        }
                    });
                }

                if($('#unesco-checkbox').is(':checked')) {
                    unesco.forEach((place)=>{
                        if(place.regionId == $(this).attr("id")){
                            $(`#${place.placeId}`).delay(1000).show(500);
                        }
                    });
                }

                showIsland();
            }
        }
    });


    $("#city-checkbox").on('click', function(){
        if($('#city-checkbox').is(':checked') && regionClicked == 0) {
            cities.forEach((city)=>{
                if(city.region == thisSave.attr("title")){
                    $(`#${city.cityId}`).show(500);
                }
            });
        }
        else {
            $("#uk-map circle").hide(500);
        }
    });


    $("#unesco-checkbox").on('click', function(){
        if($('#unesco-checkbox').is(':checked') && regionClicked == 0) {
            unesco.forEach((place)=>{
                if(place.regionId == thisSave.attr("id")){
                    $(`#${place.placeId}`).show(500);
                }
            });
        }
        else {
            $("#uk-map rect").hide(500);
        }
    });

    function showIsland() {
        if($('#island-checkbox').is(':checked') && regionClicked == 1) {
            $('.dependence').show(1000);
        }
        else if(!$('#island-checkbox').is(':checked') && regionClicked == 1) {
            $('.dependence').hide();
            console.log('haha');
        }
        else if(!$('#island-checkbox').is(':checked') && regionClicked == 0) {
            $('.dependence').hide(500);
            console.log('hehe');
        }
        else {
            $('.dependence').hide(500);
        }
    }

    $('#island-checkbox').on('click', function() {
        if($('#island-checkbox').is(':checked') && regionClicked == 1) {
            $('.dependence').show(500);
        }
        else {
            $('.dependence').hide(500);
        }
    });

    $(".fa-arrow-left").on('click', animationBackwards);

    function animationBackwards() {
        thisSave.removeClass(`region-${idOfClickedRegion}-transformed`);
        console.log(thisSave);
        thisSave.addClass(`region-${idOfClickedRegion}-backwards`);
        setTimeout(fixPosition2, 990);
        setTimeout(timerBugFix, 1000);

        function fixPosition2() {
            thisSave.removeClass(`region-${idOfClickedRegion}-backwards`);
        }

        function timerBugFix() {
            timer = 1000;
        }

        $("#uk-map circle").hide();
        $("#uk-map rect").hide();
        /*$("#uk-map path #GB-UKM").show(1000);*/

        $(".region-show").show(1000);

        $(".fa-arrow-left").hide();
        $("#arrow-space").toggleClass('arrow-space');

        $("#region-name").text('');

        $("#uk-map path").addClass('region-pointer');
        
        regionClicked = 1;

        showIsland();

        $('#info').fadeOut(1000);

        $("#uk-map rect").css('fill','#f4d03f');
        $("#uk-map circle").css('fill','#48c9b0');
        
    };
    
    $("#uk-map circle").on('click', function(){
        let id = $(this).attr('id');

        let city = cities.find(item => {return item.cityId == id});

        $('#info').fadeOut(250, function() {$('#info').html(`<div class="col-12"><h2 class="secondary-title">${city.city} <br><small class="text-small">${city.population} obv.</small></h2><img src="img/${city.picture}" class="img-fluid"><div class="city-text">${city.text}</div></div>`)});
        $('#info').fadeIn(1000);

        $("#uk-map rect").css('fill','#f4d03f');
        $("#uk-map circle").css('fill','#48c9b0');
        $(this).css('fill','#5D98DE');
    });

    $("#uk-map rect").on('click', function(){
        let id = $(this).attr('id');

        let unesco2 = unesco.find(item => {return item.placeId == id});

        $('#info').fadeOut(250, function() {$('#info').html(`<div class="col-12"><h2 class="secondary-title">${unesco2.place}</h2><img src="img/${unesco2.photo}" class="img-fluid"><div class="city-text font-weight-bold"><br>${unesco2.description}</div>${unesco2.year}<br><br><a href="${unesco2.link}" target="_blank" class="btn btn-info">Více <i class="fas fa-angle-double-right"></i></a></div>`)});
        $('#info').fadeIn(1000);

        $("#uk-map rect").css('fill','#f4d03f');
        $("#uk-map circle").css('fill','#48c9b0');
        $(this).css('fill','#5D98DE');
    }); 



    $(".region-show").on('mouseover', function(){
        if(regionClicked == 1) {
            colorSave = $(this).css('fill');
            $(this).css('fill','#494949');
        }       
    });


    $(".region-show").on('mouseout', function(){
        $(this).css('fill', colorSave);
    });
})

