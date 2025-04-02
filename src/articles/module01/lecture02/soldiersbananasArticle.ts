
const grasshopperArticle = {
    title: "Soldiers and Bananas",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
   3 17 4

 

  Output:
   13


    `,
    approaches: [
      {
        name: "Solution",
        description: `
We can easily calculate the sum of money that we need to buy all the bananas that we want, let's name it x.

If n > = x the answer is 0, because we don't need to borrow anything.

Otherwise the answer is x - n.`,
       
codeSnippets: {
          cpp: `#include <iostream>
#include <cstdio>
#include <string>
#include <string.h>
#include <cmath>

using namespace std;

int main() {
	int i, n, t, k, w;
	long long sum=0;

	cin>> k>>n>>w;
	for(i=1; i<=w; i++){
		sum = sum+(i*k);
	}
	if(sum<= n){
		cout <<0<<"\n";
	}
	else cout << sum - n << "\n";

	return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int k = scanner.nextInt();
        int n = scanner.nextInt();
        int w = scanner.nextInt();
        
        long sum = 0;
        for (int i = 1; i <= w; i++) {
            sum += (i * k);
        }
        
        if (sum <= n) {
            System.out.println(0);
        } else {
            System.out.println(sum - n);
        }
        
        scanner.close();
    }
}




`,
          python: `ddef main():
    k, n, w = map(int, input().split())
    
    total_cost = sum(i * k for i in range(1, w + 1))
    
    if total_cost <= n:
        print(0)
    else:
        print(total_cost - n)


`,
        },
        timeComplexity: `The time complexity of the provided code is O(w), where w is the number of bananas to be purchased.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  