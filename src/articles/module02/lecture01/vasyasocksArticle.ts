
const grasshopperArticle = {
    title: "Vasya and Socks",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    9 3
    2 2

  Output:
    3
    13

    `,
    approaches: [
      {
        name: "Solution",
        description: `At this problem you need to model what written in statements. Also, it can be proved, that answer can be calculated using formula: n+⌊(n-1)/(m-1)⌋ , where ⌊ x⌋ is the integer part of x.`,
        codeSnippets: {
          cpp: `#include <iostream>
using namespace std;

int main() {
	int n,m;
	cin>>n>>m;
	int resuult=(n-1)/(m-1);
	cout<<n+resuult;




	return 0;
}

`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        
        int result = (n - 1) / (m - 1);
        System.out.println(n + result);
        
        scanner.close();
    }
}

`,
          python: `def main():
    n, m = map(int, input().split())
    
    result = (n - 1) // (m - 1)
    print(n + result)

`,
        },
        timeComplexity: `The time complexity of the code is O(1) because it performs a fixed number of operations: reading input, basic arithmetic calculations, and printing the result. `,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  