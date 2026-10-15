const params = new URLSearchParams(window.location.search);
const bossId = params.get("id");
const boss = BOSSES[bossId];

const bossImage = document.getElementById("bossImage");
const bossName = document.getElementById("bossName");
const bossWikiLink = document.getElementById("bossWikiLink");
const bossAbilities = document.getElementById("bossAbilities");
const bossTeamBuilds = document.getElementById("bossTeamBuilds");


const CHARACTER_STATS_DATABASE = {
pompom: {
        atk: { value: "39+", priority: "yellow" },
        hp: { value: "35", priority: "green" },
        crit: { value: "55+", priority: "yellow" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "0", priority: "red" },
        cooldown: { value: "8.8/9.2/9.6", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: {text: "Poison DMG", value: "n×4", priority: "yellow"}
    },
    shadowMilk: {
        atk: { value: "39+", priority: "yellow" },
        hp: { value: "35", priority: "green" },
        crit: { value: "55+", priority: "yellow" },
        dmgResist: { value: "0", priority: "green" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "0", priority: "red" },
        cooldown: { value: "31.9-32.3", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: {text: "Cooldown", value: "n×4", priority: "yellow"}
    },
    prune: {
        atk: { value: "30+", priority: "yellow" },
        hp: { value: "35", priority: "green" },
        crit: { value: "33+", priority: "yellow" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        dmgResistBypass: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "4.5/9.4", priority: "green" },
        cooldown: { value: "35.1", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: {text: "Poison DMG+Cooldown", value: "(n×2 + n×2)", priority: "yellow"}
    },
    candyApple: {
        atk: { value: "", priority: "" },
        hp: { value: "", priority: "" },
        crit: { value: "", priority: "" },
        dmgResist: { value: "", priority: "" },
        amplifyBuff: { value: "", priority: "" },
        dmgResistBypass: { value: "", priority: "" },
        def: { value: "", priority: "" },
        atkSpd: { value: "", priority: "" },
        cooldown: { value: "", priority: "" },
        critResist: { value: "", priority: "" },
        debuffResist: { value: "", priority: "" },
        beascuitOption: {text: "Atk SPD", value: "n×4", priority: "yellow"}
    },
    blackSaphire: {
        atk: { value: "39+", priority: "yellow" },
        hp: { value: "35", priority: "green" },
        crit: { value: "55+", priority: "yellow" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        dmgResistBypass: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "0", priority: "red" },
        cooldown: { value: "7.7/8.2-8.7", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: {text: "Poison DMG", value: "n×4", priority: "yellow"}
    },
    bluebarryPie: {
        atk: { value: "52+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "34.1", priority: "green" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "20.4/33.1", priority: "green" },
        cooldown: { value: "0", priority: "red" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Electricity DMG", value: "n×4", priority: "yellow" }
    },
    creamPuff: {
        atk: { value: "30+", priority: "yellow" },
        hp: { value: "115+", priority: "green" },
        crit: { value: "34.1", priority: "green" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "1-3/0", priority: "green" },
        cooldown: { value: "14.1-3/14.4-6", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "HP+Cooldown|HP", value: "(n×3 + n×1)|(n×4)", priority: "yellow" }
    },
    creamFerret: {
        atk: { value: "30+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "5+", priority: "green" },
        cooldown: { value: "57.8+", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Cooldown", value: "n×4", priority: "yellow" }
    },
    marshmallowBunny: {
        atk: { value: "30+/52+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0/10", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "25", priority: "green" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "0", priority: "red" },
        cooldown: { value: "50.4-6/23.4", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Cooldown", value: "n×4", priority: "yellow" }
    },
    windArcher: {
        atk: { value: "77+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0++", priority: "yellow" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "28.7-25.7", priority: "green" },
        cooldown: { value: "0", priority: "red" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Wind DMG", value: "n×4", priority: "yellow" }
    },
    starCoral: {
        atk: { value: "65+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "2/0", priority: "green" },
        cooldown: { value: "47.3(4)/47.8(9)", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Cooldown", value: "n×4", priority: "yellow" }
    },
    cremeBrulee: {
        atk: { value: "74+/65+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0++", priority: "yellow" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "74.2/74.7", priority: "green" },
        cooldown: { value: "7.7-8.1", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Atk SPD", value: "n×4", priority: "yellow" }
    },
    puddingALaMode: {
        atk: { value: "30", priority: "red" },
        hp: { value: "35", priority: "red" },
        crit: { value: "21.6", priority: "green" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0++/6+", priority: "yellow" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "79.5+", priority: "yellow" },
        cooldown: { value: "1.2-3.5", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Atk SPD", value: "n×4", priority: "yellow" }
    },
    mintChoco: {
        atk: { value: "30", priority: "red" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "10.6+", priority: "yellow" },
        cooldown: { value: "57-59+", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Cooldown", value: "n×4", priority: "yellow" }
    },
    avatarCreamFerret: {
        atk: { value: "65+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "0", priority: "green" },
        cooldown: { value: "35.4-43.7", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Cooldown", value: "n×4", priority: "yellow" }
    },
    machineCreamFerret: {
        atk: { value: "88+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "0", priority: "red" },
        cooldown: { value: "35.2", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Cooldown", value: "n×4", priority: "yellow" }
    },
    frilledJellyfish: {
        atk: { value: "35+", priority: "yellow" },
        hp: { value: "0", priority: "red" },
        crit: { value: "0", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "0", priority: "red" },
        cooldown: { value: "34.9", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Water DMG", value: "n×4", priority: "yellow" }
    },
    menthol: {
        atk: { value: "74+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "def" },
        atkSpd: { value: "11.7/14.3", priority: "green" },
        cooldown: { value: "18.4/18.8/19.2/19.6", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Water DMG", value: "n×4", priority: "yellow" }
    },
    seltzer: {
        atk: { value: "65+", priority: "yellow" },
        hp: { value: "35", priority: "red" },
        crit: { value: "0", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "0" },
        atkSpd: { value: "0", priority: "red" },
        cooldown: { value: "24.1", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Water DMG", value: "n×4", priority: "yellow" }
    },
    seaFairy: {
        atk: { value: "35+", priority: "yellow" },
        hp: { value: "0", priority: "red" },
        crit: { value: "0", priority: "red" },
        dmgResist: { value: "0", priority: "red" },
        amplifyBuff: { value: "0", priority: "red" },
        def: { value: "0", priority: "red" },
        atkSpd: { value: "0", priority: "red" },
        cooldown: { value: "34.9", priority: "green" },
        critResist: { value: "0", priority: "red" },
        debuffResist: { value: "0", priority: "red" },
        beascuitOption: { text: "Water DMG", value: "n×4", priority: "yellow" }
    }
};

const LEFT_GEAR_STATS = [
    { key: "atk", label: "ATK" },
    { key: "hp", label: "HP" },
    { key: "crit", label: "CRIT%" },
    { key: "dmgResist", label: "DMG Resist" },
    { key: "amplifyBuff", label: "Amplify Buff" },
    // { key: "dmgResistBypass", label: "DMG Resist Bypass" }
];

const RIGHT_GEAR_STATS = [
    { key: "def", label: "DEF" },
    { key: "atkSpd", label: "ATK SPD" },
    { key: "cooldown", label: "Cooldown" },
    { key: "critResist", label: "CRIT Resist" },
    { key: "debuffResist", label: "Debuff Resist" }
];

const BEASCUIT_STAT = { key: "beascuitOption", label: "Option" };
const ALL_STATS = [...LEFT_GEAR_STATS, ...RIGHT_GEAR_STATS, BEASCUIT_STAT];

const TEAM_BUILDS = {
    redVelvetDragon: {
        title: "Команда 1",
        subtitle: "Для рейда: Red Velvet Dragon",
        emblem: "../images/image_2025-04-21_02-05-01.png",
        headerDragon: "../images/Red_Velvet_Dragon_mirrored.png",
        notes: "",
        legend: [
            { image: "../images/Topping_tart_applejelly_3.png", label: "Apple Tart" },
            { image: "../images/Topping_tart_chocolate_3.png", label: "Chocolate Tart" },
            { image: "../images/ATK_top.png", label: "Rasp Top" },
            { image: "../images/Crit_top.png", label: "Crit Top" },
            { image: "../images/CD_top.png", label: "CD Top" }
        ],
        rows: [
            {
                statsId: "pompom",
                name: "Pompom Dough Cookie",
                image: "../images/Cookie_pom-pom_dough_card.png",
                tart: "../images/Topping_tart_applejelly_3.png",
                descriptionTitle: "Сборка",
                description: "apple tart + 1 rasp top + 4 crit top",
                tops: [
                    "../images/ATK_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png"
                ]
            },
            {
                statsId: "shadowMilk",
                name: "Shadow Milk Cookie",
                image: "../images/Cookie_shadow_milk_card.png",
                tart: "../images/Topping_tart_applejelly_3.png",
                descriptionTitle: "Сборка",
                description: "apple tart + 1 rasp top + 4 crit top",
                tops: [
                    "../images/ATK_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png"
                ]
            },
            {
                statsId: "prune",
                name: "Prune Juice Cookie",
                image: "../images/Cookie_prune_card.png",
                tart: "../images/Topping_tart_chocolate_3.png",
                descriptionTitle: "Сборка",
                description: "chocolate tart + 3 crit top + 2 cd top",
                tops: [
                    "../images/Crit_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png"
                ]
            },
            {
                statsId: "candyApple",
                name: "Candy Apple Cookie",
                image: "../images/Cookie_candy_apple_card.png",
                descriptionTitle: "Сборка",
                builds: [
                    {
                        tart: "../images/Topping_tart_almond_3.png",
                        tops: [
                            "../images/Dmg_res_top.png",
                            "../images/Dmg_res_top.png",
                            "../images/Crit_top.png",
                            "../images/Crit_top.png",
                            "../images/Crit_top.png"
                        ]
                    },
                    {
                        tart: "../images/Topping_tart_almond_3.png",
                        tops: [
                            "../images/Dmg_res_top.png",
                            "../images/Dmg_res_top.png",
                            "../images/Crit_top.png",
                            "../images/CD_top.png",
                            "../images/CD_top.png"
                        ]
                    }
                ]
            },
            {
                statsId: "blackSaphire",
                name: "Black Saphire Cookie",
                image: "../images/Cookie_black_saphire_card.png",
                tart: "../images/Topping_tart_applejelly_3.png",
                descriptionTitle: "Сборка",
                description: "apple tart + 1 rasp top + 4 crit top",
                tops: [
                    "../images/ATK_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png"
                ]
            }
        ]
    },
    machineGodOfTheEternalVoid: {
        title: "Команда 1",
        subtitle: "Для рейда: Machine",
        emblem: "",
        headerDragon: "../images/Machine-God_of_the_Eternal_Void_mirrored.png",
        notes: `-Трежуры: Алый Свисток, Свиток, Часы
-Все баффы команды дают 101% крита с учетом бондов скинов Лили и Соли и конфетой Джелли +30, не собираем его вовсе. Но для СиФейри и Сельтзер всё же можно собрать немного - их первые скиллы начинаются до баффа от Джеллифиш, но и ценность у 3% крита как у 0.1% атк
-Ментол обязан иметь наивысшую атаку в команде (не atk% в статах, а именно числовое значение)
-Бафф [Fuzzy Scarf](../images/38px-Status_Fuzzy_Scarf.png) Феррета висит на Ментоле
Тайминги:
ДО НАДПИСИ "BOSS"
1) На авто нажимаем на Феррета -> Он использует навык
В этот момент лучше поставить скорость на 0.5 или 1
2) На авто нажимаем на СиФери -> Она использует навык
3) На авто нажимаем на Сельтзер -> Она использует навык уже ПОСЛЕ надписи "BOSS"
ПОСЛЕ НАДПИСИ "BOSS"
1) Сельтзер использовала навык -> Используем навык Джелли на 59.188-125
2) Используем навык Ментола с учетом следующей информации:
58.937 (18.4 11.7 / 18.0 14.3) / 58.563 (18.8 11.7 / 18.4 14.3) / 58.250 (19.2 11.7 / 18.8 14.3) / 57.963 (19.6 11.7 / 19.2 14.3) -> 2.625
Если у вас 58.563 (18.8 11.7 / 18.4 14.3), то Ментол сам прожмется, можете просто смотреть на него и любоваться))))
3) Дальше спамим навыками, однако Ментола лучше зажимать, чтобы 100% не влиял человеческий фактор и он точно прожался сразу же после отката, остальных лучше прожимать на 0.5 скорости`,
        legend: [],
        rows: [
            {
                statsId: "machineCreamFerret",
                name: "Cream Ferret Cookie",
                image: "../images/Cookie_cream_ferret_card.png",
                tart: "../images/Topping_tart_raspberry_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/CD_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png"
                ]
            },
            {
                statsId: "frilledJellyfish",
                name: "Frilled Jellyfish Cookie",
                image: "../images/Cookie_frilled_jellyfish_card.png",
                tart: "../images/Topping_tart_chocolate_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png"
                ]
            },
            {
                statsId: "menthol",
                name: "Menthol Cookie",
                image: "../images/Cookie_menthol_card.png",
                tart: "../images/Topping_tart_chocolate_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/CD_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png"
                ]
            },
            {
                statsId: "seltzer",
                name: "Seltzer Cookie",
                image: "../images/Cookie_seltzer_card.png",
                tart: "../images/Topping_tart_chocolate_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png"
                ]
            },
            {
                statsId: "seaFairy",
                name: "Sea Fairy Cookie",
                image: "../images/Cookie_sea_fairy_card.png",
                tart: "../images/Topping_tart_chocolate_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png"
                ]
            }
        ]
    },
    livingLicoriceAbyss: {
    title: "Команда 1",
    subtitle: "Для рейда: Abyss",
    emblem: "",
    headerDragon: "../images/Living_Licorice_Abyss_mirrored.png",
    notes: `-Трежуры: Алый Свисток, Свиток, Мантия
-От хп Арчера зависит хп, нужное для Пафф - умножаете его на коэффициент (будет позже калькулятор) и выходит то, сколько нужно хп Пафф в итоге (All Stats смотрится, не % !!!)
-Нужно как можно больше амплифай бондов. Билд с 5 кд и 1 амп тартом собирается в случае если у вас есть как минимум 6 бондов! Второй же билд сколько угодно. По итогу у вас должно получится в сумме 25% (прибавка бондов считается в уме)
-Крит бонды от костюмов Лили и Соли так же важны, без них собирайте как можно больше, не теряя Atk SPD статы.
-От амплифая бондов зависит прожатие скилла Арчера, картинка будет [тут](../images/Archer_Amp_Buff.png)
-Конфета Пафф желательно запушить до 25+ уровня, а то и до 30, иначе прожим работает хуже и придется жертвовать другими статами. Конфету ББП так же нужно прокачать.
-Нужное Atk SPD Арчеру зависит от его уровня джема и указано на картинке [тут](../images/Archer_SPD.png). Учитывайте, что эти значения идут уже с 1★ и баффом 7% от него. При несоблюдении теряется куча урона
-У Феррета должно быть больше Atk SPD чем у Банни
Тайминги:
ДО НАДПИСИ "BOSS"
1) На авто нажимаем на Феррета и Банни -> Они используют навык
2) Зажимем Арчера и на ступеньке ставим скорость на 0.5
ПОСЛЕ НАДПИСИ "BOSS"
1) Нажимем ББП на 58.563-188 
2) нажимем Пафф на 58.000-57.938
3) На авто прожимаете всех, как только откатились
3.1) Если у вас билд не 5 кд на Банни, то ее ручками прожимаете на 43.625
4) После прожатия скилла Банни поставьте ее на часы до следующего использования
5) Феррет должен !САМ! прожатся на ~33 секунде при 3 стаках замедления (красная иконка дебаффов в самом верху)
6) Зажимаете Пафф, когда она съедена, она нажмет свой скилл сама после того как выйдет из стана
7) Нажимаете !САМИ! скилл Арчера в зависимости от количества амплифай Бондов
8) Снова зажимаете Баннни -> Она использует навык
9) Кидаете часы на условную ББП, чтобы Феррет не нажался сам
10) Примерно на 18.8 у Феррета должно быть 3 стака дебаффов и вы !САМИ! нажимаете его
11) Дальше все на авто`,
        legend: [],
        rows: [
            {
                statsId: "bluebarryPie",
                name: "Bluebarry Pie Cookie",
                image: "../images/Cookie_bluebarry_pie.png",
                tart: "../images/Topping_tart_caramel_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/Crit_top.png",
                    "../images/Crit_top.png",
                    "../images/Spd_top.png"
                ]
            },
            {
                statsId: "creamFerret",
                name: "Cream Ferret Cookie",
                image: "../images/Cookie_cream_ferret_card.png",
                tart: "../images/Topping_tart_chocolate_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png"
                ]
            },
            {
                statsId: "creamPuff",
                name: "Cream Puff Cookie",
                image: "../images/Cookie_cream_puff_card.png",
                descriptionTitle: "Сборка",
                builds: [
                    {
                        tart: "../images/Topping_tart_peanut_3.png",
                        tops: [
                            "../images/Crit_top.png",
                            "../images/Crit_top.png",
                            "../images/Hp_top.png",
                            "../images/Hp_top.png",
                            "../images/CD_top.png"
                            ]
                    },
                    {
                        tart: "../images/Topping_tart_chocolate_3.png",
                        tops: [
                            "../images/Crit_top.png",
                            "../images/Crit_top.png",
                            "../images/Hp_top.png",
                            "../images/Hp_top.png",
                            "../images/Hp_top.png"
                        ]
                    },
                    {
                        tart: "../images/Topping_tart_peanut_3.png",
                        tops: [
                            "../images/Crit_top.png",
                            "../images/Crit_top.png",
                            "../images/Hp_top.png",
                            "../images/Hp_top.png",
                            "../images/HP_top.png"
                        ]
                    }
                ]
            },
            {
                statsId: "marshmallowBunny",
                name: "Marshmallow Bunny Cookie",
                image: "../images/Cookie_marshmallow_bunny_card.png",
                descriptionTitle: "Сборка",
                builds: [
                    {
                        tart: "../images/Topping_tart_candy_3.png",
                        tops: [
                            "../images/CD_top.png",
                            "../images/CD_top.png",
                            "../images/CD_top.png",
                            "../images/CD_top.png",
                            "../images/CD_top.png"
                        ]
                    },
                    {
                        tart: "../images/Topping_tart_candy_3.png",
                        tops: [
                            "../images/ATK_top.png",
                            "../images/ATK_top.png",
                            "../images/Crit_top.png",
                            "../images/Crit_top.png",
                            "../images/Amp_top.png"
                        ]
                    }
                ]
            },
            {
                statsId: "windArcher",
                name: "Wind Archer Cookie",
                image: "../images/Cookie_wind_archer_card.png",
                tart: "../images/Topping_tart_raspberry_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/Spd_top.png",
                    "../images/Spd_top.png"
                ]
            }
        ]
    },
    avatarOfDestiny: {
        title: "Команда 1",
        subtitle: "Для рейда: Avatar of Destiny",
        emblem: "",
        headerDragon: "../images/Avatar_of_Destiny_mirrored.png",
        reserveImage: "../images/Topping_tart_almond_3.png",
        notes: `-Трежуры: Свиток, Свисток, Мантия
-Вы должны забалнсить статы так, чтобы мантия падала на А Ла Мод и Брюле
-Конфета Минта должна быть хотя бы +1
-Прожим устроен так, чтобы Брюле и Минт нажали свои скиллы в середине боя до того, как на них будет наложен Silence
-В зависимости от КД Минта разный момент прожатия. Спросите/определите сами нужный момент, чтобы все работало как надо
-Если не выполняется 13 пункт Таймингов, нужно немного поднять кд/аткспд
Тайминги:
ДО НАДПИСИ "BOSS"
1) Нажимаем Феррета и Коралл сразу как появилась возможность
2) Нажимаем Минта в зависимости от его кд
3) Зажимаем А Ла Мод -> она начинает анимацию скилла
4) Зажимаем Брюле
ПОСЛЕ НАДПИСИ "BOSS"
1) Автокаст скиллов Коралл и Феррета
2) Минт прожимается самостоятельно после Феррета
3) Ставим часы на Феррета
4) Спам скиллов
5) А Ла Мод !САМИ! прожимаете ~33.0 секунде
6) Ставите скорость на 0.5
7) Нажимаем Коралл
8) Нажимаем Брюле и Минта (именно тут они не должны попасть под сайленс)
9) Спам скиллами
10) А Ла Мод !САМИ! прожимаете на 17.313-125
11) Спам Скиллами
12) А Ла Мод !САМИ! прожимаете после последней ульты Брюле
13) Последний скилл Коралл должен быть около 1.563
`,
        rows: [
            {
                statsId: "starCoral",
                name: "Star Coral Cookie",
                image: "../images/Cookie_star_coral_card.png",
                tart: "../images/Topping_tart_chocolate_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png"
                ]
            },
            {
                statsId: "cremeBrulee",
                name: "Crème Brûlée Cookie",
                image: "../images/Cookie_Creme_Brulee_card.png",
                descriptionTitle: "Сборка",
                builds: [
                    {
                        tart: "../images/Topping_tart_caramel_3.png",
                        tops: [
                            "../images/ATK_top.png",
                            "../images/ATK_top.png",
                            "../images/ATK_top.png",
                            "../images/ATK_top.png",
                            "../images/Spd_top.png"
                        ]
                    },
                    {
                        tart: "../images/Topping_tart_caramel_3.png",
                        tops: [
                            "../images/ATK_top.png",
                            "../images/ATK_top.png",
                            "../images/ATK_top.png",
                            "../images/Spd_top.png",
                            "../images/Spd_top.png"
                        ]
                    }
                ]
            },
            {
                statsId: "puddingALaMode",
                name: "Pudding à la Mode Cookie",
                image: "../images/Cookie_pudding_a_la_mode_card.png",
                descriptionTitle: "Сборка",
                 builds: [
                    {
                        tart: "../images/Topping_tart_caramel_3.png",
                        tops: [
                        "../images/Spd_top.png",
                        "../images/Spd_top.png",
                        "../images/Spd_top.png",
                        "../images/Crit_top.png",
                        "../images/Crit_top.png"
                        ]
                    },
                    {
                        tart: "../images/Topping_tart_caramel_3.png",
                        tops: [
                        "../images/Amp_top.png",
                        "../images/Amp_top.png",
                        "../images/Spd_top.png",
                        "../images/Spd_top.png",
                        "../images/Crit_top.png"
                        ]
                    }
                ]
            },
            {
                statsId: "mintChoco",
                name: "Mint Choco Cookie",
                image: "../images/Cookie_mint_choco_card.png",
                tart: "../images/Topping_tart_chocolate_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/CD_top.png"
                ]
            },
            {
                statsId: "avatarCreamFerret",
                name: "Cream Ferret Cookie",
                image: "../images/Cookie_cream_ferret_card.png",
                tart: "../images/Topping_tart_chocolate_3.png",
                descriptionTitle: "Сборка",
                tops: [
                    "../images/CD_top.png",
                    "../images/CD_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png",
                    "../images/ATK_top.png"
                ]
            }
        ]
    }
};

function renderTopIcons(tops) {
    return tops.map(function (topPath) {
        return `<div class="top-item"><img src="${topPath}" alt="Top"></div>`;
    }).join("");
}

function renderBuildArea(row) {
    const builds = Array.isArray(row.builds)
        ? row.builds
        : (row.empty
            ? []
            : [{ tart: row.tart, tops: row.tops }]);

    if (builds.length === 0) {
        return `
            <div class="build-strip build-strip-empty">
                <div class="build-empty-line"></div>
                <div class="build-empty-label">пока пусто</div>
                <div class="build-empty-line"></div>
            </div>
        `;
    }

    return `
        <div class="build-variants">
            ${builds.map(function (build, index) {
                return `
                    <div class="build-strip" aria-label="Вариант сборки ${index + 1}">
                        <div class="tart-icon-wrap">
                            <img class="tart-icon" src="${build.tart}" alt="Tart">
                        </div>
                        <div class="top-list">
                            ${renderTopIcons(build.tops || [])}
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

// В заметках поддерживаются ссылки на локальные изображения вида:
// [тут](../images/example.png)
// Они открываются поверх страницы, не уводя пользователя с гайда.
function renderNotesText(value) {
    const source = String(value || "");
    const imageLinkPattern = /\[([^\]]+)\]\((\.\.\/images\/[^)\n]+)\)/g;

    let html = "";
    let lastIndex = 0;
    let match;

    while ((match = imageLinkPattern.exec(source)) !== null) {
        html += escapeHtml(source.slice(lastIndex, match.index));

        const label = escapeHtml(match[1]);
        const imageSrc = escapeHtml(match[2].trim());

        html += `<button class="note-image-link" type="button" data-note-image-src="${imageSrc}" aria-label="Открыть изображение: ${label}">${label}</button>`;

        lastIndex = imageLinkPattern.lastIndex;
    }

    html += escapeHtml(source.slice(lastIndex));
    return html;
}

function getNoteImageLightbox() {
    let lightbox = document.getElementById("noteImageLightbox");

    if (lightbox) {
        return lightbox;
    }

    lightbox = document.createElement("div");
    lightbox.id = "noteImageLightbox";
    lightbox.className = "note-image-lightbox";
    lightbox.setAttribute("aria-hidden", "true");

    lightbox.innerHTML = `
        <div class="note-image-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Изображение из заметки">
            <button class="note-image-lightbox-close" type="button" aria-label="Закрыть изображение">×</button>
            <img class="note-image-lightbox-image" src="" alt="">
        </div>
    `;

    document.body.appendChild(lightbox);

    const closeButton = lightbox.querySelector(".note-image-lightbox-close");

    function closeLightbox() {
        const image = lightbox.querySelector(".note-image-lightbox-image");

        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("note-image-open");

        if (image) {
            image.src = "";
            image.alt = "";
        }
    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
            closeLightbox();
        }
    });

    return lightbox;
}

function initNoteImageLinks() {
    const lightbox = getNoteImageLightbox();
    const lightboxImage = lightbox.querySelector(".note-image-lightbox-image");

    document.querySelectorAll(".note-image-link").forEach(function (button) {
        button.addEventListener("click", function () {
            const imageSrc = button.dataset.noteImageSrc;

            if (!imageSrc) {
                return;
            }

            lightboxImage.src = imageSrc;
            lightboxImage.alt = button.textContent.trim() || "Изображение из заметки";
            lightbox.classList.add("is-open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.classList.add("note-image-open");
            lightbox.querySelector(".note-image-lightbox-close").focus();
        });
    });
}

function normalizePriority(priority) {
    const allowedPriorities = ["green", "yellow", "red"];

    return allowedPriorities.includes(priority) ? priority : "";
}

function getStorageKey(statsId) {
    return `kendiruny-gear-stats-v1:${bossId}:${statsId}`;
}

function getDefaultCharacterStats(statsId) {
    const configuredStats = CHARACTER_STATS_DATABASE[statsId] || {};
    const defaultStats = {};

    ALL_STATS.forEach(function (stat) {
        const configuredValue = configuredStats[stat.key] || {};

        defaultStats[stat.key] = {
    text: configuredValue.text === undefined
        ? ""
        : String(configuredValue.text),

    value: configuredValue.value === undefined
        ? ""
        : String(configuredValue.value),

    priority: normalizePriority(configuredValue.priority)
};
    });

    return defaultStats;
}

function loadCharacterStats(statsId) {
    const stats = getDefaultCharacterStats(statsId);

    try {
        const savedStats = JSON.parse(localStorage.getItem(getStorageKey(statsId)));

        if (!savedStats || typeof savedStats !== "object") {
            return stats;
        }

        ALL_STATS.forEach(function (stat) {
            const savedValue = savedStats[stat.key];

            if (!savedValue || typeof savedValue !== "object") {
                return;
            }

            stats[stat.key] = {
                value: savedValue.value === undefined ? "" : String(savedValue.value),
                priority: normalizePriority(savedValue.priority)
            };
        });
    } catch (error) {
        console.warn("Не удалось загрузить сохранённые характеристики:", error);
    }

    return stats;
}

function saveCharacterStats(statsId, stats) {
    try {
        localStorage.setItem(getStorageKey(statsId), JSON.stringify(stats));
    } catch (error) {
        console.warn("Не удалось сохранить характеристики:", error);
    }
}

function renderPriorityButton(color, activePriority, label) {
    const isActive = color === activePriority;
    const colorName = color === "green" ? "зелёный" : "жёлтый";

    return `
        <button
            class="priority-color-button priority-color-${color}"
            type="button"
            data-priority-color="${color}"
            aria-label="Выбрать ${colorName} цвет для ${label}"
            aria-pressed="${isActive}"
            title="${colorName.charAt(0).toUpperCase() + colorName.slice(1)} приоритет"
        ></button>
    `;
}

function renderGearStatRow(stat, statData, statsId, extraClass = "gear-stat-row") {
    const priority = normalizePriority(statData.priority);

    const value = String(statData.value).trim() === ""
        ? "-"
        : escapeHtml(statData.value);

    const isBeascuitOption = stat.key === "beascuitOption";

    const statName = isBeascuitOption && String(statData.text).trim() !== ""
        ? escapeHtml(statData.text)
        : stat.label;

    const nameClass = isBeascuitOption
        ? "gear-stat-name beascuit-option-name"
        : "gear-stat-name";

    return `
        <div class="${extraClass}">
            <span class="${nameClass}" title="${statName}">
                ${statName}
            </span>

            <div class="gear-stat-value-editor" data-priority="${priority}">
                <span class="gear-stat-number">
                    <span>${value}</span>
                    <span class="gear-stat-percent">%</span>
                </span>
            </div>
        </div>
    `;
}

function renderCharacterStatsPanel(row) {
    const characterStats = getDefaultCharacterStats(row.statsId);

    return `
            <div class="gear-stats-card" data-character-stats-id="${row.statsId}">
                <div class="gear-stats-title">Total Gear Stats</div>

                <div class="gear-stats-grid">
                    <div class="gear-stats-column">
                        ${LEFT_GEAR_STATS.map(function (stat) {
                            return renderGearStatRow(stat, characterStats[stat.key], row.statsId);
                        }).join("")}
                    </div>

                    <div class="gear-stats-column">
                        ${RIGHT_GEAR_STATS.map(function (stat) {
                            return renderGearStatRow(stat, characterStats[stat.key], row.statsId);
                        }).join("")}
                    </div>
                </div>

                <div class="gear-stats-title beascuit-stats-title">Beascuit Options</div>

                <div class="beascuit-options-grid">
                    ${renderGearStatRow(
                        BEASCUIT_STAT,
                        characterStats[BEASCUIT_STAT.key],
                        row.statsId,
                        "beascuit-option-row"
                    )}
                </div>

            </div>
    `;
}

function renderTeamBuilds(teamBuild) {
    if (!bossTeamBuilds || !teamBuild) {
        return;
    }

    const rowsHtml = teamBuild.rows.map(function (row, index) {
        const dropdownId = `characterStats${index}`;
        const characterNameClass = row.name.length > 22
            ? "team-character-name team-character-name-long"
            : "team-character-name";

        return `
            <div class="team-build-row">
                <div class="team-character">
                    <div class="team-character-card-small">
                        <img class="team-character-avatar" src="${row.image}" alt="${row.name}">
                        <div class="${characterNameClass}">${row.name}</div>
                    </div>

                    <button class="team-stats-toggle" type="button" aria-expanded="false" aria-controls="${dropdownId}">
                        <span class="team-stats-chevron">⌄</span>
                    </button>
                </div>

                <div class="team-build-main-panel">
                    ${row.empty ? '' : `<div class="team-build-title">${row.descriptionTitle}</div>`}
                    ${renderBuildArea(row)}
                    ${row.buildNote ? `<div class="team-build-note">${row.buildNote}</div>` : ""}
                </div>

                <div id="${dropdownId}" class="team-stats-dropdown" aria-hidden="true">
                    ${renderCharacterStatsPanel(row)}
                </div>
            </div>
        `;
    }).join("");

    bossTeamBuilds.innerHTML = `
        <section class="team-guide-panel">
            <div class="team-build-list">
                ${rowsHtml}
            </div>

            <div class="team-guide-notes">
                <div class="team-guide-notes-title">Заметки</div>
                <div class="team-guide-notes-text">${renderNotesText(teamBuild.notes || "")}</div>
            </div>
        </section>
    `;

    initTeamStatsToggles();
    initNoteImageLinks();
}

function initTeamStatsToggles() {
    const toggleButtons = document.querySelectorAll(".team-stats-toggle");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const row = button.closest(".team-build-row");
            const dropdown = document.getElementById(button.getAttribute("aria-controls"));
            const isOpen = row.classList.toggle("stats-open");

            button.setAttribute("aria-expanded", String(isOpen));

            if (dropdown) {
                dropdown.setAttribute("aria-hidden", String(!isOpen));
            }
        });
    });
}

function collectCardStats(card) {
    const stats = {};

    card.querySelectorAll(".gear-stat-value-editor").forEach(function (editor) {
        const input = editor.querySelector(".gear-stat-input");

        stats[input.dataset.statKey] = {
            value: input.value.trim(),
            priority: normalizePriority(editor.dataset.priority)
        };
    });

    return stats;
}

function saveStatsCard(card) {
    saveCharacterStats(card.dataset.characterStatsId, collectCardStats(card));
}

function setEditorPriority(editor, priority) {
    editor.dataset.priority = priority;

    editor.querySelectorAll(".priority-color-button").forEach(function (button) {
        button.setAttribute(
            "aria-pressed",
            String(button.dataset.priorityColor === priority)
        );
    });
}

function initCharacterStatsEditors() {
    document.querySelectorAll(".gear-stats-card").forEach(function (card) {
        card.querySelectorAll(".gear-stat-input").forEach(function (input) {
            input.addEventListener("input", function () {
                input.value = input.value.replaceAll("%", "").replaceAll(" ", "");
                saveStatsCard(card);
            });
        });

        card.querySelectorAll(".priority-color-button").forEach(function (button) {
            button.addEventListener("click", function () {
                const editor = button.closest(".gear-stat-value-editor");
                const selectedPriority = button.dataset.priorityColor;
                const nextPriority = editor.dataset.priority === selectedPriority
                    ? ""
                    : selectedPriority;

                setEditorPriority(editor, nextPriority);
                saveStatsCard(card);
            });
        });
    });
}

if (!bossId) {
    window.location.replace("index.html");
} else if (!boss) {
    document.title = "Босс не найден";
    bossImage.style.display = "none";
    bossName.textContent = "Босс не найден";
    bossWikiLink.style.display = "none";

    bossAbilities.innerHTML = `
        <p class="error-text">
            Не удалось найти данные босса. Вернись на главную страницу и выбери босса заново.
        </p>
    `;

    if (bossTeamBuilds) {
        bossTeamBuilds.innerHTML = "";
    }
} else {
    document.title = boss.name;
    bossImage.src = boss.image;
    bossImage.alt = boss.name;
    bossName.textContent = boss.name;
    bossWikiLink.href = boss.wiki;
    bossAbilities.innerHTML = "";

    boss.abilities.forEach(function (ability) {
        const abilityCard = document.createElement("div");
        abilityCard.classList.add("ability-card");
        abilityCard.innerHTML = `
            <h3>${ability.name}</h3>
            <p class="ability-type">${ability.type}</p>
            <p>${ability.description}</p>
        `;
        bossAbilities.appendChild(abilityCard);
    });

    renderTeamBuilds(TEAM_BUILDS[bossId]);
}
