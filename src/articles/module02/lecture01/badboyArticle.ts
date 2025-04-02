
const grasshopperArticle = {
    title: "Bad Boy",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    7
    2 3 1 1
    4 4 1 2
    3 5 2 2
    5 1 2 1
    3 1 3 1
    1 1 1 1
    1000000000 1000000000 1000000000 50



  Output:
    1 2 2 3
    4 1 4 4
    3 1 1 5
    5 1 1 1
    1 1 2 1
    1 1 1 1
    50 1 1 1000000000


    `,
    approaches: [
      {
        name: "Solution",
        description: `We can notice that the optimal strategy is to put the yoyos in the corners of the board. One solution may be checking the best distance for all pairs of corners. But, if we think a bit more, we can notice that placing the yoyos in opposite corners the distance will always be maximum possible (the distance always being 2⋅(n−1)+2⋅(m−1)
). So, one possible answer is to always place the first yoyo in the top-left cell and the second one in the bottom-right cell. This is always optimal because, for any initial position of Anton, the distance will still be the same (2⋅(n−1)+2⋅(m−1)
), this being the largest possible distance. The distance can not get larger than that, because if we move one of the yoyos it will get closer to the other yoyo and the distance will decrease by 1
 or won't decrease, but it's impossible for it to increase.`,
        codeSnippets: {
          cpp: `#include "bits/stdc++.h"
using namespace std;

int main()
{
    int t;
    cin >> t;
    while(t--){
        int n, m, i, j;
        cin >> n >> m >> i >> j;

        cout << 1 << " " << 1 << " " << n << " " << m << "\n";
    }
}

`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        
        while (t-- > 0) {
            int n = scanner.nextInt();
            int m = scanner.nextInt();
            int i = scanner.nextInt();
            int j = scanner.nextInt();

            System.out.println(1 + " " + 1 + " " + n + " " + m);
        }
        
        scanner.close();
    }
}


`,
          python: `def main():
    t = int(input())
    for _ in range(t):
        n, m, i, j = map(int, input().split())
        print(1, 1, n, m)

`,
        },
        timeComplexity: `The time complexity of the given code is O(t) for the outer loop, where 
t is the number of test cases. Inside the loop, reading inputs and printing outputs are constant-time operations, making the overall time complexity O(t).`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  