$.ajax({
  url: "https://dog.ceo/api/breeds/list",
  method: "GET",
  success: function (data) {
    //let razas = data.message;
    let lista = $("#list-group");
    data.message.forEach((raza) => {
      $.ajax({
        url: `https://dog.ceo/api/breed/${raza}/images/random`,
        method: "GET",
        success: (images) => {
          lista.append(
            `<a class="list-group-item list-group-item-action list-group-item-success" href=${images.message} target="_blank"> ${raza} </a>`
          );
        },
      });
    });
  },
});
