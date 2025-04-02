
const grasshopperArticle = {
    title: "Soft Drinking",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    3 4 5 10 8 100 3 1
    5 100 10 1 19 90 4 3
    10 1000 1000 25 23 1 50 1


  Output:
    2
    3
    0


    `,
    approaches: [
      {
        name: "Solution",
        description: `
Soda will be enough for gas = (K * L) / (N * l) toasts.

Limes will last for laim = (C * D) / N toasts.

Salt is enough for sol = P / (p * N) toasts.

Total result: res = min(gas, laim, sol).`,
       
codeSnippets: {
          cpp: `#include <iostream>

using namespace std;

int main()
{
    int n, k, l, c, d, p, nl, np;
    cin >> n >> k >> l >> c >> d >> p >> nl >> np;
    cout << min(min(k * l / nl, c * d), p / np) / n << endl;
    return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
        int k = scanner.nextInt();
        int l = scanner.nextInt();
        int c = scanner.nextInt();
        int d = scanner.nextInt();
        int p = scanner.nextInt();
        int nl = scanner.nextInt();
        int np = scanner.nextInt();

        int totalDrinks = k * l / nl;
        int totalLimes = c * d;
        int totalSalt = p / np;

        int result = Math.min(Math.min(totalDrinks, totalLimes), totalSalt) / n;
        
        System.out.println(result);
        
        scanner.close();
    }
}




`,
          python: `def main():
    n, k, l, c, d, p, nl, np = map(int, input().split())
    
    total_drinks = k * l // nl
    total_limes = c * d
    total_salt = p // np
    
    result = min(total_drinks, total_limes, total_salt) // n
    
    print(result)

`,
        },
        timeComplexity: `The time complexity of the code is O(1), as it performs a constant number of arithmetic operations and comparisons regardless of the input size.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  