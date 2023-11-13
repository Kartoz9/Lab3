const session = [
    { discipline: "Математика", score: 90, passed: true },
    { discipline: "Фізика", score: 75, passed: true },
    { discipline: "Історія", score: 50, passed: false },
  ];
  
  // 1) 
  function displayDisciplines(session) {
    const passedDisciplines = session.filter(discipline => discipline.passed);
    const failedDisciplines = session.filter(discipline => !discipline.passed);
    const allDisciplines = passedDisciplines.concat(failedDisciplines);
    return allDisciplines;
  }
  
  // 2) 
  function addDiscipline(session, disciplineName, score) {
    const existingDiscipline = session.find(discipline => discipline.discipline === disciplineName);
  
    if (existingDiscipline) {
      existingDiscipline.score += score;
      if (existingDiscipline.score >= 60) {
        existingDiscipline.passed = true;
      }
    } else {
      const newDiscipline = { discipline: disciplineName, score, passed: score >= 60 };
      session.push(newDiscipline);
    }
  }
  
  // 3) 
  function averageScore(session) {
    const totalScores = session.reduce((sum, discipline) => sum + discipline.score, 0);
    return totalScores / session.length;
  }
  
  // 4) 
  function countFailedDisciplines(session) {
    const failedDisciplines = session.filter(discipline => !discipline.passed);
    return failedDisciplines.length;
  }
  
  // 5) 
  function disciplineWithHighestScore(session) {
    return session.reduce((maxDiscipline, discipline) => {
      return discipline.score > maxDiscipline.score ? discipline : maxDiscipline;
    }, session[0]);
  }
  
  // 6) 
  function disciplinesPassedWithScore(session, requiredScore) {
    const passedDisciplines = session.filter(discipline => discipline.score >= requiredScore);
    return passedDisciplines;
  }
  