let dados = [
    {
        titulo: "Cerberos da Cacada Selvagem",
        categoria: "Categoria: construtos",
        descricao: "Criaturas de gelo, ferozes e resistentes, vulneraveis a bomba de dimeritio, oleo de elemental, sinal igni e ao sinal Axii.",
        link: "https://witcher.fandom.com/pt-br/wiki/Cérberos_da_Caçada_Selvagem",
        tags: "caçada selvagem gelo cerberus cerberos"
    },
    {
        titulo: "Djinns",
        categoria: "Categoria: construtos",
        descricao: "Poderosos elementais do ar, capazes de criar tempestades e conceder desejos, mas com uma natureza traiçoeira, vulneraveis a bomba de dimeritio e ao oleo elemental.",
        link: "https://witcher.fandom.com/pt-br/wiki/Djinn",
        tags: "genio djin djinn elemental"
    },
    {
        titulo: "Elementais do fogo",
        categoria: "Categoria: construtos",
        descricao: "Criatura de puro fogo, impulsionada por uma furia inextinguivel, vulneravel ao sinal aard, vento do norte, bomba de dimeritio e oleo de construto.",
        link: "https://witcher.fandom.com/pt-br/wiki/Elemental_do_Fogo",
        tags: "elemental golem fogo"
    },
    {
        titulo: "Elementais do gelo",
        categoria: "Categoria: construtos",
        descricao: "Criatura de puro gelo, com forca bruta e habilidade de congelar tudo ao seu redor, vulneravel a bomba de dimeritio.",
        link: "https://witcher.fandom.com/pt-br/wiki/Elemental_do_Gelo",
        tags: "elemental golem gelo"
    },
    {
        titulo: "Elementais da terra",
        categoria: "Categoria: construtos",
        descricao: "Criatura de puro barro e pedra, com forca bruta e resistência inigualavel, vulneravel a bomba de dimeritio e ao oleo elemental.",
        link: "https://witcher.fandom.com/pt-br/wiki/Elemental_da_Terra",
        tags: "elemental golem terra"
    },
    {
        titulo: "Golens",
        categoria: "Categoria: construtos",
        descricao: "Os golens sao grandes construtos de terra animados, desprovidos de livre arbítrio que apenas cumprem as ordens de seu mestre, geralmente agindo como guarda-costas,vulneravel a bomba de dimeritio e ao oleo de construto.",
        link: "https://witcher.fandom.com/pt-br/wiki/Golem",
        tags: "elemental golem inanimado"
    },
    {
        titulo: "Gargulas",
        categoria: "Categoria: construtos",
        descricao: "Gargulas sao figuras grotescas esculpidas em pedra otimas para decorar sua catedral, melhores ainda para matar intrusos no seu covil do mal, sao vulneraveis a bomba de dimeritio e ao oleo elemental.",
        link: "https://witcher.fandom.com/pt-br/wiki/Gárgula",
        tags: "elemental golem gargulas gargula estatua inanimado"
    },
    {
        titulo: "O fantasma do apiario",
        categoria: "Categoria: construtos",
        descricao: "O Fantasma Apiario e um poderoso Cerberos da Cacada Selvagem que se perdeu de seu bando durante um de seus numerosos ataques, vulneravel ao sinal igni, axii, bomba de dimeritio e ao oleo elemental.",
        link: "https://witcher.fandom.com/pt-br/wiki/O_Fantasma_Apiário",
        tags: "elemental fantasma"
    },
    {
        titulo: "Therazane",
        categoria: "Categoria: construtos",
        descricao: "Therazane e um poderoso Elemental da Terra que foi aprisionado por seu proprietario anterior em uma prisao mágica, localizada dentro de ruinas elficas subterraneas encontradas no porao da Residencia Moldavie.",
        link: "https://witcher.fandom.com/pt-br/wiki/Therazane",
        tags: "elemental terra"
    },
    {
        titulo: "Basilisco",
        categoria: "Categoria: draconideos ",
        descricao: "O basilisco é uma criatura lendária, frequentemente descrita como uma serpente com uma coroa dourada e um olhar mortal. Sua fama se espalhou por diversas culturas, e suas características variam de uma versão para outra, vulneravel a bomba estrelas dancantes, ao oleo draconideo e ao sinal aard",
        link: "https://witcher.fandom.com/pt-br/wiki/Basilisco",
        tags: "draconideo dragao wyvern asas veneno"
    },
    {
        titulo: "Basilisco de Prata",
        categoria: "Categoria: draconideos",
        descricao: "Uma variante rara de basilisco, com escamas prateadas que o tornam um oponente ainda mais perigoso. Vulneravel a oleo draconideo e bomba estrelas dancantes.",
        link: "https://witcher.fandom.com/pt-br/wiki/Basilisco_de_Prata",
        tags: "draconideo basilisco prata"
    },
    {
        titulo: "Berrante",
        categoria: "Categoria: draconideos",
        descricao: "Uma especie de Cocatriz, com um comportamento agressivo e um rugido poderoso, vulneravel a oleo draconideo.",
        link: "https://witcher.fandom.com/pt-br/wiki/Berrante",
        tags: "draconideo berrante wyvern"
    },
    {
        titulo: "Cocatriz",
        categoria: "Categoria: draconideos",
        descricao: "Criatura hibrida entre um dragao e um passaro, vulneravel a oleo draconideo e bomba estrelas dancantes.",
        link: "https://witcher.fandom.com/pt-br/wiki/Cocatriz",
        tags: "draconideo cocatriz dragao passaro"
    },
    {
        titulo: "Lagaz",
        categoria: "Categoria: draconideos",
        descricao: "Um wyvern territorial e perigoso, conhecido por seu grande porte e habilidade de voar longas distancias, vulneravel a oleo draconideo.",
        link: "https://witcher.fandom.com/pt-br/wiki/Lagaz",
        tags: "draconideo wyvern lagaz"
    },
    {
        titulo: "Tordo",
        categoria: "Categoria: draconideos",
        descricao: "Uma variante de wyvern conhecida por suas grandes asas e sua habilidade de caçar com agilidade, vulneravel a oleo draconideo.",
        link: "https://witcher.fandom.com/pt-br/wiki/Tordo",
        tags: "draconideo wyvern tordo"
    },
    {
        titulo: "Wyvern",
        categoria: "Categoria: draconideos",
        descricao: "Criatura feroz com asas e uma cauda venenosa, vulneravel a oleo draconideo e ao sinal aard.",
        link: "https://witcher.fandom.com/pt-br/wiki/Wyvern",
        tags: "draconideo wyvern veneno asas"
    },
    {
        titulo: "Wyvern Real",
        categoria: "Categoria: draconideos",
        descricao: "Uma poderosa e rara especie de wyvern, com habilidades aprimoradas de voo e combate, vulneravel a oleo draconideo.",
        link: "https://witcher.fandom.com/pt-br/wiki/Wyvern_Real",
        tags: "draconideo wyvern real"
    },
    {
        titulo: "A Dama Branca",
        categoria: "Categoria: espectros",
        descricao: "Uma aparicao noturna, associada a lendas de espiritos que assombram vilas, vulneravel a oleo de espectro.",
        link: "https://witcher.fandom.com/pt-br/wiki/A_Dama_Branca",
        tags: "espectro dama branca"
    },
    {
        titulo: "Aparicoes",
        categoria: "Categoria: espectros",
        descricao: "Espiritos que surgem das sombras, vulneraveis ao sinal yrden e ao oleo de espectro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Aparição",
        tags: "espectro aparicao sombra"
    },
    {
        titulo: "Aparicoes Diurnas",
        categoria: "Categoria: espectros",
        descricao: "Espiritos que se manifestam durante o dia, com uma aparencia eterea e assustadora, vulneraveis ao sinal yrden.",
        link: "https://witcher.fandom.com/pt-br/wiki/Aparição_Diurna",
        tags: "espectro aparicao diurna"
    },
    {
        titulo: "Aparicoes Noturnas",
        categoria: "Categoria: espectros",
        descricao: "Espiritos que surgem ao anoitecer, vulneraveis ao sinal yrden e ao oleo de espectro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Aparição_Noturna",
        tags: "espectro aparicao noturna"
    },
    {
        titulo: "Aparicao da Pintura",
        categoria: "Categoria: espectros",
        descricao: "Uma aparicao que se manifesta em quadros e pinturas antigas, vulneravel ao sinal yrden.",
        link: "https://witcher.fandom.com/pt-br/wiki/Aparição_da_Pintura",
        tags: "espectro aparicao pintura"
    },
    {
        titulo: "Aparicao de Daphne",
        categoria: "Categoria: espectros",
        descricao: "O espirito da infeliz Daphne, que vaga pelo mundo em busca de vinganca, vulneravel ao sinal yrden.",
        link: "https://witcher.fandom.com/pt-br/wiki/Aparição_de_Daphne",
        tags: "espectro aparicao daphne"
    },


    {
        titulo: "Beann'shies",
        categoria: "Categoria: espectros",
        descricao: "Espectros femininos, conhecidos por seu grito mortal, associados a pressagios de morte, vulneraveis a oleo espectral e ao sinal yrden.",
        link: "https://witcher.fandom.com/pt-br/wiki/Beann%27shie",
        tags: "espectro grito beann"
    },
    {
        titulo: "Barghest",
        categoria: "Categoria: espectros",
        descricao: "Criaturas espectrais que vagam em regioes rurais, muitas vezes ligadas a lugares onde ocorreram massacres, vulneraveis a sinal yrden e oleo espectral.",
        link: "https://witcher.fandom.com/pt-br/wiki/Barghest",
        tags: "espectro barghest massacres"
    },
    {
        titulo: "Dama da Peste",
        categoria: "Categoria: necrofagos",
        descricao: "Espectros associados a doencas e morte, frequentemente atraidos por pestes e epidemias, vulneraveis a oleo espectral e ao sinal quen.",
        link: "https://witcher.fandom.com/pt-br/wiki/Dama_da_Peste",
        tags: "espectro peste dama"
    },
    {
        titulo: "Demonio do Poco",
        categoria: "Categoria: espectros",
        descricao: "Um espirito preso a um poco, amaldiçoado por traicao, vulneravel ao sinal yrden e ao oleo espectral.",
        link: "https://witcher.fandom.com/pt-br/wiki/Dem%C3%B4nio_do_Po%C3%A7o",
        tags: "espectro demonio amaldiçoado"
    },
    {
        titulo: "Etereo",
        categoria: "Categoria: espectros",
        descricao: "Espectro poderoso, conhecido por sua habilidade de se tornar intangivel, vulneravel ao sinal yrden e ao oleo espectral.",
        link: "https://witcher.fandom.com/pt-br/wiki/Etéreo",
        tags: "espectro etereo intangivel"
    },
    {
        titulo: "Hyms",
        categoria: "Categoria: espectros",
        descricao: "Espectros que se alimentam de culpa e remorso, capazes de induzir os humanos a cometerem atos horriveis, vulneraveis ao sinal yrden e ao oleo espectral.",
        link: "https://witcher.fandom.com/pt-br/wiki/Hym",
        tags: "espectro culpa hym"
    },
    {
        titulo: "Jenny do Bosque",
        categoria: "Categoria: espectros",
        descricao: "Espectro que assombra as florestas, tambem conhecida como dama do bosque, vulneravel ao sinal yrden e ao oleo espectral.",
        link: "https://witcher.fandom.com/pt-br/wiki/Jenny_do_Bosque",
        tags: "espectro dama bosque jenny"
    },
    {
        titulo: "Penitente",
        categoria: "Categoria: espectros",
        descricao: "Um espectro maligno, ligado a um grande ato de arrependimento ou sofrimento, vulneravel ao sinal yrden e ao oleo espectral.",
        link: "https://witcher.fandom.com/pt-br/wiki/Penitente",
        tags: "espectro penitente sofrimento"
    },
    {
        titulo: "Rapunzel",
        categoria: "Categoria: espectros",
        descricao: "Espetro vingativo de uma mulher que foi traida e morta, vulneravel ao sinal yrden e ao oleo espectral.",
        link: "https://witcher.fandom.com/pt-br/wiki/Rapunzel",
        tags: "espectro rapunzel traida"
    },
    {
        titulo: "Caes",
        categoria: "Categoria: feras",
        descricao: "Animais domesticados que podem se tornar selvagens quando abandonados, vulneraveis a oleo de fera e ao sinal axii.",
        link: "https://witcher.fandom.com/pt-br/wiki/Cachorro",
        tags: "fera cao caes domesticado selvagem"
    },
    {
        titulo: "Javali Selvagem",
        categoria: "Categoria: feras",
        descricao: "Criaturas agressivas que vivem em florestas e campos, conhecidas por seu comportamento territorial e feroz, vulneraveis ao oleo de fera.",
        link: "https://witcher.fandom.com/pt-br/wiki/Javali_Selvagem",
        tags: "fera javali selvagem territorial"
    },
    {
        titulo: "Lobos",
        categoria: "Categoria: feras",
        descricao: "Predadores astutos que caçam em alcateias, altamente organizados e perigosos, vulneraveis ao oleo de fera.",
        link: "https://witcher.fandom.com/pt-br/wiki/Lobo",
        tags: "fera lobo alcateia predador"
    },
    {
        titulo: "Lobo Mau",
        categoria: "Categoria: feras",
        descricao: "Uma fera temida em contos de fadas, este lobo gigante tem uma fome insaciavel e uma forca imensa, vulneravel ao oleo de fera.",
        link: "https://witcher.fandom.com/pt-br/wiki/Lobo_Mau",
        tags: "fera lobo gigante mau"
    },
    {
        titulo: "Pantera",
        categoria: "Categoria: feras",
        descricao: "Felino agil e feroz, capaz de atacar suas presas de surpresa com saltos precisos e mortais, vulneravel ao oleo de fera.",
        link: "https://witcher.fandom.com/pt-br/wiki/Pantera",
        tags: "fera felino pantera ataque"
    },
    {
        titulo: "Ursos",
        categoria: "Categoria: feras",
        descricao: "Animais enormes e fortes que vivem nas florestas, com uma forca bruta temida por muitos, vulneraveis ao oleo de fera.",
        link: "https://witcher.fandom.com/pt-br/wiki/Urso",
        tags: "fera urso forte florestas"
    },
    {
        titulo: "Ekhidna",
        categoria: "Categoria: hibridos",
        descricao: "Criatura alada e marinha, que se alimenta de carne fresca e tem grande habilidade de voar e nadar, vulneravel ao oleo de hibridos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Ekhidna",
        tags: "hibrido ekhidna alado marinho"
    },
    {
        titulo: "Erinias",
        categoria: "Categoria: hibridos",
        descricao: "Aterradoras criaturas aladas que atacam em bandos, conhecidas por sua velocidade e brutalidade, vulneraveis ao oleo de hibridos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Er%C3%ADnia",
        tags: "hibrido erinias alado brutal"
    },
    {
        titulo: "Grifos",
        categoria: "Categoria: hibridos",
        descricao: "Majestosos mas perigosos predadores alados que combinam as caracteristicas de leao e aguia, vulneraveis ao oleo de hibridos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Grifo",
        tags: "hibrido grifo leao aguia predador"
    },
    {
        titulo: "Harpias",
        categoria: "Categoria: hibridos",
        descricao: "Criaturas aladas e repugnantes que atacam em grupos, conhecidas por seu grito estridente e ataques rapidos, vulneraveis ao oleo de hibridos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Harpia",
        tags: "hibrido harpia alado ataque"
    },
    {
        titulo: "Melusine",
        categoria: "Categoria: hibridos",
        descricao: "Criatura alada lendaria que habita cavernas e ruinas, conhecida por seu grito aterrorizante, vulneravel ao oleo de hibridos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Melusine",
        tags: "hibrido melusine alado ruinas"
    },
    {
        titulo: "Opinicus",
        categoria: "Categoria: hibridos",
        descricao: "Criatura alada semelhante ao grifo, conhecida por sua inteligencia e habilidade de voo, vulneravel ao oleo de hibridos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Opinicus",
        tags: "hibrido opinicus grifo alado"
    },
    {
        titulo: "Salma",
        categoria: "Categoria: hibridos",
        descricao: "Uma sukubus poderosa, Salma e conhecida por sua capacidade de seducao e astucia, vulneravel ao oleo de hibridos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Salma",
        tags: "hibrido salma sukubus seducao"
    },
    {
        titulo: "Sereias",
        categoria: "Categoria: hibridos",
        descricao: "Criaturas marinhas que sao meio humanas e meio peixe, conhecidas por atrair marinheiros para a sua morte, vulneraveis ao oleo de hibridos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Sereia",
        tags: "hibrido sereia marinha peixe"
    },
    {
        titulo: "Sucubos",
        categoria: "Categoria: hibridos",
        descricao: "Seres astutos que seduzem suas vitimas para drenar suas energias vitais, vulneraveis ao oleo de hibridos.",
        link: "https://witcher.fandom.com/pt-br/wiki/S%C3%BAcubo",
        tags: "hibrido sucubo seducao energia"
    },
    {
        titulo: "Aracnas",
        categoria: "Categoria: insectoides",
        descricao: "Grandes criaturas aracnideas que se movem rapidamente e usam veneno para imobilizar suas presas, vulneraveis ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Aracna",
        tags: "insectoide aracna aranha veneno"
    },
    {
        titulo: "Aracnas Quitinosas",
        categoria: "Categoria: insectoides",
        descricao: "Aracnas com um exoesqueleto duro que as protege de ataques, vulneraveis ao oleo de insectoides e ao sinal aard.",
        link: "https://witcher.fandom.com/pt-br/wiki/Aracna_Quitinosa",
        tags: "insectoide aracna exoesqueleto defesa"
    },
    {
        titulo: "Aracnas Venenosas",
        categoria: "Categoria: insectoides",
        descricao: "Variedade de aracnas especializadas no uso de veneno para atacar suas vitimas, vulneraveis ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Aracna_Venenosa",
        tags: "insectoide aracna veneno toxico"
    },
    {
        titulo: "Aracnomorfo",
        categoria: "Categoria: insectoides",
        descricao: "Uma das mais perigosas especies de insectoides, grandes e extremamente agressivas, vulneraveis ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Aracnomorfo",
        tags: "insectoide aracnomorfo agressivo predador"
    },
    {
        titulo: "Centopeia Gigante",
        categoria: "Categoria: insectoides",
        descricao: "Criaturas longas e segmentadas, que atacam rapidamente suas presas com mandíbulas afiadas, vulneraveis ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Centopeia_Gigante",
        tags: "insectoide centopeia gigante mandibulas"
    },
    {
        titulo: "Endriuga Macho",
        categoria: "Categoria: insectoides",
        descricao: "A forma mais poderosa da especie endriuga, muito forte e feroz, vulneravel ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Endri%C3%BAga_Macho",
        tags: "insectoide endriuga macho forte"
    },
    {
        titulo: "Endriugas Operarias",
        categoria: "Categoria: insectoides",
        descricao: "Endriugas que trabalham coletivamente para proteger o ninho e buscar alimento, vulneraveis ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Endri%C3%BAga_Oper%C3%A1ria",
        tags: "insectoide endriuga operaria ninho"
    },
    {
        titulo: "Guerreiro Endriuga",
        categoria: "Categoria: insectoides",
        descricao: "A elite entre as endriugas, guerreiros formidaveis que protegem o ninho com ferocidade, vulneraveis ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Guerreiro_Endri%C3%BAga",
        tags: "insectoide endriuga guerreiro elite"
    },
    {
        titulo: "Harrisi",
        categoria: "Categoria: insectoides",
        descricao: "Uma criatura rara e perigosa, que usa sua velocidade e veneno para atacar suas presas, vulneravel ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Harrisi",
        tags: "insectoide harrisi veneno rapido"
    },
    {
        titulo: "Kikimoras",
        categoria: "Categoria: insectoides",
        descricao: "Criaturas vorazes que vivem em grandes colmeias subterraneas, conhecidas por seus ataques coordenados, vulneraveis ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Kikimora",
        tags: "insectoide kikimora colmeia ataque"
    },
    {
        titulo: "Verme de Areia",
        categoria: "Categoria: insectoides",
        descricao: "Criatura gigante que se enterra na areia e ataca suas presas de surpresa, vulneravel ao oleo de insectoides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Verme_de_Areia",
        tags: "insectoide verme areia emboscada"
    },
    {
        titulo: "Abaya",
        categoria: "Categoria: necrofagos",
        descricao: "Monstro aquático poderoso, encontrado em ruínas submersas e corpos d'água. Vulnerável ao óleo de necrofagos e ao sinal Aard.",
        link: "https://witcher.fandom.com/pt-br/wiki/Abaya",
        tags: "necrofago abaya aquático necrofago aard"
    },
    {
        titulo: "Afogador",
        categoria: "Categoria: necrofagos",
        descricao: "Criaturas horrendas que atacam pescadores e viajantes próximos à água, vulneráveis ao óleo de necrofagos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Afogador",
        tags: "necrofago afogador água pescadores"
    },
    {
        titulo: "Afogador Mortal",
        categoria: "Categoria: necrofagos",
        descricao: "Uma variante mais forte dos afogadores, conhecida por sua resistência e ferocidade. Vulnerável ao óleo de necrofagos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Afogador_Mortal",
        tags: "necrofago afogador mortal resistente feroz"
    },
    {
        titulo: "Barrososs",
        categoria: "Categoria: necrofagos",
        descricao: "Monstros que surgem de pântanos e corpos lamacentos, extremamente perigosos. Vulneráveis ao óleo de necrofagos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Barrosos",
        tags: "necrofago barrososs pântano perigoso lama"
    },
    {
        titulo: "Bruxa Lamuriosa",
        categoria: "Categoria: necrofagos",
        descricao: "Criaturas assombradas que vagam pelos pântanos, conhecidas por seu choro lamentoso e habilidades de engano.",
        link: "https://witcher.fandom.com/pt-br/wiki/Bruxa_lamuriosa",
        tags: "necrofago bruxa lamuriosa pântano assombrada"
    },
    {
        titulo: "Bruxas Aquáticas",
        categoria: "Categoria: necrofagos",
        descricao: "Entidades que habitam os corpos d'água, perigosas para aqueles que se aproximam de suas águas.",
        link: "https://witcher.fandom.com/pt-br/wiki/Bruxa_Aqu%C3%A1tica",
        tags: "necrofago bruxa aquática água perigo"
    },
    {
        titulo: "Bruxas Sepulcrais",
        categoria: "Categoria: necrofagos",
        descricao: "Essas bruxas emergem de túmulos e assombram cemitérios, vulneráveis ao óleo de necrofagos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Bruxa_Sepulcral",
        tags: "necrofago bruxa sepulcral túmulo cemitério"
    },
    {
        titulo: "Carniçais-Atrozes",
        categoria: "Categoria: necrofagos",
        descricao: "Uma versão mais forte e voraz dos carniçais, muitas vezes encontrados em grandes grupos. Vulneráveis ao óleo de necrofagos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Carni%C3%A7al-atroz",
        tags: "necrofago carniçal atrozes voraz grupo"
    },
    {
        titulo: "Carniçal",
        categoria: "Categoria: necrofagos",
        descricao: "Criaturas mortas-vivas que se alimentam de carne em decomposição. Vulneráveis ao óleo de necrofagos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Carni%C3%A7al",
        tags: "necrofago carniçal morto-vivo decomposição"
    },
    {
        titulo: "Ignis Fatuus",
        categoria: "Categoria: necrofagos",
        descricao: "Um poderoso monstro de fogo conhecido por sua capacidade de criar ilusões. Vulnerável ao óleo de necrofagos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Ignis_Fatuus",
        tags: "necrofago ignis fatuus fogo ilusões"
    },
    {
        titulo: "Necrosos",
        categoria: "Categoria: necrofagos",
        descricao: "Criaturas mortas-vivas com uma habilidade impressionante de drenar a vitalidade das suas vítimas. Vulneráveis ao óleo de necrofagos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Necroso",
        tags: "necrofago necroso morto-vivo vitalidade drenagem"
    },
    {
        titulo: "Nevolosos",
        categoria: "Categoria: necrofagos",
        descricao: "Monstros que se escondem em neblinas densas, conhecidos por sua furtividade e ataques rápidos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Nevoloso",
        tags: "necrofago nevoloso neblina furtivo rápido"
    },
    {
        titulo: "Ciclopes",
        categoria: "Categoria: ogroides",
        descricao: "Criaturas gigantes e brutais com um único olho, conhecidas por sua força devastadora. Vulneráveis ao sinal Aard e ao óleo de ogroides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Ciclope",
        tags: "ogro ciclopes gigante força brutais"
    },
    {
        titulo: "Gigante de Gelo",
        categoria: "Categoria: ogroides",
        descricao: "Monstro colossal feito de gelo, capaz de causar grandes estragos com seu imenso poder. Vulnerável ao sinal Igni e ao óleo de ogroides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Gigante_de_Gelo",
        tags: "ogro gigante gelo colossal poder"
    },
    {
        titulo: "Golyat",
        categoria: "Categoria: ogroides",
        descricao: "Uma grande criatura com aparência de gigante, conhecida por sua força e resistência excepcionais. Vulnerável ao sinal Aard e ao óleo de ogroides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Golyat",
        tags: "ogro golyat gigante força resistência"
    },
    {
        titulo: "Hagubman",
        categoria: "Categoria: ogroides",
        descricao: "Uma criatura gigantesca e feroz, que habita áreas remotas e de difícil acesso. Vulnerável ao sinal Igni e ao óleo de ogroides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Hagubman",
        tags: "ogro hagubman gigante feroz remoto"
    },
    {
        titulo: "Nekkers",
        categoria: "Categoria: ogroides",
        descricao: "Pequenos monstros semelhantes a ogros que atacam em grupos e são conhecidos por sua natureza agressiva. Vulneráveis ao sinal Aard e ao óleo de ogroides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Nekker",
        tags: "ogro nekker pequenos agressivos grupo"
    },
    {
        titulo: "Troll do Gelo",
        categoria: "Categoria: ogroides",
        descricao: "Um troll colossal feito de gelo, muito resistente e com uma força devastadora. Vulnerável ao sinal Igni e ao óleo de ogroides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Troll_do_Gelo",
        tags: "ogro troll gelo colossal força"
    },
    {
        titulo: "Troll de Pedra",
        categoria: "Categoria: ogroides",
        descricao: "Trolls feitos de pedra, extremamente fortes e duráveis. Vulneráveis ao sinal Aard e ao óleo de ogroides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Troll_de_Pedra",
        tags: "ogro troll pedra força durável"
    },
    {
        titulo: "Troll de Pedra Raivoso",
        categoria: "Categoria: ogroides",
        descricao: "Uma versão mais agressiva dos trolls de pedra, conhecidos por sua extrema força e fúria. Vulneráveis ao sinal Aard e ao óleo de ogroides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Troll_de_Pedra_Raivoso",
        tags: "ogro troll pedra raivoso agressivo força"
    },
    {
        titulo: "Tum-dum",
        categoria: "Categoria: ogroides",
        descricao: "Criatura monstruosa com uma força incrível e uma aparência grotesca. Vulnerável ao sinal Igni e ao óleo de ogroides.",
        link: "https://witcher.fandom.com/pt-br/wiki/Tum-dum",
        tags: "ogro tum-dum força grotesco"
    },
    {
        titulo: "Arquespora",
        categoria: "Categoria: os amaldicoados",
        descricao: "Uma criatura fúngica que se origina de áreas amaldiçoadas, conhecida por seu aspecto grotesco e habilidades de parasitismo. Vulnerável ao sinal Igni e ao óleo de amaldicoados.",
        link: "https://witcher.fandom.com/pt-br/wiki/Arquespora",
        tags: "amaldicado fungo grotesco parasitismo"
    },
    {
        titulo: "Berserker",
        categoria: "Categoria: os amaldicoados",
        descricao: "Um guerreiro amaldiçoado que perdeu a razão e é consumido pela fúria, atacando tudo à sua frente. Vulnerável ao sinal Aard e ao óleo de amaldicoados.",
        link: "https://witcher.fandom.com/pt-br/wiki/Berserker",
        tags: "amaldicado guerreiro fúria atacando"
    },
    {
        titulo: "Fetulhos",
        categoria: "Categoria: os amaldicoados",
        descricao: "Criaturas monstruosas que surgem de corpos em decomposição em locais amaldiçoados, conhecidas por sua aparência repugnante. Vulneráveis ao sinal Igni e ao óleo de amaldicoados.",
        link: "https://witcher.fandom.com/pt-br/wiki/Fetulho",
        tags: "amaldicado decomposição repugnante"
    },
    {
        titulo: "Lobisomens",
        categoria: "Categoria: os amaldicoados",
        descricao: "Seres humanos amaldiçoados que se transformam em lobos durante a lua cheia, conhecidos por sua força e ferocidade. Vulneráveis ao sinal Aard e ao óleo de amaldicoados.",
        link: "https://witcher.fandom.com/pt-br/wiki/Lobisomem",
        tags: "amaldicado lobisomem lua cheia força ferocidade"
    },
    {
        titulo: "Protego",
        categoria: "Categoria: os amaldicoados",
        descricao: "Uma entidade amaldiçoada que defende locais sagrados e tem habilidades defensivas excepcionais. Vulnerável ao sinal Aard e ao óleo de amaldicoados.",
        link: "https://witcher.fandom.com/pt-br/wiki/Protego",
        tags: "amaldicado entidade defensiva habilidades"
    },
    {
        titulo: "Sapo Príncipe",
        categoria: "Categoria: os amaldicoados",
        descricao: "Um sapo que foi transformado em príncipe por uma maldição, mantendo sua forma anfíbia, mas com habilidades mágicas. Vulnerável ao sinal Igni e ao óleo de amaldicoados.",
        link: "https://witcher.fandom.com/pt-br/wiki/Sapo_Pr%C3%ADncipe",
        tags: "amaldicado sapo príncipe anfíbio mágico"
    },
    {
        titulo: "Ulfhedinn",
        categoria: "Categoria: os amaldicoados",
        descricao: "Seres amaldiçoados com a capacidade de se transformar em lobos, conhecidos por sua força e habilidades de combate. Vulneráveis ao sinal Aard e ao óleo de amaldicoados.",
        link: "https://witcher.fandom.com/pt-br/wiki/Ulfhedinn",
        tags: "amaldicado transformação lobo força combate"
    },
    {
        titulo: "Chorabashes",
        categoria: "Categoria: relictos",
        descricao: "Seres antigos e poderosos que surgem em regiões amaldiçoadas, conhecidos por seu poder devastador e resistência. Vulneráveis ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Chorabash",
        tags: "relicto poderoso antigo resistência"
    },
    {
        titulo: "Demônios",
        categoria: "Categoria: relictos",
        descricao: "Criaturas malignas e poderosas que representam o mal puro, com habilidades mágicas e grande força. Vulneráveis ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Dem%C3%B4nio",
        tags: "relicto demônio maligno mágico"
    },
    {
        titulo: "Diabrete",
        categoria: "Categoria: relictos",
        descricao: "Pequenos demônios com habilidades traiçoeiras, conhecidos por suas travessuras e ataques rápidos. Vulneráveis ao sinal Igni e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Diabrete",
        tags: "relicto demônio travessura pequeno"
    },
    {
        titulo: "Dúplices",
        categoria: "Categoria: relictos",
        descricao: "Seres que podem criar cópias de si mesmos para confundir e atacar os inimigos. Vulneráveis ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/D%C3%BAplice",
        tags: "relicto cópias confusão ataque"
    },
    {
        titulo: "Espírito do Bosque",
        categoria: "Categoria: relictos",
        descricao: "Entidade espiritual que habita as florestas antigas, conhecida por sua habilidade de manipular a vegetação e seu caráter protetor. Vulnerável ao sinal Igni e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Esp%C3%ADrito_do_Bosque",
        tags: "relicto espírito floresta manipulação"
    },
    {
        titulo: "Fugas",
        categoria: "Categoria: relictos",
        descricao: "Entidades que se escondem nas sombras e atacam quando menos esperam, conhecidas por sua habilidade de escapar e se esconder. Vulneráveis ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Fugas",
        tags: "relicto sombra ataque esconder"
    },
    {
        titulo: "Gruteiro",
        categoria: "Categoria: relictos",
        descricao: "Criaturas antigas e brutais que habitam áreas remotas e amaldiçoadas, conhecidas por sua força e resistência. Vulneráveis ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Gruteiro",
        tags: "relicto força brutal antigo"
    },
    {
        titulo: "Kernun",
        categoria: "Categoria: relictos",
        descricao: "Entidade antiga associada à natureza e à fertilidade, conhecida por seu poder sobre as forças naturais. Vulnerável ao sinal Igni e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Kernun",
        tags: "relicto natureza fertilidade poder"
    },
    {
        titulo: "Liches",
        categoria: "Categoria: relictos",
        descricao: "Seres mortos-vivos poderosos que mantêm sua consciência e habilidades mágicas após a morte. Vulneráveis ao sinal Igni e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Liche",
        tags: "relicto morto-vivo mágico consciência"
    },
    {
        titulo: "Moiras",
        categoria: "Categoria: relictos",
        descricao: "Entidades espirituais que habitam locais amaldiçoados e têm a capacidade de influenciar eventos futuros. Vulneráveis ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Moiras",
        tags: "relicto espiritual futuro influência"
    },
    {
        titulo: "Monstro de Tufo",
        categoria: "Categoria: relictos",
        descricao: "Uma entidade de grande poder que pode ser encontrada em áreas de tufos, conhecida por sua força e resistência. Vulnerável ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Monstro_de_Tufo",
        tags: "relicto tufos força resistência"
    },
    {
        titulo: "Morvudd",
        categoria: "Categoria: relictos",
        descricao: "Criaturas malignas que habitam áreas sombrias e têm a capacidade de manipular as sombras para atacar seus inimigos. Vulneráveis ao sinal Igni e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Morvudd",
        tags: "relicto sombra manipulação maligno"
    },
    {
        titulo: "Púeros",
        categoria: "Categoria: relictos",
        descricao: "Seres antigos que surgem em locais amaldiçoados e possuem habilidades mágicas destrutivas. Vulneráveis ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/P%C3%BAero",
        tags: "relicto antigo mágico destrutivo"
    },
    {
        titulo: "Shaelmaar",
        categoria: "Categoria: relictos",
        descricao: "Criaturas enormes e poderosas que habitam áreas subterrâneas, conhecidas por sua força e resistência. Vulneráveis ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Shaelmaar",
        tags: "relicto subterrâneo força resistência"
    },
    {
        titulo: "Shaelmaar do Imperador de Nilfgaard",
        categoria: "Categoria: relictos",
        descricao: "Uma versão especial do Shaelmaar, associada ao Imperador de Nilfgaard, com habilidades e força aumentadas. Vulnerável ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Shaelmaar_do_Imperador_de_Nilfgaard",
        tags: "relicto Nilfgaard força especial"
    },
    {
        titulo: "Silvanos",
        categoria: "Categoria: relictos",
        descricao: "Seres antigos que habitam florestas antigas, conhecidos por sua conexão com a natureza e habilidades mágicas. Vulneráveis ao sinal Igni e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Silvano",
        tags: "relicto floresta natureza mágico"
    },
    {
        titulo: "O Caseiro",
        categoria: "Categoria: relictos",
        descricao: "Uma entidade reclusa e poderosa que protege locais antigos e tem habilidades defensivas excepcionais. Vulnerável ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/O_Caseiro",
        tags: "relicto proteção habilidades defensivas"
    },
    {
        titulo: "Troncoso",
        categoria: "Categoria: relictos",
        descricao: "Seres antigos e imponentes que habitam áreas florestais e têm grande resistência e força. Vulneráveis ao sinal Aard e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Troncoso",
        tags: "relicto florestal resistência força"
    },
    {
        titulo: "Uivador",
        categoria: "Categoria: relictos",
        descricao: "Criaturas que emitem uivos aterrorizantes e habitam locais amaldiçoados, conhecidas por suas habilidades intimidantes. Vulneráveis ao sinal Igni e ao óleo de relictos.",
        link: "https://witcher.fandom.com/pt-br/wiki/Uivador",
        tags: "relicto uivo aterrorizante amaldiçoado"
    },
    {
        titulo: "A lâmia de Corvo Bianco",
        categoria: "Categoria: vampiros",
        descricao: "Lâmia poderosa que habita a região de Corvo Bianco, conhecida por sua habilidade de atrair e devorar suas vítimas. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/A_l%C3%A2mia_de_Corvo_Bianco",
        tags: "vampiro lâmia Corvo Bianco atração devoração"
    },
    {
        titulo: "Alpor",
        categoria: "Categoria: vampiros",
        descricao: "Vampiro de aparência grotesca, conhecido por sua capacidade de se camuflar e atacar de surpresa. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Alpor",
        tags: "vampiro grotesco camuflagem surpresa"
    },
    {
        titulo: "Lâmia",
        categoria: "Categoria: vampiros",
        descricao: "Criatura vampírica com aparência sedutora e mortal, que se alimenta do sangue de suas vítimas. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/L%C3%A2mia",
        tags: "vampiro sedutora mortal sangue"
    },
    {
        titulo: "Dettlaff",
        categoria: "Categoria: vampiros",
        descricao: "Vampiro superior com grande poder e habilidades sobrenaturais, conhecido por sua liderança e crueldade. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Dettlaff",
        tags: "vampiro superior poder habilidades crueldade"
    },
    {
        titulo: "Ekimmus",
        categoria: "Categoria: vampiros",
        descricao: "Vampiro de aspecto monstruoso e habilidades notáveis em combate, conhecido por sua resistência e força. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Ekimmu",
        tags: "vampiro monstruoso combate resistência força"
    },
    {
        titulo: "Fleder",
        categoria: "Categoria: vampiros",
        descricao: "Vampiro pequeno e ágil, conhecido por suas habilidades de ataque rápido e evasão. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Fleder",
        tags: "vampiro ágil rápido evasão"
    },
    {
        titulo: "Garkain",
        categoria: "Categoria: vampiros",
        descricao: "Vampiro com habilidades de voo e ataques rápidos, conhecido por sua natureza predatória. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Garkain",
        tags: "vampiro voo predatório rápido"
    },
    {
        titulo: "Gael",
        categoria: "Categoria: vampiros",
        descricao: "Vampiro com grande inteligência e habilidades mágicas, conhecido por sua habilidade de manipular suas vítimas. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Gael",
        tags: "vampiro inteligente mágico manipulação"
    },
    {
        titulo: "Katakan",
        categoria: "Categoria: vampiros",
        descricao: "Vampiro brutal e implacável, conhecido por sua força e habilidades de combate. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Katakan",
        tags: "vampiro brutal força combate"
    },
    {
        titulo: "Protofleders",
        categoria: "Categoria: vampiros",
        descricao: "Versão primitiva dos Fleder, conhecidos por suas habilidades básicas de ataque e evasão. Vulneráveis ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Protofleder",
        tags: "vampiro primitivo ataque evasão"
    },
    {
        titulo: "Sarasti",
        categoria: "Categoria: vampiros",
        descricao: "Vampiro poderoso e astuto, conhecido por sua habilidade de manipulação e grande resistência. Vulnerável ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Sarasti",
        tags: "vampiro astuto manipulação resistência"
    },
    {
        titulo: "Vampiros Superiores",
        categoria: "Categoria: vampiros",
        descricao: "Vampiros de nível superior com habilidades avançadas e grande poder, conhecidos por sua capacidade de comandar outros vampiros. Vulneráveis ao sinal Igni e ao óleo de vampiro.",
        link: "https://witcher.fandom.com/pt-br/wiki/Vampiro_Superior",
        tags: "vampiro superior habilidades avançadas poder comando"
    }



];





