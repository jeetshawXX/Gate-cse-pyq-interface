let user = null;

auth.onAuthStateChanged((u) => {
  user = u;
  const box = document.querySelector(".auth-box");
  if (!box) return;

  if (u) {
    box.innerHTML = `
      <span>${u.displayName}</span>
      <button onclick="signOutUser()">Logout</button>
    `;
  } else {
    box.innerHTML = `
      <button onclick="signInWithGoogle()">Login</button>
    `;
  }
});

window.signInWithGoogle = function () {
  if (!window.configReady) {
    alert("Firebase not ready");
    return;
  }

  auth.signInWithPopup(provider)
    .then((result) => {
      console.log("Login success:", result.user);
    })
    .catch((error) => {
      console.error(error);
      alert("Login failed");
    });
};

window.signOutUser = function () {
  auth.signOut();
};
