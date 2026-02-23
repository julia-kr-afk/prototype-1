// Reads the user's name from resume data and updates the profile sidebar
(function () {
  try {
    var data = JSON.parse(localStorage.getItem('workhard_resume_data'));
    if (!data) return;

    var first = (data.firstname || '').trim();
    var last  = (data.lastname  || '').trim();
    if (!first && !last) return;

    var fullName = [first, last].filter(Boolean).join(' ');
    var initials = [first, last]
      .filter(Boolean)
      .map(function (n) { return n.charAt(0).toUpperCase(); })
      .join('');

    var nameEl   = document.querySelector('.profile-sidebar__name');
    var avatarEl = document.querySelector('.profile-sidebar__avatar');

    if (nameEl   && fullName) nameEl.textContent   = fullName;
    if (avatarEl && initials) avatarEl.textContent = initials;
  } catch (e) {}
})();
