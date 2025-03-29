
const grasshopperArticle = {
    title: "Mocha and Math",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
   4
   2
   1 2
   3
   1 1 3
   4
   3 11 3 7
   5
   11 7 15 3 7



  Output:
   0
   1
   3
   3


    `,
    approaches: [
      {
        name: "Solution",
        description: `We assume the answer is x
. In its binary representation, one bit will be 1
 only if in all the Ai
's binary representation,this bit is 1
. Otherwise, we can use one operation to make this bit in x
 become 0, which is a smaller answer.

So we can set x=A1
 initially. Then we iterate over the sequence and make x=x&Ai
, the x
 is the anwser finally.
.`,
        codeSnippets: {
          cpp: `#include <iostream>
#include <vector>
using namespace std;

void solve() {
    long long n;
    cin >> n;
    vector<long long> arr(n);

    for (long long &x : arr) {
        cin >> x;
    }

    long long ans = arr[0];
    for (long long i = 1; i < n; i++) {
        ans &= arr[i]; // Bitwise AND operation
    }

    cout << ans << '\n';
}

int main() {
    
    long long T;
    cin >> T;
    while (T--) {
        solve();
    }

    return 0;
}


`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        long T = scanner.nextLong(); // Number of test cases
        while (T-- > 0) {
            solve(scanner);
        }
        
        scanner.close();
    }

    private static void solve(Scanner scanner) {
        long n = scanner.nextLong(); // Size of the array
        long[] arr = new long[(int) n];

        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextLong(); // Input array elements
        }

        long ans = arr[0];
        for (int i = 1; i < n; i++) {
            ans &= arr[i]; // Bitwise AND operation
        }

        System.out.println(ans); // Output the result
    }
}


`,
          python: `def solve():
    n = int(input())  # Size of the array
    arr = list(map(int, input().split()))  # Input array elements

    ans = arr[0]
    for i in range(1, n):
        ans &= arr[i]  # Bitwise AND operation

    print(ans)  # Output the result
`,
        },
        timeComplexity: `The time complexity of the provided code is O(n) for each test case, where n is the number of elements in the array. This is because the algorithm iterates through the array twice: once to read the input and once to compute the bitwise AND of all elements.
`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  