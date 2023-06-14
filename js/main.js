var Heigth = document.getElementById("height");
var Length = document.getElementById("length");
var Area = document.getElementById("area");
var BrickHeight = document.getElementById("brick_height");
var BrickLength = document.getElementById("brick_length");
var TR = document.getElementById("TotalRow");
var TC = document.getElementById("TotalRowCoulm");
// var MCSCol = getElementById("MortarCoverSpaceColum");
// var MCSRow = getElementById("MortarCoverSpaceRow");
// var Mrow = getElementById("mortar_thickness_row");
// var mthicknesscolumn = getElementById("mortar_thickness_column");
function calculate() {
  var H = parseInt(Heigth.value);
  var L = parseInt(Length.value);
  var BH = parseInt(BrickHeight.value);
  var BL = parseInt(BrickLength.value);

  var Totalarea = Area.value;
  var totaRo = TR.value;
  var totaCo = TC.value;

  if (Validate(H, L, BL, BH)) {
    Totalarea = H * L;
    totaRo = H / BH;
    totaCo = L / BL;

    var table = `<tr>
  <td>${H}</td>
  <td>${L}</td>
   
  <td>${Totalarea}</td>
  
  <td>${totaRo}</td>
  <td>${totaCo}</td> 
   
 
   

  </tr>`;
    document.getElementById("tablletext").innerHTML += table;
    alertMessage(
      "Success",
      "Result has been calculated successfully.",
      "successfully!"
    );
  }
}
function Validate(H, L, BL, BH) {
  if (isNaN(H)) {
    alertMessage("Error", "Please enter User", " * Name");
  } else if (isNaN(L)) {
    alertMessage("Error", "Please enter Your Email", " * Email");
  } else if (isNaN(BL)) {
    alertMessage("Error", "Please enter Your Email", " * BL");
  } else if (isNaN(BH)) {
    alertMessage("Error", "Please enter Your Email", " * BH");
  } else {
    return H, L, BL, BH;
  }
}
function alertMessage(typeError, messageError, reasonError) {
  var type = (document.getElementById("type").innerHTML = typeError);
  var message = (document.getElementById("message").innerHTML = messageError);
  var reason = (document.getElementById("reason").innerHTML = reasonError);
}
