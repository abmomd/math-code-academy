
const grasshopperArticle = {
    title: "Remove Smallest",
    content: "Pairs are used to store two values together...",
    example: `
Example 1:

    Input: 
   5
3
1 2 2
4
5 5 5 5
3
1 2 4
4
1 3 4 4
1
100



 

  Output:
  YES
YES
NO
NO
YES



    `,
    approaches: [
      {
        name: "Solution",
        description: `
Firstly, let's sort the initial array. Then it's obvious that the best way to remove elements is from smallest to biggest. And if there is at least one i
 such that 2≤i≤n
 and ai−ai−1>1
 then the answer is "NO", because we have no way to remove ai−1
. Otherwise, the answer is "YES".`,
       
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
  