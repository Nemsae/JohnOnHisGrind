let polygons = [[3, 4, 8, 5, 7], [3, 6, 5], [8, 5, 7], [5, 5, 5, 5], [5, 6, 5, 6], [5, 6, 5, 5]]

function sortPolygons (polygons) {
  let subSets = {
    'triangles': [],
    'rectangles': [],
    'squares': [],
    'allElse': []
  }

  polygons.forEach(polygon => {
    let numberOfSides = polygon.length
    if (numberOfSides < 3) {
      throw err
    } else if (numberOfSides === 4) {
      //	check if square, if rect, else push into allElse
      if (squareCheck(polygon)) {
        subSets.squares.push(polygon)
      } else if (rectCheck(polygon)) {
        subSets.rectangles.push(polygon)
      } else {
        subSets.allElse.push(polygon)
      }
    } else if (numberOfSides === 3) {
      //	it is a triangle
      subSets.triangles.push(polygon)
    } else {
      //	numberOfSides > 4, push into allElse
      subSets.allElse.push(polygon)
    }
  })

  return subSets
}

//	returns boolean
function squareCheck (arr) {
  let sum = arr.reduce((a, b) => a + b)
  console.log('sum: ', sum);
  return sum / 4 === arr[0]
}

//	returns boolean
function rectCheck (arr) {
  let dict = {}

  arr.forEach(length => {
    dict[length] ? dict[length]++ : dict[length] = 1
  })

  let keys = Object.keys(dict)
  return keys.every(key => {
    return dict[key] === 2 ? true : false
  })
}


console.log(sortPolygons(polygons))
