public class Kata {
  public static String HighAndLow(String numbers) {
    String[] strArr = numbers.split(" ");
    int max = Integer.parseInt(strArr[0]);
    int min = Integer.parseInt(strArr[0]);

    for (int i = 0; i < strArr.length; i++) {
      int num = Integer.parseInt(strArr[i]);

      if (num > max) {
        max = num;
      }

      if (num < min) {
        min = num;
      }
    }

    return String.format("%d %d", max, min);
  }
}
