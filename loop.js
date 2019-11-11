function vowelsAndConsonants(s) {

  const vowels = "aeiou";

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (!vowels.includes(s[j])) {
      console.log(s[j]);
    }
  }

}