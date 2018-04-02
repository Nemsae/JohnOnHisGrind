import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        // return public int[] : we are returning an array of two integers, representing the indices of the answer
        // param1: array of integer called "nums"
        // param2: integer called "target"
        // Iterate through list, for each value check if it is lower than target value, if not skip, if it is subtract from target and do a .get(target - value), make sure it isn't the same index, than return the pair
        int[] answerList = new int[2];
        int currentInd = 0;

        List<Integer> numsAsList = convertIntArrayToList(nums);

        findPairLoop: for (Integer num : nums) {
            int targetPair = target - num;
            int targetPairInd = numsAsList.indexOf(targetPair);
            if ((targetPairInd != currentInd) && targetPairInd > -1) {
                answerList[0] = (currentInd);
                answerList[1] = (targetPairInd);
                break findPairLoop;
            }
            currentInd++;
        }

        return answerList;
    }


    private static List<Integer> convertIntArrayToList(int[] input) {

        List<Integer> list = new ArrayList<>();
        for (int i : input) {
            list.add(i);
        }
        return list;

    }

    public static void main(String[] args) {
      int[] test1Array = {230,863,916,585,981,404,316,785,88,12,70,435,384,778,887,755,740,337,86,92,325,422,815,650,920,125,277,336,221,847,168,23,677,61,400,136,874,363,394,199,863,997,794,587,124,321,212,957,764,173,314,422,927,783,930,282,306,506,44,926,691,568,68,730,933,737,531,180,414,751,28,546,60,371,493,370,527,387,43,541,13,457,328,227,652,365,430,803,59,858,538,427,583,368,375,173,809,896,370,789};
      int test1Target = 542;
      TwoSum.twoSum(test1Array, test1Target);
    }
}
