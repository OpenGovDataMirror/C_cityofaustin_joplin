// import '../css/admin.scss';

/* π¨
  ONLY USED FOR JOPLIN_UI TRANSTION PERIOD
  - revert to simply `import '../joplin_UI/admin.scss'` βοΈ after Joplin_UI is updated to prod
π */
if (window.IS_PRODUCTION !== "False") {
  require('../css/admin.scss');
} else if (localStorage.joplinUI !== "on") {
  require('../css/admin.scss');
} else {
  require('../joplin_UI/admin.scss');
}
// π¨END

$(function() {
  // HACK: I can't find a way to configure this to be closed via python
  document
    .querySelectorAll('#extra_content-prependmenu:not(.stream-menu-closed)')
    .forEach(elem => {
      elem.click();
    });
  var messages = $('.messages');
  messages.fadeOut(10000);
});
