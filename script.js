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

      butLeft.onclick = () => {
    
        indexCurrent = indexCurrent - 1;

        scroll(indexCurrent);

        butLeft.disabled = indexCurrent <= indexStart;
        butRight.disabled = !(indexCurrent < indexEnd);

      };

                        // bottom

      const listBot = document.getElementById("listBot");
      const butBotLeft = document.getElementById("butBotLeft");
      const butBotRight = document.getElementById("butBotRight");
      const backgroundBotRight = document.getElementById("backbotright");

      const EL_WIDTH_BOT = listBot.children[0].getBoundingClientRect().width;
      const EL_ON_PAGE_BOT = 3;
      const indexStart_Bot = 0;
      const indexEnd_Bot = listBot.children.length - EL_ON_PAGE_BOT;
      let indexCurrent_Bot = 0;


      function scrollBot() {
        listBot.style.transform = `translateX(${(EL_WIDTH_BOT+30) * -indexCurrent_Bot}px)`;
      }

      butBotRight.onclick = () => {
        indexCurrent_Bot = indexCurrent_Bot + 1;
        scrollBot(indexCurrent_Bot);

        if (indexCurrent_Bot > indexStart_Bot) {
          butBotLeft.disabled = false;
        }

        if (indexCurrent_Bot >= indexEnd_Bot) {
          butBotRight.disabled = true;
          backgroundBotRight.dataset.disabled = true;
        }
      };

      butBotLeft.onclick = () => {
    
        indexCurrent_Bot = indexCurrent_Bot - 1;

        scrollBot(indexCurrent_Bot);

        butBotLeft.disabled = indexCurrent_Bot <= indexStart_Bot;
        butBotRight.disabled = !(indexCurrent_Bot < indexEnd_Bot);
        backgroundBotRight.dataset.disabled = !(indexCurrent_Bot < indexEnd_Bot);

      };
                            // tabs

      let listtabs = document.querySelector("#tabs");
      let links = document.querySelectorAll("button[role='tab']");
      let tabs = document.querySelectorAll("div[role='tabpanel']");

      listtabs.onclick = (event) => {
        const makeHidden = (tab) => {
          tab.hidden = true;
        };

        tabs.forEach(makeHidden);

        links.forEach((link) => {
          link.setAttribute("aria-selected", false);
          link.classList.remove("btnactive");
          
        });

        const clickIndex = event.target.dataset.value;
        event.target.setAttribute("aria-selected", true);
        event.target.classList.add("btnactive");
        tabs[clickIndex].hidden = false;
        
      };