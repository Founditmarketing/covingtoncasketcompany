// Covington casket catalog — sourced from covingtoncasket.com.
// Images are served from Covington's Wix CDN; ProductPage/CasketCard fall back
// to a local image if one fails to load.

// Images downloaded from Covington's site into /public/caskets so the catalog
// keeps working even if the original site goes offline.
const M = '/caskets/1658be_';

export interface CasketCategory {
  slug: string;
  name: string;
  material: string;
  blurb: string;
}

export interface Casket {
  name: string;
  slug: string;
  code?: string;
  interior?: string;
  material?: string;
  image: string;
  categorySlug: string;
}

export const categories: CasketCategory[] = [
  { slug: 'steel-18-gauge', name: '18-Gauge Steel', material: '18-gauge steel', blurb: 'Our sturdiest steel caskets. As paradoxical as it seems, 18-gauge steel is thicker than 20-gauge — finished in spectacular, automotive-grade paint.' },
  { slug: 'steel-20-gauge', name: '20-Gauge Steel', material: '20-gauge steel', blurb: 'A broad collection of gasketed 20-gauge steel caskets in a stunning range of colors and finishes.' },
  { slug: 'steel-20-gauge-ng', name: '20-Gauge Steel · Non-Gasketed', material: '20-gauge non-gasketed steel', blurb: 'Quality non-gasketed (NG) 20-gauge steel caskets — an elegant, value-minded choice.' },
  { slug: 'hardwood', name: 'Hardwood', material: 'solid hardwood', blurb: 'Timeless caskets crafted from solid hardwoods — a warm, natural tribute to a life well lived.' },
  { slug: 'specialty-metals', name: 'Specialty Metals', material: 'specialty metal', blurb: 'Bronze, copper, and stainless steel — the pinnacle of craftsmanship and permanence.' },
  { slug: 'full-couch', name: 'Full Couch', material: 'full-couch steel', blurb: 'Full-couch designs whose entire lid opens, presenting your loved one in full.' },
  { slug: 'oversize', name: 'Oversize · Empire', material: 'oversize steel', blurb: 'Our EMPIRE series — generously proportioned caskets crafted for larger individuals.' },
  { slug: 'cloth-covered', name: 'Cloth-Covered', material: 'cloth-covered', blurb: 'Dignified, value-minded cloth-covered caskets, hand-assembled with the same care.' },
  { slug: 'infant-youth', name: 'Infant & Youth', material: 'steel', blurb: 'Smaller caskets, made with the same craftsmanship and care, for infants and children.' },
];

// [name, code, interior, imageSuffix, material?]
type Raw = [string, string, string, string, string?];

const RAW: Record<string, Raw[]> = {
  'steel-18-gauge': [
    ['Augusta', 'B61', 'Eggshell Premium Crepe', '7de9309396ef46389482a1b97d44d91d~mv2.jpg'],
    ['Bellaire', 'B44', 'Ivory Basket Weave', '25dadb9156e4497d91251c9e45625399~mv2.jpg'],
    ['Black Onyx', 'B31', 'Grey Premium Crepe', 'd0f8c45191b347919c03579dd397efdf~mv2.jpg'],
    ['Blue Sapphire', 'B30', 'Blue Premium Crepe', '4a60e5f238c4446db05b2f0d76f9ae8d~mv2.jpg'],
    ['Bristol', 'B190', 'Ivory Basket Weave', '8e0510fad5434647b8c792c8a58c13b5~mv2.jpg'],
    ['Carson', 'B170', 'Champagne Velvet', 'ecdc74974c12420b845e0c88a4888116~mv2.jpg'],
    ["Covington Lord's Prayer", 'B38', 'Blue Premium Crepe', '56f32a53d51c43588e9c3f49ff35f4c7~mv2.jpg'],
    ['Dalton', 'B191', 'Ivory Basket Weave', 'c36c3a35f4f34065a31720768a0fc731~mv2.jpg'],
    ['Genesis 1', '', 'White Velvet', 'c36c3a35f4f34065a31720768a0fc731~mv2.jpg'],
    ['Genesis 2', '', 'Champagne Velvet', '604bcd8999304e6a967bdea91c621901~mv2.jpg'],
    ['Genesis 3', '', 'Pink Velvet', 'e9a79b63d8154c4596df8ebba15c3436~mv2.jpg'],
    ['Genesis 4', '', 'White Velvet', '17ae9bd4f6814351ba6154881ee5e3e0~mv2.jpg'],
    ['Genesis 5', '', 'White Velvet', '3a9dd65c20c449d6815cc082c7bfb24f~mv2.jpg'],
    ['Genesis 6', '', 'Champagne Velvet', '4b3be68b991f454a8672394187de2323~mv2.jpg'],
    ['Greyson', 'B33', 'White Premium Crepe', '5cb0da63341844f0a14b76d3a2d7cc3a~mv2.jpg'],
    ['Harvard', 'B26', 'Champagne Velvet, 3-Row Tuft Panel', '23982c9ea06e4b53aa6b961ea46f81d1~mv2.jpg'],
    ['Heirloom', 'B41', 'White Broadcloth, Quilted Panel, Pillow & Overlay', '605eb5231dc244ffbb6412a72a10f752~mv2.jpg'],
    ['Horizon Blue', 'B310', 'Blue Premium Crepe', '87a13f3c44fd4fcfa05fcac194d6a76a~mv2.jpg'],
    ['Horizon Coral', 'B307', 'Pink Premium Crepe', '8cfe0518bc494649aeedcc6510f7ea87~mv2.jpg'],
    ['Horizon Ebony', 'B311', 'White Premium Crepe', 'e5127d8edd7f418c8256999a590a267f~mv2.jpg'],
    ['Horizon Orchid', 'B312', 'Pink Premium Crepe', '2e5dd0084f01472e8cb880c6026c77f0~mv2.jpg'],
    ['Horizon Silver', 'B308', 'White Premium Crepe', '0ed8d73c66584284940c4d08f666c15b~mv2.jpg'],
    ['Horizon White', 'B309', 'White Premium Crepe', 'ad4a55439a364bd69ac75e5a58685e21~mv2.jpg'],
    ['Illusion Cherry', 'B324', 'White Velvet', 'a238454462814d13aaae2925f87c0505~mv2.jpg'],
    ['Lace Rose', 'B37', 'Pink Velvet', '5e123b55a8954efcb98249c4dd43e411~mv2.jpg'],
    ['Madison', 'B200', 'Sand Premium Crepe', '268334f23c7641539a16cc9106004ce5~mv2.jpg'],
    ['Newport', 'B167', 'White Velvet', '10bc91abca94428baaa99e012b4c127b~mv2.jpg'],
    ['Oasis', 'B43', 'Ivory Basket Weave', '146d74412f1f413bb79b1789a7477a93~mv2.jpg'],
    ['Paris', '', 'Pink Velvet', 'f4ae6987fc66449fb545b51293934403~mv2.jpg'],
    ['Pewter', 'B25', 'White Velvet, 3-Row Tuft Panel', 'a1973c6843ff45ca963aa113d474449a~mv2.jpg'],
    ['Phoenix', 'B46', 'White Velvet', 'fbf90923ef684bb9b3374c9b35f067d5~mv2.jpg'],
    ['Princess', 'B27', 'Pink Premium Crepe', '3af4719215b54b858a6dd7ce05d09b62~mv2.jpg'],
    ['Satin Rose', 'B34', 'Pink Premium Crepe', '6775c69da2904dc0bdc014af47b4df73~mv2.jpg'],
    ['Sebring', '', 'Miami Crepe', '257afdd33ea347e7a043053ad14768a5~mv2.jpg'],
    ['Silver Pearl', 'B28', 'Grey Velvet, 3-Row Tuft Panel', '757443a505664367af4e04ba423ebee2~mv2.jpg'],
    ['Triton', 'B169', 'White Velvet', 'e801ea0aa0cf41e9a19a8a2ed53fa0ba~mv2.jpg'],
    ['Witness', 'B48', 'Blue Premium Crepe', '3765b5f6283e4a998c6ad881cf472360~mv2.jpg'],
  ],
  'steel-20-gauge': [
    ['Apex Blue', '', 'Blue Premium Miami Crepe', 'cd0b4250bc88439e9023904bc5c4174d~mv2.jpg'],
    ['Apex Gunmetal', '', 'White Premium Miami Crepe', '56ed4c5a889d4693a2f7bf8c66ba9839~mv2.jpg'],
    ['Apex Pink', '', 'Pink Premium Miami Crepe', '88ea8da306ef4ec382cccecb89358be5~mv2.jpg'],
    ['Apex Purple – Prince', '', 'White Premium Miami Crepe', '5f3b67ce078947a2babc5cacb021a03a~mv2.jpg'],
    ['Apex White', '', 'White Miami Crepe', '3852c434de3f45fd9bb91a9032a9eb00~mv2.jpg'],
    ['Apollo', 'B206', 'Grey Premium Crepe', 'c763d61d5d944eedadb5e0103d0d27b7~mv2.jpg'],
    ['Black Cross', 'B56B', 'White Premium Crepe', 'c09216e667ed491b9a7d5306db9e61ae~mv2.jpg'],
    ['Devotion', 'B59', 'Grey Premium Crepe', 'e82a966ce26d43b0858ab1073de8406f~mv2.jpg'],
    ['Diamond', 'B97', 'White Premium Crepe', 'cb2c7304202b41c7b39f0c20d2813ce3~mv2.jpg'],
    ['Family Forever', 'B60', 'Rosetan Premium Crepe', '88ea8da306ef4ec382cccecb89358be5~mv2.jpg'],
    ['Father II', 'B57', 'Blue Premium Crepe', '5f3b67ce078947a2babc5cacb021a03a~mv2.jpg'],
    ['Fleur-de-Lis', 'B164', 'White Premium Crepe', 'c7b4c4a2a8f243ceb501f5e21594e46e~mv2.jpg'],
    ['Footprints', 'B77', 'White Premium Crepe w/ Embroidered Panel & Throw', '461a14ed06f4440d80f22a12e759ff1a~mv2.jpg'],
    ['Footprints II', 'B78', 'White Premium Crepe w/ Embroidered Panel & Throw', '7fd02f0e4fb84b5eb4ff0ebe3c05b417~mv2.jpg'],
    ['Galaxy', 'B207', 'Grey Premium Crepe', 'd053575d61db4fd98bf3eded36852aa0~mv2.jpg'],
    ['Going Home', 'B70', 'Blue Premium Crepe', 'f1d315f69a464f3680dd0d9679efc89c~mv2.jpg'],
    ['Going Home II', 'B70A', 'Rosetan Premium Crepe', 'f1d315f69a464f3680dd0d9679efc89c~mv2.jpg'],
    ['Houndstooth', 'B162', 'White Premium Crepe', '65e76fcc8e3440b0bd0bb843881c9e04~mv2.jpg'],
    ["In God's Care", 'B67', 'Blue Premium Crepe', 'ad519216c0cc4407a45c0be4e8c26c37~mv2.jpg'],
    ["In God's Care II", 'B68', 'White Premium Crepe', 'ad93a1daf89d4593b64db6144898cebf~mv2.jpg'],
    ['Lace Rose II', 'B165', 'Pink Velvet', '4a28a01db8a84073bc941bb9a90d195b~mv2.jpg'],
    ['Mother II', 'B58', 'Pink Premium Crepe', '2abdbac4e8614374a3f69e61435105a4~mv2.jpg'],
    ['Mystic Rose', 'B66', 'Blue Premium Crepe', 'fed736f877724033a29a1098c4202220~mv2.jpg'],
    ['Olympia', 'B208', 'Grey Premium Crepe', 'f38c170d933544fe87a9b357a8f2bdd4~mv2.jpg'],
    ['Pearl Rose', 'B65', 'Pink Premium Crepe', '9a08d5381dd94feeb51d4453b3ec78ad~mv2.jpg'],
    ['Princess II', 'B301', 'Pink Premium Crepe', '2c5cf830ff93492ca76d0f9f7ca9e1ff~mv2.jpg'],
    ['Queen of Heaven', 'B94', 'Blue Premium Crepe', '6fda0ed3315c4323a2787c8cd5f87427~mv2.jpg'],
    ['Rocky Top', '', 'White Miami Crepe', '6fda0ed3315c4323a2787c8cd5f87427~mv2.jpg'],
    ['Royal White Shade Pink', '', 'Pink B Crepe', 'fb7ab76d1a8846d1b6cfd0172bed5b01~mv2.jpg'],
    ['Salvation', 'B93', 'Blue Premium Crepe', '2ba7a913f61f4820b810871981313888~mv2.jpg'],
    ['Salvation II', 'B93A', 'White Premium Crepe', 'b43b8e725c384f21aa65d855c1709f4b~mv2.jpg'],
    ['Scroll Bronze', 'B75', 'Rosetan Premium Crepe', 'd3e7e370e6c1469db7847d694ffc46be~mv2.jpg'],
    ['Scroll Ebony', 'B76', 'Grey Premium Crepe', 'ceee265dc81b4bd782dd8051242a7ad2~mv2.jpg'],
    ['Serenity II', 'B166', 'Blue Velvet', 'ef49e241a41d49f1a50b4b86667b8ad1~mv2.jpg'],
    ['Shepherd', 'B79', 'Sand Premium Crepe', 'd6aa46dbceaf47c893221c02f4ea83ea~mv2.jpg'],
    ['Simplicity', 'B273', 'Pink Premium Crepe', '17684d0d62254d94b7804aaf6c137d9e~mv2.jpg'],
    ['Testament', 'B112', 'White Premium Crepe', '2ba7a913f61f4820b810871981313888~mv2.jpg'],
    ['The Eagle', 'B163', 'White Premium Crepe', '2a9501ec327d46729e44624201b45c47~mv2.jpg'],
    ['Thomas Almond', '', 'Eggshell Miami Crepe', '2a9501ec327d46729e44624201b45c47~mv2.jpg'],
    ['Thomas Blue', 'B248W', 'White Premium Crepe', '957db12384914798a5ddb41a7303cfd1~mv2.jpg'],
    ['Thomas Silver', 'B251', 'White Premium Crepe', '35fed921636542428d5b75cb3a9cc5b8~mv2.jpg'],
    ['Thomas Tiger Eye', 'B249', 'Rosetan Premium Crepe', '5c1f06e78bbd43518432136f60c07d8b~mv2.jpg'],
    ['Thomas White', 'B250', 'Pink Premium Crepe', '031bc48dbd0d4ecb9e2ffc58c6b547e7~mv2.jpg'],
    ['Tiara Rose', '', 'Eggshell Miami Crepe', '18ae44d82c6747daba1ce2a242b90104~mv2.jpg'],
    ['Topaz', 'B204', 'Eggshell Premium Crepe', '33ad7042e10846d5ad20effc820f610c~mv2.jpg'],
    ['Tribute', 'B81', 'White Premium Crepe', '2a1fb22ced6c494e8e3e1a945e62a568~mv2.jpg'],
    ['Tribute II', 'B82', 'White Premium Crepe', '2a1fb22ced6c494e8e3e1a945e62a568~mv2.jpg'],
    ['Twin Rose', 'B64', 'Pink Premium Crepe', '9ca87a999c924afcb1912902b3d0a5a1~mv2.jpg'],
    ['Ultra Blue', 'B90', 'Blue Crepe', '9532da120efa4e98b2d9b908d9596c99~mv2.jpg'],
    ['Ultra Orchid', 'B88', 'Pink Crepe', 'be7cc4d8db0841b6ab8d0b5624526dea~mv2.jpg'],
    ['Ultra Pink', 'B87', 'Pink Crepe', '54a8baafdc194a6c9f0a932d8e133072~mv2.jpg'],
    ['Ultra Silver', 'B86', 'White Crepe', '05c4a3c3bdac45498dd075bc24885411~mv2.jpg'],
    ['Ultra Tiger Eye', 'B85', 'Rosetan Crepe', '4d00b433814a4b308cdb1f2470030f1e~mv2.jpg'],
    ['Ultra White', 'B89', 'White Crepe', 'f10e2b6a6be14a8490db352565f74fb0~mv2.jpg'],
    ['White Cross', 'B56', 'White Premium Crepe', '1be695677b2345358c81444dc4fed46a~mv2.jpg'],
  ],
  'steel-20-gauge-ng': [
    ['Allen Coppertone', 'B132', 'Rosetan Crepe', '7bb5e010d94348e0a22481fe6235a922~mv2.jpg'],
    ['Allen Silver', 'B131', 'Crepe', 'a08020a5a77e46e59111118ac48502d3~mv2.jpg'],
    ['Blue', 'LW2', 'Blue Premium Crepe', '5d0c3121b5a846de8ab9cde5ba3a8f1c~mv2.jpg'],
    ['Ebony', 'LW5', 'White Premium Crepe', '4608498aede441d7b97d64606629857d~mv2.jpg'],
    ['Milan', 'B256', 'Blue Crepe', 'd9fadfca703940558a6b1739a11485d9~mv2.jpg'],
    ['Orchid', 'LW6', 'White Premium Crepe', '6c26d568b6a04377a0265382617d389c~mv2.jpg'],
    ['Royal Blue', 'B135', 'Blue Crepe', '65f18ba5db854e278528c9b07b7e8ad3~mv2.jpg'],
    ['Royal Coppertone', 'B141', 'Rosetan Crepe', '3e709453f2e043d9ab6b1369848a4cb7~mv2.jpg'],
    ['Royal Ebony', 'B242', 'White Crepe', 'ed2b90849c24475ea37128737405f232~mv2.jpg'],
    ['Royal Gold', 'B140', 'Eggshell Crepe', '6ac936490a6b488999111b5ff14537e3~mv2.jpg'],
    ['Royal Orchid', 'B139', 'White Crepe', '4399aff86bc5482b8672094f98f3cd7b~mv2.jpg'],
    ['Royal Silver', 'B136', 'White Crepe', 'ca7d77fe390e4a4cb7a2db6aea5ee8c4~mv2.jpg'],
    ['Royal White', 'B138', 'Pink B Crepe', '17e0e93e6589451c9a8274078893d652~mv2.jpg'],
    ['Silver', 'LW1', 'White Premium Crepe', '6af1b0d734ba4fa5a7f7ae3a8459c1e1~mv2.jpg'],
    ['Trinity I', 'B128', 'White Crepe', '8cedd43c168b4ca0bc4597994f013916~mv2.jpg'],
    ['Trinity II', 'B129', 'Blue Crepe', 'e00155da5e544034950b8f57cdc3f1f5~mv2.jpg'],
    ['Trinity III', 'B130A', 'White Crepe', '61fa4aff10e34d998d8dd3268c8ac68f~mv2.jpg'],
    ['White', 'LW4', 'White Premium Crepe', 'f9abd1e6d29f4e9fa28b77d3e264ed31~mv2.jpg'],
    ['White (Pink Crepe)', 'LW3', 'Pink Premium Crepe', 'ca7d77fe390e4a4cb7a2db6aea5ee8c4~mv2.jpg'],
  ],
  'hardwood': [
    ['Carolina', 'B8', 'Rosetan Premium Crepe', 'de10a875cf5e4d9cb1d68b8a3a43a113~mv2.jpg'],
    ['Clark', 'B6', 'Rosetan Premium Crepe', '9274f252daf343dc84a178b521a94f22~mv2.jpg'],
    ['Colonial', 'B2', 'Beige Velvet', 'a4857667a16c4dcdb3007ecbd3d7c37b~mv2.jpg'],
    ['Dixon', 'B11', 'Rosetan Premium Crepe', '7876411334e54ea5beb9d18c18f331d0~mv2.jpg'],
    ['Frontier', '', 'Rosetan Miami Crepe', '9f5e6c07d1914434a831f8c953290c92~mv2.jpeg'],
    ['Hancock', 'B7', 'Rosetan Velvet', '4e31b19120f94778ab6b1a5156e95e75~mv2.jpg'],
    ['Hinge Oak', 'B12', 'Rosetan Crepe', '14e16be6afde4886aa0df8f87aee56e6~mv2.jpg'],
    ['Homestead II', 'B14', 'Rosetan Crepe', 'a24bf53accd64b04b0ac81ceafd84fb6~mv2.jpg'],
    ['Hope', 'B4', 'Linwood Crepe', '58533ada80e24e6a9cfef1b71c5b0237~mv2.jpg'],
    ['Jackson', 'B3', 'Beige Velvet', '94edfa8b5bad41d0893dfa90e3254111~mv2.jpg'],
    ['Legacy', 'B1', 'Mahogany Rosetan Velvet, Tufted Panel', '0dcbf6e734d648b5825ca9244894d880~mv2.jpg'],
    ['Milton', 'B147', 'Eggshell Premium Crepe', '8d5d7dc70f2f446ba57e50599e8e6b35~mv2.jpg'],
    ['Ridgeland', 'B149', 'Khaki Basket Weave', '8d5d7dc70f2f446ba57e50599e8e6b35~mv2.jpg'],
    ['Rustic Oak', 'B6R0', 'White Cotton', '6cd038a3b6114adb95e8660516dbf465~mv2.jpg'],
    ['Sportsman', 'B5', 'Camo Cloth', 'e9062e987bcd4d14b57deec908c4febc~mv2.jpg'],
    ['Titan', 'B148', 'Rosetan Premium Crepe', '64288d2095a2468792f0497e6782f9f5~mv2.jpg'],
  ],
  'specialty-metals': [
    ['Conquest', 'B22', 'White Velvet', 'ac566f38c82e4c1892b20141678f3768~mv2.jpg', 'Stainless Steel'],
    ['Lincoln', 'B20', 'Champagne Velvet Tuft', 'bac465348c334c51b90871eeda990907~mv2.jpg', 'Copper'],
    ['Reagan', 'B19', 'Lilac Pink Velvet', '695066dcb1ca424fb60cbb8ca466bb50~mv2.jpg', 'Copper'],
    ['Roosevelt', 'B18', 'White Velvet, 3-Row Tuft', 'd3373df1562f4266a68c26959eefa615~mv2.jpg', 'Copper'],
    ['Sanctuary', 'B23', 'Blue Velvet', '8cc9677036614c6eb3e0b27dda90a823~mv2.jpg', 'Stainless Steel'],
    ['Tea Rose', 'B21', 'Pink Premium Crepe', '441a3517567d430e8192c52b634f6a6c~mv2.jpg', 'Stainless Steel'],
    ['Vanderbilt', 'B16', 'Blue Velvet, Tufted', 'e1bcbe1941ba4ff99a312fcabc4077b5~mv2.jpg', 'Bronze'],
    ['Victoria', 'B24', 'Pink Premium Crepe', '4d1ce1e0d3ae4ee79bf11c7d7b859560~mv2.jpg', 'Stainless Steel'],
    ['Washington', 'B17', 'Blue Velvet, Tufted', '8aed131f0c624f65997fc3687b576d50~mv2.jpg', 'Copper'],
    ['Winchester', 'B15', 'Ivory Velvet, Fully Tufted', '30b89dcabfea4a83a05e1a1cd20ee547~mv2.jpg', 'Bronze'],
  ],
  'full-couch': [
    ['Going Home', 'B101', 'Blue Premium Crepe', 'de4f45abf4e64072bd414ab9a7901d1b~mv2.jpg'],
    ["In God's Care", 'B100', 'Blue Premium Crepe', '360f07d8451944128cc4c2393f17fd95~mv2.jpg'],
    ['Mother', 'B105', 'Pink Premium Crepe', '2bf8e4c3b4c34dd48ce68e935a92709a~mv2.jpg'],
    ['Oval Glass', 'B350', 'White Premium Crepe', '2b0d3144d5e246259bd58b10a3607d23~mv2.jpg'],
    ['Pearl Rose', 'B103', 'Pink Premium Crepe', '74bbc335663340719d0f9b2c7a7d1f7d~mv2.jpg'],
    ['Shepherd', 'B102', 'Sand Premium Crepe', 'cf3e74a9a404413e9f563922a210fbe1~mv2.jpg'],
    ['White Cross', 'B99', 'White Premium Crepe', 'f4b6d5c19adf401abaeb68889b3b0a0f~mv2.jpg'],
  ],
  'oversize': [
    ['Devotion II', 'B322', 'White Premium Crepe', '663ad911ea444365b891231baba4db7b~mv2.jpg'],
    ['Father II', 'B124', 'Powder Blue Premium Crepe', 'af22d80da5d74e51b299954465b16f01~mv2.jpg'],
    ['Going Home', 'B118', 'Blue Premium Crepe', '51c8e61bd1fe4dcba2c1dcfc4fe7045d~mv2.jpg'],
    ['Heritage', 'B115', 'Rosetan Premium Crepe', '01c64027fbef42b2829a0db8169a5e8f~mv2.jpg'],
    ["In God's Care", 'B114', 'Blue Premium Crepe', '4ef469534d674e37b1d24d4e65278ea0~mv2.jpg'],
    ['Majestic Blue', 'B126', 'White Premium Crepe', '2782712186a840c5ae3599fa5749a451~mv2.jpg'],
    ['Majestic Ebony', 'B254', 'White Premium Crepe', '62fd14d5688a408c9024aaaa1fb030b7~mv2.jpg'],
    ['Majestic Pink', 'B125', 'Pink Premium Crepe', '36fee8dc0f5248e3a34e7765b08e3dcd~mv2.jpg'],
    ['Majestic Silver', 'B127', 'White Premium Crepe', 'a90e18ba668347ce94c5727ec41a422f~mv2.jpg'],
    ['Majestic Tiger Eye', 'B228', 'Rosetan Premium Crepe', 'e5b452180f5f48288e70cacff060221e~mv2.jpg'],
    ['Memorial', 'B116', 'White Premium Crepe', '22aa96be4cdb419b82e9fedc5d26b47c~mv2.jpg'],
    ['Mother II', 'B123', 'Pink Premium Crepe', '4a55ee13cbd64bf295bcb92b77ed57c2~mv2.jpg'],
    ['Pearl Rose', 'B119', 'Pink Premium Crepe', '59805148bca245ada97e22c72a2e0d11~mv2.jpg'],
    ['Princess', 'B120', 'Pink Premium Crepe', 'd7820b3b6e824850be5076ae75c788dc~mv2.jpg'],
    ['Revelation', 'B117', 'Blue Premium Crepe', 'f74b5fad7cc340c494b2998abddc0b88~mv2.jpg'],
    ['Rockford', 'B122', 'White Premium Crepe', '7689c3e1407b463e83964be5af2ceb6d~mv2.jpg'],
    ['Sterling', 'B121', 'White Premium Crepe', 'af1db86c0fc94dd4af036414845dd560e~mv2.jpg'],
    ['White Cross', 'B113', 'White Premium Crepe', '22aa96be4cdb419b82e9fedc5d26b47c~mv2.jpg'],
  ],
  'cloth-covered': [
    ['Logan Blue', 'CCW3', 'Blue with White Interior', 'ebbafe39206549dd8b76b5c619ca4ad2~mv2.jpg'],
    ['Logan Pink', 'CCW1', 'Pink with White Interior', 'be9adddd1b8d4fc48650cdca6401e68f~mv2.jpg'],
    ['Logan Silver', 'CCW2', 'Silver with White Interior', 'b838de04379a4cacb6ecb4c85e477c14~mv2.jpg'],
    ['Logan White', 'CCW5', 'White with White Interior', 'e67b25e30586498ba063df13fcd1d883~mv2.jpg'],
    ['Perfection', 'CCW4', 'Black Design with White Interior', '813b87dcbb6d4ed49684629d429c3ec0~mv2.jpg'],
  ],
  'infant-youth': [
    ['Angel', 'B145', 'White Interior', '4688f9b105a74ac6ba44624a3682f0b0~mv2.jpg'],
  ],
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Flatten into a typed list with unique slugs per category.
const used: Record<string, Set<string>> = {};
export const caskets: Casket[] = Object.entries(RAW).flatMap(([categorySlug, items]) =>
  items.map(([name, code, interior, img, material]) => {
    let slug = slugify(name);
    const set = (used[categorySlug] ||= new Set());
    if (set.has(slug)) {
      let i = 2;
      while (set.has(`${slug}-${i}`)) i++;
      slug = `${slug}-${i}`;
    }
    set.add(slug);
    return {
      name,
      slug,
      code: code || undefined,
      interior: interior || undefined,
      material: material || undefined,
      image: M + img,
      categorySlug,
    };
  }),
);

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getCaskets = (categorySlug: string) => caskets.filter((c) => c.categorySlug === categorySlug);
export const getCasket = (categorySlug: string, slug: string) =>
  caskets.find((c) => c.categorySlug === categorySlug && c.slug === slug);
export const categoryCount = (slug: string) => getCaskets(slug).length;
