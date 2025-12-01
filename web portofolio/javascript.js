document.addEventListener("DOMContentLoaded", () => {

  const menuItems = document.querySelectorAll('.menu-item');
  const tabs = document.querySelectorAll('.content-box');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {

      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      tabs.forEach(tab => tab.classList.add('hidden'));

      const selected = item.dataset.tab;
      document.getElementById(selected).classList.remove('hidden');

    });
  });

});
