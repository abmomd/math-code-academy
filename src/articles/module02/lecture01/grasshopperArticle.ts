
const grasshopperArticle = {
    title: "Grasshopper on a Line",
    content: ``,
    example: `
  Input: 
    3
    10 2
    10 3
    3 4
 Output:
    2
    7 3
    1
    10 
    1
    3
    `,
    approaches: [
      {
        name: "Solution",
        description: `When x is not divisible by k , the grasshopper can reach x in just one jump.
Otherwise, you can show that two jumps are always enough. For example, jumps 1 and (x − 1). 1 is not divisible by any k > 1. 
Also, xand (x − 1) can't be divisible by any k>1at the same time.`,
        codeSnippets: {
          cpp: `#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t;
    while (t--) {
        int x, k;
        cin >> x >> k;
        if (x % k != 0) {
            cout << 1 << endl;
            cout << x << endl;
        } else {
            cout << 2 << endl;
            cout << 1 << " " << x - 1 << endl;
        }
    }
    return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int x = sc.nextInt();
            int k = sc.nextInt();
            if (x % k != 0) {
                System.out.println(1);
                System.out.println(x);
            } else {
                System.out.println(2);
                System.out.println("1 " + (x - 1));
            }
        }
        sc.close();
    }
}
`,
          python: `
for _ in range(int(input())):
	x, k = map(int, input().split())
	if x % k != 0:
		print(1)
		print(x)
	else:
		print(2)
		print(1, x - 1)`,
        },
        timeComplexity: `Time Complexity is O(t), where t is the number of test cases.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  