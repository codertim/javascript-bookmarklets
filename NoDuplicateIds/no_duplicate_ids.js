

javascript:
var idElements = document.querySelectorAll("[id]");
var elIdNames = [];
var duplicates = [];
for (var i=0; i < idElements.length; i++) { if (elIdNames.includes(idElements[i].id)) { duplicates.push(idElements[i].id); } else { elIdNames.push(idElements[i].id); } }
if (duplicates && duplicates.length >= 1) { var duplicatesStr = duplicates.join(","); alert("Duplicates IDs: " + duplicates); }


