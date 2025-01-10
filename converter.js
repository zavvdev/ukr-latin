function convert({ text, map }) {
  var chars = text.split("");

  return chars
    .map((char, index) => {
      let next_char = chars[index + 1];
      let converted = map[char.toLowerCase()];

      if (converted?.length == 2 && char === char.toUpperCase()) {
        if (next_char === next_char?.toUpperCase()) {
          converted = converted.toUpperCase();
        } else {
          converted =
            converted.split("")[0].toUpperCase() + converted.split("")[1];
        }
      } else if (char === char.toUpperCase()) {
        converted = converted?.toUpperCase();
      }

      return converted || char;
    })
    .join("");
}
