
const grasshopperArticle = {
    title: "Replacing Elements",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    3
    5 3
    2 3 2 5 4
    3 4
    2 4 4
    5 4
    2 1 5 3 6


  Output:
    NO
    YES
    YES

    `,
    approaches: [
      {
        name: "Solution",
        description: `Let's note that since all ai
 are positive, any Ai + Aj > max ( Ai , Aj )
. It means that we can't make the first and second minimums lower than they already are: suppose the first and second minimums are mn1
 and mn2
, if we choose any other element to replace, we can't make it less than mn1+mn2
 and if we choose to replace mn1
 or mn2
 we will only make them bigger.

As a result, it means that we can choose for each element either not to change it or make it equal to mn1+mn2
. So, to be able to make all elements ≤ d
 we need just check that either mn1 + mn2 ≤ d
 or maximum Ai ≤d
.

We can do it, for example, by sorting our array a
 in increasing order and checking that either A1 + A2 ≤ d
 or An ≤ d
.`,
        codeSnippets: {
          cpp: `#include <bits/stdc++.h>

using namespace std;

int main() {
  int tc;
  cin >> tc;
  while (tc--) {
    int n, d;
    cin >> n >> d;
    vector<int> a(n);
    for (int& x : a) cin >> x;
    sort(a.begin(), a.end());
    cout << (a.back() <= d || a[0] + a[1] <= d ? "YES" : "NO") << endl;
  }
}

`,
          java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();
        while (tc-- > 0) {
            int n = sc.nextInt(), d = sc.nextInt();
            int[] a = new int[n];
            for (int i = 0; i < n; i++) a[i] = sc.nextInt();
            Arrays.sort(a);
            System.out.println((a[n - 1] <= d || a[0] + a[1] <= d) ? "YES" : "NO");
        }
        sc.close();
    }
}

`,
          python: `t = int(input())
for _ in range(t):
    n, d = map(int, input().split())
    a = list(map(int, input().split()))
    a.sort()
    print("YES" if a[-1] <= d or a[0] + a[1] <= d else "NO")

`,
        },
        timeComplexity: `Time Complexity Explanation:
Sorting takes O(n log n), and checking conditions is O(1).

Overall, the worst-case time complexity is O(n log n) per test case..
.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  