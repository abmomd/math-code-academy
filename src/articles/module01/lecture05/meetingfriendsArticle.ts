
const grasshopperArticle = {
    title: "Meeting Friends",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
    7 1 4
    30 20 10


 

  Output:
  6
  20


    `,
    approaches: [
      {
        name: "Solution",
        description: `
To solve this problem you need to understand that friends must meet in the middle point of the given points, so friends who live in the leftmost and in the rightmost points must go to the middle point. Because of that the answer equals to max(x1, x2, x3) - min(x1, x2, x3).  `,     
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
  