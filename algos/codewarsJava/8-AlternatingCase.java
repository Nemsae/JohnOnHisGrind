public class StringUtils {

  public static String toAlternativeString(String string) {
    // your code here!
    char[] chars = string.toCharArray();
    String answer = "";

    for (int i = 0; i < chars.length; i++) {
      char c = chars[i];

      if (Character.isUpperCase(c)) {
        answer += Character.toLowerCase(c);
      } else {
        answer += Character.toUpperCase(c);
      }
    }

    return answer;
  }
}
