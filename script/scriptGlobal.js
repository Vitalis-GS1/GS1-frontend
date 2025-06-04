 const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const hamburguer = document.getElementById("hamburguer");
  const menu = document.getElementById("menuMobile");

  hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  window.watsonAssistantChatOptions = {
    integrationID: "3d72eb26-aae0-4968-a7f1-d6ed8a771253",
    region: "au-syd",
    serviceInstanceID: "06cae0f0-b964-4f1f-9c8b-78a25030e1c4",
    onLoad: async (instance) => {
       await instance.on({
        type: 'pre:send',
        handler: function(event) {
            event.data.context.skills['main skill'].user_defined.channel= 'webchat';
        }
      });
      await instance.render();
        }
    };

  setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  }, 0);