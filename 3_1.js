function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
  ];
  
  console.log(unique(strings)); // ["C++", "C#", "C", "JavaScript"]
  