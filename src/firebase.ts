// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD2fnCs0POJa6sF-I_6ifhWmpYrozgQzwA",
  authDomain: "entertainify-e4d16.firebaseapp.com",
  projectId: "entertainify-e4d16",
  storageBucket: "entertainify-e4d16.appspot.com",
  messagingSenderId: "1047441720653",
  appId: "1:1047441720653:web:4a2e2f1be977b09d17e304",
  signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2fnCs0POJa6sF-I_6ifhWmpYrozgQzwA`,
  signInWithPassword: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2fnCs0POJa6sF-I_6ifhWmpYrozgQzwA`,
  dbAll: "https://entertainify-e4d16-default-rtdb.europe-west1.firebasedatabase.app/all.json",
  dbMovies: "https://entertainify-e4d16-default-rtdb.europe-west1.firebasedatabase.app/all/movies.json",
  dbSeries: "https://entertainify-e4d16-default-rtdb.europe-west1.firebasedatabase.app/all/series.json",
  dbBookmarked:
    "https://entertainify-e4d16-default-rtdb.europe-west1.firebasedatabase.app/all/bookmarked.json",
  dbRecommended:
    "https://entertainify-e4d16-default-rtdb.europe-west1.firebasedatabase.app/all/recommended.json",
  dbIsTrending:
    "https://entertainify-e4d16-default-rtdb.europe-west1.firebasedatabase.app/all/isTrending.json",
};
