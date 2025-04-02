
const grasshopperArticle = {
    title: "Domino Piling",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    2 4
    3 3 

  Output:
    4
    4

    `,
    approaches: [
      {
        name: "Solution",
        description: `
Case 1: Either M or N is even (or both)
 
Without loss of generality, let the number of rows be even.
This means a column has an even number of squares. A column can be completely tiled up with 2x1 dominos. 
All columns can be similarly tiled.

This strategy covers all the squares on the board. Every two squares has one domino. So, the number of dominos is (MN/2).

Case 2: Both M and N are odd

Consider the board (M-1 x N), where M-1 is now even. This is reduced to our first case. Every square of this smaller board can be tiled.

There is 1xN board left i.e. One column with an odd number of squares.

The dominos tile N-1 continuous square.

So, we see that all squares except one is tiled. No of dominos = (MN - 1)/2.

Since MN is an odd number, it is floor(MN/2).

Floor(MN/2) is the answer to both cases. 
In the program we don't need to explicitly call floor because integer division will be performed by default.`,
       
codeSnippets: {
          cpp: `#include <iostream>

using namespace std;

int main()
{
    int M, N;
    cin >> M >> N;
    cout << M * N / 2 << endl;
    return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int M = scanner.nextInt();
        int N = scanner.nextInt();
        
        System.out.println(M * N / 2);
        
        scanner.close();
    }
}



`,
          python: `# Read input values
M, N = map(int, input().split())

# Calculate and print the result
print(M * N // 2)


`,
        },
        timeComplexity: `The time complexity of the given code is O(1). This is because the operations performed (input reading and arithmetic calculation) take a constant amount of time, regardless of the size of the input values M and N.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  