
const grasshopperArticle = {
    title: "A+B Again?",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
   8
   77
   21
   40
   34
   19
   84
   10
   99
 

  Output:
    14
    3
    4
    7
    10
    12
    1
    18


    `,
    approaches: [
      {
        name: "Solution",
        description: `
You can take the input as a string and output the sum of the two characters in the string.

There is also a formula: ⌊n/10⌋+nmod10
. The first term is the tens digit, the second term — the ones digit.`,
       
codeSnippets: {
          cpp: `#include <bits/stdc++.h>

using namespace std;

void solve() {
	int n;
	cin >> n;
	cout << (n / 10) + (n % 10) << '\n';	
}

int main() {
	int tt; cin >> tt; for (int i = 1; i <= tt; i++) {solve();}
	// solve();
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int tt = scanner.nextInt(); // Number of test cases
        for (int i = 0; i < tt; i++) {
            solve(scanner);
        }
        scanner.close();
    }

    private static void solve(Scanner scanner) {
        int n = scanner.nextInt();
        System.out.println((n / 10) + (n % 10)); // Sum of digits
    }
}




`,
          python: `def solve():
    n = int(input())
    print((n // 10) + (n % 10))  # Sum of digits

if __name__ == "__main__":
    tt = int(input())  # Number of test cases
    for _ in range(tt):
        solve()


`,
        },
        timeComplexity: `The time complexity of the provided code is O(t), where t is the number of test cases.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  