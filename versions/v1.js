var cyr_lat_map = {
  а: "a",
  б: "b",
  в: "w",
  г: "g",
  ґ: "ĝ",
  д: "d",
  е: "e",
  є: "je",
  ж: "ž",
  з: "z",
  и: "y",
  і: "i",
  ї: "ї",
  й: "j",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "c",
  ч: "č",
  ш: "š",
  щ: "šč",
  ь: "j",
  ю: "ü",
  я: "ja",
};

var lat_cyr_map = Object.entries(cyr_lat_map).reduce((acc, [k, v]) => {
  acc[v] = k;
  return acc;
}, {});

function v1_cyr_lat(cyr) {
  return convert({
    text: cyr,
    map: cyr_lat_map,
  });
}

function v1_lat_cyr(lat) {
  return convert({
    text: lat,
    map: lat_cyr_map,
  });
}
