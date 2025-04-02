
const grasshopperArticle = {
    title: "Divisibility Problem",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    5
    10 4
    13 9
    100 13
    123 456
    92 46


  Output:
    2
    5
    4
    333
    0


    `,
    approaches: [
      {
        name: "Solution",
        description: `
If a%b=0
 (a
 is divisible by b
), just print 0
. Otherwise, we need exactly b−a%b
 moves to make zero remainder of a
 modulo b
. %
 is modulo operation.`,
       
codeSnippets: {
          cpp: `#include <bits/stdc++.h>

using namespace std;

int main() {
	int t;
	cin >> t;
	while (t--) {
		int a, b;
		cin >> a >> b;
		if (a % b == 0) cout << 0 << endl;
		else cout << b - a % b << endl;
	}
	
	return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        
        while (t-- > 0) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            if (a % b == 0) {
                System.out.println(0);
            } else {
                System.out.println(b - a % b);
            }
        }
        
        scanner.close();
    }
}




`,
          python: `def main():
    t = int(input())
    
    for _ in range(t):
        a, b = map(int, input().split())
        if a % b == 0:
            print(0)
        else:
            print(b - a % b)




`,
        },
        timeComplexity: `The time complexity of the given code is O(t), where 
t is the number of test cases.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  