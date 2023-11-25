document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion-link').forEach(function (tabsbtn) {
        tabsbtn.addEventListener('click', function (e) {
          const path = e.currentTarget.dataset.path;
    
          document.querySelectorAll('.accordion-link').forEach(function (link) {
            link.classList.remove('accordion-link-active')
          });
          e.currentTarget.classList.add('accordion-link-active');
          document.querySelectorAll('.tab').forEach(function (tabcontent) {
            tabcontent.classList.remove('tab-active')
          });
          document.querySelector(`[data-painters-target="${path}"]`).classList.add('tab-active');
          // document.querySelector(`[data-target="${path}"]`).scrollIntoView({
          //   behavior: 'smooth',
          //   block: 'start',
          //   speed: 600
          // });
        });
      });
});