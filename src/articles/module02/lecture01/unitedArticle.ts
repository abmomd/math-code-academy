
const grasshopperArticle = {
    title: "United We Stand",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    5
    3
    2 2 2
    5
    1 2 3 4 5
    3
    1 3 5
    7
    1 7 7 2 9 1 4
    5
    4 8 12 12 4



  Output:
    -1
    3 2
    1 3 5 
    2 4 
    1 2
    1 
    3 5 
    2 5
    1 1 
    2 4 7 7 9 
    3 2
    4 8 4 
    12 12 


    `,
    approaches: [
      {
        name: "Solution",
        description: `First, if all numbers are equal, then there is no answer (since a
 is divisible by a
, if both arrays are non-empty, then c1
 is a divisor of b1
).

Second, if a
 is divisible by b
 and they are both natural numbers, then the following equality holds: b≤a
 (by definition, if a
 is divisible by b
, then a
 can be represented as kb˙
, where k
 is a natural number).

Now we can place all instances of the smallest number into b
, and all other numbers into c
. It can be seen that such a construction always gives a valid answer.
`,
        codeSnippets: {
          cpp: `#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
 
void solve() {
	int n = 0; cin >> n; 
	vector<int> inp; inp.assign(n, 0);
	for (auto& x : inp) cin >> x;
	sort(inp.begin(), inp.end());
	if (inp.back() == inp[0]) {
		cout << "-1\n";
		return;
	}
	else {
		int it = 0;
		while (inp[it] == inp[0]) it++;
		cout << it << " " << n - it << "\n";
		for (int j = 0; j < it; ++j) cout << inp[j] << " ";
		for (int j = it; j < n; ++j) cout << inp[j] << " ";
	}
}
 
int main() {
	int t = 0; cin >> t;
	while (t--) solve();
	return 0;
}

`,
          java: `import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void solve() {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] inp = new int[n];
        
        for (int i = 0; i < n; i++) {
            inp[i] = scanner.nextInt();
        }
        
        Arrays.sort(inp);
        
        if (inp[inp.length - 1] == inp[0]) {
            System.out.println("-1");
            return;
        } else {
            int it = 0;
            while (it < n && inp[it] == inp[0]) it++;
            System.out.println(it + " " + (n - it));
            
            for (int j = 0; j < it; j++) {
                System.out.print(inp[j] + " ");
            }
            for (int j = it; j < n; j++) {
                System.out.print(inp[j] + " ");
            }
            System.out.println(); // To move to the next line after printing all elements
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        while (t-- > 0) {
            solve();
        }
    }
}


`,
          python: `
          
    def solve():
    n = int(input())
    inp = list(map(int, input().split()))
    
    inp.sort()
    
    if inp[-1] == inp[0]:
        print("-1")
        return
    else:
        it = 0
        while it < n and inp[it] == inp[0]:
            it += 1
        print(it, n - it)
        
        for j in range(it):
            print(inp[j], end=" ")
        for j in range(it, n):
            print(inp[j], end=" ")
        print()  # To move to the next line after printing all elements

`,
        },
        timeComplexity: `The time complexity of the provided code is O(n log n) due to the sorting operation, where n is the number of elements in the input array. The subsequent operations, including counting and printing elements, run in O(n), making the overall complexity dominated by the sorting step.
.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  