let doc;

function changeVariant(el, id, var_id){
  doc = null;
  console.log('change variant');
  // highlight selected image and make others opaque
  let images = document.getElementsByClassName('crossed-out');
  for(let x = 0; x < images.length; x++){
    let img = images[x];
    let id = 'img-'+var_id;
    if(img.id == 'img-'+var_id.toString()){
      document.getElementById(id).style['opacity'] = 1;
    }else{
      document.getElementById(img.id).style.opacity = 0.6;
    }
  }

  //trigger a click event on the form
  let selectedValue = el.value;
  console.log('selected val', selectedValue);
  var elements = document.getElementById('product-form-'+id).elements;
  for(var i = 0 ; i < elements.length ; i++){
    var item = elements.item(i);
    if(item.value === selectedValue){
      document.getElementById(item.id).click();
    }
  }
}

function selectSize(ev, a){
  document.getElementById(ev.target.id).value = ev.target.value;
  document.getElementById(a.id).checked = true;
}