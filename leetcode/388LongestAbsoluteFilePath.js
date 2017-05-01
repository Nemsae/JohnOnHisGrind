// Suppose we abstract our file system by a string in the following manner:
//
// The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:
//
// dir
//     subdir1
//     subdir2
//         file.ext
// The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.
//
// The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:
//
// dir
//     subdir1
//         file1.ext
//         subsubdir1
//     subdir2
//         subsubdir2
//             file2.ext
// The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.
//
// We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).
//
// Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  let inputArr = input.split('\n');
  let globalDir = ['dir']
  let globalDepth = 0;
  let allFilePaths = {}
  console.log('inputArr: ', inputArr);

  for (let i = 1; i < inputArr.length; i++) {
    let curr = inputArr[i];
    let currArr = curr.split('\t')
    let currDepth = currArr.length - 1;
    let file = currArr.slice(-1)[0]
    let fileCheck = file.split('.').length > 1 ? true : false

    console.log('currDepth: ', currDepth, 'curr: ', curr,  'file: ', file);

    if (currDepth > globalDepth) {
      globalDir.push(file)
      globalDepth++

    } else if (currDepth === globalDepth) {
      //  pop off last dir in globalDir, then push current file into globalDir
      globalDir.splice(-1, 1)
      globalDir.push(file)
    } else if (currDepth < globalDepth) {
      //  take out last dirs
      globalDir.splice(-2, 2)
      globalDir.push(file)
    }

    //  At the end, check if the file has an .ext, if so record it.
    if (fileCheck) {
      // allFilePaths.push(globalDir.join('/'))
      let path = globalDir.join('/')
      allFilePaths[path] = path.length
    }
  }

  console.log('allFilePaths: ', allFilePaths);
  
  let keys = Object.keys(allFilePaths)
  let max = 0
  keys.forEach(key => {
    if (allFilePaths[key] > max) max = allFilePaths[key]
  })

  return max
};

console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"))
