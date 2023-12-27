function estPalindrome(mot) {
    // Convertir le mot en minuscules pour une comparaison insensible à la casse
    const motEnMinuscules = mot.toLowerCase();
    
    // Inverser le mot
    const motInverse = motEnMinuscules.split('').reverse().join('');
    
    // Vérifier si le mot original est égal à sa version inversée
    return motEnMinuscules === motInverse;
  }
  
  // Exemples d'utilisation
  console.log(estPalindrome("gag"));      // Devrait afficher true
  console.log(estPalindrome("kayak"));    // Devrait afficher true
  console.log(estPalindrome("php"));      // Devrait afficher false
  console.log(estPalindrome("radar"));    // Devrait afficher true
  console.log(estPalindrome("OpenAI"));   // Devrait afficher false
  //Cette fonction, estPalindrome, prend un mot en paramètre, le convertit en minuscules pour effectuer une comparaison insensible à la casse, inverse le mot, puis vérifie si le mot original est égal à sa version inversée. Si c'est le cas, la fonction retourne true, indiquant que le mot est un palindrome, sinon elle retourne false

  function estPalindrome(mot) {
    // Convertir le mot en minuscules pour une comparaison insensible à la casse
    const motEnMinuscules = mot.toLowerCase();
  
    // Fonction récursive pour comparer les caractères aux extrémités du mot
    function comparerExtremites(debut, fin) {
      // Condition d'arrêt : un mot vide ou un mot d'un seul caractère est un palindrome
      if (debut >= fin) {
        return true;
      }
  
      // Comparer les caractères aux extrémités et appeler récursivement pour le reste du mot
      if (motEnMinuscules[debut] === motEnMinuscules[fin]) {
        return comparerExtremites(debut + 1, fin - 1);
      } else {
        return false;
      }
    }
  
    // Appeler la fonction récursive avec les indices de début et de fin
    return comparerExtremites(0, motEnMinuscules.length - 1);
  }
  
  // Exemples d'utilisation
  console.log(estPalindrome("gag"));      // Devrait afficher true
  console.log(estPalindrome("kayak"));    // Devrait afficher true
  console.log(estPalindrome("php"));      // Devrait afficher false
  console.log(estPalindrome("radar"));    // Devrait afficher true
  console.log(estPalindrome(""));          // Devrait afficher true (mot vide)
  console.log(estPalindrome("a"));         // Devrait afficher true (mot d'un seul caractère)
  console.log(estPalindrome("OpenAI"));   // Devrait afficher false
  //Cette fonction utilise une approche récursive pour comparer les caractères aux extrémités du mot, et elle respecte la condition d'arrêt pour un mot vide ou un mot d'un seul caractère
  