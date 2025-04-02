
const grasshopperArticle = {
    title: "Everyone Loves to Sleep",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
   3
   1 6 13
   8 0
   3 6 0
   12 30
   14 45
   6 0
   2 23 35
   20 15
   10 30



  Output:
    1 47
    0 0
    10 55


    `,
    approaches: [
      {
        name: "Solution",
        description: `To begin with, let's learn how to determine how much time must pass before the i
 alarm to trigger. If the alarm time is later than the current one, then obviously 60∗(hi−H)+mi−M
 minutes should pass. Otherwise, this value will be negative and then it should pass 24∗60+60∗(hi−H)+mi−M
 since a full day must pass, not including the time from the alarm to the current time. We just need to find the minimum number of minutes among all the alarm clocks.

Due to small constrains, the problem can also be solved by stimulating the sleep process: increase the answer by 1
 and check whether any alarm will work after this time.`,
        codeSnippets: {
          cpp: `#include <bits/stdc++.h>
using namespace std;

void solve() {
    int n, h, m;
    cin >> n >> h >> m;
    int current = h * 60 + m, ans = 1440;
    
    while(n--) {
        cin >> h >> m;
        int t = (h * 60 + m - current + 1440) % 1440;
        ans = min(ans, t);
    }
    cout << ans / 60 << " " << ans % 60;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int t;
    cin >> t;
    while(t--) {
        solve();
        cout << "\n";
    }
}

`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt(); // Number of test cases
        
        while (t-- > 0) {
            solve(scanner);
            System.out.println();
        }
        
        scanner.close();
    }

    private static void solve(Scanner scanner) {
        int n = scanner.nextInt();
        int h = scanner.nextInt();
        int m = scanner.nextInt();
        
        int current = h * 60 + m;
        int ans = 1440; // 24 * 60
        
        for (int i = 0; i < n; i++) {
            h = scanner.nextInt();
            m = scanner.nextInt();
            int t = (h * 60 + m - current + 1440) % 1440; // Time difference
            ans = Math.min(ans, t);
        }
        
        System.out.println(ans / 60 + " " + ans % 60);
    }
}

`,
          python: `def solve():
    n, h, m = map(int, input().split())
    current = h * 60 + m
    ans = 1440  # 24 * 60
    
    for _ in range(n):
        h, m = map(int, input().split())
        t = (h * 60 + m - current + 1440) % 1440  # Time difference
        ans = min(ans, t)
    
    print(ans // 60, ans % 60)

def main():
    t = int(input())  # Number of test cases
    for _ in range(t):
        solve()
`,
        },
        timeComplexity: `The time complexity of the provided code is O(n), where n is the number of alarm times. This is because we iterate through each alarm time exactly once to calculate the minimum time difference. The overall complexity for multiple test cases is O(t * n), where t is the number of test cases.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  