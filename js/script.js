import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from './modules/accordion.js';
import TabMenu from "./modules/tabnav.js";
import Modal from "./modules/initModal.js";

import initAnimacaoScroll from "./modules/scroll.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from './modules/dropDownMenu.js'
import outsideClick from "./modules/outsideClick.js";
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetchAnimais.js"; 
import fetchBtc from "./modules/fetchBtc.js"; 
import initAnimaNumeros from "./modules/anima-numeros.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();


const tabNav = new TabMenu('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init();


initAnimacaoScroll();
initTooltip();
initDropDownMenu();
initMenuMobile();
outsideClick();
initFuncionamento();
fetchAnimais();
fetchBtc();
initAnimaNumeros();



