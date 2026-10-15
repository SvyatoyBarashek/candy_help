const BOSSES = {
    redVelvetDragon: {
        name: "Red Velvet Dragon",
        image: "../images/Red_Velvet_Dragon_mirrored.png",
        wiki: "https://cookierunkingdom.fandom.com/wiki/Red_Velvet_Dragon",
        abilities: [
            {
                name: "Red Dragon's Scales",
                type: "Пассивная способность",
                description: "Red Velvet Dragon отражает 75% полученного урона обратно в атакующего."
            },
            {
                name: "Shred",
                type: "Обычная атака",
                description: "Наносит 100% урона от ATK трём ближайшим целям и оглушает их на 1 сек."
            },
            {
                name: "Ravage",
                type: "Перезарядка: 1 атака",
                description: "Наносит 150% урона от ATK трём ближайшим целям и оглушает их на 1 сек."
            },
            {
                name: "Red Velvet Wraith",
                type: "Перезарядка: 2 атаки",
                description: "Призывает 2 Red Velvet Wraith. Они остаются на поле боя, пока не будут побеждены. Урон атаки Wraith: 100% от ATK."
            },
            {
                name: "Red Velvet Meteorites",
                type: "Перезарядка: 3 атаки",
                description: "Призывает 3 метеорита. Каждый наносит 150% урона от ATK и накладывает оглушение на 3 сек."
            },
            {
                name: "Dragon Breath",
                type: "Перезарядка: 4 атаки",
                description: "Наносит периодический урон всем целям: 8 ударов за 0.8 сек, каждый удар — 350% от ATK."
            }
        ]
    },

    machineGodOfTheEternalVoid: {
        name: "Machine God of the Eternal Void",
        image: "../images/Machine-God_of_the_Eternal_Void_mirrored.png",
        wiki: "https://cookierun.wiki/w/Machine-God_of_the_Eternal_Void",
        abilities: [
            {
                name: "Unstable Engineering",
                type: "Пассивная способность",
                description: "Основное тело постоянно притягивает атаки (Taunt) и получает 52% урона, нанесённого четырём компонентам. Босс и компоненты невосприимчивы ко всем дебаффам, кроме водных. Получаемый боссом водный урон увеличен на 12%."
            },
            {
                name: "Cogfall",
                type: "Обычная атака",
                description: "Сбрасывает шестерню сверху и наносит 70% урона от ATK двум ближайшим целям, отдавая приоритет печенькам."
            },
            {
                name: "Magnetic Burst",
                type: "Перезарядка: 2 атаки",
                description: "Притягивает металлические предметы мощным магнитным полем. Наносит всем целям 4 удара по 25% урона от ATK и финальный удар на 70%."
            },
            {
                name: "Earth Strike",
                type: "Перезарядка: 4 атаки",
                description: "Ударяет по земле, нанося истинный урон в размере 50% от Max HP цели и подбрасывая её в воздух. Оглушает на 3 сек."
            },
            {
                name: "Wrath of the Machine-God",
                type: "Перезарядка: 6 атак",
                description: "Выпускает электрическую ударную волну: 4 удара по 40% урона от ATK всем целям и финальный удар на 100%. Последний удар оглушает на 4 сек и накладывает Zap: 5% урона от ATK каждую секунду в течение 30 сек, максимум 1 стак."
            },
            {
                name: "Double Gear Slash",
                type: "Перезарядка: 8 атак",
                description: "Запускает две большие шестерни, нанося всем целям 170% урона от ATK и отбрасывая их."
            }
        ]
    },

    livingLicoriceAbyss: {
        name: "Living Licorice Abyss",
        image: "../images/Living_Licorice_Abyss_mirrored.png",
        wiki: "https://cookierunkingdom.fandom.com/wiki/Living_Abyss",
        abilities: [
            {
                name: "Chill of the Abyss",
                type: "Пассивная способность",
                description: "Получает иммунитет ко всем дебаффам, кроме Burn и Vampiric Bite. Сопротивление урону увеличено на 95%."
            },
            {
                name: "Abyssal Hive",
                type: "Пассивная способность",
                description: "В начале боя призывает 8 Licorice Ooze. Босс получает 19.3% урона, нанесённого Licorice Ooze. Если Licorice Ooze получает обездвиживающий дебафф, он получает стак Weakness."
            },
            {
                name: "Claws of Licorice",
                type: "Обычная атака",
                description: "Наносит 100% урона от ATK пяти ближайшим целям и накладывает Corruption."
            },
            {
                name: "Abyssal Missile",
                type: "Перезарядка: 1 атака",
                description: "Выпускает ядовитые сгустки по трём ближайшим целям. Каждый сгусток наносит 75% урона от ATK, взрывается и создаёт область периодического урона."
            },
            {
                name: "Abyssal Missile: Area Effect",
                type: "Эффект области",
                description: "Область наносит 6 ударов за 3 сек, каждый удар — 40% урона от ATK. Каждый удар снижает ATK SPD и MOV SPD на 30% на 10 сек. Эффект складывается."
            },
            {
                name: "Sticky Venom",
                type: "Перезарядка: 2 атаки",
                description: "Наносит 75% урона от ATK двум ближайшим целям и оглушает их на 2 сек."
            },
            {
                name: "Devour",
                type: "Начальная: 2 атаки | Перезарядка: 5 атак",
                description: "Поглощает цель с наибольшим Max HP на 5 сек. При поглощении наносит 100% урона от ATK. После окончания эффекта цель получает истинный урон в размере 5% от Max HP и оглушение на 3 сек."
            },
            {
                name: "Poisonous Breath",
                type: "Начальная: 5 атак | Перезарядка: 3 атаки",
                description: "Наносит всем целям периодический урон: 5 ударов, каждый удар — 20% урона от ATK. Накладывает Healing Down -15% на 10 сек и Corruption: 5% от Max HP каждую 1 сек в течение 10 сек."
            }
        ]
    },

    avatarOfDestiny: {
        name: "Avatar of Destiny",
        image: "../images/Avatar_of_Destiny_mirrored.png",
        wiki: "https://cookierunkingdom.fandom.com/wiki/Avatar_of_Destiny/Boss",
        abilities: [
            {
                name: "Destiny: Reversal",
                type: "Пассивная способность",
                description: "Босс не может получать дебаффы. При попытке наложить дебафф получает 1 стак Destiny Reversal. При 3 стаках наносит всем целям истинный урон в размере 50% от Max HP и оглушает их на 4 сек."
            },
            {
                name: "Destiny Reversal: Stack Effect",
                type: "Эффект стака",
                description: "Каждый стак Destiny Reversal даёт ATK +100% и DMG Resist +50%. Усиление характеристик складывается до 3 раз. Срабатывание урона не имеет лимита по количеству раз."
            },
            {
                name: "Destiny: Weakness",
                type: "Пассивная способность",
                description: "Весь получаемый боссом урон увеличен на 45%."
            },
            {
                name: "Destiny: Realization",
                type: "Обычная атака",
                description: "Наносит двум ближайшим целям 20% урона от ATK и истинный урон в размере 20% от Max HP цели. Оглушает цели на 3 сек."
            },
            {
                name: "Destiny: Oblivion",
                type: "Перезарядка: 1 атака",
                description: "Через примерно 2.6 сек наносит всем целям 3.5% урона от ATK и истинный урон в размере 35% от Max HP цели. Накладывает Silence на 2.5 сек."
            },
            {
                name: "Destiny: Hindrance",
                type: "Начальная: 2 атаки | Перезарядка: 4 атаки",
                description: "Призывает 5 Stones of Destiny. При падении каждый камень наносит истинный урон по области в размере 5% от Max HP, слегка отбрасывает цели и оглушает их."
            },
            {
                name: "Stone of Destiny",
                type: "Объект способности",
                description: "Каждый Stone of Destiny выдерживает 33 удара вместо обычной шкалы HP. Камни неразрушимы до истощения щита и остаются на поле 25 сек."
            },
            {
                name: "Destiny: Doom",
                type: "Перезарядка: 3 атаки",
                description: "Выбирает ближайшую цель. Через примерно 3.1 сек наносит ей 100% истинного урона."
            },
            {
                name: "Destiny: Punishment",
                type: "Начальная: 4 атаки | Перезарядка: 3 атаки",
                description: "Призывает столб света позади команды. Столб медленно движется к команде и наносит периодический урон при контакте."
            },
            {
                name: "Destiny: Punishment: Column Effect",
                type: "Эффект столба света",
                description: "Столб света наносит 1000% урона от ATK каждые 0.5 сек в течение 10 сек. Каждый удар накладывает MOV SPD -50% на 3 сек и Burn: 50% урона каждую 1 сек в течение 4 сек."
            }
        ]
    }
};