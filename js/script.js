import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from './modules/accordion.js';
import TabMenu from "./modules/tabnav.js";
import Modal from "./modules/initModal.js";
import Tolltip from './modules/tooltip.js'
import initAnimaNumeros from "./modules/anima-numeros.js";
import AnimacaoScroll from "./modules/scroll.js";
import DropDownMenu from "./modules/dropDownMenu.js";
import MenuMobile from "./modules/menu-mobile.js";



import outsideClick from "./modules/outsideClick.js";
import initFuncionamento from "./modules/funcionamento.js";

import fetchBtc from "./modules/fetchBtc.js"; 
import fetchAnimais from "./modules/fetchAnimais.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();


const tabNav = new TabMenu('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init();

const tolltip = new Tolltip('[data-tooltip]');
tolltip.init();

const animaScroll = new AnimacaoScroll('[data-anime="scroll"]');
animaScroll.init();

const dropMenu = new DropDownMenu("[data-dropdown]");
dropMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

fetchAnimais();


outsideClick();
initFuncionamento();
fetchBtc();
initAnimaNumeros();



