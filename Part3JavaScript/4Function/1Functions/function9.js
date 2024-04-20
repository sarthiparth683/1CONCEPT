// Local Scope vs Global Scope  
function kishorilal_Family()
{
  var kishori_son = "chunnu";
  console.log(kishori_son);
  orphan_child = "laalu";
}

function badrilal_Family()
{
  var badrilal_son = "hari om";
}

function rajeshram_Family()
{
  var rajeshram_son = "munnu";
}

var orphan_child = "billu";
kishorilal_Family();

console.log(orphan_child);