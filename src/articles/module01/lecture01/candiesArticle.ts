
const grasshopperArticle = {
    title: "Candies and Two Sisters",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    6
    7
    1
    2
    3
    2000000000
    763243547



    Output:
    3
    0
    0
    1
    999999999
    381621773



    `,
    approaches: [
      {
        name: "Solution",
        description: `
The answer is ⌊(n−1)/2⌋
, where ⌊x⌋
 is x
 rounded down.`,
       
codeSnippets: {
          cpp: `#include <bits/stdc++.h>

using namespace std;

int main() {
	
	int t;
	cin >> t;
	while (t--) {
		int n;
		cin >> n;
		cout << (n - 1) / 2 << endl;
	}
	
	return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int t = scanner.nextInt(); // Read number of test cases
        while (t-- > 0) {
            int n = scanner.nextInt(); // Read the integer n
            System.out.println((n - 1) / 2); // Output the result
        }
        
        scanner.close();
    }
}





`,
          python: `def main():
    t = int(input())  # Read number of test cases
    for _ in range(t):
        n = int(input())  # Read the integer n
        print((n - 1) // 2)  # Output the result




`,
        },
        timeComplexity: `The time complexity of the provided code is O(t), where t is the number of test cases.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  