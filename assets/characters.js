const charEnumMap = {
    /* Use these when hosted on GitHub. */
    "Arisette": { url: "assets/characters/arisette1.png", hOffset: -21, tlXOffset: -100, tlVOffset: 9, tlZoom: 180, brXOffset: -10, brVOffset: 61, brZoom: 150 },
    "AZ": { url: "assets/characters/az1.png", hOffset: 10, tlXOffset: 4, tlVOffset: -63, tlZoom: 200, brXOffset: 83, brVOffset: 1, brZoom: 156 },
    "BARRY-350": { url: "assets/characters/barry1.png", hOffset: -13, tlXOffset: 2, tlVOffset: 92, tlZoom: 200, brXOffset: 87, brVOffset: 100, brZoom: 167 },
    "Bonso": { url: "assets/characters/bonso1.png", hOffset: 0, tlXOffset: -23, tlVOffset: 53, tlZoom: 200, brXOffset: 73, brVOffset: 74, brZoom: 148 },
    "Kontay": { url: "assets/characters/kontay1.png", hOffset: 19, tlXOffset: 23, tlVOffset: -84, tlZoom: 176, brXOffset: 120, brVOffset: -19, brZoom: 185 },
    "Leznever": { url: "assets/characters/leznever1.png", hOffset: -9, tlXOffset: -50, tlVOffset: -67, tlZoom: 141, brXOffset: 30, brVOffset: 8, brZoom: 145 },
    "Rikki": { url: "assets/characters/rikki1.png", hOffset: 0, tlXOffset: -29, tlVOffset: -34, tlZoom: 185, brXOffset: 57, brVOffset: 30, brZoom: 142 },
    "Sin AZ": { url: "assets/characters/sinaz1.png", hOffset: 25, tlXOffset: 22, tlVOffset: 67, tlZoom: 169, brXOffset: 100, brVOffset: 90, brZoom: 169 },
    "Spiros": { url: "assets/characters/spiros1.png", hOffset: 0, tlXOffset: -34, tlVOffset: -27, tlZoom: 126, brXOffset: 60, brVOffset: 28, brZoom: 130 }

    /* Use these when testing locally. */
    /* "Arisette": { url: "https://cdn.discordapp.com/attachments/950601093073743922/1505150856557760582/arisette1.png?ex=6a099478&is=6a0842f8&hm=c6575e7f97c06a4127c85419f74a5abc3adf51bcdda6667ef3bc2234894f33a9&", hOffset: -21, tlXOffset: -100, tlVOffset: 9, tlZoom: 180, brXOffset: -10, brVOffset: 61, brZoom: 150 },
    "AZ": { url: "https://cdn.discordapp.com/attachments/950601093073743922/1505150856935510129/az1.png?ex=6a099478&is=6a0842f8&hm=f998c2e7eb70a14926cfe23f7b9a261e47954361f42a8e6a0f5fa4842075c357&", hOffset: 10, tlXOffset: 4, tlVOffset: -63, tlZoom: 200, brXOffset: 83, brVOffset: 1, brZoom: 156 },
    "BARRY-350": { url: "https://cdn.discordapp.com/attachments/950601093073743922/1505150857287827579/barry1.png?ex=6a099478&is=6a0842f8&hm=00cfcf3ff2da229211471212f2601a28a1c4f6072297aa2ec39c861546d56262&", hOffset: -13, tlXOffset: 2, tlVOffset: 92, tlZoom: 200, brXOffset: 87, brVOffset: 100, brZoom: 167 },
    "Bonso": { url: "https://cdn.discordapp.com/attachments/950601093073743922/1505150857669382194/bonso1.png?ex=6a099478&is=6a0842f8&hm=2bdd2209d30c535c080e6e1036cc562ff15e926d15b2bbbba8cefdaf55b19ed9&", hOffset: 0, tlXOffset: -23, tlVOffset: 53, tlZoom: 200, brXOffset: 73, brVOffset: 74, brZoom: 148 },
    "Kontay": { url: "https://cdn.discordapp.com/attachments/950601093073743922/1505150858126557234/dontay1.png?ex=6a099478&is=6a0842f8&hm=13d366f3ea4d5140112ea43d78a60f422825d27ac28bae17710aeac2baf1190b&", hOffset: 19, tlXOffset: 23, tlVOffset: -84, tlZoom: 176, brXOffset: 120, brVOffset: -19, brZoom: 185 },
    "Leznever": { url: "https://cdn.discordapp.com/attachments/950601093073743922/1505150858554507265/leznever1.png?ex=6a099479&is=6a0842f9&hm=6fc4df3f045032a799a132fb145cb030287b96f3d06bd156652111e1d5a95dc2&", hOffset: -9, tlXOffset: -50, tlVOffset: -67, tlZoom: 141, brXOffset: 30, brVOffset: 8, brZoom: 145 },
    "Rikki": { url: "https://cdn.discordapp.com/attachments/950601093073743922/1505150855073107999/rikki1.png?ex=6a099478&is=6a0842f8&hm=13cf1da80da5cdff4e5739a6cbc8bdaee26c3b78338d14aa0109f78d5049e9ae&", hOffset: 0, tlXOffset: -29, tlVOffset: -34, tlZoom: 185, brXOffset: 57, brVOffset: 30, brZoom: 142 },
    "Sin AZ": { url: "https://cdn.discordapp.com/attachments/950601093073743922/1505150855551254548/sinaz1.png?ex=6a099478&is=6a0842f8&hm=6bdd1b6d79aeecf566279af8d1630a8a806f1d3cb2d34538c587686832b4587f&", hOffset: 25, tlXOffset: 22, tlVOffset: 67, tlZoom: 169, brXOffset: 100, brVOffset: 90, brZoom: 169 },
    "Spiros": { url: "https://cdn.discordapp.com/attachments/950601093073743922/1505150856172142612/spiros1.png?ex=6a099478&is=6a0842f8&hm=298f14df3e02f618d695220dddf4883e13e38d2793575a37de9bc7895f29a1a6&", hOffset: 0, tlXOffset: -34, tlVOffset: -27, tlZoom: 126, brXOffset: 60, brVOffset: 28, brZoom: 130 } */
};