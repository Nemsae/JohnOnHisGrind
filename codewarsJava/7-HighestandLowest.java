public class Kata {
  public static String HighAndLow(String numbers) {
    String[] strArr = numbers.split(" ");
    int max = Integer.parseInt(strArr[0]);
    int min = Integer.parseInt(strArr[0]);

    System.out.println("numbers: " + numbers);
    System.out.println("max: " + max);
    System.out.println("min: " + min);

//     for (String str: strArr) {
//       System.out.println(str);
//     }

    for (int i = 0; i < strArr.length; i++) {
/*       String num = strArr[i]; */
      int num = Integer.parseInt(strArr[i]);

      if (num > max) {
        max = num;
      }
      
      if (num < min) {
        min = num;
      }

      System.out.println("num: " + num);
    }

    String answer = "";
    answer += max;
    answer += " ";
    answer += min;

    return answer;
  }
}
