
const grasshopperArticle = {
    title: "Rudolph and Cut the Rope",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    1
    3
    4 3
    3 1
    1 2

  Output:
    2

Example 2: 

    Input: 
    1
    5
    11 7
    5 10
    12 9
    3 2
    5

  Output:
    3



    `,
    approaches: [
      {
        name: "Solution",
        description: `In order for the candy to be on the ground, it is necessary that all the ropes touch the ground. This means 
        that the length of all ropes must be greater than or equal to the height of the nails to which they are attached. That is, 
        you need to cut all the ropes, the length of which is less than the height of their nail. Then the answer is equal to the number of 
        elements that have Ai > Bi where i is ith nail and rope length.`,
        codeSnippets: {
          cpp: `#include <iostream>

using namespace std;


int main() {
	int test_cases;
	cin >> test_cases;

	for (int test_case = 0; test_case < test_cases; test_case++) {
		int n;
		cin >> n;
		int ans = 0;
		for (int i = 0; i < n; i++) {
			int a, b;
			cin >> a >> b;
			if (a > b)
				ans++;
		}
		cout << ans << endl;
	}

	return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCases = sc.nextInt();
        
        for (int t = 0; t < testCases; t++) {
            int n = sc.nextInt();
            int ans = 0;
            for (int i = 0; i < n; i++) {
                int a = sc.nextInt(), b = sc.nextInt();
                if (a > b)
                    ans++;
            }
            System.out.println(ans);
        }
        sc.close();
    }
}

`,
          python: `t = int(input())

for _ in range(t):
    n = int(input())
    ans = 0
    for _ in range(n):
        a, b = map(int, input().split())
        if a > b:
            ans += 1
    print(ans)
`,
        },
        timeComplexity: `Time Complexity Explanation:
Each test case runs O(n) iterations, leading to an overall complexity of O(t * n).

Since input handling and comparisons are O(1) per iteration, the total complexity remains O(t * n).`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  