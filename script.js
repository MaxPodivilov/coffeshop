      const list = document.getElementById("list");
      const butLeft = document.getElementById("left");
      const butRight = document.getElementById("right");

      const EL_WIDTH = list.children[0].getBoundingClientRect().width;
      const EL_ON_PAGE = 4;
      const indexStart = 0;
      const indexEnd = list.children.length / 2 - 2;
      let indexCurrent = 0;


      function scroll() {
        list.style.transform = `translateX(${EL_WIDTH * -indexCurrent}px)`;
      }

      butRight.onclick = () => {
        indexCurrent = indexCurrent + 1;
        scroll(indexCurrent);

        if (indexCurrent > indexStart) {
          butLeft.disabled = false;
        }

        if (indexCurrent >= indexEnd) {
          butRight.disabled = true;
        }
      };

      butLeft.addEventListener("click", function () {
    
        indexCurrent = indexCurrent - 1;

        scroll(indexCurrent);

        butLeft.disabled = indexCurrent <= indexStart;
        butRight.disabled = !(indexCurrent < indexEnd);

        console.log(indexEnd);
        console.log(list.children.length);
        console.log(EL_ON_PAGE);
      });