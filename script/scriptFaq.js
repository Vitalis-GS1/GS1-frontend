 document.querySelectorAll('.faq-toggle').forEach(button => {
          button.addEventListener('click', () => {
            const resposta = button.nextElementSibling;
            const icon = button.querySelector('.icon');
      
            resposta.classList.toggle('hidden');
      
            if (resposta.classList.contains('hidden')) {
              icon.classList.replace('fa-minus', 'fa-plus');
            } else {
              icon.classList.replace('fa-plus', 'fa-minus');
            }
          });
        });