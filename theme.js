/*в инструментах разработчика появилась
 ошибка "Select element must have an accessible name: 
 Element has no title attribute".
 Дописала <label>, не помогло. Не пойму, что он хочет.
*/

const list = document.querySelector("select"),
      container = document.querySelector(".container"),
      wrapper = document.querySelector(".wrapper"),
      gradient = document.getElementById('canvas-basic');


list.addEventListener("change", function (e) {
  console.log(e);
  switch (e.target.value) {
    case "water":
      container.style.color = "rgba(82,146,255,1)";
       wrapper.style.background = "rgba(115,255,236,0.8)";
       gradient.style.display='none';
       
      break;
    case "earth":
      container.style.color = "rgba(82,2,112,1)";
      wrapper.style.background = "rgba(140,235,0,0.8)";
      gradient.style.display='none';
    
      break;
    case "air":
      container.style.color = "rgba(62,63,166,1)";
      wrapper.style.background = "rgba(194,193,255,0.8)";
      gradient.style.display='none';
     
      break;
    case "fire":
      container.style.color = "rgba(255,255,255,1)";
      wrapper.style.background = "rgba(255,147,66,0.8)";
      gradient.style.display='none';
      break;
    default:
      gradient.style.display='block';
      container.style.color = "rgba(0, 0, 0,1)";
      wrapper.style.background = new Granim({
              element: '#canvas-basic',
              elToSetClassOn: '.wrapper',
              direction: 'diagonal',
              isPausedWhenNotInView: true,
              stateTransitionSpeed: 300,
              states : {
              "default-state": {
                  gradients: [
                      ['#8ceb00', '#9c00dc'],
                      ['#00ffdb', '#ffffff'],
                      ['#ffffff', '#8ceb00']
                  ]
              }
            }});
              break;      
          }
      });
//let granimInstance = 