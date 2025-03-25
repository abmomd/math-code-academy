
const grasshopperArticle = {
    title: "Gregor and Cryptography",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    2
    17
    5

  Output:
    3 5
    2  4

    `,
    approaches: [
      {
        name: "Solution",
        description: `Since P≥5
 and is also a prime number, we know that P − 1
 is an even composite number. A even composite number is guaranteed to have at least 2 unique divisors greater than 1. Let two of these divisors be a
 and b
. It is guaranteed that P mod a =P mod b = 1
, and thus this selection is valid.

For example, we can simply pick a = 2
 and b = P − 1
, and we will get a correct solution.`,
        codeSnippets: {
          cpp: `#include <iostream>
using namespace std;

void solve() {
    int P;
    cin >> P;
    cout << 2 << " " << P - 1 << endl;
}

int main() {
    int t;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}

`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int P = sc.nextInt();
            System.out.println(2 + " " + (P - 1));
        }
        sc.close();
    }
}


`,
          python: `def solve():
    P = int(input())
    print(2, P - 1)

T = int(input())
for _ in range(T):
    solve()

`,
        },
        timeComplexity: `Time Complexity Explanation:
Each test case runs in O(1) , leading to an overall complexity of O(t).
.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  