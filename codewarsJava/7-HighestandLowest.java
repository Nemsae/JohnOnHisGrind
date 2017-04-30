public class Kata {
  public static String HighAndLow(String numbers) {
    // Code here or
    // max = numbers[0]
    // min = numbers[0]
    System.out.println(numbers);
    System.out.println(numbers.getClass().getName());
    String[] strArr = numbers.split(" ");
//     for (String str: strArr) {
//       System.out.println(str);
//     }
//     System.out.println(Arrays.toString(strArr));
    for (int i = 0; i < strArr.length; i+=2) {
//       int num = numbers.charAt(i).parseInt();
      int num = strArr.charAt(i);
      System.out.println(num);
    }
    return "throw towel";
  }
}
