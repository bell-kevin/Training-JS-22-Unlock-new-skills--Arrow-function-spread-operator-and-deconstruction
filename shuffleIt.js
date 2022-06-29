function shuffleIt(array,...a){
  for (let i = 0 ; i < a.length ; i++) {
      [array[a[i][0]], array[a[i][1]]] = [array[a[i][1]], array[a[i][0]]]
    }
    return array
}
