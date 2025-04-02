
const grasshopperArticle = {
    title: "Buy a Shovel",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    117 3
    237 7
    15 2


 

  Output:
   9
   1
   2


    `,
    approaches: [
      {
        name: "Solution",
        description: `
In this problem we have to find the minimal possible value of x such that k·x mod 10 = 0 or k·x mod 10 = r. It's easy to see that this x always exists and it is not greater than 10 (because k·10 mod 10 = 0). Let's iterate on x, and if its current value satisfies any of the requirements, we print the answer.`,
       
codeSnippets: {
          cpp: `#include <iostream>
using namespace std;

int main() {
	int value=0 ;
	long long priceMade=0;
int k,r;
cin>>k>>r;
bool flag=1;
while(flag){
	if((priceMade%10==0&&priceMade!=0)||priceMade%10==r){
	 break;

}
	++value;
priceMade+=k;
}

cout<<value;

	return 0;
}
`,
          java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int k = scanner.nextInt();
        int r = scanner.nextInt();
        
        int value = 0;
        long priceMade = 0;
        boolean flag = true;

        while (flag) {
            if ((priceMade % 10 == 0 && priceMade != 0) || priceMade % 10 == r) {
                break;
            }
            value++;
            priceMade += k;
        }

        System.out.println(value);
        scanner.close();
    }
}



`,
          python: `k, r = map(int, input().split())

value = 0
price_made = 0

while True:
    if (price_made % 10 == 0 and price_made != 0) or (price_made % 10 == r):
        break
    value += 1
    price_made += k

print(value)


`,
        },
        timeComplexity: `The time complexity of the given code is O(k) because the loop increments priceMade by k in each iteration, and the loop runs until a condition involving the remainder of priceMade modulo 10 is satisfied.`,
      },
     
    ],
  };
  
  export default grasshopperArticle;
  