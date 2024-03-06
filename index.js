(()=>{
  //get elements from single pallet
  let palettes = [...document.querySelectorAll('.palette')];

  //define geral object container
  const colors = {};

  //create a const to avoid map printed
  const x = palettes.map((pallete) =>{
    //select tone
    const tones = [...pallete.querySelectorAll('.ng-star-inserted')];
    
    //create code name
    let code = null;
    
    //list for each color setup
    const list = {};
    for (var i = 0; i < tones.length; i++) {
      const item = tones[i];
      
      //get name replacing space between words
      let label = item.querySelector('.label').textContent.replaceAll(/\s+([a-zA-Z]\w+)/gi,"$1");

      //hex value
      const value = item.querySelector('.value').textContent;

      //first element to get name
      if (i === 0) {

        //avoid black and white pallete
        let matchName = label.match(/(.*?)\s+(\d+)/i);
        if (!matchName) {
          break;
        }
        label = matchName[2];
        code = matchName[1]
      }

      //get rgb value
      let color = item.style.cssText.replaceAll(/[^0-9|,]/gi,"");
      list[label] = {
        hex: value,
        rgb: color
      }
    }

    if (code) {
      if (!(code in colors)) {
        colors[code] = list
      }
    }
  });

  return colors;
})()
