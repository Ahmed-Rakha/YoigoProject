const mediaQuery = window.matchMedia('(max-width: 667px)');
const [changeToTienda, changeToContact] = document.querySelectorAll(
  '.localizar-contactar a'
);
//  redesign footer list with media query
const [loMasBuscado, moviles, ayuda, enlacesDeInteres] =
  document.querySelectorAll('.disabled-header');
const listElements = document.querySelectorAll(
  '.footer-sub-container .grid-list-footer > p:not(.disabled-header)'
);
const listElementsArray = Array.from(listElements);
const firstList = listElementsArray.slice(0, 6);
const secondList = listElementsArray.slice(6, 12);
const thirdList = listElementsArray.slice(12, 18);
const fourthList = listElementsArray.slice(18);

if (mediaQuery.matches) {
  window.document.querySelector('.nav-sub2-main-container ul').style.display =
    'none';
  changeToTienda.textContent = 'Tienda';
  changeToContact.textContent = 'Contacto';
  listElements.forEach((ele) => (ele.style.display = 'none'));
  loMasBuscado.insertAdjacentHTML(
    'beforeend',
    '<p>Ofertas Internet Móvil</p><p>Mejor Oferta Fibra</p><p>Fibra 1Gb + Móvil Infinito</p><p>Fibra 1Gb</p><p>Agile TV</p><p>Descuentos y Ofertas</p>'
  );
  // secondList.forEach((ele) => moviles.insertAdjacentHTML('beforeend', ele));
  moviles.insertAdjacentHTML(
    'beforeend',
    '<p>iPhone 15</p><p>Apple</p><p>Samsung</p><p>Oppo</p><p>Xiaomi</p><p>Honor</p>'
  );
  ayuda.insertAdjacentHTML(
    'beforeend',
    '<p>Roaming</p><p>Seguimiento de pedido</p><p>No me funciona internet</p><p>Condiciones renuevo</p><p>Test de velocidad</p><p>Opiniones</p>'
  );
  enlacesDeInteres.insertAdjacentHTML(
    'beforeend',
    '<p>Acceso Mi Yoigo</p><p>Tiendas Yoigo</p><p>Recarga de saldo</p><p>Cobertura de fibra</p><p>Cobertura 5G</p><p>Contacto</p>'
  );
  window.addEventListener('scroll', function () {
    if (this.scrollY >= 90) {
      this.document.querySelector('.contact-box').style.cssText = `display:none;
        `;
    } else {
      this.document.querySelector('.contact-box').style.display = 'block';
    }
  });
} else {
  window.addEventListener('scroll', function () {
    if (this.scrollY >= 28) {
      this.document.querySelector(
        '.nav-sub2-main-container ul'
      ).style.cssText = `display:flex;transition: all 3s;
      `;
    } else {
      this.document.querySelector('.nav-sub2-main-container ul').style.display =
        'none';
    }
  });

  window.addEventListener('scroll', function () {
    if (this.scrollY >= 140) {
      this.document.querySelector('.contact-box').style.cssText = `display:none;
      `;
    } else {
      this.document.querySelector('.contact-box').style.display = 'block';
    }
  });
}

// switch between btns
window.document.querySelectorAll('.select-tarif-btns button').forEach((ele) => {
  ele.addEventListener('click', () => {
    window.document
      .querySelectorAll('.select-tarif-btns button')
      .forEach((ele) => ele.classList.remove('btn-selected'));

    window.document
      .querySelectorAll('.select-tarif-btns button svg')
      .forEach((ele) => ele.classList.remove('btn-svg-selected'));

    ele.classList.add('btn-selected');
    const [svg] = ele.children;
    svg.classList.add('btn-svg-selected');
  });
});

//  Determine the behaviour of the input phone number

const inputBehaviour = document.querySelectorAll('.input-behaviour');
for (const input of inputBehaviour) {
  input.addEventListener('keydown', (e) => {
    if ((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode === 8) return true;
    else e.preventDefault();
  });
}
const conNetflixBtn = document.querySelector('#con-netflix + label');
const soloFibra = document.querySelector('#solo-fibra + label');
const [speedBtn, principalLineBtn, ...incrementDecrementBtns] =
  document.querySelectorAll('.select-type-of-tarif button');
const [speed_500MB, speed_1GB] = speedBtn.children;
const [capacity_25GB, capacity_45GB, capacity_infinityGB] =
  principalLineBtn.children;
const productPrice = document.querySelector('.custom-desglose .product-price');

capacity_25GB.addEventListener('click', () => {
  productPrice.textContent = '48';
});

capacity_45GB.addEventListener('click', () => {
  productPrice.textContent = '52';
});

capacity_infinityGB.addEventListener('click', () => {
  productPrice.textContent = '62';
});

const principalLineBtnArray = Array.from(principalLineBtn.children);
const speedBtnArray = Array.from(speedBtn.children);
const desgloseContainer = document.querySelector('.custom-desglose-details');
const totalPrice = document.querySelector('.add-more-info');
const offerPeriod = document.querySelector('.offer-period');

const handleSpeedAndPrincipalLineActiveClass = function (btn, array) {
  btn.addEventListener('click', (event) => {
    array.forEach((btn) => {
      btn.classList.remove('active-speed');
    });
    btn.classList.add('active-speed');

    if (speed_1GB.classList.contains('active-speed')) {
      offerPeriod.textContent = 'Durante 3 meses';
      offerPeriod.style.cssText = 'font-size:11px';

      switch (event.target.textContent) {
        case '25 GB':
          totalPrice.textContent = `Luego 63,00 €/mes`;
          break;
        case '45 GB':
          totalPrice.textContent = `Luego 67,00 €/mes`;
          break;
        case '∞ GB':
          totalPrice.textContent = `Luego 77,00 €/mes`;
          break;
      }
      desgloseContainer.style.display = 'block';
    } else desgloseContainer.style.display = 'none';
  });
};

principalLineBtnArray.forEach((btn) => {
  handleSpeedAndPrincipalLineActiveClass(btn, principalLineBtnArray);
});

speedBtnArray.forEach((btn) => {
  handleSpeedAndPrincipalLineActiveClass(btn, speedBtnArray);
});

const arrow = document.querySelector('.ep--arrow-down img');
const box = document.querySelector('.selecciona-las-lineas');
arrow.onclick = function () {
  const arrowDownUrl = './assets/images/angle-down.svg';
  const arrowUpUrl = './assets/images/angle-up.svg';
  if (arrow.classList.contains('arrow-down')) {
    arrow.classList.remove('arrow-down');
    arrow.classList.add('arrow-up');
    arrow.setAttribute('src', `${arrowUpUrl}`);
    box.style.cssText = `
    height:14.9rem; box-shadow: 0px 3px 2px 2px lightgray; border:none; transition: height .8s;
    `;
  } else {
    arrow.classList.remove('arrow-up');
    arrow.classList.add('arrow-down');
    arrow.setAttribute('src', `${arrowDownUrl}`);
    box.style.cssText = `
    height:3.4rem; box-shadow: 0px 0px 0px 0px none; border:solid lightgrey; transition: height .8s;
    `;
  }
};
// footer dropdown list

const arrowFooter = document.querySelectorAll('.disabled-header img');
const disabledHeader = document.querySelectorAll('.disabled-header');
const arrowDownUrl = './assets/images/angle-down.svg';
const arrowUpUrl = './assets/images/angle-up.svg';

disabledHeader.forEach((ele) => {
  // console.log(ele);
  const btn = ele.querySelector('.disabled-header span img');
  btn.addEventListener('click', function () {
    if (btn.classList.contains('arrow-down')) {
      btn.classList.remove('arrow-down');
      btn.classList.add('arrow-up');
      btn.setAttribute('src', `${arrowUpUrl}`);
      ele.style.cssText = 'height:30vh; transition: height 0.7s';
    } else {
      btn.classList.remove('arrow-up');
      btn.classList.add('arrow-down');
      btn.setAttribute('src', `${arrowDownUrl}`);
      ele.style.cssText = 'height:4.4vh; transition: height 0.7s';
    }
  });
});

// arrowFooter.forEach((arrow) => {
//   arrow.addEventListener('click', function (event) {
//     console.log(event);
//     if (arrow.classList.contains('arrow-down')) {
//       arrow.classList.remove('arrow-down');
//       arrow.classList.add('arrow-up');
//       arrow.setAttribute('src', `${arrowUpUrl}`);
//       ele.style.cssText = 'height:30vh; transition: height 0.7s';
//     } else {
//       arrow.classList.remove('arrow-up');
//       arrow.classList.add('arrow-down');
//       arrow.setAttribute('src', `${arrowDownUrl}`);
//       ele.style.cssText = 'height:4.4vh; transition: height 0.7s';
//     }
//   });
// });
