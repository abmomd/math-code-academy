
const grasshopperArticle = {
    title: "Maximum Multiple Sum",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
   2
   3
   15


 

  Output:
   3
   2



    `,
    approaches: [
      {
        name: "Solution",
        description: `
To maximize the number of multiples of x
 less than n
, it optimal to choose a small x
, in this case, 2
. The only exception is n=3
, where it is optimal to choose 3
 instead, since both 2
 and 3
 have only one multiple less than  3.`,
       
codeSnippets: {
          cpp: `#include <bits/stdc++.h>
using namespace std;

int main(){
	int t; cin >> t;
	while(t--){
		int n; cin >> n;
		cout << (n == 3 ? 3 : 2) << endl;
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
            System.out.println(n == 3 ? 3 : 2);
        }
        
        scanner.close();
    }
}


`,
          python: `def main():
    t = int(input())
    for _ in range(t):
        n = int(input())
        print(3 if n == 3 else 2)





`,
        },
        timeComplexity: `The time complexity of the code is O(t), where t is the number of test cases.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  