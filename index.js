/**
 * Name: Shin Komori
 * Date: Oct 19, 2022
 *
 * This is the JS to implement the UI for my portfolio. Provides header menu
 * that user can click on and scroll, and Dark/Light theme.
 *
 */

'use strict';

(function () {
  window.addEventListener('load', init);

  /**
   * This is the function which is executed when load event is fired.
   * Changes the default theme to dark, and sets all the necessary eventListeners.
   */
  function init() {
    changeTheme();

    setHeaderList();
    id('mode').addEventListener('click', changeTheme);
    id('add-info').addEventListener('click', addInfo);
  }

  /**
   * Sets eventListener to all elements of header list, and set where to
   * scroll depending on each element.
   */
  function setHeaderList() {
    const HEADER = ['header-home', 'header-about', 'header-edu', 'header-exp'];
    const POSITIONS = ['home', 'about-me', 'edu', 'exp'];

    for (let i = 0; i < HEADER.length; i++) {
      id(HEADER[i]).addEventListener('click', function () {
        scrollWindow(POSITIONS[i]);
      });
    }
  }

  /**
   * Scrolls to the place where elem is seen on the top of the page.
   * @param {*} elemId ID of the element where it's going to scroll.
   */
  function scrollWindow(elemId) {
    let element = id(elemId);
    let position = element.getBoundingClientRect();
    let top = position.top + window.pageYOffset;
    document.documentElement.scrollTop = top;
  }

  /**
   * Changes to Light/Dark theme when executed.
   * Also toggles background image of home section.
   */
  function changeTheme() {
    let body = qs('body');
    body.classList.toggle('dark');

    let home = id('home');
    home.classList.toggle('light-background');
    home.classList.toggle('dark-background');
  }

  /**
   * Adds p element when executed. Then, removes itself from eventListners of
   * the element so that it will be executed only once.
   */
  function addInfo() {
    let info = gen('p');
    info.textContent =
      'Contact me by email(shin1025@uw.edu), or LinkedIn in the header.';
    let parent = qs('#about-me');
    parent.appendChild(info);

    this.removeEventListener('click', addInfo);
    this.disabled = true;
  }

  /**
   * Utility function. Gets an element using id.
   * @param {*} id takes id as str.
   * @returns {HTMLElement} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Utility function. Gets an element using selector.
   * @param {*} selector CSS selecgtor of desired object.
   * @returns {HTMLElement} DOM object associated with selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Utility function. Generates an <tagName> element.
   * @param {*} tagName HTML element to be created.
   * @returns {HTMLElement} newly created DOM object of <tagName>.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
