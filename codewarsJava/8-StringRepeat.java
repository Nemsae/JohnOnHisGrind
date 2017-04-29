// Write a function called repeatStr which repeats the given string string exactly n times.
//
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

public class Solution {
    public static String repeatStr(final int repeat, final String string) {
        String ans = "";

        for (int i = 0; i < repeat; i++) {
          ans += string;
        }

        return ans;
    }
}


\Users\Jcompsta\temp\redux\sleepy\codewarsJava\StringRepeat
/Users/Jcompsta/temp/redux/sleepy/codewarsJava/StringRepeat.class
