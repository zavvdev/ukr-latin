(() => {
  // var version_select_element = document.getElementById("version");
  // var conversion_select_element = document.getElementById("conversion");
  var convert_button = document.getElementById("convert");

  // var v1 = document.getElementById("v1");
  // var v2 = document.getElementById("v2");

  var cyr_lat = document.getElementById("cyr_lat");
  // var lat_cyr = document.getElementById("lat_cyr");

  // var version_ids = ["v1", "v2"];
  // var conversion_ids = ["cyr_lat", "lat_cyr"];

  function init() {
    // version_select_element.addEventListener("change", select_version);
    // conversion_select_element.addEventListener("change", select_conversion);
    convert_button.addEventListener("click", convert);

    // v1.style.display = "block";
    // cyr_lat.style.display = "block";

    // v2.style.display = "none";
    // lat_cyr.style.display = "none";
  }

  // function select_version(e) {
  //   version_ids.forEach((id) => {
  //     document.getElementById(id).style.display = "none";
  //   });
  //   document.getElementById(e.target.value).style.display = "block";
  // }
  //
  // function select_conversion(e) {
  //   conversion_ids.forEach((id) => {
  //     document.getElementById(id).style.display = "none";
  //   });
  //
  //   conversion_ids.forEach((id) => {
  //     ["cyr", "lat"].forEach((type) => {
  //       document.getElementById(`${id}_${type}`).value = "";
  //     });
  //   });
  //
  //   document.getElementById(e.target.value).style.display = "block";
  // }

  function convert() {
    // var version = version_select_element.value;
    var version = "v1";
    // var conversion = conversion_select_element.value;
    var conversion = "cyr_lat";

    var cyr = document.getElementById(`${conversion}_cyr`).value;
    var lat = document.getElementById(`${conversion}_lat`).value;

    var call_map = {
      v1_cyr_lat: v1_cyr_lat,
      v1_lat_cyr: v1_lat_cyr,
      v2_cyr_lat: v2_cyr_lat,
      v2_lat_cyr: v2_lat_cyr,
    };

    var result_id_map = {
      cyr_lat_cyr: "cyr_lat_lat",
      cyr_lat_lat: "cyr_lat_cyr",
      lat_cyr_cyr: "lat_cyr_lat",
      lat_cyr_lat: "lat_cyr_cyr",
    };

    var text = conversion === "cyr_lat" ? cyr : lat;
    var target_type = conversion === "cyr_lat" ? "cyr" : "lat";

    document.getElementById(
      result_id_map[`${conversion}_${target_type}`],
    ).value = call_map[`${version}_${conversion}`](text);
  }

  init();
})();
