const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  return tutorials.map(tutorial => {
      return tutorial.split(' ').map(word => {
          
          if (word.toLowerCase() === 'oo') return 'OO';
          if (word.toLowerCase() === 'api') return 'API';
          if (word.toLowerCase() === 'nan') return 'NaN';
          if (word.toLowerCase() === 'jsonp') return 'JSONP';
          
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ')
        .replace(/Stop([a-z])/g, (_, letter) => 'Stop' + letter.toUpperCase())
        .replace(/Prevent([a-z])/g, (_, letter) => 'Prevent' + letter.toUpperCase()) 
        .replace(/\bJsonp\b/g, 'JSONP'); 
  });
}