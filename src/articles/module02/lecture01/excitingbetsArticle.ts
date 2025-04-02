
const grasshopperArticle = {
    title: "Exciting Bets",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    4
    8 5
    1 2
    4 4
    3 9



  Output:
    3 1
    1 0
    0 0
    6 3


    `,
    approaches: [
      {
        name: "Solution",
        description: `If a=b
, the fans can get an infinite amount of excitement, and we can achieve this by applying the first operation infinite times.

Otherwise, the maximum excitement the fans can get is g=|a−b|
 and the minimum number of moves required to achieve it is min(amodg,g−amodg)

.`,
        codeSnippets: {
          cpp: `
#include <bits/stdc++.h>
using namespace std;

int main()
{

    int t;
    cin >> t;
    while(t--)
    {
        long long a,b;
        cin >> a >> b;
        if(a==b)
            cout << 0 << " " << 0 << '\n';
        else
        {
            long long g = abs(a-b);
            long long m = min(a%g,g-a%g);
            cout << g << " " << m << '\n';
        }
    }
}

`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        
        while (t-- > 0) {
            long a = scanner.nextLong();
            long b = scanner.nextLong();
            
            if (a == b) {
                System.out.println(0 + " " + 0);
            } else {
                long g = Math.abs(a - b);
                long m = Math.min(a % g, g - a % g);
                System.out.println(g + " " + m);
            }
        }
        
        scanner.close();
    }
}


`,
          python: `
          def main():
    t = int(input())
    for _ in range(t):
        a, b = map(int, input().split())
        
        if a == b:
            print(0, 0)
        else:
            g = abs(a - b)
            m = min(a % g, g - a % g)
            print(g, m)
`,
        },
        timeComplexity: `The time complexity of the provided code is O(t), where t is the number of test cases.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  